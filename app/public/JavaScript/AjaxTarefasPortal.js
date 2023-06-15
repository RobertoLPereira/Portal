function startlertarefa(nForm,cmp)
{
    vForm = document.getElementById(nForm);
    f = vForm;  
    campo = document.getElementById(cmp);
    stoplertarefa();
    AjaxAcao();

}
function stoplertarefa()
{
    //alert ("oi");
    if(timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}
function AjaxAcao(){
	openAjax();
	var url = "../servlet/ajaxTarefas?IdPessoa="+campo.value;
	ajax.open("GET",url,true);
	ajax.onreadystatechange = atualizarTarefas;
	ajax.send();
}
function atualizarTarefas(){
	if (ajax.readyState==4){
		if (ajax.status == 200) {
			rset = ajax.responseXML.documentElement.childNodes;
			var node = ajax.responseXML;
		        var rslta;
		        var Gnum;
		        var gnr;
		        Gnum = 0;
		        rslta = "<" +"MARQUEE align=middle behavior=scroll bgcolor=#FFFF99 direction=left height=15 SCROLLAMOUNT=14 SCROLLDELAY=380>";
		        for (rnum = 0; rnum < rset.length ; rnum++){		        
		            rslta+= "<"+"b>Atenção:</"+"b>"+node.getElementsByTagName('Assunto')[rnum].childNodes[0].nodeValue+",&nbsp;Entrevista=("+ node.getElementsByTagName('IdEntrevista')[rnum].childNodes[0].nodeValue+") ";
		            Gnum++;            
			}	        
	       }     
	        rslta+="<"+"/MARQUEE>";
	        refer.innerHTML=rslta;
	   }
	   timerID = setTimeout("AjaxAcao()",100000);
	   timerRunning = true;
}