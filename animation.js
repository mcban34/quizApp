// //!animation


const hareketVer = (element, x, y) => {
    element.style.transform = `translateX(${x}px) translateY(${y}px)`
}



let headerIcons = document.querySelectorAll(".headerIcons");


for (let i=0;i<3;i++){
    setInterval(() => {
        hareketVer(headerIcons[i],30,0)
    }, 500);

    setInterval(() => {
        hareketVer(headerIcons[i],30,50)
    }, 700);
    
    setInterval(() => {
        hareketVer(headerIcons[i],0,0)
    }, 1000);
}


// animasyonYuru();



