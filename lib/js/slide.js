$('.banner-slide').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    nav: true,
    dots: false,
    navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
})

$('.why-choose__images').owlCarousel({
    loop: true,
    items: 3,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2,
            dots: true
        },
        576: {
            items: 3,
            dots: true
        }
    }
})

$('.hotels-list').owlCarousel({
    loop: true,
    center: true,
    margin: 30,
    items: 3,
    nav: true,
    dots: false,
    navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        768: {
            items: 2,
            center: false,
            dots: true,
            nav: false
        },
        1024: {
            item: 3,
            dots: false,
            nav: true
        }
    }
})
$('.offers-list').owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    items: 1,
    nav: true,
    dots: false,
    navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            dots: true,
            nav: false
        },
        1024: {
            dots: false,
            nav: true
        }
    }
})
$('.highlights-list').owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    items: 1,
    nav: true,
    dots: false,
    navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            dots: true,
            nav: false
        },
        768: {
            dots: false,
            nav: true
        }
    }
})






$('.slide__section__rooms').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 2
        },
        1300: {
            items: 2
        }
    }
})
$('.slide__section__services').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 2
        },
        1300: {
            items: 2
        }
    }
})
$('.slide__section__offers').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})

$('.slide__menu__detail__hotel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})

$('.slide__rooms__image').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})

$('.slide__menu__dining').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    navText: ["<i class='fa-thin fa-angle-left'></i>", "<i class='fa-thin fa-angle-right'></i>"],
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})