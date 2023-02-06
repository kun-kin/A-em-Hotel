$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }


    if ($(this).scrollTop() >= $('.navigator').offset().top) {
        $('.navigator-container').addClass('fixed');
        $('.navigator-logo').show();
    } else {
        $('.navigator-container').removeClass('fixed');
        $('.navigator-logo').hide();
    }

    if ($(this).scrollTop() >= $('.container__find').offset().top) {
        $('.find').addClass('active');
        $('.logo__sticky').show();
    } else {
        $('.find').removeClass('active');
        $('.logo__sticky').hide();
    }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


// function animated() {
//     var wow = new WOW({
//         boxClass: 'hex1',
//         animateClass: 'animated',
//         offset: 100,
//         mobile: !0,
//         live: !0,
//     });
//     wow.init()
// }


$(document).ready(function() {




    // animated();
    // animated1();
    // animated2();

    var check_in = flatpickr(".in-date", { dateFormat: "d/m/Y", });
    var check_out = flatpickr(".out-date", { dateFormat: "d/m/Y", });
    check_in.element.addEventListener("change", function() {
        check_out.set("minDate", check_in.element.value);

    });
    // check_out.element.addEventListener("change", function() {
    //     check_in.set("maxDate", check_out.element.value);
    // });

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    // $(function() {
    //     // $("#date").datepicker();
    //     // $(".datepicker").datepicker();
    //     $(".hasDatepicker").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkin-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkout-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    // });




    $(".language-dropdown").click(function() {
        $('.language-list').slideToggle();
    });

    $(".navbar__bar").click(function() {
        $('.header-navbar').addClass('navbar--open');
    });
    $(".navbar__content-close-inner").click(function() {
        $('.header-navbar').removeClass('navbar--open');
    });

    // $(".has-dropdown").hover(function() {
    //     $(this).children('.dropdown-menu').show();
    // }, function() {
    //     $(this).children('.dropdown-menu').hide();
    // });

    $(".has-dropdown").mouseover(function() {
        $(this).children('.dropdown-menu').show();
    });
    $(".has-dropdown").mouseout(function() {
        $(this).children('.dropdown-menu').hide();
    });



    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".search-box.is-opened input").length ===
    //         0) {
    //         $(".search-box.is-opened").removeClass('is-opened');
    //         $('.toggle-search').removeClass('is-opened');
    //         $('.header__left-meta').children('.menu').removeClass('is-opened');
    //     }
    // });

});



$(".drop-down .selected a").click(function() {
    $(".drop-down .options ul").slideToggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").slideUp(300);
});


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").slideUp(300);
});

$('.sub__menu__hotel span').click(function() {
    $('.dropdown__hotel').slideToggle(300);
})

$(document).ready(function() {
    $('ul.tabs .list__tabs').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs .list__tabs').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    $('[data-fancybox]').fancybox({
        buttons: [
            'close'
        ],
        wheel: false,
        transitionEffect: "slide",
        // thumbs          : false,
        // hash            : false,
        loop: false,
        // keyboard        : true,
        toolbar: true,
        // animationEffect : false,
        // arrows          : true,
        clickContent: false,
        hash: false,
        infobar: false,
    });
});