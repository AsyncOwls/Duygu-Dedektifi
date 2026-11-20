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
 * Her kart:
 *   kelimeler → 5 bağımsız hikâye tohumu
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
    "Nefret": { kelimeler: ["Zorba", "Duvar", "Zehir", "Çöp kutusu", "Engelle tuşu"], not: "Derin bir incinmenin sinyali; hissetmek normal, nasıl davranacağını sen seçersin.", zorluk: 2 },
    "Kızgınlık": { kelimeler: ["Kardeş", "Kapı", "Kırmızı ışık", "Kuyruk", "Düdük"], not: "Sınırının aşıldığını haber verir; seni ve değerlerini korumak için var.", zorluk: 1 },
    "Arzu": { kelimeler: ["Mıknatıs", "Harçlık", "Gece yarısı", "Sıcak ekmek", "Uzak ışıklar"], not: "Neyi istediğini gösterir; hedeflerini bulmana yardım eden bir pusula.", zorluk: 3 },
    "Sabırsızlık": { kelimeler: ["Kargo", "Durak", "Kum saati", "Asansör", "Yarın"], not: "Bir şeyi çok önemsediğini gösterir; derin bir nefes beklemeyi kolaylaştırır.", zorluk: 2 },
    "İnat": { kelimeler: ["Baba", "Keçi", "Kaya", "Akşam yemeği", "Son söz"], not: "Sözünü korumaya çalışırsın; ama bazen esneyebilmek de bir güçtür.", zorluk: 2 },
    "İsyan": { kelimeler: ["Müdür", "Kural", "Megafon", "Kafes", "Saç kesimi"], not: "Haksızlığa ses çıkarma isteği; doğru yolla kullanınca gerçek değişim yaratır.", zorluk: 2 },
    "Hınç": { kelimeler: ["Eski defter", "Rövanş", "Ekran görüntüsü", "Hesap", "Yıllar sonra"], not: "Kin de denir. İncinen yanın adalet istiyor; konuşmak, biriktirmekten iyi gelir.", zorluk: 3 },
    "Tutku": { kelimeler: ["Gitar", "Nasır", "Usta", "Ateş", "Gün doğumu"], not: "Seni sen yapan şeyleri gösterir; hayatına anlam ve enerji katar.", zorluk: 2 },
    "Hırs": { kelimeler: ["Merdiven", "Sıralama", "Kütüphane", "Kronometre", "Taç"], not: "Seni hedefe iten bir motor; arada dinlenirsen çok daha iyi çalışır.", zorluk: 3 },
    "Aşk": { kelimeler: ["Mektup", "Kelebek", "Ödünç kalem", "Balkon", "Yaz akşamı"], not: "Birine yakınlık duymak çok doğal; kalbinin bağ kurma isteğini gösterir.", zorluk: 1 },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["Bavul", "Geri sayım", "Perde", "Peron", "Sabah 5"], not: "Bedende korkuya çok benzer; fark, beklediğin şeyin güzel olması.", zorluk: 1 },
    "Coşku": { kelimeler: ["Davul", "Kar tatili", "Havai fişek", "Dalga", "Mahalle maçı"], not: "Sevincin taşmasıdır; başkalarıyla paylaşınca daha da büyür.", zorluk: 2 },
    "Merak": { kelimeler: ["Anahtar deliği", "Harita", "Karşı pencere", "Fısıltı", "Uzay"], not: "Öğrenmenin motorudur; dünyayı keşfetmeni sağlar.", zorluk: 2 },
    "Cesaret": { kelimeler: ["Mikrofon", "Yüksek dal", "Söz hakkı", "Derin su", "Karanlık oda"], not: "Korkmamak değil, korkuya rağmen adım atmaktır; herkesin içinde var.", zorluk: 2 },
    "Şaşkınlık": { kelimeler: ["Sihirbaz", "Kapı zili", "Sessiz arkadaş", "Yüz puan", "Ters dünya"], not: "Beynin yeni bilgiyi işliyor; birkaç saniyelik doğal bir duraklama.", zorluk: 2 },
    "Heves": { kelimeler: ["Defter", "Pazartesi", "Spor ayakkabı", "Broşür", "Ocak ayı"], not: "Başlama enerjisi; bazen çabuk söner, küçük adımlar onu canlı tutar.", zorluk: 3 },
    "İlham": { kelimeler: ["Sokak müzisyeni", "Ampul", "Peçete", "Duş", "Yıldız kayması"], not: "Bir andan gelen kıvılcım; içindeki potansiyeli uyandırır. Hemen not al!", zorluk: 2 },
    "Yaratıcılık": { kelimeler: ["Karton kutu", "Boş sayfa", "Hurdalık", "Bulut", "Sıkıcı ders"], not: "Herkeste vardır; hata yapmaya izin verince daha çok ortaya çıkar.", zorluk: 2 },
    "Şevk": { kelimeler: ["Kulüp", "Boya kovası", "Lokomotif", "Şenlik", "İmece"], not: "İşe gönülden sarılmak; bulaşıcıdır, zor işleri bile keyifli kılar.", zorluk: 3 },
    "Büyülenme": { kelimeler: ["Kuzey ışıkları", "Akvaryum", "Teleskop", "Elektrik kesintisi", "Kar tanesi"], not: "Dünyanın güzelliğine açılmak; zihnini hem dinlendirir hem genişletir.", zorluk: 2 },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Yavru kedi", "Bahçe", "Güneş", "Uzun masa", "Yaz tatili"], not: "Neyin sana iyi geldiğini gösterir; o şeyleri hayatında çoğalt.", zorluk: 1 },
    "Neşe": { kelimeler: ["Şakacı", "Balon", "Okul servisi", "Tavuk sesi", "Komik video"], not: "Gülmek stresi azaltır ve insanları birbirine yaklaştırır.", zorluk: 1 },
    "Umut": { kelimeler: ["Tohum", "Yedek kulübesi", "Gökkuşağı", "İkinci şans", "Şafak"], not: "Zor zamanlarda devam etmeni sağlayan ışık; çok güçlü bir duygu.", zorluk: 2 },
    "Gurur": { kelimeler: ["Madalya", "İlk gol", "Aile fotoğrafı", "Sahne", "Küçük kardeş"], not: "Emeğin karşılığını görmek; kendini takdir etmek çok sağlıklıdır.", zorluk: 1 },
    "Özgürlük": { kelimeler: ["Bisiklet", "Ev anahtarı", "Sahil yolu", "Kuş", "Yaz sabahı"], not: "Kendi seçimlerini yapma isteği ergenlikte çok doğal ve önemli.", zorluk: 1 },
    "Tatmin": { kelimeler: ["Yapboz", "Toplanmış oda", "Teslim günü", "Pazar akşamı", "Dolu kumbara"], not: "Emeğinin yerini bulduğunu hissetmek; \"yeterince iyi\" demeyi öğretir.", zorluk: 3 },
    "Keyif": { kelimeler: ["Sıcak kakao", "Kedi", "Yağmur", "Hamak", "Uzun kahvaltı"], not: "Küçük zevkleri fark etmek ruh sağlığını güçlendirir.", zorluk: 2 },
    "Rahatlama": { kelimeler: ["Zil sesi", "Sınav çıkışı", "Kayıp kedi", "Ağır çanta", "Doktor"], not: "Stres bitince beden kendini sıfırlar; bu anın tadını çıkar.", zorluk: 2 },
    "Özgüven": { kelimeler: ["Ayna", "Sunum", "Kendi tarzın", "Dans pisti", "Süper kahraman"], not: "Hata yapsan da değerli olduğunu bilmektir; zamanla inşa edilir.", zorluk: 3 },
    "Zafer": { kelimeler: ["Kupa", "Son saniye", "Dağ tepesi", "Bilgisayar oyunu", "Rakip"], not: "Zorluğun üstesinden gelmenin coşkusu; emeğinin meyvesini kutla.", zorluk: 1 },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Büyükanne", "Örgü atkı", "Kapı önü", "Sesli mesaj", "Sofra"], not: "İnsanları birbirine bağlayan güçlü bir yapıştırıcı; hepimizin ihtiyacı.", zorluk: 1 },
    "Şefkat": { kelimeler: ["Kuş yavrusu", "Kâbus", "Yara bandı", "Battaniye", "Küçük el"], not: "Birini korumak ve kollamak istemek; aynısını kendine de gösterebilirsin.", zorluk: 2 },
    "Güven": { kelimeler: ["Köprü", "Sır", "Günlük", "Sıra arkadaşı", "Paraşüt"], not: "İlişkilerin temeli; zamanla, tutulan küçük sözlerle büyür.", zorluk: 2 },
    "Merhamet": { kelimeler: ["Sokak kedisi", "Eldiven", "Yaşlı komşu", "Yağmurlu gece", "Düşen tepsi"], not: "Başkasının acısına kalbinin açılması; dünyayı daha iyi bir yer yapar.", zorluk: 2 },
    "Şükran": { kelimeler: ["Ders notları", "Komşu teyze", "Uzatılan el", "Otobüs şoförü", "Sıcak çorba"], not: "Minnettarlık da denir. İyiyi fark ettirir; mutluluğu gerçekten artırır.", zorluk: 3 },
    "Huzur": { kelimeler: ["Dede", "Göl", "Kapalı telefon", "Çay", "Pazar sabahı"], not: "Bedenin ve zihnin güvende olduğunu söyler; şarjını dolduran bir mola.", zorluk: 3 },
    "Bağışlama": { kelimeler: ["Özür", "Eski dost", "Beyaz sayfa", "Merdiven başı", "Aylar sonra"], not: "Karşındakinden çok seni özgürleştirir; ama hazır olmadan kendini zorlama.", zorluk: 3 },
    "Aidiyet": { kelimeler: ["Forma", "Lakap", "Grup şakası", "Mahalle", "Kamp ateşi"], not: "Bir gruba kendin olarak kabul edilmek; temel bir insan ihtiyacı.", zorluk: 2 },
    "Empati": { kelimeler: ["Ayakkabı", "Gece telefonu", "Kulaklık", "Yeni öğrenci", "Gözyaşı"], not: "Başkasının gözünden bakabilmek; dostlukları derinleştiren bir süper güç.", zorluk: 3 },
    "Sakinlik": { kelimeler: ["Deniz feneri", "Nefes", "Telaşlı kalabalık", "Bozuk araba", "Kaplumbağa"], not: "Zor anlarda net düşünmeni sağlar; nefesle güçlenen bir kas gibi.", zorluk: 2 },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Yaşlı köpek", "Boş oda", "Yağmur bulutu", "Gelen haber", "Solan çiçek"], not: "Kayıpları işlemeni sağlar; ağlamak zayıflık değil, iyileşmenin parçası.", zorluk: 1 },
    "Özlem": { kelimeler: ["Eski mahalle", "Fotoğraf albümü", "Görüntülü arama", "Tren", "O şarkı"], not: "Birini ya da bir şeyi ne kadar değerli bulduğunu gösterir.", zorluk: 1 },
    "Yalnızlık": { kelimeler: ["Issız ada", "Cumartesi akşamı", "Kalabalık kantin", "Sessiz telefon", "Yeni şehir"], not: "Bağ kurma ihtiyacının sinyali; çok genç hisseder, küçük bir adım değiştirebilir.", zorluk: 2 },
    "Pişmanlık": { kelimeler: ["Geri al tuşu", "Saat 2", "Tartışma", "Son bakış", "Yarım mektup"], not: "Hatalarından ders almanı sağlar; kendini affetmek de bir sonraki adım.", zorluk: 2 },
    "Hayal Kırıklığı": { kelimeler: ["Maç bileti", "İptal mesajı", "Sönen balon", "Pencere kenarı", "Fragman"], not: "Beklentilerini gösterir; neyi önemsediğini anlamana yardım eder.", zorluk: 2 },
    "Dışlanmışlık": { kelimeler: ["Grup fotoğrafı", "Cam arkası", "Takım seçimi", "Davetiye", "Tek sandalye"], not: "Beyin bunu fiziksel acı gibi işler; hissetmen çok doğal ve gerçek.", zorluk: 2 },
    "Boşluk": { kelimeler: ["Tavan", "Donmuş ekran", "Pazar öğleden sonra", "Çöl", "Yankı"], not: "Zihin yorulunca bazen böyle durur; uzun sürerse güvendiğin biriyle konuş.", zorluk: 3 },
    "Tükenmişlik": { kelimeler: ["Yüzde bir şarj", "Alarm", "Deneme sınavı", "Eriyen mum", "Kum torbası"], not: "Bedenin dinlenmek istiyor; mola vermek tembellik değil, ihtiyaç.", zorluk: 2 },
    "Çaresizlik": { kelimeler: ["Labirent", "Bataklık", "Çekmeyen telefon", "Taşınma", "Bekleme salonu"], not: "Elinde olmayan şeyler olabilir; yardım istemek en güçlü hamledir.", zorluk: 3 },
    "Melankoli": { kelimeler: ["Sonbahar", "Buğulu cam", "Plak", "Sahil", "Martı"], not: "Belli bir sebebi olmayan, biraz tatlı bir hüzün; şarkıların ilham kaynağı.", zorluk: 3 },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Patika", "Çizelge", "Sabah koşusu", "Seçmeler", "Zirve"], not: "Hedefine odaklanmanı sağlar; küçük adımlar büyük fark yaratır.", zorluk: 2 },
    "Hayranlık": { kelimeler: ["Ünlü sporcu", "Üst sınıf", "Gökdelen", "Ressam", "Yaşlı balıkçı"], not: "Kim olmak istediğini gösterir; ilham kaynağın olabilir.", zorluk: 2 },
    "Sadakat": { kelimeler: ["Dedikodu", "Bileklik", "Köpek", "Teklif", "Yağmurlu maç"], not: "Değer verdiklerinin yanında durmak; ama seni inciten bir ilişkide kalmak zorunda değilsin.", zorluk: 3 },
    "Sorumluluk": { kelimeler: ["Emanet", "Kaptan bandı", "İlaç saati", "Buzdolabı notu", "Küçük kuzen"], not: "Güvenilir olmanın parçası; ama her yükü tek başına taşımak zorunda değilsin.", zorluk: 1 },
    "Kıskançlık": { kelimeler: ["Yeni arkadaş", "Profil", "Sınıf birincisi", "Ortak fotoğraf", "Üçüncü kişi"], not: "Değer verdiğin şeyi kaybetme korkusu; konuşmak çoğu zaman iyi gelir.", zorluk: 1 },
    "Adalet": { kelimeler: ["Hakem", "Torpil", "Not itirazı", "Pizza", "Sıra"], not: "Doğruyu önemsediğini gösterir; sesini duyurman için güçlü bir pusula.", zorluk: 2 },
    "Suçluluk": { kelimeler: ["Çakıl taşı", "Azarlanan kardeş", "Yalan", "Leke", "Dolap"], not: "Değerlerine ters düştüğünü söyler; telafi etmek yükü hafifletir.", zorluk: 2 },
    "Kibir": { kelimeler: ["Tavus kuşu", "Takipçi", "Pahalı ayakkabı", "Taht", "Selam"], not: "Kendini beğenmişlik de denir. Çoğu zaman içteki güvensizliği saklar.", zorluk: 2 },
    "Onur": { kelimeler: ["Kopya kâğıdı", "Beyaz gömlek", "Verilen söz", "Şövalye", "Cüzdan"], not: "Değerlerine uygun yaşamanın verdiği his; kendine saygı duymanı sağlar.", zorluk: 3 },
    "Rekabet": { kelimeler: ["Turnuva", "Kanka", "Satranç", "Yarış pisti", "İki aday"], not: "Seni geliştirir; kazanmak kadar adil oynamak da önemli.", zorluk: 1 },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Karanlık koridor", "Tıkırtı", "Bodrum", "Fırtına", "Bilinmeyen numara"], not: "Seni tehlikeden koruyan alarm sistemi; en cesur insanda bile var.", zorluk: 1 },
    "Kaygı": { kelimeler: ["Sınav sabahı", "Hamster çarkı", "Akrabalar", "Saat 3", "Bildirim"], not: "Beynin seni hazırlamaya çalışıyor; yavaş nefes bu alarmı kısar.", zorluk: 1 },
    "Utanç": { kelimeler: ["Kırmızı kalem", "Görünmezlik pelerini", "Video", "Devekuşu", "Aile yemeği"], not: "Herkes yaşar ama az konuşulur; paylaştıkça gücünü kaybeder.", zorluk: 2 },
    "Kafa Karışıklığı": { kelimeler: ["Yumak", "Kroki", "İki öğretmen", "Kavşak", "Matematik"], not: "Öğrenmenin ilk adımı; anlamadığını söylemek cesaret ister.", zorluk: 2 },
    "Güvensizlik": { kelimeler: ["İnce buz", "Beğeni sayısı", "Prova kabini", "İlk gün", "Kalabalık"], not: "Herkesin yaşadığı bir his; değerin beğeni sayısıyla ölçülmez.", zorluk: 2 },
    "Gözü Kalmak": { kelimeler: ["Vitrin", "Bilet", "Kaçan otobüs", "Mont", "Dönüş yolu"], not: "Olmayan bir şeye içinin gitmesi normal; neyi gerçekten istediğini gösterir.", zorluk: 3 },
    "Yetersizlik": { kelimeler: ["Kuzen", "Yüksek çıta", "Karne", "Paylaşım", "Dağ"], not: "Kendini başkalarının vitriniyle kıyaslamak yanıltır; kendi yolunu ölçü al.", zorluk: 2 },
    "Mahcubiyet": { kelimeler: ["Ters tişört", "Kantin kuyruğu", "Yanlış isim", "Kıkırtı", "Bebeklik fotoğrafı"], not: "Herkesin başına gelir; birkaç gün sonra gülerek anlatacağın bir anı olur.", zorluk: 1 },
    "Tedirginlik": { kelimeler: ["\"Konuşmamız lazım\"", "Susan kuşlar", "Gölge", "Kesilen sohbet", "Cevapsız arama"], not: "Sezgilerin seni uyarıyor; ne olduğunu sormak çoğu zaman rahatlatır.", zorluk: 2 },
    "Panik": { kelimeler: ["Yangın alarmı", "Kimlik kartı", "Beş dakika", "Boş cep", "Metro"], not: "Bedenin geçici bir alarmı; yavaş nefes alıp vermek dalgayı geçirir.", zorluk: 1 },
  },

  /* ════════════════════ YETİŞKİN ════════════════════ */
  yetiskin: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": { kelimeler: ["Eski patron", "Parfüm", "Ses tonu", "Diken", "Yırtık fotoğraf"], not: "Çok derin bir incinmenin izi olabilir; hissetmek seni kötü biri yapmaz.", zorluk: 3 },
    "Kızgınlık": { kelimeler: ["Kurye", "Korna", "Not", "Çaydanlık", "Bölünen cümle"], not: "Sınırın çiğnendiğinde yükselen sağlıklı bir alarm; asıl mesele onu nasıl dile getirdiğin.", zorluk: 1 },
    "Arzu": { kelimeler: ["Katalog", "Deniz manzarası", "Tatlı", "Piyango", "Uzak ışıklar"], not: "Neyi gerçekten istediğini fark etmek, hayatına yön vermenin ilk adımıdır.", zorluk: 2 },
    "Sabırsızlık": { kelimeler: ["Eş", "Kuyruk", "Kargo takibi", "Rötar", "Saatin tik takı"], not: "Beklemek en çok önemsediğimiz şeylerde zorlaşır; bir nefes, saati yavaşlatmaz ama seni yumuşatır.", zorluk: 1 },
    "İnat": { kelimeler: ["Baba", "Yol ayrımı", "Doktor raporu", "Tartışma", "Üçüncü kez"], not: "Çoğu zaman yolu değil, haklı çıkma ihtiyacını korur; geri adım da bir güçtür.", zorluk: 2 },
    "İsyan": { kelimeler: ["Ev sahibi", "Toplantı", "Zincir", "Son söz", "Kafes"], not: "Haksız düzene boyun eğmeme isteği; birlikte dile gelince değişim başlatabilir.", zorluk: 2 },
    "Hınç": { kelimeler: ["Eski ortak", "Düğün", "Senet", "Sıra bende", "Yirmi yıl"], not: "Kapanmamış bir yaranın faturası gibidir; en çok taşıyanı yorar, karşı tarafı değil.", zorluk: 3 },
    "Tutku": { kelimeler: ["Usta", "Keman", "Gece yarısı", "Unutulan yemek", "Tezgâh"], not: "İnsanı zamanın dışına çıkaran bir ateş; hayatı anlamlı kılan şeylerden biri.", zorluk: 3 },
    "Hırs": { kelimeler: ["Köşe ofis", "Kupa", "Seçim", "Hafta sonu", "Merdiven"], not: "Seni ileri taşıyan güçlü bir motor; yalnızca neyi geride bıraktığına arada bir bak.", zorluk: 2 },
    "Aşk": { kelimeler: ["Yabancı", "İskele", "Şemsiye", "Mektup", "Dans"], not: "Yaşın kaç olursa olsun, kalbin hâlâ şaşırtabildiğini hatırlatan güzel bir sarsıntı.", zorluk: 1 },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["Torun", "Valiz", "Perde", "Geri sayım", "Zarf"], not: "Bedende korkuya çok benzer; farkı, kapının ardında güzel bir şey beklemen.", zorluk: 1 },
    "Coşku": { kelimeler: ["Halay", "Gol", "Yaz yağmuru", "Mezuniyet", "Havai fişek"], not: "Sevinç taşıp kalabalığa karışınca büyür; paylaşılan an, tek başınakinden daha uzun yaşar.", zorluk: 2 },
    "Merak": { kelimeler: ["Karşı pencere", "Kilitli sandık", "Fısıltı", "Harita", "Bekçi"], not: "Yetişkinliğin içinde yaşamaya devam eden çocuk; dünyayı canlı tutan şey.", zorluk: 1 },
    "Cesaret": { kelimeler: ["Hoca", "Derin su", "Kask", "İlk adım", "\"Üç deyince\""], not: "Korkunun yokluğu değil, korkuyla birlikte adım atabilmek; her yaşta yeniden öğrenilir.", zorluk: 2 },
    "Şaşkınlık": { kelimeler: ["Muhasebeci", "Kapı zili", "Elektro gitar", "Tapu", "İkizler"], not: "Zihnin \"bunu beklemiyordum\" deyip yeniden ayarlanması; insanlar hep bildiğimizden fazlası.", zorluk: 2 },
    "Heves": { kelimeler: ["Hobi dükkânı", "Yeni defter", "Bisiklet", "Pazartesi", "Fidan"], not: "Yeni başlangıçların tatlı kıvılcımı; sönse bile seni bir yere götürmüş olur.", zorluk: 2 },
    "İlham": { kelimeler: ["Sokak müzisyeni", "Köprü", "Peçete", "Yarım şarkı", "Martılar"], not: "Çoğu zaman aramadığın anda gelir; dinlenmiş ve açık bir zihni sever.", zorluk: 2 },
    "Yaratıcılık": { kelimeler: ["Yeğenler", "Karton kutu", "Kısıtlı bütçe", "Hurda", "Boş duvar"], not: "Kısıtlar çoğu zaman en iyi fikirlerin annesidir; oyun oynayan zihin üretir.", zorluk: 3 },
    "Şevk": { kelimeler: ["Gönüllüler", "Proje", "Sabahın altısı", "Kürek", "Lokomotif"], not: "Anlamlı bir işe gönülden girişmek; yorgunluğu bile tatlı kılan enerji.", zorluk: 3 },
    "Büyülenme": { kelimeler: ["Balıkçı", "Müze", "Işıltı", "Dans gösterisi", "Yıldızlı gök"], not: "Dünyanın hâlâ sırları olduğunu hatırlatır; yetişkinlerin en çok ihtiyaç duyduğu anlardan.", zorluk: 2 },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Gurbetçi dayı", "Tam kadro", "Akşam güneşi", "Müjde", "Sahil"], not: "Çoğu zaman büyük olaylarda değil, sıradan bir sofrada saklıdır.", zorluk: 1 },
    "Neşe": { kelimeler: ["Enişte", "Plaj", "Peruk", "Ters giden tarif", "Bir çığlık"], not: "Hafifliğin ilacıdır; yetişkinler de oyun oynamaya ihtiyaç duyar.", zorluk: 2 },
    "Umut": { kelimeler: ["Otobüs durağı", "Ütülü gömlek", "Bahar", "Tohum", "Şafak"], not: "Karanlıkta bile bir kapı aralığı görebilmek; insanı ayakta tutan sessiz güç.", zorluk: 2 },
    "Gurur": { kelimeler: ["Diploma", "El yapımı masa", "Gazete", "Kızım", "Bayrak"], not: "Emeğin karşılık bulduğunu görmek; kendin ya da sevdiğin için hissetmeyi hak ediyorsun.", zorluk: 1 },
    "Özgürlük": { kelimeler: ["Emekli", "Sahil yolu", "Rüzgâr", "Açık pencere", "Kuş"], not: "Kendi zamanının sahibi olmak; bazen tek ihtiyacımız bir pencereyi açmak.", zorluk: 2 },
    "Tatmin": { kelimeler: ["Kayınpeder", "Su terazisi", "Bulmaca", "Akşamüstü", "Hasat"], not: "Alkış gerekmez; işini iyi yapmış olmanın sessiz, içten doygunluğu.", zorluk: 3 },
    "Keyif": { kelimeler: ["Tavla", "Közde kahve", "Hamak", "Pazar sabahı", "Kitap"], not: "Anın tadını çıkarmak bir hak; acele etmeden yaşamak da bir beceri.", zorluk: 2 },
    "Rahatlama": { kelimeler: ["Taksici", "Poliklinik", "Kayıp cüzdan", "Bilinmeyen numara", "Zil sesi"], not: "Gerilimin bedenden akıp gitmesi; vücudun \"tehlike geçti\" deme biçimi.", zorluk: 1 },
    "Özgüven": { kelimeler: ["Takım elbise", "Kürsü", "Direksiyon", "Zor soru", "İlk randevu"], not: "Her şeyi bilmek değil, bilmediğinle bile ayakta durabilmek.", zorluk: 2 },
    "Zafer": { kelimeler: ["Kahvehane", "Dava", "Son atış", "Dağ zirvesi", "Konfeti"], not: "Uzun bir mücadelenin sonunda gelen o an; tadını çıkarmak serbest.", zorluk: 1 },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Babaanne", "Örgü atkı", "Harçlık", "Sıcak çorba", "El yazısı"], not: "Çoğu zaman sözle değil, küçük ve kusurlu jestlerle konuşur.", zorluk: 1 },
    "Şefkat": { kelimeler: ["Kedi yavrusu", "Havlu", "Ateşli alın", "Ninni", "Buruşuk el"], not: "Kırılgan olanı koruma isteği; aynı yumuşaklığı kendine göstermeyi de unutma.", zorluk: 2 },
    "Güven": { kelimeler: ["Yedek anahtar", "Emanet", "Paraşüt", "Ameliyat", "Sır"], not: "Yıllarla örülür, bir anda sınanır; ilişkilerin görünmeyen temeli.", zorluk: 2 },
    "Merhamet": { kelimeler: ["Evsiz adam", "Eldiven", "Sokak köpeği", "Düşen poşet", "Hasta yatağı"], not: "Başkasının yükünü görüp elini uzatabilmek; insan olmanın en sıcak hâli.", zorluk: 2 },
    "Şükran": { kelimeler: ["Öğretmen", "Ödünç para", "Tesadüf", "Sofra", "Yol kenarı"], not: "Hayatına dokunanları görmek; söylendiğinde iki tarafı da iyileştirir.", zorluk: 2 },
    "Huzur": { kelimeler: ["Yaşlı çift", "Sıcak süt", "Dalgalar", "Bahçe", "Uyuyan bebek"], not: "Dışarısı sustuğunda değil, içerisi yerine oturduğunda gelir.", zorluk: 2 },
    "Bağışlama": { kelimeler: ["Küs kardeş", "Uzatılan el", "Telefon", "Yağmur sonrası", "Yamalı ceket"], not: "Olanı unutmak değil, o yükü daha fazla taşımamayı seçmek.", zorluk: 2 },
    "Aidiyet": { kelimeler: ["Koro", "Tribün", "Adlı fincan", "Davet", "Uzun sofra"], not: "Bir yerin parçası olmak, insanın en temel ihtiyaçlarından; her yaşta yeniden kurulabilir.", zorluk: 3 },
    "Empati": { kelimeler: ["Acemi garson", "Yorgun kasiyer", "Yaz işi", "Ağlayan bebek", "Ayakkabı"], not: "Başkasının ayakkabısıyla birkaç adım yürümek; anlamak, yargılamaktan önce gelir.", zorluk: 3 },
    "Sakinlik": { kelimeler: ["Kalabalık", "Türbülans", "Göl", "Nefes", "Çay demliği"], not: "Fırtınanın ortasında durabilen iç ses; çevrene de bulaşan bir dinginlik.", zorluk: 3 },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Çocukluk evi", "Yaşlı köpek", "Yağmur", "Boş sandalye", "Haber"], not: "Değer verdiğin bir şeyi kaybetmenin doğal yasıdır; acele ettirmeye gerek yok.", zorluk: 1 },
    "Özlem": { kelimeler: ["Abla", "Memleket", "Hırka", "Görüntülü arama", "Bir koku"], not: "Sevdiğin birinin içinde bıraktığı yer; mesafe ne kadar uzunsa bağ o kadar görünür.", zorluk: 1 },
    "Yalnızlık": { kelimeler: ["Yeni taşınan", "Metropol", "Tek tabak", "Doğum günü", "Gece on bir"], not: "Kalabalığın içinde de hissedilebilir; bağ kurma ihtiyacının sessiz çağrısıdır.", zorluk: 1 },
    "Pişmanlık": { kelimeler: ["Anne", "Otoyol", "Sesli mesaj", "Son cümle", "İstifa"], not: "Değerlerine dönmek istediğini gösterir; telafi için çoğu zaman geç değildir.", zorluk: 2 },
    "Hayal Kırıklığı": { kelimeler: ["İdol", "Broşür", "Kısa tatil", "Paket", "Söz"], not: "Beklenti ile gerçek arasındaki boşluk; ne kadar önemsediğini de gösterir.", zorluk: 1 },
    "Dışlanmışlık": { kelimeler: ["Eski dostlar", "Çay ocağı", "Grup fotoğrafı", "Kesilen sohbet", "Cuma akşamı"], not: "Ait olma ihtiyacına dokunur; acıtması, insanlara ne kadar değer verdiğini gösterir.", zorluk: 2 },
    "Boşluk": { kelimeler: ["Salon", "İmza", "Pazar öğleden sonra", "Kumanda", "Yankı"], not: "Bir dönemin bitip yenisinin henüz başlamadığı ara; yeni anlamlar için yer açar.", zorluk: 3 },
    "Tükenmişlik": { kelimeler: ["Ekip lideri", "Gece nöbeti", "Bitmeyen liste", "Bulaşık", "Yine sabah"], not: "Tembellik değil, uzun süre fazla vermenin sonucu; dinlenmek bir ihtiyaç, ödül değil.", zorluk: 2 },
    "Çaresizlik": { kelimeler: ["Gişe memuru", "Su baskını", "Yüzde üç şarj", "Kilitli kapı", "Bekleme salonu"], not: "Kontrolün elden kaydığı an; yardım istemek zayıflık değil, en akıllıca hamle.", zorluk: 2 },
    "Melankoli": { kelimeler: ["Akordeoncu", "Pencere kenarı", "Sararmış fotoğraf", "Kapanan sezon", "Kasım akşamı"], not: "Tatlı ile acının karıştığı yumuşak bir gri; bazen ruh yavaşlamak ister.", zorluk: 3 },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Yaşlı öğrenci", "Fizik tedavi", "Ret mektubu", "Sabah beşi", "Taş duvar"], not: "Yenilgilerden sonra yine masaya oturabilmek; yaşla değil, niyetle ilgilidir.", zorluk: 2 },
    "Hayranlık": { kelimeler: ["Maratoncu", "Köy okulu", "Seksen yaş", "Cerrah", "Sokak ressamı"], not: "Başkasında gördüğümüz ışık, çoğu zaman kendimizde büyütmek istediğimiz şeydir.", zorluk: 2 },
    "Sadakat": { kelimeler: ["Berber", "Takım forması", "Kötü günler", "Köpek", "Yüzük"], not: "Kolay olanı değil, bağlı olduğunu seçmek; zor günlerde anlamı ortaya çıkar.", zorluk: 3 },
    "Sorumluluk": { kelimeler: ["İlaç kutusu", "İptal edilen plan", "Anahtar destesi", "Kaptan", "Fatura"], not: "Değer verdiklerini taşıma isteği; ama yükü paylaşmak da sorumluluğun parçası.", zorluk: 2 },
    "Kıskançlık": { kelimeler: ["Yeni iş arkadaşı", "Mesaj", "Özel şaka", "Komşunun oğlu", "Tatil fotoğrafı"], not: "Kaybetme korkusunun bir yüzü; sakin bir konuşma çoğu zaman en iyi ilaçtır.", zorluk: 1 },
    "Adalet": { kelimeler: ["Pasta dilimi", "Torpil", "Hakem", "Miras", "Vezne"], not: "Sadece kendin için değil, başkası için de ses çıkarabilmek; toplumun görünmez harcı.", zorluk: 2 },
    "Suçluluk": { kelimeler: ["Meslektaş", "Çizik tampon", "Hatalı rapor", "Azar", "Mola"], not: "Vicdanın \"bunu düzelt\" demesi; itiraf ve telafi çoğu zaman yükü hafifletir.", zorluk: 2 },
    "Kibir": { kelimeler: ["Yat limanı", "Spor araba", "Tavus kuşu", "Kartvizit", "Taht"], not: "Çoğu zaman içerideki kırılganlığı saklayan bir zırh; altında kabul görme isteği yatar.", zorluk: 3 },
    "Onur": { kelimeler: ["Kalın zarf", "Cüzdan", "Şövalye", "El sıkışma", "Akşam eve dönüş"], not: "Kimse bakmazken de kendine sadık kalmak; başı dik uyumanın sebebi.", zorluk: 3 },
    "Rekabet": { kelimeler: ["Yan komşu", "Sardunya", "Satranç", "Halı saha", "Terfi"], not: "Dozunda olunca insanı geliştirir; hele sardunyalar söz konusuysa.", zorluk: 2 },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Çocuklar", "Bodrum", "Ayak sesi", "Şebeke yok", "Uçurum"], not: "Seni ve sevdiklerini korumak için var; beden önce davranır, akıl sonra yetişir.", zorluk: 1 },
    "Kaygı": { kelimeler: ["Müdür odası", "Koridor", "Tahlil sonucu", "Söylenti", "Yatağa girince"], not: "Zihnin henüz olmamış şeylere hazırlanma çabası; şimdiye dönmek sesini kısar.", zorluk: 2 },
    "Utanç": { kelimeler: ["Veli toplantısı", "Mikrofon", "Devekuşu", "Dedikodu", "Banka kartı"], not: "Kendimize yönelttiğimiz sert bir bakış; hata yapmak seni değersiz yapmaz.", zorluk: 2 },
    "Kafa Karışıklığı": { kelimeler: ["Kayınbirader", "Kılavuz", "Vergi formu", "Kavşak", "Yabancı dil"], not: "Zihnin yeni bilgiyi yerleştirmeye çalışması; bilmemek, öğrenmenin ilk adımıdır.", zorluk: 2 },
    "Güvensizlik": { kelimeler: ["Şık arkadaşlar", "Silinen taslak", "Ayna", "İnce buz", "Kapı eşiği"], not: "İç eleştirmenin sesi çok yükseldiğinde gelir; çoğu zaman kimse senin kadar bakmıyor.", zorluk: 3 },
    "Gözü Kalmak": { kelimeler: ["Bit pazarı", "Piyano", "Yıllar sonra", "Tren camı", "Satılık ev"], not: "Alamadığın şey, aslında neyi sevdiğini fısıldar; içinde kalan küçük bir istek.", zorluk: 3 },
    "Yetersizlik": { kelimeler: ["Bebek", "Kayınvalide", "Kırmızı kalem", "İlk iş günü", "Yüksek raf"], not: "Herkes bir şeyi ilk kez yaparken acemidir; öğrenmek zaman ister.", zorluk: 2 },
    "Mahcubiyet": { kelimeler: ["Patronun eşi", "Kuaför", "Yırtık çorap", "Yanlış isim", "Fazla övgü"], not: "Küçük bir pot, büyük bir insanlık hâli; gülüp geçebilmek en güzel çıkış.", zorluk: 1 },
    "Tedirginlik": { kelimeler: ["Konuşkan yolcu", "Sahipsiz çanta", "Gölge", "Sessiz telefon", "Kapalı perde"], not: "Adı konmamış bir \"bir şeyler ters\" hissi; içgüdüne kulak vermek her zaman meşru.", zorluk: 3 },
    "Panik": { kelimeler: ["Misafirler", "Duman", "Kalkışa az kala", "Asansör", "\"Geldim sayılır\""], not: "Alarm sisteminin en yüksek sesi; dalga gibi yükselir ve mutlaka geri çekilir.", zorluk: 1 },
  },

  /* ════════════════════ ÇOCUK (7-12) ════════════════════ */
  cocuk: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": { kelimeler: ["Diken", "Cadı", "Alay", "Kara bulut", "Kapı"], not: "Çok kırılınca böyle sert bir his olabilir. Bir büyüğe anlat.", zorluk: 3, cocukModu: false },
    "Kızgınlık": { kelimeler: ["Ağabey", "Bir kule", "Çamur", "Volkan", "Kapı sesi"], not: "Kızmak çok normal. Önce derin nefes, sonra kelimelerle anlat!", zorluk: 1, cocukModu: true },
    "Arzu": { kelimeler: ["Çikolata", "Yaz sıcağı", "Dev", "Uzak dağ", "Kayan yıldız"], not: "Bir şeyi çok istemek normal; beklemeyi de öğrenebiliriz.", zorluk: 2, cocukModu: false },
    "Sabırsızlık": { kelimeler: ["Fırın", "Uzun yol", "Kum saati", "Kuyruk", "Salyangoz"], not: "Beklemek zor! Şarkı söylemek ya da saymak zamanı kısaltır.", zorluk: 1, cocukModu: true },
    "İnat": { kelimeler: ["Brokoli", "Yatma saati", "Büyük kaya", "Panda", "Kırmızı çizme"], not: "Bazen \"hayır\" demek isteriz, normal! Ortada buluşmak işe yarar.", zorluk: 2, cocukModu: true },
    "İsyan": { kelimeler: ["Kral", "Kural", "Yüksek duvar", "Davul", "Karıncalar"], not: "Kural haksız gelince itiraz etmek normal; sakin konuşmak işe yarar.", zorluk: 3, cocukModu: true },
    "Hınç": { kelimeler: ["Not defteri", "Eski arkadaş", "Kış", "Yarım oyun", "Gölgeler"], not: "Eski kırgınlıkları bir büyüğe anlatmak yükü hafifletir.", zorluk: 3, cocukModu: false },
    "Tutku": { kelimeler: ["Dinozor", "Keman", "Futbol", "Her sabah", "Geç saat"], not: "Bir şeyi tüm kalbinle sevmek, seni sen yapan şeylerden biri.", zorluk: 3, cocukModu: false },
    "Hırs": { kelimeler: ["Madalya", "Kumbara", "Havuz", "Altın yıldız", "Erken kalkış"], not: "En iyisi olmak istemek güç verir; dinlenmek de kazanmaktır.", zorluk: 3, cocukModu: true },
    "Aşk": { kelimeler: ["Prenses", "Gül", "Mektup", "Ay ışığı", "Dans"], not: "Birini çok özel bulmak güzel bir his; büyüdükçe daha iyi anlarsın.", zorluk: 2, cocukModu: false },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["Bavul", "Roket", "Yarın", "Kuzenler", "Lunapark"], not: "Güzel bir şeyi beklerken içindeki kıpır kıpır his, işte bu!", zorluk: 1, cocukModu: true },
    "Coşku": { kelimeler: ["Stadyum", "Konfeti", "Bayram sabahı", "Havai fişek", "İlk kar"], not: "Sevinç içine sığmayınca zıplarsın, bağırırsın. Ne güzel!", zorluk: 2, cocukModu: true },
    "Merak": { kelimeler: ["Kilitli kutu", "Ayak izi", "Büyüteç", "Kuyu", "Garip ses"], not: "Merak, yeni şeyler öğrenmenin anahtarı. Soru sormaya devam!", zorluk: 1, cocukModu: true },
    "Cesaret": { kelimeler: ["Yüksek ağaç", "Karanlık mağara", "Küçük fare", "İlk gün", "Kaykay"], not: "Cesaret korkmamak değil; korksan da denemek demek!", zorluk: 1, cocukModu: true },
    "Şaşkınlık": { kelimeler: ["Sihirbaz", "Konuşan papağan", "Hediye paketi", "Pat sesi", "Yazın kar"], not: "Beklemediğin bir şey olunca böyle olmak çok doğal!", zorluk: 1, cocukModu: true },
    "Heves": { kelimeler: ["Boya kutusu", "Gitar", "Pazartesi", "Fidan", "Kurs"], not: "Yeni bir şeye başlamak için can atmak çok güzel!", zorluk: 2, cocukModu: true },
    "İlham": { kelimeler: ["Bulut", "Boş sayfa", "Mucit", "Elma", "Gece yarısı"], not: "Fikirler bazen birden gelir! Yanında hep bir defter olsun.", zorluk: 3, cocukModu: true },
    "Yaratıcılık": { kelimeler: ["Karton kutu", "Robot", "Çorap", "Cumartesi", "Kumsal"], not: "Hayal edip yeni bir şey yapmak harika! Kutu bile roket olur.", zorluk: 2, cocukModu: true },
    "Şevk": { kelimeler: ["Bahçıvan", "Kova", "Şenlik", "Lokomotif", "Öğle güneşi"], not: "Sevdiğin işi yaparken enerjin hiç bitmiyorsa, buna şevk denir.", zorluk: 3, cocukModu: false },
    "Büyülenme": { kelimeler: ["Yıldızlar", "Akvaryum", "Deniz kızı", "Kelebek", "Gökkuşağı"], not: "Bir güzellik seni içine çekince zaman durur gibi olur.", zorluk: 2, cocukModu: true },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Doğum günü", "Babaanne", "Salıncak", "Güneş", "Şarkı"], not: "Mutluluk paylaştıkça büyür. Bugün seni ne gülümsetti?", zorluk: 1, cocukModu: true },
    "Neşe": { kelimeler: ["Palyaço", "Gıdıklama", "Sabun köpüğü", "Komik şapka", "Su tabancası"], not: "Kahkaha atmak bedene de iyi gelir. Gül, güldür!", zorluk: 1, cocukModu: true },
    "Umut": { kelimeler: ["Tohum", "Kayıp kedi", "Pencere", "Sabah", "Bahar"], not: "Zor olsa da güzel günler geleceğine inanmak çok güçlü bir his.", zorluk: 2, cocukModu: true },
    "Gurur": { kelimeler: ["Resim", "Karne", "Sahne", "Antrenör", "Alkış"], not: "Emeğini görmek güzeldir. Kendinle gurur duymayı hak ediyorsun!", zorluk: 1, cocukModu: true },
    "Özgürlük": { kelimeler: ["Uçurtma", "Çayır", "Yaz tatili", "Bisiklet", "Rüzgâr"], not: "İstediğin gibi koşup oynayabilmek harika! Kanat açmak gibi.", zorluk: 1, cocukModu: true },
    "Tatmin": { kelimeler: ["Yapboz", "Karınca", "Temiz oda", "Kardan adam", "Akşam üstü"], not: "Bir işi sonuna kadar bitirmek içini doyurur. Tadını çıkar!", zorluk: 3, cocukModu: true },
    "Keyif": { kelimeler: ["Kakao", "Hamak", "Pazar sabahı", "Tembel kedi", "Battaniye"], not: "Küçük güzel anların tadını çıkarmak da bir beceri!", zorluk: 2, cocukModu: true },
    "Rahatlama": { kelimeler: ["Diş hekimi", "Sınav", "Ilık banyo", "Eve dönüş", "Zil"], not: "Endişe bitince beden gevşer. \"Oh be!\" demek gibi.", zorluk: 1, cocukModu: true },
    "Özgüven": { kelimeler: ["Mikrofon", "Pelerin", "Ayna", "Kaptan", "Atlama tahtası"], not: "Kendine inanmak, yeni şeyleri denemeyi kolaylaştırır. Sen yapabilirsin!", zorluk: 2, cocukModu: true },
    "Zafer": { kelimeler: ["Kupa", "Bitiş çizgisi", "Minik ejderha", "Satranç", "Düdük"], not: "Emek verip başarınca kutlamak güzel. Rakibine de nazik ol!", zorluk: 1, cocukModu: true },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Dede", "Sarılma", "Örgü atkı", "Sıcak çorba", "Köpeğim"], not: "Sevgi, birine \"iyi ki varsın\" demek gibi. Bugün kime sarıldın?", zorluk: 1, cocukModu: true },
    "Şefkat": { kelimeler: ["Bebek", "Yavru kuş", "Yara bandı", "Ninni", "Yuva"], not: "Küçüklere nazikçe bakmak, kalbinin ne kadar yumuşak olduğunu gösterir.", zorluk: 2, cocukModu: true },
    "Güven": { kelimeler: ["Baba", "Can simidi", "Köprü", "İp merdiven", "Fener"], not: "Yanında olan insanlar dünyayı kolaylaştırır. Senin için onlar kim?", zorluk: 2, cocukModu: true },
    "Merhamet": { kelimeler: ["Sokak köpeği", "Soğuk gece", "Şemsiye", "Yaşlı adam", "Yaralı kanat"], not: "Başkasının zor anını görüp yardım etmek istemek çok değerli.", zorluk: 2, cocukModu: true },
    "Şükran": { kelimeler: ["Komşu teyze", "Börek", "Postacı", "Kayıp eldiven", "Hasta yatağı"], not: "Sana iyilik yapanı fark edip teşekkür etmek kalbi büyütür.", zorluk: 3, cocukModu: true },
    "Huzur": { kelimeler: ["Anneanne", "Yorgan", "Yağmur sesi", "Ağaç ev", "Dere"], not: "Her şeyin yerli yerinde olduğu tatlı bir his. Çok güzel!", zorluk: 2, cocukModu: true },
    "Bağışlama": { kelimeler: ["Sakar ayı", "Yırtık resim", "Ertesi gün", "Çiçek", "Serçe parmak"], not: "Affetmek, içindeki ağır taşı bırakmak gibi. Hafiflersin!", zorluk: 2, cocukModu: true },
    "Aidiyet": { kelimeler: ["İzci", "Takım tişörtü", "Sınıf fotoğrafı", "Koro", "Kuş sürüsü"], not: "Bir gruba katılmak, \"ben de buradayım\" demek. Herkesin bir yeri var.", zorluk: 3, cocukModu: true },
    "Empati": { kelimeler: ["Gözyaşı", "Dondurma", "Ayakkabı", "Geçen yıl", "Yabancı dil"], not: "Başkasının ne hissettiğini anlamak bir süper güç!", zorluk: 3, cocukModu: true },
    "Sakinlik": { kelimeler: ["Göl", "Kaplumbağa", "Akşam", "Fırtına", "Tüy"], not: "Yavaş nefes, içindeki dalgaları durultur. Bu bir süper güç!", zorluk: 3, cocukModu: true },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Kırmızı balon", "Oyuncak ayı", "Son gün", "Solan çiçek", "Sessiz oda"], not: "Ağlamak ve içinin buruk olması normal. Bir sarılma çok iyi gelir.", zorluk: 1, cocukModu: true },
    "Özlem": { kelimeler: ["Tren", "Eski fotoğraf", "Kuzen", "Kartpostal", "Uzak şehir"], not: "Birini ne kadar sevdiğini gösterir. Ona bir resim çizebilirsin!", zorluk: 1, cocukModu: true },
    "Yalnızlık": { kelimeler: ["Astronot", "Boş park", "Sessiz telefon", "Kutup ayısı", "Pazar akşamı"], not: "Herkes bazen böyle hisseder. \"Gel oynayalım\" demek işe yarar.", zorluk: 1, cocukModu: true },
    "Pişmanlık": { kelimeler: ["Kaçan otobüs", "Son kurabiye", "Unutulan ödev", "Dün akşam", "Küs arkadaş"], not: "\"Keşke\" demek, bir dahakine farklı yapmayı öğretir. Hata yapmak normal.", zorluk: 2, cocukModu: true },
    "Hayal Kırıklığı": { kelimeler: ["Piknik", "Yağmur", "Kapalı dükkân", "Kutu", "Söz"], not: "Beklediğin olmayınca için söner, normal. Yeni bir plan yapabilirsin!", zorluk: 1, cocukModu: true },
    "Dışlanmışlık": { kelimeler: ["İp atlama", "Fısıltı", "Bank", "Davetiye", "Ördek yavrusu"], not: "Oyuna alınmamak çok acıtır. Bu senin suçun değil; bir büyüğe anlat.", zorluk: 2, cocukModu: true },
    "Boşluk": { kelimeler: ["Radyo", "Tavan", "Öğleden sonra", "Çöl", "Musluk"], not: "Bazen hiçbir şey hissetmeyiz. Bir büyüğe anlatmak iyi gelir.", zorluk: 3, cocukModu: false },
    "Tükenmişlik": { kelimeler: ["Arı", "Ağır çanta", "Uzun hafta", "Bitmeyen ödev", "Pil"], not: "Çok yorulunca dinlenmek tembellik değil, ihtiyaç.", zorluk: 3, cocukModu: false },
    "Çaresizlik": { kelimeler: ["Sıkı kavanoz", "Ağaçtaki kedi", "Minik böcek", "Yüksek raf", "Bozuk asansör"], not: "Hiçbir şey işe yaramıyor gibiyse yardım istemek en akıllıca adım.", zorluk: 2, cocukModu: true },
    "Melankoli": { kelimeler: ["Deniz feneri", "Sonbahar", "Müzik kutusu", "Martı", "Eski sokak"], not: "Hafif kederli günler de geçer; sevdiğin bir şarkı iyi gelir.", zorluk: 3, cocukModu: false },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Paten", "Dağ yolu", "Kunduz", "Çizik", "Damla"], not: "Düşüp yeniden kalkmak seni güçlü yapar. Vazgeçmediğin için tebrikler!", zorluk: 2, cocukModu: true },
    "Hayranlık": { kelimeler: ["İtfaiyeci", "Poster", "Abla", "Akrobat", "Çizgi film"], not: "Birini örnek almak, senin de neler yapabileceğini gösterir.", zorluk: 2, cocukModu: true },
    "Sadakat": { kelimeler: ["En iyi arkadaş", "Bileklik", "Verilen söz", "Okul bahçesi", "Bekçi köpek"], not: "Zor anda arkadaşının yanında durmak, gerçek dostluğun işaretidir.", zorluk: 3, cocukModu: true },
    "Sorumluluk": { kelimeler: ["Hamster", "Nöbetçi rozeti", "Ev anahtarı", "Saksı çiçeği", "Çoban"], not: "Bir işi üstlenip yapmak büyüdüğünü gösterir. Aferin sana!", zorluk: 2, cocukModu: true },
    "Kıskançlık": { kelimeler: ["Kardeş", "Parlak ayakkabı", "Kucak", "Misafirler", "Hediye"], not: "Bunu hissetmek normal; sevgi azalmaz, kalpte herkese yer var.", zorluk: 1, cocukModu: true },
    "Adalet": { kelimeler: ["Üç sincap", "Pasta dilimi", "Hakem", "Sıra", "Çekiliş"], not: "Herkese eşit davranılmasını istemek çok değerli bir his.", zorluk: 3, cocukModu: true },
    "Suçluluk": { kelimeler: ["Vazo", "Kavanoz", "Ayak sesleri", "Leke", "Yastık"], not: "Hata herkesin başına gelir. Söylemek içini hafifletir.", zorluk: 2, cocukModu: true },
    "Kibir": { kelimeler: ["Tavus kuşu", "Taç", "Spor araba", "Boş tribün", "Kurbağa"], not: "Herkes bazen hava atar. Başkalarını dinlemek seni daha sevilen yapar.", zorluk: 3, cocukModu: true },
    "Onur": { kelimeler: ["Şövalye", "Cüzdan", "El sıkışma", "Bayrak", "Kopya"], not: "Doğru olanı yapınca kendine saygın artar.", zorluk: 3, cocukModu: false },
    "Rekabet": { kelimeler: ["Çita", "Kronometre", "Komşu çocuğu", "Bilye", "Merdiven"], not: "Yarışmak eğlenceli ve seni geliştirir. Sonunda el sıkışmayı unutma!", zorluk: 2, cocukModu: true },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Gök gürültüsü", "Gölge", "Kuzu", "Örümcek", "Koridor"], not: "Korkmak seni korumak için var. Bir büyüğün elini tutmak iyi gelir.", zorluk: 1, cocukModu: true },
    "Kaygı": { kelimeler: ["Okul çantası", "Tik tak", "Kirpi", "Gösteri", "Kalabalık"], not: "\"Ya olursa?\" düşünceleri normal. Konuşmak ve nefes almak iyi gelir.", zorluk: 2, cocukModu: true },
    "Utanç": { kelimeler: ["Kostüm", "Kabuk", "Gülüşmeler", "Devekuşu", "Kırmızı kalem"], not: "Herkes bazen saklanmak ister. Hata seni değersiz yapmaz, sen kıymetlisin.", zorluk: 2, cocukModu: true },
    "Kafa Karışıklığı": { kelimeler: ["Labirent", "İkizler", "Ters saat", "Yumak", "Bilmece"], not: "Anlamadığında soru sormak çok akıllıca. Kimse her şeyi bilmez!", zorluk: 2, cocukModu: true },
    "Güvensizlik": { kelimeler: ["Gözlük", "Zürafa", "Kısa saç", "İnce buz", "Sallanan köprü"], not: "Kendinden emin olmamak herkesin başına gelir. Sen olduğun gibi değerlisin.", zorluk: 3, cocukModu: true },
    "Gözü Kalmak": { kelimeler: ["Vitrin", "Kumandalı araba", "Renkli kalem", "Saksağan", "Arka koltuk"], not: "Bir şeyi çok istemek normal. Doğum günü listene yazabilirsin!", zorluk: 2, cocukModu: true },
    "Yetersizlik": { kelimeler: ["Penguen", "Kâğıt kanat", "Yüzme dersi", "Uzun boylular", "Zor bulmaca"], not: "Herkesin ayrı bir yeteneği var. Bir şeyi yapamamak seni küçültmez.", zorluk: 2, cocukModu: true },
    "Mahcubiyet": { kelimeler: ["Ters kazak", "Yanlış isim", "Hapşırık", "Domates", "Kamera"], not: "Yanakların kızarırsa dert etme; herkesin başına gelir, sonra güleriz!", zorluk: 1, cocukModu: true },
    "Tedirginlik": { kelimeler: ["Çıtırtı", "Baykuş", "Yabancı sokak", "Asansör", "Bulutlu gök"], not: "Bir şey tuhaf gelince dikkat kesilmek normal. Bir büyüğe sorabilirsin.", zorluk: 2, cocukModu: true },
    "Panik": { kelimeler: ["Servis", "Tek ayakkabı", "Beyaz tavşan", "Taşan küvet", "Alarm"], not: "Her şey birden olunca dur, nefes al, sonra tek tek yap.", zorluk: 1, cocukModu: true },
  },
};

/** age: 'genc' | 'yetiskin' | 'cocuk' → o duygunun kartı (yoksa null) */
export function getEmotionCard(emotion, age) {
  var set = CARDS[age] || CARDS.yetiskin;
  return set[emotion] || null;
}

/** Bu duygu verilen yaş kategorisinde çekilebilir mi? */
export function isPlayable(emotion, age) {
  var c = getEmotionCard(emotion, age);
  return !!c && c.cocukModu !== false;
}
