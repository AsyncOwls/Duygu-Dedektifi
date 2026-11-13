/**
 * words.js — anlatım kelimeleri
 *
 * Her turda bu havuzdan 5 kelime çıkar; anlatıcı 3'ünü seçer ve duyguyu
 * anlatırken bu 3 kelimeyi kullanmak zorundadır. Kelimeler duygudan
 * bağımsızdır (ipucu vermesinler) ve her yaşa uygundur.
 */

var WORDS = [
  // Ev & eşyalar
  'Anahtar', 'Ayna', 'Battaniye', 'Çaydanlık', 'Dolap', 'Fotoğraf', 'Halı',
  'Kapı', 'Kitap', 'Lamba', 'Mektup', 'Merdiven', 'Pencere', 'Saat',
  'Şemsiye', 'Telefon', 'Valiz', 'Yastık', 'Gözlük', 'Cüzdan',

  // Yiyecek & içecek
  'Çikolata', 'Dondurma', 'Ekmek', 'Elma', 'Karpuz', 'Limon', 'Pasta',
  'Simit', 'Çorba', 'Bal', 'Kahve', 'Patlamış Mısır',

  // Doğa & hava
  'Ağaç', 'Bulut', 'Deniz', 'Dağ', 'Gökkuşağı', 'Kar', 'Orman', 'Ay',
  'Rüzgâr', 'Yağmur', 'Yıldız', 'Şimşek', 'Çiçek', 'Kum', 'Nehir', 'Güneş',

  // Hayvanlar
  'Kedi', 'Köpek', 'Kuş', 'Balık', 'Kaplumbağa', 'Kelebek', 'Fil',
  'Penguen', 'Arı', 'At', 'Tavşan', 'Ahtapot',

  // Yerler
  'Okul', 'Hastane', 'Market', 'Park', 'Tren', 'Uçak', 'Otobüs',
  'Asansör', 'Plaj', 'Kütüphane', 'Sinema', 'Mutfak', 'Bahçe', 'Köprü',
  'Çatı', 'Kamp',

  // Nesneler & oyuncaklar
  'Balon', 'Top', 'Bisiklet', 'Gitar', 'Davul', 'Hediye', 'Harita',
  'Pusula', 'Fener', 'Kalem', 'Mum', 'Zil', 'Ödül', 'Taç', 'Maske',
  'Uçurtma', 'Kumbara', 'Sandık', 'Dürbün', 'Robot',

  // Kişiler & roller
  'Bebek', 'Dede', 'Komşu', 'Öğretmen', 'Kaptan', 'Aşçı', 'Doktor',
  'Postacı', 'Sihirbaz', 'Astronot', 'Korsan', 'Dedektif',

  // Olaylar & kavramlar
  'Doğum Günü', 'Düğün', 'Tatil', 'Sınav', 'Yarış', 'Konser', 'Rüya',
  'Sır', 'Söz', 'Kaza', 'Sürpriz', 'Taşınma', 'İlk Gün', 'Veda',
  'Fotoğraf Albümü', 'Bayram', 'Maç', 'Kayıp Eşya',
];

/** Havuzdan tekrarsız n kelime çek (shuffle → players.js). */
function drawWords(n) {
  return shuffle(WORDS).slice(0, n);
}
