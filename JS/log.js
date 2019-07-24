// 对账号进行验证
$("input:text").focus(function(){
    console.log($("input:text"))
    $("#userTic").addClass("open");
})
$("input:text").blur(function () {
    // 验证账号长度
    $("#userTic").addClass("open");
    var reg=/^\w{6,12}$/g
    if (reg.test($("input:text").val())){
    
    $("#userTic").html("验证格式通过")
    }else{
        $("#userTic").html( "验证格式失败") 
    }
})
// 验证密码
$("input:password").focus(function () {
    console.log($("input:password"))
    $("#upwTic").addClass("open");
})
$("input:password").blur(function () {
    // 验证账号长度
    $("#upwTic").addClass("open");
    var reg = /^\w{6,12}$/g
    if (reg.test($("input:password").val())) {

        $("#upwTic").html("验证格式通过")
    } else {
        $("#upwTic").html("验证格式失败")
    }
})