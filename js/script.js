$(function () {
	$('.menu-open').click(function () {
		$('.menu-open, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		
	})
})