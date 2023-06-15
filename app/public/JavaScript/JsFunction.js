function OnCheckBox(ComponenteChkAll, ComponentesChk)
{
	var form = window.document.forms[0];
	for (var i = 0; i < form.elements.length; i++){
		if (form.elements[i].type=='checkbox'){
			if (form.elements[i].name.indexOf(ComponentesChk) != -1){
				if (ComponenteChkAll.checked){
					if(form.elements[i].checked == false){
						form.elements[i].checked = true;
					}
				} else {
					if(form.elements[i].checked == true){
						form.elements[i].checked = false;
					}					
				}
			}
		}
	}
}
function CheckChanged(ComponenteChkAll, ComponentesChk)
{
	var form = window.document.forms[0];
	var boolAllChecked;
	boolAllChecked = true;
	for( i = 0; i< form.length; i++)
	{
		e = form.elements[i];
		if ( e.type == 'checkbox' && e.name.indexOf(ComponentesChk) != -1 )
			if(e.checked == false) {
				boolAllChecked = false;
				break;
			}
	}
	for( i = 0; i< form.length; i++)
	{
		e = form.elements[i];
		if ( e.type == 'checkbox' && e.name.indexOf(ComponenteChkAll) != -1 )
		{
			if( boolAllChecked == false)
				e.checked = false;
			else
				e.checked = true;
			break;
		}
	}
}
function LinhaOver(linha){
	document.getElementById(linha).className = "LinhaGridOver";
	document.body.style.cursor = "hand";
}
function LinhaOut(linha){
	document.getElementById(linha).className = "LinhaGrid";
	document.body.style.cursor = "default";
}
function setLimpar(Campo)
{
	var f = window.document.forms[0];
	for (var i = 0; i < f.elements.length; i++)
	{
		if(f.elements[i].type == "text")
		   f.elements[i].value = "";
			
		if((f.elements[i].type == "select-one")||(f.elements[i].type == "select-multiple"))
		   f.elements[i].selectedIndex = 0;
	}
	document.getElementById(Campo).focus();
}
function maskEvent(field, _mask, event) {
	var key ='';
	var aux='';
	var len=0;
	var i=0;
	var strCheck = '0123456789';
	var rcode = (window.Event) ? event.which : event.keyCode;

	if(rcode == 13 || rcode == 0 || field.value.length == _mask.length  ) {
		key=String.fromCharCode(rcode);

		if(rcode!=13 && rcode!=0) {
			return false;
		}

		return true;
	}
	key=String.fromCharCode(rcode);

	if(strCheck.indexOf(key)==-1) {
		return false;
	}

	aux=field.value+key;
	aux=mask(_mask,aux);
	field.value=aux;
	return false;
}
function mask(_mask, val) {
	var i, mki;
	var aux="";

	for(i=mki=0; i<val.length; i++, mki++) {
		if(_mask.charAt(mki)=='' || _mask.charAt(mki)=='#' || _mask.charAt(i)==val.charAt(i)) {
			aux+=val.charAt(i);
		} else {
			aux+=_mask.charAt(mki)+val.charAt(i);
			mki++;
		}
	}
	return aux;
}

function ConfirmSubmit(page, prm, prmTarget, CampoValit, CampoFoco, Msn)
{
	var val = document.getElementById(CampoValit).value.length;
	if (val > 0)
	{
	   if(ValidarCPFCNPF(event, CampoValit)){
	      if(prmTarget != "")
	         window.document.forms(0).removeAttribute(prmTarget);
	      window.document.forms(0).action = page + prm;
	      window.document.forms(0).btnIncluir.disabled = false;
	      window.document.forms(0).submit();
	   }
	} else {
	      ShowMensage(7,Msn);
    	      document.getElementById(CampoFoco).focus();
	}
}
function PagRedirect(page, prm, prmTarget)
{
	if(prmTarget != "")	
		window.document.forms(0).removeAttribute(prmTarget);
		window.document.forms(0).action = page + prm;
		window.document.forms(0).submit();
}
function TabParcela()
{
		document.getElementById('dvParcela').style.display = "block";
		document.getElementById('dvPessoas').style.display = "none";
		document.images['imgParcela'].src = "images/Tab_True_Parcela.gif";
		document.images['imgPessoas'].src = "images/Tab_False_Pessoas.gif";
}
function TabPessoas()
{
		document.getElementById('dvParcela').style.display = "none";
		document.getElementById('dvPessoas').style.display = "block";
		document.images['imgPessoas'].src = "images/Tab_True_Pessoas.gif";
		document.images['imgParcela'].src = "images/Tab_False_Parcela.gif";
}

function isNum(caractere, tipo)
{
	var strValidos;
	if (tipo==0)
	   strValidos = '0123456789';
	if (tipo==1)
		 strValidos = '0123456789,.';
	if (tipo==2)
		 strValidos = '0123456789,';
	if (tipo==3)
		 strValidos = 'qwertyuiopasdfghjkl‡zxcvbnmQWERTYUIOPASDFGHJKL€ZXCVBNM';
	if (tipo==4)
		 strValidos = 'qwrtypsdfghjkl‡zxcvbnmQWRTYPSDFGHJKL€ZXCVBNM';
	if (tipo==5)
		 strValidos = 'aeiouAEIOU';
	if (tipo==8)
		 strValidos = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
	if ( strValidos.indexOf( caractere ) == -1 )
		return false;
		return true;
}

function validaTecla(campo, event, tipo)
{
	var BACKSPACE=8;
	var key;
	var tecla;
	CheckTAB=true;
	if(navigator.appName.indexOf('Netscape')!= -1)
		tecla= event.which;
	else
		tecla= event.keyCode;
	key = String.fromCharCode( tecla);
	if ( tecla == 13 )
		return false;
	if ( tecla == BACKSPACE )
		return true;
 if (tipo==6){
	  return ( isCaractere(key));
 } else {
	  return ( isNum(key, tipo));
 }
}

function CurrencyFormat(fld, e)
{
  var milSep = '.';
  var decSep = ',';
  var sep = 0;
  var key = '';
  var i = j = 0;
  var len = len2 = 0;
  var strCheck = '0123456789';
  var aux = aux2 = '';
  var whichCode = null;
  if (window.event)
    whichCode = window.event.keyCode;
  else if (e)
    whichCode = e.which;
 
  if (whichCode == 13) return true;
  key = String.fromCharCode(whichCode);
  if (strCheck.indexOf(key) == -1) return false;

  len = fld.value.length;
  for(i = 0; i < len; i++)
    if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;
  aux = '';
  for(; i < len; i++)
    if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);
  aux += key;
  len = aux.length;
  if (len == 0) fld.value = '';
  if (len == 1) fld.value = '0'+ decSep + '0' + aux;
  if (len == 2) fld.value = '0'+ decSep + aux;
  if (len > 2)
  {
    aux2 = '';
    for (j = 0, i = len - 3; i >= 0; i--)
    {
      if (j == 3)
      {
        aux2 += milSep;
        j = 0;
      }
      aux2 += aux.charAt(i);
      j++;
    }
    fld.value = '';
    len2 = aux2.length;
    for (i = len2 - 1; i >= 0; i--)
      fld.value += aux2.charAt(i);
    fld.value += decSep + aux.substr(len - 2, len);
  }
  return false;
}

function reformatField(fld, e)
{
  var milSep = '.';
  var decSep = ',';
  var sep = 0;
}
function NaoTemRegistro()
	{
		window.parent.document.all.HidTypeAction.value = '0';
	}