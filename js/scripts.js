
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