// 下拉菜单隐藏部分的的移入打开
(function(){
    //1. 查找触发事件的元素
    var tabs = document.querySelectorAll("#tabs>ul>[data-toggle=tab]");
    //2. 绑定触发事件函数
    for(var tab of tabs){
        tab.onclick=function(){
            //查找要修改的元素
            //获得保存在a上的自定义扩展属性data-target中的id名
            var id=this.dataset.target;
            var div=document.getElementById(id);
            //4. 修改元素
            if(div.className=="open"){
                div.className="";
            }else{//自己是关着的，找到现在其他div是open的元素
                var open=document.querySelector("div.hiddens>div.open")
                //如果找到open，不是null就清除class为open的属性，把他关上
                open!==null&&(open.className="");
                div.className="open"
            }
        }
}
})();
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
          var opcs = document.querySelectorAll("div.lun_bo>ul:nth-child(1)>li")
        //4.修改元素
           for(var opc of opcs){
            opc.style.opacity = 0;  
        }li.style.opacity = 1;
    }
}
})()