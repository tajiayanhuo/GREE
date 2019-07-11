// 下拉菜单隐藏部分的的点击打开
(function(){
    //1. 查找触发事件的元素
    var tabs = document.querySelectorAll("#tabs>ul>[data-toggle=tab]");
    //2. 绑定触发事件函数
    for(var tab of tabs){
        tab.onmouseover=function(){
            //查找要修改的元素
            //获得保存在a上的自定义扩展属性data-target中的id名
            var id=this.dataset.target
            var div=document.getElementById(id)
            //4. 修改元素
            div.style.display="block";
    }
        tab.onmouseout=function(){
        id = this.dataset.target
        var div = document.getElementById(id)
        //4. 修改元素
        div.style.display = "none";
    }
}
})()