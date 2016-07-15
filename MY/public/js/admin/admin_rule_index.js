/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
    $("a.editRule").mouseover(function (){
        
        $(this).wBox({
            title:"设置权限",
            target:"/Admin/rule/show/" + $(this).attr("rule"),
            requestType:"iframe",
            iframeWH:{
                width:800,
                height:500
            },
            opacity:.3
        });
    });
});

