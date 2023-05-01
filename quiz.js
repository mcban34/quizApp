
let rstGeleCevaplar = []

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
    cevapVer[i].innerHTML = rstCevap
    rstGeleCevaplar.splice(rstCevapIndex, 1)
  }

}




//!DOM HAZIR
let aracHareket = 0
let hak = 3
skor = 0

soruOlustur()
let sayac = 60
let time = setInterval(() => {
  sayac--
  document.querySelector(".süre").innerHTML = `Oyun Bitmesine ${sayac} Saniye Kaldı!`
  if (sayac == 0) {
    clearInterval(time)
    document.querySelector(".oyun").style.display = "none"
    document.querySelector(".sonuc").innerHTML = `Süreniz Bitti! Toplam Skorunuz : ${skor}`
  }
}, 1000);


let cevapVer = document.querySelectorAll(".cevapVer");

for (const element of cevapVer) {
  element.addEventListener("click", function () {
    if (element.innerHTML == islemSonuc) {
      soruOlustur()
      skor++
      console.log(skor)
    }
    else {
      hak--
      document.querySelector(".mesaj").innerHTML = `Hatalı! ${hak} hakkın kaldı!`
      if (hak == 0) {
        document.querySelector(".oyun").style.display = "none"
        document.querySelector(".sonuc").innerHTML = `Hakkınız Bitti! Toplam Skorunuz : ${skor}`
      }
    }
  })
}

//!SORU ATLA
let atlamaHakki = 5
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
