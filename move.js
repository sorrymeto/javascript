// JavaScript Document
function getStyle(obj,attr){
	if(obj.curretStyle){
		return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
			}
	}
	//startMove(obj,{attr1:itarget1,attr2:itarget2},fn)
	function startMove(obj,json,fn){//fn就是个函数
	var flag=true;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			for(var attr in json)
			{
			var icur=0;
			if(attr=='opacity'){
				icur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
				else{
				icur=parseFloat(getStyle(obj,attr));	
					}
					//算出速度
			var speed=(json[attr]-icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(icur!==json[attr]){
				flag=false;
			}
			
		
		if(attr=='opacity'){
		obj.style.filter='alpha(opacity:'+(icur+speed)+')';
			obj.style.opacity=(icur+speed)/100;
					}
			else{
		obj.style[attr]=icur+speed+'px';
			}
				}
				if(flag){
					clearInterval(obj.timer);
					if(fn){
						fn();
						}
					}
			
			},30)
			}
		
		