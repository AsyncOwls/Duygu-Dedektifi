import React from 'react';
import { GROUPS } from '../data/emotions';
import { WORD_POOLS } from '../data/words';
import { IS_IOS } from '../data/players';
import { STRINGS } from '../data/strings';
import { WordCard, TurnHeader } from '../components/shared';

/* ─── TURN SCREEN ───────────────────────────────────────────────
   Duygu + 3 destek kelimesi tek ekranda. Telefon sallanınca (veya
   dokununca) rastgele bir duygu ve ona uygun 3 kelime çekilir. */

var ALL_EMOTIONS = GROUPS.flatMap(g => g.emotions.map(e => ({ emotion: e, group: g })));

// Hareket izni — bir kez verilince oturum boyu hatırlanır (TurnScreen her turda remount olur).
var MOTION_NEEDS_PERMISSION = typeof DeviceMotionEvent !== 'undefined'
  && typeof DeviceMotionEvent.requestPermission === 'function';
var motionGranted = !MOTION_NEEDS_PERMISSION; // Android/masaüstü: izne gerek yok

// iOS 13+ izin akışı — mutlaka bir kullanıcı hareketinden (tap) çağrılmalı.
// Hem hareket (Android sallama) hem yönelim (iOS döndürme) izni istenir.
export function ensureMotionPermission() {
  if (motionGranted) return Promise.resolve(true);
  var reqs = [];
  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function')
    reqs.push(DeviceMotionEvent.requestPermission().catch(() => 'denied'));
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function')
    reqs.push(DeviceOrientationEvent.requestPermission().catch(() => 'denied'));
  if (!reqs.length) { motionGranted = true; return Promise.resolve(true); }
  return Promise.all(reqs)
    .then(res => { motionGranted = res.some(r => r === 'granted'); return motionGranted; })
    .catch(() => false);
}

// iOS haptik hile'si: <input type="checkbox" switch> toggle'ı sistem haptiği verir (iOS 17.4+).
var _hapticSwitch = null;
function iosHaptic() {
  try {
    if (!_hapticSwitch) {
      var label = document.createElement('label');
      label.setAttribute('aria-hidden', 'true');
      label.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
      var inp = document.createElement('input');
      inp.type = 'checkbox';
      inp.setAttribute('switch', '');
      label.appendChild(inp);
      document.body.appendChild(label);
      _hapticSwitch = inp;
    }
    _hapticSwitch.click(); // toggle → haptik
  } catch (e) {}
}

// Titreşim — Android: Vibration API; iOS: switch haptik hile'si.
function haptic(pattern) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(pattern); } catch (e) {}
  }
  if (IS_IOS) iosHaptic();
}

// Rastgele bir duygu seç (opsiyonel olarak bir duyguyu hariç tutar).
function pickEmotion(excludeEmotion) {
  let avail = ALL_EMOTIONS.filter(it => it.emotion !== excludeEmotion);
  if (!avail.length) avail = ALL_EMOTIONS;
  return avail[Math.floor(Math.random() * avail.length)];
}

// Ağırlıklı rastgele seçim: "orta" zorluk kelimeler 3x şansla seçilir,
// böylece turların çoğu ne çok kolay ne çok zor kelimelerden oluşur.
function weightedTake(pool) {
  const weights = pool.map(w => w.difficulty === 2 ? 3 : 1);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < pool.length; i++) {
    if (r < weights[i]) return i;
    r -= weights[i];
  }
  return pool.length - 1;
}

// Bir duygu grubuna uygun, oyunda mümkünse hiç çıkmamış 3 kelime seç.
// Sonuçta en fazla 1 kolay + en fazla 1 zor kelime bulunur (dolayısıyla
// her zaman en az 1 orta zorluk kelime vardır) — set ne tamamen kolay
// ne tamamen zor olur.
function pickWordsForGroup(groupKey, usedWords, excludeWords) {
  const pool = WORD_POOLS[groupKey] || [];
  const exclude = excludeWords || [];
  let avail = pool.filter(w => usedWords.indexOf(w.word) === -1 && exclude.indexOf(w.word) === -1);
  if (avail.length < 3) avail = pool.filter(w => exclude.indexOf(w.word) === -1);
  if (avail.length < 3) avail = pool.slice();

  let remaining = avail.slice();
  const picked = [];
  for (let i = 0; i < 3 && remaining.length; i++) {
    const idx = weightedTake(remaining);
    picked.push(remaining[idx]);
    remaining.splice(idx, 1);
  }

  [1, 3].forEach(extremeDifficulty => {
    let seen = 0;
    for (let i = 0; i < picked.length; i++) {
      if (picked[i].difficulty !== extremeDifficulty) continue;
      seen++;
      if (seen <= 1) continue;
      const mediumCandidates = avail.filter(w => w.difficulty === 2 && picked.indexOf(w) === -1);
      if (!mediumCandidates.length) continue;
      picked[i] = mediumCandidates[Math.floor(Math.random() * mediumCandidates.length)];
    }
  });

  return picked.map(w => w.word);
}

// Arka planda süzülen 7 duygu rengi baloncuğu
var SHAKE_BUBBLES = [
  { c:'#FF6B7A', x:'10%', y:'16%', s:58, d:'0s',   dur:'4.6s' },
  { c:'#FF8C42', x:'80%', y:'12%', s:42, d:'0.7s', dur:'5.3s' },
  { c:'#FFC93C', x:'86%', y:'58%', s:64, d:'1.2s', dur:'4.9s' },
  { c:'#2ED573', x:'6%',  y:'62%', s:48, d:'0.4s', dur:'5.7s' },
  { c:'#2E9CFF', x:'18%', y:'86%', s:38, d:'1.0s', dur:'4.3s' },
  { c:'#B14AED', x:'74%', y:'84%', s:52, d:'1.5s', dur:'5.1s' },
];

// Süzülen renk çemberleri — hem salla ekranı hem kart arka planı için (zIndex:0).
function FloatingBubbles() {
  return (
    <React.Fragment>
      {SHAKE_BUBBLES.map((b, i) => (
        <span key={i} style={{
          position:'absolute', left:b.x, top:b.y, width:b.s, height:b.s,
          borderRadius:'50%', background:b.c, opacity:0.15, filter:'blur(1px)',
          pointerEvents:'none', zIndex:0,
          animation:`float-y ${b.dur} ease-in-out ${b.d} infinite`,
        }}/>
      ))}
    </React.Fragment>
  );
}

function ShakePrompt({ playerGrad, playerAnimal, onDraw }) {
  const [pressed, setPressed] = React.useState(false);
  const grad = playerGrad || 'linear-gradient(135deg,#B14AED,#3D5AFE)';
  return (
    <div
      onClick={onDraw}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        position:'relative', flex:1, width:'100%', overflow:'hidden',
        cursor:'pointer', userSelect:'none',
        display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
        gap:'clamp(8px,2.5vw,16px)',
      }}
    >
      {/* Süzülen renk çemberleri */}
      <FloatingBubbles />

      {/* Kahraman: oynayan telefon + genişleyen halkalar */}
      <div style={{
        position:'relative', display:'flex', alignItems:'center', justifyContent:'center',
        width:'clamp(150px,42vw,180px)', height:'clamp(150px,42vw,180px)',
        transform: pressed ? 'scale(0.92)' : 'scale(1)', transition:'transform 0.2s cubic-bezier(0.2,0.8,0.2,1)',
        zIndex:1,
      }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            position:'absolute', width:'100%', height:'100%', borderRadius:'50%',
            border:'2px solid rgba(120,120,140,0.18)',
            animation:`pulse-ring 2.4s ease-out ${i*0.8}s infinite`,
            pointerEvents:'none',
          }}/>
        ))}
        <div style={{
          width:'clamp(116px,32vw,140px)', height:'clamp(116px,32vw,140px)',
          borderRadius:'50%', background:grad,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 22px 50px -12px rgba(0,0,0,0.34)',
          animation: pressed ? 'none' : (IS_IOS ? 'twist 2s ease-in-out infinite' : 'shake-wiggle 1.5s ease-in-out infinite'),
        }}>
          <span style={{ fontSize:'clamp(50px,14vw,64px)', lineHeight:1, filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.25))' }}>📱</span>
        </div>
      </div>

      {/* Başlık: gökkuşağı */}
      <div style={{ textAlign:'center', padding:'0 20px', zIndex:1, animation:'pop-in 0.5s cubic-bezier(0.2,0.8,0.2,1) both' }}>
        <div style={{
          fontWeight:900, fontSize:'clamp(28px,8.5vw,42px)', lineHeight:1.05, letterSpacing:'-0.025em',
          background:'linear-gradient(120deg,#FF6B7A,#FF8C42,#FFC93C,#2ED573,#2E9CFF,#B14AED)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
        }}>{IS_IOS ? STRINGS.turn.rotateTitle : STRINGS.turn.shakeTitle}</div>
        <div style={{ fontSize:'clamp(13px,3.8vw,15px)', color:'#8A8A8A', marginTop:10, fontWeight:700 }}>
          {STRINGS.turn.shakeSub}
        </div>
      </div>

      {/* Dokun ipucu — zıplayan hap (her iki platformda yedek) */}
      <div style={{
        marginTop:'clamp(4px,1.5vw,10px)', zIndex:1,
        display:'inline-flex', alignItems:'center', gap:9,
        background:'#fff', borderRadius:100, padding:'13px 24px',
        boxShadow:'0 10px 26px -8px rgba(0,0,0,0.2)',
        animation:'bob 1.9s ease-in-out infinite',
      }}>
        <span style={{ fontSize:19, lineHeight:1 }}>👆</span>
        <span style={{ fontWeight:800, fontSize:'clamp(14px,4vw,16px)', color:'#1A1A1A', letterSpacing:'0.01em' }}>
          {STRINGS.turn.shakeTap}
        </span>
      </div>
    </div>
  );
}

export function TurnScreen({ playerName, playerGrad, playerAnimal, initialIsYouth, allowAgeSwitch, onEmotionDrawn, onTurnEnd, onWordsUsed, usedWords, onListOpen, onScoreOpen, onHome, timerDuration, vibrationEnabled, settings, onSettingsChange, groupName }) {
  /* ── Durum ── */
  const [isYouth, setIsYouth] = React.useState(!!initialIsYouth);
  const [phase, setPhase] = React.useState('idle'); // 'idle' | 'revealed'
  const [words, setWords] = React.useState(null);   // [kelime1, kelime2, kelime3]
  const [emo, setEmo] = React.useState(null);        // { emotion, group }
  const [animKey, setAnimKey] = React.useState(0);
  const [timeUp, setTimeUp] = React.useState(false);
  const emotion = emo && emo.emotion;
  const group = emo && emo.group;

  /* ── Sayaç ── */
  const TOTAL = [60, 90, 120].includes(timerDuration) ? timerDuration : 90;
  const [started, setStarted] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(TOTAL);
  const [ended, setEnded] = React.useState(false);
  const [countdown, setCountdown] = React.useState(0); // 3-2-1 geri sayım (0 = bitti)

  /* ── 3-2-1 geri sayım: bitince sayaç otomatik başlar ── */
  React.useEffect(() => {
    if (phase !== 'revealed' || started) return;
    if (countdown <= 0) { setStarted(true); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown, started]);

  function finishTurn() {
    if (words) onWordsUsed(words);
    setTimeUp(true);
    if (vibrationEnabled !== false) haptic([80, 60, 100, 60, 150]);
  }

  React.useEffect(() => {
    if (!started || ended) return;
    if (timeLeft <= 0) { setEnded(true); finishTurn(); return; }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, timeLeft, ended]);

  function handleEnd() {
    if (ended) return;
    setEnded(true);
    finishTurn();
  }

  /* ── Çekme: rastgele bir duygu + ona uygun grup içinden 3 kelime ── */
  function drawNew() {
    const e = pickEmotion(null);
    const w = pickWordsForGroup(e.group.key, usedWords, null);
    setEmo(e); setWords(w);
    onEmotionDrawn({ emotion: e.emotion, group: e.group });
    setAnimKey(k => k + 1);
    setPhase('revealed');
    setStarted(false); setTimeLeft(TOTAL); setEnded(false); setCountdown(3);
    if (vibrationEnabled !== false) haptic([0, 45, 30, 60]);
  }

  /* ── Yeni tur: "Telefonu Döndür/Salla" ekranına geri dön ── */
  function backToIdle() {
    setPhase('idle');
    setWords(null); setEmo(null);
    setStarted(false); setTimeLeft(TOTAL); setEnded(false); setCountdown(0);
  }

  /* ── Header geri tuşu: kart açıkken yeni tur gibi davranır ── */
  function handleBack() {
    if (phase === 'revealed') backToIdle();
    else onHome();
  }

  /* ── Kelimeleri değiştir: duygu sabit kalır, aynı gruptan yeni 3 kelime çekilir ── */
  function changeWords() {
    if (!emo) return;
    setWords(pickWordsForGroup(group.key, usedWords, words));
    setAnimKey(k => k + 1);
    if (vibrationEnabled !== false) haptic(25);
  }

  /* ── Duyguyu değiştir: tamamen yeni bir duygu + ona uygun 3 kelime çekilir ── */
  function changeEmotion() {
    if (!emo) return;
    const e = pickEmotion(emotion);
    setEmo(e);
    setWords(pickWordsForGroup(e.group.key, usedWords, null));
    onEmotionDrawn({ emotion: e.emotion, group: e.group });
    if (vibrationEnabled !== false) haptic(25);
  }

  /* ── Yaş geçişi: kart görünümünü (açık/koyu) değiştirir ── */
  function handleAge(v) {
    setIsYouth(v);
    if (phase === 'revealed') setAnimKey(k => k + 1);
  }

  /* ── Sallama algılama ── */
  const [motionEnabled, setMotionEnabled] = React.useState(motionGranted);

  // İzin daha önce verilmemişse, oyuncuya dokunulduğunda (app.js) verilmiş olabilir.
  React.useEffect(() => {
    if (!motionEnabled && motionGranted) setMotionEnabled(true);
  }, []);

  // Sallama; sayaç başlamadıysa yeniden çek.
  const shakeRef = React.useRef();
  shakeRef.current = () => { if (!started) drawNew(); };

  React.useEffect(() => {
    if (!motionEnabled) return;

    if (IS_IOS) {
      // iOS: telefonu döndür/eğ — deviceorientation (geri-al kutusunu tetiklemez).
      let lastTime = 0, lb = null, lg = null;
      function onOrient(e) {
        if (e.beta == null && e.gamma == null) return;
        const b = e.beta || 0, g = e.gamma || 0;
        const now = Date.now();
        if (lb !== null) {
          const delta = Math.abs(b - lb) + Math.abs(g - lg);
          if (delta > 22 && now - lastTime > 900) {
            lastTime = now;
            shakeRef.current();
          }
        }
        lb = b; lg = g;
      }
      window.addEventListener('deviceorientation', onOrient);
      return () => window.removeEventListener('deviceorientation', onOrient);
    }

    // Android/masaüstü: salla — devicemotion.
    let lastTime = 0, lx = null, ly = null, lz = null;
    function onMotion(e) {
      const a = e.accelerationIncludingGravity || e.acceleration;
      if (!a || a.x == null) return;
      const now = Date.now();
      if (lx !== null) {
        const delta = Math.abs(a.x - lx) + Math.abs(a.y - ly) + Math.abs(a.z - lz);
        if (delta > 20 && now - lastTime > 800) {
          lastTime = now;
          shakeRef.current();
        }
      }
      lx = a.x; ly = a.y; lz = a.z;
    }
    window.addEventListener('devicemotion', onMotion);
    return () => window.removeEventListener('devicemotion', onMotion);
  }, [motionEnabled]);

  function handlePromptDraw() {
    // iOS izni daha alınmadıysa bu dokunuşta al (gerçek bir kullanıcı hareketi).
    if (!motionEnabled) {
      ensureMotionPermission().then(ok => { if (ok) setMotionEnabled(true); });
    }
    drawNew();
  }

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;
  const isUrgent = timeLeft <= 10;
  const progress = timeLeft / TOTAL;
  const cardW = 'min(280px, 72vw)';

  // Geri sayım örtüsü, seçilen duygunun renginde
  const overlayColor = (group && (group.grad.match(/#[0-9A-Fa-f]{6}/) || [])[0]) || '#FAF7F2';

  return (
    <div style={{ position:'relative', display:'flex', flexDirection:'column', flex:1, background:'#FAF7F2' }}>
      <TurnHeader
        playerName={playerName}
        playerGrad={playerGrad}
        playerAnimal={playerAnimal}
        groupName={groupName}
        onScoreOpen={onScoreOpen}
        onListOpen={onListOpen}
        onHome={handleBack}
      />

      {phase === 'idle' ? (
        <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'clamp(8px,3vw,20px) clamp(16px,4vw,24px) calc(env(safe-area-inset-bottom,0px) + 20px)' }}>
          <ShakePrompt playerGrad={playerGrad} playerAnimal={playerAnimal} onDraw={handlePromptDraw} />
        </div>
      ) : (
        <React.Fragment>
          <div style={{ flex:1, position:'relative', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'clamp(10px,3vw,16px) clamp(16px,5vw,24px)', gap:'clamp(10px,2.5vw,14px)', overflow:'hidden' }}>
            <FloatingBubbles />
            <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'clamp(10px,2.5vw,14px)' }}>
              <WordCard words={words} animKey={animKey} displayNum={Math.floor(usedWords.length / 3) + 1} onChangeWords={changeWords} onChangeEmotion={changeEmotion} group={group} dark={isYouth} emotion={emotion} />
            </div>
          </div>

          <div style={{
            padding:'12px clamp(16px,5vw,24px) calc(env(safe-area-inset-bottom,0px) + 16px)',
            display:'flex', alignItems:'center', justifyContent:'center',
            borderTop:'1px solid rgba(0,0,0,0.06)', background:'#FAF7F2', flexShrink:0,
          }}>
            <div style={{ width:cardW, height:52, display:'flex', gap:10 }}>
              <div style={{
                flex:1, height:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:10,
                background: isUrgent ? 'linear-gradient(135deg,#FF3B30,#FF6B35)' : (group ? group.grad : '#1A1A1A'),
                borderRadius:100,
                transition:'background 0.6s',
                boxShadow: isUrgent ? '0 6px 18px -4px rgba(255,59,48,0.55)' : `0 6px 20px -6px ${overlayColor}99`,
              }}>
                <span style={{ fontSize:22, lineHeight:1 }}>⏳</span>
                <span style={{
                  fontFamily:'Nunito', fontWeight:900, fontSize:20, letterSpacing:'-0.01em',
                  color:'#fff', fontVariantNumeric:'tabular-nums',
                }}>{timeStr}</span>
              </div>
              <button
                onClick={handleEnd}
                style={{
                  height:'100%', flexShrink:0, padding:'0 22px',
                  display:'flex', alignItems:'center', justifyContent:'center', gap:7,
                  background:'#fff', color:'#1A1A1A',
                  border:'1px solid rgba(0,0,0,0.08)', borderRadius:100, cursor:'pointer',
                  fontFamily:'Nunito', fontWeight:900, fontSize:15, letterSpacing:'-0.01em',
                  boxShadow:'0 6px 18px -8px rgba(0,0,0,0.25)',
                }}
              >
                <span style={{ fontSize:16, lineHeight:1 }}>✓</span>
                {STRINGS.turn.finishBtn}
              </button>
            </div>
          </div>
        </React.Fragment>
      )}

      {/* Süre doldu örtüsü */}
      {phase === 'revealed' && timeUp && (
        <div style={{
          position:'absolute', inset:0, zIndex:20,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:28,
          background: overlayColor + 'D9', backdropFilter:'blur(4px)', WebkitBackdropFilter:'blur(4px)',
          pointerEvents:'auto',
        }}>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14 }}>
            <span style={{ fontSize:80, lineHeight:1, animation:'count-pump 0.6s cubic-bezier(0.2,0.8,0.2,1) both' }}>⏳</span>
            <span style={{
              fontFamily:'Nunito', fontWeight:900, fontSize:'clamp(30px,9vw,44px)',
              color:'#fff', letterSpacing:'-0.02em',
              textShadow:'0 4px 20px rgba(0,0,0,0.25)',
              animation:'pop-in 0.5s cubic-bezier(0.2,0.8,0.2,1) both',
            }}>Süre Doldu!</span>
          </div>
          <button
            onClick={onTurnEnd}
            style={{
              fontFamily:'Nunito', fontWeight:900, fontSize:16, letterSpacing:'0.04em',
              padding:'16px 52px', borderRadius:100,
              background:'#fff', color:'#1A1A1A',
              border:'none', cursor:'pointer',
              boxShadow:'0 12px 32px -8px rgba(0,0,0,0.28)',
              animation:'pop-in 0.5s 0.15s cubic-bezier(0.2,0.8,0.2,1) both',
            }}
          >Tahminleri Al →</button>
        </div>
      )}

      {/* 3-2-1 geri sayım — tüm ekranın üzerinde, seçilen duygunun renginde örtü */}
      {phase === 'revealed' && countdown > 0 && (
        <div style={{
          position:'absolute', inset:0, zIndex:20,
          display:'flex', alignItems:'center', justifyContent:'center',
          background: overlayColor + 'D9', backdropFilter:'blur(4px)', WebkitBackdropFilter:'blur(4px)',
          pointerEvents:'auto',
        }}>
          <div key={countdown} style={{
            position:'relative', display:'flex', alignItems:'center', justifyContent:'center',
            width:'clamp(200px,62vw,300px)', height:'clamp(200px,62vw,300px)',
          }}>
            {/* dairesel pump halkaları */}
            {[0, 0.25].map((d, i) => (
              <span key={i} style={{
                position:'absolute', width:'100%', height:'100%', borderRadius:'50%',
                border:'4px solid rgba(255,255,255,0.7)',
                animation:`count-ring 1s ease-out ${d}s both`,
              }}/>
            ))}
            <span style={{
              fontFamily:'Nunito', fontWeight:900, lineHeight:1, color:'#fff',
              fontSize:'clamp(120px,40vw,200px)',
              textShadow:'0 8px 30px rgba(0,0,0,0.25)',
              animation:'count-pump 0.6s cubic-bezier(0.2,0.8,0.2,1) both',
            }}>{countdown}</span>
          </div>
        </div>
      )}

    </div>
  );
}
