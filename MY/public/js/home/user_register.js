//将验证过的账号保持下来，不用重复查库验证
var usernameLogin = [];
var usernameMobileRegister = [];
var usernameEmailRegister = [];

//function setOrGetCookie(phone) {
//    if ($.cookie(phone)) {
//        if ((parseInt($.cookie(phone)) + 1) > 3) { //错误三次返回true;
//            return true;
//        }
//        $.cookie(phone, parseInt($.cookie(phone)) + 1, {path: '/'});
//    } else {
//        $.cookie(phone, 1, {path: '/'});
//    }
//
//    console.log($.cookie(phone));
//}
function email(id) {
    var suffix = ["sina.com", "163.com", "126.com", "qq.com", "vip.qq.com", "hotmail.com", "gmail.com", "sohu.com", "139.com", "189.com", "yeah.net"];
    $(id).keyup(function(e) {
        var key = (e.keyCode) || (e.which) || (e.charCode);
        if (key != 38 && key != 40 && key != 13) {
            $("#eSuggest").empty().addClass("hidden");
            var val = $(id).val();
            var prefix = (val.indexOf('@') != -1) ? val.split('@')[0] : val;
            for (var i = 0; i < suffix.length; i++) {
                var semail = prefix + "@" + suffix[i];
                if (semail.indexOf(val) != -1) {
                    $("#eSuggest").removeClass("hidden").append("<li>" + semail + "</li>");
                }
            }
            if ($("#eSuggest").hasClass("hidden") != true) {
                $("#eSuggest li").each(function() {
                    $(this).mouseover(function() {
                        $(this).addClass("select");
                    });
                    $(this).mouseout(function() {
                        $(this).removeClass("select");
                    });
                    $(this).click(function() {
                        $(id).val($(this).text());
                        $("#eSuggest").empty().addClass("hidden");
                        $(id).focus();
                        //$(".btnlogin").click()
                    });
                });
            }
        }
    });
    $(document).click(function() {
        $("#eSuggest").empty().addClass("hidden");
    });
    if ($(id).val().length <= 0) {
        $("#eSuggest").empty().addClass("hidden");
    }
    $(document).keyup(function(e) {
        var key = (e.keyCode) || (e.which) || (e.charCode);
        if (key == 38) {
            $("#eSuggest li").eq(getUpIndex()).addClass("select");
            getValue();
        }
        if (key == 40) {
            $("#eSuggest li").eq(getDownIndex()).addClass("select");
            getValue();
        }
        if (key == 13) {
            $("#eSuggest").empty().addClass("hidden");
        }
        if ($(id).val().length <= 0) {
            $("#eSuggest").empty().addClass("hidden");
        }
    });
    var getDownIndex = function() {
        var index = 0;
        var len = $("#eSuggest li").size();
        for (var i = 0; i < len; i++) {
            if ($("#eSuggest li").eq(i).hasClass("select")) {
                $("#eSuggest li").eq(i % len).removeClass("select");
                index = i + 1;
            }
        }
        return index > (len - 1) ? 0 : (index % len);
    };
    function getUpIndex() {
        var len = $("#eSuggest li").size();
        var index = len - 1;
        for (var i = 0; i < len; i++) {
            if ($("#eSuggest li").eq(i).hasClass("select")) {
                $("#eSuggest li").eq(i % len).removeClass("select");
                index = i - 1;
            }
        }
        return (index < 0) ? (len - 1) : (index % len);
    }
    function getValue() {
        var len = $("#eSuggest li").size();
        for (var i = 0; i < len; i++) {
            if ($("#eSuggest li").eq(i).hasClass("select")) {
                $(id).val($("#eSuggest li").eq(i).text());
            }
        }
    }
}
$(function() {
    email("#_email");
    $(document).keyup(function(e) {
        var key = (e.keyCode) || (e.which) || (e.charCode);
        if (e.keyCode == 13) {
            $(".passport_logininfo .btnlogin:visible").click()
        }
    })
    $(".BC_validation").each(function(index, element) {
        var T = $(this);
        T.click(function() {
            if (T.hasClass("disabled")) {
            } else
            {
            }
        })
    });
    $(".passport_logininfo").each(function(index, element) {
        var T = $(this);
        var Btn = T.find(".btnlogin");
        var mobile = T.find("[datatype=mobile]")
        var email = T.find("[datatype=email]")
        var input = T.find("li input.yanzheng")
        var yz = false;  //验证状态
        var regexp;
        var tk = 1;       //默认为选择条款为1，取消条款非1
        var Bc_Vercode = T.find(".fr.btnann.btnfsyzm");
        var m_zc = 0;  //m_zc 用户手机注册状态 0未注册 1已经注册
        ceshi();
        function ceshi() {
            input.each(function(index, element) {
                var o = $(this);
                var nullmsg = o.attr("nullmsg");
                var datatype = o.attr("datatype");
                var errormsg = o.attr("errormsg");
                var ajaxulr = o.attr("ajaxulr");
                regexp = {
                    mobile: function(_v) {
                        return (/^1[0-9]{10}$/.test(_v));
                    },
                    mima: function(_v) {
                        return /^.{6,16}$/.test(_v);
                    },
                    yzm: function(_v) {
                        return /^[\d]{4,5}$/.test(_v);
                    },
                    email: function(_v) {
                        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(_v);
                    }
                }
                function TJ01() {
                    o.parents("li").find(".wrongts").remove();
                    o.addClass("redk");
                    if (o.val() == "") {
                        //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a2'></span><span class='text red'>" + nullmsg + "</span></div></dd>").appendTo(o.parents("dl"))
                        $("<span class='wrongts'><em class='lgbg'></em>" + nullmsg + "</span>").appendTo(o.parents('li'));
                    }
                    else
                    {
                        //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a2'></span><span class='text red'>" + errormsg + "</span></div></dd>").appendTo(o.parents("dl"))
                        $("<span class='wrongts'><em class='lgbg'></em>" + errormsg + "</span>").appendTo(o.parents('li'));
                    }
                    yz = false;
                }
                function TJ02() {
                    o.parents("li").find(".wrongts").remove();
                    o.removeClass("redk");
                    if (ajaxulr != undefined) {
                        if (datatype == "mobile") {
                            if ($.inArray($('#_mobile').val(), usernameLogin) > -1) {
                                $("<span class='wrongts'><em class='lgbg'></em>手机号已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span>").appendTo(o.parents('li'));
                                m_zc = 1;
                                return false;
                            } else {
                                m_zc = 0;
                            }
//                            $.post('/usercommon/userisbeing', {username: $('#_mobile').val()}, function(json) {
//                                if (json.value) {
//                                    o.parents("li").find(".wrongts").remove();
//                                    //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a1'></span><span class='text'>手机号已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span></div></dd>").appendTo(o.parents("dl"))
//                                    $("<span class='wrongts'><em class='lgbg'></em>手机号已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span>").appendTo(o.parents('li'));
//                                    m_zc = 1;
//                                    usernameLogin.push($('#_mobile').val());
//                                } else {
//                                    m_zc = 0;
//                                    usernameMobileRegister.push($('#_mobile').val());
//                                }
//                            }, 'json');
                        }
                        if (datatype == "email") {
                            if ($.inArray($('#_email').val(), usernameLogin) > -1) {
                                $("<span class='wrongts'><em class='lgbg'></em>邮箱已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span>").appendTo(o.parents('li'));
                                return false;
                            }
                            $.post('/usercommon/userisbeing', {username: $('#_email').val()}, function(json) {
                                if (json.value) {
                                    o.parents("li").find(".wrongts").remove();
                                    //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a1'></span><span class='text'>邮箱已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span></div></dd>").appendTo(o.parents("dl"))
                                    $("<span class='wrongts'><em class='lgbg'></em>邮箱已注册，<a href='/userlogin' class='BC_text_a4'>请登录</a></span>").appendTo(o.parents('li'));
                                    usernameLogin.push($('#_email').val());
                                } else {
                                    usernameEmailRegister.push($('#_email').val());
                                }
                            }, 'json');
                        }
                    }
                    yz = true;
                }
                o.blur(function(o) {
                    yanzheng()
                })

                Btn.click(function() {
                    if (tk == 1) {
                        yanzheng()
                    }
                })
                function yanzheng() {
                    $(".passport_logininfo").each(function() {
                        if ($(this).find('form').attr('id') == 'mobilereg' && $(this).css('display') == 'block') {
                            if (datatype == "mobile") {
                                !regexp.mobile(o.val()) ? TJ01() : TJ02();
                            }
                        }
                    });
                    //if($(".passport_logininfo").css('display')=='block' && $(".passport_logininfo").find('form').attr('id')=='mobilereg'){
                    //	if (datatype == "mobile") { ! regexp.mobile(o.val()) ? TJ01() : TJ02();
                    //	}
                    //}

                    if (datatype == "mima") {
                        !regexp.mima(o.val()) ? TJ01() : TJ02();
                    }
                    if (datatype == "yzm") {
                        if (o.val() && /^[\d]{4,5}$/.test(o.val())) {
                            o.removeClass('redk');
                            o.parents('li').find('.wrongts').remove().append("<span class='wrongts'></span>");
                        } else {
                            o.addClass('redk');
                            o.parents('li').find('span.wrongts').remove();
                            $("<span class='wrongts'><em class='lgbg'></em>请输入验证码</span>").appendTo(o.parents('li'));
                            
                        }
                        //! regexp.yzm(o.val()) ? TJ01() : TJ02();
                    }
                    $(".passport_logininfo").each(function() {
                        if ($(this).find('form').attr('id') == 'emailreg' && $(this).css('display') == 'block') {
                            if (datatype == "email") {
                                !regexp.email(o.val()) ? TJ01() : TJ02();
                            }
                        }
                    });
                    //if($(".passport_logininfo").css('display')=='block' && $(".passport_logininfo").find('form').attr('id')=='emailreg') {
                    // alert(1);
                    // if (datatype == "email") {
                    //	 !regexp.email(o.val()) ? TJ01() : TJ02();
                    // }
                    //}
                    return yz;
                }
            });
            //密码相等
            var pass = T.find("[name=password]");
            var pass2 = T.find("[name=password2]");
            pass2.blur(function() {
                if (pass.val() != pass2.val()) {
                    pass2.parents("li").find(".wrongts").remove();
                    //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a2'></span><span class='text red'>两次输入的密码不一样</span></div></dd>").appendTo(pass2.parents("dl"))
                    $("<span class='wrongts'><em class='lgbg'></em>两次输入的密码不一样</span>").appendTo(pass2.parents('li'));
                    //pass2.focus();
                }
            })
//            Bc_Vercode.each(function(index, element) {
//                var int;
//                var num = 60;
//                var T = $(this);
//                T.on("click", function() {
//                    if (m_zc == 0) { //用户未注册判断
//                        if (!regexp.mobile(mobile.val())) {
//                            mobile.parents("li").find(".tishi").remove()
//                            //$("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a2'></span><span class='text red'>手机格式不对，检查手机号是否正确</span></div></dd>").appendTo(mobile.parents("dl"))
//                            $("<span class='wrongts'><em class='lgbg'></em>手机格式不对，检查手机号是否正确</span>").appendTo(mobile.parents('li'));
//                        } else {
//
//                            if (!$(".piccode").is(":hidden")) {
//                                if ($(".piccode input").val() == '') {
//                                    $("<span class='wrongts'><em class='lgbg'></em>请输入验证码</span>").appendTo($(".piccode"));
//                                    return false;
//                                }
//                                $.post('/userlogin/checkpic', {piccode: $(".piccode input").val()}, function(result) {
//                                    if (!result.value) {
//                                        $("<span class='wrongts'><em class='lgbg'></em>" + result.text + "</span>").appendTo($(".piccode"));
//                                        changcheckpic('sendsmsform_vpiccode');
//                                        return false;
//                                    }
//                                    sendSmsCode();
//                                }, "json");
//                            } else {
//                                sendSmsCode();
//                            }
//                            //if(T.hasClass("disabled")){
//                            //   return;
//                            //}
//                            ////打开发短信框
//                            ////layerbox.show({
//                            ////    ifmID:"#sendsmsform",
//                            ////    type:"move",
//                            ////    onClose:function(){ //关闭
//                            ////        return false;
//                            ////    }
//                            ////});
//                            ////刷新验证码
//                            ////changcheckpic('sendsmsform_vpic');
//                        }
//                    } else {
//
//                    }
//
//                })
//            });

        }
        $("[name=tongyi]").each(function(index, element) {
            var T = $(this);
            var dd = T.parent("dd")
            dd.click(function() {
                if ($(this).find("input").is(':checked')) {
                    $(this).parents(".passport_logininfo").find(".btnlogin").removeClass("disabled")
                    yz = true;
                    tk = 1
                }
                else
                {
                    $(this).parents(".passport_logininfo").find(".btnlogin").addClass("disabled");
                    yz = false
                    tk = 0
                }
            })
        });

        Btn.click(function() {
            if (tk == 1 && yz == false) {
                ceshi()
            }
            if (tk == 1 && yz == true) {
                var pass = T.find("[name=password]");
                var pass2 = T.find("[name=password2]");
                if (pass.val() != pass2.val()) {
                    pass2.parents("li").find(".wrongts").remove();
                    $("<span class='wrongts'><em class='lgbg'></em>两次输入的密码不一样</span>").appendTo(pass2.parents('li'));
                    return false;
                }
                //手机注册
//                if (mobile.val()) {
//                    if (!/^.{6,16}$/.test($("#mobilereg .txtpwd").val()) || !/^.{6,16}$/.test($("#mobilereg .txtpwd2").val())) {
//                        return false;
//                    }
//                    if (!$('#ty').prop("checked")) {
//                        alert("请同意《百程旅行网服务网条款》");
//                        return false;
//                    }
//                    if ($(".piccode").css('display') == 'block' && (parseInt($.cookie(mobile.val())) >= 3)) {
//                        var piccode = $('.validationBindedpiccode').val();
//                        if (!piccode.length) {
//                            $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>请输入图形验证码</span>");
//                            return false;
//                        } else {
//                            $(".piccode").find('.piccode-wrong').remove();
//                        }
//                        $.post('/userlogin/checkpic', {piccode: piccode}, function(data) {
//                            if (!(data.value)) {
//                                $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>" + data.text + "</span>");
//                                changcheckpic('sendsmsform_vpiccode');
//                                return false;
//                            } else {
//                                $(".piccode").find('.piccode-wrong').remove();
//
//                                if (!$("#mobilereg .txtyzm").val().length) {
//
//                                    $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                                    $("<span class='wrongts'><em class='lgbg'></em>请输入手机验证码</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                                    return false;
//                                }
//                                if (!(parseInt($("#mobilereg .txtyzm").val().length) == 5 || parseInt($("#mobilereg .txtyzm").val().length) == 4)) {
//                                    $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                                    $("<span class='wrongts'><em class='lgbg'></em>请输入有效的验证码</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                                    return false;
//                                }
//
//
//                                $.post('/userreg/mobilereg', $('#mobilereg').serializeArray(), function(json) {
//                                    if (json.value) {
//                                        $.cookie($("#mobilereg").find('#_mobile').val(), 0, {path: '/'});
//                                        //跳转到注册成功页面
//                                        window.location.replace(json.data);
//                                    } else {
//
//                                        if (setOrGetCookie(mobile.val())) {
//                                            $('.piccode').css('display', 'block');
//                                        } else {
//                                            $('.piccode').css('display', 'none');
//                                        }
//                                        if (json.type == 'piccode') {
//                                            $(".piccode").find('.piccode-wrong').remove();
//                                            $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>" + json.text + "</span>");
//                                        }
//                                        if (json.type == 'username') {
//                                            $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txttelemail").parents('li'));
//                                        }
//                                        if (json.type == 'password') {
//                                            $("#mobilereg .txtpwd").parents('li').find('span.wrongts').remove();
//                                            $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtpwd").parents('li'));
//
//                                        }
//                                        if (json.type == 'repassword') {
//                                            $("#mobilereg .txtpwd2").parents('li').find('span.wrongts').remove();
//                                            $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtpwd2").parents('li'));
//                                        }
//                                        if (json.type == 'smscode') {
//                                            $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                                            $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                                        }
//                                        changcheckpic('sendsmsform_vpiccode');
//                                    }
//                                }, 'json');
//                                return false;
//                            }
//                        }, 'json');
//                    } else {
//                        if (!$("#mobilereg .txtyzm").val().length) {
//
//                            $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                            $("<span class='wrongts'><em class='lgbg'></em>请输入手机验证码</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                            return false;
//                        }
//                        if (!(parseInt($("#mobilereg .txtyzm").val().length) == 5 || parseInt($("#mobilereg .txtyzm").val().length) == 4)) {
//                            $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                            $("<span class='wrongts'><em class='lgbg'></em>请输入有效的验证码</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                            return false;
//                        }
//                        $.post('/userreg/mobilereg', $('#mobilereg').serializeArray(), function(json) {
//                            if (json.value) {
//                                //跳转到注册成功页面
//                                window.location.replace(json.data);
//                            } else {
//
//                                if (setOrGetCookie(mobile.val())) {
//                                    $('.piccode').css('display', 'block');
//                                    $(".validationBindedpiccode").val('');
//                                } else {
//                                    $('.piccode').css('display', 'none');
//                                }
//
//                                if (json.type == 'piccode') {
//                                    $(".piccode").find('.piccode-wrong').remove();
//                                    $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>" + json.text + "</span>");
//                                }
//                                if (json.type == 'username') {
//                                    $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txttelemail").parents('li'));
//                                }
//                                if (json.type == 'password') {
//                                    $("#mobilereg .txtpwd").parents('li').find('span.wrongts').remove();
//                                    $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtpwd").parents('li'));
//
//                                }
//                                if (json.type == 'repassword') {
//                                    $("#mobilereg .txtpwd2").parents('li').find('span.wrongts').remove();
//                                    $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtpwd2").parents('li'));
//                                }
//                                if (json.type == 'smscode') {
//                                    $("#mobilereg .txtyzm").parents('li').find('span.wrongts').remove();
//                                    $("<span class='wrongts'><em class='lgbg'></em>" + json.text + "</span>").appendTo($("#mobilereg .txtyzm").parents('li'));
//                                }
//                                changcheckpic('sendsmsform_vpiccode');
//                            }
//                        }, 'json');
//                    }
//                }
                //邮箱注册
                if (email.val()) {
                    if (!/^.{6,16}$/.test($("#emailreg .txtpwd").val()) || !/^.{6,16}$/.test($("#emailreg .txtpwd2").val())) {
                        return false;
                    }
                    if (!$('#ty02').prop("checked")) {
                        alert("请同意《百程旅行网服务网条款》");
                        return false;
                    }
                    $.post('/userreg/sendregmail', $('#emailreg').serializeArray(), function(json) {
                        if (json.value) {
                            alert(json.text);
                            //跳转到注册成功页面
                            window.location.replace(json.data);
                        } else {
                            ready("#sendsmsform_vpic2");
                            alert(json.text);
                        }
                    }, 'json');
                }
            }
        })
    });

    //密码强度
    $('.registerform').each(function(index, element) {
        var THIS = $(this);
        var cheakpass = THIS.find("[name=password]");
        var Bc_pw = THIS.find(".Bc_pw .icon");
        cheakpass.keyup(function() {
            var __th = $(this);
            __th.val(__th.val().replace(/(^\s*)|(\s*$)/g, ""));
            if (!__th.val()) {
                Primary();
                return;
            }
            var _r = checkPassword(__th);
            cheakpass.parents("dl").find(".tishi").remove();
            if (_r == -1) {
                cheakpass.addClass("Validform_error");
                $("<dd class='tishi'><div class='BC_tishi t02'><span class='New_icon a2'></span><span class='text red'>" + cheakpass.attr("errormsg") + "</span></div></dd>").appendTo(cheakpass.parents("dl"))
            } else {
                cheakpass.removeClass("Validform_error");
            }
            switch (_r) {
                case -1:

                    break;
                case 1:
                    Weak();
                    break;
                case 2:
                    Medium();
                    break;
                case 3:
                    Tough();
                    break;
                default:
                    Primary();
                    break;
            }

        });

        function Primary() {
            Bc_pw.attr('class', 'icon');
        }
        function Weak() {
            Bc_pw.attr('class', 'icon r');
        }
        function Medium() {
            Bc_pw.attr('class', 'icon z');
        }
        function Tough() {
            Bc_pw.attr('class', 'icon q');
        }

        function checkPassword(pwdinput) {
            var str = pwdinput.val();
            /*if(!str.match(/^[\da-zA-Z\/\\\-_\.]+?$/)){
             return -1;
             }*/
            if (str.length < 6) {
                return 0;
            }
            if (str.match(/^(\d{6,16}||[a-zA-Z]{6,16})$/)) {
                return 1;
            } else {
                var num = str.match(/\d/g);
                var az = str.match(/[a-zA-Z]/g);
                var zf = str.match(/[^\da-zA-Z]/g);
                if (num && az && zf) {
                    return 3;
                }
                if ((num && az) || (num && zf) || (az && zf)) {
                    return 2;
                }
            }
        }

    });

    //更换验证码
    $(".huan").click(function() {
        ready("#sendsmsform_vpic2");
    })

})

function ready(v) {
    $(v).attr("src", "/usercommon/checkcode/?t=" + new Date().getTime());
}

//切换验证码
function changcheckpic(id)
{
    $('#' + id).attr("src", "/usercommon/checkcode/?t=" + new Date().getTime());
}

function countDown(ele, n)
{
    if (!n) {
        ele.removeClass('disabled').html('重新获取');
    } else {
        ele.addClass('disabled');
        n--;
        ele.html(n + '秒后重新获取');
        setTimeout(function() {
            countDown(ele, n);
        }, 1000);
    }
}
