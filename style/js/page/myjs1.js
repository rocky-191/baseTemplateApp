(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	//侧边栏
	var sideNavHeight=$("#SideNavclose").height();
	var sideNav_part1Height=$(".sideNav_part1").height();
	var sideNavFootHeight=$(".sideNavFoot").height();
	var sideNav_ulHeight=sideNavHeight-sideNav_part1Height-sideNavFootHeight;
	$("#sideNav_ul").css("height",sideNav_ulHeight);
	$(".js-filter").on("click",function(){
		showSideNav();
	});
	//流程侧边栏列表点击效果
	$("#sideNav_ul li").on("click",function(){
		var self=this;
		var liDiv=$(self).find("div"),
			allLiDiv=$(self).parent().find("li div.tickIcon1"),
			tickIcon2Num;
		if($(self).hasClass("js-all")){
			if(liDiv.hasClass("tickIcon2")){
				allLiDiv.removeClass("tickIcon2");
			}else{
				allLiDiv.addClass("tickIcon2");
			}
		}else{
			if(liDiv.hasClass("tickIcon2")){
				liDiv.removeClass("tickIcon2");
				tickIcon2Num=$(self).parent().find("li:not(.js-all) div.tickIcon2").length;
				if(tickIcon2Num==0){
					allLiDiv.removeClass("tickIcon2");
				}
			}else{
				liDiv.addClass("tickIcon2");
				$(self).parent().find("li.js-all div").addClass("tickIcon2");
			}
		}
	});
	//选择部门重置按钮
	$(".js-resetBtn").on("click",function(){
		$("#sideNav_ul li").find("div").removeClass("tickIcon2").addClass("tickIcon1");
	});
	//完成
	$(".js-finishSelect").on("click",function(){
		$("#SideNavclose").hide(100);
		$("#mask").remove();
	});
};

//显示侧拉面板相关信息函数 	
function showSideNav(){
	$("#SideNavclose").show(100);
	showBg("mask");
}

//关闭侧拉面板函数  
function hideSideNav(){
	$("#SideNavclose").hide(100);
	$("#mask").remove();
}

//遮罩层
function showBg(id){
	var newMask = document.createElement("div");
	newMask.id=(id?id:"zzc");//遮罩层ID，若未传入ID值，遮罩层id默认为zzc
	newMask.style.position = "absolute";
	newMask.style.zIndex = "100"; 
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
		$("#SideNavclose").hide(100);
		$("#mask").remove();
	}; 
}