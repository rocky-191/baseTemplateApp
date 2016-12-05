window.onload=function(){
	$(".order-list-Below ul li").click(
		function() {
			var num = $(this).index() + 1;
			var len = $(this).index();
			var thats = $(this).parent(".order-list-Below ul").find("li");
			if($(thats).eq(len).attr("class") == "on") {
				if($(thats).eq(num).attr("class") == "on") {
					$(thats).removeClass();
					for(var i = 0; i < num; i++) {
						$(thats).eq(i).addClass("on");
					}
				} else {
					$(thats).removeClass();
					for(var k = 0; k < len; k++) {
						$(thats).eq(k).addClass("on");
					}
				}
			} else {
				$(thats).removeClass();
				for(var j = 0; j < num; j++) {
					$(thats).eq(j).addClass("on");
				}
			}
		}
	);
	$('.order-button').click(function() {
		if($("#pjContent").val()!==""){
			alert("谢谢亲的评价！");
		}else{
			alert("请填写评价内容后再提交");
		}
	});
}
