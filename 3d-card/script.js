const cardWrapper = document.querySelector('.container')
const card = document.querySelector('.card')
const image = document.querySelector(' .image-box img')
const circle = document.querySelector(' .image-box .circle')
const title = document.querySelector(' h3 ')
const text = document.querySelector('p')
const buttonsBlock = document.querySelector(' .btn-box')
const mainBtn = document.querySelector('a')

cardWrapper.addEventListener('mousemove', event =>{
// console.log(event);
const x = (window.innerWidth / 2) - event.x
const y = (window.innerHeight / 2) - event.y

card.style.transform = `rotateX(${y / -35}deg) rotateY(${x / 25}deg)`
card.style.transition = `0s`

image.style.transform = `translateZ(70px) rotate(${x / 20}deg)`
circle.style.transform = `translateZ(-50px) rotate(${x }deg) scale(0.8) `
title.style.transform = `translateZ(40px)  `
text.style.transform = `translateZ(20px)  `
buttonsBlock.style.transform = `translateZ(30px)  `
mainBtn.style.transform = `translateZ(50px)   `



})
cardWrapper.addEventListener('mouseleave', () =>{

card.style.transform = `rotateX(0deg) rotateY(0deg)`
card.style.transition = `0.7s`

image.style.transform = `translateZ(0) `
circle.style.transform = `translateZ(0)  `
title.style.transform = `translateZ(0)  `
text.style.transform = `translateZ(0)  `
buttonsBlock.style.transform = `translateZ(0)  `
mainBtn.style.transform = `translateZ(0)   `



})