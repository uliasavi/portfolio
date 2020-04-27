$(function(){
	$('.header__burger').click(function(event){
			$('.header__burger,.header__item').toggleClass('active');
			$('body').toggleClass('lock');
	});


	$('.header__link.main').click(function(event){
			$('.header__burger,.header__item').toggleClass('active');
				$('body').removeClass('lock');
	});
});