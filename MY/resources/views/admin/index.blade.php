@include("admin.layout.head")
<link rel="stylesheet" type="text/css" href="/css/admin/U_styles.css" media="all" />
<link rel="stylesheet" type="text/css" href="/css/admin/U_demo.css" media="all" />
<script src="{{ asset('/plugins/uploadify/jquery.uploadify.min.js')}}"></script>
<link type="text/css" rel="stylesheet" href="{{asset('/plugins/uploadify/uploadify.css')}}" />
<div class="container">
    <!-- freshdesignweb top bar -->
    <div class="freshdesignweb-top">

        <span class="right">

        </span>
        <div class="clr"></div>
    </div><!--/ freshdesignweb top bar -->
    <header>
        <h1><span>个人中心</span>资料</h1>
    </header>       
    <!-- start header here-->
    <header>
        <div id="fdw-pricing-table">
            <div class="plan plan1" style="margin-left:250px">
                <div class="header">头像</div>
                <img src="{{Session::get('userData')->avartar}}" width="140" id="im" class="fl" />

                <div style="clear:both;" >

                    <form name="fm">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <input type="hidden" name="uid" value="{{Session::get("userData")->uid}}" />
                        <input type="file" name="avartar" id="avartar" multiple="true" /> 
                    </form>
                </div>
            </div>

            <div class="plan plan3">
                <div class="header">详情</div>

                <ul>
                    <li><b>账号：</b> {{Session::get('userData')->uname}}</li>
                    <li><b>昵称：</b> {{Session::get('userData')->nickname}}</li>
                    <li><b>性别：</b> {{Session::get('userData')->sex}}</li>
                    <li><b>创建：</b>{{Session::get('userData')->created_at}}</li>			
                </ul>

            </div>
           
        </div>

    </header><!-- end header -->

</div>
<script src="{{asset('/js/admin/index_avartar.js')}}"></script>




@include("admin.layout.foot")		
