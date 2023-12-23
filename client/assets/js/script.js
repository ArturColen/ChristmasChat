const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach(nav => nav.addEventListener('click', linkAction));

function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

let newSwiper = new Swiper('.new-swiper', {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
    
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => { 
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
            }
            else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
    });
}

window.addEventListener('scroll', scrollActive);

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);