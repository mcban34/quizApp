

function soruOlustur(){
  let rakam1 = Math.floor(Math.random() * 10)
  let rakam2 = Math.floor(Math.random() * 10)
  
  while(rakam2==0){
    rakam2 = Math.floor(Math.random() * 10)
  }  
  
  let islemler = ["*","+","-","/"]
  let rstİslem = islemler[Math.floor(Math.random() * islemler.length)]
  
  let islemText = `${rakam1}${rstİslem}${rakam2}`
  islemSonuc = parseInt(eval(islemText))

  document.querySelector(".soru").innerHTML=`${islemText} = ?`
}

document.addEventListener("DOMContentLoaded",function(){
  soruOlustur()
  let sayac = 60
  let time = setInterval(() => {
    sayac--
    document.querySelector(".süre").innerHTML=`Oyun Bitmesine ${sayac} Saniye Kaldı!`
    if(sayac==0){
      clearInterval(time)
      document.querySelector(".oyun").style.display="none"
      document.querySelector(".sonuc").innerHTML=`Süreniz Bitti! Toplam Skorunuz : ${skor}` 
    }
  }, 1000);
})

let aracHareket = 0
let hak = 3
skor = 0
document.querySelector(".cevapVer").addEventListener("click",function(){
  let verilenCevap = document.querySelector(".cevap").value
  if(verilenCevap==islemSonuc){
    skor++
    soruOlustur()
    aracHareket+=30
    document.querySelector(".car").style.left=`${aracHareket}px`
  }
  else{
    hak--
    document.querySelector(".mesaj").innerHTML=`Hatalı! ${hak} hakkın kaldı!`
    if(hak==0){
      document.querySelector(".oyun").style.display="none"
      document.querySelector(".sonuc").innerHTML=`Hakkınız Bitti! Toplam Skorunuz : ${skor}` 
    }
  }
})

let atlamaHakki = 5
document.querySelector(".soruAtla").addEventListener("click",function(){
  soruOlustur()
  atlamaHakki--
  document.querySelector(".soruAtla").innerHTML=`Soru Atla! ${atlamaHakki} Hakkınız Kaladı!`
  if(atlamaHakki==0){
    document.querySelector(".soruAtla").innerHTML="Hakkınız Bitti!"
    document.querySelector(".soruAtla").disabled=true
  }
})
