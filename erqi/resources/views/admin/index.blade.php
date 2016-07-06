@include("admin.layout.head")
<script src="{{ asset('/plugins/uploadify/jquery.uploadify.min.js')}}"></script>
<link type="text/css" rel="stylesheet" href="{{asset('/plugins/uploadify/uploadify.css')}}" />
<div style="margin-left:400px">
    <img src="{{Session::get('userData')->avartar}}" width="120" id="im" class="fl" />
    <ul class="fl">
        <li>账号：{{Session::get("userData")->uname}}</li>
        <li>昵称：{{Session::get("userData")->nickname}}</li>
        <li>性别：{{Session::get("userData")->sex}}</li>
        <li>创建：{{Session::get("userData")->created_at}}</li>
    </ul>

    <form name="fm">
        <input type="hidden" name="_token" value="{{csrf_token()}}" />
        <input type="hidden" name="uid" value="{{Session::get("userData")->uid}}" />
        <input type="file" name="avartar" id="avartar" multiple="true" />
    </form>
</div>



<script src="{{asset('/js/admin/index_avartar.js')}}"></script>
@include("admin.layout.foot")		
