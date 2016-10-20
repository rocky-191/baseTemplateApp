(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	var image=new Image();
    var canvas=document.querySelector("canvas");
    var images=["style/image/p_0.jpg","style/image/p_1.jpg"];
    var num=Math.floor(Math.random()*images.length);
    image.src=images[num];
    image.addEventListener("load",function(e){//在移动端上必须用DOM2级事件，才能用鼠标等事件
        var ctx;
        var w=image.width;
        var h=image.height;
        var offsetX=canvas.offsetLeft;//获取画布在浏览器视口的偏移量
        var offsetY=canvas.offsetTop;
        var flag=false;
        function eventDown(){
            e.preventDefault();//阻止鼠标默认事件
            flag=true;
        }
        function eventUp(){
            e.preventDefault();
            flag=false;
        }
        function layout(ctx){
            ctx.fillStyle = "gray";//在画布上加上一个图层，用来遮盖
            ctx.fillRect(0,0,w,h);
        }
        function eventMove(e){
            e.preventDefault();
            if(flag){
                if(e.changedTouches){//获取手势操作对象
                    e= e.changedTouches[e.changedTouches.length-1];
                }
                var x= (e.clientX+document.body.scrollLeft|| e.pageX)-offsetX;
                var y= (e.clientY+document.body.scrollTop|| e.pageY)-offsetY;
                with (ctx){//判断当前对象
                    beginPath();
                    arc(x,y,20,0,Math.PI*2);
                    fill();
                }
            }
        }

        canvas.width=w;
        canvas.height=h;
        canvas.style.backgroundImage="url("+image.src+")";

        ctx=canvas.getContext("2d");
        ctx.fillRect(0,0,w,h);
        layout(ctx);

        ctx.globalCompositeOperation = "destination-out";//遮盖行为
        
        //pc端
        canvas.addEventListener("mousedown",eventDown);
        canvas.addEventListener("mouseup",eventUp);
        canvas.addEventListener("mousemove",eventMove);
        //移动端
        canvas.addEventListener("touchstart",eventDown);
        canvas.addEventListener("touchend",eventUp);
        canvas.addEventListener("touchmove",eventMove);


    });
};
