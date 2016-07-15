<!DOCTYPE html>
<html><head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"><script src="/js/home/hm.js"></script><script src="/js/home/analytics.js" async="" type="text/javascript"></script><script src="/js/home/gtm.js" async=""></script>
        <meta charset="utf-8">
        <title>iTour爱旅欢迎您！</title>
        <meta name="keywords" content="旅游,旅游网,旅行,签证,出国旅游,国外旅游,出境游,境外旅游">
        <meta name="description" content="爱旅游能够为数百万出境游客提供签证办理、定制、自由行、跟团游、WIFI、门票等国外旅游服务，境外旅游当然首选百程旅行网。">
        <meta name="robots" content="noodp">
        <!--公共样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/public.css">
        <!--公共样式-->
        <!--当前样式-->
        <link type="text/css" rel="stylesheet" href="/css/home/index_new.css">
        <!--当前样式-->
        <script src="/js/home/hm_002.js"></script><script>
            var dataLayer = dataLayer || [];
        </script>
        <!--公共JS begin-->
        <script src="/js/home/jquery.js"></script>
        <script src="/js/home/fun.js"></script>
        <!--公共JS end-->
         
       </head>
    
    <!--轮播图部分-->
<!--    <script src="/js/home/jquery-2.0.2.min.js"></script>-->
   
    <body id="index_new" class="BC_bg">
        <div style="left: -10px; top: -10px; visibility: hidden; display: none; width: 1px; height: 1px;" id="nTalk_post_hiddenElement"></div>

        <div class="bc_header newtop ">

            <div class="login_out ST">
                <div class="top_main clearfix">
                    <div class="stock">iTour爱旅游网站欢迎您！</div>
                    <div class="right">
                       
                        @if(!session("homeUserData"))
                        <span style="display:block;" id="_headerNoLogin">
                            <span class="sf">
                                <a rel="nofollow" href="#" onclick="otherLogin('taobao');"><i class="icon taobao"></i></a>
                                <a rel="nofollow" href="#" onclick="otherLogin('qq');"><i class="icon qq"></i></a>
                            </span>
                            <a rel="nofollow" href="/Home/login" target="_blank">登录</a><em></em><a rel="nofollow" href="/Home/user/register" target="_blank">注册</a><em></em><a rel="nofollow" href="" target="_blank">订单查询</a>
                        </span>
                        @else
                        <span id="_headerLogin" style="">欢迎您：<a rel="nofollow" href="/Home/user" target="_blank"><span class="BC_text_t10 username" id="_headerLogin_nickname">{{ session("homeUserData")->uname}}</span></a>[<a rel="nofollow" href="/Home/user/logout" onclick="">退出</a>]<em></em><a rel="nofollow" href="" target="_blank">订单查询</a></span>
                       @endif 
                        <em></em><a href="http://d.baicheng.com/" class="btn_tel hover"><i class="icon tel"></i></a><a href="#" class="btn_weixin hover"><i class="icon weixin"></i></a></div>
                    
                    
                </div>
            </div>
            <div class="hd">
                <div class="logoss">
                    <div class="logo">
                        <a href="/Home" class="logo_img">
                            <img src="/images/home/12.jpg" height="64px" width="200px"></a>
                        <i class="tit" style="display: none;"><img src="/images/home/logo_tit.png"></i>
                    </div>
                    <!-- 搜索框 -->
                    <div class="searchnr">
                        <div class="search">
                            <div class="slelist">
                                <span class="show">
                                    <span class="value"> 搜索</span><em class="icon"></em>
                                </span>
                                <ul style="display: none;" class="list">
                                    <li class="cur" type="1">签证</li>
                                    <li type="4">门票</li>
                                    <li type="6">日游</li>
                                    <li type="5">接送机</li>
                                    <li type="2">自由行</li>
                                    <li type="3">跟团游</li>
                                </ul>
                            </div>
                            <input class="search_input validationBinded" onblur="if (value == '') {
                                        value = '输入目的地国家/城市/景点等关键词'
                                    }" onfocus="if (value == '输入目的地国家/城市/景点等关键词') {
                                                value = ''
                                            }" value="输入目的地国家/城市/景点等关键词">
                            <!-- <input class="search_input" placeholder="输入目的地国家/城市/景点等关键词"></input> -->
                            <a class="searchtbn" href="javascript:;"> 搜索</a>
                            <!-- 搜索框获取焦点弹框 -->
                            <div style="display: none;" class="focuspop">
                                <h3 class="tit">热门搜索</h3>

          
                                <div class="group">
                                    <span class="name">签证</span>
                                    <div class="rnr">
                                        <a href="http://www.baicheng.com/visa/country_meiguo_US.html">美国</a>
                                    </div>                                
                                </div>
                                
                                
                                <div class="group">
                                    <span class="name">自由行</span>
                                    <div class="rnr">
                                        <a href="http://dj.baicheng.com/package/48329.html">泰国清迈</a>
                                    </div>                                
                                </div>
                                
                                
                                
                                
                                <div class="group">
                                    <span class="name">定制游</span>
                                    <div class="rnr">
                                        <a href="http://www.baicheng.com/customized/planner/13">浪漫蜜月</a>
                                    </div>   
                                </div>
                                
                                
                                
                                
                                
                                <!-- 搜索联想弹框 -->  
                            </div>
                            <!-- 搜索联想弹框 -->
                            <div style="display: none;" class="aboutlist">
                                <!--  <a href="http://www.baicheng.com">VIP 美国短期访问签证</a> -->
                            </div>
                        </div>
                        <div class="hotss">
                            热门：
                            <a href="http://www.baicheng.com/HotDestination/1_248.html">中国台湾</a>
                            
                        </div>
                    </div>
                </div>
                <!-- 主菜单 -->
                <div class="menu">
                    <ul>
                        <li class="on">
                            <a href="http://www.baicheng.com/" class="New_btn nav" onfocus="this.blur();">
                                <span>首页</span>
                                <i class="ico">&nbsp;</i>
                            </a>
                        </li>
                        <li class="submenu">
                            <a href="javascript:;" class="New_btn nav" onfocus="this.blur();">
                                <span>国内游<em class="arrow"></em></span>
                                <i class="ico">&nbsp;</i>
                            </a>
                        </li>
                        <li class="submenu">
                            <a href="javascript:;" class="New_btn nav" onfocus="this.blur();">
                                <span>国际游<em class="arrow"></em></span>
                                <i class="ico">&nbsp;</i>
                            </a>
                        </li>
                        <li class="submenu">
                            <a href="javascript:;" class="New_btn nav" onfocus="this.blur();">
                                <span>签证<em class="arrow"></em></span>
                                <i class="ico">&nbsp;</i>
                            </a>
                        </li>
                        <li class="submenu">
                            <a href="javascript:;" class="New_btn nav" onfocus="this.blur();">
                                <span>机票<em class="arrow"></em></span>
                                <i class="ico">&nbsp;</i>
                            </a>
                        </li>
                           <li class="submenu">
                            <a href="javascript:;" class="New_btn nav" onfocus="this.blur();">
                                <span>旅行资讯<em class="arrow"></em></span>
                                <i class="ico">&nbsp;</i>
                            </a>
                    </ul>
                </div>
                
                <!-- 全球目的地 -->
                <div class="mdd_box">
                    <div class="mdd_boxnr">
                        <div id="destination" class="tag">全球目的地<i class="icon"></i></div>
                    <!--国内框-->
                        <div id="line" style="display:none;" class="ibox asia iboxh">
                            <div class="t">
                                <h3>国内</h3>
                              
                                @foreach($cate1 as $cat1)
                                <a href="">{{$cat1->cname}}</a>
                                @endforeach
                           
                            </div>
                            <div class="list" style="top: 0;">
                                <h3>省份</h3>
                                <div class="lista">
                                    @foreach($cate2 as $cat2)
                                    <a href="">{{$cat2->cname}}</a>
                                   @endforeach
                                </div>
                                <h3>热门城市</h3>
                                <div class="lista">
                               @foreach($cate3 as $cat3)
                                    <a href="">{{$cat3->cname}}</a>
                               @endforeach
                                </div>
                            </div>
                        </div>
                    <!--国际框-->
                         <div id="line" style="display:none;" class="ibox asia iboxh">
                            <div class="t">
                                <h3>国际</h3>
                              
                                 @foreach($zcate as $zcat)
                                <a href="">{{$zcat->cname}}</a>
                                @endforeach
                           
                            </div>
                            <div class="list" style="top: 0;">
                                <h3>国家</h3>
                                <div class="lista">
                                    @foreach($gcate as $gcat)
                                    <a href="">{{$gcat->cname}}</a>
                                   @endforeach
                                </div>
                                <h3>热门城市</h3>
                                <div class="lista">
                               @foreach($ccate as $ccat)
                                    <a href="http://www.baicheng.com/HotDestination/2_253.html">{{$ccat->cname}}</a>
                               @endforeach
                                </div>
                            </div>
                        </div>
                    
                    <!--路线框-->
                    <div id="line" style="display:none;" class="ibox asia iboxh">
                            <div class="t">
                                <h3>路线</h3>
                              
                                 @foreach($zcate as $zcat)
                                <a href="">{{$zcat->cname}}</a>
                                @endforeach
                           
                            </div>
                            <div class="list" style="top: 0;">
                                <h3>国家</h3>
                                <div class="lista">
                                    @foreach($gcate as $gcat)
                                    <a href="">{{$gcat->cname}}</a>
                                   @endforeach
                                </div>
                                <h3>热门城市</h3>
                                <div class="lista">
                               @foreach($ccate as $ccat)
                                    <a href="http://www.baicheng.com/HotDestination/2_253.html">{{$ccat->cname}}</a>
                               @endforeach
                                </div>
                            </div>
                        </div>
                    <!--机票框-->
                     <div id="line" style="display:none;" class="ibox asia iboxh">
                            <div class="t">
                                <h3>机票</h3>
                              
                                 @foreach($zcate as $zcat)
                                <a href="">{{$zcat->cname}}</a>
                                @endforeach
                           
                            </div>
                            <div class="list" style="top: 0;">
                                <h3>国家</h3>
                                <div class="lista">
                                    @foreach($gcate as $gcat)
                                    <a href="">{{$gcat->cname}}</a>
                                   @endforeach
                                </div>
                                <h3>热门城市</h3>
                                <div class="lista">
                               @foreach($ccate as $ccat)
                                    <a href="http://www.baicheng.com/HotDestination/2_253.html">{{$ccat->cname}}</a>
                               @endforeach
                                </div>
                            </div>
                        </div>
                       </div>

                    </div>
                </div>  
                 
            </div>
        
            <!--  子菜单浮层 -->
            <ul class="submenu_list">
                <li style="display: none;" class="smlnr xxx">
                </li>
                <li style="display: none;" class="smlnr one">
                    <div class="sml">
                        <div class="smlcon">
                            <a href="http://www.baicheng.com/visa">签证办理</a><a href="http://www.baicheng.com/visa/collect">签证大厅</a>
                        </div>
                    </div>
                </li>
                <li style="display: none;" class="smlnr two">
                    <div class="sml">
                        <div class="smlcon">
                            <a href="http://www.baicheng.com/dujia/package">自由行</a><a href="http://www.baicheng.com/dujia/group">跟团游</a><a href="http://www.baicheng.com/customized">旅行定制</a>
                        </div>
                    </div>
                </li>
                <li style="display: none;" class="smlnr three">
                    <div class="sml">
                        <div class="smlcon">
                            <a href="http://www.baicheng.com/tickets">门票</a><a href="http://www.baicheng.com/yiriyou">日游</a><a href="http://www.baicheng.com/jiesongji">接送机</a>
                        </div>
                    </div>
                </li>
                <li style="display: none;" class="smlnr four">
                    <div class="sml">
                        <div class="smlcon">
                            <a href="http://zt.baicheng.com/travel_hui/travel.html">超值特价</a><a href="http://www.baicheng.com/award/index">会议&amp;奖励</a>
                        </div>
                    </div>
                </li>
                <li style="display: none;" class="smlnr xxx">
                </li>      
            </ul>
           <div class="line"></div>
           <hr style="height:5px;background:purple;">
        </div> 
        <!--sliderbanner end-->
<script>
    document.getElementById("destination").onmouseover=function (){
        document.getElementById("line").style.display="block";
    };
</script>

        <!--sliderbanner end--> 
