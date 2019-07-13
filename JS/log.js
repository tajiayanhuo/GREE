// 对用户框进行验证
// 查找触发事件的元素
(function(){
var form=document.forms[0]
var txtName=form.username;
var txtpwd=form.pwd;
// 绑定事件
    txtName.onblur=txtpwd.onblur=function(){
        // 获取改变事件的元素
        var tic = this.parentNode.children[2]
        // 改变函数
        // 正则表达式验证
        ver reg=/^/
        tic.className="open"
    }
    txtName.focus();
})()