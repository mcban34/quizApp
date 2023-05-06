
let rstGeleCevaplar = []
let oyun = document.querySelector(".oyun")
let oyunBasla = document.querySelector(".oyunBasla")
let cevapAlani = document.querySelector(".cevapAlani")
let timeProgressContent = document.querySelector(".timeProgressContent")


function soruOlustur() {
  let rakam1 = Math.floor(Math.random() * 10)
  let rakam2 = Math.floor(Math.random() * 10)

  while (rakam2 == 0) {
    rakam2 = Math.floor(Math.random() * 10)
  }

  let islemler = ["*", "+", "-", "/"]
  let rstİslem = islemler[Math.floor(Math.random() * islemler.length)]

  let islemText = `${rakam1}${rstİslem}${rakam2}`
  islemSonuc = parseInt(eval(islemText))
  document.querySelector(".soru").innerHTML = `${islemText} = ?`

  let yakinCevaplar = [
    islemSonuc - 2,
    islemSonuc + 3,
    islemSonuc + 2
  ];

  //?Cevap şıklarını oluşturma
  for (let i = 0; i < 3; i++) {
    let rastgeleSayi = Math.floor(Math.random() * yakinCevaplar.length);
    let cevap = yakinCevaplar[rastgeleSayi];
    yakinCevaplar.splice(rastgeleSayi, 1);
    rstGeleCevaplar.push(cevap)
  }
  rstGeleCevaplar.push(islemSonuc)

  //?cevap şıklarını rastgele element haline getirmek
  let cevapVer = document.querySelectorAll(".cevapVer")
  for (let i = 0; i < 4; i++) {
    let rstCevapIndex = Math.floor(Math.random() * rstGeleCevaplar.length)
    let rstCevap = rstGeleCevaplar[rstCevapIndex]
    cevapVer[i].innerHTML = `${rstCevap}` 
    rstGeleCevaplar.splice(rstCevapIndex, 1)
  }
  
}




//!DOM HAZIR

let hak = 3
let cevapVer = document.querySelectorAll(".cevapVer");
let atlamaHakki = 5
let skor = 0

for (const element of cevapVer) {
  element.addEventListener("click", function () {
    if (element.innerHTML == islemSonuc) {
      soruOlustur()
      skor++
    }
    else {
      hak--
      document.querySelector(".mesaj").innerHTML = `Hatalı! ${hak} hakkın kaldı!`
      if (hak == 0) {
        oyun.style.display = "none"
        document.querySelector(".sonuc").innerHTML = `Hakkınız Bitti! Toplam Skorunuz : ${skor}`
      }
    }
  })
}


//!SORU ATLA
document.querySelector(".soruAtla").addEventListener("click", function () {
  rstGeleCevaplar = []
  soruOlustur()
  atlamaHakki--
  document.querySelector(".soruAtla").innerHTML = `Soru Atla! ${atlamaHakki} Hakkınız Kaladı!`
  if (atlamaHakki == 0) {
    document.querySelector(".soruAtla").innerHTML = "Hakkınız Bitti!"
    document.querySelector(".soruAtla").disabled = true
  }
})

//!oyuna başla
document.querySelector(".startGame").addEventListener("click",()=>{
  oyunBasla.style.display="none"
  oyun.style.display="block"


  soruOlustur()
  const progressBar = document.querySelector(".timeProgressContent");
  const totalTime = 60 * 1000; // 60 saniye (1 dakika) toplam süre
  let startTime = Date.now(); // başlangıç zamanı
  let progress;

  function animate() {
    const currentTime = Date.now(); // şu anki zaman
    const elapsedTime = currentTime - startTime; // geçen süre
    progress = (elapsedTime / totalTime) * 100; // ilerleme yüzdesi

    if (progress >= 100) {
      progress = 100; // ilerleme çubuğu tamamen dolu olsun
    } else {
      requestAnimationFrame(animate); // animasyonu devam ettir
    }

    progressBar.style.width = `${progress}%`; // ilerleme çubuğunu güncelle
  }

  animate(); // animasyonu başlat

//?PROGRESS SETINTERVAL
  // let sayac = 60
  // let time = setInterval(() => {
  //   sayac--
  //   document.querySelector(".süre").innerHTML = `Oyun Bitmesine ${sayac} Saniye Kaldı!`
  //   if (sayac == 0) {
  //     clearInterval(time)
  //     oyun.style.display = "none"
  //     document.querySelector(".sonuc").innerHTML = `Süreniz Bitti! Toplam Skorunuz : ${skor}`
  //   }
  // }, 1000);

})