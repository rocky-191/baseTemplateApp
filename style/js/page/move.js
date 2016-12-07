window.onload=function(){
	var container = document.getElementById("container");
	var direction = document.getElementById("direction");
	var start_x;
	var start_y;
	var end_x;
	var end_y;
	container.addEventListener("touchstart", function(event){
		if(event.targetTouches.length == 1){
			var touch = event.targetTouches[0];
			start_x = touch.pageX;
			start_y = touch.pageY;
		};
	});
	container.addEventListener("touchmove", function(event){
		event.preventDefault();
		if(event.targetTouches.length == 1){
			var touch = event.targetTouches[0];
			move_x = touch.pageX;
			move_y = touch.pageY;
		};
	});
	container.addEventListener("touchend", function(event){
		if(event.changedTouches.length == 1){
			var touch = event.changedTouches[0];
			end_x = touch.pageX;
			end_y = touch.pageY;
		};
		var directionMsg = "";
		var numRange = 20;//设定临界点
		if(start_x - end_x > numRange){
			directionMsg += "左";
		}else if(start_x - end_x < -numRange){
			directionMsg += "右";
		}

		if(start_y - end_y >numRange){
			directionMsg += "上";
		}else if(start_y - end_y < -numRange){
			directionMsg += "下";
		}
		direction.innerHTML = directionMsg;
	});
}
