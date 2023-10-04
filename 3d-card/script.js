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

card.style.transform = `rotateX(${y / 35}deg) rotateY(${x / 25}deg)`

image.style.transform = `translateZ(70px) rotate(${x / 20}deg)`
circle.style.transform = `translateZ(-50px) rotate(${x }deg) scale(0.8) `
title.style.transform = `translateZ(40px)  `
text.style.transform = `translateZ(30px)  `
buttonsBlock.style.transform = `translateZ(40px)  `
mainBtn.style.transform = `translateZ(70px) rotate(${x / 20}deg)  `



})