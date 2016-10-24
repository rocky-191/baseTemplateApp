(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	document.querySelector('.js-pop1').onclick = function(){
		swal("操作失败", "欢迎访问baidu.com", "error");
	};
	document.querySelector(".js-pop2").onclick=function(){
		swal("欢迎访问");
	};
	document.querySelector(".js-pop3").onclick=function(){
		swal("操作成功", "恭喜你，成功登陆站长素材（sc.chinaz.com）", "success");
	};
	document.querySelector(".js-pop4").onclick=function(){
		swal({
			title: "确定操作吗？",
			text: "你确定要删除这篇文章吗？",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: '#DD6B55',
			confirmButtonText: 'confirm'
		},
		function(){
			alert("删除成功");
		});
	};
	document.querySelector(".js-pop5").onclick=function(){
		swal({
		title: "自定义图标",
		text: "可以自定义提示框的图标！",
		imageUrl: 'style/image/thumbs-up.jpg'
	});
	};
};
