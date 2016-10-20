(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	var  con = document.getElementById('con');
    var startY, moveY, endY , orginTop , lastY ;
    con.addEventListener('touchstart' , function(event) {
      	event.preventDefault();
      	startY = event.targetTouches[0].pageY;
      	orginTop = parseFloat(getComputedStyle( this , null).top);
    }, false);
    con.addEventListener('touchmove' , function(event) {
      	event.preventDefault();
      	this.style.top = orginTop + event.targetTouches[0].pageY - startY + "px";
      	endY = event.targetTouches[0].pageY - startY;
    }, false);
    con.addEventListener('touchend' , function(event) {
      	event.preventDefault();
      	var a = parseFloat(getComputedStyle( this , null).top) % document.body.offsetHeight;
        if ( Math.abs(a) < document.body.offsetHeight/2 ) {
        	lastY = parseFloat(getComputedStyle( this , null).top) - a ;
      	} else {
        	lastY = parseFloat(getComputedStyle( this , null).top) - document.body.offsetHeight - a;
      	}
      	if ( parseFloat(getComputedStyle( this , null).top) > 0 ) {
        	lastY = 0;//向上滑动时保证第一页不继续向上移动
      	} else if ( parseFloat(getComputedStyle( this , null).top) < -4 * document.body.offsetHeight) {
        	lastY = -4 * document.body.offsetHeight;//向下滑动时保证最后一页前面的页移出屏幕外
      	}
      	$(this).animate({top : lastY},300);
    }, false);
};
