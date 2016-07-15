@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/user')}}" method="post" name="fm">
        
            <input type="hidden"  name="_token" value="{{ csrf_token() }}">
            <input type="hidden" name="_method" value="PUT" />
            
    </form>
</div>
<div class="center">
    



    <div class="tableMain" >
        <table  class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>ID</th>
                    <th>名称</th>
                    <th>权限</th>
                    
                    <th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($groups as $group)
                <tr>
                    <td>{{ $group->id }}</td>
                    <td>{{ $group->title }}</td>
                    <td>
                      @foreach($rules as $key=>$rule)
                        @if($key%7==0)<p>@endif
                            @if(in_array($rule->id,explode(",",$group->rules)))
                            <input type="checkbox" groupid="{{ $group->id }}" name="rule" value="{{ $rule->id}}" checked>{{ $rule->title}}
                            @else
                            <input type="checkbox" groupid="{{ $group->id }}" name="rule" value="{{ $rule->id}}">{{ $rule->title}}
                        @endif
                        @if($key%7== 6)</p>@endif
                      @endforeach
                    </td>
                    <td><a href="{{url('/Admin/group').'/'.$group->id."/edit"}}">编辑</a> <a href="{{url('/Admin/group/delete').'/'.$group->id}}">删除</a></td>
                </tr>
                @endforeach
                
               
                

                
                
            </tbody>
        </table>
        
    </div> 

          
</div>
<script src="/js/admin/admin_group_index.js"></script>
 
@include("admin.layout.foot")