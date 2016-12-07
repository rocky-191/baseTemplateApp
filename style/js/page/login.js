(function(){
	//active处理兼容，防止active伪类失效
	document.addEventListener('touchstart',function(){},false);
})();

window.onload=function(){
	//用canvas加载背景图，可以加快加载速度
//	var cxt=document.getElementById("bgCanvas").getContext("2d");
//	var imageObj = new Image();
//	var w=document.body.clientWidth,
//		h=document.body.clientHeight;
//	cxt.width =w;  
//  cxt.height=h; 
//	imageObj.onload = function(){
//	  cxt.drawImage(imageObj,0,0);
//	};
//	imageObj.src = 'style/image/loginBg.png';
}
