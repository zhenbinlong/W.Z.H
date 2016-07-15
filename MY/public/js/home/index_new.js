$(function() {
	$(".slider_banner").slideBind({
		event: "mouseover",
		boxItems: ".item",
		btnsBox: ".popo",
		btnsTagName: '<i/>',
		curClass: "cur",
		aniSpeed: 1000,
		speed: 5000
	});
	//剩余时间：<b>03</b>天<b>12</b>小时<b>59</b>分<b>38</b>秒
	$(".remaining_time").countDown({
		callback: function(e) {
			e.o.html("剩余时间：<b>" + e.diff.day + "</b>天<b>" + e.diff.hour + "</b>小时<b>" + e.diff.minute + "</b>分<b>" + e.diff.second + "</b>秒");
		},
		onEnd: function(e) {
			e.o.text("已结束");
		}
	});
	$(".BC_tabox").tabsBind({
		event: "click",
		tabs: ".BC_tabox_tabs>*",
		lists: ".BC_tabox_cons>*",
		curClass: "cur"
	});
	$(".visa_user_list").marqueeBind({
		marqueeBox: ".visa_user",
		direction: "top",
		speed: 20,
		waitTime: 1000,
		step: 68,
		mouseOverStop: false
	});
	$(".prosroller").each(function(index, element) {
		var T = $(this);
		var Btn_li = T.find("li")
		var box = $(".buy_limit ul");
		var box_li = $(".buy_limit li");
		var W = 1020
		Btn_li.click(function() {
			var index = Btn_li.index(this)
			Btn_li.removeClass("cur")
			$(this).addClass("cur")
			box.animate({
				left: -W * index
			})
		})

	});

});

// 首页底部广告
function indexBotmBar() {
	/*var tmp = '<div class="indexbot_fc"><div class="indexbot_fcbg"></div><div class="indexbot_fccon"><!-- <a class="mdimg2" href="http://zt.baicheng.com/DaNang/index.html" target="_black">&nbsp;</a><span></span> --><a class="mdimg2" href="http://zt.baicheng.com/maldives_20150907/index.html" target="_black">&nbsp;</a><span></span><span class="fl mdimg"><!-- <img src="http://static.baicheng.com/images/images/index/botmd.png" /> --><img src="http://static.baicheng.com/images/index/botmad20150916.png" /></span><span class="fr erwm"><em>百程微信公众号</em><i><img src="http://static.baicheng.com/images/index/boterwm.jpg" /></i></span><a href="javascript:void(0);" class="close"></a></div><div id="notice" style="display:none;"><span></span><span><a href="javascript:void(0);">X</a></span></div></div>';
	document.write(tmp);
	$(".indexbot_fccon a.close").bind('click', function() {
		$(".indexbot_fc").hide();
	});*/
	console.log('首页吸底广告暂时下线');
}
// 首页顶通
/*function indexTopBar(){
	var indexTopBar = $('<div style="height:80px;background:#d93637;text-align:center"><a href="http://zt.baicheng.com/nopayment_20150909/index.html" target="_blank"><img src="http://static.baicheng.com/images/global/topBar_refundment.jpg" /></a></div>');
	$('.bc_header').before(indexTopBar);
}*/
//覆盖funjs里的顶通
/*function topBar(){
	$('.topBar').hide();
	console.log('首页顶通暂时屏蔽');
}*/
//首页卷帘广告  2015双11
/*(function slideUpAd(){
	var indexTopBar = $('<div class="slideUpAd" style="display:none;height:80px;text-align:center"><a style="width:100%;height:80px;display:block;background:url(http://static.baicheng.com/images/global/slideUp_1.jpg) no-repeat center;" href="http://zt.baicheng.com/double-eleven2/index.html" target="_blank"><div style="position:relative;width:1000px;height:80px;margin:0 auto;"><span style="width:17px;height:15px;display:block;position:absolute;right:0;top:5px;background:url(http://static.baicheng.com/images/index/topBarClose_2.png);z-index:9999;cursor: pointer;" id="slideUpAdClose"></span></div>');
	var oSlideUp = $('<div class="slideUpAd_big" style="display:none;position:relative;z-index:999;width:100%;height:0px;text-align:center"><a style="width:100%;height:600px;display:block;background:url(http://static.baicheng.com/images/global/slideUp_2.jpg) no-repeat center;" href="http://zt.baicheng.com/double-eleven2/index.html" target="_blank"><div style="position:relative;width:1000px;height:600px;margin:0 auto;"></div>');
	$('.bc_header').before(oSlideUp).before(indexTopBar);
	clearTimeout(timer1,timer2);
	var timer1 = setTimeout(function(){
		$('.slideUpAd_big').css({"display":"block","top":"0px","height":"0px"})
		.animate({"height":"600px"},1500);
	}, 1000);
	var timer2 = setTimeout(function(){
		$('.slideUpAd_big').animate({"height":"80"},1500,function(){
			$('.slideUpAd_big').css({"display":"none"});
			$('.slideUpAd').css({"display":"block","opacity":"0"}).animate({"opacity":"1"});
		});
		$('#slideUpAdClose').click(function(){$('.slideUpAd').slideUp();return false});
	}, 5500);
})();*/