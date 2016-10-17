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