/**
 * emotionCards.js — duygu hikâye kartları (üç yaş kategorisi)
 *
 * Mekanik: Oyuncu bir duygu çeker, karttaki 5 öğeden 3'ünü seçer ve bu üçünü
 * birbirine bağlayan ~1 dakikalık bir hikâye kurgular (seçilmeyen 2 öğeyi
 * kullanmak yasak değil). Diğerleri duyguyu tahmin eder. Sahne kartı yoktur.
 *
 * Öğeler tek bir sahnenin parçaları DEĞİLDİR: her biri farklı bir dünyadan,
 * 1-3 kelimelik açık uçlu bir hikâye tohumudur (kişi, nesne, yer, olay, ses…).
 * Aynı 3'lüden birbirinden çok farklı hikâyeler kurulabilir; tek tek nötr
 * öğeler birlikte duyguya hafifçe yaslanır, duyguyu anlatıcının kurgusu taşır.
 *
 * Her duygu:
 *   kartlar   → birden fazla kart; her çekilişte biri rastgele gösterilir.
 *               Her kart 5 bağımsız hikâye tohumu; aynı duygunun kartları
 *               farklı motiflere / dünyalara yaslanır.
 *   not       → psikolog notu; yalnızca cevap açıklandıktan sonra gösterilir
 *   zorluk    → 1 kolay · 2 orta · 3 zor
 *   cocukModu → (yalnız cocuk) false ise bu duygu çocuk modunda çekilmez
 *
 * İçerik scratchpad'deki kart_genc / kart_yetiskin / kart_cocuk taslaklarından
 * birleştirildi; anahtarlar emotions.js'deki duygu adlarıyla birebir aynıdır.
 */

export var CARDS = {

  /* ════════════════════ GENÇ (13-17) ════════════════════ */
  genc: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": {
      kartlar: [
        ["Zorba", "Duvar", "Zehir", "Çöp kutusu", "Engelle tuşu"],
        ["İkiyüzlü", "Maske", "Çamur", "Kara liste", "Alaycı gülüş"],
        ["Diken", "Sivrisinek", "Ezber", "Çürük", "Tırnak sesi"],
      ],
      not: "Derin bir incinmenin sinyali; hissetmek normal, nasıl davranacağını sen seçersin.", zorluk: 2,
    },
    "Kızgınlık": {
      kartlar: [
        ["Kardeş", "Kapı", "Kırmızı ışık", "Kuyruk", "Düdük"],
        ["Lafın yarısı", "Sessize alma", "Arka sıra", "Toplantı", "Omuz silkme"],
        ["Kum kalesi", "Maket", "Kahve lekesi", "Silinen dosya", "Lego kule"],
      ],
      not: "Sınırının aşıldığını haber verir; seni ve değerlerini korumak için var.", zorluk: 1,
    },
    "Arzu": {
      kartlar: [
        ["Mıknatıs", "Harçlık", "Gece yarısı", "Sıcak ekmek", "Uzak ışıklar"],
        ["Çikolata", "Pastane camı", "Lunapark", "Parfüm", "Son dilim"],
        ["Yat", "Kırmızı halı", "Uçak bileti", "Sınırsız kart", "Lüks otel"],
      ],
      not: "Neyi istediğini gösterir; hedeflerini bulmana yardım eden bir pusula.", zorluk: 3,
    },
    "Sabırsızlık": {
      kartlar: [
        ["Kargo", "Durak", "Kum saati", "Asansör", "Yarın"],
        ["Salyangoz", "Trafik", "Yükleme ekranı", "Mikrodalga", "Bekleme müziği"],
        ["Takvim", "Kapalı hediye", "Fırındaki kek", "Ders bitimi", "Dizi finali"],
      ],
      not: "Bir şeyi çok önemsediğini gösterir; derin bir nefes beklemeyi kolaylaştırır.", zorluk: 2,
    },
    "İnat": {
      kartlar: [
        ["Baba", "Keçi", "Kaya", "Akşam yemeği", "Son söz"],
        ["Anne", "Atkı", "Şemsiye", "Soğuk kış", "Eşik"],
        ["Münazara", "Eşek", "Beton", "Bahis", "Kapanmayan konu"],
      ],
      not: "Sözünü korumaya çalışırsın; ama bazen esneyebilmek de bir güçtür.", zorluk: 2,
    },
    "İsyan": {
      kartlar: [
        ["Müdür", "Kural", "Megafon", "Kafes", "Saç kesimi"],
        ["Eve dönüş saati", "Duvar yazısı", "Tişört sloganı", "Ev kuralları", "Kırmızı çizgi"],
        ["Pankart", "Okul meclisi", "Yasak", "Toplu ceza", "Gitar riffi"],
      ],
      not: "Haksızlığa ses çıkarma isteği; doğru yolla kullanınca gerçek değişim yaratır.", zorluk: 2,
    },
    "Hınç": {
      kartlar: [
        ["Eski defter", "Rövanş", "Ekran görüntüsü", "Hesap", "Yıllar sonra"],
        ["Pusu", "Soğuk yemek", "Örümcek ağı", "Doğru zaman", "Sınıf grubu"],
        ["Yara izi", "Ezilmiş oyuncak", "İlkokul", "Unutulmayan söz", "Sessiz bakış"],
      ],
      not: "Kin de denir. İncinen yanın adalet istiyor; konuşmak, biriktirmekten iyi gelir.", zorluk: 3,
    },
    "Tutku": {
      kartlar: [
        ["Gitar", "Nasır", "Usta", "Ateş", "Gün doğumu"],
        ["Krampon", "Antrenman", "Saha ışıkları", "Ter", "Kış sabahı"],
        ["Fırça", "Tuval", "Unutulan yemek", "Defalarca", "Sabaha karşı"],
      ],
      not: "Seni sen yapan şeyleri gösterir; hayatına anlam ve enerji katar.", zorluk: 2,
    },
    "Hırs": {
      kartlar: [
        ["Merdiven", "Sıralama", "Kütüphane", "Kronometre", "Taç"],
        ["Kasa", "Altın", "Patron", "Ofis", "Daha fazlası"],
        ["Rekor", "Podyum", "Sakatlık", "Ekstra tur", "Ağırlık"],
      ],
      not: "Seni hedefe iten bir motor; arada dinlenirsen çok daha iyi çalışır.", zorluk: 3,
    },
    "Aşk": {
      kartlar: [
        ["Mektup", "Kelebek", "Ödünç kalem", "Balkon", "Yaz akşamı"],
        ["Çevrim içi", "Emoji", "Şarkı listesi", "Yan koltuk", "Sabaha kadar"],
        ["Gül", "Yıldızlı gece", "Okul gezisi", "Ağaç kabuğu", "Sinema"],
      ],
      not: "Birine yakınlık duymak çok doğal; kalbinin bağ kurma isteğini gösterir.", zorluk: 1,
    },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": {
      kartlar: [
        ["Bavul", "Geri sayım", "Perde", "Peron", "Sabah 5"],
        ["Zarf", "Kurdele", "Sahne arkası", "Kayıt tuşu", "Anons"],
        ["Çadır", "Dönme dolap", "İlk uçuş", "Nehir", "Kar yağışı"],
      ],
      not: "Bedende korkuya çok benzer; fark, beklediğin şeyin güzel olması.", zorluk: 1,
    },
    "Coşku": {
      kartlar: [
        ["Davul", "Kar tatili", "Havai fişek", "Dalga", "Mahalle maçı"],
        ["Düğün", "Halay", "Konfeti", "Korna sesi", "Bayram"],
        ["Konser", "Tribün", "Bayrak", "Nakarat", "Havadaki eller"],
      ],
      not: "Sevincin taşmasıdır; başkalarıyla paylaşınca daha da büyür.", zorluk: 2,
    },
    "Merak": {
      kartlar: [
        ["Anahtar deliği", "Harita", "Karşı pencere", "Fısıltı", "Uzay"],
        ["Mikroskop", "Fosil", "Böcek", "Deney", "Neden?"],
        ["Kilitli çekmece", "Kiracı", "Tavan arası", "Yarım cümle", "Sandık"],
      ],
      not: "Öğrenmenin motorudur; dünyayı keşfetmeni sağlar.", zorluk: 2,
    },
    "Cesaret": {
      kartlar: [
        ["Mikrofon", "Yüksek dal", "Söz hakkı", "Derin su", "Karanlık oda"],
        ["Tek ses", "El kaldırmak", "Koridor", "Büyük çocuk", "Titreyen bacak"],
        ["Yüzme havuzu", "Yabancı dil", "Telefon numarası", "Kulis", "Tırmanma duvarı"],
      ],
      not: "Korkmamak değil, korkuya rağmen adım atmaktır; herkesin içinde var.", zorluk: 2,
    },
    "Şaşkınlık": {
      kartlar: [
        ["Sihirbaz", "Kapı zili", "Sessiz arkadaş", "Yüz puan", "Ters dünya"],
        ["Temmuzda kar", "İkiz", "Papağan", "Final sahnesi", "Dolu"],
        ["Eski öğretmen", "Çekiliş", "Gizli yetenek", "Kapalı kutu", "Ani yağmur"],
      ],
      not: "Beynin yeni bilgiyi işliyor; birkaç saniyelik doğal bir duraklama.", zorluk: 2,
    },
    "Heves": {
      kartlar: [
        ["Defter", "Pazartesi", "Spor ayakkabı", "Broşür", "Ocak ayı"],
        ["Boya seti", "Mat", "Video ders", "Kurs kaydı", "Deneme dersi"],
        ["Yılbaşı", "Yapılacaklar listesi", "Saksı", "Yeni dönem", "Kitap kulübü"],
      ],
      not: "Başlama enerjisi; bazen çabuk söner, küçük adımlar onu canlı tutar.", zorluk: 3,
    },
    "İlham": {
      kartlar: [
        ["Sokak müzisyeni", "Ampul", "Peçete", "Duş", "Yıldız kayması"],
        ["Okyanus", "Yürüyüş", "Gün batımı", "Rüzgâr", "Kurşun kalem"],
        ["Müze", "Biyografi", "Belgesel", "Eskiz", "Tren camı"],
      ],
      not: "Bir andan gelen kıvılcım; içindeki potansiyeli uyandırır. Hemen not al!", zorluk: 2,
    },
    "Yaratıcılık": {
      kartlar: [
        ["Karton kutu", "Boş sayfa", "Hurdalık", "Bulut", "Sıkıcı ders"],
        ["Mutfak", "Artık malzeme", "Tarif", "Kostüm", "Bant"],
        ["Oyun hamuru", "Kuklalar", "Uydurma dil", "Yağmurlu gün", "Masal"],
      ],
      not: "Herkeste vardır; hata yapmaya izin verince daha çok ortaya çıkar.", zorluk: 2,
    },
    "Şevk": {
      kartlar: [
        ["Kulüp", "Boya kovası", "Lokomotif", "Şenlik", "İmece"],
        ["Kürek", "Fidan", "Bahar", "Gönüllüler", "Hasat"],
        ["Robot", "Bilim fuarı", "Ekip", "Lehim", "Hafta sonu"],
      ],
      not: "İşe gönülden sarılmak; bulaşıcıdır, zor işleri bile keyifli kılar.", zorluk: 3,
    },
    "Büyülenme": {
      kartlar: [
        ["Kuzey ışıkları", "Akvaryum", "Teleskop", "Elektrik kesintisi", "Kar tanesi"],
        ["Bale", "Keman", "Sirk", "Işık gösterisi", "Kum sanatı"],
        ["Ateş böceği", "Mercan", "Kelebek kanadı", "Şelale", "Mağara"],
      ],
      not: "Dünyanın güzelliğine açılmak; zihnini hem dinlendirir hem genişletir.", zorluk: 2,
    },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": {
      kartlar: [
        ["Yavru kedi", "Bahçe", "Güneş", "Uzun masa", "Yaz tatili"],
        ["Bayram sabahı", "Pijama partisi", "Kahkaha", "Aile arabası", "Dondurma"],
        ["İyi haber", "Ilık rüzgâr", "Sabah kahvaltısı", "Piknik", "Kardeşler"],
      ],
      not: "Neyin sana iyi geldiğini gösterir; o şeyleri hayatında çoğalt.", zorluk: 1,
    },
    "Neşe": {
      kartlar: [
        ["Şakacı", "Balon", "Okul servisi", "Tavuk sesi", "Komik video"],
        ["Su savaşı", "Palyaço", "Kar topu", "Gıdıklama", "Yastık"],
        ["Penguen", "Bilmece", "Maskot", "Taklit", "Hapşırık"],
      ],
      not: "Gülmek stresi azaltır ve insanları birbirine yaklaştırır.", zorluk: 1,
    },
    "Umut": {
      kartlar: [
        ["Tohum", "Yedek kulübesi", "Gökkuşağı", "İkinci şans", "Şafak"],
        ["Kardelen", "Mektup kutusu", "Telafi sınavı", "Yeşeren dal", "Bahar havası"],
        ["Ufuk", "Pusula", "Kayık", "Liman", "Temiz sayfa"],
      ],
      not: "Zor zamanlarda devam etmeni sağlayan ışık; çok güçlü bir duygu.", zorluk: 2,
    },
    "Gurur": {
      kartlar: [
        ["Madalya", "İlk gol", "Aile fotoğrafı", "Sahne", "Küçük kardeş"],
        ["Kuş evi", "Sergi", "Diploma", "Alkış", "Buzdolabı kapağı"],
        ["Tören", "Mezuniyet", "Gazete haberi", "Annenin bakışı", "Pano"],
      ],
      not: "Emeğin karşılığını görmek; kendini takdir etmek çok sağlıklıdır.", zorluk: 1,
    },
    "Özgürlük": {
      kartlar: [
        ["Bisiklet", "Ev anahtarı", "Sahil yolu", "Kuş", "Yaz sabahı"],
        ["Uçurtma", "Açık deniz", "Çayır", "At", "Yalınayak"],
        ["Kendi odan", "Karavan", "Yaz işi", "Kafes kapısı", "Tatil köyü"],
      ],
      not: "Kendi seçimlerini yapma isteği ergenlikte çok doğal ve önemli.", zorluk: 1,
    },
    "Tatmin": {
      kartlar: [
        ["Yapboz", "Toplanmış oda", "Teslim günü", "Pazar akşamı", "Dolu kumbara"],
        ["Dikiş makinesi", "Vida", "Biten kitap", "Bahçe hortumu", "Kurulan raf"],
        ["Kontrol listesi", "Ödev dosyası", "Akşam güneşi", "Ayak uzatmak", "Tam not"],
      ],
      not: "Emeğinin yerini bulduğunu hissetmek; \"yeterince iyi\" demeyi öğretir.", zorluk: 3,
    },
    "Keyif": {
      kartlar: [
        ["Sıcak kakao", "Kedi", "Yağmur", "Hamak", "Uzun kahvaltı"],
        ["Karpuz", "Plaj havlusu", "Güneş gözlüğü", "Limonata", "Öğle uykusu"],
        ["Şömine", "Pijama", "Kestane", "Dizi maratonu", "Kalın çorap"],
      ],
      not: "Küçük zevkleri fark etmek ruh sağlığını güçlendirir.", zorluk: 2,
    },
    "Rahatlama": {
      kartlar: [
        ["Zil sesi", "Sınav çıkışı", "Kayıp kedi", "Ağır çanta", "Doktor"],
        ["Bulunan telefon", "Geri gelen mesaj", "Şarj aleti", "Yeşil ışık", "Varış"],
        ["Sıcak duş", "Gönder tuşu", "Tatil başlangıcı", "Bulunan çocuk", "İndirilen yük"],
      ],
      not: "Stres bitince beden kendini sıfırlar; bu anın tadını çıkar.", zorluk: 2,
    },
    "Özgüven": {
      kartlar: [
        ["Ayna", "Sunum", "Kendi tarzın", "Dans pisti", "Süper kahraman"],
        ["Kaleci", "Penaltı", "Kostüm partisi", "Kısa saç", "Sahne ışığı"],
        ["Sınıf başkanlığı", "Kendi fikrin", "Röportaj", "Podcast", "Yüksek ses"],
      ],
      not: "Hata yapsan da değerli olduğunu bilmektir; zamanla inşa edilir.", zorluk: 3,
    },
    "Zafer": {
      kartlar: [
        ["Kupa", "Son saniye", "Dağ tepesi", "Bilgisayar oyunu", "Rakip"],
        ["Bitiş çizgisi", "Maraton", "Konfeti yağmuru", "Seviye atlamak", "Yumruk havada"],
        ["Soyunma odası", "Final düdüğü", "Okul marşı", "Kale direği", "Dönüş otobüsü"],
      ],
      not: "Zorluğun üstesinden gelmenin coşkusu; emeğinin meyvesini kutla.", zorluk: 1,
    },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": {
      kartlar: [
        ["Büyükanne", "Örgü atkı", "Kapı önü", "Sesli mesaj", "Sofra"],
        ["Pati", "Ev kokusu", "Sarılmak", "Bebek", "Peluş"],
        ["Not kâğıdı", "Kalp", "Kucak", "Yol arkadaşı", "Doğum günü"],
      ],
      not: "İnsanları birbirine bağlayan güçlü bir yapıştırıcı; hepimizin ihtiyacı.", zorluk: 1,
    },
    "Şefkat": {
      kartlar: [
        ["Kuş yavrusu", "Kâbus", "Yara bandı", "Battaniye", "Küçük el"],
        ["Ateş ölçer", "Ihlamur", "Titreyen eller", "Yaşlı kedi", "Hastane yatağı"],
        ["Mendil", "Ninni", "Saç örgüsü", "Islak yavru", "Sıcak süt"],
      ],
      not: "Birini korumak ve kollamak istemek; aynısını kendine de gösterebilirsin.", zorluk: 2,
    },
    "Güven": {
      kartlar: [
        ["Köprü", "Sır", "Günlük", "Sıra arkadaşı", "Paraşüt"],
        ["Göz bağı", "Emniyet kemeri", "Pas", "Tırmanış ipi", "Ortak"],
        ["Yedek anahtar", "Şifre", "Babanın omzu", "Arka koltuk", "El sıkışma"],
      ],
      not: "İlişkilerin temeli; zamanla, tutulan küçük sözlerle büyür.", zorluk: 2,
    },
    "Merhamet": {
      kartlar: [
        ["Sokak kedisi", "Eldiven", "Yaşlı komşu", "Yağmurlu gece", "Düşen tepsi"],
        ["Yırtık ayakkabı", "Çatlak gözlük", "Unutulan beslenme", "Kenardaki çocuk", "Kış rüzgârı"],
        ["Barınak", "Kanadı kırık kuş", "Kar fırtınası", "Sel haberi", "Mama kabı"],
      ],
      not: "Başkasının acısına kalbinin açılması; dünyayı daha iyi bir yer yapar.", zorluk: 2,
    },
    "Şükran": {
      kartlar: [
        ["Ders notları", "Komşu teyze", "Uzatılan el", "Otobüs şoförü", "Sıcak çorba"],
        ["Beslenme çantası", "Gece nöbeti", "Anneanne", "Ütü", "Hazır kahvaltı"],
        ["Rehber öğretmen", "Ödünç kitap", "Tamirci", "Yardım paketi", "Taksici"],
      ],
      not: "Minnettarlık da denir. İyiyi fark ettirir; mutluluğu gerçekten artırır.", zorluk: 3,
    },
    "Huzur": {
      kartlar: [
        ["Dede", "Göl", "Kapalı telefon", "Çay", "Pazar sabahı"],
        ["Orman yolu", "Dere sesi", "Çan sesi", "Çam kokusu", "Yosun"],
        ["Mum ışığı", "Kitap kokusu", "Akşam serinliği", "Kedi mırıltısı", "Bahçe salıncağı"],
      ],
      not: "Bedenin ve zihnin güvende olduğunu söyler; şarjını dolduran bir mola.", zorluk: 3,
    },
    "Bağışlama": {
      kartlar: [
        ["Özür", "Eski dost", "Beyaz sayfa", "Merdiven başı", "Aylar sonra"],
        ["Abla", "Okunan günlük", "Silinen kayıt", "Uzun sarılma", "Barış çiçeği"],
        ["Yağmur sonrası", "Bırakılan taş", "Mevsim dönümü", "Sünger", "Kapanan yara"],
      ],
      not: "Karşındakinden çok seni özgürleştirir; ama hazır olmadan kendini zorlama.", zorluk: 3,
    },
    "Aidiyet": {
      kartlar: [
        ["Forma", "Lakap", "Grup şakası", "Mahalle", "Kamp ateşi"],
        ["Soyadı", "Memleket", "Aile ağacı", "Kahvaltı masası", "Ninenin tarifi"],
        ["Klan", "Koro", "Gizli selam", "Okul yıllığı", "Kulüp rozeti"],
      ],
      not: "Bir gruba kendin olarak kabul edilmek; temel bir insan ihtiyacı.", zorluk: 2,
    },
    "Empati": {
      kartlar: [
        ["Ayakkabı", "Gece telefonu", "Kulaklık", "Yeni öğrenci", "Gözyaşı"],
        ["Tekerlekli sandalye", "İşaret dili", "Başka dil", "Uzun yürüyüş", "Sessiz sofra"],
        ["Kanepe", "Çay bardağı", "Balkon sohbeti", "Ayrılık haberi", "Sorulmamış soru"],
      ],
      not: "Başkasının gözünden bakabilmek; dostlukları derinleştiren bir süper güç.", zorluk: 3,
    },
    "Sakinlik": {
      kartlar: [
        ["Deniz feneri", "Nefes", "Telaşlı kalabalık", "Bozuk araba", "Kaplumbağa"],
        ["Yangın tatbikatı", "Kayıp çocuk", "Ağlayan bebek", "İlk yardım", "Uzun kuyruk"],
        ["Pilot", "Rötar", "Bozuk plan", "Buz kalıbı", "Ağır çekim"],
      ],
      not: "Zor anlarda net düşünmeni sağlar; nefesle güçlenen bir kas gibi.", zorluk: 2,
    },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": {
      kartlar: [
        ["Yaşlı köpek", "Boş oda", "Yağmur bulutu", "Gelen haber", "Solan çiçek"],
        ["Koli", "Veda partisi", "Son gün", "Boş sıra", "İstasyon"],
        ["Elenme", "Silinen fotoğraflar", "Devrilen saksı", "Sessiz akşam", "Islak yastık"],
      ],
      not: "Kayıpları işlemeni sağlar; ağlamak zayıflık değil, iyileşmenin parçası.", zorluk: 1,
    },
    "Özlem": {
      kartlar: [
        ["Eski mahalle", "Fotoğraf albümü", "Görüntülü arama", "Tren", "O şarkı"],
        ["Parfüm şişesi", "Yazlık", "Kurabiye kokusu", "Bayram telefonu", "Kartpostal"],
        ["Gurbet", "Havalimanı", "Saat farkı", "Eski forma", "Boş yatak"],
      ],
      not: "Birini ya da bir şeyi ne kadar değerli bulduğunu gösterir.", zorluk: 1,
    },
    "Yalnızlık": {
      kartlar: [
        ["Issız ada", "Cumartesi akşamı", "Kalabalık kantin", "Sessiz telefon", "Yeni şehir"],
        ["Teneffüs", "Yemekhane", "Tek tabak", "Uzun koridor", "Ekran ışığı"],
        ["Astronot", "Kutup", "Tek ağaç", "Deniz kabuğu", "Gece treni"],
      ],
      not: "Bağ kurma ihtiyacının sinyali; çok genç hisseder, küçük bir adım değiştirebilir.", zorluk: 2,
    },
    "Pişmanlık": {
      kartlar: [
        ["Geri al tuşu", "Saat 2", "Tartışma", "Son bakış", "Yarım mektup"],
        ["Başvuru formu", "Silgi", "Reddedilen teklif", "Cevapsız soru", "Dün"],
        ["Açılmayan telefon", "Söylenmeyen söz", "Kapı aralığı", "Atlanan kutlama", "Kaçırılan veda"],
      ],
      not: "Hatalarından ders almanı sağlar; kendini affetmek de bir sonraki adım.", zorluk: 2,
    },
    "Hayal Kırıklığı": {
      kartlar: [
        ["Maç bileti", "İptal mesajı", "Sönen balon", "Pencere kenarı", "Fragman"],
        ["Paket", "Yağmurlu tatil", "Tatsız pasta", "Ertelenen gezi", "Fotoğraftaki otel"],
        ["İmza günü", "İdol", "Sahte gülüş", "Gelmeyen misafir", "Aynı not"],
      ],
      not: "Beklentilerini gösterir; neyi önemsediğini anlamana yardım eder.", zorluk: 2,
    },
    "Dışlanmışlık": {
      kartlar: [
        ["Grup fotoğrafı", "Cam arkası", "Takım seçimi", "Davetiye", "Tek sandalye"],
        ["Mesaj grubu", "Gizli hesap", "Etiket", "Görüldü", "Parti fotoğrafları"],
        ["İp atlama", "Saklambaç", "Son seçilen", "Kale arkası", "İç şaka"],
      ],
      not: "Beyin bunu fiziksel acı gibi işler; hissetmen çok doğal ve gerçek.", zorluk: 2,
    },
    "Boşluk": {
      kartlar: [
        ["Tavan", "Donmuş ekran", "Pazar öğleden sonra", "Çöl", "Yankı"],
        ["Gri gün", "Sonsuz kaydırma", "Soğuk çay", "Aynı sabah", "Kumanda"],
        ["Final sonrası", "Toplanmış çadır", "Issız stadyum", "Sönmüş ateş", "Saatlerce"],
      ],
      not: "Zihin yorulunca bazen böyle durur; uzun sürerse güvendiğin biriyle konuş.", zorluk: 3,
    },
    "Tükenmişlik": {
      kartlar: [
        ["Yüzde bir şarj", "Alarm", "Deneme sınavı", "Eriyen mum", "Kum torbası"],
        ["Dershane", "Ödev yığını", "Kahve", "Bitmeyen hafta", "Servis"],
        ["Bulaşık", "Bozuk pil", "Kuru toprak", "Sönük ekran", "Koşu bandı"],
      ],
      not: "Bedenin dinlenmek istiyor; mola vermek tembellik değil, ihtiyaç.", zorluk: 2,
    },
    "Çaresizlik": {
      kartlar: [
        ["Labirent", "Bataklık", "Çekmeyen telefon", "Taşınma", "Bekleme salonu"],
        ["Duvar arkası", "Tartışan sesler", "Büyükler", "Kesik internet", "Kayan halat"],
        ["Akıntı", "Kum fırtınası", "Çözülmeyen soru", "Sinyal yok", "Bozuk pusula"],
      ],
      not: "Elinde olmayan şeyler olabilir; yardım istemek en güçlü hamledir.", zorluk: 3,
    },
    "Melankoli": {
      kartlar: [
        ["Sonbahar", "Buğulu cam", "Plak", "Sahil", "Martı"],
        ["Sokak lambası", "Eski sinema", "Vapur", "Kahve fincanı", "Gri gökyüzü"],
        ["Sararmış fotoğraf", "Çocukluk odası", "Kuru yaprak", "Piyano", "Saat tıkırtısı"],
      ],
      not: "Belli bir sebebi olmayan, biraz tatlı bir hüzün; şarkıların ilham kaynağı.", zorluk: 3,
    },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": {
      kartlar: [
        ["Patika", "Çizelge", "Sabah koşusu", "Seçmeler", "Zirve"],
        ["Fizik tedavi", "Alçı", "Koltuk değneği", "İlk adım", "Çentik"],
        ["Kelime kartları", "Metronom", "Yüzüncü deneme", "Yokuş", "Masa lambası"],
      ],
      not: "Hedefine odaklanmanı sağlar; küçük adımlar büyük fark yaratır.", zorluk: 2,
    },
    "Hayranlık": {
      kartlar: [
        ["Ünlü sporcu", "Üst sınıf", "Gökdelen", "Ressam", "Yaşlı balıkçı"],
        ["Fen öğretmeni", "Ağabey", "İtfaiyeci", "Canlı yayın", "Usta eller"],
        ["Piramit", "Kartal", "Çizim defteri", "Dev ağaç", "Dahi"],
      ],
      not: "Kim olmak istediğini gösterir; ilham kaynağın olabilir.", zorluk: 2,
    },
    "Sadakat": {
      kartlar: [
        ["Dedikodu", "Bileklik", "Köpek", "Teklif", "Yağmurlu maç"],
        ["Kötü sezon", "Taraftar", "Yırtık bayrak", "Kombine", "Deplasman"],
        ["Yemin", "Ağaç ev", "Ortak sır", "Sorgu", "Yeni grup"],
      ],
      not: "Değer verdiklerinin yanında durmak; ama seni inciten bir ilişkide kalmak zorunda değilsin.", zorluk: 3,
    },
    "Sorumluluk": {
      kartlar: [
        ["Emanet", "Kaptan bandı", "İlaç saati", "Buzdolabı notu", "Küçük kuzen"],
        ["Balık yemi", "Tasma", "Sulama", "Tatildeki komşu", "Kum kabı"],
        ["Grup ödevi", "Nöbet", "Kamp lideri", "Teslim tarihi", "Yoklama"],
      ],
      not: "Güvenilir olmanın parçası; ama her yükü tek başına taşımak zorunda değilsin.", zorluk: 1,
    },
    "Kıskançlık": {
      kartlar: [
        ["Yeni arkadaş", "Profil", "Sınıf birincisi", "Ortak fotoğraf", "Üçüncü kişi"],
        ["Yeni kardeş", "Övgü", "Ön koltuk", "Hediye paketi", "Komşunun tavuğu"],
        ["Dans partneri", "İkili", "Gülüşmeler", "Kalp emojisi", "Mezuniyet dansı"],
      ],
      not: "Değer verdiğin şeyi kaybetme korkusu; konuşmak çoğu zaman iyi gelir.", zorluk: 1,
    },
    "Adalet": {
      kartlar: [
        ["Hakem", "Torpil", "Not itirazı", "Pizza", "Sıra"],
        ["Eşit pay", "Tanık", "Kanıt", "Kamera kaydı", "Oy sandığı"],
        ["Hile", "Puan tablosu", "Jüri", "Kura", "Video hakem"],
      ],
      not: "Doğruyu önemsediğini gösterir; sesini duyurman için güçlü bir pusula.", zorluk: 2,
    },
    "Suçluluk": {
      kartlar: [
        ["Çakıl taşı", "Azarlanan kardeş", "Yalan", "Leke", "Dolap"],
        ["Kırık vazo", "Ödünç kazak", "Yırtılan kitap", "Anahtar şıngırtısı", "Halı altı"],
        ["Kaçan kedi", "Açık pencere", "Kayıp yüzük", "Kopya", "Ağır adımlar"],
      ],
      not: "Değerlerine ters düştüğünü söyler; telafi etmek yükü hafifletir.", zorluk: 2,
    },
    "Kibir": {
      kartlar: [
        ["Tavus kuşu", "Takipçi", "Pahalı ayakkabı", "Taht", "Selam"],
        ["Kupa rafı", "Burun", "Çalım", "VIP", "Lüks araba"],
        ["Kraliçe", "Ansiklopedi", "Alkışçı", "Altın varak", "Balkon konuşması"],
      ],
      not: "Kendini beğenmişlik de denir. Çoğu zaman içteki güvensizliği saklar.", zorluk: 2,
    },
    "Onur": {
      kartlar: [
        ["Kopya kâğıdı", "Beyaz gömlek", "Verilen söz", "Şövalye", "Cüzdan"],
        ["İtiraf", "Kayıp eşya", "Para üstü", "Hakem hatası", "Kalkan"],
        ["Dedenin saati", "Madalyon", "Bayrak direği", "Kalabalık meydan", "Temiz sicil"],
      ],
      not: "Değerlerine uygun yaşamanın verdiği his; kendine saygı duymanı sağlar.", zorluk: 3,
    },
    "Rekabet": {
      kartlar: [
        ["Turnuva", "Kanka", "Satranç", "Yarış pisti", "İki aday"],
        ["Fen olimpiyatı", "Ortalama", "Kuzenler", "Liste başı", "Ders zili"],
        ["Skor tablosu", "Oyun konsolu", "Lider tablosu", "Bilek güreşi", "Yumurta koşusu"],
      ],
      not: "Seni geliştirir; kazanmak kadar adil oynamak da önemli.", zorluk: 1,
    },

    /* 💜 Mor — Korku Ailesi */
    "Korku": {
      kartlar: [
        ["Karanlık koridor", "Tıkırtı", "Bodrum", "Fırtına", "Bilinmeyen numara"],
        ["Orman", "Yılan", "Kuyu", "Köpek havlaması", "Sis"],
        ["Dişçi", "İğne", "Cam köprü", "Palyaço maskesi", "Terk edilmiş ev"],
      ],
      not: "Seni tehlikeden koruyan alarm sistemi; en cesur insanda bile var.", zorluk: 1,
    },
    "Kaygı": {
      kartlar: [
        ["Sınav sabahı", "Hamster çarkı", "Akrabalar", "Saat 3", "Bildirim"],
        ["Tercih listesi", "Meslek", "Gelecek yıl", "Sonuç ekranı", "Tırnak"],
        ["Okunmamış mesaj", "Sahne sırası", "Sağlık kontrolü", "Randevu", "Pazartesi sabahı"],
      ],
      not: "Beynin seni hazırlamaya çalışıyor; yavaş nefes bu alarmı kısar.", zorluk: 1,
    },
    "Utanç": {
      kartlar: [
        ["Kırmızı kalem", "Görünmezlik pelerini", "Video", "Devekuşu", "Aile yemeği"],
        ["Kapüşon", "Sızan sır", "Ekran paylaşımı", "Veli toplantısı", "Kapanan kamera"],
        ["Sınıf tekrarı", "Yırtık çanta", "Tahta başı", "Sessizleşen oda", "Çorap deliği"],
      ],
      not: "Herkes yaşar ama az konuşulur; paylaştıkça gücünü kaybeder.", zorluk: 2,
    },
    "Kafa Karışıklığı": {
      kartlar: [
        ["Yumak", "Kroki", "İki öğretmen", "Kavşak", "Matematik"],
        ["İki davet", "Yazı tura", "Muamma", "Yarım talimat", "Bulanık fotoğraf"],
        ["Yabancı şehir", "Metro haritası", "Kullanım kılavuzu", "Kod hatası", "Ters yön"],
      ],
      not: "Öğrenmenin ilk adımı; anlamadığını söylemek cesaret ister.", zorluk: 2,
    },
    "Güvensizlik": {
      kartlar: [
        ["İnce buz", "Beğeni sayısı", "Prova kabini", "İlk gün", "Kalabalık"],
        ["Silinen paylaşım", "Grup sohbeti", "Kuaför", "Fotoğraf çekimi", "Sesli okuma"],
        ["Arkadaş listesi", "İlk buluşma", "Okul tiyatrosu", "Kıyafet dolabı", "Fısıltılar"],
      ],
      not: "Herkesin yaşadığı bir his; değerin beğeni sayısıyla ölçülmez.", zorluk: 2,
    },
    "Gözü Kalmak": {
      kartlar: [
        ["Vitrin", "Bilet", "Kaçan otobüs", "Mont", "Dönüş yolu"],
        ["Kaçan balık", "Pazar tezgâhı", "Yan masa", "Takas", "Satılan ev"],
        ["Kapanan dükkân", "Kaçırılan konser", "İkinci el ilan", "Tren penceresi", "Komşu bahçe"],
      ],
      not: "Olmayan bir şeye içinin gitmesi normal; neyi gerçekten istediğini gösterir.", zorluk: 3,
    },
    "Yetersizlik": {
      kartlar: [
        ["Kuzen", "Yüksek çıta", "Karne", "Paylaşım", "Dağ"],
        ["Yedek oyuncu", "Ağır top", "Elemeler", "Kondisyon testi", "Dev oyuncu"],
        ["Ağabeyin karnesi", "Duvardaki diplomalar", "Meslek sohbeti", "Akraba ziyareti", "Aile grubu"],
      ],
      not: "Kendini başkalarının vitriniyle kıyaslamak yanıltır; kendi yolunu ölçü al.", zorluk: 2,
    },
    "Mahcubiyet": {
      kartlar: [
        ["Ters tişört", "Kantin kuyruğu", "Yanlış isim", "Kıkırtı", "Bebeklik fotoğrafı"],
        ["Açık mikrofon", "Hıçkırık", "Yanlış sınıf", "Ses çatlaması", "Kayan sandalye"],
        ["El sallamak", "Yanlış mesaj", "Takılan ayak", "Annenin öpücüğü", "Servis durağı"],
      ],
      not: "Herkesin başına gelir; birkaç gün sonra gülerek anlatacağın bir anı olur.", zorluk: 1,
    },
    "Tedirginlik": {
      kartlar: [
        ["\"Konuşmamız lazım\"", "Susan kuşlar", "Gölge", "Kesilen sohbet", "Cevapsız arama"],
        ["Kısık sesler", "Ciddi yüzler", "Yavaşlayan araba", "Müdür odası", "Bekleyen anne"],
        ["Bulutlanan gök", "Çatırdayan dal", "Ayak sesi", "Kapı gıcırtısı", "Tuhaf koku"],
      ],
      not: "Sezgilerin seni uyarıyor; ne olduğunu sormak çoğu zaman rahatlatır.", zorluk: 2,
    },
    "Panik": {
      kartlar: [
        ["Yangın alarmı", "Kimlik kartı", "Beş dakika", "Boş cep", "Metro"],
        ["AVM", "Kayıp kardeş", "Kilitlenen kapı", "Yanlış durak", "Siren"],
        ["Çöken bilgisayar", "Unutulan ödev", "Sahneye çıkış", "Sınav kâğıdı", "Sıfır şarj"],
      ],
      not: "Bedenin geçici bir alarmı; yavaş nefes alıp vermek dalgayı geçirir.", zorluk: 1,
    },
  },

  /* ════════════════════ YETİŞKİN ════════════════════ */
  yetiskin: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": {
      kartlar: [
        ["Eski patron", "Parfüm", "Ses tonu", "Diken", "Yırtık fotoğraf"],
        ["Üvey ağabey", "Miras kavgası", "Avlu", "Soğuk kahvaltı", "Zehir"],
        ["Sınıf zorbası", "Lakap", "Teneffüs", "Yılan", "Mezun gecesi"],
      ],
      not: "Çok derin bir incinmenin izi olabilir; hissetmek seni kötü biri yapmaz.", zorluk: 3,
    },
    "Kızgınlık": {
      kartlar: [
        ["Kurye", "Korna", "Not", "Çaydanlık", "Bölünen cümle"],
        ["Ergen oğul", "Kirli tabaklar", "Boyalı duvar", "Yüksek müzik", "Çamurlu ayakkabı"],
        ["Ekip arkadaşı", "Çalınan fikir", "Proje sunumu", "Kaynayan süt", "Kırmızı ışık"],
      ],
      not: "Sınırın çiğnendiğinde yükselen sağlıklı bir alarm; asıl mesele onu nasıl dile getirdiğin.", zorluk: 1,
    },
    "Arzu": {
      kartlar: [
        ["Katalog", "Deniz manzarası", "Tatlı", "Piyango", "Uzak ışıklar"],
        ["Pasaport", "Ada", "Seyahat dergisi", "Yelkenli", "Taksit"],
        ["Pastane vitrini", "Komşunun bahçesi", "Klasik araba", "Maaş günü", "Ekmek kokusu"],
      ],
      not: "Neyi gerçekten istediğini fark etmek, hayatına yön vermenin ilk adımıdır.", zorluk: 2,
    },
    "Sabırsızlık": {
      kartlar: [
        ["Eş", "Kuyruk", "Kargo takibi", "Rötar", "Saatin tik takı"],
        ["Doktor", "Sınav sonucu", "Asansör düğmesi", "Mikrodalga", "Yavaş internet"],
        ["Yavaş sürücü", "Tek şerit", "Arka koltuk", "Tamirci", "\"Geldik mi?\""],
      ],
      not: "Beklemek en çok önemsediğimiz şeylerde zorlaşır; bir nefes, saati yavaşlatmaz ama seni yumuşatır.", zorluk: 1,
    },
    "İnat": {
      kartlar: [
        ["Baba", "Yol ayrımı", "Doktor raporu", "Tartışma", "Üçüncü kez"],
        ["Emekli albay", "Koltuk", "Bozuk musluk", "Usta çağırmak", "Kahve saati"],
        ["Muhtar", "Sistem", "Katır", "Kural", "Yol levhası"],
      ],
      not: "Çoğu zaman yolu değil, haklı çıkma ihtiyacını korur; geri adım da bir güçtür.", zorluk: 2,
    },
    "İsyan": {
      kartlar: [
        ["Ev sahibi", "Toplantı", "Zincir", "Son söz", "Kafes"],
        ["Fabrika", "Fazla mesai", "Yaka kartı", "Pankart", "Düdük"],
        ["Genç gelin", "Aile meclisi", "Gelenek", "Makas", "Kapıyı çekmek"],
      ],
      not: "Haksız düzene boyun eğmeme isteği; birlikte dile gelince değişim başlatabilir.", zorluk: 2,
    },
    "Hınç": {
      kartlar: [
        ["Eski ortak", "Düğün", "Senet", "Sıra bende", "Yirmi yıl"],
        ["Halaoğlu", "Kara liste", "Bayram harçlığı", "Sınıf birinciliği", "Kış"],
        ["Ayrılan müdür", "Arşiv dosyası", "Fırsat", "Mühür", "Fitil"],
      ],
      not: "Kapanmamış bir yaranın faturası gibidir; en çok taşıyanı yorar, karşı tarafı değil.", zorluk: 3,
    },
    "Tutku": {
      kartlar: [
        ["Usta", "Keman", "Gece yarısı", "Unutulan yemek", "Tezgâh"],
        ["Dağcı", "Kuzey yüzü", "Kar fırtınası", "Halat", "Fotoğraf makinesi"],
        ["Tango hocası", "Kırmızı elbise", "Ateş", "Mektuplar", "Gece treni"],
      ],
      not: "İnsanı zamanın dışına çıkaran bir ateş; hayatı anlamlı kılan şeylerden biri.", zorluk: 3,
    },
    "Hırs": {
      kartlar: [
        ["Köşe ofis", "Kupa", "Seçim", "Hafta sonu", "Merdiven"],
        ["Borsa", "Gökdelen", "İkinci şube", "Kredi kartı", "Uykusuzluk"],
        ["Antrenör", "Altın madalya", "Kronometre", "Sakatlık", "Şafak koşusu"],
      ],
      not: "Seni ileri taşıyan güçlü bir motor; yalnızca neyi geride bıraktığına arada bir bak.", zorluk: 2,
    },
    "Aşk": {
      kartlar: [
        ["Yabancı", "İskele", "Şemsiye", "Mektup", "Dans"],
        ["Elli yıllık eş", "Plak", "Nikâh şahidi", "Çınar", "Kırk yıl"],
        ["Bisikletli çocuk", "Yaz tatili", "Kasetler", "Yazlık kasaba", "Ağaçtaki isim"],
      ],
      not: "Yaşın kaç olursa olsun, kalbin hâlâ şaşırtabildiğini hatırlatan güzel bir sarsıntı.", zorluk: 1,
    },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": {
      kartlar: [
        ["Torun", "Valiz", "Perde", "Geri sayım", "Zarf"],
        ["İnsan kaynakları", "İlk maaş", "Anahtar teslimi", "Kurdele", "Sabah dokuz"],
        ["Rehber", "Balon turu", "Gün doğumu", "Dürbün", "Kalkış anonsu"],
      ],
      not: "Bedende korkuya çok benzer; farkı, kapının ardında güzel bir şey beklemen.", zorluk: 1,
    },
    "Coşku": {
      kartlar: [
        ["Halay", "Gol", "Yaz yağmuru", "Mezuniyet", "Havai fişek"],
        ["Kına", "Davul", "Kuzenler", "Bayram sabahı", "Alkış tufanı"],
        ["Stadyum", "Gitarist", "Bayrak sallamak", "Final", "Meydan"],
      ],
      not: "Sevinç taşıp kalabalığa karışınca büyür; paylaşılan an, tek başınakinden daha uzun yaşar.", zorluk: 2,
    },
    "Merak": {
      kartlar: [
        ["Karşı pencere", "Kilitli sandık", "Fısıltı", "Harita", "Bekçi"],
        ["Neden sorusu", "Mikroskop", "Mağara", "Fosil", "Teleskop"],
        ["Günlük", "Tavan arası", "Yabancı mektup", "Tanımadık soyadı", "Tozlu kutu"],
      ],
      not: "Yetişkinliğin içinde yaşamaya devam eden çocuk; dünyayı canlı tutan şey.", zorluk: 1,
    },
    "Cesaret": {
      kartlar: [
        ["Hoca", "Derin su", "Kask", "İlk adım", "\"Üç deyince\""],
        ["Kalabalık salon", "Soru sırası", "Titreyen ses", "Yönetici", "Kapı tokmağı"],
        ["Kırk yaş", "İstifa dilekçesi", "Tek yön bilet", "Başka şehir", "Uçurum kenarı"],
      ],
      not: "Korkunun yokluğu değil, korkuyla birlikte adım atabilmek; her yaşta yeniden öğrenilir.", zorluk: 2,
    },
    "Şaşkınlık": {
      kartlar: [
        ["Muhasebeci", "Kapı zili", "Elektro gitar", "Tapu", "İkizler"],
        ["Sessiz kiracı", "Kutu", "Gizli yetenek", "Haziranda kar", "Kayıp kedi"],
        ["Yaşlı teyze", "Deri ceket", "Sürpriz misafir", "Yanlış adres", "Test sonucu"],
      ],
      not: "Zihnin \"bunu beklemiyordum\" deyip yeniden ayarlanması; insanlar hep bildiğimizden fazlası.", zorluk: 2,
    },
    "Heves": {
      kartlar: [
        ["Hobi dükkânı", "Yeni defter", "Bisiklet", "Pazartesi", "Fidan"],
        ["Spor ayakkabı", "Diyet listesi", "Ocak ayı", "Üyelik kartı", "Ayna karşısı"],
        ["Dil kursu", "Ukulele", "Tarif kitabı", "Deneme dersi", "Video kanalı"],
      ],
      not: "Yeni başlangıçların tatlı kıvılcımı; sönse bile seni bir yere götürmüş olur.", zorluk: 2,
    },
    "İlham": {
      kartlar: [
        ["Sokak müzisyeni", "Köprü", "Peçete", "Yarım şarkı", "Martılar"],
        ["Ressam", "Rüya", "Duş", "Beyaz sayfa", "Şimşek"],
        ["Çocuk çizimi", "Orman yürüyüşü", "Sahaf", "Kum saati", "Gece kuşu"],
      ],
      not: "Çoğu zaman aramadığın anda gelir; dinlenmiş ve açık bir zihni sever.", zorluk: 2,
    },
    "Yaratıcılık": {
      kartlar: [
        ["Yeğenler", "Karton kutu", "Kısıtlı bütçe", "Hurda", "Boş duvar"],
        ["Bayat ekmek", "Misafir", "Buzdolabı", "Yarım saat", "Tencere kapağı"],
        ["Bozuk makine", "Tel askı", "Kopan zincir", "Çakı", "Issız yol"],
      ],
      not: "Kısıtlar çoğu zaman en iyi fikirlerin annesidir; oyun oynayan zihin üretir.", zorluk: 3,
    },
    "Şevk": {
      kartlar: [
        ["Gönüllüler", "Proje", "Sabahın altısı", "Kürek", "Lokomotif"],
        ["Komşular", "Boya rulosu", "Bahar temizliği", "Fırça", "Erken kalkmak"],
        ["Genç öğretmen", "Köy yolu", "Kara tahta", "Dönem başı", "Tebeşir"],
      ],
      not: "Anlamlı bir işe gönülden girişmek; yorgunluğu bile tatlı kılan enerji.", zorluk: 3,
    },
    "Büyülenme": {
      kartlar: [
        ["Balıkçı", "Müze", "Işıltı", "Dans gösterisi", "Yıldızlı gök"],
        ["Saatçi", "Kar tanesi", "Buzul", "Kuzey ışıkları", "Masal"],
        ["Sokak sihirbazı", "Opera", "Akvaryum", "Sis", "Sabun köpüğü"],
      ],
      not: "Dünyanın hâlâ sırları olduğunu hatırlatır; yetişkinlerin en çok ihtiyaç duyduğu anlardan.", zorluk: 2,
    },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": {
      kartlar: [
        ["Gurbetçi dayı", "Tam kadro", "Akşam güneşi", "Müjde", "Sahil"],
        ["Komşu kadın", "Taze simit", "Semt pazarı", "Yaz akşamı", "Kahkaha"],
        ["Torunlar", "Bahar dalı", "İyi haber", "Kır pikniği", "Kuş cıvıltısı"],
      ],
      not: "Çoğu zaman büyük olaylarda değil, sıradan bir sofrada saklıdır.", zorluk: 1,
    },
    "Neşe": {
      kartlar: [
        ["Enişte", "Plaj", "Peruk", "Ters giden tarif", "Bir çığlık"],
        ["Yeğen", "Kostüm", "Su balonu", "Yaz kampı", "Kıkırdama"],
        ["Komik dayı", "Düğün dansı", "Kayan sandalye", "Yanlış şarkı", "Fotoğraf pozu"],
      ],
      not: "Hafifliğin ilacıdır; yetişkinler de oyun oynamaya ihtiyaç duyar.", zorluk: 2,
    },
    "Umut": {
      kartlar: [
        ["Otobüs durağı", "Ütülü gömlek", "Bahar", "Tohum", "Şafak"],
        ["Fizyoterapist", "Yürüteç", "Hastane penceresi", "Kuş sesi", "Pazartesi sabahı"],
        ["Küçük dükkân", "İlk müşteri", "Kepenk", "Bereket", "Kahvaltı"],
      ],
      not: "Karanlıkta bile bir kapı aralığı görebilmek; insanı ayakta tutan sessiz güç.", zorluk: 2,
    },
    "Gurur": {
      kartlar: [
        ["Diploma", "El yapımı masa", "Gazete", "Kızım", "Bayrak"],
        ["Oğlum", "Sahne", "Alkış", "Çırak", "Kitap kapağı"],
        ["Babam", "Tören", "Madalya", "Kendi evi", "Yıllarca emek"],
      ],
      not: "Emeğin karşılık bulduğunu görmek; kendin ya da sevdiğin için hissetmeyi hak ediyorsun.", zorluk: 1,
    },
    "Özgürlük": {
      kartlar: [
        ["Emekli", "Sahil yolu", "Rüzgâr", "Açık pencere", "Kuş"],
        ["Motosiklet", "Çıplak ayak", "Kapanan kredi", "Yayla", "Uzun yol"],
        ["Taşınma kamyonu", "Ayrılık", "Kendi anahtarı", "Tek kişilik ev", "Sessizlik"],
      ],
      not: "Kendi zamanının sahibi olmak; bazen tek ihtiyacımız bir pencereyi açmak.", zorluk: 2,
    },
    "Tatmin": {
      kartlar: [
        ["Kayınpeder", "Su terazisi", "Bulmaca", "Akşamüstü", "Hasat"],
        ["Aşçı", "Dolu kavanozlar", "Temiz mutfak", "Kış hazırlığı", "Etiketler"],
        ["Terzi", "Dikiş makinesi", "Teslim günü", "Ödenen borç", "Derin uyku"],
      ],
      not: "Alkış gerekmez; işini iyi yapmış olmanın sessiz, içten doygunluğu.", zorluk: 3,
    },
    "Keyif": {
      kartlar: [
        ["Tavla", "Közde kahve", "Hamak", "Pazar sabahı", "Kitap"],
        ["Kaplıca", "Bornoz", "Çay bahçesi", "Uzun öğle arası", "Kedi"],
        ["Balık ekmek", "Kordon", "Akşam serinliği", "Pikap", "Mahalle arkadaşı"],
      ],
      not: "Anın tadını çıkarmak bir hak; acele etmeden yaşamak da bir beceri.", zorluk: 2,
    },
    "Rahatlama": {
      kartlar: [
        ["Taksici", "Poliklinik", "Kayıp cüzdan", "Bilinmeyen numara", "Zil sesi"],
        ["Vergi dairesi", "Teslim edilen tez", "Sıcak duş", "Sınav çıkışı", "Ayakkabı çıkarmak"],
        ["Pilot", "İniş", "Emniyet kemeri", "Pist ışıkları", "Yağmurlu sabah"],
      ],
      not: "Gerilimin bedenden akıp gitmesi; vücudun \"tehlike geçti\" deme biçimi.", zorluk: 1,
    },
    "Özgüven": {
      kartlar: [
        ["Takım elbise", "Kürsü", "Direksiyon", "Zor soru", "İlk randevu"],
        ["Satıcı", "Pazarlık", "Kırmızı ruj", "Mülakat", "Topuklu ayakkabı"],
        ["İkinci dil", "Konsolosluk", "Sahne ışığı", "Hata", "Şaka"],
      ],
      not: "Her şeyi bilmek değil, bilmediğinle bile ayakta durabilmek.", zorluk: 2,
    },
    "Zafer": {
      kartlar: [
        ["Kahvehane", "Dava", "Son atış", "Dağ zirvesi", "Konfeti"],
        ["Mahalle maçı", "Uzatma", "Kaleci", "Omuzlar", "Islık"],
        ["Kooperatif", "Belediye", "İmza kampanyası", "Sonuç", "Kutlama"],
      ],
      not: "Uzun bir mücadelenin sonunda gelen o an; tadını çıkarmak serbest.", zorluk: 1,
    },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": {
      kartlar: [
        ["Babaanne", "Örgü atkı", "Harçlık", "Sıcak çorba", "El yazısı"],
        ["Anneanne", "Battaniye", "Abajur", "Not kâğıdı", "Kahve fincanı"],
        ["Dede", "Bahçe kapısı", "Elma ağacı", "Pazar ziyareti", "Cep saati"],
      ],
      not: "Çoğu zaman sözle değil, küçük ve kusurlu jestlerle konuşur.", zorluk: 1,
    },
    "Şefkat": {
      kartlar: [
        ["Kedi yavrusu", "Havlu", "Ateşli alın", "Ninni", "Buruşuk el"],
        ["Yaşlı anne", "Saç tarağı", "Banyo", "Unutkanlık", "Yorgan"],
        ["Yeni öğrenci", "Okul bahçesi", "Yara bandı", "Düşen çocuk", "Kurabiye"],
      ],
      not: "Kırılgan olanı koruma isteği; aynı yumuşaklığı kendine göstermeyi de unutma.", zorluk: 2,
    },
    "Güven": {
      kartlar: [
        ["Yedek anahtar", "Emanet", "Paraşüt", "Ameliyat", "Sır"],
        ["Can dostu", "Kefillik", "Borç", "Verilen söz", "Uzun yolculuk"],
        ["Dağ rehberi", "İp", "Gözler kapalı", "Bebek bakıcısı", "Dümen"],
      ],
      not: "Yıllarla örülür, bir anda sınanır; ilişkilerin görünmeyen temeli.", zorluk: 2,
    },
    "Merhamet": {
      kartlar: [
        ["Evsiz adam", "Eldiven", "Sokak köpeği", "Düşen poşet", "Hasta yatağı"],
        ["Simitçi", "Kış gecesi", "Bozuk para", "Islak karton", "Metro merdiveni"],
        ["Hata yapan çırak", "Yaralı kuş", "Mahkeme salonu", "Hâkim", "İkinci şans"],
      ],
      not: "Başkasının yükünü görüp elini uzatabilmek; insan olmanın en sıcak hâli.", zorluk: 2,
    },
    "Şükran": {
      kartlar: [
        ["Öğretmen", "Ödünç para", "Tesadüf", "Sofra", "Yol kenarı"],
        ["Yabancı sürücü", "Patlak teker", "Sağanak", "Termos", "Adres"],
        ["Komşu teyze", "Hastane kantini", "Ev yemeği", "Zor kış", "Çiçek"],
      ],
      not: "Hayatına dokunanları görmek; söylendiğinde iki tarafı da iyileştirir.", zorluk: 2,
    },
    "Huzur": {
      kartlar: [
        ["Yaşlı çift", "Sıcak süt", "Dalgalar", "Bahçe", "Uyuyan bebek"],
        ["Köy evi", "Soba", "Kar sesi", "Ihlamur", "Mırıltı"],
        ["Dağ evi", "Pus", "Çam kokusu", "Örgü", "Dere sesi"],
      ],
      not: "Dışarısı sustuğunda değil, içerisi yerine oturduğunda gelir.", zorluk: 2,
    },
    "Bağışlama": {
      kartlar: [
        ["Küs kardeş", "Uzatılan el", "Telefon", "Yağmur sonrası", "Yamalı ceket"],
        ["Ayrılmış eş", "Bayram ziyareti", "Kırık vazo", "Özür mektubu", "Temiz sayfa"],
        ["Huysuz baba", "Hastane koridoru", "Kapanmamış hesap", "Çay ikramı", "Sessiz kucaklaşma"],
      ],
      not: "Olanı unutmak değil, o yükü daha fazla taşımamayı seçmek.", zorluk: 2,
    },
    "Aidiyet": {
      kartlar: [
        ["Koro", "Tribün", "Adlı fincan", "Davet", "Uzun sofra"],
        ["Mahalle", "İmece", "Bakkal", "Sabah selamı", "Ortak avlu"],
        ["Takım arkadaşları", "Soyunma odası", "Forma numarası", "Antrenman", "Marş"],
      ],
      not: "Bir yerin parçası olmak, insanın en temel ihtiyaçlarından; her yaşta yeniden kurulabilir.", zorluk: 3,
    },
    "Empati": {
      kartlar: [
        ["Acemi garson", "Yorgun kasiyer", "Yaz işi", "Ağlayan bebek", "Ayakkabı"],
        ["Yeni gelin", "Gurbet", "Sessiz sofra", "Anılar", "Uzak diyar"],
        ["Sınav öğrencisi", "Kapalı kapı", "Karne", "Masa lambası", "Kendi gençliği"],
      ],
      not: "Başkasının ayakkabısıyla birkaç adım yürümek; anlamak, yargılamaktan önce gelir.", zorluk: 3,
    },
    "Sakinlik": {
      kartlar: [
        ["Kalabalık", "Türbülans", "Göl", "Nefes", "Çay demliği"],
        ["Acil servis", "Nöbetçi doktor", "Bekleme", "Duvar saati", "Yavaş adımlar"],
        ["Bayram telaşı", "Dolu mutfak", "Aşçıbaşı", "Kaynayan tencere", "Kepçe"],
      ],
      not: "Fırtınanın ortasında durabilen iç ses; çevrene de bulaşan bir dinginlik.", zorluk: 3,
    },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": {
      kartlar: [
        ["Çocukluk evi", "Yaşlı köpek", "Yağmur", "Boş sandalye", "Haber"],
        ["Komşu dede", "Kapanan dükkân", "Son müşteri", "Sökülen tabela", "Akşam yağmuru"],
        ["Okul arkadaşı", "Veda yemeği", "Bavul", "İstasyon", "Islak mendil"],
      ],
      not: "Değer verdiğin bir şeyi kaybetmenin doğal yasıdır; acele ettirmeye gerek yok.", zorluk: 1,
    },
    "Özlem": {
      kartlar: [
        ["Abla", "Memleket", "Hırka", "Görüntülü arama", "Bir koku"],
        ["Annenin yemeği", "Çocukluk sokağı", "Kartpostal", "Kış akşamı", "Radyo"],
        ["Askerdeki oğul", "Mektup kutusu", "Duvar takvimi", "Telefon sesi", "Dokunulmamış oda"],
      ],
      not: "Sevdiğin birinin içinde bıraktığı yer; mesafe ne kadar uzunsa bağ o kadar görünür.", zorluk: 1,
    },
    "Yalnızlık": {
      kartlar: [
        ["Yeni taşınan", "Metropol", "Tek tabak", "Doğum günü", "Gece on bir"],
        ["Yaşlı komşu", "Pazar günü", "Televizyon", "Sessiz ev", "Kedi maması"],
        ["Kamyon şoförü", "Otel odası", "İş seyahati", "Restoranda tek", "Bayram tatili"],
      ],
      not: "Kalabalığın içinde de hissedilebilir; bağ kurma ihtiyacının sessiz çağrısıdır.", zorluk: 1,
    },
    "Pişmanlık": {
      kartlar: [
        ["Anne", "Otoyol", "Sesli mesaj", "Son cümle", "İstifa"],
        ["İlk göz ağrısı", "Kaçan fırsat", "Gönderilen e-posta", "Uykusuz saatler", "Yanlış dönemeç"],
        ["Küçük kardeş", "Kırık oyuncak", "Azarlama", "Uyuyan yüz", "Ertesi gün"],
      ],
      not: "Değerlerine dönmek istediğini gösterir; telafi için çoğu zaman geç değildir.", zorluk: 2,
    },
    "Hayal Kırıklığı": {
      kartlar: [
        ["İdol", "Broşür", "Kısa tatil", "Paket", "Söz"],
        ["Ünlü restoran", "Uzun kuyruk", "Soğuk yemek", "Yıldızlı yorum", "Hesap"],
        ["Dayı", "Okul gösterisi", "Ön sıra", "Telefon mesajı", "Gelmeyen"],
      ],
      not: "Beklenti ile gerçek arasındaki boşluk; ne kadar önemsediğini de gösterir.", zorluk: 1,
    },
    "Dışlanmışlık": {
      kartlar: [
        ["Eski dostlar", "Çay ocağı", "Grup fotoğrafı", "Kesilen sohbet", "Cuma akşamı"],
        ["Akrabalar", "Bayram masası", "Kendi aralarında", "Ayrı oda", "Mutfak kapısı"],
        ["Mahalle takımı", "Takım seçimi", "Yedek kulübesi", "Sınıf gezisi", "Tek kişilik sıra"],
      ],
      not: "Ait olma ihtiyacına dokunur; acıtması, insanlara ne kadar değer verdiğini gösterir.", zorluk: 2,
    },
    "Boşluk": {
      kartlar: [
        ["Salon", "İmza", "Pazar öğleden sonra", "Kumanda", "Yankı"],
        ["Emekli öğretmen", "Evrak çantası", "Eylül", "Kapanan defter", "Pencere"],
        ["Mezuniyet ertesi", "Toplanan sahne", "Bitiş çizgisi", "Ağır pazartesi", "Gri gökyüzü"],
      ],
      not: "Bir dönemin bitip yenisinin henüz başlamadığı ara; yeni anlamlar için yer açar.", zorluk: 3,
    },
    "Tükenmişlik": {
      kartlar: [
        ["Ekip lideri", "Gece nöbeti", "Bitmeyen liste", "Bulaşık", "Yine sabah"],
        ["Üç çocuk", "Okul servisi", "Ödev", "Akşam yemeği", "Çamaşır"],
        ["Müşteri hizmetleri", "Kulaklık", "Bekleyen çağrı", "Erkenden alarm", "Yine pazartesi"],
      ],
      not: "Tembellik değil, uzun süre fazla vermenin sonucu; dinlenmek bir ihtiyaç, ödül değil.", zorluk: 2,
    },
    "Çaresizlik": {
      kartlar: [
        ["Gişe memuru", "Su baskını", "Yüzde üç şarj", "Kilitli kapı", "Bekleme salonu"],
        ["Yabancı ülke", "Kayıp bagaj", "Kapalı gişe", "Tercüman", "Bozuk otomat"],
        ["Dağ yolu", "Tipi", "Kayan tekerlek", "Kesik hat", "Yardım"],
      ],
      not: "Kontrolün elden kaydığı an; yardım istemek zayıflık değil, en akıllıca hamle.", zorluk: 2,
    },
    "Melankoli": {
      kartlar: [
        ["Akordeoncu", "Pencere kenarı", "Sararmış fotoğraf", "Kapanan sezon", "Kasım akşamı"],
        ["Açık hava sineması", "Gramofon", "Yağmurlu cam", "Siyah beyaz film", "Sonbahar"],
        ["Kışın sahil", "Kapalı lunapark", "Martı", "Rüzgârlı iskele", "Unutulmuş şarkı"],
      ],
      not: "Tatlı ile acının karıştığı yumuşak bir gri; bazen ruh yavaşlamak ister.", zorluk: 3,
    },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": {
      kartlar: [
        ["Yaşlı öğrenci", "Fizik tedavi", "Ret mektubu", "Sabah beşi", "Taş duvar"],
        ["Yüzücü", "Soğuk deniz", "Her gün", "Kulaç", "Rüzgâra karşı"],
        ["Küçük esnaf", "İflas", "Yeniden açılış", "Kredi", "Tuğla"],
      ],
      not: "Yenilgilerden sonra yine masaya oturabilmek; yaşla değil, niyetle ilgilidir.", zorluk: 2,
    },
    "Hayranlık": {
      kartlar: [
        ["Maratoncu", "Köy okulu", "Seksen yaş", "Cerrah", "Sokak ressamı"],
        ["Hemşire", "Bekâr anne", "Çift vardiya", "Ders kitapları", "Gülümseme"],
        ["Çömlekçi", "Çark", "Ellerin hızı", "Atölye kapısı", "Elli yıl"],
      ],
      not: "Başkasında gördüğümüz ışık, çoğu zaman kendimizde büyütmek istediğimiz şeydir.", zorluk: 2,
    },
    "Sadakat": {
      kartlar: [
        ["Berber", "Takım forması", "Kötü günler", "Köpek", "Yüzük"],
        ["Emektar çalışan", "Batan şirket", "Son maaş", "Anahtar", "Otuz yıl"],
        ["Kır at", "Çoban", "Yağmurlu yol", "Kulübe", "Bekleyiş"],
      ],
      not: "Kolay olanı değil, bağlı olduğunu seçmek; zor günlerde anlamı ortaya çıkar.", zorluk: 3,
    },
    "Sorumluluk": {
      kartlar: [
        ["İlaç kutusu", "İptal edilen plan", "Anahtar destesi", "Kaptan", "Fatura"],
        ["Aile reisi", "Okul çantası", "Kardeşler", "Kahvaltı sofrası", "Erken kalkış"],
        ["Vardiya şefi", "Atölye", "Kontrol listesi", "Kilit kontrolü", "Baret"],
      ],
      not: "Değer verdiklerini taşıma isteği; ama yükü paylaşmak da sorumluluğun parçası.", zorluk: 2,
    },
    "Kıskançlık": {
      kartlar: [
        ["Yeni iş arkadaşı", "Mesaj", "Özel şaka", "Komşunun oğlu", "Tatil fotoğrafı"],
        ["Kardeşin bebeği", "Annenin ilgisi", "Aile yemeği", "Fotoğraf albümü", "İkinci tabak"],
        ["Eşin eski arkadaşı", "Düğün davetiyesi", "Geç gelen cevap", "Kıyafet seçimi", "Ayna önü"],
      ],
      not: "Kaybetme korkusunun bir yüzü; sakin bir konuşma çoğu zaman en iyi ilaçtır.", zorluk: 1,
    },
    "Adalet": {
      kartlar: [
        ["Pasta dilimi", "Torpil", "Hakem", "Miras", "Vezne"],
        ["Stajyer", "Maaş bordrosu", "Eşit iş", "Toplantı tutanağı", "Söz hakkı"],
        ["İki kardeş", "Oyuncak", "Tahterevalli", "Sıra", "Terazi"],
      ],
      not: "Sadece kendin için değil, başkası için de ses çıkarabilmek; toplumun görünmez harcı.", zorluk: 2,
    },
    "Suçluluk": {
      kartlar: [
        ["Meslektaş", "Çizik tampon", "Hatalı rapor", "Azar", "Mola"],
        ["Arkadaşın sırrı", "Ağız arası", "Kahve sohbeti", "Yayılan haber", "Kaçan bakış"],
        ["Bekleyen anne", "Ertelenen ziyaret", "Telefon rehberi", "Pazar planı", "Bahane"],
      ],
      not: "Vicdanın \"bunu düzelt\" demesi; itiraf ve telafi çoğu zaman yükü hafifletir.", zorluk: 2,
    },
    "Kibir": {
      kartlar: [
        ["Yat limanı", "Spor araba", "Tavus kuşu", "Kartvizit", "Taht"],
        ["Köye dönen", "Pahalı saat", "Köy sofrası", "Burun", "Yüksek ses"],
        ["Profesör", "Konferans", "Yabancı kelimeler", "Asistan", "Alkışsız salon"],
      ],
      not: "Çoğu zaman içerideki kırılganlığı saklayan bir zırh; altında kabul görme isteği yatar.", zorluk: 3,
    },
    "Onur": {
      kartlar: [
        ["Kalın zarf", "Cüzdan", "Şövalye", "El sıkışma", "Akşam eve dönüş"],
        ["Esnaf", "Fazla para üstü", "Kimse görmedi", "Kâr", "Kantar"],
        ["Emekli asker", "Tutulan söz", "Madalyon", "Yağmurda bekleyiş", "Dik omuz"],
      ],
      not: "Kimse bakmazken de kendine sadık kalmak; başı dik uyumanın sebebi.", zorluk: 3,
    },
    "Rekabet": {
      kartlar: [
        ["Yan komşu", "Sardunya", "Satranç", "Halı saha", "Terfi"],
        ["İki pastane", "Aynı sokak", "İndirim tabelası", "Müşteri", "Sabah açılışı"],
        ["Kuzen", "Sınav puanı", "Piyano resitali", "Aile sohbeti", "Puan tablosu"],
      ],
      not: "Dozunda olunca insanı geliştirir; hele sardunyalar söz konusuysa.", zorluk: 2,
    },

    /* 💜 Mor — Korku Ailesi */
    "Korku": {
      kartlar: [
        ["Çocuklar", "Bodrum", "Ayak sesi", "Şebeke yok", "Uçurum"],
        ["Orman", "Fener", "Çatırtı", "Kamp çadırı", "Kurt uluması"],
        ["Yüksek kat", "Cam köprü", "Teleferik", "Kayak hocası", "Rüzgâr uğultusu"],
      ],
      not: "Seni ve sevdiklerini korumak için var; beden önce davranır, akıl sonra yetişir.", zorluk: 1,
    },
    "Kaygı": {
      kartlar: [
        ["Müdür odası", "Koridor", "Tahlil sonucu", "Söylenti", "Yatağa girince"],
        ["Kira artışı", "Banka ekstresi", "Takvim", "Gece üç", "Hesap makinesi"],
        ["Genç sürücü", "Islak asfalt", "Geç saat", "Cevapsız çağrı", "Pencere başı"],
      ],
      not: "Zihnin henüz olmamış şeylere hazırlanma çabası; şimdiye dönmek sesini kısar.", zorluk: 2,
    },
    "Utanç": {
      kartlar: [
        ["Veli toplantısı", "Mikrofon", "Devekuşu", "Dedikodu", "Banka kartı"],
        ["Eski komşu", "Pazar yeri", "Ödenmemiş borç", "Küçük yalan", "Kapı önü"],
        ["Eşin ailesi", "Tanışma", "Kırılan biblo", "Saklanan parça", "Tatlı servisi"],
      ],
      not: "Kendimize yönelttiğimiz sert bir bakış; hata yapmak seni değersiz yapmaz.", zorluk: 2,
    },
    "Kafa Karışıklığı": {
      kartlar: [
        ["Kayınbirader", "Kılavuz", "Vergi formu", "Kavşak", "Yabancı dil"],
        ["Akıllı telefon", "Şifre", "Teknik destek", "Güncelleme", "Menü"],
        ["İki doktor", "Farklı teşhis", "Reçete", "Prospektüs", "Labirent"],
      ],
      not: "Zihnin yeni bilgiyi yerleştirmeye çalışması; bilmemek, öğrenmenin ilk adımıdır.", zorluk: 2,
    },
    "Güvensizlik": {
      kartlar: [
        ["Şık arkadaşlar", "Silinen taslak", "Ayna", "İnce buz", "Kapı eşiği"],
        ["Ekip toplantısı", "Sunum öncesi", "Kıyafet", "Gülüşmeler", "Beğeni sayısı"],
        ["Ünlü misafir", "Fırın yemeği", "Tuz", "Tadına bakış", "Kısa sessizlik"],
      ],
      not: "İç eleştirmenin sesi çok yükseldiğinde gelir; çoğu zaman kimse senin kadar bakmıyor.", zorluk: 3,
    },
    "Gözü Kalmak": {
      kartlar: [
        ["Bit pazarı", "Piyano", "Yıllar sonra", "Tren camı", "Satılık ev"],
        ["Antikacı", "Eski fiyat", "Para kesesi", "Geçen yaz", "Dönüş yolu"],
        ["Konservatuvar", "Çocukluk düşü", "Başka meslek", "Sınav yılı", "Uzaktan bakmak"],
      ],
      not: "Alamadığın şey, aslında neyi sevdiğini fısıldar; içinde kalan küçük bir istek.", zorluk: 3,
    },
    "Yetersizlik": {
      kartlar: [
        ["Bebek", "Kayınvalide", "Kırmızı kalem", "İlk iş günü", "Yüksek raf"],
        ["Yeni şef", "Bilgisayar programı", "Genç meslektaş", "Sistem hatası", "Yavaş eller"],
        ["Ortaokullu", "Matematik", "Çocuğun sorusu", "Mutfak masası", "Silgi"],
      ],
      not: "Herkes bir şeyi ilk kez yaparken acemidir; öğrenmek zaman ister.", zorluk: 2,
    },
    "Mahcubiyet": {
      kartlar: [
        ["Patronun eşi", "Kuaför", "Yırtık çorap", "Yanlış isim", "Fazla övgü"],
        ["Ev sahibesi", "Tuzlu kahve", "Asansör aynası", "Açık fermuar", "Doğum günü şarkısı"],
        ["Öğretmenim", "Market kasası", "Eksik para", "Arkadaki kuyruk", "Kart reddi"],
      ],
      not: "Küçük bir pot, büyük bir insanlık hâli; gülüp geçebilmek en güzel çıkış.", zorluk: 1,
    },
    "Tedirginlik": {
      kartlar: [
        ["Konuşkan yolcu", "Sahipsiz çanta", "Gölge", "Sessiz telefon", "Kapalı perde"],
        ["Üst kat kiracısı", "Tıkırtı", "Apartman girişi", "Bekleyen araba", "Sönen lamba"],
        ["Fazla nazik satıcı", "Sözleşme", "Küçük yazılar", "Acele", "İmza yeri"],
      ],
      not: "Adı konmamış bir \"bir şeyler ters\" hissi; içgüdüne kulak vermek her zaman meşru.", zorluk: 3,
    },
    "Panik": {
      kartlar: [
        ["Misafirler", "Duman", "Kalkışa az kala", "Asansör", "\"Geldim sayılır\""],
        ["Patron", "Kayıp dosya", "Beş dakika", "Biten pil", "Toplantı salonu"],
        ["Küçük yeğen", "Kalabalık çarşı", "Bir an", "Anons", "Kırmızı mont"],
      ],
      not: "Alarm sisteminin en yüksek sesi; dalga gibi yükselir ve mutlaka geri çekilir.", zorluk: 1,
    },
  },

  /* ════════════════════ ÇOCUK (7-12) ════════════════════ */
  cocuk: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": {
      kartlar: [
        ["Diken", "Cadı", "Alay", "Kara bulut", "Kapı"],
        ["Zorba", "Kırık oyuncak", "Çöp kutusu", "Gri duvar", "Dikenli tel"],
        ["Kötü dev", "Ezilmiş çiçek", "Bataklık", "Yalan", "Fırtına bulutu"],
      ],
      not: "Çok kırılınca böyle sert bir his olabilir. Bir büyüğe anlat.", zorluk: 3, cocukModu: false,
    },
    "Kızgınlık": {
      kartlar: [
        ["Ağabey", "Bir kule", "Çamur", "Volkan", "Kapı sesi"],
        ["Huysuz cüce", "Bozuk tablet", "Boğa", "Hile", "Çaydanlık"],
        ["Sınıf arkadaşı", "Kırık kalem", "Ejderha", "Kapılan sıra", "Öğle arası"],
      ],
      not: "Kızmak çok normal. Önce derin nefes, sonra kelimelerle anlat!", zorluk: 1, cocukModu: true,
    },
    "Arzu": {
      kartlar: [
        ["Çikolata", "Yaz sıcağı", "Dev", "Uzak dağ", "Kayan yıldız"],
        ["Pastane", "Hazine", "Sihirli lamba", "Uzun liste", "Yılbaşı"],
        ["Oyuncak dükkânı", "Kanarya", "Dilek kuyusu", "Altın para", "Hafta sonu"],
      ],
      not: "Bir şeyi çok istemek normal; beklemeyi de öğrenebiliriz.", zorluk: 2, cocukModu: false,
    },
    "Sabırsızlık": {
      kartlar: [
        ["Fırın", "Uzun yol", "Kum saati", "Kuyruk", "Salyangoz"],
        ["Kargo", "Kırmızı ışık", "Takvim", "Yavaş asansör", "Pencere önü"],
        ["Salıncak sırası", "Mikrodalga", "Bekleme odası", "Yükleniyor yazısı", "Tost makinesi"],
      ],
      not: "Beklemek zor! Şarkı söylemek ya da saymak zamanı kısaltır.", zorluk: 1, cocukModu: true,
    },
    "İnat": {
      kartlar: [
        ["Brokoli", "Yatma saati", "Büyük kaya", "Panda", "Kırmızı çizme"],
        ["Yağmurluk", "Küçük fil", "Banyo saati", "Ayakkabılık", "Sabun"],
        ["Saç tarağı", "Ödev defteri", "Kaplan yavrusu", "Park çıkışı", "Üçüncü kez"],
      ],
      not: "Bazen \"hayır\" demek isteriz, normal! Ortada buluşmak işe yarar.", zorluk: 2, cocukModu: true,
    },
    "İsyan": {
      kartlar: [
        ["Kral", "Kural", "Yüksek duvar", "Davul", "Karıncalar"],
        ["Okul müdürü", "Ödev yığını", "Afiş", "Yasak levhası", "Teneffüs"],
        ["Tavuklar", "Çiftçi", "Çit kapısı", "Toplantı", "Horoz sesi"],
      ],
      not: "Kural haksız gelince itiraz etmek normal; sakin konuşmak işe yarar.", zorluk: 3, cocukModu: true,
    },
    "Hınç": {
      kartlar: [
        ["Not defteri", "Eski arkadaş", "Kış", "Yarım oyun", "Gölgeler"],
        ["Kırgın arkadaş", "Küs komşu", "Toz", "Unutulmayan söz", "Taş"],
        ["Gizli defter", "Yarış", "Kaybedilen maç", "Bodrum", "Yıl sonu"],
      ],
      not: "Eski kırgınlıkları bir büyüğe anlatmak yükü hafifletir.", zorluk: 3, cocukModu: false,
    },
    "Tutku": {
      kartlar: [
        ["Dinozor", "Keman", "Futbol", "Her sabah", "Geç saat"],
        ["Gitar teli", "Teleskop", "Yüzme", "Bütün hafta", "Kitaplık"],
        ["Satranç tahtası", "Bale", "Böcek koleksiyonu", "El feneri", "Atölye"],
      ],
      not: "Bir şeyi tüm kalbinle sevmek, seni sen yapan şeylerden biri.", zorluk: 3, cocukModu: false,
    },
    "Hırs": {
      kartlar: [
        ["Madalya", "Kumbara", "Havuz", "Altın yıldız", "Erken kalkış"],
        ["Çıkartma albümü", "Fındık deposu", "Dağ zirvesi", "Puan tablosu", "Bir tane daha"],
        ["Video oyunu", "Kartal", "Bilgi yarışması", "Gökdelen", "Rekor"],
      ],
      not: "En iyisi olmak istemek güç verir; dinlenmek de kazanmaktır.", zorluk: 3, cocukModu: true,
    },
    "Aşk": {
      kartlar: [
        ["Prenses", "Gül", "Mektup", "Ay ışığı", "Dans"],
        ["Kuğular", "Kalpli kart", "Düğün", "Şiir", "Yıldız yağmuru"],
        ["Prens", "Çiçek buketi", "Masal şatosu", "Balo", "Pembe mektup"],
      ],
      not: "Birini çok özel bulmak güzel bir his; büyüdükçe daha iyi anlarsın.", zorluk: 2, cocukModu: false,
    },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": {
      kartlar: [
        ["Bavul", "Roket", "Yarın", "Kuzenler", "Lunapark"],
        ["Kurdele", "Geri sayım", "Arife gecesi", "Sihirli kapı", "Hayvanat bahçesi"],
        ["Perde", "Uçak", "Gizli plan", "Hazine haritası", "Saat sekiz"],
      ],
      not: "Güzel bir şeyi beklerken içindeki kıpır kıpır his, işte bu!", zorluk: 1, cocukModu: true,
    },
    "Coşku": {
      kartlar: [
        ["Stadyum", "Konfeti", "Bayram sabahı", "Havai fişek", "İlk kar"],
        ["Konser", "Tef", "Dans pisti", "Herkes ayakta", "Pamuk şeker"],
        ["Su parkı", "Yunuslar", "Kaydırak", "Bando", "Okulun son günü"],
      ],
      not: "Sevinç içine sığmayınca zıplarsın, bağırırsın. Ne güzel!", zorluk: 2, cocukModu: true,
    },
    "Merak": {
      kartlar: [
        ["Kilitli kutu", "Ayak izi", "Büyüteç", "Kuyu", "Garip ses"],
        ["Mikroskop", "Uzaylı", "Karınca yuvası", "Deniz dibi", "Soru işareti"],
        ["Yeni komşu", "Çatı katı", "Şişedeki mektup", "Mağara ağzı", "Tilki"],
      ],
      not: "Merak, yeni şeyler öğrenmenin anahtarı. Soru sormaya devam!", zorluk: 1, cocukModu: true,
    },
    "Cesaret": {
      kartlar: [
        ["Yüksek ağaç", "Karanlık mağara", "Küçük fare", "İlk gün", "Kaykay"],
        ["Sınıfın önü", "Kocaman köpek", "Doğruyu söylemek", "Kale kapısı", "Minik şövalye"],
        ["Derin su", "Aşı günü", "Kertenkele", "Kalabalık salon", "Gece yürüyüşü"],
      ],
      not: "Cesaret korkmamak değil; korksan da denemek demek!", zorluk: 1, cocukModu: true,
    },
    "Şaşkınlık": {
      kartlar: [
        ["Sihirbaz", "Konuşan papağan", "Hediye paketi", "Pat sesi", "Yazın kar"],
        ["Uçan inek", "Ters dünya", "Yeşil saç", "Dinozor yumurtası", "Patlamış mısır"],
        ["Konuşan ağaç", "Mor muz", "Tavşan deliği", "Bulutsuz yağmur", "Gizli geçit"],
      ],
      not: "Beklemediğin bir şey olunca böyle olmak çok doğal!", zorluk: 1, cocukModu: true,
    },
    "Heves": {
      kartlar: [
        ["Boya kutusu", "Gitar", "Pazartesi", "Fidan", "Kurs"],
        ["Krampon", "Aşçı şapkası", "İlk ders", "Tarif defteri", "Bahar sabahı"],
        ["Kamp çadırı", "Sihir kitabı", "Tamir çantası", "Eylül", "Model uçak"],
      ],
      not: "Yeni bir şeye başlamak için can atmak çok güzel!", zorluk: 2, cocukModu: true,
    },
    "İlham": {
      kartlar: [
        ["Bulut", "Boş sayfa", "Mucit", "Elma", "Gece yarısı"],
        ["Örümcek ağı", "Ressam", "Sonbahar yaprağı", "Duş", "Masal"],
        ["Piyano", "Rüya", "Kâğıt uçak", "Şair", "Kuş ötüşü"],
      ],
      not: "Fikirler bazen birden gelir! Yanında hep bir defter olsun.", zorluk: 3, cocukModu: true,
    },
    "Yaratıcılık": {
      kartlar: [
        ["Karton kutu", "Robot", "Çorap", "Cumartesi", "Kumsal"],
        ["Pijama partisi", "Eski perde", "Hamur", "Uzay gemisi", "Yağmurlu öğle"],
        ["Tencere kapağı", "Mutfak", "Masa oyunu", "Makas", "Düğme kutusu"],
      ],
      not: "Hayal edip yeni bir şey yapmak harika! Kutu bile roket olur.", zorluk: 2, cocukModu: true,
    },
    "Şevk": {
      kartlar: [
        ["Bahçıvan", "Kova", "Şenlik", "Lokomotif", "Öğle güneşi"],
        ["Çiftlik", "Tırmık", "Hasat", "Horoz", "Tatil sonu"],
        ["Temizlik günü", "Süpürge", "Takım çalışması", "Arı kovanı", "Marş"],
      ],
      not: "Sevdiğin işi yaparken enerjin hiç bitmiyorsa, buna şevk denir.", zorluk: 3, cocukModu: false,
    },
    "Büyülenme": {
      kartlar: [
        ["Yıldızlar", "Akvaryum", "Deniz kızı", "Kelebek", "Gökkuşağı"],
        ["Ateş böceği", "Kar küresi", "Peri", "Mum ışığı", "Kristal mağara"],
        ["Balina", "Şelale", "Dev ağaç", "Sirk çadırı", "Ay tutulması"],
      ],
      not: "Bir güzellik seni içine çekince zaman durur gibi olur.", zorluk: 2, cocukModu: true,
    },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": {
      kartlar: [
        ["Doğum günü", "Babaanne", "Salıncak", "Güneş", "Şarkı"],
        ["Kumdan kale", "Teyze", "Kırmızı bisiklet", "Karpuz", "Yaz akşamı"],
        ["Yeni arkadaş", "Kedi yavrusu", "Tatlı rüya", "Mahalle", "Pazar kahvaltısı"],
      ],
      not: "Mutluluk paylaştıkça büyür. Bugün seni ne gülümsetti?", zorluk: 1, cocukModu: true,
    },
    "Neşe": {
      kartlar: [
        ["Palyaço", "Gıdıklama", "Sabun köpüğü", "Komik şapka", "Su tabancası"],
        ["Maymun", "Yastık oyunu", "Takma bıyık", "Çamur birikintisi", "Saklambaç"],
        ["Kartopu", "Hoplayan top", "Kızak", "Şaka", "Hapşu"],
      ],
      not: "Kahkaha atmak bedene de iyi gelir. Gül, güldür!", zorluk: 1, cocukModu: true,
    },
    "Umut": {
      kartlar: [
        ["Tohum", "Kayıp kedi", "Pencere", "Sabah", "Bahar"],
        ["Şişedeki not", "Ada", "Uzak ışık", "Yarın sabah", "Tırtıl"],
        ["Kardelen", "İkinci şans", "Kuş yuvası", "Bulut arası", "Kayıp mektup"],
      ],
      not: "Zor olsa da güzel günler geleceğine inanmak çok güçlü bir his.", zorluk: 2, cocukModu: true,
    },
    "Gurur": {
      kartlar: [
        ["Resim", "Karne", "Sahne", "Antrenör", "Alkış"],
        ["Rozet", "Tören", "Ev yapımı kek", "Bilim fuarı", "Fotoğraf"],
        ["Ayakkabı bağı", "Yüzme belgesi", "Annem", "Tahta oyuncak", "Sınıf panosu"],
      ],
      not: "Emeğini görmek güzeldir. Kendinle gurur duymayı hak ediyorsun!", zorluk: 1, cocukModu: true,
    },
    "Özgürlük": {
      kartlar: [
        ["Uçurtma", "Çayır", "Yaz tatili", "Bisiklet", "Rüzgâr"],
        ["Kanat", "Açık kapı", "Yelkenli", "Balon yolculuğu", "Sonsuz deniz"],
        ["Yalınayak", "Tay", "Okul çıkışı", "Orman yolu", "Kendi odam"],
      ],
      not: "İstediğin gibi koşup oynayabilmek harika! Kanat açmak gibi.", zorluk: 1, cocukModu: true,
    },
    "Tatmin": {
      kartlar: [
        ["Yapboz", "Karınca", "Temiz oda", "Kardan adam", "Akşam üstü"],
        ["Lego gemi", "Dolu sepet", "Son sayfa", "Boyanmış çit", "Kurumuş boya"],
        ["Örgü", "Yaprak yığını", "Kumdan heykel", "Sincap", "Bahçe hortumu"],
      ],
      not: "Bir işi sonuna kadar bitirmek içini doyurur. Tadını çıkar!", zorluk: 3, cocukModu: true,
    },
    "Keyif": {
      kartlar: [
        ["Kakao", "Hamak", "Pazar sabahı", "Tembel kedi", "Battaniye"],
        ["Limonata", "Serin gölge", "Şezlong", "Çizgi roman", "Öğle uykusu"],
        ["Köpük banyosu", "Kestane", "Terlik", "Kış akşamı", "Ayı"],
      ],
      not: "Küçük güzel anların tadını çıkarmak da bir beceri!", zorluk: 2, cocukModu: true,
    },
    "Rahatlama": {
      kartlar: [
        ["Diş hekimi", "Sınav", "Ilık banyo", "Eve dönüş", "Zil"],
        ["Kalabalık market", "Annemin sesi", "Bulunan cüzdan", "Eve dönen güvercin", "Bitmiş fırtına"],
        ["Uçak inişi", "Ağır sırt çantası", "Perde kapanışı", "Yumuşak yatak", "Deve"],
      ],
      not: "Endişe bitince beden gevşer. \"Oh be!\" demek gibi.", zorluk: 1, cocukModu: true,
    },
    "Özgüven": {
      kartlar: [
        ["Mikrofon", "Pelerin", "Ayna", "Kaptan", "Atlama tahtası"],
        ["Sınıf başkanı", "Aslan", "Tahta önü", "Yarışma sahnesi", "Süper kahraman"],
        ["Kalabalık şehir", "Kartal yavrusu", "Sunum", "Renkli saç", "Pastane siparişi"],
      ],
      not: "Kendine inanmak, yeni şeyleri denemeyi kolaylaştırır. Sen yapabilirsin!", zorluk: 2, cocukModu: true,
    },
    "Zafer": {
      kartlar: [
        ["Kupa", "Bitiş çizgisi", "Minik ejderha", "Satranç", "Düdük"],
        ["Halat çekme", "Takım bayrağı", "Dev robot", "Son saniye", "Tepe"],
        ["Bulmaca kitabı", "Şampiyon", "Mahalle turnuvası", "Küçük balık", "Gökyüzü"],
      ],
      not: "Emek verip başarınca kutlamak güzel. Rakibine de nazik ol!", zorluk: 1, cocukModu: true,
    },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": {
      kartlar: [
        ["Dede", "Sarılma", "Örgü atkı", "Sıcak çorba", "Köpeğim"],
        ["Kedim", "Kalpli taş", "Akşam masalı", "Kardeşim", "Bahçe kapısı"],
        ["Fil ailesi", "Kurabiye kokusu", "Annemin eli", "Yolculuk", "Pazar ziyareti"],
      ],
      not: "Sevgi, birine \"iyi ki varsın\" demek gibi. Bugün kime sarıldın?", zorluk: 1, cocukModu: true,
    },
    "Şefkat": {
      kartlar: [
        ["Bebek", "Yavru kuş", "Yara bandı", "Ninni", "Yuva"],
        ["Oyuncak hastanesi", "Sıcak süt", "Kardeşin dizi", "Islak tavşan", "Nezle"],
        ["Solmuş fide", "Nine", "Kaplumbağa yavrusu", "Sulama", "Kış sabahı"],
      ],
      not: "Küçüklere nazikçe bakmak, kalbinin ne kadar yumuşak olduğunu gösterir.", zorluk: 2, cocukModu: true,
    },
    "Güven": {
      kartlar: [
        ["Baba", "Can simidi", "Köprü", "İp merdiven", "Fener"],
        ["Tutulan el", "Bisiklet dersi", "Ağaç dalı", "Kalın halat", "Sıcak ev"],
        ["Veteriner", "Emniyet kemeri", "Anahtar", "Bilge baykuş", "Kalın duvar"],
      ],
      not: "Yanında olan insanlar dünyayı kolaylaştırır. Senin için onlar kim?", zorluk: 2, cocukModu: true,
    },
    "Merhamet": {
      kartlar: [
        ["Sokak köpeği", "Soğuk gece", "Şemsiye", "Yaşlı adam", "Yaralı kanat"],
        ["Düşen çocuk", "Yarım sandviç", "Okul yolu", "Islak güvercin", "Kış rüzgârı"],
        ["Barınak", "Kumsaldaki balina", "Kırık sepet", "Aç kedi", "Sağanak"],
      ],
      not: "Başkasının zor anını görüp yardım etmek istemek çok değerli.", zorluk: 2, cocukModu: true,
    },
    "Şükran": {
      kartlar: [
        ["Komşu teyze", "Börek", "Postacı", "Kayıp eldiven", "Hasta yatağı"],
        ["Öğretmen", "Ağaçtaki uçurtma", "Sofra", "Yardım eden eller", "Bayram"],
        ["Ekmek", "Fırıncı", "Yağmur damlası", "Kurtarıcı köpek", "Resimli kart"],
      ],
      not: "Sana iyilik yapanı fark edip teşekkür etmek kalbi büyütür.", zorluk: 3, cocukModu: true,
    },
    "Huzur": {
      kartlar: [
        ["Anneanne", "Yorgan", "Yağmur sesi", "Ağaç ev", "Dere"],
        ["Deniz kenarı", "Mışıl uyku", "Bahçe", "Ihlamur", "Gece masalı"],
        ["Çam ormanı", "Şömine", "Kitap köşesi", "Kuzu yünü", "Sessiz kar"],
      ],
      not: "Her şeyin yerli yerinde olduğu tatlı bir his. Çok güzel!", zorluk: 2, cocukModu: true,
    },
    "Bağışlama": {
      kartlar: [
        ["Sakar ayı", "Yırtık resim", "Ertesi gün", "Çiçek", "Serçe parmak"],
        ["Kırık bardak", "Beyaz bayrak", "Bölünmüş kurabiye", "Ormanın tilkisi", "Gün batımı"],
        ["Sökük ayıcık", "Yapıştırıcı", "Yağmur sonrası", "Kirpi ailesi", "Tahta köprü"],
      ],
      not: "Affetmek, içindeki ağır taşı bırakmak gibi. Hafiflersin!", zorluk: 2, cocukModu: true,
    },
    "Aidiyet": {
      kartlar: [
        ["İzci", "Takım tişörtü", "Sınıf fotoğrafı", "Koro", "Kuş sürüsü"],
        ["Aile ağacı", "Mahalle maçı", "Aynı şapkalar", "Yunus sürüsü", "Bayram sofrası"],
        ["Kulüp rozeti", "Kamp ateşi", "Penguen kolonisi", "Okul marşı", "Sıra arkadaşı"],
      ],
      not: "Bir gruba katılmak, \"ben de buradayım\" demek. Herkesin bir yeri var.", zorluk: 3, cocukModu: true,
    },
    "Empati": {
      kartlar: [
        ["Gözyaşı", "Dondurma", "Ayakkabı", "Geçen yıl", "Yabancı dil"],
        ["Yeni öğrenci", "Kayıp ördek", "Yırtık çanta", "İlk hafta", "Hatıra"],
        ["Kafesteki kuş", "Yaşlı at", "Susamış çiçek", "Dede bastonu", "Ters dönen böcek"],
      ],
      not: "Başkasının ne hissettiğini anlamak bir süper güç!", zorluk: 3, cocukModu: true,
    },
    "Sakinlik": {
      kartlar: [
        ["Göl", "Kaplumbağa", "Akşam", "Fırtına", "Tüy"],
        ["Bulut izlemek", "Koala", "Yoga minderi", "Kum bahçesi", "Sabah sisi"],
        ["Denizanası", "Yüzen yaprak", "Kayık", "Rüzgâr gülü", "Gece sessizliği"],
      ],
      not: "Yavaş nefes, içindeki dalgaları durultur. Bu bir süper güç!", zorluk: 3, cocukModu: true,
    },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": {
      kartlar: [
        ["Kırmızı balon", "Oyuncak ayı", "Son gün", "Solan çiçek", "Sessiz oda"],
        ["Taşınma kamyonu", "El sallama", "Yarım resim", "Gri gün", "Sessiz salıncak"],
        ["Kaybolan kolye", "Su birikintisi", "Göçmen kuşlar", "Bitmiş tatil", "Islak kum"],
      ],
      not: "Ağlamak ve içinin buruk olması normal. Bir sarılma çok iyi gelir.", zorluk: 1, cocukModu: true,
    },
    "Özlem": {
      kartlar: [
        ["Tren", "Eski fotoğraf", "Kuzen", "Kartpostal", "Uzak şehir"],
        ["Eski ev", "Kokulu yastık", "Yaz kampı", "Ay", "Telefon sesi"],
        ["Gemici", "Liman", "Plak", "Kış tatili", "Uzay istasyonu"],
      ],
      not: "Birini ne kadar sevdiğini gösterir. Ona bir resim çizebilirsin!", zorluk: 1, cocukModu: true,
    },
    "Yalnızlık": {
      kartlar: [
        ["Astronot", "Boş park", "Sessiz telefon", "Kutup ayısı", "Pazar akşamı"],
        ["Issız ada", "Teneffüs köşesi", "Tek ağaç", "Kar tanesi", "Boş sofra"],
        ["Yeni mahalle", "Deniz kabuğu", "Kapalı kapılar", "Fener bekçisi", "Yaz ortası"],
      ],
      not: "Herkes bazen böyle hisseder. \"Gel oynayalım\" demek işe yarar.", zorluk: 1, cocukModu: true,
    },
    "Pişmanlık": {
      kartlar: [
        ["Kaçan otobüs", "Son kurabiye", "Unutulan ödev", "Dün akşam", "Küs arkadaş"],
        ["Acele", "Dökülen boya", "Kardeşin ağlaması", "Çatlak saksı", "Ertesi hafta"],
        ["Giden dondurmacı", "Söylenmeyen söz", "Yarım şarkı", "Kaçırılan gol", "Yaz sonu"],
      ],
      not: "\"Keşke\" demek, bir dahakine farklı yapmayı öğretir. Hata yapmak normal.", zorluk: 2, cocukModu: true,
    },
    "Hayal Kırıklığı": {
      kartlar: [
        ["Piknik", "Yağmur", "Kapalı dükkân", "Kutu", "Söz"],
        ["Çorap hediyesi", "Sönmüş mum", "Kapalı havuz", "Kayıp bilet", "Pazar"],
        ["Pilsiz oyuncak", "Ertelenen maç", "Sönük balon", "Bozuk kaydırak", "Dolu sinema"],
      ],
      not: "Beklediğin olmayınca için söner, normal. Yeni bir plan yapabilirsin!", zorluk: 1, cocukModu: true,
    },
    "Dışlanmışlık": {
      kartlar: [
        ["İp atlama", "Fısıltı", "Bank", "Davetiye", "Ördek yavrusu"],
        ["Takım seçimi", "Benekli zebra", "Kapalı çember", "Pijama gecesi", "Öğle masası"],
        ["Gizli kulüp", "Kara koyun", "Grup fotoğrafı", "Yağmurlu teneffüs", "Çit arkası"],
      ],
      not: "Oyuna alınmamak çok acıtır. Bu senin suçun değil; bir büyüğe anlat.", zorluk: 2, cocukModu: true,
    },
    "Boşluk": {
      kartlar: [
        ["Radyo", "Tavan", "Öğleden sonra", "Çöl", "Musluk"],
        ["Gri gökyüzü", "Durgun su", "Kapalı perde", "Sıkıcı öğle", "Çakıl"],
        ["Sessiz ev", "Kum", "Bekleme", "Kurumuş kuyu", "Duvar"],
      ],
      not: "Bazen hiçbir şey hissetmeyiz. Bir büyüğe anlatmak iyi gelir.", zorluk: 3, cocukModu: false,
    },
    "Tükenmişlik": {
      kartlar: [
        ["Arı", "Ağır çanta", "Uzun hafta", "Bitmeyen ödev", "Pil"],
        ["Yorgun at", "Dik merdiven", "Ağır kova", "Bitmeyen gün", "Sönen fener"],
        ["Kum torbası", "Yokuş", "Düdüklü tencere", "Ağır ders", "Çalar saat"],
      ],
      not: "Çok yorulunca dinlenmek tembellik değil, ihtiyaç.", zorluk: 3, cocukModu: false,
    },
    "Çaresizlik": {
      kartlar: [
        ["Sıkı kavanoz", "Ağaçtaki kedi", "Minik böcek", "Yüksek raf", "Bozuk asansör"],
        ["Akıntı", "Kopan ip", "Çamurlu yol", "Minik kayık", "Batan güneş"],
        ["Şifreli kapı", "Düğümlü bağcık", "Islak kanat", "Dikenli çalı", "Kaçan tren"],
      ],
      not: "Hiçbir şey işe yaramıyor gibiyse yardım istemek en akıllıca adım.", zorluk: 2, cocukModu: true,
    },
    "Melankoli": {
      kartlar: [
        ["Deniz feneri", "Sonbahar", "Müzik kutusu", "Martı", "Eski sokak"],
        ["Eski iskele", "Tozlu piyano", "Yağmurlu cam", "Güz akşamı", "Sararmış yaprak"],
        ["Fotoğraf albümü", "Boş sahil", "Saat kulesi", "Sis", "Leylekler"],
      ],
      not: "Hafif kederli günler de geçer; sevdiğin bir şarkı iyi gelir.", zorluk: 3, cocukModu: false,
    },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": {
      kartlar: [
        ["Paten", "Dağ yolu", "Kunduz", "Çizik", "Damla"],
        ["Karınca ailesi", "Tırmanma duvarı", "Zor düğüm", "Yağmurlu antrenman", "Kar fırtınası"],
        ["Somon balığı", "Bisiklet zinciri", "Harf defteri", "Taşlı yol", "Sabah koşusu"],
      ],
      not: "Düşüp yeniden kalkmak seni güçlü yapar. Vazgeçmediğin için tebrikler!", zorluk: 2, cocukModu: true,
    },
    "Hayranlık": {
      kartlar: [
        ["İtfaiyeci", "Poster", "Abla", "Akrobat", "Çizgi film"],
        ["Bilim insanı", "Pilot", "Uçak gösterisi", "Dedenin hikâyesi", "İmza"],
        ["Balerin", "Usta aşçı", "Dev gemi", "Bahar gösterisi", "Kocaman alkış"],
      ],
      not: "Birini örnek almak, senin de neler yapabileceğini gösterir.", zorluk: 2, cocukModu: true,
    },
    "Sadakat": {
      kartlar: [
        ["En iyi arkadaş", "Bileklik", "Verilen söz", "Okul bahçesi", "Bekçi köpek"],
        ["İstasyon", "Köpek tasması", "Her akşam", "Tren rayı", "Midilli"],
        ["Kaybeden takım", "Fırtınalı yol", "İkiz sincaplar", "Yardım çağrısı", "Taş kale"],
      ],
      not: "Zor anda arkadaşının yanında durmak, gerçek dostluğun işaretidir.", zorluk: 3, cocukModu: true,
    },
    "Sorumluluk": {
      kartlar: [
        ["Hamster", "Nöbetçi rozeti", "Ev anahtarı", "Saksı çiçeği", "Çoban"],
        ["Bebek arabası", "Kardeşin eli", "Alışveriş listesi", "Söz verilen saat", "Kaptan şapkası"],
        ["Kuş yemliği", "Çöp poşeti", "Yavru köpek", "Kaktüs", "Her öğlen"],
      ],
      not: "Bir işi üstlenip yapmak büyüdüğünü gösterir. Aferin sana!", zorluk: 2, cocukModu: true,
    },
    "Kıskançlık": {
      kartlar: [
        ["Kardeş", "Parlak ayakkabı", "Kucak", "Misafirler", "Hediye"],
        ["İki arkadaş", "Yeni çocuk", "Gizli şaka", "Ortak oyun", "Öğretmenin övgüsü"],
        ["Kuzenin bisikleti", "Altın etiket", "Ön sıra", "Sahne ışığı", "Komşunun havuzu"],
      ],
      not: "Bunu hissetmek normal; sevgi azalmaz, kalpte herkese yer var.", zorluk: 1, cocukModu: true,
    },
    "Adalet": {
      kartlar: [
        ["Üç sincap", "Pasta dilimi", "Hakem", "Sıra", "Çekiliş"],
        ["Tahterevalli", "Oyun kuralları", "Yazı tura", "Ayı ve tilki", "Kurabiye tabağı"],
        ["Yaşlı fil", "Orman toplantısı", "Kaybolan fındık", "Tavşan", "Doğru cevap"],
      ],
      not: "Herkese eşit davranılmasını istemek çok değerli bir his.", zorluk: 3, cocukModu: true,
    },
    "Suçluluk": {
      kartlar: [
        ["Vazo", "Kavanoz", "Ayak sesleri", "Leke", "Yastık"],
        ["Gizli çikolata", "Masum papağan", "Dolap içi", "Yemek masası", "Merdiven gıcırtısı"],
        ["Ödünç kitap", "Kırık uçak", "Islak sayfa", "Teneffüs sonrası", "Sessiz yemek"],
      ],
      not: "Hata herkesin başına gelir. Söylemek içini hafifletir.", zorluk: 2, cocukModu: true,
    },
    "Kibir": {
      kartlar: [
        ["Tavus kuşu", "Taç", "Spor araba", "Boş tribün", "Kurbağa"],
        ["Bilgiç baykuş", "Altın düğme", "Kendi heykeli", "Saray", "Sahne arkası"],
        ["Gümüş bisiklet", "Kocaman parti", "Prens kedi", "Uzun saç", "Ayna önü"],
      ],
      not: "Herkes bazen hava atar. Başkalarını dinlemek seni daha sevilen yapar.", zorluk: 3, cocukModu: true,
    },
    "Onur": {
      kartlar: [
        ["Şövalye", "Cüzdan", "El sıkışma", "Bayrak", "Kopya"],
        ["Dürüst çocuk", "Bulunan para", "Kalkan", "Doğru yol", "Yemin"],
        ["Bayrak direği", "Madalyon", "Kahraman", "Sancak", "Sabah güneşi"],
      ],
      not: "Doğru olanı yapınca kendine saygın artar.", zorluk: 3, cocukModu: false,
    },
    "Rekabet": {
      kartlar: [
        ["Çita", "Kronometre", "Komşu çocuğu", "Bilye", "Merdiven"],
        ["İki kardeş", "Masa tenisi", "Yarış arabası", "Son tur", "Yan bahçe"],
        ["İki karga", "En yüksek dal", "Hazine avı", "Spor günü", "Final"],
      ],
      not: "Yarışmak eğlenceli ve seni geliştirir. Sonunda el sıkışmayı unutma!", zorluk: 2, cocukModu: true,
    },

    /* 💜 Mor — Korku Ailesi */
    "Korku": {
      kartlar: [
        ["Gök gürültüsü", "Gölge", "Kuzu", "Örümcek", "Koridor"],
        ["Kalabalık çarşı", "Sisli orman", "Tavşan yavrusu", "Akşam karanlığı", "Uzun tünel"],
        ["Havlayan köpek", "Dönme dolap", "Yüksek balkon", "Ani ses", "Fare deliği"],
      ],
      not: "Korkmak seni korumak için var. Bir büyüğün elini tutmak iyi gelir.", zorluk: 1, cocukModu: true,
    },
    "Kaygı": {
      kartlar: [
        ["Okul çantası", "Tik tak", "Kirpi", "Gösteri", "Kalabalık"],
        ["Okuma sırası", "Ders zili", "Yarınki maç", "Fındık faresi", "Uykusuz gece"],
        ["Geç kalan baba", "Hayvan hastanesi", "Telefon zili", "Pencere başı", "Bulutlu hava"],
      ],
      not: "\"Ya olursa?\" düşünceleri normal. Konuşmak ve nefes almak iyi gelir.", zorluk: 2, cocukModu: true,
    },
    "Utanç": {
      kartlar: [
        ["Kostüm", "Kabuk", "Gülüşmeler", "Devekuşu", "Kırmızı kalem"],
        ["Yanlış cevap", "Düşen tepsi", "Yemekhane", "Saklanan kirpi", "Ani sessizlik"],
        ["Yırtık pantolon", "Bale gösterisi", "Fotoğrafçı", "Ördek ayakları", "Kaygan buz"],
      ],
      not: "Herkes bazen saklanmak ister. Hata seni değersiz yapmaz, sen kıymetlisin.", zorluk: 2, cocukModu: true,
    },
    "Kafa Karışıklığı": {
      kartlar: [
        ["Labirent", "İkizler", "Ters saat", "Yumak", "Bilmece"],
        ["Ters harita", "Üç kapı", "Yabancı şehir", "Kayıp turist", "Kesirler"],
        ["Aynalar odası", "Çift başlı ejder", "Sihirli sis", "Yanlış durak", "Bukalemun"],
      ],
      not: "Anlamadığında soru sormak çok akıllıca. Kimse her şeyi bilmez!", zorluk: 2, cocukModu: true,
    },
    "Güvensizlik": {
      kartlar: [
        ["Gözlük", "Zürafa", "Kısa saç", "İnce buz", "Sallanan köprü"],
        ["Diş teli", "Sınıf kapısı", "Çilli yüz", "Kocaman fil", "Fotoğraf günü"],
        ["Bilinmeyen oyun", "Satranç kulübü", "Kum tepesi", "Minik kanguru", "İlk telefon"],
      ],
      not: "Kendinden emin olmamak herkesin başına gelir. Sen olduğun gibi değerlisin.", zorluk: 3, cocukModu: true,
    },
    "Gözü Kalmak": {
      kartlar: [
        ["Vitrin", "Kumandalı araba", "Renkli kalem", "Saksağan", "Arka koltuk"],
        ["Pastane camı", "Komşunun elması", "Dondurma arabası", "Aç ayıcık", "Çilekli pasta"],
        ["Arkadaşın köpeği", "Parlak taş", "Pazar tezgâhı", "Uçan balon", "Karga"],
      ],
      not: "Bir şeyi çok istemek normal. Doğum günü listene yazabilirsin!", zorluk: 2, cocukModu: true,
    },
    "Yetersizlik": {
      kartlar: [
        ["Penguen", "Kâğıt kanat", "Yüzme dersi", "Uzun boylular", "Zor bulmaca"],
        ["Zor kelime", "Ablanın karnesi", "Kalın kitap", "Kısa bacaklı ördek", "Basket potası"],
        ["Takla", "Çırak sihirbaz", "Halat tırmanma", "Dev ayakkabı", "Kardeşin çizimi"],
      ],
      not: "Herkesin ayrı bir yeteneği var. Bir şeyi yapamamak seni küçültmez.", zorluk: 2, cocukModu: true,
    },
    "Mahcubiyet": {
      kartlar: [
        ["Ters kazak", "Yanlış isim", "Hapşırık", "Domates", "Kamera"],
        ["Muz kabuğu", "Islak zemin", "Sakız", "Uçan peruk", "Kalabalık asansör"],
        ["Teyzenin övgüsü", "Bebek fotoğrafı", "Adının okunması", "Ters şapka", "Misafir odası"],
      ],
      not: "Yanakların kızarırsa dert etme; herkesin başına gelir, sonra güleriz!", zorluk: 1, cocukModu: true,
    },
    "Tedirginlik": {
      kartlar: [
        ["Çıtırtı", "Baykuş", "Yabancı sokak", "Asansör", "Bulutlu gök"],
        ["Yeni bakıcı", "Pencere aralığı", "Garip koku", "Tuhaf sessizlik", "Yabancı araba"],
        ["Kıpırdayan çalı", "Durgun hava", "Sallanan tekne", "Orman patikası", "Uzaktan gök"],
      ],
      not: "Bir şey tuhaf gelince dikkat kesilmek normal. Bir büyüğe sorabilirsin.", zorluk: 2, cocukModu: true,
    },
    "Panik": {
      kartlar: [
        ["Servis", "Tek ayakkabı", "Beyaz tavşan", "Taşan küvet", "Alarm"],
        ["Kaçan hamster", "Düşen anahtarlık", "Yanan kek", "Çalan telefon", "Beş dakika"],
        ["Dağılan bilyeler", "Uçan kâğıtlar", "Kopan düğme", "Perde arkası", "Kaçan tavuk"],
      ],
      not: "Her şey birden olunca dur, nefes al, sonra tek tek yap.", zorluk: 1, cocukModu: true,
    },
  },
};

/** age: 'genc' | 'yetiskin' | 'cocuk' → o duygunun kayıtları { kartlar, not, zorluk } (yoksa null) */
export function getEmotionCard(emotion, age) {
  var set = CARDS[age] || CARDS.yetiskin;
  return set[emotion] || null;
}

/** Bu duygu verilen yaş kategorisinde çekilebilir mi? */
export function isPlayable(emotion, age) {
  var c = getEmotionCard(emotion, age);
  return !!c && c.cocukModu !== false;
}
