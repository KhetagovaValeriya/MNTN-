const navButton = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;


//клик по кнопке
navButton.addEventListener('click', function(event) {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navButton.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
})


//клик по окну за пределами навигации
window.addEventListener('click', function() {
    console.log('Click on window');

    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        mobileNav.classList.toggle('mobile-nav-active');
        navButton.classList.toggle('nav-button-close');
    }
})

//стоп клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
})