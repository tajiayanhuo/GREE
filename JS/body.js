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
    // 1.获取触发事件的元素
    var dots=document.querySelectorAll("ul.dotted>[data-toggle=dot]")
    // 2.绑定事件
    for(var dot of dots){
       //3. 查找要修改的函数 
       dot.onmouseover=function(){
        var  id=this.dataset.target;
        var  li=document.getElementById(id);
          //清空其他的opacity为0 
          var opcs = document.querySelectorAll("div.lun_bo>ul:nth-child(1)>li");
        //4.修改元素
           for(var opc of opcs){
            opc.style.opacity = 0;  
        }li.style.opacity = 1;
    }
}
})()