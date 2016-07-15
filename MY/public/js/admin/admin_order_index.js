/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  liutian<1538731090@qq.com> liutian_jiayi
 * @Create on 2016-6-27 14:47:01
 * @Version 1.0
 */
$(function () {
    //给分组下拉框绑定onchange事件
    $("select[name=status]").change(function () {
//        alert("333");//debug
        alert(222);
        var result = confirm("确定要修改订单状态你吗？");
        if (!result) {
            location.reload();
            return;
        }
        //发送AJAX请求服务器端处理
        $.ajax({
            
            type : "post",
            url : "/Admin/user/setGroup",
            data : "group_id=" + $(this).val() + "&uid=" + $(this).attr("uid"),
            dataType : "json",
            success : function (result) {
                alert(result.info);
                if (!result.status) location.reload();
            }
        });
    });
})

