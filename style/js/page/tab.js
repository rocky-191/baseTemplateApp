(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	var button = document.querySelectorAll(".js-workLi li");
	var contentDiv = document.getElementById("contant");
	function clickButton() {
		for(var i = 0; i < button.length; i++) {
			if(this == button[i]) {
				button[i].classList.add("workLiActive");
				for(var j=0,len=siblings(button[i]).length;j<len;j++){
					siblings(button[i])[j].classList.remove("workLiActive");
				}
				break;
			}
		}
		contentDiv.style.left = -414 * i + "px";
		contentDiv.style.left = -414 * (this.innerHTML - 1) + "px";
	}
	for(var i = 0; i < button.length; i++) {
		button[i].onclick = clickButton;
	}
};

//获取兄弟节点
function siblings(elm) {
	var a = [];
	var p = elm.parentNode.children;
	for(var i =0,pl= p.length;i<pl;i++) {
		if(p[i] !== elm) a.push(p[i]);
	}
	return a;
}