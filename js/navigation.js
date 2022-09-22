const primaryNav = document.querySelector('.primary-navigation');
const hamburger = document.querySelector('.mobile-nav-toggle');

const navbarMobileViewHandler = ( switch_visibilty)=>{
    hamburger.classList.toggle('is-active');
    primaryNav.setAttribute('data-visible',switch_visibilty);
    hamburger.setAttribute('aria-expanded',switch_visibilty);

}

hamburger.addEventListener('click',()=>{
    const visibility =  primaryNav.getAttribute('data-visible');
    (visibility === "false")?navbarMobileViewHandler(true):navbarMobileViewHandler(false);
});