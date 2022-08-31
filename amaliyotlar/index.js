let circle = document.querySelector('.circle')
let circle2 = document.querySelector('.circle2')
let circle3 = document.querySelector('.circle3')
let circle4 = document.querySelector('.circle4')
let circle5 = document.querySelector('.circle5')
let cil = document.querySelector('#cil1')
let cil2 = document.querySelector('#cil2')
let cil3 = document.querySelector('#cil3')
let cil4 = document.querySelector('#cil4')
let cil5 = document.querySelector('#cil5')
let imgCard = document.querySelector('.img_card')
let imgCard2 = document.querySelector('.img_card2')
let imgCard3 = document.querySelector('.img_card3')
let imgCard4 = document.querySelector('.img_card4')
let imgCard5 = document.querySelector('.img_card5')

window.addEventListener("load", ()=>{
    cil.style.display = 'block'
})

circle.addEventListener("click", ()=>{
    cil.style.display = 'block'
    cil2.style.display = 'none'
    cil3.style.display = 'none'
    cil4.style.display = 'none'
    cil5.style.display = 'none'
    imgCard.style.display = 'block'
    imgCard2.style.display = 'none'
    imgCard3.style.display = 'none'
    imgCard4.style.display = 'none'
    imgCard5.style.display = 'none'
})

circle2.addEventListener("click", ()=>{
    cil.style.display = 'none'
    cil2.style.display = 'block'
    cil3.style.display = 'none'
    cil4.style.display = 'none'
    cil5.style.display = 'none'
    imgCard.style.display = 'none'
    imgCard2.style.display = 'block'
    imgCard3.style.display = 'none'
    imgCard4.style.display = 'none'
    imgCard5.style.display = 'none'
})

circle3.addEventListener("click", ()=>{
    cil.style.display = 'none'
    cil2.style.display = 'none'
    cil3.style.display = 'block'
    cil4.style.display = 'none'
    cil5.style.display = 'none'
    imgCard.style.display = 'none'
    imgCard2.style.display = 'none'
    imgCard3.style.display = 'block'
    imgCard4.style.display = 'none'
    imgCard5.style.display = 'none'
})

circle4.addEventListener("click", ()=>{
    cil.style.display = 'none'
    cil2.style.display = 'none'
    cil3.style.display = 'none'
    cil4.style.display = 'block'
    cil3.style.display = 'none'
    cil5.style.display = 'none'
    imgCard.style.display = 'none'
    imgCard2.style.display = 'none'
    imgCard3.style.display = 'none'
    imgCard4.style.display = 'block'
    imgCard5.style.display = 'none'
})

circle5.addEventListener("click", ()=>{
    cil5.style.display = 'block'
    cil.style.display = 'none'
    cil2.style.display = 'none'
    cil3.style.display = 'none'
    cil4.style.display = 'none'
    imgCard.style.display = 'none'
    imgCard2.style.display = 'none'
    imgCard3.style.display = 'none'
    imgCard4.style.display = 'none'
    imgCard5.style.display = 'block'
})