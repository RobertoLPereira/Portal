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
function atualizar(){
	if (ajax.readyState==4){
		lista.innerHTML = ajax.responseText;
	}
}
function AjaxPessoa(campo){
	openAjax();
	var url = "../servlet/AjaxPessoa?nome="+campo;
	ajax.open("GET",url,true);
	ajax.onreadystatechange = atualizar;
	ajax.send();
}
function selected(choice){
        var cible = document.getElementById('op');
        cible.value = choice;
        document.getElementById('tag_atualizar').style.display = "none";
}

