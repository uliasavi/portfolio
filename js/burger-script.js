$(function(){
	$('.header__burger').click(function(event){
			$('.header__burger,.header__item').toggleClass('active');
			$('body').toggleClass('lock');
	});
});