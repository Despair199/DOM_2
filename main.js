var favs = Array.from(document.querySelectorAll(".fa-heart"))
var plusBTNS = Array.from(document.querySelectorAll(".fa-circle-plus"))
var minusBTNS = Array.from(document.querySelectorAll(".fa-circle-minus"))
var deleteBTNS = Array.from(document.querySelectorAll(".fa-trash"))
var cards = Array.from(document.querySelectorAll(".card"))




for(let fav of favs)
{
    fav.addEventListener("click",function(){
        if(fav.style.color!="red"){
            (fav.style.color="red")
        }else{(fav.style.color="black")}
        
    })
}


for(let plusbtn of plusBTNS) {
    plusbtn.addEventListener("click",function(){
        plusbtn.nextElementSibling.innerHTML++
        total()
    })
}

for (let minusbtn of minusBTNS) {
    minusbtn.addEventListener("click",function(){
        if(minusbtn.previousElementSibling.innerHTML>0){
            minusbtn.previousElementSibling.innerHTML--
            total()
        }
    })
}

for (let [i] in deleteBTNS) {
    deleteBTNS[i].addEventListener("click",function(){
    cards[i].remove()
    total()
})
}

function total(){
    let qte = Array.from(document.querySelectorAll('.counter'))
    let price = Array.from(document.querySelectorAll('.unit-price'))
    s = 0
    for (let i = 0; i < qte.length; i++){
        s = s+qte[i].innerHTML * price[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s ;
}


