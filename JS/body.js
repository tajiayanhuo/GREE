// 下拉菜单隐藏部分的的移入打开
// jQuery中做
 $('#tabs>ul>[data-toggle=tab]').hover(function (e) {
    var $hids = $(e.target);        
     // 获得对应的ID
             var $hidId = $hids.attr("data-target");
            $("div.hiddens>div").hide()
            // 显示隐藏对应Id的div
        $(`div.hiddens>#${$hidId}`).show();
     },
        function(){ 
            $("div.hiddens>div").hide()
        } 
     )
     $(`div.hiddens>div`).hover(function () {
         $(this).show();
     }, function () {
         $(this).hide();
     });
// 轮播图的滑动
(function(){
    var i=0;
    var LIWIDTH=100
    var DURATION=500;
    var LICOUNT=3;
    var ulImgs=document.getElementById("under");
    var ulIdxs=document.getElementById("dotted");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to = i + 1;
    }
      if(i==0){
        if(to>i){
        ulImgs.className = "transition";
    }else{
        ulImgs.className = "";
    ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"%";
          setTimeout(function(){
        moveTo(LICOUNT - 1);
    },100);
    return;
  }
}
i=to;
ulImgs.style.marginLeft=-i*LIWIDTH+"%";
      for(var li of lis){
        li.className = ""
    }
      if(i==LICOUNT){
        i = 0;
    setTimeout(function(){
        ulImgs.className = "";
    ulImgs.style.marginLeft=0;
  },DURATION)
}
lis[i].className="active";
}
        var interval=3000;
    var timer=setInterval(function(){
            moveTo()
        },3000);
        var banner=document.getElementById("banner");
    banner.onmouseover=function(){
            clearInterval(timer);
        }
    banner.onmouseout=function(){
            timer = setInterval(function () {
                moveTo()
            }, 3000);
        }

        var ulIdxs=document.getElementById("dotted");
        var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length; i++){
              if(lis[i]==li){
                break;
      }
    }
    moveTo(i);
            setTimeout(function(){
            canClick = true;
        },DURATION);
      }
    }
  }
}
})()
// 边侧随着鼠标滑动出现选中样式的效果
