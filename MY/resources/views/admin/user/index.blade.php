@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/user')}}" method="post" name="fm">
        
            <input type="hidden"  name="_token" value="{{ csrf_token() }}">
            <p>
                <input type="text" name="keyword" value="{{ $keyword }}" placeholde="请输入账号或昵称">
                <input type="submit" value="查看">
            </p>
    </form>
</div>
<div class="center">
    



    <div class="tableMain" >
        <table class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>ID</th>
                    <th>账号</th>
                    <th>性别</th>
                    <th>昵称</th>
                    <th>创建时间</th>
                    <th>权限</th>
                    <th id="clearTDrightBorder">操作</th>
                </tr>

                
               
               

                
                @foreach($users as $user)
                <tr>
                    <td>{{$user->uid}}</td>
                    <td>{{$user->uname}}</td>
                    <td>{{$user->sex}}</td>
                    <td>{{$user->nickname}}</td>
                    <td>{{$user->created_at}}</td>
                    <td>
                        <select style="color:blueviolet;" name="groupid" uid="{{ $user->uid }}">
                            @foreach($groups as $group)
                                @if($user->group_id == $group->id)
                                <option value="{{ $group->id }}" selected>{{ $group->title }}</option>
                                @else
                                <option value="{{ $group->id }}">{{ $group->title }}</option>
                                @endif
                            @endforeach
                        </select>
                    </td>
                    <td  ><a href="{{ url('/Admin/user/'.$user->uid.'/edit') }}">编辑</a> || <a href="{{ url('/Admin/user/delete/'.$user->uid) }}">删除</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <p>
            {!!$users->appends(["keyword" => $keyword])->render()!!}
        </p> 
    </div> 

          
</div>
<script src="/js/admin/admin_user_index.js"></script>
 
@include("admin.layout.foot")