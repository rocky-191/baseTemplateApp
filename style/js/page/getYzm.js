(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	var spanObj=document.querySelector(".hidden_button span"),
			hiddenBtn=document.querySelector(".hidden_button");
	document.querySelector(".validate_button").onclick=function(){
		var phoneNumber=document.querySelector("#tel").value;
		if(!validateNumber(phoneNumber)){
			alert("手机号码不正确");
			return ;
		}
		spanObj.innerText="60";
		this.style.display="none";
		hiddenBtn.style.display="inline-block";
		var icount = 59;
		var time = setInterval(auto, 1000);

		function auto() {
			spanObj.innerText=icount;
			icount--;
			if(icount == 0) {
				clearTimeout(time);
				document.querySelector('.validate_button').style.display="inline-block";
				hiddenBtn.style.display="none";
			}
		}
	};
	document.querySelector(".js-confirm").onclick=function(){
		var leaveTime=spanObj.innerText,
			yzm=document.querySelector("#yzm").value;
		console.log(leaveTime+" and "+yzm);
		if(yzm == ""){
			alert("请输入验证码");
		}else{
			if(leaveTime >= 0){
				alert("登录成功");
			}else{
				alert("登录失败");
			}
		}
	};
}

//验证手机号码
function validateNumber(num) {
    var reg = /^1[3-9]\d{9}$/;
    return reg.test(num);
};
