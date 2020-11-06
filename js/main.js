$(".hamburger-menu").click(function (e) {
    e.stopPropagation();
    $('.navigation-bar__menu').slideToggle();

});