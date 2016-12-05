window.onload=function(){
	// 获取蓝色块的高度
	var homeAdv = $('.js-homeAdv'),
		ulObj=$(".js-contentUl"),
		headerClone = $('.js-homeTop').clone();
	// 浏览器滚动的时候触发事件	
	$(window).scroll(function(){
		// 若滚动条高度 > 蓝色块的高度
		if ($(window).scrollTop() > homeAdv.height()) {
			// 克隆顶栏并把 home-wrap 里面的顶栏移除
			headerClone = $('.js-homeTop').clone();
			$('.js-homeTop').remove();
			// 添加固定效果
			headerClone.addClass('fixed');
			headerClone.prependTo('body');
		} else {
			// 克隆顶栏并把 home-wrap 里面的顶栏移除
			headerClone = $('.js-homeTop').clone();
			$('.js-homeTop').remove();
			// 移除到固定效果，使其归位
			headerClone.removeClass('fixed');
			headerClone.prependTo('.js-homeWrap');
		}
	});
}
