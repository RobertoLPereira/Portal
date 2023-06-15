function buscaSistemas(nForm)
		{//alert(nForm+cmp);
		    var vForm = document.getElementById(nForm);
		    var f = vForm;  
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8083/api/todos/sistema";
			   	ajax.open("GET",url,true);
		       	ajax.onreadystatechange = atualizarLista;
			   	ajax.send();
		}
function atualizarLista(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
            var wsistemas = JSON.parse(ajax.responseText);
            //console.log(wsistemas);
            var html = "";
            try {
            		html+="<option value=0>Selecione o Sistema</option>";
                	for (rnum = 0; rnum < wsistemas.length ; rnum++){			            
			            if (wsistemas[rnum].nomesistema != null){
			            	html+="<option value="+ wsistemas[rnum].idsistema+">"+ wsistemas[rnum].nomesistema+"</option>";
			        	}
					}		        
            }catch(Exception){
                  console.log("Erro try catch = "+Exception);
            }			
    		document.getElementById('idsistema').innerHTML=html;

	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     	 
	}	   
}