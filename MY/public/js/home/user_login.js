
function setOrGetCookie(phone){
    if($.cookie(phone)){
        if((parseInt($.cookie(phone))+1) >3 ){ //错误三次返回true;
            return true;
        }
        $.cookie(phone,parseInt($.cookie(phone))+1,{path: '/'});
    }else{
        $.cookie(phone,1,{path: '/'});
    }
}
var loginBox = $('.loginBody');
//将验证过的账号保持下来，不用重复查库验证
var usernameLogin = [];
var usernameRegister = [];
// 登陆
$("#btnlogin1").on('click',function(){
    var type = 'pw';
    var name = $('#username').val();
    var password = $('#password').val();
    var smsCode = '';
    var isRemember = $('#isRemember').prop('checked')?1:0;
    login(type,name,password,smsCode,isRemember);
    return false;
});

$("#btnlogin2").on('click',function(){
    var type = 'sms';
    var name = $('#tel').val();
    var password = '';
    var smsCode = $('.smsCodeInp').val();
    var isRemember = $('#isRememberTel').prop('checked')?1:0;
    login(type,name,password,smsCode,isRemember);
    return false;
});

function login(type,name,password,smsCode,isRemember){
    //帐号密码登录
    if(type=='pw')
    {
        loginBox.find('.username').trigger('blur');
    }
    if(type=='pw' && name && password){
        $.post('/userlogin/login',{username:name,password:password,'checkpic':$('.vCode').val(),isRemember:isRemember},function(json){
            if($.inArray(name,usernameRegister) > -1 ){
                tipsAppend('.username', 'tip', '此用户名还未注册，请<a href="/userreg">注册</a>后登录');
                return false;
            }else if($.inArray(name,usernameLogin) > -1 ){
                tipsClear('.username');
            }
            //用户不存在
            if(json.value==-1){
                tipsAppend('.username', 'tip', '此用户名还未注册，请<a href="/userreg">注册</a>后登录');
                return false;
            }

            //登录成功
            if(json.value){
                window.location.replace(json.data);
                return false;
            }
            changcheckpic('checkpic'); //刷新验证码

            //是否需要验证码
            if(json.errNum && json.errNum>=5){
                //显示验证码
                $('#login_yzm').show();
                tipsAppend('.username', 'error',json.text);
                return false;
            }

            //是否锁定
            if(json.lock){
                //锁定处理
                tipsAppend('.username', 'error',json.text);
                return false;
            }

            tipsAppend('.username', 'error',json.text);
        },'json');
    }

    //手机短信码登录
    if(type=='sms' && name && smsCode){
        if($(".piccode").css('display')=='block' && (parseInt($.cookie(name)) >=3)){
            var piccode = $('.validationBinded').val();
            if(!piccode.length){
                tipsAppend('.validationBinded','tip','请输入图形验证码');
                return false;
            }
            $.post('userlogin/checkpic',{piccode:piccode},function(json){
                if(!(json.value)){
                    tipsAppend('.validationBinded','tip',json.text);
                }else{
                    tipsClear('.validationBinded');
                    $.post('/userlogin/smslogin',{username:name,code:smsCode,isRemember:isRemember},function(json){
                        if(json.value){
                            $.cookie(name,0,{path: '/'});
                            window.location.replace(json.data);
                        }else{

                            if(setOrGetCookie(name)){
                                $('.piccode').css('display','block');
                            }else{
                                $('.piccode').css('display','none');
                            }

                            if(json.type=='piccode'){
                                tipsAppend('.validationBinded','tip',json.text);
                            }else{
                                tipsClear('.validationBinded');
                            }
                            if(json.type=='username'){
                                tipsAppend('.txttele','tip',json.text);
                            }else{
                                tipsClear('.txttele');
                            }
                            if(json.type=='smscode'){
                                tipsAppend('.txtyzm','tip',json.text);
                            }else{
                                tipsClear('.txtyzm');
                            }
                            changcheckpic('sendsmsform_vpic');
                        }
                    },'json');
                }
            },'json');
        }else{
            tipsClear('.validationBinded');
            $.post('/userlogin/smslogin',{username:name,code:smsCode,isRemember:isRemember},function(json){
                if(json.value){
                    $.cookie(name,0,{path: '/'});
                    window.location.replace(json.data);
                }else{
                    if(setOrGetCookie(name)){
                        $('.piccode').css('display','block');
                    }else{
                        $('.piccode').css('display','none');
                    }

                    if(json.type=='piccode'){
                        tipsAppend('.validationBinded','tip',json.text);
                    }else{
                        tipsClear('.validationBinded');
                    }
                    if(json.type=='username'){
                        tipsAppend('.txttele','tip',json.text);
                    }else{
                        tipsClear('.txttele');
                    }
                    if(json.type=='smscode'){
                        tipsAppend('.txtyzm','tip',json.text);
                    }else{
                        tipsClear('.txtyzm');
                    }
                    changcheckpic('sendsmsform_vpic');
                }
            },'json');
        }


    }
    if(!name && type=='sms'){
        tipsAppend('.mobile', 'error', '手机号不能为空');
    }else{
        if(!(/(13|14|15|17|18)[0-9]{9}/.test(name)) && type=='sms'){
            tipsAppend('.mobile', 'error', '请输入正确的手机号');
        }else{
            tipsClear('.mobile');
            if(smsCode == '' && type=='sms'){
                tipsAppend('.smsCodeInp', 'error', '手机验证码不能为空')
            }else if(!/^[\d]{4,5}$/.test(smsCode) && type=='sms'){
                tipsAppend('.smsCodeInp', 'error', '手机验证码不正确')
            }else{
                tipsClear('.smsCodeInp');
            }
        }
    }
}
loginBox.find('.username').on('focus', function(){
    tipsClear('.username');
});

// 用户名验证
loginBox.find('.username').on('blur', function(){
    $(this).val($.trim($(this).val()));
    var mobilePattern = /(13|14|15|17|18)[0-9]{9}/;
    var mailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var val = $.trim($(this).val());
    var type = $(this).attr('data-type');
    if((mobilePattern.test(val) || mailPattern.test(val)) && type=='pw'){
        if($.inArray(val,usernameRegister) > -1 ){
            tipsAppend('.username', 'tip', '此用户名还未注册，请<a href="/userreg">注册</a>后登录');
            return false;
        }else if($.inArray(val,usernameLogin) > -1 ){
            tipsClear('.username');
            return true;
        }
        $.ajax({
            url: '/usercommon/userisbeing',
            type: 'get',
            dataType : 'json',
            data : {username:val},
            cache: false,
            success: function(res){
                //loginBox.find('.unRegistered').show();
                console.log(res);
                // 如果未注册..
                if(!res.value){
                    tipsAppend('.username', 'tip', '此用户名还未注册，请<a href="/userreg">注册</a>后登录');
                    usernameRegister.push(val);
                }else{
                    usernameLogin.push(val);
                }
                //是否显示验证码
                if(res.errnum<=3){
                    $('#login_yzm').hide();//隐藏
                }else{
                    //changcheckpic('checkpic'); //刷新验证码
                    $('#login_yzm').show();//显示
                }
            }
        });
    }else{
        $('#login_yzm').hide();//隐藏
        tipsAppend('.username', 'tip', '用户名格式不正确');
    }
});

loginBox.find('.getCode').on('click', function(){
    /*
    var that = $(this), n = 60;
    var pattern = /(13|14|15|17|18)[0-9]{9}/;
    var userName = $('.username').val();
    if(pattern.test(userName) && !that.hasClass('disabled')){
        //打开发短信框
        layerbox.show({
            ifmID:"#sendsmsform",
            type:"move",
            onClose:function(){ //关闭
                return false;
            }
        });

        //刷新验证码
        changcheckpic('sendsmsform_vpic');
    }
    */
});

function countDown(ele, n)
{
    if(!n) {
        ele.removeClass('disabled').html('重新获取');
    } else {
        n--;
        ele.html(n+'秒后重新获取');
        setTimeout(function() {
            countDown(ele, n);
        },1000);
    }
}

function tipsClear(parent){
    loginBox.find(parent).removeClass('redk');
    loginBox.find(parent).parent('.spinput').next('span').html('');

}
function tipsAppend(parent, type, html){
    loginBox.find(parent).addClass('redk');
    loginBox.find(parent).parent('.spinput').next('span').html("<em class='lgbg'></em>"+html);
}

function showInputError(o,txt,isPos){
    if(!o.hasClass("BC_Validation_Radio")){
        if(o.get(0).tagName.toLowerCase()=="select"){
            o.parents(".BC_Control_Select_original").find("span").addClass("BC_Input_error");
        }else{
            o.addClass("BC_Input_error");
        }
    }
    var tips = o.parents(".BC_showInputErrorBox").find(".tips .BC_tishi_box");
        tips.remove();
    var html=$('<div class="BC_tishi_box"><div class="BC_tishi t02"><span class="New_icon a2"></span><span class="text"></span></div></div>')
        .find(".text").text(txt).end()
        .appendTo(o.parents(".BC_showInputErrorBox").find('.tips'));
}
function showInputRight(o){
    if(o.get(0).tagName.toLowerCase()=="select"){
        o.parents(".BC_Control_Select_original").find("span").removeClass("BC_Input_error");
    }else{
        o.removeClass("BC_Input_error");
    }
    o.parents(".BC_showInputErrorBox").find(".BC_tishi").remove();
}

//切换验证码
function changcheckpic(id)
{
    $('#'+id).attr("src", "/usercommon/checkcode/?t=" + new Date().getTime());
}

//回车提交表单
$(document).on('keydown', function(e){
    if(e.keyCode==13){
        loginBox.find('.submit').click();
    }
})

//第一次登录更新密码
function smsfirstlogin_update()
{
    if(!(/^[\w]{6,16}$/.test($('#smsfirstlogin_password').val()))){
        alert('密码需要6-16为字母、数字或下划线组成');
        return;
    }
    $.post('/userfindpwd/updatepwd',$('#updatepwd').serializeArray(),function(json){
        if(json.value){
            window.location.replace('/member/showprofile');
            return;
        }
        alert(json.text);
    },'json');
}

