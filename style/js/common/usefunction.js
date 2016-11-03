//基础事件
//addEventListener可以同时对一个元素添加多个事件
element.addEventListener(
	"touchstart",
	function() {
		console.log(1);
	}
);
element.addEventListener(
	"touchstart",
	function() {
		console.log(2);
	}
);
//还可以定义函数,然后直接写函数名
element.addEventListener(
	"touchstart",
	fn		
);
function fn() {
	console.log(3);
}
//阻止系统的默认事件
document.addEventListener(
	"touchstart",
	function(e) {
		e.preventDefault();
	}
);
/*
	e.preventDefault(); 阻止默认事件
	
	阻止掉：document touchstart的默认事件，可以解决一下问题：
		1. 阻止页面上的文字被选中    -- 可以通过阻止冒泡使某个元素上的文字被选中
		2. 阻止页面上的系统菜单
		
	隐患:
		页面上的所有滚动条失效
	解决办法：
		在QQ和微信（当然还包括其他浏览器，不过我没测试过）中如果有需要用到touch事件做的特效一定要在touchstart或者touchmove中添加event.preventDefault()方法。在touchstart中如果有event.preventDefault()方法， 将不会触发click事件和a标签方法。在这里可以使用tap代替click，但是a标签的话就不太方便了。如果在touchmove中有event.preventDefault()方法，最好加上方向判断，当然如果你页面内容不需要滚动条就不需要加判断了。
		
		
*/
// 判断是否为移动端运行环境
function clientIsMob(){
	var mob = '';
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){ 
	 	if(window.location.href.indexOf("?mobile")<0){ 
	  		try{ 
		  		mob = 'true'; 
	  		} 
	  		catch(e){} 
	 	} 
	}else{ 
		mob = 'false';
	};
	return mob;
	/*使用*/
//	if(mob=='true') {
//		console.log("是移动设备");
//	} else {
//		console.log("不是移动设备")
//	};
}
//方法二判断设备是pc还是移动端
function clientIsPC(){
	var userAgentInfo = navigator.userAgent; 
    var Agents = ["Android", "iPhone", 
                "SymbianOS", "Windows Phone", 
                "iPad", "iPod"]; 
    var flag = true; 
    for (var v = 0; v < Agents.length; v++) { 
        if (userAgentInfo.indexOf(Agents[v]) > 0) { 
            flag = false; 
            break; 
        } 
    } 
    return flag;
}


/*获取链接参数*/
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
};


//获取页面视口宽高
function getViewRect() {
	var pageWidth = window.innerWidth
		,pageHeight = window.innerHeight;

	if ( typeof pageWidth != 'number' ) {
		if ( document.compatMode == 'CSS1Compat') {
			pageWidth = document.documentElement.clientWidth;
			pageHeight = document.documentElement.clientHeight;
		} else {
			pageWidth = document.body.clientWidth;
			pageHeight = document.body.clientHeight;
		}
	}
	return {
		width: pageWidth,
		height: pageHeight
	};	
};


/*判断横竖屏*/
function hengshuping(){ 
  if(window.orientation==180||window.orientation==0){ 
		var h = getViewRect().height;
		$('html').css('minHeight',h + 'px');    
   } 
  if(window.orientation==90||window.orientation==-90){ 
		var h = getViewRect().height;
		$('html').css('minHeight',h + 'px');          
	} 
};

if(mob == 'true') {
	$(window).on('orientationchange',function() {
		setTimeout(function() {
			hengshuping();
		},600);			
	});	
};


var browser = {
versions: function() {
var u = navigator.userAgent, app = navigator.appVersion;
return {//移动终端浏览器版本信息 
trident: u.indexOf('Trident') > -1, //IE内核
presto: u.indexOf('Presto') > -1, //opera内核
webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
iPad: u.indexOf('iPad') > -1, //是否iPad
webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
};
}(),
language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

var ua = window.navigator.userAgent.toLowerCase();

if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	$('.wholePage').show();
}else if(browser.versions.ios || browser.versions.iPhone || browser.versions.iPad){
	//$('#downMsg').show();
	//苹果设备
	location.href = '';
}else{
	//$('#downMsg').show();
	//安卓设备
	location.href = "";
}