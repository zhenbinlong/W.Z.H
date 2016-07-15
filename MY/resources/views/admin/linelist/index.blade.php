@include("admin.layout.head")
<link type="text/css" rel="stylesheet" href="{{asset('/bootstrap/css/bootstrap.css')}}" />
<div style="color:blueviolet;">
    <form action="{{url('/Admin/linelist')}}" method="post" name="fm">
        
            <input type="hidden"  name="_token" value="{{ csrf_token() }}">
            <p>
                <input type="text" name="keyword" value="{{ $keyword}}" placeholde="请输入账号或昵称">
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
                    <th>路线名称</th>
                    <th>出发时间</th>
                    <th>出发地点</th>
                    <th>报名人数</th>
                    <th>预订人名</th>
                    <th>配送地址</th>
                    <th>订单金额</th>
                    <th>添加时间</th>
                    <th>订单状态</th>
                    
                    
                </tr>

                
               
                <!--style="text-align:center"-->

                
                @foreach($orders as $order)
                <tr>
                    <td>{{ $order->line_list_id}}</td>
                    <td>{{ $order->uname}}</td>
                    <td>{{ $order->line_name}}</td>
                    <td>{{ $order->go_time}}</td>
                    <td>{{ $order->start_city}}</td>
                    <td>{{ $order->go_num}}</td>
                    <td>{{ $order->order_name}}</td>
                    <td>{{ $order->order_add}}</td>
                    <td>{{ $order->total_pri}}</td>
                    <td>{{ $order->addtime}}</td>
                    <td>
                        
                        
                            <input type="radio" name="status.{{$order->line_id}}" line_list_id="{{ $order->line_list_id}}" value ="未付款" @if($order->status == "未付款") checked @endif>未付款
                            <input type="radio" name="status.{{$order->line_id}}" line_list_id="{{ $order->line_list_id}}" value ="已付款" @if($order->status == "已付款") checked @endif>已付款
                            <input type="radio" name="status.{{$order->line_id}}" line_list_id="{{ $order->line_list_id}}" value =="已完成" @if($order->status == "已完成") checked @endif>已完成
                        
                        
                        
                       
                    </td>
                    
                </tr>
                @endforeach
            </tbody>
        </table>
        <p>
            
        </p> 
    </div> 

          
</div>
<script src="/js/admin/order_index.js"></script>
 
@include("admin.layout.foot")