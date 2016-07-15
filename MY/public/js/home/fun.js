windowWidth=$(window).width();
windowHeight=$(window).height();
$(window).resize(function(){
	windowWidth=$(window).width();
	windowHeight=$(window).height();
});
$(function(){
	var BrowserInfo = getBrowserInfo();
	if(BrowserInfo.b=="msie"){
		$("body").addClass("IE"+BrowserInfo.v);
		
		//兼容IE9以下  input placeholder属性
		$("input").each(function(){
			var T=$(this);
			var p=$(this).attr("placeholder");
			if(p){
				var color=$(this).css("color");
				if(T.attr("type")=="password"){
					if(T.is(':visible')){//可见状态
						var ph=$('<div/>').css({position:"absolute",zIndex:10,left:T.offset().left,top:T.offset().top,width:T.outerWidth(),height:T.outerHeight(),lineHeight:T.css("lineHeight"),color:"a9a9a9",textIndent:parseInt(T.css("textIndent"))+parseInt(T.css("paddingLeft"))}).text(p).click(function(e){
							T.focus();
						}).insertAfter($(this));
						T.focus(function(){
							ph.hide();
						}).blur(function(){
							if($(this).val()==""){
								ph.show();
							}
						});
						setTimeout(function(){
							ph.css({left:T.offset().left,top:T.offset().top,width:T.outerWidth(),height:T.outerHeight()});
						},200);
					}
				}else{
					$(this).focus(function(){
						if($(this).val()==p){
							$(this).css("color",color).val("");
						}
					}).blur(function(){
						if($(this).val()==""){
							$(this).css("color","#a9a9a9").val(p);
						}
					});
					if($(this).val()==""){
					    $(this).css("color","#a9a9a9").val(p);
					}
					if(T.val()==p){
						T.attr("nVal","true");
					}
					nValFun();
				}
			}
		});
	}
	BC_Control_Select();
	BC_Control_Select_original();
	BC_Control_Checkbox();
	BC_Control_Radio();
	BC_Control_Increment();
	bindTipBox();
	//字体处理
	FONT_rbno2Light();
	//绑定验证
	validationBind();
});
var isIE6= /msie 6/i.test(navigator.userAgent); 
function getBrowserInfo(){
	var r={b:null,v:0};
	var BrowserInfo = navigator.userAgent.toLowerCase();
	if(BrowserInfo.indexOf("msie") > 0){
		r.b="msie";
		r.v=parseInt(String(BrowserInfo.match(/msie ([\d.]+);/g)).replace(/(msie )|;/g,""));
	}
	return r;
}
function nValFun(){
	$("input").each(function(){
		var T=$(this);
		var p=T.attr("placeholder");
		var n=T.attr("nVal");
		if(n){
			if(T.val()==p){
				T.focus(function(){
					if(T.val()==p){
						T.css("color",color).val('');
					}
				}).blur(function(){
					if(T.val()==p){
						T.css("color","#a9a9a9").val('');
					}
				});
				T.css("color","#a9a9a9").val('');
			}	
		}
	})
}
//验证
//<input fn="手机号" class="required" vali="mobile" />
//<form>
//	<input fn="邮箱" class="required" vali="email" />
//	<a href="#" class="BC_validation"></a>
//</form>
function validationBindObject(obj,opt){
	var settings={
		showInputRight:showInputRight,
		showInputError:showInputError
	};
	var selector="input:not(.noBindValidation):not(:radio):not(:checkbox):not([type=button]),select:not(.noBindValidation),textarea:not(.noBindValidation),:not(.validationBinded)";
	obj.filter(selector).addClass("validationBinded").bind("focus change",function(e){
		$(this).removeClass("BC_Input_error");
		if(typeof settings.showInputRight=="function"){
			settings.showInputRight($(this));
		}
	}).blur(function(e){
		var o=$(this);
		setTimeout(function(){
			var r=validation(o);
			if(!r.result){
				result=false;
				settings.showInputError(o,r.txt);
			}else if(typeof settings.showInputRight=="function"){
				settings.showInputRight(o);
			}
		},200);
	});
}
function validationBind(obj,opt){
	var settings={
		topObj:$("body"),
		showInputRight:showInputRight,
		showInputError:showInputError
	};
	$.extend(settings, opt);
	if(obj){
		settings.topObj=obj;
	}
	var selector="input:not(.noBindValidation):not(:radio):not(:checkbox):not([type=button]),select:not(.noBindValidation),textarea:not(.noBindValidation)";
	var topObj=settings.topObj;
	validationBindObject(topObj.find(selector));
	
	var validationFormBox=topObj.find(".BC_ValidationFormBox");
	if(validationFormBox.length==0){
		validationFormBox=topObj.find("form");
	}
	
	
	validationFormBox.each(function(){
		var thisForm=$(this);
		var btnValidation=$(this).find(".BC_validation");
		btnValidation.each(function(){//不同验证按钮规则
			var btn=$(this);
			if($(this).attr("vali-objs")){
				var vselector=$(this).attr("vali-objs");
			}else{
				var vselector=selector+",.BC_Validation_Radio,.BC_Validation_Checkbox";
			}
			var inputs = thisForm.find(vselector);
			var btnSwitchClass=btn.attr("switchclass");
			if(btnSwitchClass){//验证按钮控制逻辑
				var keyupValidationTimeout=null;
				inputs.bind("keyup",function(){
					var thisInput=$(this);
					if(keyupValidationTimeout){
						clearTimeout(keyupValidationTimeout);
						keyupValidationTimeout=null;
					}
					keyupValidationTimeout=setTimeout(function(){
						var r=validation(thisInput);
						if(r.result){
							inputsEachAll();
						}else{
							btn.addClass(btnSwitchClass);
						}
					},500);
				});
				inputs.bind("blur",function(){
					var thisInput=$(this);
					if(keyupValidationTimeout){
						clearTimeout(keyupValidationTimeout);
						keyupValidationTimeout=null;
					}
					var r=validation(thisInput);
					if(!r.result){
						settings.showInputError(thisInput,r.txt,{fromEvent:"blur"});
					}
					inputsEachAll();
				});
				inputs.filter("select").bind("change",function(){
					var r=validation($(this));
					if(!r.result){
						settings.showInputError($(this),r.txt,{fromEvent:"blur"});
					}
					inputsEachAll();
				});
				var inputsEachAll=function(isShowError){
					inputs.each(function(){
						var r=validation($(this));
						if(!r.result){
							if(isShowError){
								settings.showInputError($(this),r.txt,{fromEvent:"blur"});
							}
							btn.addClass(btnSwitchClass);
							return false;
						}else if(typeof settings.showInputRight=="function"){
							if(isShowError){
								settings.showInputRight($(this));
							}
							btn.removeClass(btnSwitchClass);
						}
					});
				};
				inputsEachAll();
			}
			function getinputs(){
				return thisForm.find(vselector)

			}
			var btnClickStatus=false;
			btn.click(function(e) {
				if(btnClickStatus){
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				}
				btnClickStatus=true;
				setTimeout(function(){
					btnClickStatus=false;
				},500);
				/*if(btnSwitchClass&&$(this).hasClass(btnSwitchClass)){
					result=false;
				}else{*/
					var result = validationAll(getinputs(),settings);
				/*}*/
				if (!result) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				}
			});
			if($(this).attr("valiall")){
				
			}
		});
	});
	
	
	/*validationFormBox.find(".BC_validation").click(function(e) {
		var vselector=selector+",.BC_Validation_Radio,.BC_Validation_Checkbox";
	    var result = true;
	    var os = $(this).parents(validationFormBox.vselector).find(vselector);
		
	    os.each(function() {
	        var o = $(this);
	        var r = validation(o);
	        if (!r.result) {
	            result = false;
	            showInputError(o, r.txt);
	        }else if(typeof showInputRight=="function"){
				showInputRight(o);
			}
	    });
	    if (!result) {
	    	e.preventDefault();
	        e.stopPropagation();
	        e.stopImmediatePropagation();
	    }
	});*/
	topObj.find(".BC_Validation_Radio,.BC_Validation_Checkbox").click(function(){
		$(this).removeClass("BC_Input_error");
		if(typeof settings.showInputRight=="function"){
			settings.showInputRight($(this));
	    }
	});
	$.fn.extend({
		BC_ValidationRadioEvent:function(type){
			switch(type){
				case "getValue":
					return this.find("input:radio:checked").val();
					break;
				default:
					
					break;
			}
		},
		BC_ValidationCheckboxEvent:function(type){
			switch(type){
				case "getValue":
					var cs=this.find("input:checkbox:not(:disabled):checked");
					var r="";
					cs.each(function(i){
						if(i>0){
							r+=",";
						}
						r+=$(this).val();
					});
					return r;
					break;
				default:
					
					break;
			}
		}
	}); 
}
function validationAll(objs,opt){
	var settings={
		isShowError:true,
		showInputRight:showInputRight,
		showInputError:showInputError
	};
	$.extend(settings, opt);
	var result=true;
	$(objs).each(function(){
		var r=validation($(this));
		if(!r.result){
			result=false;
			if(settings.isShowError){
				settings.showInputError($(this),r.txt);
			}
		}else if(typeof settings.showInputRight=="function"){
			settings.showInputRight($(this));
		}
	});
	return result;
}
function showInputError(o,txt,isPos){
	o.addClass("BC_Input_error");
	var html=$('<div class="P_LayerInputError"/>')
		.css({left:o.offset().left,top:o.offset().top,width:o.outerWidth()-2,height:o.outerHeight()-2,lineHeight:(o.outerHeight()-2)+"px"})
		.text(txt)
		.click(function(e){
			$(this).remove();
			setTimeout(function(){
				o.focus();
			},500);
			e.preventDefault();
		})
		.appendTo("body")
		.delay(1500)
		.fadeOut(500,function(){
			$(this).remove();
		});
		if (isPos) {
		$("html,body").stop().animate({scrollTop:o.offset().top},300);
	}
}
function showInputRight(o){
	o.removeClass("BC_Input_error");
}
function validation(o){
	if(o.hasClass("validation_none")){
		return {o:o,result:true,txt:"不验证"};
	}
	if(o.is(":hidden")){
		return {o:o,result:true,txt:"不可见控件"}; 
	}
	var txt="";
	var result=true;
	var op=o;
	var value="";
	if(o.hasClass("BC_Validation_Radio")){
		value=o.BC_ValidationRadioEvent("getValue");
	}else if(o.hasClass("BC_Validation_Checkbox")){
		value=o.BC_ValidationCheckboxEvent("getValue");
	}else{
		value=o.val();
	}
	var fn=o.attr("fn");
	var fc=o.attr("fc");
	
	var placeholder=o.attr("placeholder");
	op.removeClass("error");
	if(o.hasClass("required")){
		if(value==""||value==placeholder){
			result=false;
			txt=getInfoTxt("不能为空");
			return {o:o,result:result,txt:txt};
		}
	}
	if(typeof cacheData=="undefined"){
		cacheData={};
	}
	var v=o.attr("vali");
	if((v&&value!=""&&value!=placeholder)||(v&&v.indexOf("least")!=-1)){
		var rela="or";
		var vs=v.split("||");
		if(vs.length==1&&v.split("&&").length>1){
			rela="and";
			vs=v.split("&&");
		}
		for(var i=0;i<vs.length;i++){
			var reg=getRules(vs[i]);
			if(reg.k){//其他条件验证
				var isBreak=false;
				switch(reg.k){
					case "same":/*相同内容*/
						var v="";
						var sameobj=o.parents("form").find("[vali=same\\["+reg.n+"\\]]");
						sameobj.removeClass("BC_Input_error");
						sameobj.each(function(i){
							if(i==0){
								v=$(this).val();
							}else if($(this).val()!=""){
								if(v!=$(this).val()){
									result=false;
									txt=getInfoTxt("内容不同");
								}
							}
						});
						break;
					case "with":/*比对相同内容*/
						var withObj=$(reg.n);
						if(withObj.length){
							if(value!=withObj.val()){
								result=false;
								txt=getInfoTxt("密码不同");
							}
						}else{
							result=false;
							txt=getInfoTxt("找不到比对对象");
						}
						break;
					case "withnot":/*比对不相同内 容*/
						var withObj=$(reg.n);
						if(withObj.length){
							if(value==withObj.val()){
								result=false;
								txt=getInfoTxt("不能相同");
							}
						}else{
							result=false;
							txt=getInfoTxt("找不到比对对象");
						}
						break;
					case "least":/*比对内容 至少填1项*/
						if(value==""){
							var leastObj=$(reg.n);
							
							if(leastObj.length){
								result=false;
								var titles="";
								leastObj.each(function(){
									if($(this).val()!=""){
										result=true;
										return false;
									}
									titles+=","+$(this).attr("fn");
								});
								if(!result){
									txt=getInfoTxt(titles+"至少填一项");
								}
							}else{
								result=false;
								txt=getInfoTxt("找不到比对对象");
							}
							
						}
						break;
					case "not":/*不为**/
						if(value==reg.n){
							result=false;
							txt=getInfoTxt("选择不正确");
						}
						break;
					case "max":/*最大值**/
						if(!Number(value)){
							result=false;
							txt=getInfoTxt("只能填写数字");
						}else if(!Number(reg.n)){
							result=false;
							txt=getInfoTxt("验证规则错误");
						}else if(Number(value)>Number(reg.n)){
							result=false;
							txt=getInfoTxt("最大值:"+reg.n);
						}
						break;
					case "ajax":/*ajax验证(同步)**/
						var rnArray=reg.n.replace(/[\'\"]/g,"").split(",");
						var ajaxSettings={
							url:rnArray[0],
							data:rnArray.length>=1?rnArray[1]:{},
							type:rnArray.length>=2?rnArray[2]:"GET"
						}
						$.ajax({
							type: ajaxSettings.type,
							url: ajaxSettings.url,
							data: ajaxSettings.data,
							async:false,
							success: function(data){
								if(typeof data=="string"){
									data=eval("("+data+")");
								}
								if(!data.result){
									result=false;
									txt=data.txt;
								}
								if(typeof ajaxValidationCallback=="function"){
									ajaxValidationCallback({
										o:o,
										result:data.result,
										txt:data.txt
									});
								}
							}
						});
						break;
					default:
						break;
				}
				if(reg.k=="least"&&!result){
					break;
				}
				if(rela=="and"&&!result){
					break;
				}else if(rela=="or"&&result){
					break;
				}
			}else{//正则验证
				var cm = value.match(reg);
				if(!!cm){
				    result = true;
					if(rela=="or"){break;}
				}else{
					result=false;
					txt=getInfoTxt("格式不正确");
					if(rela=="and"){break;}
				}
			}
		}
	}
	function getInfoTxt(error){
		return (o.attr("fn")?o.attr("fn"):"")+(o.attr("fc")?o.attr("fc"):error);
	}
	function getRules(rname){
		var rns=rname.match(/^([a-z]+)\[(.+)\]$/i);
		if(rns){
			var cname=rns[1];
		}else{
			var cname=rname;
		}
		switch (cname) {
			case "mobile":
				return /^((\(\d{2,3}\))|(\d{3}\-))?1[3578]\d{9}$/;
				break;
			case "phone":
				return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;
				break;
			case "email":
				return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				break;
			case "idcard":
				return /^(\d{17}[xXyY]|\d{18})|(\d{14}[xXyY]|\d{15})$/;
				break;
			case "passport":
				return /^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/;
				break;
			case "qq":
				return /^[1-9][0-9]{4,}$/;
				break;
			case "url":
				return /^([a-zA-Z]+:\/\/)?[^\s\.]+\.[^\s]*$/;
				break;
			case "date":
				return /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
				break;
			case "chinese":
				return /^[\u4E00-\u9FA5]+$/;
				break;
			case "english":
				return /^[a-zA-Z\s]+$/;
				break;
			case "same":
				return {k:"same",n:rns[2]};
				break;
			case "with":
				return {k:"with",n:rns[2]};
				break;
			case "withnot":
				return {k:"withnot",n:rns[2]};
				break;
			case "least":
				return {k:"least",n:rns[2]};
				break;
			case "integer":
				return /^\d+$/;
				break;
			case "max":
				return {k:"max",n:rns[2]};
				break;
			case "length":  //length[0,4],length[4],length[4,]
				var ls=rns[2].split(",");
				var rs="";
				for(var i in ls){
					if(i>0){
						rs+=",";
					}
					rs+=String(ls[i]);
				}
				return new RegExp("^.{"+rs+"}$");
				break;
			case "custom":
				return new RegExp(rns[2]);
				break;
			case "not":
				return {k:"not",n:rns[2]};
				break;
			case "ajax":
				return {k:"ajax",n:rns[2]};
				break;
			default:
				break;
		}
	}
	return {o:o,result:result,txt:txt}
}
$.fn.extend({
	//tab切换
	tabsBind:function(options){
		var settings={
			event:"mouseover",
			tabs:"",
			lists:null,
			curIsRun:false,
			curClass:"current",
			tabsDefault:0,
			onSelect:function(e){}
		};
		$.extend(settings, options);
		var r=[];
		this.each(function(){
			if($(this).hasClass("BC_tabs_binded"))return true;
			$(this).addClass("BC_tabs_binded");
			var T=$(this);
			var tabs=$(this).find(settings.tabs);
			if(tabs.length==0){return;}
			if(settings.lists){
				var lists=$(this).find(settings.lists);
			}
			tabs.each(function(i){
				$(this).bind(settings.event,function(e,d){
					if($(this).hasClass(settings.curClass)&&!settings.curIsRun){return false;}
					tabs.removeClass(settings.curClass);
					$(this).addClass(settings.curClass);
					if(settings.lists){
						T.height(T.height());
						lists.stop(true,true).hide().eq(i).fadeIn(300,function(){
							T.height("auto");
						});
					}
					settings.onSelect({e:e,o:$(this),i:i,box:T,tabs:tabs,lists:lists,list:settings.lists?lists.eq(i):null,model:d});
					if($(this).get(0).tagName.toLowerCase()=="a"){
						e.preventDefault();
					}
				});
			});
			tabs.eq(settings.tabsDefault).trigger(settings.event,"init");
			r.push({tabs:tabs,lists:lists});
		});
		return r;
	},
	tabLayerBind:function(options){
		var settings={
			showEvent:"mouseover",
			hideEvent:"mouseout",
			tabs:"",
			boxs:null,
			curClass:"current",
			onSelect:function(e){}
		};
		$.extend(settings, options);
		var r=[];
		this.each(function(){
			if($(this).hasClass("BC_tabLayer_binded"))return true;
			$(this).addClass("BC_tabLayer_binded");
			var tabs=$(this).find(settings.tabs);
			if(settings.boxs){
				var boxs=$(this).find(settings.boxs);
			}
			tabs.each(function(i){
				var to=null;
				$(this).bind(settings.showEvent,function(e){
					if(to)clearTimeout(to);
					if($(this).hasClass(settings.curClass)){return false;}
					tabs.removeClass(settings.curClass);
					$(this).addClass(settings.curClass);
					if(boxs){
						boxs.eq(i).show(300);
					}
	
				    
					settings.onSelect({e:e,o:$(this),i:i,tabs:tabs,boxs:boxs,box:settings.boxs?boxs.eq(i):null});
					if($(this).get(0).tagName.toLowerCase()=="a"){
						e.preventDefault();
					}
				});
				$(this).bind(settings.hideEvent,function(e){
					var T=$(this);
					to=setTimeout(function(){
						T.removeClass(settings.curClass);
						if(boxs){
							boxs.eq(i).hide(0);
						}
						if(T.get(0).tagName.toLowerCase()=="a"){
							e.preventDefault();
						}
					},500);
				});
			});
			tabs.eq(settings.tabsDefault).trigger(settings.event);
			r.push({tabs:tabs,boxs:boxs});
		});
		return r;
	},
	marqueeBind:function(options){
		var settings={
			event:"mouseover",
			marqueeBox:"",  //滚动层,可选
			direction:"left",   //滚动方向   暂只支持  left,top
			autoWidth:true,  //滚动层自动宽
			autoStart:true,  //自动开始
			mouseOverStop:true,  //鼠标经过停止
			mouseOutStart:true,  //鼠标离开开始
			speed:20,   //滚动速度
			waitTime:3000,
			step:0,
			onMouseOver:function(e){},  //鼠标经过callback
			onMouseOut:function(e){}    //鼠标离开callback
		};
		$.extend(settings, options);
		this.each(function(){
			if($(this).hasClass("BC_marquee_binded"))return true;
			$(this).addClass("BC_marquee_binded");
			var mbox=$(this);
			if(!settings.marqueeBox||settings.marqueeBox==""){
				var mabox=mbox.children().eq(0);
			}else{
				var mabox=mbox.find(settings.marqueeBox);
			}
			var maboxChilds=mabox.children();
			var moveInv=null;
			mbox.css({position:"relative",overflow:"hidden"});
			mabox.css({position:"absolute"});
			
			var maboxChildsImgs=maboxChilds.find("img");
			/*var maboxChildsLoads=0;
			maboxChildsImgs.bind("load",function(){
				maboxChildsLoads++;
				if(maboxChildsLoads==maboxChildsImgs.length){
					init();
				}
			}).bind("error",function(){
				maboxChildsLoads++;
				if(maboxChildsLoads==maboxChildsImgs.length){
					init();
				}
			});*/
			var maboxWidth=0;
			var maboxHeight=0;
			var init=function(){
				if(settings.direction=="left"||settings.direction=="right"){
					maboxChilds.each(function(i,item){
						maboxWidth+=$(this).outerWidth();
					});
					//mabox.width(maboxWidth*2);//设置mabox宽，因2组列表，乘2
					mabox.width(10000);//设置mabox宽，由于图片加载等问题,直接设置10000宽
				}else{
					maboxHeight=mabox.outerHeight();
				}
				var maboxChildsClone=maboxChilds.clone(true);//复制列表
				maboxChildsClone.appendTo(mabox);//插到mabox里
				if(settings.autoStart){
					if(settings.step>0){
						setTimeout(function(){
							move();
						},settings.waitTime);
					}
				}
			};
			var iiiii=0;
			var maboxLeft=0;
			var maboxTop=0;
			var moveObj={
				left:function(){
					moveInv=setInterval(function(){
						var left=mabox.position().left-1;
						maboxLeft=left==maboxLeft?left-1:left;   //解决有浏览器(IE8)滚动一定距离后距离不变.
						if(Math.abs(maboxLeft)>=maboxWidth){
							maboxLeft=0;
						}
						mabox.css({left:maboxLeft});
					},settings.speed);
				},
				top:function(){
					moveInv=setInterval(function(){
						var top=mabox.position().top-1;
						maboxTop=top==maboxTop?top-1:top;   //解决有浏览器(IE8)滚动一定距离后距离不变.
						if(Math.abs(maboxTop)>=maboxHeight){
							maboxTop=0;
						}
						mabox.css({top:maboxTop});
						if(settings.step>0){
							if(maboxTop%settings.step==0){
								clearInterval(moveInv);
								setTimeout(function(){
									move();
								},settings.waitTime);
							}
						}
					},settings.speed);
				}
			}
			var move=function(){
				moveObj[settings.direction]();
			};
			var moveStop=function(){
				if(moveInv){
					clearInterval(moveInv);
				}
			};
			mbox.hover(function(){
				if(settings.mouseOverStop){
					moveStop();
				}
				settings.onMouseOver(getObjs());
			},function(){
				if(settings.mouseOutStart&&settings.mouseOverStop){
					move();
				}
				settings.onMouseOut(getObjs());
			});
			var getObjs=function(){
				return {
					mbox:mbox,
					mabox:mabox,
					maboxChilds:maboxChilds,
					moveStart:move,
					moveStop:moveStop
				}
			}
			init();
		});
	},
	//slide幻灯
	slideBind:function(options){
		var settings={
			event:"mouseover",
			box:null,
			boxItems:null,
			btnsBox:null,
			btnsTagName:'<a href="#" />',
			curClass:"current",
			aniSpeed:500,
			speed:5000,
			autoPlay:true,
			isHoverStop:true,
			onSelect:function(e){}
		};
		$.extend(settings, options);
		var r=[];
		this.each(function(){
			if($(this).hasClass("BC_slide_binded"))return true;
			$(this).addClass("BC_slide_binded");
			var T=$(this);
			var boxItems=$(this).find(settings.boxItems);
			var btnsBox=$(this).find(settings.btnsBox);
			var index=-1;
			if(boxItems.length<=1){
				boxItems.show();
				return;
			}
			var moveStatus=false;
			boxItems.each(function(i){
				var btn=$(settings.btnsTagName).bind(settings.event,function(e){
					if($(this).hasClass(settings.curClass)){return false;}
					move(i);
					if($(this).get(0).tagName.toLowerCase()=="a"){
						e.preventDefault();
					}
				}).appendTo(btnsBox);
				if(i==0){
					//$(this).show();
					//btn.addClass("cur");
					
				}
			});
			var btns=btnsBox.find(settings.btnsTagName.match(/^\<([a-z]+)/)[1]);
			var move=function(i){
				if(index==i)return;
				moveStatus=true;
				var oIndex=index;
				index=i;
				btns.removeClass(settings.curClass).eq(i).addClass(settings.curClass);
				boxItems.stop(true,true).css({zIndex:0}).eq(i).css({zIndex:1}).fadeIn(settings.aniSpeed);
				boxItems.eq(oIndex).fadeOut(settings.aniSpeed,function(){
					moveStatus=false;
				});
				settings.onSelect({i:index,o:{btn:btns.eq(i),boxItem:boxItems.eq(i)},box:T,boxItems:boxItems,btns:btns,autoStop:autoStop,autoStart:auto,settings:settings});
			}
			var autoAni=null;
			var auto=function(){
				if(autoAni){clearInterval(autoAni);}
				autoAni=setInterval(function(){
					if(index==boxItems.length-1){
						var i=0;
					}else{
						var i=index+1;
					}
					move(i);
				},settings.speed);
			}
			var autoStop=function(){
				if(autoAni){clearInterval(autoAni);}
			}
			if(settings.autoPlay&&settings.isHoverStop){
				$(this).hover(function(){
					autoStop();
				},function(){
					if(settings.autoPlay){
						auto();
					}
				});
			}
			if(settings.autoPlay){
				auto();
			}
			move(0);
			//tabs.eq(index).trigger(settings.event);
			//r.push({tabs:tabs,lists:lists});
		});
		return r;
	},
	scrollBind:function(options){
		var settings={
			event:"mouseover",
			left:"",
			right:"",
			box:null,
			boxPanel:null,
			boxPanelItems:null,
			step:1,
			isCycle:true,
			speed:500,
			onInit:function(e){},
			onMouseOver:function(e){},
			onMouseOut:function(e){},
			onScrollBefore:function(e){return true;},
			onScroll:function(e){}
		};
		$.extend(settings, options);
		var R=[];
		var THIS=this;
		THIS.each(function() {
			var as = false;
			var T=$(this);
			var curIndex=0;
			var btnLeft = T.find(settings.left);
			var btnRight = T.find(settings.right);
			var sbox = T.find(settings.box).css({position:"relative",overflow:"hidden"});
			var sboxPanel = T.find(settings.boxPanel).css({position:"absolute",width:10000});
			var sboxPanelItems = T.find(settings.boxPanelItems);
			var itemWidth=sboxPanelItems.outerWidth()+parseInt(sboxPanelItems.css("marginLeft"),10)+parseInt(sboxPanelItems.css("marginRight"),10);
			var stepWidth = settings.itemWidth * settings.step;
			btnLeft.bind("click", function(e) {
				show("prev",e);
				e.preventDefault();
			});
			btnRight.bind("click", function(e) {
				show("next",e);
				e.preventDefault();
			});
			var show=function(dir,event){
				if (as)return false;
				if(!settings.onScrollBefore({o:T,btnLeft:btnLeft,btnRight:btnRight,show:show,curIndex:curIndex,sbox:sbox,items:sboxPanelItems,btnLeft:btnLeft,btnRight:btnRight,dir:dir})){
					return false;
				}
				as = true;
				if(dir=="prev"){
					curIndex--;
					if(curIndex<0){
						curIndex=sboxPanelItems.length-1;
					}
					for(var i=0;i<settings.step;i++){
						T.find(settings.boxPanelItems).eq(T.find(settings.boxPanelItems).length-(i+1)).prependTo(sboxPanel.css({left:itemWidth*(i+1)*-1}));
					}
					sboxPanel.animate({left:0},settings.speed,function(){
						/*for(var i=0;i<settings.step;i++){
							T.find(settings.boxPanelItems).last().remove();
						}*/
						sboxPanelItems=T.find(settings.boxPanelItems);
						as=false;
					});
				}else if(dir=="next"){
					curIndex++;
					if(curIndex>=sboxPanelItems.length){
						curIndex=0;
					}
					/*for(var i=0;i<settings.step;i++){
						T.find(settings.boxPanelItems).eq(i).clone(true).appendTo(sboxPanel);
					}*/
					sboxPanel.animate({left:itemWidth*settings.step*-1},settings.speed,function(){
						for(var i=0;i<settings.step;i++){
							T.find(settings.boxPanelItems).first().appendTo(sboxPanel);
						}
						sboxPanel.css({left:0});
						sboxPanelItems=T.find(settings.boxPanelItems);
						as=false;
					});
				}else if(String(dir).match(/^\-?\d+$/)){
					var step=parseInt(dir);
					curIndex+=step;
					if(step<0){
						for(var i=0;i<Math.abs(step);i++){
							T.find(settings.boxPanelItems).eq(T.find(settings.boxPanelItems).length-(i+1)).prependTo(sboxPanel.css({left:itemWidth*(i+1)*-1}));
						}
						sboxPanel.animate({left:0},settings.speed,function(){
							/*for(var i=0;i<settings.step;i++){
								T.find(settings.boxPanelItems).last().remove();
							}*/
							sboxPanelItems=T.find(settings.boxPanelItems);
							as=false;
						});
					}else{
						for(var i=0;i<step;i++){
							T.find(settings.boxPanelItems).eq(i).clone(true).appendTo(sboxPanel);
						}
						sboxPanel.animate({left:itemWidth*step*-1},settings.speed,function(){
							for(var i=0;i<step;i++){
								T.find(settings.boxPanelItems).first().remove();
							}
							sboxPanel.css({left:0});
							sboxPanelItems=T.find(settings.boxPanelItems);
							as=false;
						});
					}
					
				}
				settings.onScroll({o:T,btnLeft:btnLeft,btnRight:btnRight,show:show,curIndex:curIndex,sbox:sbox,items:sboxPanelItems,btnLeft:btnLeft,btnRight:btnRight});
			};
			T.hover(function(){
				settings.onMouseOver(re);
			},function(){
				settings.onMouseOut(re);
			});
			function getIndex(){
				return curIndex;
			}
			var re={btnLeft:btnLeft,btnRight:btnRight,show:show,getIndex:getIndex};
			if(THIS.length==1){
				R=re;
			}else{
				R.push(re);
			}
			settings.onInit({o:T,btnLeft:btnLeft,btnRight:btnRight,show:show,curIndex:curIndex,sbox:sbox,items:sboxPanelItems,btnLeft:btnLeft,btnRight:btnRight});
		});
		return R;
	},
	countDown:function(options){
		var settings={
			type:"date",//date,num
			order:-1,
			dataAttr:"date", //if type=="num"     [60,0]
			dateType:"end",  //end, between
			data:null,
			format:"yyyy年MM月dd日 hh:mm:ss",
			step:1000,
			callback:null,
			onEnd:function(e){}
		};
		$.extend(settings, options);
		this.each(function(){
			var T=$(this);
			if(settings.data){
				if(settings.type=="date"){
					var date=settings.data;
				}else if(settings.type=="num"){
					var startNum=settings.data[0];
					var endNum=settings.data[1];
				}
			}else{
				if(settings.type=="date"){
					var date=new Date(T.data(settings.dataAttr));
				}else if(settings.type=="num"){
					var dataAttr=T.data(settings.dataAttr).split(",");
					var startNum=parseInt(dataAttr[0]);
					var endNum=parseInt(dataAttr[1]);
				}
			}
			var timeAni=setInterval(function(){
				if(settings.type=="date"){
					showTime();
				}else if(settings.type=="num"){
					showNum();
				}
			},settings.step);
			var isEnd=false;
			var showNum=function(){
				if(settings.callback){
					settings.callback({o:T,num:startNum,isEnd:isEnd});
				}
				if(startNum==endNum){
					isEnd=true;
					if(settings.onEnd){
						settings.onEnd({o:T,num:startNum,isEnd:isEnd});
					}
				}
				if(isEnd){
					clearInterval(timeAni);
					return;
				}
				startNum+=settings.order;
			}
			var showTime=function(){
				if(settings.dateType=="end"){
					var now=new Date();
					var diffdate=date.getTime()-now.getTime();
				}else if(settings.dateType=="between"){
					var diffdate=date;
					date-=settings.step;
				}
				if(diffdate>0){
					int_day=Math.floor(diffdate/86400000)
					diffdate-=int_day*86400000;
					int_hour=Math.floor(diffdate/3600000)
					diffdate-=int_hour*3600000;
					int_minute=Math.floor(diffdate/60000)
					diffdate-=int_minute*60000;
					int_second=Math.floor(diffdate/1000)
					diffdate-=int_second*1000;
					int_millisecond=Math.floor(diffdate)
					var diff={
						day:int_day,
						hour:int_hour,
						minute:int_minute,
						second:int_second,
						millisecond:int_millisecond
					};
				}else{
					isEnd=true;
					var diff={
						day:0,
						hour:0,
						minute:0,
						second:0,
						millisecond:0
					}
				}
				if(settings.callback){
					settings.callback({o:T,date:date,diff:diff,isEnd:isEnd});
				}else{
					//天时分秒 FORMAT后续开发
					//T.text(startDate.pattern(settings.format));
				}
				if(isEnd){
					clearInterval(timeAni);
					settings.onEnd({o:T,date:date});
				}
			}
			if(settings.type=="date"){
				showTime();
			}else if(settings.type=="num"){
				showNum();
			}
		});
	},
	 //展开广告功能
	  ADSlider:function(options){
		var settings={
			box:"",hmin:"",hmax:"",sj:"",zk:"",img_width:1920,hover:true
		};
		$.extend(settings, options);
		this.each(function(index, element) {
            var o=$(this);
			var small_img=o.find(".small");
			var big_img=o.find(".big");
			var time=null;
			var zhankai=o.find(".zhankai");
			clearTimeout(time);timer();
			if(!settings.zk){
			   zhankai.hide()
			}
			function timer(){
					time=setTimeout(function(){
					o.animate({height:settings.hmin},{duration:500,queue:false,complete:function(){zhankai.text("展开");big_img.addClass("none");small_img.removeClass("none");}});
					},settings.sj)
			}
			zhankai.click(function(){
				clearTimeout(time);
				if($(this).text()=="展开"){
					o.animate({height:settings.hmax},{duration:500,queue:false,complete:function(){ timer();big_img.removeClass("none");small_img.addClass("none");$(this).text("收起");}});
					
				}
				else
				{
					o.animate({height:settings.hmin},{duration:500,queue:false,complete:function(){big_img.addClass("none");small_img.removeClass("none");$(this).text("展开");}});
					
				}
				return false
			})
			if(settings.hover){
			  o.hover(function(){ clearTimeout(time);},function(){timer()});
			}
			
		});
	},
	kefu:function(options){
	var settings={
			kefu:".kefu",
			gao:"90"
		};
		$.extend(settings, options);
		  var showFun=function(o){		 
				if($(window).scrollTop()>100){
					o.show();
				}else{
					o.hide();
				} 
		  }
		this.each(function(){
			var kefu=$(settings.kefu);
			var btnBackTop=kefu.find(".scrol_top");
			btnBackTop.click(function(){ 
				$("html,body").animate({ scrollTop: 0 },500)
				return false;
			});
			$(window).scroll(function(){
				showFun(btnBackTop);
			});
			showFun(btnBackTop);
	  });
	},
	infiniteScroll:function(options){
		var settings={
			topBiff:100,
			dataUrl:"../../../tmp_data/dujiaJSON.js",
			loadStart:function(e){},
			loadData:function(e){},
			loadNull:function(e){},
			getParam:function(e){return {};},
			getIsShow:function(e){return true;}
		};
		$.extend(settings, options);
		var ts=[];
		this.each(function(i){
			var box=$(this);
			var boxBottom=box.position().top+box.outerHeight();
			var isLoading=false;
			var isEnd=false;
			var page=0;
			$(window).scroll(function(){
				infi();
			});
			function infi(){
				if(!isLoading&&!isEnd&&settings.getIsShow({i:i,settings:settings})){
					if($(window).scrollTop()>boxBottom-settings.topBiff-$(window).height()){
						settings.loadStart({o:box});
						page++;
						isLoading=true;
						var param=settings.getParam();
						param.page=page;
						
						$.getJSON(settings.dataUrl,param,function(data){
							if(typeof data=="string"){
								data=eval("("+data+")");
							}
							if(data.list.length==0){
								isEnd=true;
								settings.loadNull({o:box});
							}else{
								if(settings.loadData({o:box,data:data})==false){
									isEnd=true;
								}
							}
							boxBottom=box.position().top+box.outerHeight();
							isLoading=false;
							infi();
						});
					}
				}
			}
			infi();
			ts.push({infi:infi});
		});
		var infyLoad=function(){
			for(var i in ts){
				ts[i].infi();
			}
		};
		return {os:this,infyLoad:infyLoad};
	},
	filterWhere:function(options){
		var settings={
			itemBox:"",
			itemList:"",
			dataItemBoxTitle:"title",
			dataTxt:"txt",
			dataKey:"key",
			dataValue:"value",
			onSelect:function(e,o,data){return true;}, // 必须返回 bool,true为添加至筛选条件，false为不添加至筛选条件
			onShow:function(e){},
			onShowAll:function(e){},
			onDelete:function(e){},
			onDeleteAll:function(e){}
		};
		$.extend(settings, options);
		var reall=[];
		this.each(function(i){
			var filterData={};
			var box=$(this);
			var itemBox=box.find(settings.itemBox);
			if(itemBox.length==0){return;}
			itemBox.each(function(){
				var tbox=$(this);
				var itemList=tbox.find(settings.itemList);
				tbox.on("click",itemList.selector,function(e){
					var data={
						name:tbox.data(settings.dataItemBoxTitle),
						title:$(this).data(settings.dataTxt),
						key:$(this).data(settings.dataKey),
						value:$(this).data(settings.dataValue)
					}
					sel($(this),data);
					showAll();
					e.preventDefault();
				});
			});
			var sel=function(o,data){
				if(settings.onSelect(getRe(),o,data)){
					filterData[data.key]=data;
				}
			}
			var show=function(key,value){
				var data={key:key,value:value};
				settings.onShow(getRe(),data);
			};
			var showAll=function(){
				settings.onShowAll(getRe());
			}
			var del=function(key){
				if(filterData[key]){
					var old=filterData[key];
					delete filterData[key];
					settings.onDelete(getRe(),old);
					showAll();
				}
			}
			var delAll=function(){
				filterData={};
				settings.onDeleteAll(getRe());
			}
			var getRe=function(){
				return {
					box:box,
					itemBox:itemBox,
					showAll:showAll,
					del:del,
					delAll:delAll,
					filterData:filterData
				};
			}
			reall.push(getRe());
		});
		if(this.length>1){
			return reall;
		}else{
			return reall[0];
		}
	},
	//幻灯片
	carousel:function(options){
		var settings={
			box:"",
			lunbox:"",
			slider_bar:"",
			li:"",
			cur:"cur",
			timeer:"",
			onSelect:function(e){}
		};
		$.extend(settings, options);
		this.each(function(index, element) {
        var $lunbox = $(settings.box);
        var $lunimg = $(settings.lunbox);
		var $lunli = $(settings.li);
        var iNow = null;
        var shijian = null;
        var $sli = $(settings.slider_bar);
		var timeer=settings.timeer;
		var leixing=0;
		var cur=settings.cur;
		if (window.navigator.userAgent.toLowerCase().indexOf("msie") >= 0) {
			var browser=navigator.appName;
            var b_version=navigator.appVersion;
			var version=b_version.split(";");
			var trim_Version=version[1].replace(/[ ]/g,"");
		}
	   if((browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") || (browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") || (browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0"))
		{
			leixing=1;
		}
		 if(leixing==0){
			 $lunimg.removeClass(cur).animate({opacity:0.0},0);
			 $lunli.removeClass(cur);
		     $lunimg.eq(0).addClass(cur).animate({opacity:1},100);
			 $lunli.eq(0).addClass(cur)
		  }
		  else
		  {
			  $lunimg.removeClass(cur).fadeOut(0);
		      $lunimg.eq(0).addClass(cur).fadeIn(1000);
		  }
         clearInterval(shijian);
		shijian = setInterval(toRun, timeer);
		function auto_pay(){
                $sli.removeClass(cur);
                $sli.eq(iNow).addClass(cur);
				$lunimg.stop();
				if(leixing==0){
					$lunimg.removeClass(cur).animate({opacity:0.0},0);
					$lunli.removeClass(cur)
				    $lunimg.eq(iNow).addClass(cur).animate({opacity:1},100);
					$lunli.eq(iNow).addClass(cur)
				}
				else{
					$lunli.removeClass(cur);
					$lunimg.removeClass(cur).fadeOut(500);
				    $lunimg.eq(iNow).addClass(cur).fadeIn(1000);
					$lunli.eq(iNow).addClass(cur)
				}	
         }	
        $sli.click(function() {
            clearInterval(shijian);
            iNow = $sli.index(this);
             auto_pay();
            return false;
        });
        $lunbox.mouseover(function() {
            clearInterval(shijian);
        })
        $lunbox.mouseout(function() {
			clearInterval(shijian);
            shijian = setInterval(toRun, timeer);
        })
        function toRun() {
            if (iNow == $lunimg.length-1)
            {   
                auto_pay();
                iNow =0;
            }
            else
            {
                iNow++;
                auto_pay();
				
            }
            if (iNow == 0) {
				
				auto_pay();
            }
        }
      });
	},
	page:function(options){
		var settings={
			showPageNum:5,
			template:'<div class="BC_page">{first}{prev}{list}{next}{last}</div>',
			listTemplate:'<a href="{url}">{pagenum}</a>',
			curTemplate:'<span class="cur">{pagenum}</span>',
			prevTemplate:'<a href="{url}" class="prev">上一页</a>',
			nextTemplate:'<a href="{url}" class="next">下一页</a>',
			firstTemplate:'<a href="{url}" class="first">首页</a>',
			lastTemplate:'<a href="{url}" class="last">末页</a>',
			urlTemplate:'list.php?page={pagenum}',
			onChangePage:function(e){},
			onInit:function(e){}
		};
		$.extend(settings, options);
		var objs=this.length>1?[]:null;
		this.each(function(){
			var T=$(this);
			var showPageHtml=function(data){
				T.html("");
				if(data.allPage<=1){
					return;
				}
				var first="",last="",prev="",next="";
				if(data.curPage>1){
					var first=getHtml(settings.firstTemplate,getUrl(1),1);
					var prev=getHtml(settings.prevTemplate,getUrl(data.curPage-1),data.curPage-1);
				}
				if(data.curPage<data.allPage){
					var last=getHtml(settings.lastTemplate,getUrl(data.allPage),data.allPage);
					var next=getHtml(settings.nextTemplate,getUrl(data.curPage+1),data.curPage+1);
				}
				var endNum=0;
				if(parseInt(settings.showPageNum/2,10)>=data.allPage-data.curPage){
					if(data.allPage<settings.showPageNum){
						var startNum=1;
						var endNum=data.allPage;
					}else{
						var startNum=data.allPage-settings.showPageNum;
					}
				}else if(settings.showPageNum/2<data.curPage){
					var startNum=data.curPage-parseInt(settings.showPageNum/2,10);
				}else{
					var startNum=1;
				}
				if(endNum==0){
					endNum=startNum+settings.showPageNum;
				}
				var list="";
				for(var i=startNum;i<=endNum;i++){
					if(i==data.curPage){
						list+=settings.curTemplate.replace(/\{pagenum\}/g,i);
					}else{
						list+=getHtml(settings.listTemplate,getUrl(i),i);
					}
				}
				var html=settings.template.replace(/{first\}/g,first)
										  .replace(/{last\}/g,last)
										  .replace(/{prev\}/g,prev)
										  .replace(/{next\}/g,next)
										  .replace(/{list\}/g,list)
				
				var o=$(html);
				o.find("[pagenum]").click(function(e){
					var ns={curPage:parseInt($(this).attr("pagenum"),10)};
					$.extend(ns, re);
					settings.onChangePage(ns);
					e.preventDefault();
				});
				o.appendTo(T);
			}
			function getUrl(pagenum){
				return settings.urlTemplate.replace(/\{pagenum\}/g,pagenum);
			}
			function getHtml(html,url,pagenum){
				return html.replace(/\{url\}/g,url).replace(/\{pagenum\}/g,pagenum).replace(/^\<a(.+)$/,"<a pagenum="+pagenum+" $1");
			}
			var re={
				o:T,
				showPageHtml:showPageHtml
			};
			settings.onInit(re);
			return re;
		});
	}
});
jQuery.extend({
	topAD:function(options){
		var settings={
			data:{
				width:"auto",
				height:"auto",
				picSmall:"",  //小图
				picBig:"",    //大图
				link:"",
				target:"_self",
				closeTime:3000   //关闭时间
			},
			autoShow:1000,     //自动显示    -1 不默认展开大图  大于等于 0为定时显示大图
			onMouseOver:function(e){}, // 必须返回 bool,true为添加至筛选条件，false为不添加至筛选条件
			onMouseOut:function(e){},
			onShow:function(e){},
			onClose:function(e){}
		};
		$.extend(settings, options);
		var picCount=0,picLoadCount=0,picLoadedAll=false;
		var sboxS,sboxB,btnClose,btnOpen;
		var sboxOutAni=null;
		var data=settings.data;
		if(data){
			data.pics={};
			imgLoad("picS",data.picSmall);
			imgLoad("picB",data.picBig);
		}
		function init(){
			var picS=$(data.pics["picS"]);
			var picB=$(data.pics["picB"]);
			var box=$('<div class="TopAD"/>');
			var adbox=$('<div class="TopADBox"/>').appendTo(box);
			if(data.width!="auto"){
				box.width(data.width);
			}
			if(data.height!="auto"){
				box.height(data.height);
			}
			
			
			sboxS=$('<div class="TopADBoxPicS" style="display:none;" />');
			var sboxSA=$('<a/>').attr("href",data.link).attr("target",data.target).appendTo(sboxS);
			$(picS).appendTo(sboxSA);
			sboxB=$('<div class="TopADBoxPicB" style="display:none;" />');
			var sboxBA=$('<a/>').attr("href",data.link).attr("target",data.target).appendTo(sboxB);
			$(picB).appendTo(sboxBA);
			
			sboxS.appendTo(adbox);
			sboxB.appendTo(adbox);
			
			btnClose=$('<a href="#" class="TopADBoxBtnClose">关闭</a>');
			btnOpen=$('<a href="#" class="TopADBoxBtnOpen">展开</a>');
			btnClose.on("click",function(e){
				sboxS.slideDown(300);
				sboxB.slideUp(300);
				btnClose.hide();
				btnOpen.show();
				e.preventDefault();
			}).appendTo(box);
			btnOpen.on("click",function(e){
				openBox();
				closeBox();
				e.preventDefault();
			}).appendTo(box);
			
			
			adbox.hover(function(e){
				openBox();
			},function(e){
				closeBox();
			});
			if(settings.autoShow>-1){
				setTimeout(function(){
					sboxB.slideDown(300,function(){
						adbox.css({minHeight:parseInt(data.pics["picS"].height)});
						closeBox();
					});
					btnClose.show();
					btnOpen.hide();
				},settings.autoShow);
			}else{
				sboxS.show();
				adbox.css({minHeight:parseInt(data.pics["picS"].height)});
			}
			box.appendTo("body");
		}
		function closeBox(){
			if(sboxOutAni){
				clearTimeout(sboxOutAni);
			}
			sboxOutAni=setTimeout(function(){
				sboxS.slideDown(300);
				sboxB.slideUp(300);
				btnClose.hide();
				btnOpen.show();
			},data.closeTime);
		}
		function openBox(){
			if(sboxOutAni){
				clearTimeout(sboxOutAni);
			}
			sboxS.slideUp(300);
			sboxB.slideDown(300);
			btnClose.show();
			btnOpen.hide();
		}
		function imgLoad(imgName,src){
			picCount++;
			var img=new Image();
			img.src=src;
			$(img).on("load error",function(e){
				picLoadCount++;
				setTimeout(function(){
					if(!picLoadedAll&&picCount==picLoadCount){
						picLoadedAll=true;
						init();
					}
				},200);
			});
			data.pics[imgName]=img;
		}
	}
});

layerbox={
	html:null,
	con:null,
	settings:null,
	show:function(options){
		var T=this;
		var settings={
			width:"auto",
			height:"auto",
			ifmID:"",
			ifmContent:"",
			type:"clone",  //clone 将弹层内容节点连同内部事件复制至浮层内,  move  将弹层内容节点连同内部事件移动至浮层内,关闭后还原
			closeClass:".layer_close",
			onShow:function(e){},
			onClose:function(e){}
		};
		$.extend(settings, options);
		this.settings=settings;
		this.con=null;
		if(settings.ifmID&&settings.ifmID!=""){
			if(typeof settings.ifmID=="object"){
				this.con=settings.ifmID;
			}else{
				this.con=$(settings.ifmID);
			}
		}else if(settings.ifmContent&&settings.ifmContent!=""){
			if(typeof settings.ifmContent=="object"){
				this.con=settings.ifmContent;
			}else{
				this.con=$(settings.ifmContent);
			}
		}
		if(settings.type=="clone"){
			this.con=this.con.clone(true,true);
		}
		this.html=$('<div/>').css({position:"fixed",zIndex:1000,left:"50%",top:"50%"});
		this.con.show().find(settings.closeClass).click(function(e){
			//settings.onClose({html:this.html});
			T.remove();
			e.preventDefault();
		}).end().appendTo(this.html);
		settings.onShow({html:this.html});
		this.html.appendTo("body");   
		this.html.css({
			width:this.html.outerWidth(),
			height:this.html.outerHeight(),
			marginLeft:this.html.outerWidth()/2*-1,
			marginTop:this.html.outerHeight()/2*-1
		}); 
		pageLock.show(999);
		return this;
	},
	remove:function(){
		if(this.settings.type=="move"){
			this.con.hide().appendTo("body");  
		}
		if(this.html){
			this.html.remove();
			this.html=null;
		}
		this.settings.onClose(this);
		pageLock.hide();
		$('#layerLogin').remove();
	},
	rParent:function(){
		try{
			return top.layerbox;
		}catch(e){
			return null;
		}
	}
}
layerbox.parent=layerbox.rParent();

Date.prototype.pattern = function(fmt) {
    var o = {
	"M+": this.getMonth() + 1, //月份
	"d+": this.getDate(), //日
	//"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
	"h+": this.getHours(), //小时
	"m+": this.getMinutes(), //分
	"s+": this.getSeconds(), //秒
	"q+": Math.floor((this.getMonth() + 3) / 3), //季度
	"S": this.getMilliseconds() //毫秒
    };
    var week = {
	"0": "/u65e5", "1": "/u4e00", "2": "/u4e8c", "3": "/u4e09", "4": "/u56db", "5": "/u4e94", "6": "/u516d"};
    if (/(y+)/.test(fmt)) {
	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
	fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
	if (new RegExp("(" + k + ")").test(fmt)) {
	    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	}
    }
    return fmt;
}
function clone(myObj){
  if(typeof(myObj) != 'object') return myObj;
  if(myObj == null) return myObj;
  
  var myNewObj = new Object();
  
  for(var i in myObj)
    myNewObj[i] = clone(myObj[i]);
  
  return myNewObj;
}
pageLock={
	show:function(c,d,opacity){
		if(!$("#lockpage").length){
			var index,cfun;
			if(typeof c=="number"){
				var index=parseInt(c);
			}else if(typeof d=="number"){
				var index=parseInt(d);
			}else if(typeof c=="function"){
				var cfun=c;
			}else if(typeof d=="function"){
				var cfun=d;
			}
			opacity=typeof opacity=="number"?opacity:0.3;
			var lockhtml=$("<div/>").attr("id","lockpage").css({position:"absolute",zIndex:(index?index:9999),left:0,top:0,width:"100%",height:$(document).height(),background:"#000",opacity:0}).appendTo("body");
		
			lockhtml.animate({opacity:opacity},500);
			if(cfun){
				$("#lockpage").one("click",cfun);
			}
		}
	},
	hide:function(){
		$("#lockpage").remove();
	}
}

//下拉选择控件
//<div class="BC_Control_Select">
//      <select name="aa" id="aultnum" event-change="ChangePrice(aultnum)">
//
function BC_Control_Select(){
	$(".BC_Control_Select").each(function() {
		BC_Control_Select_Init($(this));
	});
	function BC_Control_Select_Init(T){
		var S = T.find("select").hide();
		var SEventChange = S.attr("event-change");
		var html=null;
		var lbox=null;
		var init=function(){
			html=$('<span><b>2</b><i class="gicon4 gicon4_17"></i></span><div class="list"><div class="box"/></div>');
			html.filter("span").click(function(e) {
				if (T.hasClass("BC_Control_Select_cur")) {
					T.removeClass("BC_Control_Select_cur");
					html.filter(".list").slideUp(300);
				} else {
					$(".BC_Control_Select select").trigger("hidebox");
					T.addClass("BC_Control_Select_cur");
					html.filter(".list").slideDown(300);
				}
			});
			
			lbox = html.find(".box");
			S.children("option").each(function() {
				var txt = $(this).text();
				var val = $(this).attr("value") ? $(this).attr("value") : txt;
				if(S.val()==val){
					html.filter("span").children("b").text(txt);
				}
				$('<a href="#"/>').text(txt).attr("value", val).click(function(e) {
					S.val(val);
					html.filter("span").children("b").text(txt);
					html.find(".box a").removeClass("cur");
					$(this).addClass("cur");
					
					T.removeClass("BC_Control_Select_cur");
					html.filter(".list").slideUp(300);
					S.trigger("change");
					if (SEventChange) {
						try {
							eval(SEventChange);
						} catch (ee) {
	
						}
					}
					e.preventDefault();
				}).appendTo(lbox);
			});
			html.appendTo(T);
			if(html.filter("span").outerWidth()!=html.filter(".list").outerWidth()){
			 	T.width(html.filter(".list").outerWidth());
			};
		}
		S.bind("select",function(){
			lbox.find("a[value="+$(this).val()+"]").click();
		});
		S.bind("updateItemList",function(e){
			html.remove();
			S.children("option").remove();
			var selectedValue=arguments[1].value;
			for(var i=1;i<arguments.length;i++){
				var data=arguments[i];
				$('<option/>').text(data.title).attr("value",data.value).appendTo(S);
				if(data.selected){
					selectedValue=data.value;
				}
			}
			S.val(selectedValue);
			init();
		});
		S.bind("update",function(){
			html.remove();
			init();
		});
		S.bind("hidebox",function(){
			T.removeClass("BC_Control_Select_cur");
			html.filter(".list").hide();
		});
		init();
	}
}
function BC_Control_Select_original(){
	$(".BC_Control_Select_original").each(function() {
		BC_Control_Select_original_Init($(this));
	});
	function BC_Control_Select_original_Init(T){
		var S = T.find("select").css({opacity:0});
		var SEventChange = S.attr("event-change");
		var init=function(){
			var html=$('<span><b></b><i class="gicon4 gicon4_17"></i></span>');
			html.filter("span").click(function(e) {
				if (T.hasClass("BC_Control_Select_cur")) {
					T.removeClass("BC_Control_Select_cur");
					//S.css({opacity:0});
				} else {
					$(".BC_Control_Select select").trigger("hidebox");
					T.addClass("BC_Control_Select_cur");
					//S.css({opacity:1});
				}
			});
			S.bind("change",function(){
				var value=$(this).children("option").eq($(this).get(0).selectedIndex).text();
				html.find("b").text(value);
				if(SEventChange){
					try {
						eval(SEventChange);
					} catch (ee) {
						
					}
				}
			});
			S.bind("boxhide",function(){
				T.hide();
			});
			S.bind("boxshow",function(){
				T.show();
			});
			html.find("b").text(S.children("option").eq(S.get(0).selectedIndex).text());
			html.appendTo(T);
			html.css({width:S.outerWidth()});
			S.width(html.outerWidth()-2);
		}
		init();
	}
}
function BC_Control_Checkbox(){
	$(".BC_Control_Checkbox").each(function(){
		if($(this).hasClass("BC_Control_Checkbox_Binded")){
			return;
		}
		$(this).addClass("BC_Control_Checkbox_Binded");
		var T=$(this);
		$(this).find(":checkbox").each(function(){
			var TT=$(this).hide();
			var title=$(this).attr("title")?$(this).attr("title"):$(this).val();
			$('<a href="#" class="New_btn btn_e"/>').html(title).addClass($(this).get(0).checked?"btn_e_cur":"").click(function(e){
				if(TT.get(0).checked){
					TT.get(0).checked=false;
					$(this).removeClass("btn_e_cur");
				}else{
					TT.get(0).checked=true;
					$(this).addClass("btn_e_cur");
				}
				e.preventDefault();
			}).appendTo(T);
		});
	});
}
function BC_Control_Radio(){
	$(".BC_Control_Radio").each(function(){
		if($(this).hasClass("BC_Control_Radio_Binded")){
			return;
		}
		$(this).addClass("BC_Control_Radio_Binded");
		var T=$(this);
		var curItem=null;

		$(this).find(":radio").each(function(){
			var TT=$(this).hide();
			var itemtype=$(this).attr("itemtype")
			var title=$(this).attr("title");
			var data=$(this).data("pass");
			var curClassName=itemtype=="image"?"New_btn_img_cur":"btn_e_cur";
			var className=itemtype=="image"?"New_btn_img ":"New_btn btn_e ";
			className+=$(this).get(0).checked?curClassName+" ":"";
			if($(this).attr("class")){
				className+=$(this).attr("class");
			}
			var thisItem=$('<a href="#"/>').addClass(className).click(function(e){
				if(!$(this).hasClass(curClassName)){
					TT.get(0).checked=true;
					if(curItem){
						curItem.removeClass(curClassName);
					}
					curItem=$(this).addClass(curClassName);
				}
				if(typeof BC_Control_Radio_Callback=="function"){
					BC_Control_Radio_Callback({
						box:T,
						o:TT,
						value:TT.val(),
						data:data
					});
				}
				e.preventDefault();
			}).insertAfter(TT);
			if($(this).get(0).checked){
				curItem=thisItem;
				if(typeof BC_Control_Radio_Callback=="function"){
					BC_Control_Radio_Callback({
						box:T,
						o:TT,
						value:TT.val(),
						data:data
					});
				}
			}
			if(itemtype=="image"){
				$('<span class="BC_Control_Radio_Checked_Border"/>').appendTo(thisItem);
			}else{
				var domTitle=$('<div class="BC_Control_Radio_Text"/>').html(title);
				domTitle.appendTo(thisItem);
				//thisItem.html(title);
			}
			if($(this).data("other")){
				$('<div class="BC_Control_Radio_other"/>').html($(this).data("other")).appendTo(thisItem);
			}
			/*if(title){
				thisItem.attr("title",title);
			}*/
		});
		
	});
}
function BC_Control_Increment(){
	$(".BC_Control_Increment").each(function(){
		if($(this).hasClass("BC_Control_Increment_Binded")){
			return;
		}
		$(this).addClass("BC_Control_Increment_Binded");
		$(this).bind("selectstart",function(){
			return false;
		});
		var T=$(this);
		var btnReduction=$(this).find(".BC_Control_Increment_Reduction");
		var btnAdd=$(this).find(".BC_Control_Increment_Add");
		var ValueObj=$(this).find(".BC_Control_Increment_Value");
		var Value=parseInt(ValueObj.val(),10);
		var minValue=ValueObj.attr("min")?parseInt(ValueObj.attr("min"),10):null;
		var maxValue=ValueObj.attr("max")?parseInt(ValueObj.attr("max"),10):null;
		var ValueStep=ValueObj.attr("step")?parseInt(ValueObj.attr("step"),10):1;
		var showResultInfo=function(type,txt,status){
			if(typeof BC_Control_Increment_CallBack=="function"){
				BC_Control_Increment_CallBack({o:T,type:type,min:minValue,max:maxValue,txt:txt,status:status,value:Value});
			}else if(status==0){
				alert(txt);
			}
		}
		btnReduction.click(function(e){
			reInit();
			if(minValue==null||Value-minValue>=ValueStep){
				Value-=ValueStep;
				showResultInfo("min","",1);
			}else{
				showResultInfo("min","最小值为"+minValue,0);
				Value=minValue;
			}
			ValueObj.val(Value);
		});
		btnAdd.click(function(e){
			reInit();
			if(!maxValue||maxValue-Value>=ValueStep){
				Value+=ValueStep;
				showResultInfo("max","",1);
			}else{
				showResultInfo("max","最大值为"+maxValue,0);
				Value=maxValue;
			}
			ValueObj.val(Value);
		});
		ValueObj.blur(function(){
			reInit();
			if(!$(this).val().match(/^\d+$/)){
				Value=minValue;
				$(this).val(minValue);
				showResultInfo("max","只能输入数字",0);
				return false;
			}
			Value=parseInt(ValueObj.val(),10);
			if(minValue!=null&&Value<minValue){
				Value=minValue;
				showResultInfo("min","最小值为"+minValue,0);
			}else if(maxValue!=null&&Value>maxValue){
				Value=maxValue;
				showResultInfo("max","最大值为"+maxValue,0);
			}else{
				showResultInfo("max","",1);
			}
			$(this).val(Value);
		});
		function reInit(){
			Value=parseInt(ValueObj.val(),10);
			minValue=ValueObj.attr("min")?parseInt(ValueObj.attr("min"),10):null;
			maxValue=ValueObj.attr("max")?parseInt(ValueObj.attr("max"),10):null;
			ValueStep=ValueObj.attr("step")?parseInt(ValueObj.attr("step"),10):1;
		}
	});
}

function bindTipBox(){
	var tipObjs=$("[data-tip]");
	tipObjs.each(function(){
		var tipData=eval("("+$(this).data("tip")+")");
		var html=$('<div class="msg_tip" style="position: absolute;display:block;"><b class="gicon_a msg_tip_007"></b></div>');
		if(tipData.txt){
			html.append(tipData.txt);
		}
		else{
			html.append("提示信息整理中...");
		}
		if(tipData.width){
			html.width(tipData.width);
		}
		html.css({left:$(this).offset().left,top:$(this).offset().top+$(this).outerHeight()+11})
			.find("b").css({left:($(this).outerWidth()-18)/2});
		
		$(this).hover(function(){
			html.appendTo("body");
		},function(){
			html.remove();
		});
	});
}
function FONT_rbno2Light(){
	$(".RL").each(function(){
		if($(this).hasClass("RL_bind")){return true;}
		$(this).addClass("RL_bind");
		var T=$(this);
		var v=String(T.text()).split("");
		T.html("");
		for(var i=0;i<v.length;i++){
			
			if(v[i].match(/\d/)){
				$('<span/>').addClass("span_d_"+v[i]).appendTo(T);
			}
		}
	});
}
function Print(btn,aera){
	$(btn).click(function(){
		 $('document,body').html(aera)
		  window.print();
		  window.location.reload();
	})
	
}
var lazyLoad={Init:function(){return $("img[lazyload]:visible")},Calculate:function(e){var t=$(window).height(),n={},r;return e.length==0?null:(e.each(function(e){r=parseInt($(this).offset().top-t),n.hasOwnProperty(r)||(n[r]=new Array),n[r].push($(this))}),this.ArrLoad=n,n)},ArrLoad:null,IsLoad:function(e,t){if(t!=null&&t!={})for(i in this.ArrLoad)if(parseInt(i)<=e&&this.ArrLoad.hasOwnProperty(i)){for(j=0;j<this.ArrLoad[i].length;j++)this.ArrLoad[i][j].attr("src",this.ArrLoad[i][j].attr("lazyload")).removeAttr("lazyload");delete this.ArrLoad[i]}},Run:function(){var e=this.Init();this.Calculate(e),arrScrollTop=this.ArrLoad;if(arrScrollTop==null)return!1;var t=this;t.IsLoad($(window).scrollTop(),arrScrollTop),$(window).scroll(function(){t.IsLoad($(this).scrollTop(),arrScrollTop)})}}
/*小能环境判断*/
	var talkerWord=window.location.href.substr(11,1);
	var domainName=null;
    if(talkerWord=='t'){
    	domainName='test.';
    }else if(talkerWord=='p'){
    	domainName='preonline.';
    }else{
        domainName='';
    }
/**/
$(function(){
   function bc_scroll(id,cur){
	 var $bz = $(id);
	$(window).width()>1200?$bz.removeClass(cur):$bz.addClass(cur)}  
	bc_scroll("#BC_index","BC_index");moren()
	$(window).bind("scroll",function(){bc_scroll("#BC_index","BC_index")});
	$(window).bind("resize",function(){bc_scroll("#BC_index","BC_index")});
	function moren(){
	$inputText = $(":text[defaultvalue],textarea[defaultvalue]");
	$inputText.css("color","#999");
	$inputText.each(function(index, element) {
		if($(this).val()==''){
			$(this).val($(this).attr("defaultvalue"));
		};
	});
	$inputText.focus(function(){
		if($(this).val()==$(this).attr("defaultvalue")){$(this).val("")};
		$(this).css("color","");
		if($(this).attr("defaultvalue")=="请输入密码"){
			 $(this).hide();
			 $("[data=password]").show().focus()
		}
		
	});
	$inputText.blur(function(){
		$text=$(this).attr("defaultvalue");
		if($(this).val()==$(this).attr("defaultvalue")||$(this).val()==""){
			$(this).val($(this).attr("defaultvalue"));
			$(this).css("color","#999");
			
		};	
	 });
		$("[data=password]").blur(function(event){
			if($(this).val()=="")
			{
				$("[data=text]").show().val($text)
				$("[data=password]").hide()
			}
		})
	}
	function kefu(){
		$('.gotop a').on('click', function(){
			$('html,body').animate({
				scrollTop: 0
			})
		});
		$('.scroll_bar .close').on('click', function(){
			$(this).parent().fadeOut();
		});
	}
	kefu();
    function sidebar(){
		var sideli=$(".sidebar li");
		$("#kefu").on("click",function(){
			// TQKF.kefuimg.Distrabute();
			$.getJSON("http://passport."+domainName+"baicheng.com/usercommon/islogin?callback=?",{},function (json) {
                if(json.value){
                	NTKF.im_openInPageChat();
                }else{
                    //未登录,弹出对话框登录
                    $.getScript("http://passport."+domainName+"baicheng.com/usercommon/loginboxjs",function(){});
                    $(".select_time_num_main").css({zIndex: '900'});
                    $(".bc_header.newtop .hd").css({zIndex: '901'});
                }
        	});
			return false;
	     })
		sideli.hover(function(){
			$(this).find(".s-layer").show();
		},function(){
			$(this).find(".s-layer").hide();
		});
		var BC_BACK_TOP=$("#BC_BACK_TOP")
		BC_BACK_TOP.click(function(e){
			$("html,body").animate({scrollTop:0},300);
			e.preventDefault();
		});
	  function bc_scroll(){
		   if($(document).scrollTop()>0){
				$(".s-backtop").show()
			}
			else
			{
				$(".s-backtop").hide()
			}
		}
		$(window).bind("scroll",function(){bc_scroll()});
		$(window).bind("resize",function(){bc_scroll()});
		bc_scroll()
	}
	sidebar();
   //在线客服 20140919 jiadangwei@baicheng.com
       function header(){
		$(".bc_header").each(function(index, element) {
        var T=$(this);
		var Hover=T.find("a.hover");
		var Layer=T.find(".s-layer");
		var shijian;
		Hover.mouseenter(function(){
			    clearTimeout(shijian)
				var li=Hover.index(this);
				Hover.removeClass("on")
				Layer.removeClass("on")
				Hover.eq(li).addClass("on")
				Layer.eq(li).addClass("on")
		}).mouseleave(function(){
			    clearTimeout(shijian)
				shijian=setTimeout(function(){Hover.removeClass("on");Layer.removeClass("on")},300)
		});
		Layer.mouseenter(function(){
			clearTimeout(shijian)
		}).mouseleave(function(){
			Hover.removeClass("on");Layer.removeClass("on")
		})
    });
  }
   header();
    $("#friendlinkbox").marqueeBind({
		marqueeBox:">div",
		direction:"top",
		speed:30,
		waitTime:3000,
		step:20,
		mouseOverStop:false
	});
	 $("[opacity] img:not(.no)").on("mouseover",function(){
		$(this).animate({opacity:0.8},200,function(){
			$(this).animate({opacity:1},200);
		});
     });
  });

//小能在线客服
function showTalker(){
	// $.getScript('http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9654');  
	var tmp = '<div class="sidebar"><ul><li class="s-qq"><a href="javascript:void(0);"><i></i><div class="s-layer"><em class="s-layer-ico"></em><div class="serviceTime">工作日服务时间：08：00~次日01：00</br>节假日服务时间：09：00~21：00</div></div></a></li><li class="s-code"><i></i><div class="s-layer"><em class="s-layer-ico"></em><div class="app"><img src="http://static.baicheng.com/images/global/sidebar_app.png"/><p>扫描下载百程APP</p></div><div class="wechat"><img src="http://static.baicheng.com/images/global/sidebar_wechat.png"/><p>关注微信查询进度</p></div></div></li><li class="s-backtop"><a id="BC_BACK_TOP"href="#"><i></i></a></li></ul></div>';
    document.write(tmp);
}
$(function(){
	$('.sidebar .s-qq i').click(function(){
		var showTalkerRe = /(com\/)$|(visa\/)$|(package)$|(group)$|(collect)$/;
		var showTalkerHref = window.location.href;
		if(showTalkerRe.test(showTalkerHref)){
			window.open("http://www."+domainName+"baicheng.com/onlineser");
		}else{
			 $.getJSON("http://passport."+domainName+"baicheng.com/usercommon/islogin?callback=?",{},function (json) {
                if(json.value){
                	NTKF.im_openInPageChat();
                }else{
                    //未登录,弹出对话框登录
                    $.getScript("http://passport."+domainName+"baicheng.com/usercommon/loginboxjs",function(){});
                }
        	});
		} 
	})
})

// 顶通广告 拒签退全款  20151125暂时下线
/*function topBar(){
	var indexTopBar = $('<div class="topBar" style="height:80px;text-align:center"><a style="width:100%;height:80px;display:block;background:url(http://static.baicheng.com/images/global/topBar_refundment.jpg) no-repeat center;" href="http://zt.baicheng.com/nopayment_20150909/index.html" target="_blank"><div style="position:relative;width:1000px;height:80px;margin:0 auto;"><span style="width:17px;height:15px;display:block;position:absolute;right:0;top:5px;background:url(http://static.baicheng.com/images/index/topBarClose_2.png);z-index:9999;cursor: pointer;" class="topClose"></span></div>');
	$('.bc_header').before(indexTopBar);
	$('.topClose').hover(function() {
		$(this).css('background','url(http://static.baicheng.com/images/index/topBarClose_1.png)');
	}, function() {
		$(this).css('background','url(http://static.baicheng.com/images/index/topBarClose_2.png)');
	});
	$('.topClose').click(function(){$('.topBar').slideUp();return false});
}*/
// 顶通广告 千万红包
function topBar(){
	var indexTopBar = $('<div class="topBar" style="height:80px;text-align:center"><a style="width:100%;display:block;background:url(http://static.baicheng.com/images/global/topBar_2016_0629.jpg) no-repeat center;" href="http://zt.baicheng.com/star_hait/index.html" target="_blank"><div style="position:relative;width:1000px;height:80px;margin:0 auto;"><span style="width:17px;height:15px;display:block;position:absolute;right:0;top:5px;background:url(http://static.baicheng.com/images/index/topBarClose_2.png);z-index:9999;cursor: pointer;" class="topClose"></span></div>');
	$('.bc_header').before(indexTopBar);
	$('.topClose').hover(function() {
		$(this).css('background','url(http://static.baicheng.com/images/index/topBarClose_1.png)');
	}, function() {
		$(this).css('background','url(http://static.baicheng.com/images/index/topBarClose_2.png)');
	});
	$('.topClose').click(function(){$('.topBar').slideUp();return false});
	// return;
	// console.log("顶通暂时下线");
}
$(function(){
	//匹配签证详情页
    // var detailPageRe = /\/visa\/product_/;
    var detailPageRe = /\/visa\/(product_|country_)/;
    var detailPageStr = window.location.href;
    if(detailPageRe.test(detailPageStr)){
        topBar();
    }
    //匹配惠旅行
    var travel_huiRe = /\/travel_hui/;
    var travel_huiStr = window.location.href;
    if(travel_huiRe.test(travel_huiStr)){
        topBar();
    }
    //匹配惠旅行
    var customizedRe = /\/(customized)$/;
    var customizedStr = window.location.href;
    if(customizedRe.test(customizedStr)){
        topBar();
    }
    //匹配跟团游
    var groupRe = /\/(group)$/;
    var groupStr = window.location.href;
    if(groupRe.test(groupStr)){
        topBar();
    }
})
// 门票日游接送机紧急公告
function warningNotice(){
	/*var Notice = $('<div style="display:block;left:0; top:0; width:100%; height:40px; background:#FFFAE8; filter:alpha(opacity=90); opacity:0.9; overflow:hidden;"><div style="width:1000px; height:40px; margin:0 auto; line-height:40px; overflow:hidden; color:#B87A03; font-family:SimSun;"><em style="width:62px; height:20px; margin:11px 10px 0 0; background:#FF5858; line-height:20px; overflow:hidden; color:#FFF; text-align:center;float:left;">紧急公告</em><i class="fl" style=" margin:0 20px 0 0;">尊敬的顾客，因春节临近，有2.3-2.16号出行使用的顾客请于2.3前18:00下单并提供信息。2.3号后的订单将于2.15号开始操作处理，敬请谅解。</i></div></div>');
	$('.bc_header').after(Notice);*/
	return;
	// console.log('门票日游紧急公告下撤(20151020)');
}

//全站广告  20151123下线400电话不稳定全站公告
/*var allWarningNoticeRe = /baicheng/;
var allWarningNoticeStr = window.location.href;
if(allWarningNoticeRe.test(allWarningNoticeStr)){
	// alert(allWarningNoticeRe.test(allWarningNoticeStr));
    allWarningNotice();
}
function allWarningNotice(){
	var Notice = '<div class="warningNotice" style="display:none;left:0; top:0; width:100%; height:40px; background:#feff99; filter:alpha(opacity=90); opacity:0.9; overflow:hidden;"><div style="width:1000px; height:40px; margin:0 auto; line-height:40px; overflow:hidden; color:#B87A03; font-family:SimSun;"><em style="width:62px; height:20px; margin:11px 10px 0 0; background:#FF5858; line-height:20px; overflow:hidden; color:#FFF; text-align:center;float:left;">紧急公告</em><i class="fl" style="margin:0 20px 0 0;color:red;font-size:14px;font-family:Microsoft Yahei;">尊敬的百程用户：您好，因系统升级 400-151-6666 电话服务不稳定，建议您使用<span style="color:#0d0da3;font-weight:bold;font-size:16px;">“在线客服” </span>进行联系。给您带来的不便请您谅解！</i></div></div>';
	document.write(Notice);
	// console.log(allWarningNoticeStr);
	if($('.warningNotice').length==1){
		$('.warningNotice').prependTo('body').slideDown(800);
	}
}*/

// 20150929签证大厅紧急公告
function visaHallNotice(){
	var Notice = $('<div style="position:absolute;display:block;left:0; bottom:-40px; width:100%; height:40px; background:#FFFAE8; filter:alpha(opacity=90); opacity:0.9; overflow:hidden;z-index:0"><div style="width:1000px; height:40px; margin:0 auto; line-height:40px; overflow:hidden; color:#B87A03; font-family:SimSun;"><em style="width:62px; height:20px; margin:11px 10px 0 0; background:#FF5858; line-height:20px; overflow:hidden; color:#FFF; text-align:center;float:left;">紧急公告</em><i class="fl" style=" margin:0 20px 0 0;">时逢国庆节，咱们的资料审核员也去周游世界啦，如您需要在线审核，在10月1日至7日可以正常上传并提交，10月8日开始依次为您审核，感谢您的理解哦！</i></div></div>');
	$('.hallnew_header').append(Notice);
}

//万事达对联广告
var mastercardRe = /\/visa\/mastercard/;
// var mastercardRe = /\/special\/mastercard_20150514/;  //测试用
var mastercardStr = window.location.href;
if(mastercardRe.test(mastercardStr)){
    mastercardSideAd();
}
function mastercardSideAd(){
	var tmp = '<div id="sideAdLeft" style="position:fixed;z-index:9999;left:0;top:150px;width:120px;height:432px"><a style="position: relative;"><img style="position: relative;" src=""></a></div><div id="sideAdRight" style="position:fixed;z-index:9999;right:0;top:150px;width:120px;height:432px"><a><img src=""></a></div>';
	document.write(tmp);
	var sideAdData = {
    "link":['http://zt.baicheng.com/australia_sunshine/index.html?utm_source=1000357','http://www.baicheng.com/customized?utm_source=1000357&utm_medium=baicheng'],
    "img":['http://static.baicheng.com/images/mastercard/sideAd/Australia_2.jpg','http://static.baicheng.com/images/mastercard/sideAd/travelCustom_2.jpg']
    };
    var oRandom = Math.floor(Math.random()*sideAdData.link.length);
    $('#sideAdLeft a').attr({"href":sideAdData.link[oRandom],"target":"_blank"}).find('img').attr('src',sideAdData.img[oRandom]);
    $('#sideAdRight a').attr({"href":sideAdData.link[oRandom],"target":"_blank"}).find('img').attr('src',sideAdData.img[oRandom]);
}
/*//万事达 新西兰暂时隐藏  20151127 16:44
"link":['http://zt.baicheng.com/fiji_20151029/index.html?utm_source=1000357&utm_medium=baicheng','http://zt.baicheng.com/xinxilan_20151019/index.html?utm_source=1000357&utm_medium=baicheng','http://www.baicheng.com/customized?utm_source=1000357&utm_medium=baicheng'],
    "img":['http://static.baicheng.com/images/mastercard/sideAd/feiji.jpg','http://static.baicheng.com/images/mastercard/sideAd/NewZealand.jpg','http://static.baicheng.com/images/mastercard/sideAd/travelCustom.jpg'],
    };
 */
/*内链升级*/
var inlinkFun = function(obj){
    var m = $(obj).find(".nr");
    if(m.height()>22){  
        var n = m.prev();
        n.addClass("down");
        n.click(function() {
            if($(this).hasClass("down")){
              $(this).removeClass("down");
              $(this).addClass("up");
              $(this).parent().removeClass("gao");
            }else{
              $(this).addClass("down");
              $(this).removeClass("up");
              $(this).parent().addClass("gao");
            }
        });
    }
}

/*201605头部导航改版*/
$(function(){
  // 搜索下拉
  $(".logoss .searchnr .search .slelist .show").click(function(){
    $(".logoss .searchnr .search .slelist ul.list").toggle();
  });
  $(".slelist .list li").bind('click',function(){
	$(this).addClass("cur").siblings().removeClass("cur");
  	$(".slelist .list").hide();
    $(".search .slelist .show .value").text($(this).text());
  })
  $(".logoss .search .slelist").mouseleave(function(){
  	$(".slelist .list").hide();
  })
  $('body,html').click(function(e){
  	if($(e.target).closest('.logoss .search .slelist').length == 0){
  		$(".slelist .list").hide();
  	}
  })
  // 头部搜索获取焦点
	var headSouInput=$(".logoss .search .search_input");
	var headSouVal=headSouInput.val();
	headSouInput.focus(function(){
		indexheadfous()
	});
	headSouInput.keyup(function(){
			indexheadfous()
		});
    function  indexheadfous(){
    	headSouVal=headSouInput.val();
		if(headSouVal==""){
			$(".searchnr .search .focuspop").show();
			$(".searchnr .search .aboutlist").hide();
		}else{
			$(".searchnr .search .aboutlist").show();
			$(".searchnr .search .focuspop").hide();
		}
    }
    $(".searchnr .search").mouseleave(function(){
		//headSouInput.blur();
		$(".searchnr .search .focuspop").hide();
	    $(".searchnr .search .aboutlist").hide();
	})
  // 导航显示隐藏
	var headNavBar=$(".hd .menu li");
	var headNavSubmenu=$(".submenu_list .smlnr").hide();
	headNavBar.hover(function(){
		headNavSubmenu.eq($(this).index()).show().siblings().hide();
		$(this).addClass("cur").siblings().removeClass('cur');
	},function(){
		headNavSubmenu.hide();
		headNavBar.removeClass('cur');
	});
	headNavSubmenu.hover(function(){
		$(this).show().siblings().hide();
		headNavBar.eq($(this).index()).addClass("cur");
	},function(){
		headNavSubmenu.hide();
		headNavBar.removeClass('cur');
	});
  // 目的地
	$(".mdd_boxnr>.ibox").each(function() {
		if ($(this).find(".list a").length) {
			$(this).addClass("iboxh").hover(function() {
				$(this).addClass("iboxhover");
			}, function() {
				$(this).removeClass("iboxhover");
			});
		}
	});
	$(".mdd_boxnr .tag").hover(
		function() {
			$(".mdd_boxnr .tag i").addClass("up");
			$(".mdd_boxnr .ibox").show();
		},
		function() {
			$(".mdd_boxnr .tag i").removeClass("up");
			$(".mdd_boxnr .ibox").hide();
		}
	);
	$(".mdd_boxnr .ibox").hover(
		function() {
			$(".mdd_boxnr .tag i").addClass("up");
			$(".mdd_boxnr .ibox").show();
		},
		function() {
			$(".mdd_boxnr .tag i").removeClass("up");
			$(".mdd_boxnr .ibox").hide();
		}
	);
  	/*新页头上线后引发的度假详情页的select重复修复*/
  	setTimeout(function(){
  		if($(".BC_Control_Select").children("span").length>2){
	  		$(".BC_Control_Select").children("span").remove();
	  		$(".BC_Control_Select").children(".list").remove();
	  		BC_Control_Select();
	  	}
	  },1000);
  	

});













