/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function ()
{
    $("input:radio").click(function(){
        $.ajax({
            type:"post",
            url:"/Admin/category/setIsNav",
            data:"isNav=" +$(this).val() + "&d_id="+$(this).attr("d_id"),
            dataType:"json",
            success:function (result){
                alert(result.info);
                if(!result.status) location.reload();
            }
        })
    });
});

