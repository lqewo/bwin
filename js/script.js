var a = document.getElementById('header__item-btn');
var b = document.getElementById('footer__text-link');
var c = document.getElementById('popup__closed');

a.onclick = function btn_click () {
    console.log("Button clicked")
    return
}

b.onclick = function hidden__scroll() {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
}

c.onclick = function show__scroll() {
    document.body.style.overflowY = 'visible';
    document.body.style.overflowX = 'visible';
}

$('.popup__scroll').mCustomScrollbar({
    theme: 'default',
});