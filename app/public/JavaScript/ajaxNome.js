document.write('<style type="text/css">'+
				  '#listHolder{position:absolute;border:0;}'+
				  '.list{font-family:verdana;font-size:10;color:#000000;background:;}'+
		 '<\/style>')
var nomeCampo;
function checkList(obj,nStr) {
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
			str+=('<option value="'+nStr[a].replace(/\'/gi,'?')+'">'+nStr[a]+'</option>')   
			match=true
			/* As linhas abaixo fora inibidas pois o teste de coincidência está sendo realizado na instrução select
			if(txt.toLowerCase()==nStr[a].toLowerCase().substring(0,txt.length)){
				match=true
				str+=('<option value="'+nStr[a].replace(/\'/gi,'?')+'">'+nStr[a]+'</option>')   
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
        var cmp = obj;
	var obj=document.getElementById(obj)
        //Preenche o campo IdPessoaRelacionada com o valor correspondente ao IdPessoa selecionada
        obj.value=cleanMask(val,"1");
        //document.all.IdPessoa.value = cleanMask(val,"1");	
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

function Pesquisar(nForm,cmp){
 var vForm = document.getElementById(nForm);
 var f = vForm;  
 var campo = document.getElementById(cmp);
 var req;
 var isIE;
 var rset;
 if (window.XMLHttpRequest) {
   req =  new ActiveXObject("Msxml2.XMLHTTP");
 }else if (window.ActiveXObject) {
   isIE = true;
   req = new ActiveXObject("Msxml2.XMLHTTP");
 }
 var url = "../servlet/ajaxNomePessoa?nome="+campo.value;
 req.open("GET", url, true);
 req.send(null);
if (req.readyState == 4) {
    if (req.status == 200) {
        rset = req.responseXML.documentElement.childNodes;
        var rslta = new Array(rset.length);
        var Gnum;
        var gnr;
        Gnum = 0;
        for (rnum = 0; rnum < rset.length ; rnum++){
            crec = rset.item(rnum).childNodes;
            rslta[Gnum] = crec.item(0).text  +"|"+ crec.item(1).text;
            Gnum++;            
	}	        
     }
     checkList(cmp,rslta);
   }
}
//--Validar caracteres do campo, obtem o IdPessoa e elimina o nome
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