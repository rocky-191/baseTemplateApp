(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay: 5000,//可选选项，自动滑动
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	});
	$(".js-workLi li").on("touchstart",function(){
		var self=this;
		$(self).addClass("workLiActive");
		$(self).siblings().removeClass("workLiActive");
		var ulIndex=$(self).index();
		$(".js-workLi-content div").eq(ulIndex).show().siblings().hide();
	});
	$(".js_starGrade span").on("touchstart",function(){
		$(this).removeClass("greyStar");
		$(this).prevAll().removeClass("greyStar");
		$(this).nextAll().addClass("greyStar");
		var greyStarNum=$(".js_starGrade span.greyStar").length;
	});
	//单选钮
	$(".js-zp-lxr li").on("touchstart",function(){
		var self=this;
		var radioCheckObj=$(self).find("div.checkedRadio");
		radioCheckObj.addClass("on_check");
		radioCheckObj.parent().siblings().find("div.checkedRadio").removeClass("on_check");
	});
	//选择时间
	//选择时间
	var currYear = (new Date()).getFullYear();
	var opt={};
	opt.date = {preset : 'date'};
	opt.datetime = {preset : 'datetime'};
	opt.time = {preset : 'time'};
	opt.defaultType = {
		theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'scroller', //日期选择模式
		dateFormat: 'yyyymmdd',
		lang: 'zh',
		showNow: true,
		nowText: "今天",
        startYear: currYear - 10, //开始年份
        endYear: currYear + 10 //结束年份
	};
	$("#ksTime").mobiscroll($.extend(opt['date'], opt['defaultType']));
	var optDateTime = $.extend(opt['datetime'], opt['defaultType']);
	$("#jsTime").mobiscroll(optDateTime).datetime(optDateTime);
	//$("#jsTime").mobiscroll($.extend(opt['date'], opt['defaultType']));
};

//显示遮罩层js
function showBg(id){
	var newMask = document.createElement("div");
	newMask.id=(id?id:"zzc");//遮罩层ID，若未传入ID值，遮罩层id默认为zzc
	newMask.style.position = "absolute";
	newMask.style.zIndex = "10"; 
	_scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth); 
	_scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); 
	newMask.style.width = _scrollWidth + "px"; 
	newMask.style.height = _scrollHeight + "px"; 
	newMask.style.top = "0px"; 
	newMask.style.left = "0px"; 
	newMask.style.background = "#666"; 
	newMask.style.opacity = "0.40"; 
	document.body.appendChild(newMask); 
	newMask.onclick = function(){ 
		
		}; 
}