(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	$(".r_sysUl li").on("click",function(){
		var that=$(this);
       	changeColor(that);//点击变色
		$(this).find(".tickIcon").show(10);
		$(this).siblings().find(".tickIcon").hide(10);
	});
};

//点击变色
function changeColor(obj){
	$(obj).css('background','rgba(215,215,215,0.6)');
    setTimeout(function(){
            $(obj).css('background','rgba(215,215,215,0)');
    },300);
}