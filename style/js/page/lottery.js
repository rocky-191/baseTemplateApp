(function () {	
    //document.addEventListener('DOMContentLoaded', init, false);
	init();
})();

var lottryAbled=true;
window.onload=function(){
	FastClick.attach(document.body);
	function Lottery(id){
        this.index=-1;    //当前位置索引
        this.count=0;    //总共位置
        this.timer=0;    //setTimeout的ID，用clearTimeout清除
        this.speed=100;    //初始转动速度
        this.times=0;    //转动次数
        this.cycle=10;    //转动基本次数：即至少需要转动多少次再进入抽奖环节
        //this.prize=7;    //中奖位
        this.prize=randNum(0,9);//生成0到8的随机整数
        this.id=id;      //盒子id
        this.obj=$("#"+this.id);
        this.units=this.obj.find(".prize");
        this.count= this.units.length;
        this.isClick=false;
        this.drain=100; //积分
    }
    Lottery.prototype={
        //当前状态
        setState:function(){
            if(this.count>0){
                this.obj.find(".prize-"+this.index).addClass("active");
            }
        },
        //索引改变
        changeIndex:function(){
            this.units.removeClass('active');
            this.index++;
            if(this.index>this.count-1){
                this.index=0;
            }
            this.setState();
        },
        //运动
        rotate:function(){
            var that=this;
            that.timer=setInterval(function(){
                that.changeIndex();
                that.times++;
                that.judge();
            },that.speed)
        },
        //判断加减速和是否停止
        judge:function(){
            //加速
            if(this.times<this.cycle){
                this.speed-=14;
                if(this.speed<40){
                    this.speed=40;
                }
            }
            // 完成
            if(this.times>this.cycle&& this.index==this.prize){
                clearInterval(this.timer);
                this.times=0;
                this.speed=100;
                this.index=-1;
                var that=this;
                clearTimeout(that.click);
                that.click=setTimeout(function(){
                    that.alertPrize(that.prize);
                },100);

            }
            //快接近 减速
            if(this.times>this.cycle&& ( (this.prize==0 && this.index==6) || this.prize==this.index+1) ){
                this.speed+=124;
            }
            else{
                this.speed+=28;
            }
        },
        //成功提示信息
        alertPrize:function(prize){
            var that=this,
                alertTxt,
                test,
                tdObj=$(".js-table td");
            test=$(".js-table td").eq(prize).find("div.liwu").attr("name");
            switch(prize){
                case 0:
                    //test=tdObj.eq("0").find("div.liwu").attr("name");
                    that.isClick=false;
                    alert('恭喜获得'+test);
                    break;
                case 1:
                    //test=tdObj.eq("1").find("div.liwu").attr("name");
                    that.isClick=false;
                    alert('恭喜获得'+test);
                    break;
                case 2:
                    //test=tdObj.eq("2").find("div.liwu").attr("name");
                    that.isClick=false;
                    alert('恭喜获得'+test);
                    break;
                case 3:
                    test=tdObj.eq("5").find("div.liwu").attr("name");
                    that.isClick=false;
                     alert('恭喜获得'+test);
                    break;
                case 4:
                    test=tdObj.eq("8").find("div.liwu").attr("name");
                    that.isClick=false;
                    alert('恭喜获得'+test);
                    break;
                case 5:
                    test=tdObj.eq("7").find("div.liwu").attr("name");
                    that.isClick=false;
                     alert('恭喜获得'+test);
                    break;
                case 6:
                    //test=tdObj.eq("6").find("div.liwu").attr("name");
                    that.isClick=false;
                     alert('恭喜获得'+test);
                    break;
                case 7:
                    test=tdObj.eq("3").find("div.liwu").attr("name");
                    that.isClick=false;
                    alert('恭喜获得'+test);
                    break;
            }
            lottryAbled=true;
        },
        //中奖礼品
        getPrize:function(url,json){
            var that=this;
            $.ajax({
                url:url,
                data:json,
                dataType:'json',
                type:'post',
                success:function(res){

                },
                error:function(){

                }
            })
        },
        click:function(){
            var btn=$('#btn'),
                that=this,
                integralbox=$('.js-integral');
            var integral= $.trim(integralbox.text());//积分
            //integral=1000;//初始积分
            integralbox.text(integral);
            if(that.isClick) return;
            that.isClick=true;
            if(integral<that.drain){
                alert('您的积分不足');
                that.isClick=false;
                return;
            }
            else{
                integral-=that.drain;
                integralbox.text(integral);
//              that.getPrize();
                that.rotate();
            }
        },
        init:function(){
            this.setState();
            this.click();
        }
    };
    // $(function(){
    //     var lottery=new Lottery('lottery');
    //     lottery.init();
    // });
    $('#btn').on("click",function(){
    	if(lottryAbled==true){
    		lottryAbled=false;
		    var lottery=new Lottery('lottery');
	        lottery.init();
    	}
    	
    });
};

//随机数
function randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
}