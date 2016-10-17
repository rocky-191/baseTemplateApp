(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	
	//侧滑
	$(".item").on("swipeleft",function(){
        $(this).addClass('selected').parents(".touch").siblings().find(".item").removeClass('selected');
        $(this).find("a.js-del").on("click",function(){
            var self=this;
    		$(self).parent().parent().parent().remove();
        });
    }).on("swiperight",function(){
        $(this).parents(".touch").find(".item").removeClass('selected');
    });
};