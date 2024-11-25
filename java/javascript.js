// icon
function icon(){
    let menu = document.getElementById('menu')
    if(menu.src.match('bx-menu.svg')){
        menu.src = "../picture/logo/cross-small.svg";
    }else {
        menu.src = ("../picture/logo/bx-menu.svg");
    }
}

// menu
function my(){
    var navbar = document.getElementById('nav');
    navbar.classList.toggle('show');
}
// parallax
let satu = document.getElementById('isi');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    satu.style.left = value * 5 + 'px';
});

// theme
let theme = document.getElementById('theme');
let toggle = document.getElementById('logoTheme');

theme.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        toggle.src = '../picture/logo/bxs-sun.svg';
    }else{
        toggle.src = ('../picture/logo/bxs-moon.svg');
    }
}