@include("/home.common.header");

<!--header-->
<script type="text/javascript">

    $(document).ready(function() {
        $.ajax({
            url: 'http://www.baicheng.com/head-jsonp?',
            type: 'get',
            async: false,
            dataType: 'jsonp',
            success: function(res) {
                $('body').prepend('<div id="djHeader"></div>');
                $('#djHeader').html(res.html);
                $(".bc_header").addClass("w1200");
            }
        });

    });
</script>

<!--/header-->
<!--bc_main-->
<div class="BC_main M_bt20 YH">
    <!--流程图示-start-->
    <div class="steps steps_2 fr">
        <ul>
            <li class="i1 cur"><span>选择</span></li>
            <li class="i2"><span>填写</span></li>
            <li class="i3"><span>提交</span></li>
            <li class="i4"><span>完成</span></li>
        </ul>
        <div class="step_process">
        </div>
    </div>
    <div class="clear">
    </div>
    <!--/流程图示-end-->
    <!--订单详情-start-->
    <div class="box-1 bf_total mt20">
        <div class="box_hd">
            <h2 class="fl">
                <a href="#">
                    【迷恋西沙】天津-泰国普吉甲米5晚6天跟团游</a></h2>
            <div class="fr totals">
                <span class="people">
                    <b>1</b>成人 <b>1</b>儿童
                </span><span class="tpri">总价：</span><em class="price_ico red2">￥</em><b class="price red2" id="totalPrice1">6998</b>

            </div>
        </div>
        <!--显示隐藏层-start-->
        <div class="box_con pro_bshow">
            <!--签证-start-->

            <!--签证-end-->
            <!--附加产品-start-->

            <!--附加产品-end-->
            <!--保险-start-->

            <!--保险-end-->
        </div>
        <!--显示隐藏层-end-->
    </div>
    <!--订单详情-end-->
    <form>
        <!--出行人信息-start-->
        <div class="box-1 bform_box mt20 peoinfo">
            <div class="box_tit2">
                <strong>出行人信息</strong></div>
            <div class="box_con pr">
                <div class="bform_item"><div class="bform_dt">第1位出行人</div><div class="bform_dd"><ul class="bform_con"><li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>姓名</span><div class="input_area"><input id="name1" class="BC_finput bform_inp w_160 validationBinded" type="text"><label class="bform_che ml20"><input flag="isLink" cnum="1" class="mr5" type="radio">订单联系人</label></div></li> <li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>姓氏（拼音）</span><div class="input_area"><input id="xing1" class="BC_finput bform_inp w_105 validationBinded" type="text"></div><span class="bform_itit">名字（拼音）</span><div class="input_area pr"><input class="BC_finput bform_inp w_105 validationBinded" id="ming1" type="text"></div></li><li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>手机号码</span><div class="input_area"><input id="tel1" class="BC_finput bform_inp w_250 validationBinded" type="text"></div></li><li class="bform_itli"><span class="bform_itit">E - Mail</span><div class="input_area"><input id="email1" class="BC_finput bform_inp w_250 validationBinded" type="text"></div></li></ul></div></div><div class="bform_item"><div class="bform_dt">第2位出行人</div><div class="bform_dd"><ul class="bform_con"><li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>姓名</span><div class="input_area"><input id="name2" class="BC_finput bform_inp w_160 validationBinded" type="text"><label class="bform_che ml20"><input flag="isLink" cnum="2" class="mr5" type="radio">订单联系人</label></div></li> <li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>姓氏（拼音）</span><div class="input_area"><input id="xing2" class="BC_finput bform_inp w_105 validationBinded" type="text"></div><span class="bform_itit">名字（拼音）</span><div class="input_area pr"><input class="BC_finput bform_inp w_105 validationBinded" id="ming2" type="text"></div></li><li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>手机号码</span><div class="input_area"><input id="tel2" class="BC_finput bform_inp w_250 validationBinded" type="text"></div></li><li class="bform_itli"><span class="bform_itit">E - Mail</span><div class="input_area"><input id="email2" class="BC_finput bform_inp w_250 validationBinded" type="text"></div></li></ul></div></div>
                <!--提示层-start-->
                <div class="tipsimg pa">
                    <img src="@@@@@/tipsimg.jpg"></div>
                <!--提示层-end-->
            </div>
        </div>
        <!--出行人信息-end-->
        <!--订单信息-start-->
        <div class="box-1 bform_box mt20">
            <div class="box_tit2">
                <strong>订单信息</strong></div>
            <div class="box_con">
                <div class="bform_item">
                    <div class="bform_dt">
                        订单联系人</div>
                    <div class="bform_dd">
                        <ul class="bform_con">
                            <li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>姓名</span>
                                <div class="input_area">
                                    <input name="orderName" id="orderName" class="BC_finput bform_inp w_250 validationBinded" placeholder="中文姓名" value="1577593753" type="text">
                                </div>
                            </li>
                            <li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>手机号码</span>
                                <div class="input_area">
                                    <input name="orderTel" id="orderTel" class="BC_finput bform_inp w_250  validationBinded" placeholder="手机号码" type="text">
                                </div>
                            </li>
                            <li class="bform_itli"><span class="bform_itit"><em class="purple2 bf_sign">*</em>E
                                    - Mail</span>
                                <div class="input_area">
                                    <input name="orderMail" id="orderMail" class="BC_finput bform_inp w_250  validationBinded" placeholder="邮箱" type="text">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bform_item dmethod">
                    <div class="bform_dt">
                        配送信息</div>
                    <div class="bform_dd">
                        <ul class="bform_con">
                            <li class="bform_itli"><span class="bform_itit">配送方式</span>
                                <div class="input_area mt10">
                                    <label class="bform_che mr20">
                                        <input checked="checked" class="mr5" tag="1" branceid="2" name="radioSend" type="radio">快递
                                    </label>
                                    <label class="bform_che">
                                        <input class="mr5" branceid="2" tag="2" name="radioSend" value="1" type="radio">北京自取
                                    </label>
                                </div>
                            </li>
                            <li id="peisong1" class="bform_itli pt0"><span class="bform_itit lh20">配送地址</span>
                                <div class="input_area" id="send">
                                    <select class="bform_sel validationBinded" id="sel_ProvinceList">

                                        <option selected="selected" value="0">
                                            请选择省份</option>

                                        <option value="1">
                                            北京</option>

                                        <option value="2">
                                            天津</option>

                                        <option value="3">
                                            河北</option>

                                        <option value="4">
                                            山西</option>

                                        <option value="5">
                                            内蒙古</option>

                                        <option value="6">
                                            辽宁</option>

                                        <option value="7">
                                            吉林</option>

                                        <option value="8">
                                            黑龙江</option>

                                        <option value="9">
                                            上海</option>

                                        <option value="10">
                                            江苏</option>

                                        <option value="11">
                                            浙江</option>

                                        <option value="12">
                                            安徽</option>

                                        <option value="13">
                                            福建</option>

                                        <option value="14">
                                            江西</option>

                                        <option value="15">
                                            山东</option>

                                        <option value="16">
                                            河南</option>

                                        <option value="17">
                                            湖北</option>

                                        <option value="18">
                                            湖南</option>

                                        <option value="19">
                                            广东</option>

                                        <option value="20">
                                            广西</option>

                                        <option value="21">
                                            海南</option>

                                        <option value="22">
                                            重庆</option>

                                        <option value="23">
                                            四川</option>

                                        <option value="24">
                                            贵州</option>

                                        <option value="25">
                                            云南</option>

                                        <option value="26">
                                            西藏</option>

                                        <option value="27">
                                            陕西</option>

                                        <option value="28">
                                            甘肃</option>

                                        <option value="29">
                                            青海</option>

                                        <option value="30">
                                            宁夏</option>

                                        <option value="31">
                                            新疆</option>

                                        <option value="32">
                                            台湾</option>

                                        <option value="33">
                                            香港</option>

                                        <option value="34">
                                            澳门</option>

                                    </select>
                                    <select class="bform_sel validationBinded" id="sel_CityList">
                                        <option selected="selected" value="0">请选择城市</option>
                                    </select>
                                    <select class="bform_sel validationBinded" id="sel_TownList">
                                        <option selected="selected" value="0">请选择区县</option>
                                    </select>
                                    <input value="请输入" class="msg_qsr validationBinded" defaultvalue="请输入" id="qitatown_txt" style="display: none; color: rgb(153, 153, 153);" type="text">
                                    <div class="bform_adi">
                                        <input id="txt_DetailAddress" class="BC_finput bform_inp w_400 validationBinded" type="text">
                                    </div>
                                </div>
                            </li>
                            <li id="peisong2" style="display: none;" class="bform_itli pt0"><span class="bform_itit lh20">
                                    配送地址</span>
                                <div class="input_area">
                                    <p class="bform_add" id="self">
                                        北京市朝阳区通惠河畔文化创意产业园1131号君天大厦二层</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--发票-start-->
                <div class="bform_item botb0">
                    <span class="bform_dt">发票信息</span>
                    <div class="bform_dd inv_box">
                        <p class="inv_top">
                            <span class="bform_fp" id="invoiceDetail">不需要发票</span> <a id="updateInvoice" class="bform_edit" href="javascript:;">[修改]</a>
                        </p>
                        <div class="invoice" id="invoiceInfo" style="display: none;">
                            <ul class="bform_con">
                                <li class="bform_itli"><span class="bform_itit">是否需要发票</span>
                                    <div class="input_area mt10">
                                        <label class="bform_che mr20">
                                            <input checked="checked" class="mr5" name="receipt" id="invoiceNeed" tag="1" type="radio">是
                                        </label>
                                        <label class="bform_che">
                                            <input class="mr5" name="receipt" id="invoiceNo" tag="2" type="radio">否
                                        </label>
                                    </div>
                                </li>
                                <li class="bform_itli pt0" id="titelType"><span class="bform_itit lh20"><em class="purple2 bf_sign">
                                            *</em>客户类型</span>
                                    <div class="input_area">
                                        <select class="bform_sel validationBinded" id="seltitelType">
                                            <option value="1" selected="selected">个人</option>
                                            <option value="2">公司</option>
                                        </select>
                                    </div>
                                </li>
                                <li id="invoiceTitle" class="bform_itli pt0"><span class="bform_itit"><em class="purple2 bf_sign">
                                            *</em>发票抬头</span>
                                    <div class="input_area">
                                        <input id="txtinvoiceTitle" class="BC_finput bform_inp w_250 validationBinded" type="text">
                                        <div class="red2 mt5">
                                            遵循税务局相关规定，发票抬头必须为个人姓名或公司名称</div>
                                    </div>
                                </li>
                                <li id="invoiceType" class="bform_itli"><span class="bform_itit lh20"><em class="purple2 bf_sign">
                                            *</em>发票类型</span>
                                    <div class="input_area">
                                        <select class="bform_sel validationBinded" id="selinvoiceType">
                                            <option selected="selected" value="1">团款</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="bform_itli"><span class="bform_itit lh20">&nbsp;</span>
                                    <div class="input_area">
                                        <a href="javascript:;" id="sureInvoice" class="pro_sub fr mr50"><span>确定</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--发票-end-->
            </div>
        </div>
        <!--订单信息-end-->
        <!--优惠信息-start-->

        <div class="couponyh_new coupon_box">
            <h3 class="tit">
                优惠信息<span id="tipYH"></span>
            </h3>
            <div class="cpnew_nr">
                <ul class="cp_nav">
                    <li class="cur">优惠券</li>
                    <li>百程卡</li>
                </ul>
                <!-- 优惠券 -->
                <div class="cp_nr" style="display: block;">

                    <script type="text/javascript">
                        function unUseCoupon(CouponID, CouponCode, CouponMoney, TotalPrice) {

                            $("#YHPrice").html("");
                            var CurrentShouldPay = parseFloat($("#hidTotalPrice").val()) - parseFloat($("#hidBCCard").val());
                            $("#totalPrice1,#totalPrice2").html(CurrentShouldPay);
                            $("#hidBCCard").val();

                            $("#CouponID").val('0');
                            $("#CouponCode").val('');
                            $("#UseMoney").val('0');
                        }
                        function useCoupon(CouponID, CouponCode, CouponMoney, TotalPrice) {
                            if (parseInt($("#hidBCCard").val(), 10) > 0) {
                                $(".checkon").removeClass('checkon');
                                alert("优惠券与百程卡不能同时使用");
                                return false;
                            }
                            $("#YHPrice").html("优惠金额：<b><em>￥</em>" + CouponMoney + "</b>");
                            var CurrentShouldPay = parseFloat($("#hidTotalPrice").val()) - parseFloat($("#hidBCCard").val());
                            CurrentShouldPay = CurrentShouldPay - parseFloat(CouponMoney);
                            $("#totalPrice1,#totalPrice2").html(CurrentShouldPay);

                            $("#CouponID").val(CouponID);
                            $("#CouponCode").val(CouponCode);
                            $("#UseMoney").val(CouponMoney);

                        }
                    </script>
                    <input class="validationBinded" value="http://passport.baicheng.com//usercommon/mycouponhtml?protype=2&amp;country=188&amp;prodid=48176&amp;money=6998" type="hidden">

                    <script type="text/javascript">

                        function InitCoupon(TotalPrice)
                        {
                            if (parseFloat($(" .user_youhuixq ul").attr("TotalPrice")) == parseFloat(TotalPrice))
                            {
                                return;
                            }
                            var myCouponContainer = $(" .user_youhuixq ul li:last");

                            $(" .user_youhuixq ul li:not(:last)").remove();
                            $(" .user_youhuixq ul").attr("TotalPrice", TotalPrice);
                            $("#hidOrderMoney").val(TotalPrice);
                            if (parseFloat(TotalPrice) > 0)
                            {
                                $.ajax({
                                    url: "http://passport.baicheng.com/usercommon/mycoupon?protype=2&country=188&prodid=48176&money=" + TotalPrice,
                                    dataType: "jsonp",
                                    async: false,
                                    jsonp: "callback",
                                    success: function(AllCoupon) {
                                        if (AllCoupon.length > 0)
                                        {
                                            for (var i in AllCoupon) {
                                                var coupon = AllCoupon[i];
                                                $('   <li>' +
                                                        '   <a href="javascript:void(0);" class="fl check"></a><em></em>元' +
                                                        '   <i></i>' +
                                                        '   <b></b>' +
                                                        ' </li>').attr("CouponID", coupon.CouponID)
                                                        .find("em").html(coupon.Money).end()
                                                        .find("i").html("[" + coupon.Desc + "]").end()
                                                        .find("b").html("使用期限 " + coupon.Begin + " - " + coupon.End).end()
                                                        .find("a").attr({"TotalPrice": TotalPrice, "CouponMoney": coupon.Money, "CouponID": coupon.CouponID, "CouponCode": coupon.CouponCode})
                                                        .bind('click', function() {
                                                            if ($(this).hasClass('checkon'))
                                                            {
                                                                $(this).removeClass('checkon');
                                                                unUseCoupon($(this).attr("CouponID"), $(this).attr("CouponCode"), $(this).attr("CouponMoney"), $(this).attr("TotalPrice"));
                                                            }
                                                            else
                                                            {
                                                                $(".checkon").removeClass('checkon');
                                                                $(this).addClass('checkon');
                                                                useCoupon($(this).attr("CouponID"), $(this).attr("CouponCode"), $(this).attr("CouponMoney"), $(this).attr("TotalPrice"));
                                                            }
                                                        }).end()
                                                        .insertBefore(myCouponContainer);
                                            }
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                                        console.log('error');
                                    }
                                })
                            }
                        }

                        $(function() {
                            var cuid = 0;
                            //检测登录状态
                            $.getJSON('http://passport.baicheng.com/usercommon/islogin?callback=?', {}, function(json) {
                                if (json.value) {
                                    $('#divLoginBox').show();
                                    $('#divNoLoginBox').hide();
                                    cuid = json['uid'];
                                }
                                else
                                {
                                    $('#divLoginBox').hide();
                                    $('#divNoLoginBox').show();
                                }
                            });
                            var countDownEvent = function(timer, t) {
                                if (parseInt(t) > 0)
                                {
                                    $("#Countdown").text(parseInt(t) - 1);
                                }
                                else
                                {
                                    $("#btnActivateCoupon").bind("click", activeCoupon);
                                    $("#Countdown").hide().text('');
                                    window.clearInterval(timer);
                                }
                            }


                            var activeCoupon = function() {
                                var myCouponContainer = $(" .user_youhuixq ul li:last");
                                var o = $("#txtCouponCode");
                                var errorMsgObj = $(" .user_youhuixq .wrongts");
                                errorMsgObj.hide();

                                var r = validation(o);
                                if (!r.result) {
                                    errorMsgObj.html("<em></em>" + r.txt);
                                    errorMsgObj.show();
                                    setTimeout(function() {
                                        errorMsgObj.hide();
                                    }, 3000);
                                    return false;
                                }
                                var TotalPrice = parseFloat($("#hidOrderMoney").val());
                                $.ajax({
                                    type: "GET",
                                    dataType: "jsonp",
                                    async: false,
                                    jsonp: "callback",
                                    url: "http://passport.baicheng.com/usercommon/activecoupon?cuid=" + cuid + "&protype=2&country=188&prodid=48176&money=" + TotalPrice,
                                    data: {"couponcode": o.val()},
                                    success: function(data) {
                                        if (parseInt(data.code) == 1)
                                        {
                                            if (data.Msg != undefined)
                                            {
                                                var coupon = eval(data.Msg.Coupon);
                                                if (coupon.Money > 0)
                                                {
                                                    $('   <li>' +
                                                            '   <a style="cursor:pointer;" class="fl check"></a><em></em>元' +
                                                            '   <i></i>' +
                                                            '   <b></b>' +
                                                            ' </li>').attr("CouponID", coupon.CouponID)
                                                            .find("em").html(coupon.Money).end()
                                                            .find("i").html("[" + coupon.Desc + "]").end()
                                                            .find("b").html("使用期限 " + coupon.Begin + " - " + coupon.End).end()
                                                            .find("a").attr({"TotalPrice": TotalPrice, "CouponMoney": coupon.Money, "CouponID": coupon.CouponID, "CouponCode": coupon.CouponCode})
                                                            .bind('click', function() {
                                                                if ($(this).hasClass('checkon'))
                                                                {
                                                                    $(this).removeClass('checkon');
                                                                    unUseCoupon($(this).attr("CouponID"), $(this).attr("CouponCode"), $(this).attr("CouponMoney"), $(this).attr("TotalPrice"));
                                                                }
                                                                else
                                                                {
                                                                    $(".checkon").removeClass('checkon');
                                                                    $(this).addClass('checkon');
                                                                    useCoupon($(this).attr("CouponID"), $(this).attr("CouponCode"), $(this).attr("CouponMoney"), $(this).attr("TotalPrice"));
                                                                }


                                                            }).end()
                                                            .insertBefore(myCouponContainer)//remove end
                                                            .find("a").click();
                                                }
                                                o.val('');
                                            }
                                            else
                                            {
                                                errorMsgObj.html('<em class="fl"></em>' + data.Msg);
                                                errorMsgObj.show();
                                            }
                                        }
                                        else if (parseInt(data.code) == -10000)
                                        {
                                            errorMsgObj.html('<em class="fl"></em>您操作过于频繁，请稍候再试');
                                            errorMsgObj.show();
                                            $("#btnActivateCoupon").unbind("click").hide();
                                            $("#Countdown").show().text(data.Msg);
                                            var timer = window.setInterval(function() {
                                                var t = $("#Countdown").text();
                                                if (parseInt(t) > 0)
                                                {
                                                    $("#Countdown").text(parseInt(t) - 1);
                                                }
                                                else
                                                {
                                                    errorMsgObj.html('<em class="fl"></em>');
                                                    errorMsgObj.hide();
                                                    $("#btnActivateCoupon").bind("click", activeCoupon).show();
                                                    $("#Countdown").hide().text('');
                                                    window.clearInterval(timer);
                                                }
                                            }, 1000);
                                        }
                                        else
                                        {
                                            errorMsgObj.html('<em class="fl"></em>' + data.Msg);
                                            errorMsgObj.show();
                                        }
                                    },
                                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                                        console.log('error');
                                    }
                                });
                            };

                            $("#btnActivateCoupon").bind("click", activeCoupon);
                            $("#txtCouponCode").bind("focus change", function(e) {
                                var errorMsgObj = $(" .user_youhuixq .wrongts");
                                errorMsgObj.hide();
                            })

                        });
                    </script>

                    <input class="validationBinded" name="hidOrderMoney" id="hidOrderMoney" value="6998" type="hidden">

                    <div id="divLoginBox" style="" class="user_youhuixq">
                        <ul totalprice="6998">
                            <li style="height:54px;">
                                <a href="javascript:void(0);" class="fl add"></a><i class="fl addyhq">添加优惠券</i>
                                <input id="txtCouponCode" name="txtCouponCode" class="fl txtdhm required validationBinded" vali="custom[[\da-zA-Z]{4,15}]" fc="请输入正确的兑换码" placeholder="请输入优惠券兑换码" type="text">
                                <!--<input type="text" name="txtdhm" class="fl txtdhm txtdhmred" value="" placeholder="" />--><!--红框样式-->
                                <a id="btnActivateCoupon" style="cursor: pointer;" class="fl btnsy">使用</a>
                                <a id="Countdown" style="cursor: pointer; display: none;" class="fl btnsy btnsyhs">90s</a><br>
                                <span class="wrongts"></span>
                            </li>
                        </ul>
                    </div>

                    <div id="divNoLoginBox" style="display: none;" class="user_youhuixq">
                        <span>尚未登录，不能使用优惠券</span>
                    </div>

                </div>
                <div class="cp_nr ele_volume" style="display: none;">
                    <!--使用百程卡-->
                    <div class="coupon_ibox cur" id="div_cash" style="display: block;">
                        <div class="coupon_con">
                            <ul class="coup_edit" id="ul_cash">
                                <li id="li_cash_0">
                                    <div class="coup_in">
                                        <p class="coup_item">
                                            <span>百程卡号</span>
                                            <input id="txt_cash_id_0" couponid="" cash="" class="BC_finput bform_inp validationBinded" type="text">
                                        </p>
                                        <p class="coup_item">
                                            <span>密码</span>
                                            <input id="txt_cash_pw_0" class="BC_finput bform_inp w_100 validationBinded" value="" type="password">
                                        </p>
                                        <a class="gicon_a gicon_a_del" href="javascript:;" id="a_cash_delete_0" onclick="deleteCash(this)"></a>
                                    </div>
                                    <p class="hints red" id="p_cash_error_0" style="display: none">
                                        <i class="gicon4 gicon4_11"></i><span id="sp_cash_error_0">卡号或密码错误</span></p>
                                </li>
                            </ul>
                            <div class="coup_total">
                                <div class="coup_add">
                                    <a class="add_btn" href="javascript:;" id="a_cash_add">增加</a> <span class="red2" id="sp_cashError">共使用了0张，可以优惠0元！</span>
                                </div>
                                <div class="coup_asub">
                                    <a class="pro_sub" href="javascript:;" id="a_cash_commit"><span>确定</span></a></div>
                                <input class="validationBinded" id="hdCash" value="0" type="hidden">
                            </div>
                        </div>
                    </div>
                    <!--使用百程卡-->
                </div>
            </div>
        </div>


        <script type="text/javascript">

            $(function() {

                var tabFil = $(".cp_nav>li"); //定义点击区
                var tabBox = $(".cpnew_nr>.cp_nr"); //定义内容展示区
                tabFil.click(function(e) {
                    var index = tabFil.index(this);
                    tabFil.removeClass("cur");
                    $(this).addClass("cur");
                    tabBox.hide().eq(index).show();
                    if (index == 1) {
                        $("#tipYH").text("优惠券与百程卡不能同时使用");
                    }
                    e.preventDefault();
                }).eq(0).click();
                InitCoupon(parseFloat($("#hidTotalPrice").val()));
            });
        </script>

        <!--优惠信息-end-->
        <!--提交订单-->
        <div class="step_box mt20">
            <a class="step_prev" href="javascript:history.go(-1);">上一步</a>
            <div class="total">
                <span class="tpenum">
                    <b>1</b>成人 <b>1</b>儿童
                </span><span id="YHPrice" class="tprice yhprice"></span><span class="tprice">应付金额：<b><em>￥</em><span id="totalPrice2">6998</span></b></span> <a id="submit" style="cursor: pointer;" class="pro_sub">提交订单</a>
            </div>
        </div>
        <!--/提交订单-->
    </form>
    <!--预订须知-start-->
    <div class="box-1 mt20">
        <div class="box_tit2">
            <strong>预订须知</strong><label class="bf_agree fr"><input id="checkNotice" checked="checked" value="" type="checkbox">我已阅读预订须知，并接受所有内容</label></div>
        <div class="box_con notice" style="height: 200px; overflow-y: auto; padding-top: 0px;">
            <h3>
                本订单条款规定了百程旅行网(北京百程国际旅游股份有限公司)跟团游产品预订的基本规则及相关权利义务，请您务必仔细阅读。</h3>
            <p>
            </p>
            <p>

                1、出境旅游产品属于价值较大且履行过程相对复杂的消费项目，为保证双方权益，无论您是否为出行人，百程旅行网仅接受年满18周岁且具备完全民事行为能力
                的自然人用户提交的订单，否则百程旅行网有权取消您提交的订单且不承担责任。出行人的年龄限制以产品说明为准。</p>
            <p>
                2、您在百程旅行网订单页面填写的内容、产品信息及相关说明(包括但不限于行程介绍、费用说明、签证/签注、预订须知)及本订单条款共同组成预订跟团游产品的完整订单。</p>
            <p>
                3、百程旅行网上的跟团游产品由具备资质的第三方旅行社负责最终组团操作与执行，百程旅行网系接受第三方委托代为销售，如您欲了解具体跟团游产品的组团社信息请联系百程旅行网工作人员。</p>
            <p>
                4、您在百程旅行网上提供或录入的信息将作为百程旅行网后续执行订单事项的依据，请您务必确认相关信息的真实与准确。因信息错误导致的经济损失或其他不利后果将由您自行承担。</p>
            <p>

                5、请您在下单后及时与百程旅行网联系确认订单信息，订单在经百程旅行网确认无误且百程旅行网收到您的全部订单款项后生效，未经百程旅行网确认的订单未生
                效，百程旅行网有权不予执行未生效订单内容。订单生效后将构成具有约束力的法律条款，并对全部出行人及订单联系人适用。</p>
            <p>
                6、由于旅游产品受时间影响存在价格波动，故百程旅行网对未生效订单内容是否变化不作保证，同时百程旅行网有权单方取消未生效订单。</p>
            <p>

                7、订单生效后，百程旅行网将通知组团社按订单内容为出行人安排交通、住宿、游览等项目的预订并会实际发生费用。如您在订单生效后取消或变更订单，部分预
                订项目可能因无法取消而导致费用损失。在此情况下，您将承担因取消或变更订单而产生的费用损失或费用增加。若需取消或变更订单，请您尽早通知百程旅行网以
                减少或避免损失，具体取消规则详见产品说明。</p>
            <p>
                8、跟团游产品所包含的交通、住宿、游览等项目系整体组合打包销售，且出行人需随团集体活动，故出行人不得就单个项目进行单独取消或变更。</p>
            <p>

                9、订单生效后，因不可抗力(指不能预见、不能避免并不能克服的客观情况，包括因自然原因和社会原因引起的事件，如自然灾害、战争、罢工、重大传染性疫
                情、政府行为等)或意外事件(指因双方故意或过失以外的偶然因素而发生的，影响旅游行程的事件，如列车和航班等公共交通工具的延误或取消、恶劣天气变化、
                交通堵塞、重大礼宾活动等)导致百程旅行网不能全部或部分履行订单的，百程旅行网可取消或变更订单并无需承担违约责任。百程旅行网届时将会及时通知您相关
                调整事项。</p>
            <p>

                10、为保障双方权益，百程旅行网将在订单生效后与您或出行人以书面形式签署旅游主管部门制定的出境旅游合同。订单未涉及的事项以及就同一事项(特别包括
                旅游行程)订单与出境旅游合同约定不一致的，均以出境旅游合同为准。如您或出行人不同意出境旅游合同，百程旅行网将视同您或出行人单方取消订单，届时百程
                旅行网将按照本条款规定的订单取消规则处理。</p>
            <p>
                11、订单适用中华人民共和国法律，双方如因订单履行事宜发生争议，相关争议应提交百程旅行网所在地人民法院裁决。</p>
            <p>
                12、安全提示</p>
            <p>
                (1)出境旅游活动对出行人的身心状况存在一定要求，请您确认出行人处于健康状态能够完成旅游活动所包含的各类项目；</p>
            <p>
                (2)如您为孕妇或有心脏病、高血压、呼吸系统疾病等病史，请在征得医院专业医生同意后预订旅游产品；</p>
            <p>
                (3)旅游期间，您应遵守当地法律，尊重当地的宗教信仰、民族习惯和风土人情，自觉保护当地自然环境；</p>
            <p>
                (4)在旅游过程中，您应妥善保管自己的物品和证件，贵重物品建议随身携带或存放于保险箱内等安全场所；</p>
            <p>
                (5)旅游行程中如有自由活动安排，您应当根据自身能力选择活动项目，在此期间您需对自身的人身财产安全负责；</p>
            <p>
                (6)百程旅行网建议您购买相关旅游意外保险以保障自身权益；
            </p>
        </div>
    </div>
    <!--预订须知/end-->
</div>
@include("/home.common.footer");
