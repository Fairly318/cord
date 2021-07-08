<<<<<<< HEAD
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
=======
$(function () {
    
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
    var layer=layui.layer
    
        // 通过 form.verify() 函数自定义校验规则
    form.verify({
        // 自定义了一个叫做 pwd 校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
            // 校验两次密码是否一致的规则
        udpew:function(value){
         var pwd=$(".login-box [name=reppwd]").val();
        
            if(pwd!==value){
                return '俩次密码不一致';
            }
        }
    })
    
    $('#form_reg').on("submit",function(e){
        e.preventDefault();
      var data={
          username: $("#form_reg [name=username]").val(),
          password:$("#form_reg [name=upassword]").val()
      } 
        $.post('/api/reguser',data,function(res){
             if(res.status!==0){
            layer.msg(res.message)

             }
        } )
    })
    $("#form_login").submit(function(e){
        e.preventDefault;
        var data=$(this).serialize();
        $.ajax({
            type: "post",
            url: "/api/login",
            data: data,
          
            success: function (response) {
                if(response.status !=0){
                    layer.msg(response.message);//失败
                }
               localStorage.setItem("token",response.token);
               location.href="/index.html";
            }
        });
    });
    
})

>>>>>>> login
