/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  Expression email is undefined on line 6, column 28 in Templates/Licenses/license-default.txt. LauTinggg <weibo>
 * @Create on 2016-7-1 16:04:13
 * @Version 1.0
 */
$(function () {
	$("#avartar").uploadify({
		//flash上传程序的脚本文件
		swf : "/plugins/uploadify/uploadify.swf",
		//设置按钮样式
		buttonText : "点我上传",
		buttonImage : "/plugins/uploadify/ImgBtn.png", 
		width : 50,
		height:23,
		//上传要求的控制
		fileTypeExts : "*.jpg;*.jpeg;*.png;*.gif",
		fileSizeLimit : 1*1024*1024,
		//岁表单一起提交的数据
		formData : {
			_token: document.fm._token.value,
			uid : document.fm.uid.value,
		},
		//提交处理
		method : "post",
		uploader: "/Admin/user/avartar",
                
                
                
                
		onUploadSuccess : function (file, txt, response) {
//                    alert(txt);
			eval("var result =" +  txt);//'var result={}'
			if (!result.status){
				alert(result.info);
			} else {
				$("#im").attr("src", result.info);
			}
		}
	});
})

