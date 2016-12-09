window.onload=function(){
	
	var shakeThreshold = 1000; // 定义一个摇动的阈值
	var lastUpdate = 0; // 记录上一次摇动的时间
	var x, y, z, lastX, lastY, lastZ; // 定义x、y、z记录三个轴的数据以及上一次触发的数据 
	// 监听传感器运动事件
	if (window.DeviceMotionEvent) {
	    window.addEventListener('devicemotion', deviceMotionHandler, false);
	} else {
	    alert('本设备不支持devicemotion事件');
	}
	
	// 运动传感器处理
	function deviceMotionHandler(eventData) {
	    var acceleration = eventData.accelerationIncludingGravity; // 获取含重力的加速度
	    var curTime = new Date().getTime();
	    var audioObj=document.getElementById("musicBox");
	    // 100毫秒进行一次位置判断
	    if ((curTime - lastUpdate) > 100) {
	        var diffTime = curTime - lastUpdate;
	        lastUpdate = curTime;
	
	        x = acceleration.x;
	        y = acceleration.y;
	        z = acceleration.z;
			
	        var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
	        // 前后x, y, z间的差值的绝对值和时间比率超过了预设的阈值，则判断设备进行了摇晃操作
	        if (speed > shakeThreshold) {
	            //这里写摇一摇发生的事件
	            audioObj.play();
	            shakeThing();
	            setTimeout(function(){
	            	audioObj.pause();
	            },1000);
	        }
	
	        lastX = x;
	        lastY = y;
	        lastZ = z;
	    }
	}
	function shakeThing(){
		var array=["小王","小李","小明","小赵","小龙","小刚"];
		var num = Math.floor(Math.random()*6);
		var str=array[num];
		alert("你和"+str+"有缘啊！");
	}

}
