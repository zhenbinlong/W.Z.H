@include("/home.common.header");
<script src="/js/home/jquery.js"></script>
<script src="/js/home/fun.js"></script>

 公共JS 
 小能客服 
<script language="javascript" type="text/javascript">
    NTKF_PARAM = {
        siteid: "kf_9654", //企业ID，必填，取值参见文档开始表
        settingid: "kf_9654_1444805149549", //缺省客服配置ID，必填，取值参见文档开始表
        uid: "1577593753", //用户ID,未登录可以为空
        uname: "Circle", //用户名，未登录可以为空
        isvip: "", //是否为vip用户
        userlevel: "", //网站自定义会员级别
        orderid: "", //订单ID,
        orderprice: "", //订单总价,
        ntalkerparam: {
            item: {//注意：详情页这里是item，其它地方是items
                categoryid: "0", //分类ID,多分类可以用分号(;)分隔, 长路径父子间用冒号(:)分割
                id: ""
                  }
        }
    }
</script>
<script type="text/javascript" src="/js/home/ntkfstat.js" charset="utf-8"></script>
<script type="text/javascript">
//检测登录状态
    $.getJSON('http://passport.baicheng.com/usercommon/islogin?callback=?', {}, function(json) {
        if (json.value) {
            $('#_headerNoLogin').hide();
            $('#_headerLogin_nickname').html(json.data);
            $('#_headerLogin').show();
        }
    });

//公共退出
    function _CommonLogout() {
        $.getJSON('http://passport.baicheng.com/usercommon/logout?callback=?', {}, function(json) {
            if (json.value) {


                $('#_headerLogin').hide();
                $('#_headerLogin_nickname').html('');
                $('#_headerNoLogin').show();
            }
        });
    }
//其它登录方式
    function otherLogin(type) {
        var win = window.open('http://passport.baicheng.com/userlogin/gologin/?type=' + type, 'newwindow', 'width=500px,heigh=250px,scrollbars=1');
        var timer = setInterval((function(win) {
            return function() {
                if (win.closed) {
                    //window.open("http://passport.baicheng.com/member/regbinding/?from="+window.location.href,'newwindow');
                    window.location.href = "http://passport.baicheng.com/member/middle/?from=" + encodeURIComponent(window.location.href);
                    //window.location.reload();
                    clearInterval(timer);
                }
            };
        })(win), 1000);
    }
</script>
<script type="text/javascript">
//全局搜索
    $(function() {
        $('.hd .logoss .search a.searchtbn').click(function() {
            var keywords = $('.logoss .search .search_input').val();
            if (keywords == '输入目的地国家/城市/景点等关键词') {
                keywords = '';
            }
            var type = $('.logoss .search .slelist ul.list li.cur').attr('type');
            window.location.href = "http://www.baicheng.com/search/" + type + "/" + keywords
        })
        //异步搜索
        $('.logoss .search .search_input').bind('input propertychange', function() {
            golable_ajax_search();
        })
        $('.logoss .search .search_input').focus(function() {
            golable_ajax_search();
        })
        function golable_ajax_search() {
            var val = $('.logoss .search .search_input').val();
            var type = $('.logoss .search .slelist ul.list li.cur').attr('type');
            var str = '';
            if (val && type) {
                $.ajax({
                    type: 'GET',
                    url: "http://www.baicheng.com/getHotProducts",
                    dataType: 'jsonp',
                    data: {"keywords": val, "type": type, "flag": '1'},
                    async: true,
                    jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
                                    jsonpCallback: "success_jsonpCallback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
                    success: function(result) {
                        // console.log(result);
                        if (result) {
                            $.each(result, function(k, list) {
                                str += '<a href="' + list.url + '">' + list.title + '</a>';
                            })
                            $('.searchnr .search .aboutlist').html(str);
                        }
                    }
                })
            }
        }
        //搜索框默认值
        var search_type_id = "";
        var search_keywords = "";
        if (search_type_id) {
            $('.logoss .search .slelist ul.list li[type=' + search_type_id + ']').addClass('cur').siblings('li').removeClass('cur');
            $('.logoss .search .slelist span.value').text($('.logoss .search .slelist ul.list li.cur').text());
        }
        if (search_keywords && search_keywords != 0) {
            $('.logoss .search .search_input').val(search_keywords)
        }
        //默认品类选中
        nav_auto_color();
        $('.bc_header.newtop .hd .menu').mouseleave(function() {
            nav_auto_color();
        })
        $('.submenu_list').mouseleave(function() {
            nav_auto_color();
        })
        function nav_auto_color() {
            nowurl = window.location.href;
            menu_li = $('.bc_header.newtop .hd .menu ul li');
            if (nowurl.indexOf('visa') > 0) {
                menu_li.eq(1).addClass('on').siblings('li').removeClass('on');
            } else if (nowurl.indexOf('dujia') > 0 || nowurl.indexOf('customized') > 0 || nowurl.indexOf('dj') > 0) {
                menu_li.eq(2).addClass('on').siblings('li').removeClass('on');
            } else if (nowurl.indexOf('tickets') > 0 || nowurl.indexOf('yiriyou') > 0 || nowurl.indexOf('jiesongji') > 0) {
                menu_li.eq(3).addClass('on').siblings('li').removeClass('on');
            } else if (nowurl.indexOf('travel_hui') > 0 || nowurl.indexOf('award') > 0) {
                menu_li.eq(4).addClass('on').siblings('li').removeClass('on');
            } else if (nowurl.indexOf('travel_hui') > 0 || nowurl.indexOf('travel-manager') > 0) {
                menu_li.eq(5).addClass('on').siblings('li').removeClass('on');
            } else {
                menu_li.eq(0).addClass('on').siblings('li').removeClass('on');
            }
        }
    })
</script></div>
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

<div class="BC_main">
    <div class="submit_order mt20">
        <i class="New_icon c3"></i>
        <div class="sord_info">
            <p>
                您的订单已提交，由于资源有限，我们会在您完成付款后操作保留。请您尽快完善个人信息，以免影响出行。
            </p>
            <div class="sord_b">
                <span class="sord_num">订单号：<b><a href="http://dj.baicheng.com/MemberCenter/OrderDetail_NoLogin.aspx?orderID=1480618&amp;token=79A186FC60342712" target="_blank">1480618</a></b></span><em class="sline">|</em> <span class="sord_price">
                    应付金额：<b class="red2">￥</b><strong class="red2">8198</strong></span>
            </div>
        </div>

        <div class="submit_btn">
            <a class="New_btn btn_b b1" href="http://dujia.baicheng.com/pay/gen/1480618">立即支付</a></div>

    </div>
</div>
@include("/home.common.footer");
