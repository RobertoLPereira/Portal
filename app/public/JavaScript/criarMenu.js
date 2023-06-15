var rslta="<table BORDER=\"0\" cellspacing=\"0\" cellpadding=\"1\" width=\"100%\">";
function criarMenu(nForm,cmp)
{//alert(nForm+cmp);
    vForm = document.getElementById(nForm);
    f = vForm;  
    campo = cmp;
    //console.log(campo);
    //campo = "Roberto%20Lima";
    if (campo.length > 0){
	   ajax = openAjax();	   
	   if (ajax == undefined){
	   		ajax = new XMLHttpRequest();
	   }        
	   //var url = urlServico+"PermissoesWS?CodigoUsuarioRede="+campo+"&idSistema=0&Json=N";
           var url = "http://localhost:8083/ordemServico/PermissoesWS?CodigoUsuarioRede="+campo+"&idSistema=0&Json=S";
           //var url = urlServico+"PermissoesJWS?CodigoUsuarioRede="+campo+"&idSistema=0&Json=S";
           //console.log(url);
	   ajax.open("GET",url,true);
	   //ajax.onreadystatechange = atualizarwMenu;
           ajax.onreadystatechange = atualizarwMenuJson;
	   ajax.send();
	}
}

function atualizarwMenuJson(){	
	//alert(ajax.readyState);
	if (ajax.readyState==4){
		//alert(ajax.status);
		if (ajax.status == 200) {
			var nomediv="divs";
			var qtddiv=0;
			var qtdMen=0;
			var sisAn="";
			var menAn="";
                        //debugger;
                        var menu = JSON.parse(ajax.responseText);
                        console.log("menu");
                        try {
                            for (var i=0; i< menu.length; i++){
                                //console.log("Registro= "+menu[i].nomeSistema);
                                if (menu[i].nomesistema !== sisAn){
                                    if	(sisAn !== ""){
                                        menuSistemaFechaSis();
                                        qtddiv++;
                                        qtdMen=qtddiv;
                                    }
                                    sisAn = menu[i].nomesistema;			        		
                                    cabecSistema(qtddiv,sisAn);
                                    menAn = menu[i].menu;
                                    menuSistemaAbreSis(qtddiv,menAn);
			        			}			    
                                if (menu[i].menu !== menAn){
                                    if (menAn !== "" && menu[i].nomesistema === sisAn){
                                        FechaMenu();
                                        qtdMen++;
                                        qtddiv++;
                                        menAn = menu[i].menu;
                                        AbreMenu(qtdMen,menAn);
                                       }			        				        
			        			}
						        rslta+="									<tr>\r";
						        if (menu[i].urlsubtransacao != null){				       
				                    rslta+=" 										<td nowrap class=portaltextos onmouseover=\"javascript:this.className='linkover'\" onmouseout=\"javascript:this.className='portaltextos'\"  onclick=\"parent.principal.location='"+menu[i].urlsubtransacao+"'\" title=\"\">&nbsp;&nbsp;"+menu[i].transacao+"</td>\r";	                     
				                }else{
				                	rslta+=" 										<td nowrap class=portaltextos onmouseover=\"javascript:this.className='linkover'\" onmouseout=\"javascript:this.className='portaltextos'\"  onclick=\"parent.principal.location='/"+menu[i].transacao.replace(" ","")+"'\" title=\"\">&nbsp;&nbsp;"+menu[i].transacao+"</td>\r";	                     
				                }   
				                rslta+=" 	     			    			</tr>\r";                            								            
			        		};
                            menuSistemaFechaSis();
                            SistemaFecha();			        
                        }catch(Exception){
                              console.log("Erro try catch = "+Exception);
                        }			
		        		document.getElementById('wMenu').innerHTML =rslta;
		                //console.log(rslta);
				        //document.mnu.vMenu.innerHTML=rslta;
	    }else{wMenu.innerHTML="Ocorreu erro 500 no servidor! Codigo="+ajax.readyState;}     
			 
	}	   
}
function cabecSistema(qtddiv,sis){
	//alert("cabecSistema");
	rslta+="	<tr>\r";
	rslta+="		<td id=\"s"+qtddiv+"\"  class=\"textos\" bgcolor=\"blue\" width=\"10\" style=\"CURSOR: hand; COLOR: white\"\r";
	rslta+=" 			onclick=\"javascript:esconder('s"+qtddiv+"');menudiv('s"+qtddiv+"');\"><b>+</b></td>\r";
	rslta+="		<td class=textosleft align=left style=\"FONT-SIZE: 8pt; BORDER-BOTTOM: blue 1px solid\" ";
	rslta+=" 			onmouseover=\"javascript:this.className='btpesq3'\"\r";
	rslta+=" 			onmouseout=\"javascript:this.className='textosleft'\" onclick=\"javascript:esconder('s"+qtddiv+"');menudiv('s"+qtddiv+"');\">"+sis+"</td>\r";
	rslta+="	</tr>\r";	
}
function menuSistemaAbreSis(qtdMen,mnu){
	//alert("menuSistemaAbreSis");
	rslta+="	<tr>\r";
	rslta+=" 		<td></td>\r";
	rslta+=" 		<td  class=border style=\"border-top: 0px\">";
	rslta+="			<div id=\"divs"+qtdMen+"\"  style=\"DISPLAY: none\">\r";
	rslta+=" 				<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"1\">\r";
	rslta+=" 					<tr>\r";
	rslta+=" 						<td id=\"s"+qtdMen+"Alt1\" class=\"textos\" bgcolor=\"blue\" height=\"8\" width=\"8\" style=\"CURSOR: hand; COLOR: white\" onclick=\"javascript:recolher('"+qtdMen+"Alt1')\"><b>+</b></td>\r";
	rslta+=" 						<td class=textosleft onmouseover=\"javascript:this.className='btpesq3'\" onmouseout=\"javascript:this.className='textosleft'\" onclick=\"javascript:recolher('s"+qtdMen+"Alt1')\">"+mnu+"</td>\r";
	rslta+="					</tr>\r";
	rslta+="					<tr><td></td>\r";
	rslta+="						 <td><div id=\"sdivs"+qtdMen+"Alt1\" style=\"DISPLAY: none\">\r";
	rslta+="						    	<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"1\">\r";
}
function AbreMenu(qtdMen,mnu){
	//alert("AbreMenu");
	rslta+=" 					<tr>\r";
	rslta+=" 						<td id=\"s"+qtdMen+"Alt1\"  class=\"textos\" bgcolor=\"blue\" height=\"8\" width=\"8\" style=\"CURSOR: hand; COLOR: white\" onclick=\"javascript:recolher('"+qtdMen+"Alt1')\"><b>+</b></td>\r";
	rslta+=" 						<td class=\"textosleft\" onmouseover=\"javascript:this.className='btpesq3'\" onmouseout=\"javascript:this.className='textosleft'\" onclick=\"javascript:recolher('s"+qtdMen+"Alt1')\">"+mnu+"</td>\r";
	rslta+="					</tr>\r";
	rslta+="					<tr><td></td>\r";
	rslta+="						 <td><div id=\"sdivs"+qtdMen+"Alt1\"  style=\"DISPLAY: none\">\r";
	rslta+="						    	<table width=\"100%\" border=\"0\" cellspacing=\"1\" cellpadding=\"1\">\r";
}
function FechaMenu(){
	//alert("FechaMenu");
	rslta+="								</table>\r";
	rslta+="						     </div>\r";
	rslta+=" 					     </td>\r";
        rslta+=" 				    </tr>\r";
}

function menuSistemaFechaSis(){
	//alert("menuSistemaFechaSis");
	rslta+="								</table>\r";
	rslta+="						     </div>\r";
	rslta+=" 					     </td>\r";
    rslta+=" 				  	</tr>\r";
    rslta+="				</table>\r";
    rslta+="			</div>\r";
    rslta+="		</td>\r";
    rslta+="	</tr>\r";
}
function SistemaFecha(){
	//alert("SistemaFecha");
	rslta+="</table>\r";	
}