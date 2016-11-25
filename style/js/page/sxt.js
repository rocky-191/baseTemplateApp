window.addEventListener('DOMContentLoaded',function(){
    //获取要控制的DOM对象
    var canvas=document.getElementById('canvas'),
        context=canvas.getContext('2d'),
        video=document.getElementById('video'),
        //这是getUserMedia的第一个参数constraints的值
        videoObj={'video':true},
        errBack=function(error){
            console.log('video capture error:',error.code);
        }
    
    navigator.myGetUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;

    navigator.myGetUserMedia(videoObj,function(localMediaStream){
        
        window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL;
        video.src=window.URL.createObjectURL(localMediaStream);
        video.play();
    },errBack);

    video.onloadedmetadata=function(e){
        var snapBtn=document.getElementById('snap');
        snapBtn.addEventListener('click',function(){
            context.drawImage(video,0,0,320,240);
        })
    };
})
