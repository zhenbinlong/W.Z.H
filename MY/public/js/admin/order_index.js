/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function ()
{
    $("input:radio").click(function(){
       
//        alert(333);
        $.ajax({
            type:"post",
            url:"/Admin/linelist/setStatus",
            data:"status=" +$(this).val() + "&line_list_id="+$(this).attr("line_list_id"),
            dataType:"json",
            success:function (result){
                alert(result.info);
                if(!result.status) location.reload();
            }
        })
    });
});

