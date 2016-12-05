(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	var btn1=document.getElementById("contentBtn"),
		btn2=document.getElementById("tipBtn"),
		ctModal=document.querySelector(".js-content"),
		tipModal=document.querySelector(".js-tip"),
		closeBtn1=document.querySelector(".js-close1"),
		closeBtn2=document.querySelector(".js-close2");
	btn1.onclick=function(){
		ctModal.style.display="block";
		showBg("mask");
	};
	btn2.onclick=function(){
		tipModal.style.display="block";
		showBg("mask");
	};
	closeBtn1.onclick=function(e){
		e.stopPropagation();
		tipModal.style.display="none";
		document.getElementById("mask").remove();
	};
	closeBtn2.onclick=function(e){
		e.stopPropagation();
		ctModal.style.display="none";
		document.getElementById("mask").remove();
	};
};

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
	newMask.onclick = function(){
			console.log("2");
			document.querySelector(".js-content").style.display="none";
			document.querySelector(".js-tip").style.display="none";
			this.remove();
		};
	document.body.appendChild(newMask);  
}