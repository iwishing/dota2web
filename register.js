var judge = true;
var isblank = 0;
function isPhone(phone) {
	document.getElementById("flagimg_phone").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
isblank += 1;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(!phone.test(pattern)){
		document.getElementByClassName("phoneNumber").value = "错误";
		alert("错误");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		judge = false;

	}else{
		document.getElementByClassName("phoneNumber").value="正确";
		alert("正确");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		isblank += 1;
	}
}
function isPwd(pwd) {
	document.getElementById("flagimg_pwd").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
isblank += 1;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(!phone.test(pattern)){
		document.getElementByClassName("phoneNumber").value = "错误";
		alert("错误");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		judge = false;
	}else{
		document.getElementByClassName("phoneNumber").value="正确";
		alert("正确");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		isblank += 1;
	}
}
function isrePwd(rePwd){
	document.getElementById("flagimg_rePwd").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';

	isblank += 1;
}
function isreName(name) {
	document.getElementById("flagimg_reName").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
isblank += 1;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(!phone.test(pattern)){
		document.getElementByClassName("phoneNumber").value = "错误";
		alert("错误");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		judge = false;
	}else{
		document.getElementByClassName("phoneNumber").value="正确";
		alert("正确");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		isblank += 1;
	}
}
function isId(id) {
	document.getElementById("flagimg_id").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
isblank += 1;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(!phone.test(pattern)){
		document.getElementByClassName("phoneNumber").value = "错误";
		alert("错误");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		judge = false;
	}else{
		document.getElementByClassName("phoneNumber").value="正确";
		alert("正确");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		isblank += 1;
	}
}
function isCode(code) {
	document.getElementById("flagimg_code").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
isblank += 1;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(!phone.test(pattern)){
		document.getElementByClassName("phoneNumber").value = "错误";
		alert("错误");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		judge = false;
	}else{
		document.getElementByClassName("phoneNumber").value="正确";
		alert("正确");
		document.getElementById("flagimg_phone").style.cssText = 'left:0px;';
		isblank += 1;
	}
}

function ischecked(){
	document.getElementById("flagimg_agree").style.cssText = 'width: 100px;position:absolute;left:0px;top:0;';
	var statue = document.getElementById("agree");
	if(statue.checked){
		isblank += 1;
	}else{
		judge = false;
	}
}

function registerSubmit(){
	if(judge && isblank == 7){
		return false;
	}else{
		return false;
	}
	return false;
}