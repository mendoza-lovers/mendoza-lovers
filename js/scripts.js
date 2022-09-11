
const sections = document.querySelectorAll('section, aside');

const menuItems = document.querySelectorAll('.navbar_menu a');

let navbarHeight = document.querySelector('.navbar').clientHeight;

window.addEventListener('scroll', ()=> {
    
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight / 6)) {
            current = section.getAttribute('id');
        }
    })
    
    menuItems.forEach( item => {
        item.classList.remove('active');
        if(item.classList.contains(`${current}_link`)) {
            item.classList.add('active');
        }
    })

})

const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Autoplay
    autoplay: {
        delay: 3000,
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});