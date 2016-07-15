/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $("table.right-table input:checkbox").click(function (){
//        alert($(this).attr("groupid"));//debug
//        alert($(this).val());//debug
        $.ajax({
            
            type:"post",
            url:"/Admin/group/setRule",
            data:"rule=" + $(this).val() + "&id=" + $(this).attr("groupid"),
            dataType:"json",
            success:function (result){
                alert(result.info);
                if(!result.status) location.reload();
            }
        });
    })
});

