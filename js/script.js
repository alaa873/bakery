let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');
let nav_link=document.querySelectorAll("ul li a");

nav_link.forEach(function(ele){
    ele.onclick=function(){
        nav_link.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active")
    }
})

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// let cart = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cart.classList.add('active');
// }

// document.querySelector('#close-form').onclick = () =>{
//     cart.classList.remove('active');
// }

// var swiper = new Swiper(".home-slider", {
//     grabCursor:true,
//     loop:true,
//     cnteredSlides:true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });