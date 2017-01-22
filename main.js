jQuery.fn.extend({
    toggleText: function (a, b) {
        var that = this;
        if (that.text() != a && that.text() != b) {
            that.text(a);
        }
        else if (that.text() == a) {
            that.text(b);
        }
        else if (that.text() == b) {
            that.text(a);
        }
        return this;
    }
});

jQuery(function ($) {
    $(".dark-zone").mouseenter(function () {
        $(".basejq").removeClass('rotateline')
    });
    $(".dark-zone").mouseleave(function () {
        $(".basejq").addClass('rotateline')
    });

    $(".tap-drone").mouseenter(function () {
        $(".circle-sm").addClass('pulse')
    });
    $(".tap-drone").mouseenter(function () {
        $(".circle-md").addClass('pulse')
    });
    $(".tap-drone").mouseenter(function () {
        $(".circle-lg").addClass('pulse')
    });
    $(".tap-drone").mouseleave(function () {
        $(".circle-sm").removeClass('pulse')
    });
    $(".tap-drone").mouseleave(function () {
        $(".circle-md").removeClass('pulse')
    });
    $(".tap-drone").mouseleave(function () {
        $(".circle-lg").removeClass('pulse')
    });
    $('.navbar-brand').mouseenter(function () {
        $('.circle-red').addClass('pulse-red')
    });
    $('.navbar-brand').mouseleave(function () {
        $('.circle-red').removeClass('pulse-red')
    });
    $('.btn').click(function () {
        $('.xl-txt').toggleClass('txtless');
        $('.jtxt').toggleClass('nodisplay');
        $('.jtxt').addClass('visible-txt');
        $(this).toggleText('LESS', 'VIEW MORE');
    });


});
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

