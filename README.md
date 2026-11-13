# Duygu Dedektifi

Bir grup oyunu: oyuncu rastgele bir duygu ve rastgele bir sahne kartı çeker,
sahneyi duygunun üzerine giydirir, diğerleri duyguyu tahmin eder.

## Klasör Yapısı

```
├── index.html               # Vite giriş sayfası (global stiller + #root)
├── src/
│   ├── main.jsx             # React'i başlatır, Nunito fontunu yükler
│   ├── App.jsx              # Ekran akışı, ayarlar, oturum kaydı
│   ├── components/shared.jsx
│   ├── screens/             # Her ekran ayrı .jsx
│   └── data/                # Duygular, sahneler, oyuncular, metinler
├── ios/ · android/          # Capacitor native projeleri
├── capacitor.config.json
└── vite.config.js
```

## Komutlar

```bash
npm install            # ilk kurulum
npm run dev            # geliştirme sunucusu (http://localhost:5173)
npm run build          # production build → dist/
npm run preview        # dist/'i yerelde sun

npm run sync:ios       # build + iOS projesine kopyala
npm run open:ios       # Xcode'da aç
npm run live:ios       # simülatörde canlı yenileme (--device: gerçek cihaz)

npm run sync:android   # build + Android projesine kopyala
npm run open:android   # Android Studio'da aç
```

`src/` altında değişiklik yaptıktan sonra native uygulamada görmek için
`sync:ios` / `sync:android` çalıştırılmalı.

## Oyun Akışı

1. **Faz 1 — Duygu:** Oyuncu butona basar, rastgele bir duygu kartı gelir.
   Kart bulanık açılır, sadece oyuncu dokununca görünür.
2. **Faz 2 — Sahne:** Oyuncu butona basar, rastgele bir sahne kartı açılır.
   Üstte bulanık duygu hatırlatıcısı durur.
3. Oyuncu sahneyi okur, duyguyu üzerine giydirir, soruya cevap verir.
   Diğerleri duyguyu tahmin etmeye çalışır.

## Geliştirme Notları

- Her dosya ihtiyaç duyduğu şeyi `import` eder; global değişken yok.
