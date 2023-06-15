document.write('<style type="text/css">'+
				  '#listHolder{position:absolute;border:0;}'+
				  '.list{font-family:verdana;font-size:10;color:#000000;background:;}'+
		 '<\/style>')

function checkList(obj,nStr) {
	debugger;
    obj = document.getElementById(obj);
	var k = event.keyCode;
	var T = findPosY(obj); //top
	var L = findPosX(obj); //left
	var list = document.getElementById('listHolder');
	//alert(k);
    //alert(T);
    //alert(L);
    
    if(!list) {
		var list = document.createElement('DIV');
		list.id = 'listHolder';
		document.body.appendChild(list);
	}

	list.style.top=(T+obj.offsetHeight);
	list.style.left=L;
	list.style.display='none';

	var txt=obj.value;

	if (txt) 
	   { 
		var str='<select class="list"'+
				'onclick="setOption(\''+obj.id+'\',this.options[this.selectedIndex].value)"'+
				'onkeyup="if(event.keyCode==13){setOption(\''+obj.id+'\','+
				'this.options[this.selectedIndex].value)};if(event.keyCode==27){'+
				'document.getElementById(\'listHolder\').style.display=\'none\';'+
				'document.getElementById(\''+obj.id+'\').focus()};" id="selector" size="6">'
		var match=false
		for(a=0;a<nStr.length;a++){		
			str+=('<option value="'+nStr[a].replace(/\'/gi,'’')+'">'+nStr[a]+'</option>')   
			match=true
			/* As linhas abaixo fora inibidas pois o teste de coincidência está sendo realizado na instrução select
			if(txt.toLowerCase()==nStr[a].toLowerCase().substring(0,txt.length)){
				match=true
				str+=('<option value="'+nStr[a].replace(/\'/gi,'’')+'">'+nStr[a]+'</option>')   
			}*/
		}
        
		str+='</select>'
		
		if(match){
			list.innerHTML=str
			list.style.display='block'
			var sel=document.getElementById('selector')
			if(k=='40') {
			   sel.focus()
			}

			if(k=='13'){
			   document.getElementById('listHolder').style.display='none'
			}
		}
	}
}

function setOption(obj,val){

	var obj=document.getElementById(obj)
        //Preenche o campo IdPessoaRelacionada com o valor correspondente ao IdPessoa selecionada
        obj.value=val;
        //document.all.IdPessoaRelacionada.value = cleanMask(val,"1");	
	obj.focus()
	document.getElementById('listHolder').style.display='none'
}

function findPosX(obj){
	var curleft=0;
	if(obj.offsetParent) {

		while(obj.offsetParent){
			curleft+=obj.offsetLeft
			obj=obj.offsetParent;
		}
	} else if(obj.x)
		curleft+=obj.x;
		return curleft;
}

function findPosY(obj){        
	var curtop=0;
	if(obj.offsetParent){
		while(obj.offsetParent){
			curtop+=obj.offsetTop
			obj=obj.offsetParent;
		}
	} else if(obj.y)
		curtop+=obj.y;
		return curtop;
}
function buscaUsuario(nForm,cmp)
		{//alert(nForm+cmp);
		    var vForm = document.getElementById(nForm);
		    var f = vForm;  
		    var campo = cmp;
		    //console.log(campo);
		    //campo = "Roberto%20Lima";
		    if (campo.length > 0){
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8081/api/usuarioscadastrados?nome="+cmp;
			   	ajax.open("GET",url,true);
		       	ajax.onreadystatechange = atualizarNome;
			   	ajax.send();
			}
		}
function atualizarNome(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
			//debugger;
            var wpessoa = JSON.parse(ajax.responseText);
            //console.log(wpessoa);
            var rslta = new Array(wpessoa.length);
            var html = "";
            try {
                	for (rnum = 0; rnum < wpessoa.length ; rnum++){			            
			            if (wpessoa[rnum].codigousuariorede != null){
			            	html+="<option value="+ wpessoa[rnum].idpessoa+"-"+ wpessoa[rnum].nome.replace(" ","_") +">"+ wpessoa[rnum].nome +" ["+ wpessoa[rnum].codigousuariorede+"]</option>";
			        	}
					}		        
            }catch(Exception){
                  console.log("Erro try catch = "+Exception);
            }			
    		 //checkList('nome',rslta);
    		 document.getElementById('idpessoa').innerHTML=html;

	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     	 
	}	   
}

function Pesquisar(){
		    var vForm = document.getElementById('Cados');
		    var f = vForm;  
		    var campo = vForm.vPesquisa.value;
		    //console.log(campo);
		    //campo = "Roberto%20Lima";
		    if (campo.length > 0){
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8083/api/corpo/ordemservico?corpo="+campo;
			   	ajax.open("GET",url,false);
		       	ajax.onreadystatechange = atualizarOS;
			   	ajax.send();
			}
		}
function atualizarOS(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
			//debugger;
            var wos = JSON.parse(ajax.responseText);
           // console.log(wos);
            var html = "";
            try {
                	for (rnum = 0; rnum < wusuarios.length ; rnum++){			            
			            if (wusuarios[rnum].nome != null){
			            	duplicarCampos('origem','destino',wusuarios[rnum].idpessoa+"-"+ wusuarios[rnum].nome.replace(" ","_"));			            	
			        	}
					}		        
            }catch(Exception){
                  console.log("Erro try catch = "+Exception);
            }			
    		 
	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     	 
	}	   
}
function processRequest() {
 if (req.readyState == 4) {
    if (req.status == 200) {
        //rset = xmlhttp.responseXML.documentElement.childNodes;
        var texto = req.responseText;
        alert("resposta = "+texto);
       }
   }
 }
//--Validar caracteres do campo
function cleanMask(val,tp) {
	var strCheck = "|";
	var aux="";
	var i;        
	for(i=0; i<val.length; i++) {
		if(strCheck.indexOf(val.charAt(i))==-1) {
			aux+=val.charAt(i);
		}else{
                    if (tp = "1"){
                        i=val.length;
                    }
                }                
	}
	return aux;
}
function incluirPessoaLista(nForm,cmp){
	 var vForm = document.getElementById(nForm);
	 var f = vForm;  
	 var campo = document.getElementById(cmp);
	 var lista=f.pessoas.value;
	 if (f.pessoas.value==""){
		 f.pessoas.value=f.pessoas.value+f.nome.value+"\r";
	 }else{
		 //Retira espacos nos campos
		 Ltrim(campo);
		 Rtrim(campo);
		 //Ltrim(lista);
		 //Rtrim(lista);
		 if (lista.search(f.nome.value) > 0){
			 alert("Pessoa já faz parte da lista");
			 f.nome.value="";
			 f.nome.focus();
			 return false;
		 }
		 f.pessoas.value=f.pessoas.value+f.nome.value+"\r";
	 }
	 f.nome.value="";
	 f.nome.focus();
}
function Rtrim(obj) 
{
   varx = obj.value;
   while (varx.substr(varx.length - 1,1) == " ") 
   {
      varx = varx.substr(0, varx.length -1);
   }   
   obj.value = varx;
}


function Ltrim(obj) 
{
   varx = obj.value;
   while (varx.substr(0,1) == " ") 
   {
      varx = varx.substr(1, varx.length -1);
   }
  obj.value = varx;
}
function buscaOrdemServicoUsuario(nForm,cmp)
		{//alert(nForm+cmp);
		    var vForm = document.getElementById(nForm);
		    var f = vForm;  
		    var campo = cmp;
		    //console.log(campo);
		    //campo = "Roberto%20Lima";
		    if (cmp > 0){
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8083/api/todos/ordemservicousuarios?idordemservico="+cmp;
			   	ajax.open("GET",url,false);
		       	ajax.onreadystatechange = atualizarOSUsuarios;
			   	ajax.send();
			}
		}
function atualizarOSUsuarios(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
			//debugger;
            var wusuarios = JSON.parse(ajax.responseText);
            //console.log(wusuarios);
            var rslta = new Array(wusuarios.length);
            var html = "";
            try {
                	for (rnum = 0; rnum < wusuarios.length ; rnum++){			            
			            if (wusuarios[rnum].nome != null){
			            	duplicarCampos('origem','destino',wusuarios[rnum].idpessoa+"-"+ wusuarios[rnum].nome.replace(" ","_").replace(" ","_").replace(" ","_"));			            	
			        	}
					}		        
            }catch(Exception){
                  console.log("Erro try catch = "+Exception);
            }			
    		 
	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     	 
	}	   
}
function buscaOrdemServicoPerfil(nForm,cmp)
		{//alert(nForm+cmp);
		    var vForm = document.getElementById(nForm);
		    var f = vForm;  
		    var campo = cmp;
		    //console.log(campo);
		    //campo = "Roberto%20Lima";
		    if (cmp > 0){
			   ajax = openAjax();	   
			   if (ajax == undefined){
			   		ajax = new XMLHttpRequest();
			   }        
		        var url = "http://localhost:8083/api/todos/ordemservicoperfil?idordemservico="+cmp;
			   	ajax.open("GET",url,true);
		       	ajax.onreadystatechange = atualizarOSPerfis;
			   	ajax.send();
			}
		}
function atualizarOSPerfis(){	
	if (ajax.readyState==4){
		if (ajax.status == 200) {
            var wperfis = JSON.parse(ajax.responseText);
            console.log(wperfis);
            try {
            	for (i = 0; i < wperfis.length; i++){			            
		            if (wperfis[i].idperfilsistema > 0){
		            	duplicarCampos('origemp','destinop',wperfis[i].idperfilsistema+"-"+wperfis[i].nomesistema.replace(" ","_").replace(" ","_").replace(" ","_") + " " + wperfis[i].nomeperfil.replace(" ","_"));		            		  
		        	}
				}		        
            }catch(Exception){
                console.log("Erro try catch = "+Exception);
            }			
    		 
	    }else{
	    	wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;
	    }     	 
	}	   
}