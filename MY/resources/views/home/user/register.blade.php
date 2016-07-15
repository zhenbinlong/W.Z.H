<!DOCTYPE html>
<html><head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <title>会员注册</title>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <!--公共样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/public.css">
        <!--公共样式-->
        <!--当前样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/passport.css">
        <link rel="stylesheet" type="text/css" href="{{ asset('plugins/wbox/wbox/wbox.css') }}" />
    </head>
    <body id="loginpwd">
        <div class="passport_wrap">
            <div class="passport_pwdlogin  smallh">
                <span class="dllogo"><img src="/images/home/logo.png"></span>
                <div class="passport_login">
                    <span class="bgtop"></span>
                    <div class="passport_logincon passport_loginconb">
                        <div class="passport_logintab">
                            <ul>
                                <li class="on"><a href="javascript:void(0);">手机注册</a></li>
                                <li class=""><a href="javascript:void(0);">邮箱注册</a></li>
                            </ul>
                        </div>
                        <div style="display: none;" class="passport_logininfo">
                            <form action="/Home/user/doregister" name="register" method="post" id="emailreg">
                                @if (session("info") or count($errors)>0)
                                <li>
                                <td colspan='2'>{{session("info")}}
                                    @if (count($errors) > 0) 
                                    <ul style='font:13px/20px 宋体'>
                                        @foreach ($errors->all() as $error)
                                        <li>{{$error}}</li>
                                        @endforeach
                                    </ul>
                                    @endif
                                </td>
                                </li>
                                @endif
                                <ul>
                                    <li>
                                        <span class="spinput">
                                            <input type="hidden" name="_token" value="{{csrf_token()}}">
                                            <input name="uname" id="_email" class="txtemail yanzheng validationBinded" placeholder="请输入用户名" ajaxulr="ajax.php?dddd" datatype="email" nullmsg="请输入邮箱" errormsg="邮箱格式不对！" value="{{$data["uname"] or ''}}" autocomplete="off" type="text">
                                        </span>
                                        <ul id="eSuggest" class="passCard hidden"></ul>
                                        <!-- <span class="wrongts"><em class="lgbg"></em>不能为空</span> -->
                                    </li>
                                    <li>
                                        <span class="spinput">
                                            <input class="txtpwd Bc_input Lose_focus P_7 password yanzheng cheakpass validationBinded" value="" placeholder="请输入密码" datatype="mima" nullmsg="请输入密码" errormsg="密码需要6-16位由字母、数字、符号组成" maxlength="16" name="password" type="password">
                                        </span>
                                    </li>
                                    <li>
                                        <span class="spinput">
                                            <input class="txtpwd2 Bc_input Lose_focus P_7 password yanzheng cheakpass validationBinded" value="" placeholder="请输入确认密码" datatype="mima" nullmsg="请输入确认密码" errormsg="密码需要6-16位由字母、数字、符号组成" maxlength="16" name="repassword" type="password">
                                        </span>
                                    </li>
                                    <li>

                                        <a href="javascript:void(0);" class="fr ghimgyzm huan">
                                            <em class="fr">&nbsp;&nbsp;&nbsp;</em></a>
                                        <i class="fr"><img src="{{url('/Home/user/captcha').'/'.rand()}}" align="top" onclick="this.src = this.src.replace(/\d+$/, '') + Math.random();" ></i>

                                        <span class="spinput">
                                            <input name="code" class="txtimgyzm yanzheng validationBinded" placeholder="请输入验证码" datatype="yzm" nullmsg="请输入验证码" errormsg="验证码不正确！" type="text">
                                        </span>                            
                                    </li>
                                </ul>
                                <span class="fl tytk">
                                    <input name="tongyi" class="fl chctytk" id="ty02" checked="checked" type="checkbox">
                                    <i for="ty02">
                                        同意《<a href="javascript:void(0);" class="btn_1">百程旅行网服务网条款</a>》
                                    </i>
                                </span>
                                <input type="submit" id="zc" class="btnlogin" value="注册">
                                <!--<a href="javascript:void(0);" class="btnlogin">注&nbsp;&nbsp;册</a>-->
                            </form>

                        </div>
                    </div>
                    <span class="bgbot"></span>
                </div>
                <span class="copyright">Copyright © 1999-2016 baichengcom, Inc.All Rights Reserved. </span>
            </div>
        </div>

        <div class="BC_layer YH" id="BC_layer" style="display:none">
            <div class="layer_frame">
                <div class="theme_01 w_620">
                    <div class="layer_hd clearfix "> <span class="layer_title">百程旅行网服务条款</span> <a class="layer_close" href="#"></a> </div>
                    <div class="L_rules mt10">
                        <div class="r_info">
                            <h3>1、服务条款的确认和接纳</h3>
                            <p>百程旅行网由北京百程科技发展有限公司运营，用户按照注册页面提示填写信息、阅读同意本协议且完成全部注
                                册程序，或以百程旅行网允许的其他方式成为百程旅行网注册用户，即表示用                       
                                户已知晓并同意按照本服务条款就使用百程旅行网提供的服务与北京百程科技发展有限公司达成具有法律约束力的协议。</p>
                            <h3>2、服务提供</h3>
                            <p>百程旅行网通过国际互联网络为用户提供网络服务。服务内容包括但不限于提供信息资讯、销售商品或服务等，百程旅行网上部分服务由具有相应资质的第三方提供。
                                百程旅行网不保证网络服务一定会满足用户的所有使用要求，也不保证网络服务不会短暂中断，对网络服务的及时性、安全性、准确性也不作担保。百程旅行网保留随时修改或中断服务的权利，且无需提前知会用户。
                                为使用上述服务，用户必须自行配备访问国际互联网所需软硬件设备并承担相关费用，同时需向百程旅行网提供详尽准确的个人资料并在此后不断更新个人资料。</p>
                            <h3>3、服务条款的修改</h3>
                            <p>百程旅行网有权根据运营需要随时对服务条款进行修改，修改后的服务条款一经在百程旅行网上公示即生效，百
                                程旅行网不再另行向用户发送修改通知。用户可随时登录百程旅行网查阅最                     
                                新服务条款，用户有义务不时关注并阅读最新版的服务条款及网站公告。用户如果不同意服务条款的修改，可以主动取消或放弃已经获得的网络服务；如果用户继续
                                享用网络服务，则视为用户已经接受服务条款的修改。</p>
                            <h3>4、知识产权声明</h3>
                            <p>百程旅行网对所提供的网络服务及网络服务所使用的软件系统（包含受知识产权或其他法律保护的资料）享有相
                                应的权利。

                                百程旅行网发布的任何资讯及内容，受到著作权法、商标法、专利法或其他法律的保护；未经百程旅行网明示授权许可，用户不得进行修改、出租、散布或衍生其他
                                作品。

                                百程旅行网的名称、标志、图片以及百程旅行网上的其他内容，均由百程旅行网或相关内容提供方享有知识产权。未经百程旅行网合法书面授权，任何人不得使用、
                                复制或用作其他用途。

                                用户应对其通过本网站上传或发布内容的真实性、合法性负责，保证对该等内容拥有完整的、无瑕疵的所有权和知识产权或拥有完整的授权，并不存在任何侵犯第三
                                方合法权益的情形，包                        
                                括但不限于著作权、肖像权、商标权、专利权、企业名称权、商号权、商业秘密、个人隐私等权利。所有因用户非法上传内容而给任何第三方或百程旅行网造成损害
                                的均由用户承担全部责任，百程旅行网不承担任何责任。</p>
                            <h3>5、用户信息保护</h3>
                            <p>用户使用百程旅行网服务过程中，根据具体交易需要，用户需向百程旅行网提供个人信息。尊重用户个人隐私是
                                百程旅行网的一项基本政策，百程旅行网将采取一切必要合理的措施保护用                        
                                户提供的个人信息，未经用户同意百程旅行网不会向第三方透露用户的个人信息，但以下情况除外：<br>
                                （1）经您事先同意，向第三方披露。<br>
                                （2）根据法律的有关规定或者行政或司法机构的要求，向第三方                        或者行政、司法机构披露。<br>
                                （3）如您出现违反中国有关法律、法规或者百程旅行网服务协议或相关规则的情况，需要向第三方披露。<br>
                                （4）为提供您所要求的产品和服务，而必须和第三方分享您的个人信息。<br>
                                （5）其它百程旅行网根据法律、法规或者网站政策认为合适的披露。<br>
                                以下情况造成个人信息外泄的，百程旅行网不负任何责任：<br>
                                （1）用户将个人密码告知他人或与他人共享注册账户。<br>
                                （2）政府部门、司法机关等依照法定程序要求本网站披露个人信息的。<br>
                                （3）任何由于计                        
                                算机问题、黑客攻击、计算机病毒侵入或发作、因政府部门管制而造成的暂时性关闭等影响网络正常经营的不可抗力而造成的个人信息泄露、丢失、被盗用或被篡改
                                等。<br>
                                （4）由于本网站链接的其他网站所造成的个                        人信息泄露。</p>
                            <h3>6、用户的账号，密码和安全性</h3>
                            <p>用户注册后将获得百程旅行网的账号及密码，用户应当妥善账号及密码并对通过账号进行的行为负责。用户若发现任何非法使用用户账号或安全漏洞，应立即通告百程旅行网。</p>
                            <h3>7、邮件、短彩信服务规则</h3>
                            <p>用户同意百程旅行网有权通过邮件、短信、彩信等形式向用户发送订单信息、促销活动公告等，如果用户不想接收来自百程旅行网除订单信息以外的邮件和短信，用户需及时通知百程旅行网。</p>
                            <h3>8、责任限制</h3>
                            <p>百程旅行网对于用户因使用网络服务而遭受的任何直接、间接、偶然、特殊及继起的损害不承担责任，亦不对用户所发布信息的删除或储存失败承担责任。</p>
                            <h3>9、用户义务</h3>
                            <p>用户使用网络服务过程中必须遵循以下义务：发布信息时必须符合中国有关法规，不传输任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽等信息资料。
                                不使用网络服务进行非法用途，如教唆他人实施犯罪或侵权行为。不干扰或破坏网络服务或与网络服务相连的服务器和网络。遵守所有涉及使用网络服务的网络协议、规定和程序。
                                用户须对自己在使用服务过程中的行为承担法律责任。若用户违反上述任何义务，百程旅行网有权作出独立判断立即取消用户服务账号，并保留追究用户法律责任的权利。用户在百程旅行网的使用记录将作为用户违反法律的证据。</p>
                            <h3>10、法律适用及争议解决</h3>
                            <p>本服务条款的生效、履行、解释及争议的解决均适用中华人民共和国法律，如发生争议应提交北京仲裁委员会裁决，仲裁裁决是终局的。本服务条款因与中华人民共和国现行法律相抵触而导致部分无效，不影响其他部分的效力。</p>
                        </div>
                        <div class="b_btn"> <a href="#" class="New_btn btn_d d2 YH layer_close">确定</a> </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="{{ asset('/plugins/wbox/jquery1.4.2.js') }}"></script> 
        <script type="text/javascript" src="{{ asset('/plugins/wbox/mapapi.js') }}"></script> 
        <script type="text/javascript" src="{{ asset('/plugins/wbox/wbox.js') }}"></script>
        <script src="/js/home/register.js"></script>
        <script src="/js/home/hm_r.js"></script>
        <script src="/js/home/analytics_r.js" async="" type="text/javascript"></script>
        <script src="/js/home/gtm_r.js" async=""></script>
        <!--<script type="text/ecmascript" src="/js/home/jquery.js"></script>-->
        <!--<script src="/js/home/fun.js"></script>-->
        <!-- 公共JS -->
        <script type="text/javascript" src="/js/home/zt_login.js"></script>
        <script type="text/javascript">
                                            $(function() {
                                                $(".passport_logintab li").click(function() {
                                                    $(".passport_logintab li.on").removeClass("on");
                                                    $(this).addClass("on");
                                                });
                                                var tabs = $(this).find(".passport_logintab li");
                                                var items = $(this).find(".passport_logininfo").hide();
                                                tabs.click(function(e) {
                                                    var index = tabs.index($(this));
                                                    $(".holiday_mask").show();
                                                    items.hide().eq(index).show();
                                                    e.preventDefault();
                                                    //$("html").css({"height":"100%","overflow":"hidden"});
                                                }).eq(0).click();

                                            });
        </script>
        <script type="text/javascript" src="/js/home/jquery_002_r.js"></script>
        <script>
                                            var result;
                                            $(document).ready(function() {
                                                $('.tab_tit li').click(function() {
                                                    var i = $(this).index();
                                                    $('.tab_tit').children().removeClass("tit_cur");
                                                    $('.tab_tit li').eq(i).addClass('tit_cur');
                                                    $('.tab_con').children().removeClass('con_cur');
                                                    $('.tab_con li.sub').eq(i).addClass('con_cur');
                                                });

                                                //百程服务条款弹出层
                                                $(".btn_1").click(function() {
                                                    var x = layerbox.show({
                                                        ifmID: "#BC_layer",
                                                        type: "move",
                                                        onClose: function(e) {
                                                        }
                                                    });
                                                });


                                                $(".validationBindedpiccode").blur(function() {
                                                    var piccode = $(this).val();
                                                    if (!piccode.length) {
                                                        $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>请输入图形验证码</span>");
                                                    } else {
                                                        $(".piccode").find('.piccode-wrong').remove();
                                                    }
                                                    if (/^(\d){4}$/.test(piccode)) {
                                                        $.post('http://passport.baicheng.com/userlogin/checkpic', {piccode: piccode}, function(json) {
                                                            if (!(json.value)) {
                                                                $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>" + json.text + "</span>");
                                                            } else {
                                                                $(".piccode").find('.piccode-wrong').remove();
                                                            }
                                                        }, 'json');
                                                    } else {
                                                        $('.piccode').append("<span class='wrongts piccode-wrong'><em class='lgbg'></em>请输入有效的图形验证码</span>");
                                                    }
                                                });
                                            });
        </script>
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W7G2LV"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start':
                            new Date().getTime(), event: 'gtm_r.js'});
                var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                        '//www.googletagmanager.com/gtm_r.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-W7G2LV');</script>
        <!-- End Google Tag Manager -->

        <script id="" type="text/javascript">var _hmt = _hmt || [];
            (function() {
                var a = document.createElement("script");
                a.src = "//hm.baidu.com/hm_r.js?b6bb86d105094a4ee62b01425cdc69a1";
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            })();</script>
    </body>
</html>