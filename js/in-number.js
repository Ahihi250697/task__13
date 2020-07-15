$(function(){
	window.onscroll = function() {
		var _curH = $(window).height()/2;
		var _curPos = window.pageYOffset;

	 	$('.odometer1').each(function(){
	 		var _h = $(this).offset().top;
	 		var _h3 = _curPos + _curH*2 ;
	 		if(_h < _h3){

			
		        var odoValue = $(this).attr('data-value');
		       $(this).html(odoValue);
		     //});
	 		}
	 	})
	    
		$('.trend__chart').each(function(){
			var _h = $(this).offset().top;
	 		var _h3 = _curPos + _curH*2 - 400 ;
	 		if(_h < _h3){
	 			var oe = $(this).find('.indexChart');

	 			var _n1 = oe.attr('data-n1');
	 			if(_n1 != null){
	 				if(oe.hasClass('not-active')){
		 				console.log("oe");
		 				__char__01(oe,_n1);
		 				oe.removeClass('not-active');
		 			}
	 			}
	 			else{
	 				var _func = oe.attr('data-func');
	 				if(_func == "char_02"){
	 					if(oe.hasClass('not-active')){
		 					__char__02();
		 					oe.removeClass('not-active');
		 					oe.attr('data-func', '-1');
	 					}
		 			}
		 			else if(_func == "char_03"){
		 				if(oe.hasClass('not-active')){
							console.log("oe3");

		 					__char__03();
		 					oe.removeClass('not-active');
		 					oe.attr('data-func', '-1');

		 				}
		 			}
		 			else if(_func == "char_04"){
		 				if(oe.hasClass('not-active')){
							console.log("oe4");

		 					__char__04();
		 					oe.removeClass('not-active');
		 					oe.attr('data-func', '-1');

		 				}
		 			}

	 			}
	 			
	 		}
		});
	    if(_curPos > _curH){

	        $('#backTop').css({
	            display: 'block'
	        });
	    }
	    else{
	        $('#backTop').css({
	            display: 'none'
	        });
	    }
	}
});

function __char__01(_val,_n1){
	var _n2 = 100 -_n1
 	var aaaa =  new Chart(_val, {
        type: 'pie',
        data: {
            datasets: [
                {
                    data: [_n1, _n2],
                    backgroundColor: ['#00a0e9', '#086bb6'],
                    borderColor: 'white',
                    borderWidth: 4
                }
            ]
        }
    });
}

function __char__02(){
		var myChart4 = new Chart($('#hun-chart'), {
        type: 'bar',
        data: {
            labels: ['8～10月', '1月', '2月', '3月以降'],
            datasets: [{
                data: [13, 7, 8, 4],
                backgroundColor: '#00a0e9',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    barPercentage: 0.8
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    });
}

function __char__03(){
	var myChart5 = new Chart($('#numcomp-chart'), {
        type: 'horizontalBar',
        data: {
            labels: ['1～10社', '11～20社', '21～30社', '31～40社', '41社～'],
            datasets: [{
                data: [5, 13, 8, 5, 1],
                backgroundColor: '#00a0e9',
                borderWidth: 1
            }]
        },
        options: {
            elements: {
                rectangle: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            legend: {
                position: 'right',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    });
}

function __char__04(){
	var myChart6 = new Chart($('#offical-chart'), {
        type: 'bar',
        data: {
            labels: ['1社', '2～5社', '6社以上'],
            datasets: [{
                label: 'none',
                data: [3, 26, 3],
                backgroundColor: '#00a0e9',
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    barPercentage: 0.5
                }]
            },
        }
});
}