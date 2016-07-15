<!DOCTYPE html>
<html><head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>用户登录</title>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <!--公共样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/public.css">
        <!--公共样式-->
        <!--当前样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/passport.css">
        <!--        <link rel="stylesheet" type="text/css" href="{{ asset('plugins/wbox/wbox/wbox.css') }}" />
                <script type="text/javascript" src="{{ asset('/plugins/wbox/jquery1.4.2.js') }}"></script> 
                <script type="text/javascript" src="{{ asset('/plugins/wbox/mapapi.js') }}"></script> 
                <script type="text/javascript" src="{{ asset('/plugins/wbox/wbox.js') }}"></script>-->
    </head>
    <body id="loginpwd">
        <div class="passport_wrap">
            <div class="passport_pwdlogin">
                <span class="dllogo"><img src="/images/home/logo.png"></span>
                <div class="passport_login">
                    <span class="bgtop"></span>
                    <div class="passport_logincon loginBody" style="margin-top:0px;">
                        <div class="passport_logintab">
                            <ul>
                                <li class="on"><a href="javascript:void(0);">密码登录</a></li>
                                <li class=""><a href="javascript:void(0);">验证码登录</a></li>
                            </ul>
                        </div>

                        <form class="BC_showInputErrorBox" name="login" action="/Home/login/logTodo" method="post">
                            @if (session("info"))
                            <li>
                            <td colspan='2'>{{session("info")}}
                                @if (count($errors) > 0) 
                                <ul style='font:13px/20px 宋体'>
                                    @foreach ($errors->all() as $error)
                                    <li>{{$error}} </li>
                                    @endforeach
                                </ul>
                                @endif
                            </td>
                            </li>
                            @endif
                            
                            
                            <div style="display: block;" class="passport_logininfo">
                                <ul>


                                    <li>
                                        <span class="spinput">
                                            <input type="hidden" name="_token" value="{{csrf_token()}}">
                                            <input id="username" name="uname" class="txttelemail Bc_input required username" data-type="pw" fn="用户名" vali="mobile||email" value="" placeholder="请输入用户名" type="text">
                                        </span>
                                        <span class="wrongts"></span>
                                    </li>
                                    <li>
                                        <span class="spinput">
                                            <input id="password" name="password" class="txtpwd Bc_input password required" value="" placeholder="密码" fn="密码" type="password">
                                        </span>
                                    </li>
                                    <li id="login_yzm" style="display: block;">
                                        <span class="spinput">
                                            <input id="yzm" name="code" class="txtyzm Bc_input vCode required" fn="验证码" maxlength="6" value="" placeholder="验证码" type="text">
                                            <img id="checkpic" src="{{url('/Home/login/captcha').'/'.rand()}}" align="top" onclick="this.src = this.src.replace(/\d+$/, '') + Math.random();" style="margin-left:6px;">
                                        </span>
                                    </li>
                                </ul>
                                <!--<a href="javascript:void(0);"  >登&nbsp;&nbsp;录</a>-->
                                <input type="submit" id="btnlogin1" class="btnlogin"value="登陆">
                                <p class="wjpwd">
                                    <span class="fl autologin"><input name="chclogin" class="zdlogin" id="isRemember" value="1" checked="checked" type="checkbox"><i>自动登录</i></span>
                                    <a href="http://passport.baicheng.com/member/findpwd" target="_blank" class="fr btnwjpwd">忘记密码</a>
                                </p>
                            </div>

                        </form>



                        <div class="passport_otheruser">
                            <span class="syother">
                                <em class="fl"></em>
                                <i>使用其他账号登录</i>
                                <em class="fr"></em>
                            </span>
                            <span class="otherzh">
                                <a href="javascript:void(0);" onclick="taobaoLogin('taobao');" class="mr fl taob lgbg"></a>
                                <a href="javascript:void(0);" onclick="taobaoLogin('weixin');" class="mr weixin lgbg"></a>
                                <a href="javascript:void(0);" onclick="taobaoLogin('qq');" class="mr tengx lgbg"></a>
                                <a href="javascript:void(0);" onclick="taobaoLogin('weibo');" class="sina lgbg"></a>
                            </span>
                            <span class="otherts">还没有百程账号？<a href="/Home/user/register" target="_blank" class="btnreg">立即注册</a></span>
                        </div>
                    </div>
                    <span class="bgbot"></span>
                </div>
                <span class="copyright">Copyright © 1999-2016 baichengcom, Inc.All Rights Reserved. </span>
            </div>
        </div>

        <script src="/js/home/hm.js"></script><script src="/js/home/analytics_r.js" async="" type="text/javascript"></script><script src="/js/home/gtm_r.js" async=""></script><script id="errorTips" type="text/html">
            <div class="BC_tishi_box">
                <div class="errorTip"><span class="New_icon a2"></span>{txt}</div>
            </div>
        </script>
        <script id="otherTips" type="text/html">
            <div class="BC_tishi_box">
                <div class="unRegistered"><span class="New_icon a1"></span>{txt}</div>
            </div>
        </script>
        <script type="text/ecmascript" src="/js/home/jquery_r.js"></script>
        <!-- 公共JS -->

        <script type="text/javascript" src="/js/home/jquery_002_r.js"></script>

        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W7G2LV"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <script src="/js/jquery-1.8.3.min.js"></script>
        <!--<script src="/js/admin/login.js"></script>-->
        <script src="/js/home/login_index.js"></script>

    </body></html>