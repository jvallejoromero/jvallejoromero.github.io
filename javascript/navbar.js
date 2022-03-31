$(document).ready(function () {
    if (window.innerWidth <= 415) {
        $('.navbar .logo-text a').text("jvr();");
    } else {
        $('.navbar .logo-text a').text("jonathanVallejo();");
    }

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            $('.navbar ul li a').addClass("sticky");
            $('.navbar .logo-text a').addClass("sticky");
            $('.navbar .menu-btn').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar ul li a').removeClass("sticky");
            $('.navbar .logo-text a').removeClass("sticky");
            $('.navbar .menu-btn').removeClass("sticky");
        }
    });

    $(window).resize(function() {
        if ((window.innerWidth >= 768) && ($('.mobile-menu').hasClass("active"))) {
            $('.menu-close-btn').click();
        }
        if (window.innerWidth <= 415) {
            $('.navbar .logo-text a').text("jvr();");
        } else {
            $('.navbar .logo-text a').text("jonathanVallejo();");
        }
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('.mobile-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu-close-btn').click(function () {
        $('.mobile-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})