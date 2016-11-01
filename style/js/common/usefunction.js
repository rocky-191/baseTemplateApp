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
		
		
*/