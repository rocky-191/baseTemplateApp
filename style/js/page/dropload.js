(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

window.onload=function(){
	FastClick.attach(document.body);
	//下拉刷新
	var dropload = $('.inner').dropload({
    domUp : {
        domClass   : 'dropload-up',
        domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
        domUpdate  : '<div class="dropload-update">↑释放更新</div>',
        domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>'
    },
    loadUpFn : function(me){
        $.ajax({
            type: 'get',
            url: 'json/update.json',
            dataType: 'json',
            success: function(data){
                var result = '';
                for(var i = 0; i < data.lists.length; i++){
                    result +=   '<li>'
									+data.lists[i].title
                                +'</li>';
                }
                // 为了测试，延迟1秒加载
                setTimeout(function(){
                    $('.r_ul').html('');
                    $('.r_ul').prepend(result);
                    me.resetload();
                },1000);
            },
            error: function(xhr, type){
                alert('Ajax error!');
                me.resetload();
            }
        });
    }
    });
};