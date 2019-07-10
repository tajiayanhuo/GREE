// 先找到轮播图下面的序号
var dot_1 = document.getElementsByClassName("dot_1")[0];
var dot_2 = document.getElementsByClassName("dot_2")[0];
var dot_3 = document.getElementsByClassName("dot_3")[0];
var under_0 = document.getElementsByClassName("under_0")[0];
var under_1 = document.getElementsByClassName("under_1")[0];
var under_2 = document.getElementsByClassName("under_2")[0];
console.log(under_0)
var lun=document.getElementsByClassName("lun_bo")[0]
dot_1.onclick=function(){
    //要修改的元素
    lun.style.left=200%
    console.log(lun)
}