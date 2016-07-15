@include("/home.common.header");
<script src="/js/home/jquery.js"></script>
<script src="/js/home/fun.js"></script>

<!-- 公共JS -->
<!-- 小能客服 -->
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
<script type="text/javascript" src="/js/home/ntkfstat.js" charset="utf-8"></script><script type="text/javascript">
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
<!--公共头部-->
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

<!--/公共头部-->
<div class="BC_main">
    <!--面包屑-->
    <div class="bc_daohang YH">
        <a href="http://www.baicheng.com/">百程网</a><em>&gt;</em><a href="http://dujia.baicheng.com/group">跟团游</a><em>&gt;</em>【迷恋西沙】天津-泰国普吉甲米5晚6天跟团游
    </div>
    <!--/面包屑-->
    <!--模块1-->
    <div class="product_ibox">
        <div class="product_hd">
            <i class="ptag YH pro_tag"><span class="cur">跟团游</span> </i>
            <div class="pro_tit">
                <h1>
                    【迷恋西沙】天津-泰国普吉甲米5晚6天跟团游</h1>
                <p>
                    全程800自费封顶</p>
            </div>
            <span class="pro_num">[商品编号]48176</span>
        </div>
        <div class="pro_binfo clearfix">
            <div class="product_view" id="product_view_slide">
                <div class="pro_svi">
                    <img style="display: inline-block;" src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/krabi09.jpg">
                </div>
                <div class="pro_list">
                    <a class="pro_control pro_cl pdico pro_left" href="#"></a><a class="pro_control pro_cr pdico pro_right" href="#"></a>
                    <div class="pro_items">
                        <ul>

                            <li><a href="#">
                                    <img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi03.jpg" href="http://img4.byecity.com.cn/fs/brs/imgs/jingdiantupian/2015-02/Krabi03.jpg">
                                </a></li>

                            <li><a href="#">
                                    <img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi05.jpg" href="http://img4.byecity.com.cn/fs/brs/imgs/jingdiantupian/2015-02/Krabi05.jpg">
                                </a></li>

                            <li><a href="#">
                                    <img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi02.jpg" href="http://img.byecity.com.cn/fs/brs/imgs/jingdiantupian/2015-02/Krabi02.jpg">
                                </a></li>

                            <li><a href="#">
                                    <img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi07.jpg" href="http://img4.byecity.com.cn/fs/brs/imgs/jingdiantupian/2015-02/Krabi07.jpg">
                                </a></li>

                            <li><a href="#">
                                    <img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/krabi09.jpg" href="http://img1.byecity.com.cn/fs/brs/imgs/jingdiantupian/2015-02/krabi09.jpg">
                                </a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="product_intro group_intro">
                <div class="pro_info">
                    <ul class="pro_ilist">
                        <li class="pro_price"><span class="pro_dt">人均价格：</span>
                            <div class="pro_dd">

                                <strong class="pro_pnum red2"><em>￥</em><span>4099</span><b>起</b></strong>

                            </div>
                        </li>
                        <li><span class="pro_dt">出发城市</span>
                            <div class="pro_dd">
                                天津</div>
                        </li>

                        <li><span class="pro_dt">提前报名</span>
                            <div class="pro_dd">
                                建议出游日期前4天以上</div>
                        </li>
                        <li class="dates"><span class="pro_dt">出发日期</span>
                            <div class="pro_dd">
                                <div class="pcom_date fl">
                                    <span class="pdates pr">
                                        <input id="UserDate" value="2016-08-19" class="BC_finput pdate_inp NGD_calendar_go validationBinded NGD_calendar_binded" type="text">
                                        <i class="gicon_a gicon_a_date"></i></span>
                                </div>
                            </div>
                        </li>
                        <li class="peonum"><span class="pro_dt">出游人数</span>
                            <div class="pro_dd">
                                <div class="add_pnum fl">
                                    <div class="BC_Control_Select">
                                        <select class="validationBinded" style="display: none;" id="aultnum" name="aa" event-change="ChangePrice()">
                                            <option value="1">1份</option>
                                            <option selected="selected" value="2">2份</option>
                                            <option value="3">3份</option>
                                            <option value="4">4份</option>
                                            <option value="5">5份</option>
                                            <option value="6">6份</option>
                                            <option value="7">7份</option>
                                            <option value="8">8份</option>
                                            <option value="9">9份</option>
                                            <option value="10">10份</option>
                                            <option value="11">11份</option>
                                            <option value="12">12份</option>
                                            <option value="13">13份</option>
                                            <option value="14">14份</option>
                                            <option value="15">15份</option>
                                            <option value="16">16份</option>
                                            <option value="17">17份</option>
                                            <option value="18">18份</option>
                                            <option value="19">19份</option>
                                            <option value="20">20份</option>
                                            <option value="21">21份</option>
                                            <option value="22">22份</option>
                                            <option value="23">23份</option>
                                            <option value="24">24份</option>
                                            <option value="25">25份</option>
                                            <option value="26">26份</option>
                                            <option value="27">27份</option>
                                            <option value="28">28份</option>
                                            <option value="29">29份</option>
                                            <option value="30">30份</option>
                                            <option value="31">31份</option>
                                            <option value="32">32份</option>
                                            <option value="33">33份</option>
                                            <option value="34">34份</option>
                                            <option value="35">35份</option>
                                            <option value="36">36份</option>
                                            <option value="37">37份</option>
                                            <option value="38">38份</option>
                                            <option value="39">39份</option>
                                            <option value="40">40份</option>
                                            <option value="41">41份</option>
                                            <option value="42">42份</option>
                                            <option value="43">43份</option>
                                            <option value="44">44份</option>
                                            <option value="45">45份</option>
                                            <option value="46">46份</option>
                                            <option value="47">47份</option>
                                            <option value="48">48份</option>
                                            <option value="49">49份</option>
                                            <option value="50">50份</option>
                                        </select>
                                        <span><b>2份</b><i class="gicon4 gicon4_17"></i></span><div style="display: none;" class="list"><div class="box"><a value="1" href="#">1份</a><a class="cur" value="2" href="#">2份</a><a value="3" href="#">3份</a><a value="4" href="#">4份</a><a value="5" href="#">5份</a><a value="6" href="#">6份</a><a value="7" href="#">7份</a><a value="8" href="#">8份</a><a value="9" href="#">9份</a><a value="10" href="#">10份</a><a value="11" href="#">11份</a><a value="12" href="#">12份</a><a value="13" href="#">13份</a><a value="14" href="#">14份</a><a value="15" href="#">15份</a><a value="16" href="#">16份</a><a value="17" href="#">17份</a><a value="18" href="#">18份</a><a value="19" href="#">19份</a><a value="20" href="#">20份</a><a value="21" href="#">21份</a><a value="22" href="#">22份</a><a value="23" href="#">23份</a><a value="24" href="#">24份</a><a value="25" href="#">25份</a><a value="26" href="#">26份</a><a value="27" href="#">27份</a><a value="28" href="#">28份</a><a value="29" href="#">29份</a><a value="30" href="#">30份</a><a value="31" href="#">31份</a><a value="32" href="#">32份</a><a value="33" href="#">33份</a><a value="34" href="#">34份</a><a value="35" href="#">35份</a><a value="36" href="#">36份</a><a value="37" href="#">37份</a><a value="38" href="#">38份</a><a value="39" href="#">39份</a><a value="40" href="#">40份</a><a value="41" href="#">41份</a><a value="42" href="#">42份</a><a value="43" href="#">43份</a><a value="44" href="#">44份</a><a value="45" href="#">45份</a><a value="46" href="#">46份</a><a value="47" href="#">47份</a><a value="48" href="#">48份</a><a value="49" href="#">49份</a><a value="50" href="#">50份</a></div></div></div>
                                    <em class="fl">成人</em>
                                </div>
                                <div class="add_pnum fl ml20">
                                    <div class="BC_Control_Select">
                                        <select class="validationBinded" style="display: none;" id="childnum" name="aa" event-change="ChangePrice()">
                                            <option value="0">0份</option>
                                            <option value="1">1份</option>
                                            <option value="2">2份</option>
                                            <option selected="selected" value="3">3份</option>
                                            <option value="4">4份</option>
                                            <option value="5">5份</option>
                                            <option value="6">6份</option>
                                            <option value="7">7份</option>
                                            <option value="8">8份</option>
                                            <option value="9">9份</option>
                                            <option value="10">10份</option>
                                            <option value="11">11份</option>
                                            <option value="12">12份</option>
                                            <option value="13">13份</option>
                                            <option value="14">14份</option>
                                            <option value="15">15份</option>
                                            <option value="16">16份</option>
                                            <option value="17">17份</option>
                                            <option value="18">18份</option>
                                            <option value="19">19份</option>
                                            <option value="20">20份</option>
                                            <option value="21">21份</option>
                                            <option value="22">22份</option>
                                            <option value="23">23份</option>
                                            <option value="24">24份</option>
                                            <option value="25">25份</option>
                                            <option value="26">26份</option>
                                            <option value="27">27份</option>
                                            <option value="28">28份</option>
                                            <option value="29">29份</option>
                                            <option value="30">30份</option>
                                            <option value="31">31份</option>
                                            <option value="32">32份</option>
                                            <option value="33">33份</option>
                                            <option value="34">34份</option>
                                            <option value="35">35份</option>
                                            <option value="36">36份</option>
                                            <option value="37">37份</option>
                                            <option value="38">38份</option>
                                            <option value="39">39份</option>
                                            <option value="40">40份</option>
                                            <option value="41">41份</option>
                                            <option value="42">42份</option>
                                            <option value="43">43份</option>
                                            <option value="44">44份</option>
                                            <option value="45">45份</option>
                                            <option value="46">46份</option>
                                            <option value="47">47份</option>
                                            <option value="48">48份</option>
                                            <option value="49">49份</option>
                                            <option value="50">50份</option>
                                        </select>
                                        <span><b>3份</b><i class="gicon4 gicon4_17"></i></span><div style="display: none;" class="list"><div class="box"><a value="0" href="#">0份</a><a class="" value="1" href="#">1份</a><a value="2" href="#">2份</a><a class="cur" value="3" href="#">3份</a><a value="4" href="#">4份</a><a value="5" href="#">5份</a><a value="6" href="#">6份</a><a value="7" href="#">7份</a><a value="8" href="#">8份</a><a value="9" href="#">9份</a><a value="10" href="#">10份</a><a value="11" href="#">11份</a><a value="12" href="#">12份</a><a value="13" href="#">13份</a><a value="14" href="#">14份</a><a value="15" href="#">15份</a><a value="16" href="#">16份</a><a value="17" href="#">17份</a><a value="18" href="#">18份</a><a value="19" href="#">19份</a><a value="20" href="#">20份</a><a value="21" href="#">21份</a><a value="22" href="#">22份</a><a value="23" href="#">23份</a><a value="24" href="#">24份</a><a value="25" href="#">25份</a><a value="26" href="#">26份</a><a value="27" href="#">27份</a><a value="28" href="#">28份</a><a value="29" href="#">29份</a><a value="30" href="#">30份</a><a value="31" href="#">31份</a><a value="32" href="#">32份</a><a value="33" href="#">33份</a><a value="34" href="#">34份</a><a value="35" href="#">35份</a><a value="36" href="#">36份</a><a value="37" href="#">37份</a><a value="38" href="#">38份</a><a value="39" href="#">39份</a><a value="40" href="#">40份</a><a value="41" href="#">41份</a><a value="42" href="#">42份</a><a value="43" href="#">43份</a><a value="44" href="#">44份</a><a value="45" href="#">45份</a><a value="46" href="#">46份</a><a value="47" href="#">47份</a><a value="48" href="#">48份</a><a value="49" href="#">49份</a><a value="50" href="#">50份</a></div></div></div>
                                    <em class="fl">儿童(2-12周岁)</em>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="subtn_box">
                    <a class="New_btn btn_b b1" href="#TB_inline?height=300&amp;width=500&amp;inlineId=divSelectDate" id="btnOrder" style="">立即预订</a>
                </div>
            </div>
        </div>
    </div>
    <!--产品特色模块-start-->
    <div class="product_pbox product_pbox_4">
        <!--日历-->
        <div class="proinfo_calendar_team" id="proinfo_calendar_team">
            <div class="proinfotag">
                <div class="mlist">
                    <ul style="width: 236px;">

                        <li><a class="cur" href="#">16年07月</a></li><li><a class="" href="#">16年08月</a></li></ul>
                </div>
                <a style="display: none;" href="#" class="mprev disbled" title="上一页"></a><a style="display: none;" href="#" class="mnext" title="下一页">
                </a>
            </div>
            <div style="display: block;" class="NGD_calendar_box NGD_calendar_box_show"><a href="#" class="left prevYear">&lt;&lt;</a><a href="#" class="left prevMonth">&lt;</a><a href="#" class="right nextYear">&gt;&gt;</a><a href="#" class="right nextMonth">&gt;</a><div class="NGD_month_box"><div class="NGD_tag"><select class="NGD_select_year validationBinded"><option>1900</option><option>1901</option><option>1902</option><option>1903</option><option>1904</option><option>1905</option><option>1906</option><option>1907</option><option>1908</option><option>1909</option><option>1910</option><option>1911</option><option>1912</option><option>1913</option><option>1914</option><option>1915</option><option>1916</option><option>1917</option><option>1918</option><option>1919</option><option>1920</option><option>1921</option><option>1922</option><option>1923</option><option>1924</option><option>1925</option><option>1926</option><option>1927</option><option>1928</option><option>1929</option><option>1930</option><option>1931</option><option>1932</option><option>1933</option><option>1934</option><option>1935</option><option>1936</option><option>1937</option><option>1938</option><option>1939</option><option>1940</option><option>1941</option><option>1942</option><option>1943</option><option>1944</option><option>1945</option><option>1946</option><option>1947</option><option>1948</option><option>1949</option><option>1950</option><option>1951</option><option>1952</option><option>1953</option><option>1954</option><option>1955</option><option>1956</option><option>1957</option><option>1958</option><option>1959</option><option>1960</option><option>1961</option><option>1962</option><option>1963</option><option>1964</option><option>1965</option><option>1966</option><option>1967</option><option>1968</option><option>1969</option><option>1970</option><option>1971</option><option>1972</option><option>1973</option><option>1974</option><option>1975</option><option>1976</option><option>1977</option><option>1978</option><option>1979</option><option>1980</option><option>1981</option><option>1982</option><option>1983</option><option>1984</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option><option>1989</option><option>1990</option><option>1991</option><option>1992</option><option>1993</option><option>1994</option><option>1995</option><option>1996</option><option>1997</option><option>1998</option><option>1999</option><option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option selected="selected">2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option><option>2021</option><option>2022</option><option>2023</option><option>2024</option><option>2025</option><option>2026</option><option>2027</option><option>2028</option><option>2029</option><option>2030</option><option>2031</option><option>2032</option><option>2033</option><option>2034</option><option>2035</option><option>2036</option><option>2037</option><option>2038</option><option>2039</option><option>2040</option><option>2041</option><option>2042</option><option>2043</option><option>2044</option><option>2045</option><option>2046</option><option>2047</option><option>2048</option><option>2049</option><option>2050</option><option>2051</option></select><select class="NGD_select_month validationBinded"><option value="0">1月</option><option value="1">2月</option><option value="2">3月</option><option value="3">4月</option><option value="4">5月</option><option value="5">6月</option><option selected="selected" value="6">7月</option><option value="7">8月</option><option value="8">9月</option><option value="9">10月</option><option value="10">11月</option><option value="11">12月</option></select></div><div class="NGD_days"><ul class="NGD_days_tag"><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class="NGD_days_list"><li></li><li></li><li></li><li></li><li></li><li class="NGD_days_select"><span>1</span></li><li class="NGD_days_select"><span>2</span></li><li class="NGD_days_select"><span>3</span></li><li class="NGD_days_select"><span>4</span></li><li class="NGD_days_select"><span>5</span></li><li class="NGD_days_select"><span>6</span></li><li class="NGD_days_select"><span>7</span></li><li class="NGD_days_select"><span>8</span></li><li class="NGD_days_select"><span>9</span></li><li class="NGD_days_select"><span>10</span></li><li class="NGD_days_select"><span>11</span></li><li class="NGD_days_select"><span>12</span></li><li class="NGD_days_select"><span>13</span></li><li class="NGD_days_select"><span>14</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>15</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>16</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>17</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>18</span></li><li class="NGD_days_select"><span>19</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>20</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>21</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>22</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>23</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>24</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>25</span></li><li class="NGD_days_select"><span>26</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>27</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>28</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>29</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li class="NGD_days_select"><span>30</span></li><li class="NGD_days_select NGD_days_select_preferential"><span>31</span><p class="price">¥<b>4099</b></p><p class="rs">余4</p></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div><div class="NGD_calendar_tip"></div></div></div>
        <!--/日历-->
        <!--产品特色-start-->
        <div class="pspecial fr">
            <h3>
                产品特色：</h3>
            <ul style="height: 310px;" class="pspec_list">
                <li>
                    <p>
                        连住2晚盛泰澜西沙五星酒店度假村+连住2或3晚普吉特色海边五星酒店或同级<br>品质承诺：全程800自费封顶 推荐不强迫 <br>豪华特色国际自助餐：鱼市场国际自助餐+韩国烤肉BBQ+INSEE国际自助<br>特别推荐：快艇往返【大小PP岛，赠送浮潜】【天堂岛】【帝王岛】【大堡礁】【情人沙滩】【蓝钻岛】<br>特别赠送 ：国际人妖表演+泰式按摩</p>
                </li>
            </ul>
            <div class="view_more">
                <a href="#"><span>查看更多</span><i class="gicon_a gicon_a_sj_down"></i></a>
            </div>
        </div>
        <!--产品特色-end-->
    </div>
    <!--产品特色模块-end-->
    <!--/模块1-->
</div>
<div class="BC_main">
    <div class="box_fujia YH group">
        <div class="tab">
            <div style="top: 0px;" class="tabbox P_det02">
                <ul>
                    <li tab="gonglue" class="cur">行程介绍</li>

                    <li class="" tab="feiyong">费用说明</li>

                    <li class="" tab="yuding">预订须知</li>

                    <li tab="zixun">咨询问答</li>
                    <li class="fr M_rt20"><a href="javascript:;" id="goyuding" class="New_btn btn_b b1" style="">立即预订</a></li>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="zixun clearfix" tab="gonglue">
                <h4>
                    行程介绍</h4>
                <div class="nr">
                    <div style="top: 0px;" class="zx_left">
                        <ul>

                            <li class="cur">第1天</li>

                            <li class="">第2天</li>

                            <li class="">第3天</li>

                            <li class="">第4天</li>

                            <li class="">第5天</li>

                            <li class="">第6天</li>

                        </ul>
                    </div>
                    <div class="zx_right">

                        <!--开始-->
                        <h4>
                            第1天
                            天津-甲米
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    天津 甲米酒店   参考航班：BK2767 1020-1520<br>迷
                                    恋之旅启程：指定集合时间，搭乘豪华客机前往泰国美丽的度假胜地－普吉/甲米。普吉岛作是泰国最大的岛屿、安达曼海的“珍珠”普吉岛是东南亚具有代表性的
                                    旅游度假胜地。它的魅力首先在于它那美丽的大海，岛屿的西海岸正对安达曼海，那里遍布原始幼白的沙滩，每个沙滩都有各自的优点和魅力，阳光普照之下，大大
                                    小小的海滩闪烁着安达曼海拍岸的浪花。令人神往的海滩和一幢幢饭店旅馆恭候着来自世界各地的游客。抵达甲米机场后，车接往指定酒店休息。为接下来的美好行
                                    程养精蓄锐吧。<br>（温馨提示：搭乘国际航班一定要提前抵达机场；航班时间仅供参考，以民航总局批示为准）
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi03_samll.jpg" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>
                                    酒店星级：五星级酒店
                                    酒店名称：甲米泰式五星酒店或同级
                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：不含
                                    中餐：不含
                                    晚餐：含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                        <!--开始-->
                        <h4>
                            第2天
                            普吉
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    攀牙湾割喉群岛泛舟大自然之旅+远观007岛沙法里四合一168水果街便利店<br>早
                                    餐后，乘车前往码头搭船，带足防晒用品，欣赏沿途美景吧（船程约40分钟），而后转乘长尾船漫游有“海上小桂林”美誉的【攀牙湾】波光粼粼。呈淡绿色的海
                                    湾水面上，石灰岩奇峰怪石星罗棋布，1981年被列为海洋国家公园，被誉为全岛风景最美丽的地方。随后前往因电影「割喉岛」而闻名于世之拍片地点【割喉群
                                    岛】特别赠送乘坐橡皮艇（二人一艇）展开一段惊奇别样的漂流之旅（约30分钟,泛舟小费需自理约每人50/泰铢），巡游经千万年海水冲击形成的各种岩洞及
                                    钟乳石洞，映入眼帘尽是浑然天成的自然景观，美不胜收。随后可远观闻名世界的美国好莱坞大片「007大战金枪客」的拍摄地【占士帮007岛】由于
                                    “007”系列电影曾经在这座岛上取景，使之名声大噪，此岛亦为攀牙湾之最（约20分钟）。而后我们特别为您安排了【沙法里四合一】体验泰象魅力：骑大象
                                    巡逻风情（需付小费20铢/人），深入感受泰国农家生活；割橡胶，参观橡胶采收过程；后参观猴子表演，和泰国美丽海景，可爱动物接触晚后。前往【168水
                                    果街】，泰国的水果很有名，到处都能看到水果街，客人可以根据自己喜好品尝或购买东南亚地区的特色热带水果及日用品等等。<br>温馨提示：如果遇上普吉岛大风浪天气，考虑到游客的安全因素，我社将会安排乘大船前往PP岛，不便之处，敬请谅解！！
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi05_samll.jpg" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>
                                    酒店星级：五星级酒店
                                    酒店名称：普吉特色五星酒店
                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：含
                                    中餐：含
                                    晚餐：含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                        <!--开始-->
                        <h4>
                            第3天
                            普吉
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    快艇大PP岛-小PP岛-帝王岛-情人沙滩-天堂湾-大堡礁-泰式按摩<br>早
                                    餐后，乘快艇前往【PP岛】此岛被泰国政府规划为国家公园，这是一个深受阳光眷宠的地方，柔软洁白的沙滩，宁静碧蓝的海水，鬼斧神工的天然洞穴，未受污染
                                    的自然风貌，使得她从普吉岛周围的30余个离岛中脱颖而出，成为近年来炙手可热的旅游度假胜地之一。此岛被泰国观光局列为喀比府风景最秀丽之国家公园，亦
                                    为欧美旅客最向往之度假胜地。而后搭乘快艇驰往世界著名的【小PP岛】、世外桃园【帝王岛】精致而绝美的景色、纯净无污染的海水与沙滩，国家珊瑚保护区，
                                    全国唯一海豚保护区之帝王岛，幸运时可见成群海豚跃出海面，追逐嬉戏，犹如置身于野生海洋公园。在发育完整的珊瑚礁群中与鱼共游，最high的是只要涉及
                                    膝深处即可与成千色彩缤纷的热带鱼嬉戏。小PP岛著名景点—【情人沙滩】『也译作加勒谷岛，不低于45min』， 
                                    这里因作为电影《沙滩》的外景拍摄地而名声大振，岛上100来米的沙滩拥有全普吉特别细白的沙粒，又细又白的沙粒像极了胡椒面。随后游览【天堂湾】被称为
                                    天然游泳池会游泳的不妨可以下水一游。 
                                    天堂湾三面环山，中间是一汪平静的海水，据说是郑和下西洋时发现的宝地，即使外面风浪再大，这里一样风平浪静，水平如镜。被人们成为水上桂林。随后乘快艇
                                    前往国家海洋重点珊瑚保护区 
                                    【大堡礁】尽情的浮潜，成千上万的热带鱼就与你共舞，珊瑚礁就在你的视线可及精美绝伦。之后返回普吉，晚餐后，体验地道的【泰式按摩】（一个小时），最正
                                    宗的泰式体验，享受舒筋活骨，养颜美容，给您带来身、心灵放松之旅。之后返回酒店休息。<br>温馨提示：如果遇上普吉岛大风浪天气，考虑到游客的安全因素，我社将会安排乘大船前往PP岛，不便之处，敬请谅解！！
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi02_samll.jpg" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>
                                    酒店星级：五星级酒店
                                    酒店名称：普吉海边特色五星酒店
                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：含
                                    中餐：含
                                    晚餐：含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                        <!--开始-->
                        <h4>
                            第4天
                            甲米
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    蓝钻岛-燕窝中心-乳胶中心-神仙半岛-人蛇大战<br>早
                                    餐后，搭乘专属快艇前往【蓝钻岛】（温馨提示：费用不包含水上项目，请客人根据自己的喜好与工作人员联系），作为泰国国家一级珊瑚保护区，其四周的海域是
                                    潜水爱好者必去之地，优质的珊瑚可以和马尔代夫相媲美。一直以来都是欧美人士度假休闲的天堂，四周金发碧眼的游客仿佛让你置身地中海的海滩。客人可根据自
                                    己的喜好参加各种水上娱乐项目，刺激的香蕉船，探索海底世界的深潜，每一项都不容错过。除此之外，水下童话般的珊瑚世界也在等待您的探索。后返回普吉，先
                                    参观【燕窝中心】了解泰国闻名世界的燕窝的成长与制作。可自由选择泰国安达曼海域天然的金丝海岛燕窝、皇家滋补珍品燕窝、血燕补品等馈赠亲朋好友。随后参
                                    观【乳胶中心】(参观时间约2小时)游览最著名景点【神仙半岛】（约40分钟）。【人蛇大战】（约60分钟），可一睹世界上最毒之金刚眼镜王蛇的芳容，同
                                    时可欣赏惊险的人蛇表演，令人大开眼界。<br>（温馨提示：如遇上大风浪天气，考虑到游客的安全因素，我社将会安排其它行程取代！）
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/Krabi07_samll.jpg" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>
                                    酒店星级：五星级酒店
                                    酒店名称：Centara Westand国五酒店或同级
                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：含
                                    中餐：含
                                    晚餐：含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                        <!--开始-->
                        <h4>
                            第5天
                            甲米
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    上午半天自由活动-皇家国际珍宝苑-皮革免税店-海龙寺-四面佛-人妖表演<br>早
                                    餐后，可在入住酒店内自由活动，Centara 
                                    Westand盛泰澜西沙度假村是国际五星酒店，面朝安达曼海，拥有位于迈考海滩的500米长的私人海滩区。享有热带花园的、游泳池和安达曼海的美景。下
                                    午于指定时间集合，参观【皇家国际珍宝苑】了解泰国的红蓝白宝石，为自己的爱人送一份爱的礼物，内有泰国世界闻名的精品特产（ISO9002品质鉴定保
                                    证），红、蓝、黄宝石和黑珍珠等华丽珠宝，游客可根据自己喜好选购。再去普吉最大【皇家皮革免税店】了解鳄鱼皮，珍珠鱼皮，鳄鱼皮具主营商品：鳄鱼皮、珍
                                    珠鱼皮、大象皮制饰品及泰国的象牙饰品。爬上山坡，游览普吉香火最为旺盛的【海龙寺+四面佛】，膜拜有求必应的四面佛，这里常年香火旺盛，皇室每年前来普
                                    吉时，也会来此祭拜。四面佛第一面求平安、第二面求事业、第三面求婚姻、第四面求金钱。烧一套香烛，插一小束花在佛前，祈求神灵保佑。晚餐后，欣赏【国际
                                    人妖表演】（60分钟），人妖是泰国旅游产业的一大亮点，知名度极高，每年都会有成年上万的游客前去观看那精美绝伦的表演。
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/yazhou-taiguo-jiami_samll.png" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>
                                    酒店星级：五星级酒店
                                    酒店名称：Centara Westand国五酒店或同级
                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：含
                                    中餐：含
                                    晚餐：含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                        <!--开始-->
                        <h4>
                            第6天
                            甲米-天津
                        </h4>
                        <div class="line_solid">
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                交 通</div>
                            <div class="nr">
                                <i class="icon icon_d" style="display:none">
                                </i><i class="icon icon_e" style="display:none">
                                </i>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data">
                            <div class="tit">
                                行程简介</div>
                            <div class="nr">
                                <p>

                                    普吉甲米天津   参考航班：BK2768 1605/2250<br>酒店早餐后，于指定时间大堂集合，专车前往甲米国际机场。挥别普吉岛的阳光美景、迷人海滩，搭乘国际航班返回温暖的家园。结束本次浪漫精彩的海岛之旅。
                                </p>
                                <ul>
                                    <li><img src="%E7%99%BE%E7%A8%8B%E6%97%85%E8%A1%8C%E7%BD%91--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85_files/krabi10_samll.jpg" style="width: 180px; height: 120px"></li>
                                </ul>
                                <div class="clear">
                                </div>
                            </div>
                        </div>
                        <div class="xc_data" style="display:none">
                            <div class="tit">
                                住宿</div>
                            <div class="nr">
                                <p>


                                </p>
                            </div>
                        </div>
                        <div class="line_dashed" style="display:none">
                        </div>
                        <div class="xc_data" style="">
                            <div class="tit">
                                用餐</div>
                            <div class="nr">
                                <p>
                                    早餐：含
                                    中餐：不含
                                    晚餐：不含

                                </p>
                            </div>
                        </div>
                        <!--结束-->

                    </div>
                    <div class="clear">
                    </div>
                </div>
            </div>
            <div class="line_solid">
            </div>
            <!--费用包含-->

            <div class="fy_box" tab="feiyong">
                <h3>
                    费用说明</h3>
                <div class="nr">
                    费用包含<br>
                    1.行程表内所列的景点、全程旅游观光巴士、中文导游；   <br>2.行程表所列用餐（如遇飞机上用餐则不另安排）；<br>3.当地酒店标准间住宿(两人一房)；<br>4.行程表内所列机票及全程机场税、燃油附加费； <br>5. 旅游人身意外保险。<br>
                    <br>
                    费用不包含<br>
                    1.护照费用，签证费240元；<br>2.酒店房间内的迷你吧餐饮、电话、传真、洗衣、付费电视、行李搬运、等费用；<br>3.个人消费及私人费用：如电话、饮料、烟酒等；<br>4.服务项目未提及的一切费用：例如展会、缆车、自费、因违返当地法律法规涉及的罚款等；<br>5.机场候机、转机的休息室或餐费等；<br>6.自身疾病或意外伤害引起的医疗救助、用车、住宿、陪同、翻译等费用及相关的人身及财产损失。请您自行投保旅游人身意外伤害保险；<br>7.旅游费用不包含旅游者因违约、自身过错、违反当地法律法规、自由活动期间内的行为引起的人身和财产损失；<br>8.因不可抗力产生的额外费用；<br>9.行李超重费用；<br>10.单人房差；<br>11.当地习俗礼尚小费<br><br>儿童不占床+500，占床+1000<br>12岁以上儿童必须占床<br>
                </div>
            </div>
            <!--/费用包含-->
            <div class="line_solid">
            </div>

            <!--/费用包含 -->
            <!--签证/签注-->

            <!--/签证/签注-->
            <!--附加产品-->

            <!--/附加产品-->
            <div class="line_solid">
            </div>
            <!--预订须知-->

            <div class="fy_box" tab="yuding">
                <h3>
                    预订须知</h3>
                <div class="nr">

                    参加须知<br>

                    为了确保您能够按时出行，产品确认后请在48小时内付款，同时请按要求尽快提供出游所需的材料并签订出境旅游合同团队报价按2人入住1间房核算，如出现单
                    男单女，则尽量安排与其他同性别团友拼房或加床；若客人无需安排或旅行社无法安排，请补齐单房差以享用单人房间；团队机票一经开出，不得更改，不得签转，
                    不得退票；另飞行时间、车程时间、船程时间以当日实际所用时间为准如遇国家或航空公司政策性调整机票、燃油税价格，按调整后的实际价格结算是否给予签证或
                    签注、是否准予出入境，是使领馆及有关部门的权力，如因游客自身原因或因提供材料存在问题不能及时办理签证或签注，以及被有关部门拒发签证或签注，不准出
                    入境而影响行程的，签证费及其他费用损失由游客自行承担	
                    出团通知最晚于出团前1个工作日发送，若能提前确定，我们将会第一时间通知您此团收客人数不足20人时，本公司会于出发前7个工作日通知取消该行程，您可
                    以选择延期出发、更改线路出行，或退回团款团队游览中不允许擅自离团（自由活动除外），如有不便敬请谅解<br>销签说明：团队返回后，请务必将护照及返
                    程登机牌的原件交于领队统一办理销签手续（其中登机牌原件递送进领馆后是不予退还的，如您需要换取航空公司的积分，可在机场换取登机牌时同时办理）；且按
                    照各使领馆现行规定，会抽查团队部分或全部出团游客回国后面试销签，届时抽查到的游客必须按照使馆通知的时间本人前往使馆面试销签为了确保旅游顺利出行，
                    防止旅途中发生人身意外伤害事故，请旅游者在出行前做一次必要的身体检查，如存在下列情况，因服务能力所限无法接待：<br>1.1传染性疾病患者，如传染性肝炎、活动期肺结核、伤寒等传染病人<br>1.2心血管疾病患者，如严重高血压、心功能不全、心肌缺氧、心肌梗塞等病人<br>1.3脑血管疾病患者，如脑栓塞、脑出血、脑肿瘤等病人<br>1.4呼吸系统疾病患者，如肺气肿、肺心病等病人<br>1.5精神病患者，如癫痫及各种精神病人<br>1.6严重贫血病患者，如血红蛋白量水平在50克/升以下的病人<br>1.7大中型手术的恢复期病患者<br>1.8孕妇及行动不便者<br>2.老年旅游者预订提示<br>2.1. 65周岁以上老年人预订出游，须与我司签订《健康证明》并有家属或朋友陪同方可出游<br>2.2. 因服务能力所限，无法接待80周岁以上的旅游者报名出游，敬请谅解<br>3.未成年旅游者预订提示<br>3.1.未满18周岁的旅游者请由家属陪同参团<br>3.2.因服务能力所限，无法单独接待18周岁以下旅游者单独报名出游，敬请谅解<br>预订提示：本产品网上报价适用持有大陆居民身份证的游客；如您持有其他国家或地区的护照，请电话咨询价格，给您造成的不便，敬请谅解<br><br>购物说明：<br>1.全程不强制购物；不增加行程标注额外购物店<br>2.游客在指定购物店中为自愿购物，所购商品非质量问题一律不予退还<br>3.行程规定的景点、餐厅，长途中途休息站等这类购物店不属于旅游定点商店，或游客在自行前往的购物店所购商品出现质量问题，旅行社不承担任何责任<br>
                    <br>

                    出行提示<br>
                    为了不耽误您的行程，请您在国际航班起飞前180分钟到达机场办理登机和出入境相关手续,如您持外籍护照前往中国境外，请确保持有再次进入中国大陆的有效签证、<br>温馨提示<br>1．护照原件（须有半年以上有效期及足够的空白页）；       <br>2．半年内的近期2寸彩照2张（必须白底）。<br>3．住宿以二人一室为标准，出现单男单女以加床处理。<br>4.12岁以下小孩不安排占床；若占床收团费500元/人。<br>5.老师、学生、老人、公务、新闻媒体及特殊团队价格另议。(注：若不事先告知，另跟客人现补收费用：每人500元)<br>团队运行过程中客人不能擅自私自离团，脱团，若擅自离团、脱团，当客人单方面终止合同，并赔偿违约金和地接相关损失费用。脱团费1000元/天/人。<br>7.客人如果在当地放弃行程或餐,一律不退费。<br>8.导游有权视当地情况更改行程及用餐地点，如无不可抗拒因素将不减少行程上所有景点。<br>9.旅普期间领队就有关此团体作业及导游的服务和专业素质现场直接联络当地主管，以方便本公司能适时处理，若不提出，即表示放弃投诉之权益，回国后异议时穊不受理。敬请配合！<br>10.过岛当天请您穿短裤和凉鞋，因海水潮汐，可能需要涉水上岸，潮水高时可能没过膝盖，另外请注意保管好您随身物品，避免落入水中；<br>11．因普吉资源有限，过岛所乘船只有可能与其它团队拼船，请谅解！<br>特别说明<br>1.东南亚酒店没有官方公布的星级标准，没有挂星制度。行程中所标明的星级标准为当地行业参考标准，普遍比国内略差一点；<br>2.任何非官方网站所公布的酒店星级档次，是属于该网站自己的评估标准，不代表该酒店的真实档次或星级；<br>3.以上行程为参考行程，我社保留因航班、交通、签证等原因而导致行程变化，而对出团日期、线路等做适当调整的权利；<br>4.团队中如遇单男单女，一律按加床处理；60岁以上的老人参团需有直系亲属的陪同，患病旅行者和孕妇不得参团；<br>5.东南亚国家大都有收付小费的习惯，中国旅游者应当入乡随俗按照国际惯例支付一定的小费：例如与人妖合影20泰铢，每天的床头小费20泰铢，替叫计程车的酒店服务生，计程车司机，餐馆、酒吧的服务员，客房服务员，酒店的行李员等。<br>出境旅游须知及注意事项<br>01）中国游客赴境外旅游，需遵守所在国家和地区的法律法规、遵守出境游文明公约，体现新时代中国公民的文明素养和精神风尚；<br>02）泰国出入境卡、海关行李申报单等均可请领队协助填写。进出海关时，请听从领队指示配合团体行动，以免与团体走散，影响出入海关之时间。购物须知及免税烟酒：以观光为主，若看到喜欢或合适的物品，请速决定是否购买以免影响其他团体游客旅程时间；<br>03）飞机上航班座位按姓氏英文字母编排，若需调整座位待起飞后再自行调整；飞机起降及用餐，座椅排背需放直；NO SMOKING即禁止吸烟，FASTEN SEAT BELT 即系上安全带；非必要时勿随意走动，为了安全请务必遵守；<br>04）为避免不必要之尴尬，请勿擅取酒店内和飞机上任何物品；若需留为纪念，请提出购买；<br>05）乘坐游览车时，请注意巴士公司名称、颜色、车号，以免停车时找不到车；请保持车内整洁，旅游巴士上禁止吸烟，禁止吃榴莲喝椰汁；<br>06）请紧记约定集合时间地点，务必准时集合上车以免影响旅游行程。旅程中若遇特殊情况而须调整，当以领队安排后通告为准；<br>07）团队旅游客人须随团行动，请勿境外中途离团；<br>08）
                    酒店住宿注意，在大厅等待分配房号和钥匙时请保持安静。标准房间二人一间为原则，若出现单男单女情况，旅行社有权采取加床措施。外出时将钥匙放置于柜台，
                    以便同房者使用。如要求服务生提行李或房间送开水均要给相当于5-10元人民币的小费。请勿在酒店内或房间外的走廊大声喧哗，或衣冠不整地走动。退房时请
                    在前台结清电话费、饮料费等个人消费；离开酒店外出请携带酒店名片，以防迷路时备用。客人需随身携带贵重物品，可在酒店开设免费保险箱；若遗失随身物品，
                    保险公司很难受理赔偿事宜；<br>10）请特别注意安全，入住酒店后要记住领队及导游房号，需要帮助时可以找到他们。另要清楚自己房间所处位置及酒店消防安全疏散通道；<br>11）东南亚酒店由于环保因素，无论星级均须自备牙刷、牙膏、拖鞋、电吹筒等生活用品；酒店一般都有游泳池，请自带泳衣等用品；<br>12）货币可在机场、当地银行或酒店兑换，汇率因素若出现客人与当地个人或商铺兑换外币之纠纷责任自负。通讯方面，泰国都可以使用中国全球通手提电话；泰国比北京慢一小时时差；<br>13）泰国多中式自助餐；自助餐请切勿浪费，以免被罚款。详情查询导游或随团领队；<br>14）泰国大皇宫对服装要求较严格，不能穿无袖上衣、短裤、拖鞋等，可在当地租纱笼。<br>
                    <br>

                    取消条款<br>
                    1.百程旅行网产品页面的各项说明内容及《跟团游订单条款》列明了相关产品的详细信息及预订规则，与您权益切身相关，务请在提交订单前认真阅读<br>2.您提交的订单将在百程旅行网收到您的全额付款后生效，百程旅行网对未生效订单的执行不做保证<br>3.如您在订单生效后取消或变更预订产品，您须承担百程旅行网实际发生的损失，相关费用从您支付的款项中扣除<br>4.百程旅行网上的跟团游产品由具备资质的第三方旅行社负责最终组团操作与执行，如欲了解组团社信息请联系百程旅行网工作人员<br>5.产品包含的交通、住宿信息因出团日期不同而有所差异，最终信息以出行通知为准<br>6.根据团队在境外旅游目的地的实际情况，在不删减景点的前提下导游可调整景点参观先后顺序

                </div>
            </div>
            <div class="line_solid">
            </div>

            <!--/预订须知-->
            <!--咨询-->
            <div class="pro_module comments" tab="zixun" id="pro_module_comments">
                <div class="pro_mohd">
                    咨询问答</div>
                <div class="pro_mo">
                    <div class="comm_ask">
                        <dl>
                            <dt>提问</dt>
                            <dd>
                                <div class="comm_inp">
                                    <input style="color: rgb(153, 153, 153);" class="comm_key validationBinded" value="请输入咨询关键词" defaultvalue="请输入咨询关键词" id="txt_askinput" type="text">
                                    <a class="comm_sear" href="javascript:;" id="btnAsk">搜索</a>
                                </div>
                                <a class="comm_abt pro_sub" href="javascript:;" id="btnanswer">我要提问</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="comm_cont">
                        <div class="pinfo_hdt">
                            回复内容</div>
                        <div class="comm_dd" id="div_question">
                            亲，暂无该产品咨询！对本线路有任何疑问，请在此提问咨询。我们的工作人员将尽快回复您。</div>
                    </div>
                </div>
                <!--分页-->
                <div class="bc_page" id="question_pager">
                </div>
                <!--/分页-->
            </div>
            <!--/咨询-->
        </div>
    </div>
    <!--/模块3-->
</div>

@include("/home.common.footer");