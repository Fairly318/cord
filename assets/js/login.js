$(".reg-a").click(function(e) {
    // e.preventDefault();
    $(".login-form").hide();
    $(".reg-from").show();
});

$(".login-a").click(function(e) {
    // e.preventDefault();
    $(".login-form").show();
    $(".reg-from").hide();
});
// 从 layui 中获取 form 对象
var form = layui.form
var layer = layui.layer
    // 通过 form.verify() 函数自定义校验规则
form.verify({
    // 自定义了一个叫做 pwd 校验规则
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格']
        // 校验两次密码是否一致的规则

})