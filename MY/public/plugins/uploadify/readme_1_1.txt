#设置属性#
id: jQuery(this).attr('id'),//绑定的input的ID 
langFile: 'http://www.static-xxx.nu/uploader/uploadifyLang_en.js',//语言包的路径，能设置所有的提示文字 
【swf】: 'http://www.static-xxx.nu/uploader/uploadify.swf',//[必须设置]swf的路径 
【uploader】: '/uploadify/galleri.php',//[必须设置]上传文件触发的url 
【auto】:false,//文件选择完成后，是否自动上传 
【buttonText】:'Välj Filer',//上传按钮的文字 
【buttonImage】: '',	//上传图片按钮样式
height: 30,				//上传按钮的高和宽 一般和按钮图片大小一致
width: 120, 
buttonCursor: 'pointer',//上传鼠标hover后Cursor的形状 
【cancelImage】: '/upload/201206/20120618142325932.png',//[必须设置]取消图片的路径 
checkExisting:'/uploader/uploadify-check-existing.php',//检查上传文件是否存，触发的url，返回1/0 
debug: true,//debug模式开/关，打开后会显示debug时的信息 
fileObjName:'file', 
fileSizeLimit : 0,//文件的极限大小，以字节为单位，0为不限制。1MB:1*1024*1024 
fileTypeDesc: 'Bild JPG',//允许上传的文件类型的描述，在弹出的文件选择框里会显示 
fileTypeExts: '*.jpg',//允许上传的文件类型，限制弹出文件选择框里能选择的文件 
method: 'post',//和后台交互的方式：post/get 
multi: true,//是否能选择多个文件 
queueID: 'fileQueue',//显示上传文件队列的元素id，可以简单用一个div来显示 
queueSizeLimit : 999,//队列中允许的最大文件数目 
progressData : 'all', // 'percentage''speed''all'//队列中显示文件上传进度的方式：all-上传速度+百分比，percentage-百分比，speed-上传速度 
removeCompleted : true,//上传成功后的文件，是否在队列中自动删除 
removeTimeout: 3, 
requeueErrors : true, 
postData: {},//和后台交互时，附加的参数 
preventCaching : true, 
transparent: true, 
successTimeout : 30,//上传时的timeout 
uploadLimit:999//能同时上传的文件数目 

#绑定事件#
onDialogClose : function(swfuploadifyQueue) {//当文件选择对话框关闭时触发 
　　if( swfuploadifyQueue.filesErrored > 0 ){ 
　　alert( '添加至队列时有' 
　　+swfuploadifyQueue.filesErrored 
　　+'个文件发生错误n' 
　　+'错误信息:' 
　　+swfuploadifyQueue.errorMsg 
　　+'n选定的文件数:' 
　　+swfuploadifyQueue.filesSelected 
　　+'n成功添加至队列的文件数:' 
　　+swfuploadifyQueue.filesQueued 
　　+'n队列中的总文件数量:' 
　　+swfuploadifyQueue.queueLength); 
　　} 
} 
onDialogOpen : function() {//当选择文件对话框打开时触发 
　　alert( 'Open!'); 
} 

onSelect : function(file) {//当每个文件添加至队列后触发 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus); 
} 

onSelectError : function(file,errorCode,errorMsg) {//当文件选定发生错误时触发 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus 
　　+ ' - 错误代码: ' + errorCode 
　　+ ' - 错误信息: ' + errorMsg); 
} 

onQueueComplete : function(stats) {//当队列中的所有文件全部完成上传时触发 
　　alert( '成功上传的文件数: ' + stats.successful_uploads 
　　+ ' - 上传出错的文件数: ' + stats.upload_errors 
　　+ ' - 取消上传的文件数: ' + stats.upload_cancelled 
　　+ ' - 出错的文件数' + stats.queue_errors); 
} 

onUploadComplete : function(file,swfuploadifyQueue) {//队列中的每个文件上传完成时触发一次 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus 
　　+ ' - 出错的文件数: ' + swfuploadifyQueue.filesErrored 
　　+ ' - 错误信息: ' + swfuploadifyQueue.errorMsg 
　　+ ' - 要添加至队列的数量: ' + swfuploadifyQueue.filesSelected 
　　+ ' - 添加至对立的数量: ' + swfuploadifyQueue.filesQueued 
　　+ ' - 队列长度: ' + swfuploadifyQueue.queueLength); 
} 

onUploadError : function(file,errorCode,errorMsg,errorString,swfuploadifyQueue) {//上传文件出错是触发（每个出错文件触发一次） 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus 
　　+ ' - 错误代码: ' + errorCode 
　　+ ' - 错误描述: ' + errorMsg 
　　+ ' - 简要错误描述: ' + errorString 
　　+ ' - 出错的文件数: ' + swfuploadifyQueue.filesErrored 
　　+ ' - 错误信息: ' + swfuploadifyQueue.errorMsg 
　　+ ' - 要添加至队列的数量: ' + swfuploadifyQueue.filesSelected 
　　+ ' - 添加至对立的数量: ' + swfuploadifyQueue.filesQueued 
　　+ ' - 队列长度: ' + swfuploadifyQueue.queueLength); 
} 

onUploadProgress : function(file,fileBytesLoaded,fileTotalBytes, 
queueBytesLoaded,swfuploadifyQueueUploadSize) {//上传进度发生变更时触发 
alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus 
　　+ ' - 当前文件已上传: ' + fileBytesLoaded 
　　+ ' - 当前文件大小: ' + fileTotalBytes 
　　+ ' - 队列已上传: ' + queueBytesLoaded 
　　+ ' - 队列大小: ' + swfuploadifyQueueUploadSize); 
} 

onUploadStart: function(file) {//上传开始时触发（每个文件触发一次） 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus ); 
} 

onUploadSuccess : function(file,data,response) {//上传完成时触发（每个文件触发一次） 
　　alert( 'id: ' + file.id 
　　+ ' - 索引: ' + file.index 
　　+ ' - 文件名: ' + file.name 
　　+ ' - 文件大小: ' + file.size 
　　+ ' - 类型: ' + file.type 
　　+ ' - 创建日期: ' + file.creationdate 
　　+ ' - 修改日期: ' + file.modificationdate 
　　+ ' - 文件状态: ' + file.filestatus 
　　+ ' - 服务器端消息: ' + data 
　　+ ' - 是否上传成功: ' + response); 
} 