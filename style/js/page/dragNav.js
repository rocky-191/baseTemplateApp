(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	//可拖按钮呼出导航
	var menuDiv=document.querySelector(".menu_div"),
		menuBtn=document.querySelector("p.menu_btn");
	menuBtn.onclick=function(){
		this.classList.toggle("active");
		if(menuDiv.classList.contains("move_in")){
			menuDiv.classList.remove("move_in");
			menuDiv.classList.add("move_out");
		}else{
			menuDiv.classList.remove("move_out")
			menuDiv.classList.add("move_in");
		}
	};
	
	var div = document.getElementById('menu_btn');
	div.addEventListener('touchmove', function(event) {
		event.preventDefault();//阻止其他事件
		// 如果这个元素的位置内只有一个手指的话
		var windowWidth=window.width,
			windowHeight=window.height;
		if (event.targetTouches.length == 1) {
			var touch = event.targetTouches[0];  // 把元素放在手指所在的位置
			
			if(touch.pageX>=(windowWidth-50)){
				div.style.left = windowWidth-50 + 'px';
				div.style.top = touch.pageY + 'px';
			}else if(touch.pageY>=(windowHeight-50)){
				div.style.left = touch.pageX + 'px';
				div.style.top = windowHeight-50 + 'px';
			}else {
				div.style.left = touch.pageX + 'px';
				div.style.top = touch.pageY + 'px';
			}
			if(touch.pageY>=(windowHeight-50) && touch.pageX>=(windowWidth-50)){
				div.style.left = windowWidth-50 + 'px';
				div.style.top = windowHeight-50 + 'px';
			}
		}
	}, false);
};
