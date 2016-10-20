(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

document.addEventListener("DOMContentLoaded", function(){
	(function(){
		var _btn  = document.querySelector(".btn-slide-bar"),
			_body = document.querySelector("body"),
			jsContent=document.querySelector(".js-content");
			_btn.onclick = function(){
				var bodyActiveIndex=_body.classList.contains('active');
				if(bodyActiveIndex){
					_body.classList.remove("active");
				}else{
					_body.classList.add("active");
				}
			};
		jsContent.onclick=function(){
			var bodyActiveIndex1=_body.classList.contains('active');
			if(bodyActiveIndex1){
				_body.classList.remove("active");
			}
		};
	})(window)
},false);