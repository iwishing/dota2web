$(document).ready(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 40) { //判断滚动条位置
			// 						$('#Top').stop();//暂停
			// 						$('#Top').animate({bottom:'30px',},200);//200毫秒的动画
			$('#Top').stop().animate({
				bottom: '30px',
			}, 200); //链式写法
		} else {
			$('#Top').animate({
				bottom: '-100px',
			}, 200);
		}
	});
	$('#Top').click(function() {
		$(document).scrollTop(0); //滚动条返回到0
	});
})
