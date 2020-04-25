
$(function(){
	$('.wraper').addClass('loaded');
	$('.search__icon').click(function(event){
			$('.search__form').toggleClass('active');
			$('.main, .search__icon').toggleClass('none');
	});
	$('.search_btn').click(function(event){
			$('.search__form').removeClass('active');
			$('.main, .search__icon').removeClass('none');
	});
function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
};

ibg();








});