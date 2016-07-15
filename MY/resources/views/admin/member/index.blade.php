@include("admin.layout.head")

 <link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/user')}}" method="post" name="fm">
        
            <input type="hidden"  name="_token" value="{{ csrf_token() }}">
            <p>
                <input type="text" name="keyword" value="" placeholde="请输入账号或昵称">
                <input type="submit" value="查看">
            </p>
    </form>
</div>
<div class="center">
    
<!--    <div class="topMenu">
                    <ul>
                    <li><a href="javascript:add()">　新增　</a></li>
                    <li><a href="#">　发布　</a></li>
                    <li><a href="#">　删除　</a></li>
                    <li><a href="#">　驳回　</a></li>
                    <li><a href="#">　置顶　</a></li>
                    <li><a href="#">　取消置顶　</a></li>
                    <li><a href="#">　推荐　</a></li>
                    <li><a href="#">　取消推荐　</a></li>
                    <li><a href="#">　复制　</a></li>
                    <li><a href="#">　转移　</a></li>
                    </ul>
    </div>-->


    <div class="tableMain" >
        <table class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>ID</th>
                    <th>账号</th>
                    <th>性别</th>
                    <th>手机</th>
                    <th>邮箱</th>
                    <th>时间</th>
                    <th>生日</th>
                    <th>地址</th>
                    <th>邮编</th>
                    <th>头像</th>
                    
                    <th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($users as $user)
                <tr>
                <td>{{ $user->uid}}</td>
                <td>{{ $user->uname}}</td>
                <td>{{ $user->sex}}</td>
                <td>{{ $user->phone}}</td>
                <td>{{ $user->email}}</td>
                <td>{{ $user->created_at}}</td>
                <td>{{ $user->birthday}}</td>
                <td>{{ $user->addr}}</td>
                <td>{{ $user->truename}}</td>
                <td><img width="60px" height="60px" src="{{ $user->avartar}}"></td>
                <td><a href="">#</a></td>
                
                </tr>
                @endforeach
            </tbody>
        </table>
        
    </div> 

          
</div>
@include("admin.layout.foot")