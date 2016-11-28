function init(){
		//动态设置viewport
    	//var scale = 1 / devicePixelRatio;
		//document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';    
}

(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();