/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  liutian<1538731090@qq.com> liutian_jiayi
 * @Create on 2016-6-22 17:27:18
 * @Version 1.0
 */


document.login.onsubmit = function() {

    var uname = $("input[name=uname]").val();
    var password = $("input[name=password]").val();
    var code = $("input[name=code]").val();
    var message = "";
    if (uname.match(/^\s*$/)) {
        message += "账号未填写\n";
    }
    if (password.length < 6 || password.length > 15) {
        message += "密码长度应为6-15位\n";
    }
    if (code.length != 5) {
        message += "验证码应为5位\n";
    }
    if (message != "") {//验证有错 绑定弹出层 输出错误
        alert(message);
        return false;
    } else {//绑定点击事件提交
        return true;
    }
}


