jQuery(document).ready(function($) {
	/*For the sticky navigation*/
	$('.js--section-features').waypoint(function(direction){
		if (direction === 'down') {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	},{
		offset: '40px;'
	});



	$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
  	});

	/*Scroll on buttons*/
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	$('.js--scroll-to-features').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	/*Animations on scroll*/
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},{
		offset: '50%'
	});

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated fadeInUp');
	},{
		offset: '50%'
	});

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},{
		offset: '50%'
	});

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');
	},{
		offset: '50%'
	});

	/*Mobile navigation*/

	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		if (icon.hasClass('fa-bars')) {
			icon.addClass('fa-times');
			icon.removeClass('fa-bars');
		} else {
			icon.addClass('fa-bars');
			icon.removeClass('fa-times');
		}
		nav.slideToggle(200);
	});
});

