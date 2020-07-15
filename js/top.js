
$(function(){
	$('.mv__sliding').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	// autoplay: true,
	  	autoplaySpeed: 2000,
	});
	
	$(window).on('load resize', function(){
		var _wh = $(window).width();
	    if (_wh <= 768) {
	      	var _mvImg = $('.mv__sliding__img');
	      	_mvImg.each(function(index, el) {
	      		var _l = $(this).find('img');
	      		if(index == 0){
	      			_l.attr('src','images/top/bg_mobile_mv3.jpg');
	      		}
	      		if(index == 1){
	      			_l.attr('src','images/top/bg_mobile_mv1.jpg');
	      		}
	      		if(index == 2){
	      			_l.attr('src','images/top/bg_mobile_mv2.jpg');
	      		}
	      		if(index == 3){
	      			_l.attr('src','images/top/bg_mobile_mv3.jpg');
	      		}
	      		if(index == 4){
	      			_l.attr('src','images/top/bg_mobile_mv1.jpg');
	      		}
	      		if(index == 5){
	      			_l.attr('src','images/top/bg_mobile_mv2.jpg');
	      		}
	      		if(index == 6){
	      			_l.attr('src','images/top/bg_mobile_mv3.jpg');
	      		}
	      	});
	      }
	      else{
	      	var _mvImg = $('.mv__sliding__img');
	      	_mvImg.each(function(index, el) {
	      		var _l = $(this).find('img');
	      		if(index == 0){
	      			_l.attr('src','images/top/bg_mv3.jpg');
	      		}
	      		if(index == 1){
	      			_l.attr('src','images/top/bg_mv1.jpg');
	      		}
	      		if(index == 2){
	      			_l.attr('src','images/top/bg_mv2.jpg');
	      		}
	      		if(index == 3){
	      			_l.attr('src','images/top/bg_mv3.jpg');
	      		}
	      		if(index == 4){
	      			_l.attr('src','images/top/bg_mv1.jpg');
	      		}
	      		if(index == 5){
	      			_l.attr('src','images/top/bg_mv2.jpg');
	      		}
	      		if(index == 6){
	      			_l.attr('src','images/top/bg_mv3.jpg');
	      		}
	      	});
	      }
    });
});
