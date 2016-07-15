@include("home.common.header")
<!--sliderbanner start-->

<div class="slider_banner BC_slide_binded">
    <div id="my_banner_round" width="">

        <div id="round_banner" >
            <?php
                $array=[];
                foreach($runs as $k=>$v ){
                    $array[$k]=$v;
                }
            ?>
            
            <img src="{{$array[0]->rpicture}}" width="1300px"height="360px">
            
        </div>
<!--/images/home//uploads/rpicture/201607130052555164.jpg-->
        <script>
            //设置轮播动画的对象
            var slider = {
                arr: ['{{$array[0]->rpicture}}', '{{$array[1]->rpicture}}','{{$array[2]->rpicture}}','{{$array[3]->rpicture}}','{{$array[4]->rpicture}}','{{$array[5]->rpicture}}'],
                flag: 0,
                //开始轮播
                start: function() {
                    setInterval(slider.nextFrame,1000);
                },
                //事件动作设置
                nextFrame: function() {
                    document.images[2].src = slider.arr[slider.flag % slider.arr.length];
                           
                    //显示坐标
                    var coord = document.getElementsByTagName("ul")[4].getElementsByTagName("li");
                            

                    //当前位置框显示背景颜色 
                    for (var i = 0; i < coord.length; i++) {
                        if (i == slider.flag % slider.arr.length) {
                            coord[i].style.backgroundColor = "red";
                        } else {
                            coord[i].style.backgroundColor = "#fff";
                        }
                    }
                    slider.flag++;
                }
            };
            slider.start();
        </script>


        


    </div>
<div class="popo">
<!--    <i class=""></i><i class=""></i><i class=""></i><i class="cur"></i><i class=""></i><i class=""></i>-->
 <ul style="margin:0 200px;padding:0;float:right">
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag=0">1</li>
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag=1">2</li>
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag=2">3</li>
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag = 3">4</li>
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag = 4">5</li>
            <li style="float:left;border:1px solid #ccc;width:10px;height:10px;text-align: center;font:9px/10px 宋体;margin:0 0 0 10px;cursor:pointer;" onmouseover="slider.flag = 5">6</li>
        </ul>
</div>
</div>




<!--sliderbanner end-->
<div class="BC_main_a" opacity="">
    <!--国内游标题部分-->
    <div class="hd P_inde01">
            
            <div class="tit">
                <ul>
                    
                    <li><a target="_blank" href="http://www.baicheng.com/dujia/group" class="New_btn nav"><span>国内游</span><i class="ico"></i></a></li>
                </ul>
            </div>
        </div>
    
    
    
    
    
    <!--国内游内容部-->
        <div class="box_nr">
            <div class="product_box">
                <ul>
                    
                    <!--国内游第一个框-->
                    <li class="w660">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49333.html" title="泰国" target="_blank">
                                <img src="/images/home/qianzheng_1467945448_7118.jpg" alt="境外旅游推荐：【近海.繁华】北京普吉5晚7天跟团游">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">3999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49333.html" title="泰国" target="_blank">【近海.繁华】北京普吉5晚7天跟团游</a></h3>

                            <p class="YW"></p>
                        </div>
                    </li>
                    
                    
                    
                    
                    
                    <!--国内游第二框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49368.html" title="韩国" target="_blank">
                                <img src="/images/home/qianzheng_1468202530_9872.jpg" alt="境外旅游推荐：【海上升明月】歌诗达邮轮“大西洋号”5晚6日（日韩）">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">3999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49368.html" title="韩国" target="_blank">【海上升明月】歌诗达邮轮“大西洋号”5晚6日（日韩）</a></h3>

                            <p class="YW">抢先价~~仅3999元，可享受高级全景阳台房！！！与明星同行，与艺术家共舞，与家人赏月</p>
                        </div>
                    </li>
                    
                    
                    
                    
                     <!--国内游第三框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48770.html" title="菲律宾" target="_blank">
                                <img src="/images/home/qianzheng_1468202559_6191.jpg" alt="境外旅游推荐：北京-长滩4晚6天自由行(机票+酒店)">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">2999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48770.html" title="菲律宾" target="_blank">北京-长滩4晚6天自由行(机票+酒店)</a></h3>

                            <p class="YW">机票+酒店(阿兰达)</p>
                        </div>
                    </li>
                    
                    
                    
                     <!--国内游第四框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48278.html" title="马尔代夫" target="_blank">
                                <img src="/images/home/qianzheng_1468202634_6517.jpg" alt="境外旅游推荐：【蜜月首选】北京-马尔代夫蜜月岛Meeru Island Resort5晚7天自由行（首都航空）">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">11899</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48278.html" title="马尔代夫" target="_blank">【蜜月首选】北京-马尔代夫蜜月岛Meeru Island Resort5晚7天自由行（首都航空）</a></h3>

                            <p class="YW">浮潜A级岛，面积大，含三餐，适合蜜月满20000立减1000，详询底部费用包含</p>
                        </div>
                    </li>
                    
                    
                    
                     <!--国内游第五框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48045.html" title="泰国" target="_blank">
                                <img src="/images/home/qianzheng_1468202657_4868.jpg" alt="境外旅游推荐：【暑期预售】成都-泰国清迈5晚6天单机票(赠送签证)">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">1799</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48045.html" title="泰国" target="_blank">【暑期预售】成都-泰国清迈5晚6天单机票(赠送签证)</a></h3>

                            <p class="YW">亚航直飞、赠送泰国旅游签证</p>
                        </div>
                    </li>
                    
                    
                    
                     <!--国内游第六框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/47940.html" title="日本" target="_blank">
                                <img src="/images/home/qianzheng_1468202684_7633.jpg" alt="境外旅游推荐：【舒心享受】北京-日本古都精品之旅">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">5699</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/47940.html" title="日本" target="_blank">【舒心享受】北京-日本古都精品之旅</a></h3>

                            <p class="YW">古都精品之旅+早去晚回</p>
                        </div>
                    </li>
                    
                    
                     <!--国内游第七框-->
                    <li class="w660">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49046.html" title="俄罗斯" target="_blank">
                                <img src="/images/home/qianzheng_1468202796_9873.jpg" alt="境外旅游推荐：俄罗斯贝加尔湖蓝色经典5天">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">7299</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49046.html" title="俄罗斯" target="_blank">俄罗斯贝加尔湖蓝色经典5天</a></h3>

                            <p class="YW"></p>
                        </div>
                    </li>
                    
                    
                    
                </ul>
            </div>
        </div>
    
    
    <!--国际游部分-->
    <div class="hd P_inde01">
        
        
        
            <!--国际游标题部分-->
            <div class="tit">
                <ul>
                    
                    <li><a target="_blank" href="http://www.baicheng.com/dujia/group" class="New_btn nav"><span>国际游</span><i class="ico"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="box_nr">
            <div class="product_box">
                <ul>
                    
                    
                    <!--国际游第一框-->
                    <li class="w660">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49333.html" title="泰国" target="_blank">
                                <img src="/images/home/qianzheng_1467945448_7118.jpg" alt="境外旅游推荐：【近海.繁华】北京普吉5晚7天跟团游">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">3999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49333.html" title="泰国" target="_blank">【近海.繁华】北京普吉5晚7天跟团游</a></h3>

                            <p class="YW"></p>
                        </div>
                    </li>
                    
                    
                    
                    
                    <!--国际游第二框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49368.html" title="韩国" target="_blank">
                                <img src="/images/home/qianzheng_1468202530_9872.jpg" alt="境外旅游推荐：【海上升明月】歌诗达邮轮“大西洋号”5晚6日（日韩）">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">3999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49368.html" title="韩国" target="_blank">【海上升明月】歌诗达邮轮“大西洋号”5晚6日（日韩）</a></h3>

                            <p class="YW">抢先价~~仅3999元，可享受高级全景阳台房！！！与明星同行，与艺术家共舞，与家人赏月</p>
                        </div>
                    </li>
                    
                    
                    
                    <!--国际游第二框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48770.html" title="菲律宾" target="_blank">
                                <img src="/images/home/qianzheng_1468202559_6191.jpg" alt="境外旅游推荐：北京-长滩4晚6天自由行(机票+酒店)">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">2999</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48770.html" title="菲律宾" target="_blank">北京-长滩4晚6天自由行(机票+酒店)</a></h3>

                            <p class="YW">机票+酒店(阿兰达)</p>
                        </div>
                    </li>
                    
                    
                    
                    
                    <!--国际游第三框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48278.html" title="马尔代夫" target="_blank">
                                <img src="/images/home/qianzheng_1468202634_6517.jpg" alt="境外旅游推荐：【蜜月首选】北京-马尔代夫蜜月岛Meeru Island Resort5晚7天自由行（首都航空）">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">11899</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48278.html" title="马尔代夫" target="_blank">【蜜月首选】北京-马尔代夫蜜月岛Meeru Island Resort5晚7天自由行（首都航空）</a></h3>

                            <p class="YW">浮潜A级岛，面积大，含三餐，适合蜜月满20000立减1000，详询底部费用包含</p>
                        </div>
                    </li>
                    
                    
                    
                    
                    
                    <!--国际游第四框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/package/48045.html" title="泰国" target="_blank">
                                <img src="/images/home/qianzheng_1468202657_4868.jpg" alt="境外旅游推荐：【暑期预售】成都-泰国清迈5晚6天单机票(赠送签证)">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">自由行</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">1799</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/package/48045.html" title="泰国" target="_blank">【暑期预售】成都-泰国清迈5晚6天单机票(赠送签证)</a></h3>

                            <p class="YW">亚航直飞、赠送泰国旅游签证</p>
                        </div>
                    </li>
                    
                    
                    
                    
                    <!--国际游第五框-->
                    <li class="">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/47940.html" title="日本" target="_blank">
                                <img src="/images/home/qianzheng_1468202684_7633.jpg" alt="境外旅游推荐：【舒心享受】北京-日本古都精品之旅">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">5699</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/47940.html" title="日本" target="_blank">【舒心享受】北京-日本古都精品之旅</a></h3>

                            <p class="YW">古都精品之旅+早去晚回</p>
                        </div>
                    </li>
                    
                    
                    
                    
                    
                    <!--国际游第六框-->
                    <li class="w660">
                        <div class="product_pic">
                            <a href="http://dj.baicheng.com/group/49046.html" title="俄罗斯" target="_blank">
                                <img src="/images/home/qianzheng_1468202796_9873.jpg" alt="境外旅游推荐：俄罗斯贝加尔湖蓝色经典5天">
                            </a>

                            <div class="product_pbot">
                                <span class="transparent_box fl">跟团游</span>

                                <div class="icon-tag fl">
                                    <span class="price">
                                        <em class="YW">¥</em><b class="YW">7299</b>起
                                    </span>
                                    <i class="ui-icon-tag itag_01"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product_info">
                            <h3><a href="http://dj.baicheng.com/group/49046.html" title="俄罗斯" target="_blank">俄罗斯贝加尔湖蓝色经典5天</a></h3>

                            <p class="YW"></p>
                        </div>
                    </li>
                    
                    
                    
                    
                    
                </ul>
            </div>
        </div>

    

    <!--境外必备部分 start-->
    <div style="height: auto;" class="box_b Mtop40 BC_tabox clearfix BC_tabs_binded">
        <div class="hd">
           <!--境外必备标题-->
            <div class="tit">
                <ul class="BC_tabox_tabs">
                    <li class="cur"><a href="javascript:void(0);" class="New_btn nav" onfocus="this.blur();"><span>机票</span><i class="ico"></i></a></li>
                    
                    
                     <li class="cur"><a href="javascript:void(0);" class="New_btn nav" onfocus="this.blur();"><span>签证</span><i class="ico"></i></a></li>
                     
                     
                     
                      <li class="cur"><a href="javascript:void(0);" class="New_btn nav" onfocus="this.blur();"><span>旅游资讯</span><i class="ico"></i></a></li>
                    
                </ul>
            </div>
        </div>
        <div class="box_nr BC_tabox_cons">


           
            <div style="display: block;" class="jw_bb">
                
                <!--境外机票部分-->
                <div class="fl big_pic M_rt20">
                    <a href="http://www.baicheng.com/tickets/42901.html" title="美国" target="_blank">
                        <img src="/images/home/qianzheng_1466579359_8641.jpg" alt="">
                    </a>
                </div>
                <div class="pro_list fl">
                    <div class="list_box">
                     
                     <!--境外签证部分第一框-->
                        <a href="http://www.baicheng.com/tickets/43158.html" title="日本" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579457_309.jpg" alt="">

                                <div class="info">
                                    <span class="tit">日本东京迪士尼乐园/迪士尼海洋乐园门票(电子票)</span>
                                    <span class="sm ST">东京迪士尼乐园和迪士尼海洋乐园可任选其一进入游玩</span>
                                    <div class="price">

                                        ￥<em>238</em>起<span class="yj">￥1658</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                            <!--境外签证部分第二框-->
                        <a href="http://www.baicheng.com/tickets/43161.html" title="英国" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579474_7264.jpg" alt="">

                                <div class="info">
                                    <span class="tit">英国伦敦城市通票 London Pass 2日或3日票</span>
                                    <span class="sm ST"></span>
                                    <div class="price">

                                        ￥<em>468</em>起<span class="yj">￥729</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                               <!--境外签证部分第三框-->
                        <a href="http://www.baicheng.com/tickets/34254.html" title="新加坡" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579488_1748.jpg" alt="">

                                <div class="info">
                                    <span class="tit">（实体票）新加坡名胜世界SEA海洋馆</span>
                                    <span class="sm ST"> S.E.A. Aquarium 此门票为实体票，默认顺丰快递包邮</span>
                                    <div class="price">

                                        ￥<em>76</em>起<span class="yj">￥120</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                         <!--境外签证部分第四框-->
                        <a href="http://www.baicheng.com/tickets/41917.html" title="新加坡" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579502_4881.jpg" alt="">

                                <div class="info">
                                    <span class="tit">（经济舱）新加坡至民丹岛往返船票</span>
                                    <span class="sm ST">丹娜美拉--本单特拉尼渡轮码头</span>
                                    <div class="price">

                                        ￥<em>215</em>起<span class="yj">￥359</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                  
                        
                        
                        
                          <!--境外签证部分第五框-->
                         <a href="http://www.baicheng.com/tickets/40398.html" title="日本" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579518_1835.jpg" alt="">

                                <div class="info">
                                    <span class="tit">日本大阪环球影城门票</span>
                                    <span class="sm ST">大阪环球影城门票</span>
                                    <div class="price">

                                        ￥<em>330</em>起<span class="yj">￥1320</span>
                                    </div>
                                </div>
                            </div>
                        </a>

                          <!--境外签证第六匡-->
                        <a href="http://www.baicheng.com/tickets/36157.html" title="新加坡" target="_blank">
                            <div class="jw_cont">
                                <img src="/images/home/qianzheng_1466579533_2099.jpg" alt="">

                                <div class="info">
                                    <span class="tit">（实体票）新加坡环球影城</span>
                                    <span class="sm ST">实体票顺丰包邮，更有多重大礼包！</span>
                                    <div class="price">

                                        ￥<em>199</em>起<span class="yj">￥370</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!--门票内容 结束-->

            

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            


        
        
        
     

           

        </div>
   
    <!--境外必备 end-->

    <!--合作伙伴 start-->
    <div style="height: auto;" class="box_b Mtop20 BC_tabox clearfix BC_tabs_binded">
        <div class="hd">
           
            <div class="tit">
                <ul class="BC_tabox_tabs">
                    <li class="cur"><a href="javascript:void(0);" class="New_btn nav" onfocus="this.blur();"><span>合作伙伴</span><i class="ico"></i></a></li>
                    
                   
                </ul>
            </div>
        </div>
        <div class="box_nr">
            <div class="in_partner">
                <div class="sp_box BC_tabox_cons">
                    <!--使馆-->
                    <ul style="display: block;">
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c539.gif" alt="境外旅游网推荐美国大使馆"></p>
                            <p class="float_sm_text">美国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c520.gif" alt="境外旅游网推荐加拿大大使馆"></p>
                            <p class="float_sm_text">加拿大大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c53.gif" alt="境外旅游网推荐泰国大使馆"></p>
                            <p class="float_sm_text">泰国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c546.gif" alt="境外旅游网推荐新加坡大使馆"></p>
                            <p class="float_sm_text">新加坡大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c512.gif" alt="境外旅游网推荐日本大使馆"></p>
                            <p class="float_sm_text">日本大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c538.gif" alt="境外旅游网推荐韩国大使馆"></p>
                            <p class="float_sm_text">韩国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/cadly.gif" alt="境外旅游网推荐澳大利亚大使馆"></p>
                            <p class="float_sm_text">澳大利亚大使馆</p>
                        </li>

                        <li>
                            <p class="float_sm_img"><img src="/images/home/c542.gif" alt="境外旅游网推荐法国大使馆"></p>
                            <p class="float_sm_text">法国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c513.gif" alt="境外旅游网推荐德国大使馆"></p>
                            <p class="float_sm_text">德国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c511.gif" alt="境外旅游网推荐英国大使馆"></p>
                            <p class="float_sm_text">英国大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c533.gif" alt="境外旅游网推荐新西兰大使馆"></p>
                            <p class="float_sm_text">新西兰大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c56.gif" alt="境外旅游网推荐土耳其大使馆"></p>
                            <p class="float_sm_text">土耳其大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c541.gif" alt="境外旅游网推荐阿联酋"></p>
                            <p class="float_sm_text">阿联酋大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c58.gif" alt="境外旅游网推荐马来西亚"></p>
                            <p class="float_sm_text">马来西亚大使馆</p>
                        </li>

                        <li>
                            <p class="float_sm_img"><img src="/images/home/flb.gif" alt="境外旅游网推荐菲律宾大使馆"></p>
                            <p class="float_sm_text">菲律宾大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c01.gif" alt="境外旅游网推荐柬埔寨大使馆"></p>
                            <p class="float_sm_text">柬埔寨大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/nbe.gif" alt="境外旅游网推荐尼泊尔大使馆"></p>
                            <p class="float_sm_text">尼泊尔大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c518.gif" alt="境外旅游网推荐意大利大使馆"></p>
                            <p class="float_sm_text">意大利大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c52.gif" alt="境外旅游网推荐瑞士大使馆"></p>
                            <p class="float_sm_text">瑞士大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c524.gif" alt="境外旅游网推荐西班牙大使馆"></p>
                            <p class="float_sm_text">西班牙大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c547.gif" alt="境外旅游网推荐希腊大使馆"></p>
                            <p class="float_sm_text">希腊大使馆</p>
                        </li>

                        <li>
                            <p class="float_sm_img"><img src="/images/home/c550.gif" alt="境外旅游网推荐南非大使馆"></p>
                            <p class="float_sm_text">南非大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c544.gif" alt="境外旅游网推荐奥地利大使馆"></p>
                            <p class="float_sm_text">奥地利大使馆</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c529.gif" alt="境外旅游网推荐挪威大使馆"></p>
                            <p class="float_sm_text">挪威大使馆</p>
                        </li>
                    </ul>
                    <!--旅游局-->
                    <ul style="display: none;">
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c222.gif" alt="境外旅游网推荐泰国旅游局"></p>
                            <p class="float_sm_text">泰国旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c225.gif" alt="境外旅游网推荐马来西亚旅游局"></p>
                            <p class="float_sm_text">马来西亚旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c230.gif" alt="境外旅游网推荐新加坡旅游局"></p>
                            <p class="float_sm_text">新加坡旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/rbly.gif" alt="境外旅游网推荐日本旅游局"></p>
                            <p class="float_sm_text">日本旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/mldfly.gif" alt="境外旅游网推荐马尔代夫旅游局"></p>
                            <p class="float_sm_text">马尔代夫旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/flbly.gif" alt="境外旅游网推荐菲律宾旅游局"></p>
                            <p class="float_sm_text">菲律宾旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c226.gif" alt="境外旅游网推荐澳大利亚旅游局"></p>
                            <p class="float_sm_text">澳大利亚旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/nwlsly.gif" alt="境外旅游网推荐新南威尔士旅游局"></p>
                            <p class="float_sm_text">新南威尔士旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c219.gif" alt="境外旅游网推荐昆士兰旅游局"></p>
                            <p class="float_sm_text">昆士兰旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/xaly.gif" alt="境外旅游网推荐西澳旅游局"></p>
                            <p class="float_sm_text">西澳旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/adlywdlyly.gif" alt="境外旅游网推荐澳大利亚维多利亚旅游局"></p>

                            <p class="float_sm_text">澳大利亚维多利亚旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c224.gif" alt="境外旅游网推荐新西兰旅游局"></p>
                            <p class="float_sm_text">新西兰旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/fgly.gif" alt="境外旅游网推荐法国旅游局"></p>
                            <p class="float_sm_text">法国旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/blsly.gif" alt="境外旅游网推荐比利时旅游局"></p>
                            <p class="float_sm_text">比利时旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c213.gif" alt="境外旅游网推荐英国旅游局"></p>
                            <p class="float_sm_text">英国旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c214.gif" alt="境外旅游网推荐荷兰旅游局"></p>
                            <p class="float_sm_text">荷兰旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c21.gif" alt="境外旅游网推荐瑞士旅游局"></p>
                            <p class="float_sm_text">瑞士旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c212.gif" alt="境外旅游网推荐德国旅游局"></p>
                            <p class="float_sm_text">德国旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c216.gif" alt="境外旅游网推荐汉堡旅游局"></p>
                            <p class="float_sm_text">汉堡旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/lsly.gif" alt="境外旅游网推荐琉森旅游局"></p>
                            <p class="float_sm_text">琉森旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c26.gif" alt="境外旅游网推荐意大利旅游局"></p>
                            <p class="float_sm_text">意大利旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c28.gif" alt="境外旅游网推荐希腊旅游局"></p>
                            <p class="float_sm_text">希腊旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c217.gif" alt="境外旅游网推荐奥地利旅游局"></p>
                            <p class="float_sm_text">奥地利旅游局</p>
                        </li>
                        <li style="width: auto;">
                            <p class="float_sm_img"><img src="/images/home/c211.gif" alt="境外旅游网推荐西班牙旅游局"></p>
                            <p class="float_sm_text">西班牙旅游局</p>
                        </li>
                    </ul>
                    <!--航空公司-->
                    <ul style="display: none;">
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c355.gif" alt="境外旅游网推荐中国国际航空公司"></p>
                            <p class="float_sm_text">中国国际航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c317.gif" alt="境外旅游网推荐中国南方航空公司"></p>
                            <p class="float_sm_text">中国南方航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c375.gif" alt="境外旅游网推荐海南航空公司"></p>
                            <p class="float_sm_text">海南航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c318.gif" alt="境外旅游网推荐泰国大众航空公司"></p>
                            <p class="float_sm_text">泰国大众航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/qrkhk.gif" alt="境外旅游网推荐全日空航空"></p>
                            <p class="float_sm_text">全日空航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c315.gif" alt="境外旅游网推荐日本航空"></p>
                            <p class="float_sm_text">日本航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c356.gif" alt="境外旅游网推荐大韩航空"></p>
                            <p class="float_sm_text">大韩航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c39.gif" alt="境外旅游网推荐新加坡航空公司"></p>
                            <p class="float_sm_text">新加坡航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/alqhk.gif" alt="境外旅游网推荐阿联酋航空公司"></p>
                            <p class="float_sm_text">阿联酋航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/ktehk.gif" alt="境外旅游网推荐卡塔尔航空公司"></p>
                            <p class="float_sm_text">卡塔尔航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/flhk.gif" alt="境外旅游网推荐芬兰航空公司"></p>
                            <p class="float_sm_text">芬兰航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c357.gif" alt="境外旅游网推荐AA Airline"></p>
                            <p class="float_sm_text">AA Airline</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c349.gif" alt="境外旅游网推荐美国联合航空公司"></p>
                            <p class="float_sm_text">美国联合航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c369.gif" alt="境外旅游网推荐德国汉莎航空"></p>
                            <p class="float_sm_text">德国汉莎航空</p>
                        </li>

                        <li>
                            <p class="float_sm_img"><img src="/images/home/fghk.gif" alt="境外旅游网推荐法国航空"></p>
                            <p class="float_sm_text">法国航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c30.gif" alt="境外旅游网推荐肯尼亚航空"></p>
                            <p class="float_sm_text">肯尼亚航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c31.gif" alt="境外旅游网推荐海南航空公司"></p>
                            <p class="float_sm_text">海南航空公司</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c32.gif" alt="境外旅游网推荐春秋航空"></p>
                            <p class="float_sm_text">春秋航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c33.gif" alt="境外旅游网推荐斯里兰卡国家航空"></p>
                            <p class="float_sm_text">斯里兰卡国家航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c34.gif" alt="境外旅游网推荐国泰航空"></p>
                            <p class="float_sm_text">国泰航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c35.gif" alt="境外旅游网推荐北美航空"></p>
                            <p class="float_sm_text">北美航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c36.gif" alt="境外旅游网推荐东星航空"></p>
                            <p class="float_sm_text">东星航空</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c312.gif" alt="境外旅游网推荐Vladivostok Avia"></p>
                            <p class="float_sm_text">Vladivostok Avia</p>
                        </li>
                        <li>
                            <p class="float_sm_img"><img src="/images/home/c311.gif" alt="境外旅游网推荐Tiki"></p>
                            <p class="float_sm_text">Tiki</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--合作伙伴 end-->
</div>
</div>
@include("home.common.footer")