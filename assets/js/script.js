//=============menu-start==============
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 991) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            $('.menu-cnt').css({width: '100%', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu')
            })
        } else {
            $('.menu-cnt').css({width: '0%'});
            $('body').removeClass('body_fix');
            time = 0;
            var menu_li = $(".sidenav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '0', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});
//=============menu-start==============




//  modals
// =================== modal ===================
$('.btn-modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out');
    $('body').css({overflow: 'hidden '});
    modal.fadeIn()

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');

    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100);
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100);
            $('body').css({overflow: 'visible '})

        }
    })
});


// ===================sliders-start==============

$(document).ready(function () {
    $(".education-slider-js").slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    autoplay: true,
                }
            }
        ]

    });

});

$('.training-slider-for-js').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.training-slider-nav-js',
    responsive: [
        {
            breakpoint: 575.98,
            settings: {
                autoplay: true,
            }
        }
    ]
});

$('.training-slider-nav-js').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.training-slider-for-js',
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '44px',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1199.98,
            settings: {
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 5,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
                autoplay: true,
            }
        }
    ]
});

$(document).ready(function () {
    $(".diploma-slider-js").slick({
        arrows: false,
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        infinite: true,
        // focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]

    });

});

$(document).ready(function() {

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

});


$(document).ready(function () {
    $(".feedback-slider-js").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 1,
                }
            },

            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    vertical: false,
                    arrows: false,

                }
            }
        ]

    });

});

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
// ===================sliders-end==============


//================button-up-start===============
$(document).ready(function () {
$('.click-to-up').on('click', function () {
    scrallDown(this)
});
    function scrallDown($this) {
        var aid = $($this).find('a').attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
    }

});
//================button-up-end==============


$(document).ready(function () {
    addActiveClass('weeks-list', 'active-week');

    $('.click-li').on('click', function () {
        changeActiveClassWithClick(this, 'weeks-list', 'active-week')
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

});


