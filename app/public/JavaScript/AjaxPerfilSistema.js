function buscaPerfil(nForm,cmp)
		{//alert(nForm+cmp);
		    var vForm = document.getElementById(nForm);
		    var f = vForm;  
		    var campo = cmp;
		    //console.log(vForm.idsistema.value);
		    if (campo.length > 0){
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8083/api/todos/perfilsistema";
		        if (vForm.idsistema.value > 0){
		        	url+="?idsistema="+vForm.idsistema.value;
		        	url+="&perfil='"+cmp+"'";
		        }
			   	ajax.open("GET",url,true);
		       	ajax.onreadystatechange = atualizarListaPerfil;
			   	ajax.send();
			}
		}
function atualizarListaPerfil(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
            var wperfil = JSON.parse(ajax.responseText);
            //console.log(wperfil);
            var rslta = new Array(wperfil.length);
            var html = "";
            try {
                	for (rnum = 0; rnum < wperfil.length ; rnum++){			            
			            if (wperfil[rnum].perfil != null){
			            	html+="<option value="+ wperfil[rnum].idperfilsistema+"-"+ wperfil[rnum].perfil.perfil+">"+ wperfil[rnum].perfil.perfil+"/Sistema "+wperfil[rnum].idsistema +"</option>";
			        	}
					}		        
            }catch(Exception){
                  console.log("Erro try catch = "+Exception);
            }			
    		 //checkList('nome',rslta);
    		 document.getElementById('idperfil').innerHTML=html;

	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     	 
	}	   
}