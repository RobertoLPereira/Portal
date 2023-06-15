var ajax;
function openAjax(){
	if (window.ActiveXObject){
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if (window.XMLHttpRequest)
	{
		ajax = new XMLHttpRequest();
	}
}