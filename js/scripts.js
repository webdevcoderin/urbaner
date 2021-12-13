(function($) {
    'use strict';
    /*=====================================
    =            01. Preloader            =
    =====================================*/
    $(window).on('load', function() {
        var preloader = '.preloader';
        $(preloader).find('.spinner').fadeOut();
        $(preloader).delay(350).fadeOut('slow');
        $('body').delay(350);
    });
    /*=========================================
    =            02. Smooth Scroll            =
    =========================================*/
    // Custom Smooth Scroll function
    $(document).on('click', 'a[data-scroll][href^="#"]', function(e) {
        var navbarHeight = $('.navbar-area').height();
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $id.offset().top - navbarHeight
        }, 750);
    });
    // Navbar Area Smooth Scroll
    $('.navbar-area').onePageNav({
        currentClass: 'active',
        navItems: '.hash-link > a',
        scrollSpeed: 750, // Scroll speed
        scrollThreshold: 0.5, // Scroll speed when nearing the beginning or end of the section
        easing: 'swing'
    });
    /*=======================================
    =            03. Navbar Area            =
    =======================================*/
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        var navbar = '.navbar-area';
        var navbarV1Class = 'navbar-v1';
        var navbarV2Class = 'navbar-v2';
        var downloadBtn = '.navbar-nav>.btn-download .btn-custom';
        var btnOutlineClass = 'pmd-btn-outline';
        if (scroll > 50) {
            // If scroll position reached the value
            $(navbar).addClass(navbarV2Class).removeClass(navbarV1Class);
            $(navbar + '.' + navbarV2Class).find(downloadBtn).removeClass(btnOutlineClass);
        } else {
            // Else
            $(navbar).addClass(navbarV1Class).removeClass(navbarV2Class);
            $(navbar + '.' + navbarV1Class).find(downloadBtn).addClass(btnOutlineClass);
        }
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $('.customization-panel').removeClass('fadeOut');
            $('.customization-panel').addClass('fadeIn');
        } else {
            $('.customization-panel').removeClass('fadeIn');
            $('.customization-panel').addClass('fadeOut');
        }
    });
    $(window).trigger('scroll');
}(jQuery));
