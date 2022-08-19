// navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixNav = header.offsetTop;

    if (window.pageYOffset > FixNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('nabvar-fixedd');
    }
}
// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})