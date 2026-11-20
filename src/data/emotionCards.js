/**
 * emotionCards.js — duygu hikâye kartları (üç yaş kategorisi)
 *
 * Mekanik: Oyuncu bir duygu çeker, karttaki 5 öğeden 3'ünü seçer ve bu üçünü
 * birbirine bağlayan ~1 dakikalık bir hikâye anlatır (seçilmeyen 2 öğeyi
 * kullanmak yasak değil). Diğerleri duyguyu tahmin eder. Sahne kartı yoktur;
 * zorluk yalnızca öğelerden gelir: hiçbir öğe tek başına duyguyu ele vermez.
 *
 * Her kart:
 *   kelimeler → 5 öğe, sabit sıra: [kişi, yer, nesne, olay, an]
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
    "Nefret": { kelimeler: ["Hep laf sokan biri", "Aynı okul servisi", "Engellenen hesap", "Yine aynı gruba düşmek", "Adı geçince"], not: "Derin bir incinmenin sinyali; hissetmek normal, nasıl davranacağını sen seçersin.", zorluk: 2 },
    "Kızgınlık": { kelimeler: ["Odaya dalan kardeşin", "Kilitlenmeyen oda kapısı", "Bozulan kulaklık", "Yerinde olmayan eşya", "Sınavdan önceki gece"], not: "Sınırının aşıldığını haber verir; seni ve değerlerini korumak için var.", zorluk: 1 },
    "Arzu": { kelimeler: ["Yeni telefonlu sıra arkadaşı", "Alışveriş merkezi vitrini", "Sepette bekleyen ayakkabı", "Harçlık günü", "Her gece aynı sayfa"], not: "Neyi istediğini gösterir; hedeflerini bulmana yardım eden bir pusula.", zorluk: 3 },
    "Sabırsızlık": { kelimeler: ["Hep geç kalan arkadaş", "Otobüs durağı", "Elindeki sinema bileti", "On beş dakika gecikme", "Saat 19.58"], not: "Bir şeyi çok önemsediğini gösterir; derin bir nefes beklemeyi kolaylaştırır.", zorluk: 2 },
    "İnat": { kelimeler: ["Baban", "Akşam yemeği masası", "Elden bırakılmayan telefon", "Üç gündür süren sessizlik", "Masada tek çatal sesi"], not: "Sözünü korumaya çalışırsın; ama bazen esneyebilmek de bir güçtür.", zorluk: 2 },
    "İsyan": { kelimeler: ["Yeni gelen müdür", "Okul bahçesi", "Panodaki yeni liste", "Herkese toplu ceza", "Pazartesi tören sırası"], not: "Haksızlığa ses çıkarma isteği; doğru yolla kullanınca gerçek değişim yaratır.", zorluk: 2 },
    "Hınç": { kelimeler: ["Seni rezil eden arkadaş", "Sınıf mesaj grubu", "Saklanan ekran görüntüsü", "Onun da çuvalladığı gün", "Bir yıl sonra"], not: "Kin de denir. İncinen yanın adalet istiyor; konuşmak, biriktirmekten iyi gelir.", zorluk: 3 },
    "Tutku": { kelimeler: ["İlk müzik hocan", "Kulüp prova odası", "Kopmuş gitar teli", "Ailenin \"artık bırak\" demesi", "Saat gece 2"], not: "Seni sen yapan şeyleri gösterir; hayatına anlam ve enerji katar.", zorluk: 2 },
    "Hırs": { kelimeler: ["Sınıf birincisi", "Kütüphane masası", "Deneme sıralaması listesi", "İki puan eksik", "Tatilde bile alarm"], not: "Seni hedefe iten bir motor; arada dinlenirsen çok daha iyi çalışır.", zorluk: 3 },
    "Aşk": { kelimeler: ["Yan sınıftaki biri", "Okul koridoru", "Ödünç alınan kalem", "Gezide yan koltuk", "\"Yazıyor...\""], not: "Birine yakınlık duymak çok doğal; kalbinin bağ kurma isteğini gösterir.", zorluk: 1 },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["En yakın arkadaşın", "Otogar peronu", "Önceki gece hazırlanan çanta", "İlk kamp sabahı", "Saat sabah 5"], not: "Bedende korkuya çok benzer; fark, beklediğin şeyin güzel olması.", zorluk: 1 },
    "Coşku": { kelimeler: ["Hiç tanımadığın kalabalık", "Açık hava konseri", "Havaya fırlatılan atkı", "O şarkının ilk notası", "Gecenin son şarkısı"], not: "Sevincin taşmasıdır; başkalarıyla paylaşınca daha da büyür.", zorluk: 2 },
    "Merak": { kelimeler: ["Yeni gelen sessiz öğrenci", "Okulun kilitli çatı katı", "Sahibi belirsiz defter", "Yarım kalan fısıltı", "Kapı aralığından ışık"], not: "Öğrenmenin motorudur; dünyayı keşfetmeni sağlar.", zorluk: 2 },
    "Cesaret": { kelimeler: ["Herkesin güldüğü arkadaş", "Okul sahnesi", "Elde titreyen kâğıt", "Herkesin sustuğu an", "\"Bir dakika!\""], not: "Korkmamak değil, korkuya rağmen adım atmaktır; herkesin içinde var.", zorluk: 2 },
    "Şaşkınlık": { kelimeler: ["Hep sessiz sıra arkadaşı", "Yetenek yarışması sahnesi", "Ters dönmüş sınav kâğıdı", "Perdenin açılması", "Üç saniyelik sessizlik"], not: "Beynin yeni bilgiyi işliyor; birkaç saniyelik doğal bir duraklama.", zorluk: 2 },
    "Heves": { kelimeler: ["Yeni kursun hocası", "Spor malzemecisi", "Açılmamış ayakkabı kutusu", "Kayıt formunu doldurmak", "Pazartesi sabahı 7"], not: "Başlama enerjisi; bazen çabuk söner, küçük adımlar onu canlı tutar.", zorluk: 3 },
    "İlham": { kelimeler: ["Sokak müzisyeni", "Sabah otobüsü", "Peçete ve kalem", "Bir şarkı sözü duymak", "Bir melodinin üç notası"], not: "Bir andan gelen kıvılcım; içindeki potansiyeli uyandırır. Hemen not al!", zorluk: 2 },
    "Yaratıcılık": { kelimeler: ["Proje ortağın", "Okul atölyesi", "Boş karton kutular", "Malzemesiz kalınan ödev", "\"Bunu atma!\""], not: "Herkeste vardır; hata yapmaya izin verince daha çok ortaya çıkar.", zorluk: 2 },
    "Şevk": { kelimeler: ["Kulüp başkanı", "Okul şenliği standı", "Boya kovaları", "Duvar boyama günü", "Sabah 8, herkes orada"], not: "İşe gönülden sarılmak; bulaşıcıdır, zor işleri bile keyifli kılar.", zorluk: 3 },
    "Büyülenme": { kelimeler: ["Yıldızları bilen dede", "Akvaryum tüneli", "Eski bir teleskop", "Şehirde elektrik kesintisi", "Kimsenin konuşmadığı dakika"], not: "Dünyanın güzelliğine açılmak; zihnini hem dinlendirir hem genişletir.", zorluk: 2 },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Bütün aile", "Bahçede uzun masa", "Yeni gelen yavru kedi", "Yaz tatilinin ilk günü", "Herkesin aynı anda konuşması"], not: "Neyin sana iyi geldiğini gösterir; o şeyleri hayatında çoğalt.", zorluk: 1 },
    "Neşe": { kelimeler: ["Sınıfın şakacısı", "Servisin arka koltuğu", "Tavuk sesli oyuncak", "Öğretmenin geç kalması", "Göz göze gelince yeniden"], not: "Gülmek stresi azaltır ve insanları birbirine yaklaştırır.", zorluk: 1 },
    "Umut": { kelimeler: ["Antrenör", "Yedek kulübesi", "Kenara yazılmış hedef", "Telafi sınavı sabahı", "İkinci yarının başı"], not: "Zor zamanlarda devam etmeni sağlayan ışık; çok güçlü bir duygu.", zorluk: 3 },
    "Gurur": { kelimeler: ["Küçük kardeşin", "Okul tören alanı", "Duvara asılan sertifika", "Adının anons edilmesi", "Ön sıradaki alkış"], not: "Emeğin karşılığını görmek; kendini takdir etmek çok sağlıklıdır.", zorluk: 1 },
    "Özgürlük": { kelimeler: ["Bisikletli arkadaşlar", "Sahil yolu", "Sana verilen ev anahtarı", "Tek başına ilk gezi", "Sabah, haritasız"], not: "Kendi seçimlerini yapma isteği ergenlikte çok doğal ve önemli.", zorluk: 2 },
    "Tatmin": { kelimeler: ["Yardım eden kardeşin", "Baştan düzenlenen oda", "Bin parçalık yapboz", "Teslim edilen proje", "Pazar akşamı 6"], not: "Emeğinin yerini bulduğunu hissetmek; \"yeterince iyi\" demeyi öğretir.", zorluk: 3 },
    "Keyif": { kelimeler: ["Kucağındaki kedi", "Cam kenarı koltuk", "Sıcak kakao", "Yağmurlu tatil sabahı", "Öğlene kadar pijama"], not: "Küçük zevkleri fark etmek ruh sağlığını güçlendirir.", zorluk: 2 },
    "Rahatlama": { kelimeler: ["Sınav gözetmeni", "Sınav salonu çıkışı", "Bütün dönem taşınan dosya", "\"Kalemleri bırakın\" anonsu", "Kapıdan çıkınca güneş"], not: "Stres bitince beden kendini sıfırlar; bu anın tadını çıkar.", zorluk: 2 },
    "Özgüven": { kelimeler: ["Yeni takım arkadaşları", "Sunum yapılan sınıf", "Kendi seçtiğin kıyafet", "Söz isteyip kalkmak", "İlk cümleden sonra"], not: "Hata yapsan da değerli olduğunu bilmektir; zamanla inşa edilir.", zorluk: 3 },
    "Zafer": { kelimeler: ["Karşı okulun takımı", "Final sahası", "Çamurlu forma", "Son saniye sayısı", "Hakemin son düdüğü"], not: "Zorluğun üstesinden gelmenin coşkusu; emeğinin meyvesini kutla.", zorluk: 1 },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Büyükannen", "Mutfak masası", "Elle örülmüş atkı", "Hasta olduğun gün", "Mutfaktan gelen ses"], not: "İnsanları birbirine bağlayan güçlü bir yapıştırıcı; hepimizin ihtiyacı.", zorluk: 1 },
    "Şefkat": { kelimeler: ["Küçük kardeş", "Karanlık çocuk odası", "Gece lambası", "Kâbustan uyanmak", "Gece 3, ayak sesleri"], not: "Birini korumak ve kollamak istemek; aynısını kendine de gösterebilirsin.", zorluk: 2 },
    "Güven": { kelimeler: ["Sıra arkadaşın", "Bahçedeki bank", "Kilitli günlük", "Ağızdan kaçmayan sır", "\"Sadece sana söylüyorum\""], not: "İlişkilerin temeli; zamanla, tutulan küçük sözlerle büyür.", zorluk: 2 },
    "Merhamet": { kelimeler: ["Köşedeki yaşlı simitçi", "Okul kapısı önü", "Harçlıktan ayrılan para", "Kar yağan sabah", "Eldivensiz eller"], not: "Başkasının acısına kalbinin açılması; dünyayı daha iyi bir yer yapar.", zorluk: 2 },
    "Şükran": { kelimeler: ["Notlarını getiren arkadaş", "Hastalık yatağı", "El yazısı notlar", "Bir haftalık devamsızlık", "Akşam 7, kapı zili"], not: "Minnettarlık da denir. İyiyi fark ettirir; mutluluğu gerçekten artırır.", zorluk: 3 },
    "Huzur": { kelimeler: ["Deden", "Köydeki bahçe", "Kapalı telefon", "Uzun bir yaz akşamı", "Cırcır böceği sesi"], not: "Bedenin ve zihnin güvende olduğunu söyler; şarjını dolduran bir mola.", zorluk: 3 },
    "Bağışlama": { kelimeler: ["Eski en yakın arkadaş", "Okul merdivenleri", "Uzun bir özür mesajı", "Aylar sonra ilk selam", "Mesajın altında \"görüldü\""], not: "Karşındakinden çok seni özgürleştirir; ama hazır olmadan kendini zorlama.", zorluk: 3 },
    "Aidiyet": { kelimeler: ["Takım arkadaşları", "Soyunma odası", "Numaralı takım forması", "İlk deplasman yolculuğu", "Sana takılan lakap"], not: "Bir gruba kendin olarak kabul edilmek; temel bir insan ihtiyacı.", zorluk: 2 },
    "Empati": { kelimeler: ["Ailesi ayrılan arkadaş", "Kantin köşesi", "Paylaşılan kulaklık", "Uzun bir telefon konuşması", "Gece 1, tek mesaj"], not: "Başkasının gözünden bakabilmek; dostlukları derinleştiren bir süper güç.", zorluk: 3 },
    "Sakinlik": { kelimeler: ["Telaşlı arkadaşların", "Yolda kalan otobüs", "Şarjı biten telefon", "Kaçırılan son servis", "\"Önce bir oturalım\""], not: "Zor anlarda net düşünmeni sağlar; nefesle güçlenen bir kas gibi.", zorluk: 2 },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Yaşlı köpeğin", "Veteriner bekleme salonu", "Asılı duran tasma", "Gelen telefon", "Sessiz araba yolculuğu"], not: "Kayıpları işlemeni sağlar; ağlamak zayıflık değil, iyileşmenin parçası.", zorluk: 1 },
    "Özlem": { kelimeler: ["Taşınan en yakın arkadaş", "Eski mahalle", "Eski fotoğraf albümü", "Görüntülü arama", "Radyoda o şarkı"], not: "Birini ya da bir şeyi ne kadar değerli bulduğunu gösterir.", zorluk: 1 },
    "Yalnızlık": { kelimeler: ["Yeni şehre taşınan genç", "Kalabalık kantin", "Sessiz telefon", "Cumartesi akşamı", "Kulaklıkta aynı şarkı"], not: "Bağ kurma ihtiyacının sinyali; çok genç hisseder, küçük bir adım değiştirebilir.", zorluk: 2 },
    "Pişmanlık": { kelimeler: ["Kalbini kırdığın arkadaş", "Gece yatağın", "Gönderilmiş mesaj", "Sinirle söylenen söz", "Saat 2, hâlâ uyanık"], not: "Hatalarından ders almanı sağlar; kendini affetmek de bir sonraki adım.", zorluk: 2 },
    "Hayal Kırıklığı": { kelimeler: ["Söz veren baban", "Pencere kenarı", "Masadaki iki maç bileti", "Son dakika gelen mesaj", "Maçın başlama saati"], not: "Beklentilerini gösterir; neyi önemsediğini anlamana yardım eder.", zorluk: 2 },
    "Dışlanmışlık": { kelimeler: ["Eski arkadaş grubu", "Kantin masası", "Sensiz çekilen fotoğraf", "Kurulan yeni mesaj grubu", "\"Sen de mi geliyordun?\""], not: "Beyin bunu fiziksel acı gibi işler; hissetmen çok doğal ve gerçek.", zorluk: 2 },
    "Boşluk": { kelimeler: ["\"Nasılsın?\" diye soran annen", "Tavanı izlenen oda", "Açık ama izlenmeyen dizi", "Uzun sınav döneminin bitişi", "Pazar, öğleden sonra 4"], not: "Zihin yorulunca bazen böyle durur; uzun sürerse güvendiğin biriyle konuş.", zorluk: 3 },
    "Tükenmişlik": { kelimeler: ["Hafta sonu kurs hocası", "Servis koltuğu", "Üç ayrı ders kitabı", "Üst üste deneme haftası", "Sabah 6.30 alarmı"], not: "Bedenin dinlenmek istiyor; mola vermek tembellik değil, ihtiyaç.", zorluk: 2 },
    "Çaresizlik": { kelimeler: ["Söz hakkı vermeyen büyükler", "Kapalı kapı önü", "Çekmeyen telefon", "Akşam gelen haber", "Kapının ardından sesler"], not: "Elinde olmayan şeyler olabilir; yardım istemek en güçlü hamledir.", zorluk: 3 },
    "Melankoli": { kelimeler: ["Yıllar önceki sen", "Yağmurlu otobüs camı", "Eski bir şarkı listesi", "Sonbaharın ilk akşamı", "Yanan ilk sokak lambası"], not: "Belli bir sebebi olmayan, biraz tatlı bir hüzün; şarkıların ilham kaynağı.", zorluk: 3 },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Sana inanmayan herkes", "Sabahın köründe koşu pisti", "Duvardaki çalışma çizelgesi", "Üç ay sonraki seçmeler", "Yüzüncü gün"], not: "Hedefine odaklanmanı sağlar; küçük adımlar büyük fark yaratır.", zorluk: 2 },
    "Hayranlık": { kelimeler: ["Ünlü bir sporcu", "Okulun konferans salonu", "İmzalı forma", "Okula söyleşiye gelmesi", "\"Ben de bir gün...\""], not: "Kim olmak istediğini gösterir; ilham kaynağın olabilir.", zorluk: 2 },
    "Sadakat": { kelimeler: ["Dedikodusu yapılan arkadaş", "Popüler grubun masası", "Arkadaşlık bilekliği", "\"Ya o ya biz\"", "Tepsiyle ayakta kalmak"], not: "Değer verdiklerinin yanında durmak; ama seni inciten bir ilişkide kalmak zorunda değilsin.", zorluk: 3 },
    "Sorumluluk": { kelimeler: ["Sana emanet kardeş", "Sadece ikinizin olduğu ev", "Buzdolabındaki yapılacaklar listesi", "Annenin geç kalacağı akşam", "Saat 8, ilaç vakti"], not: "Güvenilir olmanın parçası; ama her yükü tek başına taşımak zorunda değilsin.", zorluk: 1 },
    "Kıskançlık": { kelimeler: ["Arkadaşının yeni arkadaşı", "Teneffüs bahçesi", "İkisinin ortak fotoğrafı", "Seni değil onu çağırması", "Profiline beşinci bakış"], not: "Değer verdiğin şeyi kaybetme korkusu; konuşmak çoğu zaman iyi gelir.", zorluk: 1 },
    "Adalet": { kelimeler: ["Kayırılan öğrenci", "Okul yarışması", "Puan tablosu", "Yanlış kişiye verilen ödül", "\"Ama bu doğru değil\""], not: "Doğruyu önemsediğini gösterir; sesini duyurman için güçlü bir pusula.", zorluk: 2 },
    "Suçluluk": { kelimeler: ["Ceza alan kardeşin", "Oturma odası", "Yapıştırılmış vazo", "Annenin eve gelişi", "\"Kim yaptı bunu?\""], not: "Değerlerine ters düştüğünü söyler; telafi etmek yükü hafifletir.", zorluk: 2 },
    "Kibir": { kelimeler: ["Takipçisi artan çocuk", "Okul girişi", "Pahalı yeni ayakkabılar", "Eski arkadaşa selam vermemek", "\"Siz kimdiniz?\""], not: "Kendini beğenmişlik de denir. Çoğu zaman içteki güvensizliği saklar.", zorluk: 2 },
    "Onur": { kelimeler: ["Kopya teklif eden arkadaş", "Sınav salonu", "Katlanmış küçük kâğıt", "Ertesi gün açıklanan notlar", "Gözetmenin arkası dönükken"], not: "Değerlerine uygun yaşamanın verdiği his; kendine saygı duymanı sağlar.", zorluk: 3 },
    "Rekabet": { kelimeler: ["Eski en iyi arkadaş", "Okullar arası turnuva", "Skor tablosu", "Final eşleşmesi", "Maç öncesi tokalaşma"], not: "Seni geliştirir; kazanmak kadar adil oynamak da önemli.", zorluk: 1 },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Kamptaki arkadaşlar", "Ormandaki kamp alanı", "Sönen el feneri", "Çadırın dışında hışırtı", "Saat 3, herkes uyuyor"], not: "Seni tehlikeden koruyan alarm sistemi; en cesur insanda bile var.", zorluk: 1 },
    "Kaygı": { kelimeler: ["Sonucu soran akrabalar", "Gece yarısı yatak", "Sınav giriş belgesi", "Yarınki büyük sınav", "Telefonda 03.12"], not: "Beynin seni hazırlamaya çalışıyor; yavaş nefes bu alarmı kısar.", zorluk: 1 },
    "Utanç": { kelimeler: ["Notu sesli okuyan öğretmen", "Sessizleşen sınıf", "Kırmızı kalemli kâğıt", "Herkesin önünde eleştiri", "Arka sıradaki fısıltı"], not: "Herkes yaşar ama az konuşulur; paylaştıkça gücünü kaybeder.", zorluk: 2 },
    "Kafa Karışıklığı": { kelimeler: ["İki farklı öğretmen", "Yeni okulun koridorları", "Ters tutulan kroki", "Birbirini tutmayan talimatlar", "Üçüncü kez aynı kapı"], not: "Öğrenmenin ilk adımı; anlamadığını söylemek cesaret ister.", zorluk: 2 },
    "Güvensizlik": { kelimeler: ["Yeni arkadaş grubu", "Ayna karşısı", "Silinip yeniden yüklenen fotoğraf", "Paylaşımdan sonraki bir saat", "Üç beğeni"], not: "Herkesin yaşadığı bir his; değerin beğeni sayısıyla ölçülmez.", zorluk: 2 },
    "Gözü Kalmak": { kelimeler: ["Senden önce alan müşteri", "Mağaza vitrini", "Vitrindeki o ceket", "Bir gün geç gitmek", "Aylar sonra aynı vitrin"], not: "Olmayan bir şeye içinin gitmesi normal; neyi gerçekten istediğini gösterir.", zorluk: 3 },
    "Yetersizlik": { kelimeler: ["Her şeyde iyi kuzen", "Bayram sofrası", "Yan yana konan karneler", "Sıranın sana gelmesi", "\"Peki ya sen?\""], not: "Kendini başkalarının vitriniyle kıyaslamak yanıltır; kendi yolunu ölçü al.", zorluk: 2 },
    "Mahcubiyet": { kelimeler: ["Matematik öğretmeni", "Kantin kuyruğu", "Ters giyilmiş tişört", "Ağızdan kaçan kelime", "Arkadan gelen kıkırtı"], not: "Herkesin başına gelir; birkaç gün sonra gülerek anlatacağın bir anı olur.", zorluk: 2 },
    "Tedirginlik": { kelimeler: ["Bugün tuhaf davranan arkadaş", "Eve dönüş yolu", "\"Konuşmamız lazım\" mesajı", "Sen gelince kesilen sohbet", "Cevapsız iki arama"], not: "Sezgilerin seni uyarıyor; ne olduğunu sormak çoğu zaman rahatlatır.", zorluk: 2 },
    "Panik": { kelimeler: ["Sınav görevlisi", "Sınav binası kapısı", "Çantanın dibi", "Kapılar kapanmadan beş dakika", "Sıradaki son kişi"], not: "Bedenin geçici bir alarmı; yavaş nefes alıp vermek dalgayı geçirir.", zorluk: 1 },
  },

  /* ════════════════════ YETİŞKİN ════════════════════ */
  yetiskin: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": { kelimeler: ["Yıllar önceki patron", "Ortak asansör", "Onun ağır parfümü", "Yeniden müdürün olması", "İlk toplantı sabahı"], not: "Çok derin bir incinmenin izi olabilir; hissetmek seni kötü biri yapmaz.", zorluk: 3 },
    "Kızgınlık": { kelimeler: ["Komşunun misafiri", "Apartman otoparkı", "Cama bırakılan not", "Çıkış yolu kapalı", "Sabah sekizi çeyrek geçe"], not: "Sınırın çiğnendiğinde yükselen sağlıklı bir alarm; asıl mesele onu nasıl dile getirdiğin.", zorluk: 1 },
    "Arzu": { kelimeler: ["Emlakçı", "Deniz manzaralı balkon", "Anahtar destesi", "Son bir daire kaldı", "Fiyatı fısıldaması"], not: "Neyi gerçekten istediğini fark etmek, hayatına yön vermenin ilk adımıdır.", zorluk: 2 },
    "Sabırsızlık": { kelimeler: ["Hazırlanan eş", "Kapı önü", "Çalışır durumda araba", "Uçağa iki saat kala", "Üçüncü \"geliyorum!\""], not: "Beklemek en çok önemsediğimiz şeylerde zorlaşır; bir nefes, saati yavaşlatmaz ama seni yumuşatır.", zorluk: 1 },
    "İnat": { kelimeler: ["Navigasyonu açan eş", "Köy yolu ayrımı", "Eski karayolu haritası", "Üçüncü kez aynı tabela", "\"Bu yol kısa\""], not: "Çoğu zaman yolu değil, haklı çıkma ihtiyacını korur; geri adım da bir güçtür.", zorluk: 2 },
    "İsyan": { kelimeler: ["Ev sahibi", "Apartman toplantısı", "Yeni kira sözleşmesi", "Fahiş zam haberi", "Oylama anı"], not: "Haksız düzene boyun eğmeme isteği; birlikte dile gelince değişim başlatabilir.", zorluk: 2 },
    "Hınç": { kelimeler: ["Eski iş ortağı", "Ortak dostun düğünü", "Hiç ödenmemiş senet", "Aynı masaya düşmek", "Toplu fotoğraf anı"], not: "Kapanmamış bir yaranın faturası gibidir; en çok taşıyanı yorar, karşı tarafı değil.", zorluk: 3 },
    "Tutku": { kelimeler: ["Emekli saat tamircisi", "Bodrum katı atölye", "Yarım kalmış gemi maketi", "Eşin \"yine mi?\" demesi", "Gece üç"], not: "İnsanı zamanın dışına çıkaran bir ateş; hayatı anlamlı kılan şeylerden biri.", zorluk: 3 },
    "Hırs": { kelimeler: ["Genel müdür", "Hafta sonu ofis", "İsimsiz müdür odası", "Terfi listesi açıklanacak", "Herkes çıktıktan sonra"], not: "Seni ileri taşıyan güçlü bir motor; yalnızca neyi geride bıraktığına arada bir bak.", zorluk: 2 },
    "Aşk": { kelimeler: ["Kitapçıdaki yabancı", "Yağmurlu iskele", "Paylaşılan şemsiye", "Vapuru kaçırmak", "İsmini sormadan ayrılmak"], not: "Yaşın kaç olursa olsun, kalbin hâlâ şaşırtabildiğini hatırlatan güzel bir sarsıntı.", zorluk: 1 },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["İlk torun", "Doğumhane koridoru", "Mavi patik", "Kapı açılıyor", "Saat sabahın beşi"], not: "Bedende korkuya çok benzer; farkı, kapının ardında güzel bir şey beklemen.", zorluk: 1 },
    "Coşku": { kelimeler: ["Halay başındaki amca", "Köy meydanı", "Davul zurna", "Davetsiz gelen yağmur", "Gece yarısına doğru"], not: "Sevinç taşıp kalabalığa karışınca büyür; paylaşılan an, tek başınakinden daha uzun yaşar.", zorluk: 2 },
    "Merak": { kelimeler: ["Yeni taşınan komşu", "Karşı apartman", "Kapıdaki koliler", "Gece gelen kamyon", "Perdeyi aralamak"], not: "Yetişkinliğin içinde yaşamaya devam eden çocuk; dünyayı canlı tutan şey.", zorluk: 1 },
    "Cesaret": { kelimeler: ["Yüzme hocası", "Derin havuz kenarı", "Su gözlüğü", "Hocanın elini bırakması", "\"Üç deyince\""], not: "Korkunun yokluğu değil, korkuyla birlikte adım atabilmek; her yaşta yeniden öğrenilir.", zorluk: 2 },
    "Şaşkınlık": { kelimeler: ["Sessiz muhasebeci", "Şirket yılbaşı partisi", "Elektro gitar", "Sahneye çıkıp söylemesi", "Mikrofonun cızırtısı"], not: "Zihnin \"bunu beklemiyordum\" deyip yeniden ayarlanması; insanlar hep bildiğimizden fazlası.", zorluk: 2 },
    "Heves": { kelimeler: ["Seramik hocası", "Hobi malzemecisi", "Yepyeni çizim defteri", "Kursa yazılmak", "Kasada uzayan fiş"], not: "Yeni başlangıçların tatlı kıvılcımı; sönse bile seni bir yere götürmüş olur.", zorluk: 2 },
    "İlham": { kelimeler: ["Sokak müzisyeni", "Gece vapuru", "Kahve peçetesi", "Aylardır takılan bölüm", "Vapur düdüğü"], not: "Çoğu zaman aramadığın anda gelir; dinlenmiş ve açık bir zihni sever.", zorluk: 2 },
    "Yaratıcılık": { kelimeler: ["Sıkılan yeğenler", "Kalabalık bayram evi", "Karton kutu yığını", "Elektrikler kesiliyor", "\"Bir dakika, durun!\""], not: "Kısıtlar çoğu zaman en iyi fikirlerin annesidir; oyun oynayan zihin üretir.", zorluk: 3 },
    "Şevk": { kelimeler: ["Gönüllü mahalleli", "Bakımsız mahalle bahçesi", "Fidan dolu el arabası", "Hafta sonu imece", "Sabahın altısı"], not: "Anlamlı bir işe gönülden girişmek; yorgunluğu bile tatlı kılan enerji.", zorluk: 3 },
    "Büyülenme": { kelimeler: ["Yaşlı balıkçı", "Gece teknesi", "Sudaki ışıltılar", "Motorun susması", "Ayın olmadığı gece"], not: "Dünyanın hâlâ sırları olduğunu hatırlatır; yetişkinlerin en çok ihtiyaç duyduğu anlardan.", zorluk: 2 },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Uzaktan gelen kardeş", "Bahçedeki uzun sofra", "Demlikte taze çay", "Yıllar sonra tam kadro", "Akşam güneşi"], not: "Çoğu zaman büyük olaylarda değil, sıradan bir sofrada saklıdır.", zorluk: 1 },
    "Neşe": { kelimeler: ["Enişte", "Kalabalık mutfak", "Unlu oklava", "Un her yere saçılıyor", "Mutfakta bir çığlık"], not: "Hafifliğin ilacıdır; yetişkinler de oyun oynamaya ihtiyaç duyar.", zorluk: 2 },
    "Umut": { kelimeler: ["Uzun süredir işsiz kardeş", "Otobüs durağı", "Ütülenmiş gömlek", "İkinci görüşmeye çağrı", "Telefonun titremesi"], not: "Karanlıkta bile bir kapı aralığı görebilmek; insanı ayakta tutan sessiz güç.", zorluk: 2 },
    "Gurur": { kelimeler: ["Ailenin ilk üniversitelisi", "Mezuniyet töreni", "Eski fotoğraf makinesi", "Adının anons edilmesi", "Kalabalıkta bir el sallaması"], not: "Emeğin karşılık bulduğunu görmek; kendin ya da sevdiğin için hissetmeyi hak ediyorsun.", zorluk: 1 },
    "Özgürlük": { kelimeler: ["Yeni emekli", "Sahil yolu", "Çalar saatin pili", "Son mesai günü", "Pazartesi sabahı on"], not: "Kendi zamanının sahibi olmak; bazen tek ihtiyacımız bir pencereyi açmak.", zorluk: 2 },
    "Tatmin": { kelimeler: ["Yardıma gelen kardeş", "Yeni boyanmış salon", "Su terazisi", "Son fırça darbesi", "Geri çekilip bakmak"], not: "Alkış gerekmez; işini iyi yapmış olmanın sessiz, içten doygunluğu.", zorluk: 3 },
    "Keyif": { kelimeler: ["Tavla arkadaşı", "Asma altı", "Közde pişmiş kahve", "Bir el daha", "Öğle sıcağı"], not: "Anın tadını çıkarmak bir hak; acele etmeden yaşamak da bir beceri.", zorluk: 2 },
    "Rahatlama": { kelimeler: ["Taksi şoförü", "Havalimanı kapısı", "Unutulan pasaport", "Bilinmeyen numaradan arama", "Kapanışa on dakika"], not: "Gerilimin bedenden akıp gitmesi; vücudun \"tehlike geçti\" deme biçimi.", zorluk: 1 },
    "Özgüven": { kelimeler: ["Şüpheci yatırımcı", "Sunum sahnesi", "Kapalı duran notlar", "Zor bir soru gelmesi", "Mikrofonu eline almak"], not: "Her şeyi bilmek değil, bilmediğinle bile ayakta durabilmek.", zorluk: 2 },
    "Zafer": { kelimeler: ["Kahvehane şampiyonu", "Mahalle kahvesi", "Fildişi zarlar", "Son atışta düşeş", "Masadaki sessizlik"], not: "Uzun bir mücadelenin sonunda gelen o an; tadını çıkarmak serbest.", zorluk: 1 },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Huysuz babaanne", "Sobalı mutfak", "Yamuk örülmüş atkı", "Gizlice cebe konan harçlık", "Kapıda ayakkabı giyerken"], not: "Çoğu zaman sözle değil, küçük ve kusurlu jestlerle konuşur.", zorluk: 1 },
    "Şefkat": { kelimeler: ["Islanmış kedi yavrusu", "Apartman merdiveni", "Eski bir havlu", "Kapı önünde miyavlama", "Gece yağmuru"], not: "Kırılgan olanı koruma isteği; aynı yumuşaklığı kendine göstermeyi de unutma.", zorluk: 2 },
    "Güven": { kelimeler: ["Eski komşu", "Tatil öncesi kapı", "Yedek ev anahtarı", "İki haftalık yolculuk", "\"Çiçekleri sularsın\""], not: "Yıllarla örülür, bir anda sınanır; ilişkilerin görünmeyen temeli.", zorluk: 2 },
    "Merhamet": { kelimeler: ["Simit satan yaşlı adam", "Soğuk metro çıkışı", "Simit tablası", "Akşam karanlığı çökerken", "İlk kar taneleri"], not: "Başkasının yükünü görüp elini uzatabilmek; insan olmanın en sıcak hâli.", zorluk: 2 },
    "Şükran": { kelimeler: ["Lisedeki edebiyat öğretmeni", "Kitap imza günü", "Eski karne", "Sırada onu görmek", "\"Beni hatırladınız mı?\""], not: "Hayatına dokunanları görmek; söylendiğinde iki tarafı da iyileştirir.", zorluk: 2 },
    "Huzur": { kelimeler: ["Uyuyan torun", "Köy evi verandası", "Yün battaniye", "Akşam serinliği çöküyor", "Uzaktan köpek havlaması"], not: "Dışarısı sustuğunda değil, içerisi yerine oturduğunda gelir.", zorluk: 2 },
    "Bağışlama": { kelimeler: ["Yıllardır küs kardeş", "Bayram sabahı", "Bir tepsi baklava", "Zile ilk basan o", "Kapı deliğinden bakmak"], not: "Olanı unutmak değil, o yükü daha fazla taşımamayı seçmek.", zorluk: 2 },
    "Aidiyet": { kelimeler: ["Mahalle korosu", "Muhtarlık salonu", "Adı yazılı fincan", "Yılbaşı konserine çağrılmak", "Provadan sonra çay"], not: "Bir yerin parçası olmak, insanın en temel ihtiyaçlarından; her yaşta yeniden kurulabilir.", zorluk: 3 },
    "Empati": { kelimeler: ["Acemi garson", "Kalabalık lokanta", "Kırık bardaklar", "Tepsiyi düşürmesi", "Gençlikteki yaz işi"], not: "Başkasının ayakkabısıyla birkaç adım yürümek; anlamak, yargılamaktan önce gelir.", zorluk: 3 },
    "Sakinlik": { kelimeler: ["Telaşlı yolcular", "Arızalı asansör", "Telefon feneri", "Elektrik kesintisi", "\"Herkes bir dursun\""], not: "Fırtınanın ortasında durabilen iç ses; çevrene de bulaşan bir dinginlik.", zorluk: 3 },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Yıllardır kiracı komşu", "Çocukluk evi", "Pervazdaki boy çizgileri", "Evin satılması", "Son kez kapıyı kilitlemek"], not: "Değer verdiğin bir şeyi kaybetmenin doğal yasıdır; acele ettirmeye gerek yok.", zorluk: 1 },
    "Özlem": { kelimeler: ["Yurt dışındaki abla", "Toplanmış çocuk odası", "Onun hırkası", "Görüntülü arama kopuyor", "Saat farkı"], not: "Sevdiğin birinin içinde bıraktığı yer; mesafe ne kadar uzunsa bağ o kadar görünür.", zorluk: 1 },
    "Yalnızlık": { kelimeler: ["Yeni taşınan memur", "Kalabalık bir şehir", "Kapı zili", "Doğum günü akşamı", "Gece on bir"], not: "Kalabalığın içinde de hissedilebilir; bağ kurma ihtiyacının sessiz çağrısıdır.", zorluk: 1 },
    "Pişmanlık": { kelimeler: ["Arayan anne", "Dönüş yolu", "Dinlenmemiş sesli mesaj", "Telefonu yüzüne kapatmak", "Kırmızı ışıkta beklerken"], not: "Değerlerine dönmek istediğini gösterir; telafi için çoğu zaman geç değildir.", zorluk: 2 },
    "Hayal Kırıklığı": { kelimeler: ["Gençlik idolü şarkıcı", "Yıllar beklenen konser", "Pahalı ön sıra bileti", "Yirmi dakikada bitmesi", "Işıkların yanması"], not: "Beklenti ile gerçek arasındaki boşluk; ne kadar önemsediğini de gösterir.", zorluk: 1 },
    "Dışlanmışlık": { kelimeler: ["Eski ekip arkadaşları", "Ofis mutfağı", "Paylaşılan tatil fotoğrafı", "İçeri girince susmaları", "Öğle arası"], not: "Ait olma ihtiyacına dokunur; acıtması, insanlara ne kadar değer verdiğini gösterir.", zorluk: 2 },
    "Boşluk": { kelimeler: ["Evden ayrılan son çocuk", "Akşam salonu", "Elde dolaşan kumanda", "Odanın kapısını kapatmak", "Pazar öğleden sonrası"], not: "Bir dönemin bitip yenisinin henüz başlamadığı ara; yeni anlamlar için yer açar.", zorluk: 3 },
    "Tükenmişlik": { kelimeler: ["Sürekli arayan müdür", "Gece ofis ışıkları", "Soğumuş kahve fincanı", "Yeni bir acil iş", "Pazar akşamı"], not: "Tembellik değil, uzun süre fazla vermenin sonucu; dinlenmek bir ihtiyaç, ödül değil.", zorluk: 2 },
    "Çaresizlik": { kelimeler: ["Dilini bilmediğin memur", "Yabancı bir gar", "Bloke olmuş banka kartı", "Son trenin kalkması", "Telefonda yüzde üç şarj"], not: "Kontrolün elden kaydığı an; yardım istemek zayıflık değil, en akıllıca hamle.", zorluk: 2 },
    "Melankoli": { kelimeler: ["Akordeon çalan komşu", "Kasım akşamı balkon", "Eski bir plak", "Bildik bir şarkı başlıyor", "Çayın soğuması"], not: "Tatlı ile acının karıştığı yumuşak bir gri; bazen ruh yavaşlamak ister.", zorluk: 3 },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Elli yaşında öğrenci", "Gece kursu sınıfı", "Kalın sınav kitabı", "Üçüncü kez başvuru", "Sabah beşte alarm"], not: "Yenilgilerden sonra yine masaya oturabilmek; yaşla değil, niyetle ilgilidir.", zorluk: 2 },
    "Hayranlık": { kelimeler: ["Seksenlik maratoncu", "Sahil koşu yolu", "Eski koşu ayakkabıları", "Herkesi geçip gitmesi", "Bitiş çizgisi"], not: "Başkasında gördüğümüz ışık, çoğu zaman kendimizde büyütmek istediğimiz şeydir.", zorluk: 2 },
    "Sadakat": { kelimeler: ["Kırk yıllık berber", "Eski çarşı", "Yeni zincir dükkân broşürü", "Dükkânın zor günleri", "Her ayın ilk cumartesisi"], not: "Kolay olanı değil, bağlı olduğunu seçmek; zor günlerde anlamı ortaya çıkar.", zorluk: 3 },
    "Sorumluluk": { kelimeler: ["Yaşlanan anne-baba", "Eczane kuyruğu", "Haftalık ilaç kutusu", "Kardeşin işi çıktı", "Mesai çıkışı"], not: "Değer verdiklerini taşıma isteği; ama yükü paylaşmak da sorumluluğun parçası.", zorluk: 2 },
    "Kıskançlık": { kelimeler: ["Eşin yeni iş arkadaşı", "Kalabalık doğum günü", "Gece gelen mesaj", "Aynı şakaya gülmeleri", "Masanın öbür ucu"], not: "Kaybetme korkusunun bir yüzü; sakin bir konuşma çoğu zaman en iyi ilaçtır.", zorluk: 1 },
    "Adalet": { kelimeler: ["Yaşlı bir teyze", "Belediye vezne kuyruğu", "Elindeki sıra numarası", "Tanıdıkla öne geçen adam", "\"Pardon beyefendi\""], not: "Sadece kendin için değil, başkası için de ses çıkarabilmek; toplumun görünmez harcı.", zorluk: 2 },
    "Suçluluk": { kelimeler: ["Azar işiten meslektaş", "Patronun odası", "Yanlış gönderilen dosya", "Hatanın ona yüklenmesi", "Öğle yemeğinde karşılaşmak"], not: "Vicdanın \"bunu düzelt\" demesi; itiraf ve telafi çoğu zaman yükü hafifletir.", zorluk: 2 },
    "Kibir": { kelimeler: ["Köye dönen kuzen", "Bayram sofrası", "Kolundaki pahalı saat", "Şehir hikâyeleri anlatmak", "\"Bizim orada…\""], not: "Çoğu zaman içerideki kırılganlığı saklayan bir zırh; altında kabul görme isteği yatar.", zorluk: 3 },
    "Onur": { kelimeler: ["Müteahhit", "Şantiye konteyneri", "Masadaki kalın zarf", "Kimse görmeyecek", "Akşam eve dönüş"], not: "Kimse bakmazken de kendine sadık kalmak; başı dik uyumanın sebebi.", zorluk: 3 },
    "Rekabet": { kelimeler: ["Bitişik komşu", "Yan yana balkonlar", "Saksıdaki sardunyalar", "Onun da gübre alması", "Sabah sulama saati"], not: "Dozunda olunca insanı geliştirir; hele sardunyalar söz konusuysa.", zorluk: 2 },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Arka koltukta çocuklar", "Issız orman yolu", "Yanıp sönen benzin ışığı", "Arkadan yaklaşan farlar", "Şebeke yok"], not: "Seni ve sevdiklerini korumak için var; beden önce davranır, akıl sonra yetişir.", zorluk: 1 },
    "Kaygı": { kelimeler: ["Yeni yönetim", "Fısıltılı ofis koridoru", "Takvime düşen toplantı", "Küçülme söylentisi", "Yatağa girince"], not: "Zihnin henüz olmamış şeylere hazırlanma çabası; şimdiye dönmek sesini kısar.", zorluk: 2 },
    "Utanç": { kelimeler: ["Gelinin annesi", "Kına gecesi", "Açık kalan mikrofon", "Müziğin bir anda kesilmesi", "Bütün başların dönmesi"], not: "Kendimize yönelttiğimiz sert bir bakış; hata yapmak seni değersiz yapmaz.", zorluk: 2 },
    "Kafa Karışıklığı": { kelimeler: ["Talimat veren eş", "Yeni evin salonu", "Yarım kurulmuş dolap", "Fazladan kalan vidalar", "Altıncı sayfa"], not: "Zihnin yeni bilgiyi yerleştirmeye çalışması; bilmemek, öğrenmenin ilk adımıdır.", zorluk: 2 },
    "Güvensizlik": { kelimeler: ["Eşin şık arkadaşları", "Davetli olunan yemek", "Yatağa yığılan kıyafetler", "Kapıdan girmeden önce", "Asansör aynası"], not: "İç eleştirmenin sesi çok yükseldiğinde gelir; çoğu zaman kimse senin kadar bakmıyor.", zorluk: 3 },
    "Gözü Kalmak": { kelimeler: ["Senden önce davranan alıcı", "Bit pazarı tezgâhı", "\"Satıldı\" yazan etiket", "Ertesi gün geri dönmek", "Yıllar sonra bir vitrin"], not: "Alamadığın şey, aslında neyi sevdiğini fısıldar; içinde kalan küçük bir istek.", zorluk: 3 },
    "Yetersizlik": { kelimeler: ["Durmadan ağlayan bebek", "Dağınık mutfak", "Okunmuş ebeveynlik kitabı", "Kayınvalidenin anında susturması", "Gecenin dördü"], not: "Herkes bir şeyi ilk kez yaparken acemidir; öğrenmek zaman ister.", zorluk: 2 },
    "Mahcubiyet": { kelimeler: ["Patronun eşi", "Şık bir akşam yemeği", "Gömleğe dökülen sos", "Adını yanlış söylemek", "Kısa bir sessizlik"], not: "Küçük bir pot, büyük bir insanlık hâli; gülüp geçebilmek en güzel çıkış.", zorluk: 1 },
    "Tedirginlik": { kelimeler: ["Çok soru soran yolcu", "Tenha gece treni", "Sahipsiz bir çanta", "Hep aynı yere bakması", "Bir sonraki durak"], not: "Adı konmamış bir \"bir şeyler ters\" hissi; içgüdüne kulak vermek her zaman meşru.", zorluk: 3 },
    "Panik": { kelimeler: ["Gelmek üzere kayınvalide", "Dumanla dolan mutfak", "Fırında yanan börek", "Kapı zili çalıyor", "\"Beş dakikaya oradayım\""], not: "Alarm sisteminin en yüksek sesi; dalga gibi yükselir ve mutlaka geri çekilir.", zorluk: 1 },
  },

  /* ════════════════════ ÇOCUK (7-12) ════════════════════ */
  cocuk: {

    /* ❤️ Kırmızı — Öfke Ailesi */
    "Nefret": { kelimeler: ["Mahalledeki büyük çocuk", "Okul servisi", "Yırtılmış resim", "Yine aynı şaka", "Herkes güldü"], not: "Çok kırılınca böyle sert bir his olabilir. Bir büyüğe anlat.", zorluk: 3, cocukModu: false },
    "Kızgınlık": { kelimeler: ["Küçük kardeş", "Oyun odası", "Lego kulesi", "Kule yıkıldı", "\"Ups!\" sesi"], not: "Kızmak çok normal. Önce derin nefes, sonra kelimelerle anlat!", zorluk: 1, cocukModu: true },
    "Arzu": { kelimeler: ["Dondurmacı amca", "Sıcak bir plaj", "Çikolatalı külah", "Cebim bomboş", "Uzaktan müzik sesi"], not: "Bir şeyi çok istemek normal; beklemeyi de öğrenebiliriz.", zorluk: 2, cocukModu: false },
    "Sabırsızlık": { kelimeler: ["Kargocu abla", "Pencere önü", "Duvar saati", "Kargo yolda", "Her araba sesi"], not: "Beklemek zor! Şarkı söylemek ya da saymak zamanı kısaltır.", zorluk: 1, cocukModu: true },
    "İnat": { kelimeler: ["Minik dinozor", "Yemek masası", "Brokoli tabağı", "Yemek soğudu", "Çatal tıkırtısı"], not: "Bazen \"hayır\" demek isteriz, normal! Ortada buluşmak işe yarar.", zorluk: 2, cocukModu: true },
    "İsyan": { kelimeler: ["Sert bir kral", "Oyuncak krallığı", "Kural listesi", "Oyun yasaklandı", "Meydanda davul sesi"], not: "Kural haksız gelince itiraz etmek normal; sakin konuşmak işe yarar.", zorluk: 3, cocukModu: true },
    "Hınç": { kelimeler: ["Sözünü tutmayan arkadaş", "Okul bahçesi", "Küçük not defteri", "Haftalar geçti", "Onu yine gördüm"], not: "Eski kırgınlıkları bir büyüğe anlatmak yükü hafifletir.", zorluk: 3, cocukModu: false },
    "Tutku": { kelimeler: ["Dinozor uzmanı çocuk", "Doğa müzesi", "Dinozor kemiği", "Bütün gün çalıştım", "Müze kapanış zili"], not: "Bir şeyi tüm kalbinle sevmek, seni sen yapan şeylerden biri.", zorluk: 3, cocukModu: false },
    "Hırs": { kelimeler: ["Hep birinci olan kız", "Yüzme havuzu", "Dolu madalya kutusu", "Yeni yarış ilanı", "Sabah altıda alarm"], not: "En iyisi olmak istemek güç verir; dinlenmek de kazanmaktır.", zorluk: 3, cocukModu: true },
    "Aşk": { kelimeler: ["Prens ve prenses", "Balo salonu", "Kırmızı gül", "Dans başladı", "Saat on ikiyi vurdu"], not: "Birini çok özel bulmak güzel bir his; büyüdükçe daha iyi anlarsın.", zorluk: 2, cocukModu: false },

    /* 🧡 Turuncu — Heyecan Ailesi */
    "Heyecan": { kelimeler: ["Kuzenler", "Lunapark kapısı", "Giriş bileti", "Yarın sabah erkenden", "Çalar saat kuruldu"], not: "Güzel bir şeyi beklerken içindeki kıpır kıpır his, işte bu!", zorluk: 1, cocukModu: true },
    "Coşku": { kelimeler: ["Babamla ben", "Stadyum", "Takım bayrağı", "Son dakika golü", "Binlerce ses birden"], not: "Sevinç içine sığmayınca zıplarsın, bağırırsın. Ne güzel!", zorluk: 2, cocukModu: true },
    "Merak": { kelimeler: ["Yaşlı bir kâşif", "Tavan arası", "Kilitli sandık", "Anahtar bulundu", "Gıcırdayan bir ses"], not: "Merak, yeni şeyler öğrenmenin anahtarı. Soru sormaya devam!", zorluk: 1, cocukModu: true },
    "Cesaret": { kelimeler: ["Minik bir kurbağa", "Yüzme havuzu", "Atlama tahtası", "Sıra bana geldi", "Aşağıdan sesler"], not: "Cesaret korkmamak değil; korksan da denemek demek!", zorluk: 1, cocukModu: true },
    "Şaşkınlık": { kelimeler: ["Sihirbaz", "Doğum günü partisi", "Siyah şapka", "Işıklar birden yandı", "\"Puf!\" diye bir ses"], not: "Beklemediğin bir şey olunca böyle olmak çok doğal!", zorluk: 1, cocukModu: true },
    "Heves": { kelimeler: ["Ressam teyze", "Kendi odam", "Yeni boya seti", "Kutuyu açtım", "Kâğıt hışırtısı"], not: "Yeni bir şeye başlamak için can atmak çok güzel!", zorluk: 2, cocukModu: true },
    "İlham": { kelimeler: ["Yaşlı bir mucit", "Bahçe salıncağı", "Boş defter", "Bir kuş uçtu", "Yaprak hışırtısı"], not: "Fikirler bazen birden gelir! Yanında hep bir defter olsun.", zorluk: 3, cocukModu: true },
    "Yaratıcılık": { kelimeler: ["Sıkılan iki kardeş", "Çocuk odası", "Karton kutular", "Yağmurlu bir gün", "Makas sesi"], not: "Hayal edip yeni bir şey yapmak harika! Kutu bile roket olur.", zorluk: 2, cocukModu: true },
    "Şevk": { kelimeler: ["Bahçıvan dede", "Okul bahçesi", "Sulama kovası", "Fidan dikme günü", "Öğle zili çaldı"], not: "Sevdiğin işi yaparken enerjin hiç bitmiyorsa, buna şevk denir.", zorluk: 3, cocukModu: false },
    "Büyülenme": { kelimeler: ["Bilge bir baykuş", "Gece kamp alanı", "Teleskop", "Kayan yıldız geçti", "Herkes sustu"], not: "Bir güzellik seni içine çekince zaman durur gibi olur.", zorluk: 2, cocukModu: true },

    /* 💛 Sarı — Mutluluk Ailesi */
    "Mutluluk": { kelimeler: ["Babaannem", "Mutfak", "Doğum günü pastası", "Herkes şarkı söyledi", "Kapı zili çaldı"], not: "Mutluluk paylaştıkça büyür. Bugün seni ne gülümsetti?", zorluk: 1, cocukModu: true },
    "Neşe": { kelimeler: ["Palyaço", "Çocuk parkı", "Sabun köpüğü", "Köpük burnuma kondu", "Hapşu sesi"], not: "Kahkaha atmak bedene de iyi gelir. Gül, güldür!", zorluk: 1, cocukModu: true },
    "Umut": { kelimeler: ["Bahçıvan kız", "Pencere önü", "Minik tohum", "Hâlâ filiz yok", "Sabahın ilk ışığı"], not: "Zor olsa da güzel günler geleceğine inanmak çok güçlü bir his.", zorluk: 2, cocukModu: true },
    "Gurur": { kelimeler: ["Öğretmenim", "Okul sahnesi", "Resim panosu", "Adımı söylediler", "Alkış sesi"], not: "Emeğini görmek güzeldir. Kendinle gurur duymayı hak ediyorsun!", zorluk: 1, cocukModu: true },
    "Özgürlük": { kelimeler: ["Genç bir tay", "Geniş bir çayır", "Uçurtma", "Okul tatile girdi", "Rüzgârın uğultusu"], not: "İstediğin gibi koşup oynayabilmek harika! Kanat açmak gibi.", zorluk: 2, cocukModu: true },
    "Tatmin": { kelimeler: ["Çalışkan bir karınca", "Oturma odası", "Kocaman yapboz", "Son parçayı taktım", "\"Tık\" diye bir ses"], not: "Bir işi sonuna kadar bitirmek içini doyurur. Tadını çıkar!", zorluk: 3, cocukModu: true },
    "Keyif": { kelimeler: ["Tembel bir kedi", "Güneşli balkon", "Sıcak kakao", "Pazar sabahı", "Kuş cıvıltısı"], not: "Küçük güzel anların tadını çıkarmak da bir beceri!", zorluk: 2, cocukModu: true },
    "Rahatlama": { kelimeler: ["Diş hekimi", "Bekleme salonu", "Çıkartma hediyesi", "Muayene bitti", "\"Sıradaki gelsin!\""], not: "Endişe bitince beden gevşer. \"Oh be!\" demek gibi.", zorluk: 2, cocukModu: true },
    "Özgüven": { kelimeler: ["Sınıf başkanı adayı", "Sınıfın önü", "Seçim afişi", "Elimi kaldırdım", "Mikrofon cızırdadı"], not: "Kendine inanmak, yeni şeyleri denemeyi kolaylaştırır. Sen yapabilirsin!", zorluk: 2, cocukModu: true },
    "Zafer": { kelimeler: ["Yavaş kaplumbağa", "Orman yolu", "Bitiş çizgisi", "Tavşan uyuyakaldı", "Ormandan alkış sesi"], not: "Emek verip başarınca kutlamak güzel. Rakibine de nazik ol!", zorluk: 1, cocukModu: true },

    /* 💚 Yeşil — Sevgi Ailesi */
    "Sevgi": { kelimeler: ["Dedem", "Bahçedeki salıncak", "Örgü atkı", "Sıkıca sarıldık", "Tanıdık bir ıslık"], not: "Sevgi, birine \"iyi ki varsın\" demek gibi. Bugün kime sarıldın?", zorluk: 1, cocukModu: true },
    "Şefkat": { kelimeler: ["Bebek kardeş", "Bebek odası", "Müzikli dönence", "Kardeşim ağladı", "Hafif bir ninni"], not: "Küçüklere nazikçe bakmak, kalbinin ne kadar yumuşak olduğunu gösterir.", zorluk: 2, cocukModu: true },
    "Güven": { kelimeler: ["Babam", "Derin deniz", "Can simidi", "\"Bırakmıyorum\" dedi", "Dalga sesleri"], not: "Yanında olan insanlar dünyayı kolaylaştırır. Senin için onlar kim?", zorluk: 2, cocukModu: true },
    "Merhamet": { kelimeler: ["Yağmurda ıslanan köpek", "Otobüs durağı", "Şemsiye", "Kimse durmadı", "Kısık bir havlama"], not: "Başkasının zor anını görüp yardım etmek istemek çok değerli.", zorluk: 2, cocukModu: true },
    "Şükran": { kelimeler: ["Komşu teyze", "Apartman merdiveni", "Sıcak börek", "Anahtarı unuttum", "Bir kapı aralandı"], not: "Sana iyilik yapanı fark edip teşekkür etmek kalbi büyütür.", zorluk: 3, cocukModu: true },
    "Huzur": { kelimeler: ["Anneannem", "Köy evi", "Yün battaniye", "Sobada kestane", "Yağmur cama vuruyor"], not: "Her şeyin yerli yerinde olduğu tatlı bir his. Çok güzel!", zorluk: 2, cocukModu: true },
    "Bağışlama": { kelimeler: ["Sakar bir ayıcık", "Orman evi", "Kırılan bal kavanozu", "\"Özür dilerim\" dedi", "Kapıda tık tık"], not: "Affetmek, içindeki ağır taşı bırakmak gibi. Hafiflersin!", zorluk: 2, cocukModu: true },
    "Aidiyet": { kelimeler: ["İzci takımı", "Kamp ateşi", "Takım tişörtü", "İlk kamp gecesi", "Hep bir ağızdan şarkı"], not: "Bir gruba katılmak, \"ben de buradayım\" demek. Herkesin bir yeri var.", zorluk: 3, cocukModu: true },
    "Empati": { kelimeler: ["Ağlayan bir çocuk", "Alışveriş merkezi", "Oyuncak ayı", "Geçen yıl ben de", "Anons sesi"], not: "Başkasının ne hissettiğini anlamak bir süper güç!", zorluk: 3, cocukModu: true },
    "Sakinlik": { kelimeler: ["Balıkçı dede", "Göl kenarı", "Olta", "Güneş batıyor", "Uzaktan kurbağa sesi"], not: "Yavaş nefes, içindeki dalgaları durultur. Bu bir süper güç!", zorluk: 3, cocukModu: true },

    /* 💙 Mavi — Üzüntü Ailesi */
    "Üzüntü": { kelimeler: ["Oyuncak ayım", "Lunapark", "Kırmızı balon", "Balon uçup gitti", "Atlıkarınca müziği"], not: "Ağlamak ve içinin buruk olması normal. Bir sarılma çok iyi gelir.", zorluk: 1, cocukModu: true },
    "Özlem": { kelimeler: ["Kuzenim", "Tren garı", "Eski fotoğraf", "Yaz tatili bitti", "Tren düdüğü"], not: "Birini ne kadar sevdiğini gösterir. Ona bir resim çizebilirsin!", zorluk: 1, cocukModu: true },
    "Yalnızlık": { kelimeler: ["Uzaydaki astronot", "Boş oyun parkı", "Sessiz telefon", "Herkes eve gitti", "Sesim yankılandı"], not: "Herkes bazen böyle hisseder. \"Gel oynayalım\" demek işe yarar.", zorluk: 1, cocukModu: true },
    "Pişmanlık": { kelimeler: ["Ağustos böceği", "Kış ormanı", "Boş kiler", "Kar yağmaya başladı", "Soğuk rüzgâr sesi"], not: "\"Keşke\" demek, bir dahakine farklı yapmayı öğretir. Hata yapmak normal.", zorluk: 1, cocukModu: true },
    "Hayal Kırıklığı": { kelimeler: ["Bütün sınıf", "Okul otobüsü", "Piknik sepeti", "Gezi iptal oldu", "Yağmur damlaları"], not: "Beklediğin olmayınca için söner, normal. Yeni bir plan yapabilirsin!", zorluk: 1, cocukModu: true },
    "Dışlanmışlık": { kelimeler: ["Sınıfın yeni öğrencisi", "Teneffüs bahçesi", "İp atlama ipi", "\"Takım tamam\" dediler", "Teneffüs zili"], not: "Oyuna alınmamak çok acıtır. Bu senin suçun değil; bir büyüğe anlat.", zorluk: 2, cocukModu: true },
    "Boşluk": { kelimeler: ["Pilini unutan robot", "Sessiz oda", "Kapalı televizyon", "Gün hiç geçmedi", "Duvar saatinin sesi"], not: "Bazen hiçbir şey hissetmeyiz. Bir büyüğe anlatmak iyi gelir.", zorluk: 3, cocukModu: false },
    "Tükenmişlik": { kelimeler: ["Çalışkan arı", "Kalabalık kovan", "Ağır bal kovası", "İş hiç bitmedi", "Vızıltılar hiç susmadı"], not: "Çok yorulunca dinlenmek tembellik değil, ihtiyaç.", zorluk: 3, cocukModu: false },
    "Çaresizlik": { kelimeler: ["Küçük fare", "Mutfak dolabı", "Peynir kavanozu", "Kapak hiç dönmedi", "Herkes uyuyor"], not: "Hiçbir şey işe yaramıyor gibiyse yardım istemek en akıllıca adım.", zorluk: 2, cocukModu: true },
    "Melankoli": { kelimeler: ["Fener bekçisi", "Sonbahar sahili", "Eski müzik kutusu", "Yapraklar dökülüyor", "Martı sesleri"], not: "Hafif kederli günler de geçer; sevdiğin bir şarkı iyi gelir.", zorluk: 3, cocukModu: false },

    /* 🔹 Lacivert — Kararlılık Ailesi */
    "Kararlılık": { kelimeler: ["Bisiklet öğrenen kız", "Mahalle sokağı", "Dizdeki yara bandı", "Yine düştüm", "\"Yemeğe gel!\" sesi"], not: "Düşüp yeniden kalkmak seni güçlü yapar. Vazgeçmediğin için tebrikler!", zorluk: 2, cocukModu: true },
    "Hayranlık": { kelimeler: ["İtfaiyeci abla", "İtfaiye istasyonu", "Kırmızı kask", "Merdivene tırmandı", "Siren sesi"], not: "Birini örnek almak, senin de neler yapabileceğini gösterir.", zorluk: 2, cocukModu: true },
    "Sadakat": { kelimeler: ["En yakın arkadaşım", "Okul koridoru", "İkimizin bilekliği", "Biri onunla alay etti", "Teneffüs zili"], not: "Zor anda arkadaşının yanında durmak, gerçek dostluğun işaretidir.", zorluk: 3, cocukModu: true },
    "Sorumluluk": { kelimeler: ["Akvaryum balığı", "Oturma odası", "Yem kutusu", "Komşular tatile gitti", "Fokur fokur su"], not: "Bir işi üstlenip yapmak büyüdüğünü gösterir. Aferin sana!", zorluk: 2, cocukModu: true },
    "Kıskançlık": { kelimeler: ["Yeni doğan kardeş", "Bizim ev", "Benim eski beşiğim", "Herkes ona bakıyor", "Misafir zili"], not: "Bunu hissetmek normal; sevgi azalmaz, kalpte herkese yer var.", zorluk: 1, cocukModu: true },
    "Adalet": { kelimeler: ["Üç sincap", "Ağaç kovuğu", "Bir torba fındık", "Biri fazla aldı", "Çıt çıt sesler"], not: "Herkese eşit davranılmasını istemek çok değerli bir his.", zorluk: 3, cocukModu: true },
    "Suçluluk": { kelimeler: ["Top oynayan çocuk", "Salon", "Annemin vazosu", "Vazo kırıldı", "Kapıda anahtar sesi"], not: "Hata herkesin başına gelir. Söylemek içini hafifletir.", zorluk: 1, cocukModu: true },
    "Kibir": { kelimeler: ["Tavus kuşu", "Orman meydanı", "Altın ayna", "Kimseyi dinlemedi", "Kimse alkışlamadı"], not: "Herkes bazen hava atar. Başkalarını dinlemek seni daha sevilen yapar.", zorluk: 3, cocukModu: true },
    "Onur": { kelimeler: ["Dürüst bir şövalye", "Taş kale", "Kalkan", "Sözünü tuttu", "Boru sesi"], not: "Doğru olanı yapınca kendine saygın artar.", zorluk: 3, cocukModu: false },
    "Rekabet": { kelimeler: ["İki hızlı çita", "Koşu pisti", "Kronometre", "Yan yana koştuk", "Düdük sesi"], not: "Yarışmak eğlenceli ve seni geliştirir. Sonunda el sıkışmayı unutma!", zorluk: 1, cocukModu: true },

    /* 💜 Mor — Korku Ailesi */
    "Korku": { kelimeler: ["Küçük tavşan", "Yatak odası", "Gece lambası", "Elektrikler gitti", "Gök gürültüsü"], not: "Korkmak seni korumak için var. Bir büyüğün elini tutmak iyi gelir.", zorluk: 1, cocukModu: true },
    "Kaygı": { kelimeler: ["Minik kirpi", "Yatağın içi", "Hazırlanmış çanta", "Yarın büyük gün", "Saatin tik takı"], not: "\"Ya olursa?\" düşünceleri normal. Konuşmak ve nefes almak iyi gelir.", zorluk: 2, cocukModu: true },
    "Utanç": { kelimeler: ["Sahnedeki küçük ayı", "Okul tiyatrosu", "Ayı kostümü", "Sözlerimi unuttum", "Salonda çıt yok"], not: "Herkes bazen saklanmak ister. Hata seni değersiz yapmaz, sen kıymetlisin.", zorluk: 2, cocukModu: true },
    "Kafa Karışıklığı": { kelimeler: ["Kayıp bir turist", "Mısır labirenti", "Eski bir harita", "Aynı yere geri geldim", "\"Sağa!\" \"Sola!\" sesleri"], not: "Anlamadığında soru sormak çok akıllıca. Kimse her şeyi bilmez!", zorluk: 2, cocukModu: true },
    "Güvensizlik": { kelimeler: ["Ormanın yeni zürafası", "Orman okulu", "Kocaman gözlük", "Herkes bana döndü", "Fısır fısır sesler"], not: "Kendinden emin olmamak herkesin başına gelir. Sen olduğun gibi değerlisin.", zorluk: 3, cocukModu: true },
    "Gözü Kalmak": { kelimeler: ["Mahalledeki çocuk", "Oyuncakçı vitrini", "Uzaktan kumandalı araba", "Annem \"sonra\" dedi", "Dükkân zili"], not: "Bir şeyi çok istemek normal. Doğum günü listene yazabilirsin!", zorluk: 2, cocukModu: true },
    "Yetersizlik": { kelimeler: ["Uçamayan penguen", "Kuş okulu", "Kâğıt kanatlar", "Herkes uçtu", "Kanat sesleri uzaklaştı"], not: "Herkesin ayrı bir yeteneği var. Bir şeyi yapamamak seni küçültmez.", zorluk: 2, cocukModu: true },
    "Mahcubiyet": { kelimeler: ["Sınıf öğretmeni", "Sessiz sınıf", "Kalem kutusu", "Öğretmene \"anne\" dedim", "Sınıfta kıkırtılar"], not: "Yanakların kızarırsa dert etme; herkesin başına gelir, sonra güleriz!", zorluk: 1, cocukModu: true },
    "Tedirginlik": { kelimeler: ["Bekçi köpek", "Kamp çadırı", "El feneri", "Kuşlar birden sustu", "Dışarıda çıtırtı"], not: "Bir şey tuhaf gelince dikkat kesilmek normal. Bir büyüğe sorabilirsin.", zorluk: 2, cocukModu: true },
    "Panik": { kelimeler: ["Beyaz tavşan", "Evin koridoru", "Tek ayakkabı", "Servis kapıda", "Korna sesi"], not: "Her şey birden olunca dur, nefes al, sonra tek tek yap.", zorluk: 2, cocukModu: true },
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
