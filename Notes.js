=> Expo sektorde cok kullanilmiyor. 
=> Expo'da her sey hazir paket olarak gelir. Ancak icerisinde cok fazla paket yuklu oldugu icin cikti alindiginda proje boyutu cok fazla cikar. 
=> Expo, bazi paketleri de desteklememektedir. 
=> Hybrid cozumler olarak Cordova, Iconic, Visual Studio birer cozumdur. 
=> Native cozumler olarak Java ve Kotlin android tarafinda, Obj-C ve Swift ise iOS tarafi cozumlerdir.
=> Cross-platform cozumler icin ise react-native, fultter ve xamarin cozumleri vardir.
=> Proje olusturmak icin projeyi nerede olusturmak istiyorsaniz orada terminali acip "npx react-native init proje_adi" demeniz yeterlidir. 
=> Kendi telefonumuzu kullanmak icin ayarlar kisminda yazilim surmunu 4-5 defa basmak gerekir. 
=> Proje calistirildiginda node terminali acilir. Bu terminal kapatilmamalidir. 
=> Node terminalinde r harfine basildiginda projeyi yeniler. d harfine basildiginda ise developer modu acar. 
=> console.log ciktilari node terminali uzerinden takip edilir.

=> React-native'de her sey component'tir. Iki tur component vardir. Function component ve class component.
=> App.js dosyasi default olarak gelir. Biz best practice olarak dizinde src klasoru olusturur ve App.js dosyasini bu klasor icerisine tasiriz. Ayni zamanda bundan sonra olusturulacak olan tum componentlar da bu klasor icerisinde olusturulacak. Bunu yaptiktan sonra da index.js icerisinde App component'inin import edildigi adresi guncellemek gerekir.
=> index.js icerisinde bulunan AppRegistry.registerComponent() metodu belirlenen component'i baslangic component'i olarak belirler.
=> Her component'in kendine ozel property'leri vardir. 
=> Component'lara stil vermek icin style attribute'i kullanilir. Deger verirken {} icerisine object tipinde veri alir. Dolayisyla iki parantez olmus olur. Stil ozellikleri object formatta key-value olarak verilir. 
=> Stil ozelliklerine verilen degerler bir object property'si olacagi icin string formatta verilir. Her ne kadar yazilan ozellikler css ozellikleri olsa da aslinda yazilan kod js kodudur. Css ozellikleri bir js object verisi ile gonderilir. 
=> SafeAreaView component'i iPhone cihazlarda yukaridaki centiklerden kurtulmak icin kullanilir. Andorid gelistirirken kullanilmasina gerek yoktur. 
=> Genymotion ya da gercek cihazi calistirdiktan sonra console'da adb devices komutunu calistirip cihazin bagli olmadigi kotrol edilmelidir. 
=> Index.js dosyasinda default olarak calistirilacak olan component'in adresi dogru degilse "undefined Unable to resolve module `./App` from `index.js` hatasi verir. 
=> Mobil uygulama gelistirirken arayuz islemleri icin react-native kullanilir, react'in kendi ic yapilari icin -state tanimlama, degisken guncelleme, ekrana bir sey gonderme- react modulu kullanilir.
=> React-native'de her component'in attribute'lari vardir. react-native'de herhangi bir attribute'a deger vermek icin {} parantezler kullanilir.
=> css'tec lower kebab case kullanilirken react-native'de css stil verirken camel case kullanilir.
=> react-native'de stil verirken enum degerler string olarak verilir. 
=> react-native'de px yapisi yoktur. Sadece sayisal olarak deger verilir. 
=> Inline style tercih edilen bir durum degildir. Kod okunabilirligini azaltir.   
=> Component ve API basligi altindaki hersey react-native kutuphanesinden cagrilir. 
=> react-native'de stil vermek icin StyleSheet API'si kullanilir. 
=> Kullanici arayuz islemleri icin component'lar kullanilirken native thread islemlerini ise API'ler ile yapilir. 
=> Stillendime yapilirken en distaki component genel olarak container olarak isimlendirilir.
=> StyleSheet API ile style nesnesi olusturulduktan sonra style attribute'una bu object verilirken artik tek {} icerisinde verilir. 
=> developer menude Disable Fast Refresh ozelligi sayesinde yapilan degisiklikler belge kaydedildigi anda otomatik olarak yansir. Bu ozelliler kapatilirsa yani Disable yapilirsa artik degisiklikler anlik yansimaz. 
=> AccessibilityInfo API'si kullanici durumlarina gore tasarim yapilmasini saglar. Ornegin renk koru olan biri icin nasil bir durumun olacagi bu API sayesinde belirlenir. Bu nedenle oldukca onemlidir. 
=> Her component fonksiyonu sadece bir tane component doner. Dolayisiyla en dista sadece bir tane component olmasi gerekir. Aksi takdirde "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? hatasi verir." 
=> StyleSheet kullanilmadan da style verilebilir. Ancak StyleSheet kullanilmasi durumunda native taraf ile iletisim kurar ve daha saglikli bir yapi ortaya konur. Ayrica inttelisense destegi de verir. 
=> Thread'lar arasinda denge olmalidir. Birbirlerini ignore etmemelidirler.
=> Custom olarak olusturulan Component export edilmez ise "Component Exception" hatasi verir. 
=> "Can't find variable" hatalari genelde import hatalaridir. Import'larin kontrol edilmesi cozumu getirecektir.
=> Hatalar uygulamanin gelistirici ile konusmasi demektir. 
=> JSX, js ile xml karisimi bir yapidir.   
=> Herhangi bir js kodunu JSX icerisinde kullanmak icin {} parantezler kullanilir.  
=> Ekranda yazdirilmak istenen text'ler mutlaka bir Text component'i icerisinde olmalidir. Aksi taktirde "Component Exception Text strings must be rendered within a<Text> component" hatasi verir. 
=> Component'larda return ifadesi jsx yapisi dondurur. Bu jsx yapisi icerisinde JS yazmak icin {} parantezler kullanilir. return() parantezleri disinda istenilen sekilde js kodu yazilabilir. 
=> return() metodu disinda olusturulan herhangi bir fonksiyon icerisinde de <Text>Merhaba Clarusway</Text> seklinde bir ifade return edilebilir. 
=> Bir fonksiyondan component return edilecek ise bu tek bir component olmak zorundadir. Cunku sadece tek bir component yapisi return edilebilir. Bir js dosyasi icerisinde istedigimiz kadar component return eden fonksiyon olusturup kullanabiliriz.
=> Component donduren bir fonskiyonda return ifadesi ile birlikte okunabilirligi saglamak icin jsx kodlari () icerisinde yazilabilir. Yazmak sart degildir. Tek bir component dondurmesine dikkat edilmelidir. 
=> Fonksiyonlari component donduren fonksiyon icerisinde yazmak daha saglikli olur. 
=> {isAdmin ? <Text>Admin Kullanicisi</Text> : null} veya {isAdmin && <Text>Admin Kullanicisi</Text>} seklinde bir kullanim da mevcuttur. Dogrudan JSX icerisinde bu sekilde kullanilabilir.
=> Ne olursa olsun component'lar arasinda js kodlari {} parantezler arasinda yazilir. 
=> If-else bloklari icerisinde her iki durumda da return yapilacak ise else blogunun yazilmasina gerek yoktur. Sadece if blogu yazildiktan sonra else blogundan return edilecek cikti if ile ayni hizada yazilir. =>
function MyFunction2() {
  const isAdmin = true;
  if (isAdmin) return <Text>Admin Kullanicisi</Text>
  return <Text>Uye Kullanicisi</Text>
}
=> Array seklindeki bir listeyi ekrana basmak icin react-native'de kullanisli olan yapi map() fonksiyonudur. JS'de foreach kullanilirken burada map daha kullanislidir. 
=> map() fonksiyonundan geriye donen component dizisi dogrudan jsx iceirisinde render edilebilir. Yani tekrardan array elemanlarinin teker teker js'de oldugu gibi conponent icerisine aktarilmasina gerek yoktur. {} icerisinde belirtilmesi yeterli olacaktir.
=> map() fonksiyonu kullanirken arguman olarak verilen callback fonksiyonun geriye deger dordurmesi unutulmamalidir. genelde arrow function kullanildigi ve tek satirlik ifadelerde return kullanilmadigi icin birden fazla {} parantez kullanildigi durumlarda unutulabiliyor. Bu nedenle dikkat edilmelidir. 
=> JSX yapisi array tipindeki degiskenleri kendisi parcalar ve ekrana basar.
=> Debug mode'da Debug sekmesine basildiginda google chrome acilacaktir. Bu sayfanin debug console'u mobil gelistirme sirasinda kullanilabilir.

////////////////////////////////////////
=> Baslangic sayfasini degistirmek icin index.js dosyasinda oncelikle baslangic component'inin import edilmesi gerekir. import Login from './src2/Login'; seklinde import edilmedilir. Ikinci olarak baslangic component'inin AppRegistry.registerComponent(appName, () => Login); metodu ile ayarlanmasi gerekir. Aksi halde "Can't find variabl:App" hatasi  vercektir. 
=> React-native'de resimleri sergilemek icin image component'i kullanilir. image component'inin resimleri duzenlemek icin resizeMode isimleri bir property'si vardir. Bunun uzerinden resmin nasil goruntulenecegi ayarlanabilir. En ideal deger olarak ise contain kullanilir.
 => stackoverflow'da yesil tick dogru cevap anlamindadir. 
 => Dimensions API'si cihazin olculerini almak icin kullanilan API'dir. Dimensions.get('window') metodu cihazin olculerini getirir. Bunun uzerinden height ve width degelerine de ulasilabilir.
 => Image component'inin tintColor property'si ile png resimlerin rengi degistirilebilir.
 => Eger fazla sayida fazla component'i ana js dosyamiz icerisinde import edeceksek  bu durumda ana js dosyamiz import'larla sisecektir. Bu nedenle daha kullanilabilir olmasi icin componentlerin import edildigi ayri bir js dosyasi olusturup bu dosyayi ana js dosyamiz icerisinde import etmek gerekir. Boylece import edilen dosyalarin kontrolu kolaylasir hem de ana dosyamis sismemis olur. 
 => React'in kendisi de bir node.js projesidir..
 => react-native'de butona genislik verdiginde yuksekligi otomatik kendisi verir.
 =>  Ekranda buton ve textbox'lari olusturduktan sonra kullanici girmesi gerekenleri girdikten sonra butona basabilmesi icin ekranin kaymasi gerekir cunku klasyve acildiginda buton asagida kaldi. Bu nedenle bu durumun da duzeltilmesi gerekir. Scroll bu cozumlerden bir tanesidir. 
 =>  

//////////////////////////////////////
=> Elimizdeki liste halindeki bir veriyi ekrana yazdirmak istedigimizde map() fonksiyonunu kullanabiliriz. Ancak verinin fazla olmasi durumunda map() fonksiyonu kullanisli olmayacaktir. Cunku map() fonksiyonu kullanildiginda elindeki veri ile geriye yine bir liste donrdurmeye caliscak ve bu da zaman alacaktir. Dolayisiyla veri ekrana gec yansiyazaktir. Bu sorunu cozmek icin kullanilan yapi ise FlatList component'idir.
=> FlatList yapisi veriyi once alir ve cache' atar. Daha sonra ekranda sirasi gelen veriyi ekrana gonderir. Boylece daha hizli bir sekilde ekrana yansimis olur. 
=> Map(), kendisine gelen verinin tamamini ekrana basarken FlatList component'i ise gerektigi kadarini basar. 
=> Veri dinamik olarak geliyor ise FlatList compoent'i kullanmak daha mantiklidir.
=> FlatList, data attribute'u icin ekrana basilacak array'i ister. renderItem attribute'u ise verinin ekrana nasil basilacagini belirler ve bir callback fonksiyon alir. Bu callback fonksiyona ilk arguman olarak datayi gonderir. Gelen her bir veriyi ekrana yazdirmak icin ise data.item property'si kullanilir. 
=> FlatList, ScrollView'dan kalitilmis bir component'tir. Ekranin scroll olmasini ve veri basma islemini kendisi arka planda yapmaktadir. 
=> renderItem attribute'u aldigi callback fonksiyonu ekrana bastigi her nesne icin tekrar tekrar olusturur. Dolayisiyla bu da veri cogaldiginda performansin dusmesi demektir. Bunu asmak icin de bu callback fonksiyonu bir degiskene atayip bu degiskeni renderItem'a vermek gerekir. 
=> Ekrana tablo veya liste yazdirildiginda react her bir eleman icin unique bir id ister. FlatList yapisi renderitem attribute'una gonderdigi data'da bu id'yi index property'si olarak kendisi olsuturur. Bizim kendi verimiz ise item property'si icerisinde tutulur. 
=> prop uzerinden veri alirken component tarafinda parametre olarak props vermek zorunda degiliz. ES6 ile gelen Destructuring yapisi ile sadece almak istedigimiz property isimlerinin {} parantezleri icerisinde yazip bunlari kullanabiliriz. 
=> react-native'de text indent property'si yoktur. Bunun yerine '\t' kacis karakteri kullanilir. 
=> Cihaz olculerini almak icin Dimensions API'si kullanilir. Dimensions.get() metodu iki arguman alir. screen ve window olmak uzere. Saglikli olan window'un arguman olarak verilmedisidir.Buradana donen sonuc ile de height veya width degeri yakalanabilir. 
=> react'te liste halinde gosterilen verilerde bu verileri gosteren yapilarin her birinin unique bir id'ye sahip olmasi gerekir. Bu id verilmezse de calisir ancak verilmesi halinde daha duzgun calisacaktir. Flatlist icerisinde bu unique veriyi tutacak olan yapi ise keyExtractor attribute'udur. 
=> keyExtractor bir fonksiyon alir ve bu fonksiyona iki FlatList'e verilen array'in her bir elemani ve FlatList'in array'in her bir elemani icin kensi icinde olusturdugu index'i gonderir. Bu fonksiyon iceririnden geriye return edilen deger her bir FlatList elemanina id olarak yapisir. Biz kendi item iceirisinde unique olan bir veriyi ki bu da id olacaktir- burdan return ederiz. Ancak item ile gelen unique bir deger yoksa index de burada return edilebilir. 
=> FlatList'in  ListHeaderComponent attribute'u FlatList oncesinde olacak olan component'i belirler. Banner component'i bir degiskene atanip bu attribute'a verildiginde banner sayfa ile birlikte kayacaktir. Verilmediginde taktide banner yukarida sabit sekilde kalacaktir. 
=> ScrollView component'inin horizontal attribute'u icindeki yapilarin yatay eksende olmasini saglar.
=> ScrollView component'inin showsHorizontalScrollIndicator attribute'u bool bir deger alir ve scroll cizgisinin gosterilip gosterilmeycegini belirler. false ise scroll cizgisi gosterilmez.

/////////////////Mosh Lesson
=> props, properties kelimesinin kisaltilmis halidir. 
=> Text component'i numberOfLines ozelligine sahiptir. Bunun sayesinde satir sayisi kisitlanabilir.
=> Image component'inin blurRadius attribute'u resmin blurlasmasini saglar. Sayisal bir deger alir. 
=> Image component'ine path verirken lokal kaynak icin require() metodu kullanilirken external bir kaynak icin uri: property'si kullanilir. uri {{}} icerisinde yazilirken require() metodu {} icerisinde yazilir. 
=> image component'in fadeDuration ozelligi resmin milisaniye cinsinden belli bir zaman sonra gelmesini saglar. Ancak bu sadece Android'te calisir. 
=> width ve height olculerine % olarak da deger verilebilir. 
=> Arkaplan eklemek icin BackgroundImage component'i kullanilir. 

///////////////// State kullanimi;
=> node.js projelerinde ilk bakilan dosya index.js dosyasidir.
=> class component olustururken Component yapisi yukarida import da edilebilir ya da class App extends React.Component seklinde de kullanilabilir.
=> class component'larda render() metodu component sinifindan miras yoluyla gelir.
=> render() metodu ozel bir metottur. 
=> index.js dosyasinda import edilecek dosya yolunun dogru olmasi yeterlidir. Import edilen register edilen isimlerin ikisi ayni olmak kosuluyla dosya adi ile ayni olmak zorunda degildir. 
=> class component icerisinde props kullanmak icin contructor ve super metotlarina props arguman olarak verilir. 
=> Function compoent'lar bilgisayarlar tarafindan daha rahat derlenebilir olduklari icin daha cok function component yapisi tercih edilir. 
=> Function component'larda state tanimlamak icin once react kutuphanesinden useState yapisi import edilir.
=> useState metodu kendisine verilen argumani arka planda bir degiskene atar ve bu degiskenin degerini degistirebilcek bir setter fonksiyon olusturur. useState fonsiyonu geriye olsuturdugu degisken ve setter fonksiyonunu liste icerisinde dondurur. Biz bu degisken ve fonksiyonu bir degiskene atayabiliriz. Bunun icin de genel olarak destructuring yontemi kullanilir. degisken ve fonksiyonu istenilen isim verilebilir. Ancak genel bir uygulama olarak degisken adi ne ise fonksiyona da basina set ifadesi eklenerek isimlendirme yapilir. 
=> state yapisi global bir degisken degildir. state yapisi yeni bir yapidir. Yani state yapisi yerine global bir degisken tanimlayarak ayni seyi yapmak istediginizde farkli hatalara yol acacaktir.
=> Component icerisinde kullanilan fonksiyonlar yapi her render edildiginde tekrar tekrar olsuturulur. Bu da performans kaybi demektir. Bunun onune gecmek icin ise fonksiyon return() metodu disinda bir degiskene atanir ve kullanilacak yerde bu degisken adi yazilir.
=> Class component yapilarinda contructor iceirisinde this.state seklinde state yapisi tanimlanir ve istenilern degiskenler bunun icerisinde key-value olarak belirtilir. State yapisi aslinda bir object'tir. Biz kullanmak istedigimiz degiskenleri bu object icerisinde oject'in bir property'si olarak tutariz. Olusturdugumuz degiskeni yani state'in propert'sini guncellemek icin de setState() this.setState() fonksiyonunu kullaniriz. setState fonksiyonu arguman olarak object yapida degistirilmek istenen degisken ve yeni degerini alir.  
=> this.setState yapisi function component'larda kullanilmaz. Function component'lardaki hooks yapisi da class component'larda kullanilmaz. 
=> Bir component ya function ya da class yapidadir. 
=> React'te hangi yapi guncellenecek ise sadece o yapi render edilir. 
=> **** state yapisi her guncellediginde o component da tekrar render edilir. Dolayisiyla Renderlama islemi state guncellemelerinde gerceklesir. Component iceirisinde tanimlanan state sadece o component'i baglar. Diger component'lari etkilemez.  
=> Bir component'in her render edildiginde gectigi asamalara life cycle denir. Componentin olusturuldugu an, component olusturulurken ve component olusturulduktan sonra olmak uzere temelde uc asama vardir.Bu asamlarin yaninda bu asamalari izlemeyi ve bazi islemler yapabilmeyi saglayan yapilar vardir. Bunlara life cycle metotlari denir. Bunlar function component'larda ayri class component'larda ayri isler.
=> Function component yapisinda ayni silemi tekrar tekrar yaptiginizda bir zaman sonra bunu render etmeyecektir. Hafizaya atacaktir. Bu da performans olarak yansiyacaktir. Ancak class component yapisinda bu durum olmadigi icin function component kullanmak performans acisindan daha avantajlidir.
=> Class component'larda render() metodu icerisinde olabildiginde az kod yazmak gerekir. Cunku state her yenilendiginde render() metodu calisir. Munkunse render() metodu disinda yazmak gerekir.
=> class component'larda sayfa render edildikten sonra calisacak olan yapi componentDidMount(){} yapisidir. Sayfa yuklendiginde bir API'ye istek atilacak ise bu componentDidMount icerisinde gerceklestirilir. Veri cagirma islemi contructor icerisinde olsa idi sayfanin yuklenmesi uzun zaman alacakti. Render icerisinde olsa idi bu sefer de her render edildiginde API tetiklenecekti. Bu nedenle API istekleri componentDidMount icerisinde yapilir.
=> Goruntuleme disindaki JS islemlerini return function component'larda return disinda, class component'larda ise render disinda yapabilirim. 
=> State'ler component'larin kendi hafizalaridir. 
=> useState() metodundan aldigimiz degerleri const bir degiskene atamak sorun olusturmaz. Cunku setter fonksiyonu calistiginda component tekrar render edilecegi icin degisken yeniden olusur. 
=> View component'indan Text component'ina miras yoluyla css gecmez. Ancak Text icerisinde Text olursa bu durumda css ozellikleri inherit eder. 
=> React-native'de Button component'i cok fazla ozellestirilebilecek ozellige sahip degildir. Bunu asmak icin kendi ozel buton componentlarinizi olusturmaniz gerekir. Bunun icin kullanilcak yapilar ise TouchableOpacity ya da TouchableWithoutFeedback component'laridir. Bir bask yontem ise Button component'ini View icerisinde kullanip View'i  stillendirmektir. Bir baska alternatif ise kominitinin gelistirdigi buton component'lari kullanmmaktir. 
=> Core Button component'i color, title, accessibilityLabel, onPress, disabled ozelliklerine sahiptir. 
=> TextInput component'inin onChangeTetx eventi bir callback function alir ve buna TextInput icerisindeki degeri deger her degistiginde gonderir.
=> Ekrana basilacak veri icerisinde key property'si varsa Flatlist key propertysini her bir elemanin key'i olarak otomatik olarak cekecektir. key yerine id property'si varsa keyExtractor property'si kullanilir. 

///////////// 15.10.2020
=> Hooks yapisi gelene kadar component'i sadece gorsel amacli kullancak isek functional component kullanirken eger icerisinde degiken tutacak isek de class component kullaniyorduk.
=> Functional component'lar geriye deger donduren birer fonksiyondur.
Class component'larda ES6 ile gelen class yapisindadirlar. Functional component'lardan farkli olarak iclerinde render() metodu bulunur ve bu render() metodu geriye component yapisi dondurur.
=> Functional component'larda state kullanmak icin useState yapisi kullanilir. useState yapisi geriye bir array dondurur. Bu array'in ilk elemani bir degisken ikinci elemani ise bu degiskeni set etmek yani degerini degistirmek icin kullanilan fonksiyodur. useState yapisi bu degisken ve fonksiyonu arka planda kendisi olusturur. Kendisine verilen argumani ise olsuturdugu degiskene atar. Siz bu geriye donen bu array'dan degisken ve degisken degerini degistirecek olan fonksiyonu birer degiskene atauarak kullanabilirsiniz. Bunun icin de genel olarak destructing yontemi kullanilir. Kesin bir kural olmamakla birlikte genel olarak degisken ismi ne ise fonksiyona da degisken isminin basina set ifadesi getirilerek isim verilir. Degiskeni counter variable isimli bir degiskene atadi iseniz fonksiyon ise setVariable seklinde isimlendirilir.
=> React Hooks, functional component'lara state ozelligi kazandirabildigimiz yapidir. useState yapisi da Hooks yapilarindan biridir. 
=> Class component'larda ise useState yapisina karsilik olarak setState yapisi kullanilir. 
=> React dokumanlari class component yerine functional compoent kullanilmasinin daha asglikli oldugunu soylemektedir. 
=> Class component yapisinda state kullanabilmek icin oncelikle constructor icerisinde this.state seklinde bir yapi olusturulur. this.state yapisi deger olarak object tipinde veri alir. Class compoent icerisinde kullanilacak degiskenlerimiz bu object icerisinde key-value seklinde saklanir. Daha sonra degiskenimizi degistirmek istedigimizde setState() fonksiyonuna degistirmek istedigimiz degisken ve yeni degeri yine bir object veri formatinda arguman olarak verilir.
=> Functional component'larda useState kullanabilmek icin react kutuphanesinden import edilmesi gerekir. 
=> React-native'de kullanmis oldugumuz View, Text, Button gibi component'lar aslinda JSX yapisidir. Bunlar arka planda react elementlerine cevrilir. JSX aslinda bizim karmasik react kodlari yazmamizin onune gecmek icin olusturulmus syntactic sugar bir yapidir. JSX olmasi idi uzun uzun ve bir o kadar da karmasik react kodlari yazmamiz gerekecektir. JSX bizi bu yukten kurtamis oldu. Arka tarafta JSX yapilarini react elementlerine donusturen yapi ise babel yapisidir. Functional component yapisinin tercih edilmesinin nedeni ise babel yapisinin donusturme islemini  functional component'larda class compoent'lara nazaran daha kolay yapabiliyor olmasidir. Bu nedenle de hooks yapilarini kullanmak daha sagliklidir. 
=> Class component yapisinda ilk once constructor calisir. Daha sonra ise render() fonksiyonu tetiklenir. render() fonksiyonu calistiktan sonra da componentDidMount() fonksiyonu calisir. Bundan sonra ise constructor ve componentDidMount bir daha tetiklenmez iken render() fonksiyonu state her degistiginde tetiklenir. 
=> render() ve componentDidMount fonksiyonlari react'in kendi ic yapisinda bulunan fonksiyonlardir. Bunlarin herhangi bir sekilde tanimi olmaz. Bunlar built-in fonksiyonlardir. 
=> External bir kaynaktan veri alinacak olmasi durumunda componentDidMount fonksiyonu kullanilir. constructor kullanilmamasinin nedeni verinin gec gelmesi durumunda kullanicinin bos bir sayfa gorecek olmasidir. 
=> Functional component icerisinde yazilan birden cok fonksiyon veya degisken component her render edildginde tekrar tekrar render edilmez. Hooks yapisi kendi icerisinde bu durumu analiz eder ve gerekli olan yapi render edilir.
=> Class component yapisinda state degistiginde sadece render fonksiyonu tekrar render edilir, ancak functional compoent'larda zaten yapinin kendisi bir fonksiyondur ve fonksiyon render edilir. Burada fonskiyonun render edilmesi iersindeki her seyin render edilmesi anlamina gelir. Ancak yukarida da belirtildigi uzere Hooks sayesinde fonksiyon icindeki her sey render edilmez. Boylece performansta herhangi bir sorun olmaz.
=> Functional component'larda herhangi bir state'in degisikligini takip etmek icin useEffect fonksiyonu kullanilir. useEffect fonksiyonu iki arguman alir ve  ilk arguman olarak callback bir fonksiyon alir. Ikinci arguman olarak ise degisikligi takip edilecek olan state'i alir. State arguman olarak verilirken array icerisinde verilir. Arguman olarak verilen state her degistiginde useEffect fonksiyonu tetiklenir ve callback fonksiyon calisir. Dolayisyla bir state degistiginde belli islemler yapilmasini istiyorsak useEffect fonksiyonu kullanmaliyiz.
=> useEffect(() => {}, [stateName]) seklinde kullanilir. 
=> Ozel bir durum olarak componentDidMount fonksiyonunun functional component'larda karsiligi ise useEffect fonksiyonunun bos bir array icin calistirilmasidir. 
=> Bir component icerisinde birden fazla state tanimlanabilir.    
=> Functional component'larda yasam alani icerisinde olabildigince az fonksiyon disi kod yazmak gerekir. Cunku fonksiyon her render edildiginde bu kodlarin gereksiz yere calimamasi gerekir.
=> Component yuklenirken tum useEffect() fonskiyonlari tetiklenir. Cunku takip ettikleri state'ler ilk degerlerini almak icin tetiklenmis olur. 
=> Container view component'i icerisindeki inputlara boyut verilmeyip perfect centering yapilip flex 1 yapildiginda inputlari merkeze alir ve icerisindeki text ile boyutlandirir.
=> useEffect fonksiyonu takip ettigi state yeni degerini aldiginda tetiklenir. Bu nedenle algoritma kurarken buna dikkat etmek gerekir. 
=> React native kutuphanesi icerisinde bulunan Alert component'i icerisinde bulunan alert fonksiyonu kullanilarak kullaniciya mesaj verilebilir, prompt ile de girdi alinabilir.
=> TextInput component'i sifre almak icin kullanildiginda sifrenin gorunmemesi icin secureTextEntry property'si kullanilir. true ya da false deger alir. 
=> TextInput tipini belirlemek icin kullanilan property keyboardType properti'sidir.