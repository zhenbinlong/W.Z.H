@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<script type="text/javascript" src="{{asset('/plugins/wbox/mapapi.js')}}"></script> 
<script type="text/javascript" src="{{asset('/plugins/wbox/wbox.js')}}"></script> 
<link rel="stylesheet" type="text/css" href="{{asset('/plugins/wbox/wbox/wbox.css')}}" />
<div style="color:blueviolet;">
    
</div>
<div class="center">
    



    <div class="tableMain" >
        <form <div  method="post" action="{{url('/Admin/rule/multi')}}">
        <table  class="right-table" width="99%"  border="0px" cellpadding="0" align="center" cellspacing="0" >
            <tbody >

                <tr >
                    <th>ID</th>
                    <th>权限</th>
                    <th>名称</th>
                    <th>状态</th>
                    
                    <th id="clearTDrightBorder">操作</th>
                </tr>
                @foreach($rules as $rule)
                <tr>
                    <td><input type="checkbox" name="rules[]" value="{{ $rule->id }}">&nbsp;{{ $rule->id}}</td>
                    <td>{{ $rule->name}}</td>
                    <td>{{ $rule->title}}</td>
                    <td>{!! $rule->status == 1 ? "有效":"<font color='red'>禁用</font>" !!}</td>
                    <td><a class="editRule" href="javascript:void 0;" rule="{{$rule->id}}">编辑</a></td>
                </tr>
               @endforeach
                

                
                
            </tbody>
        </table>
        
            <input type="hidden" name="_token" value="{{csrf_token()}}" />
            <p>
                <input style="color:blueviolet;" type="submit" name="submit" value="选中有效" />
                <input style="color:blueviolet;" type="submit" name="submit" value="选中禁用" />
                <input style="color:blueviolet;" type="submit" name="submit" value="选中删除" />
            </p>
        </form>
    </div> 

          
</div>
<script src="{{asset('js/admin/admin_rule_index.js')}}"></script>
 
@include("admin.layout.foot")