@include("home.common.head")
<link rel="stylesheet" type="text/css" href="/css/admin/U_styles.css" media="all" />
<link rel="stylesheet" type="text/css" href="/css/home/U_demo.css" media="all" />
<script src="{{ asset('/plugins/uploadify/jquery.uploadify.min.js')}}"></script>
<link type="text/css" rel="stylesheet" href="{{asset('/plugins/uploadify/uploadify.css')}}" />
<div class="container">
    <!-- freshdesignweb top bar -->
  <div > 
    
        <h1><span>个人中心</span>资料</h1>
         
    <!-- start header here-->
    <header>
        <div id="fdw-pricing-table">
            <div class="plan plan1" style="margin-left:250px">
                <div class="header">头像</div>
                <img src="{{Session::get('homeUserData')->avartar}}" width="140" height="150" id="im" class="fl" />

                <div style="clear:both;" >

                    <form name="fm">
                        <input type="hidden" name="_token" value="{{csrf_token()}}" />
                        <input type="hidden" name="uid" value="{{Session::get("homeUserData")->uid}}" />
                        <input type="file" name="avartar" id="avartar" multiple="true" /> 
                    </form>
                </div>
            </div>

            <div class="plan plan3">
                <div class="header">详情</div>

                <ul>
                    <li><b>账号：</b> {{$user->uname}}</li>
                    <li><b>真实姓名</b> {{$user->truename}}</li>
                    <li><b>性别：</b> {{$user->sex}}</li>
                    <li><b>联系方式：</b>{{$user->phone}}</li>
                    <li><b>地址：</b>{{$user->addr}}</li>	
                </ul>

            </div>
           
        </div>

    </header><!-- end header -->
</div>
</div>
<script src="{{asset('/js/home/user_avartar.js')}}"></script>
@include("home.common.footer")