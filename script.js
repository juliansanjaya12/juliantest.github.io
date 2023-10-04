/========== scroll reveal ==========/
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  
  ScrollReveal().reveal(".home, .pizza-title, .icon-p", {
    origin: "top",
  });
  
  ScrollReveal().reveal(".banner, .pizza-menu, .footer, .gallery, .kontak",{
      origin: "bottom",
    }
  );
  
  ScrollReveal().reveal(".image2, .menu-p, .visi", {
    origin: "left",
  });
  
  ScrollReveal().reveal(".menu-baru, .sejarah, .misi", {
    origin: "right",
  });

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () =>{
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    autoplay:{
        delay:6400,
        disableOnInteraction:false,
    },
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetwwen:20,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
});

let previewContainer = document.querySelector('.menu-preview-container');
let previewBox = previewContainer.querySelectorAll('.menu-preview');

document.querySelectorAll('.menu .box').forEach(menu =>{
    menu.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = menu.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

previewContainer.querySelector('#close').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
        close.classList.remove('aactive');
    });
};