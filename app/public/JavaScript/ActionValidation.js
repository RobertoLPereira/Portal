function doInitSalva(nForm)
{	
    var vForm = document.getElementById(nForm);
    vForm.BtnNovo.disabled = true;
    vForm.BtnSalvar.disabled = false;
    vForm.BtnExcluir.disabled = false;
    vForm.BtnCancelar.disabled = false;
    ReadOnlyForm("false", nForm);
}
function doInit(nForm)
{	
    var vForm = document.getElementById(nForm);
    vForm.BtnNovo.disabled = false;
    vForm.BtnSalvar.disabled = true;
    vForm.BtnExcluir.disabled = true;
    vForm.BtnCancelar.disabled = true;
    ReadOnlyForm("true", nForm);
}
function ActionType(acao, foco, nForm)
{	
    switch (acao)
    {
        case 0:
          ActionNew(foco, nForm);
          break;
        case 1:
          ActionSaver(acao, foco, nForm);
          break;
        case 2:
          ActionDelete(acao, nForm);
          break;
        case 3:
          ActionCancel(foco, nForm);
          break;
    }
}
function ActionNew(foco, nForm)
{
	var vForm = document.getElementById(nForm);
    vForm.BtnNovo.disabled = true;
    vForm.BtnSalvar.disabled = false;
    vForm.BtnExcluir.disabled = true;
    vForm.BtnCancelar.disabled = false;
    ReadOnlyForm("false", nForm);
    ClearForm(foco, nForm);
}
function ActionSaver(acao, foco, nForm)
{   debugger;
	var vForm = document.getElementById(nForm);
    var vnull= ActionIsNull(nForm);
    if (vnull.toString() == "false")
    {
    	var rsm = ShowMensage(1, "");
	if(rsm.toString() == "false")
    	  return false;
    	else {
		  vForm.HidTypeAction.value = acao;
    	  vForm.submit();
    	  vForm.BtnNovo.disabled = false;
    	  vForm.BtnSalvar.disabled = true;
    	  vForm.BtnExcluir.disabled = true;
    	  vForm.BtnCancelar.disabled = true;
	  ReadOnlyForm("false", nForm);
    	}
    } else {
    	ShowMensage(5, "");
        document.getElementById(foco.replace( /\s+$/g, "" )).focus();
    }
}
function ActionDelete(acao, nForm)
{   
    var vForm = document.getElementById(nForm);
    var rsm = ShowMensage(2, "");
    if(rsm.toString() == "false")
        return false;
    else {
		vForm.HidTypeAction.value = acao;
		vForm.submit();
    	vForm.BtnNovo.disabled = false;
    	vForm.BtnSalvar.disabled = true;
    	vForm.BtnExcluir.disabled = true;
    	vForm.BtnCancelar.disabled = true;
	ClearForm("", nForm);
        ReadOnlyForm("true", nForm);
    }
}
function ActionCancel(foco, nForm)
{
    var vForm = document.getElementById(nForm);
    var rsm = ShowMensage(3, "");
    if(rsm.toString() == "false")
        return false;
    else {
        vForm.BtnNovo.disabled = false;
        vForm.BtnSalvar.disabled = true;
        vForm.BtnExcluir.disabled = true;
        vForm.BtnCancelar.disabled = true;
        ReadOnlyForm("true", nForm);
	ClearForm(foco, nForm);
    }
}
function ActionIsNull(nForm)
{
    var result = true;
    var vForm = document.getElementById(nForm);
    var f = vForm;
    
    for (var i = 0; i < f.elements.length; i++)
    {  
    	if(f.elements[i].type == "text"){
    		//alert(f.elements[i].title);
    	   if(f.elements[i].value == "" && f.elements[i].title != "Opcional")
    		  //alert(f.elements[i].name);
    	      result = true;
    	   else
    	      result = false;
    	}
    	if((f.elements[i].type == "select-one")||(f.elements[i].type == "select-multiple"))
    	   if(f.elements[i].selectedIndex == 0)
    	      result = true;
    	   else
    	      result = false;
    }    
    return result
}
function ClearForm(foco, nForm)
{	
	var vForm = document.getElementById(nForm);
    var f = vForm;
    for (var i = 0; i < f.elements.length; i++)
    {
    	if(f.elements[i].type == "hidden")
    	   f.elements[i].value = "";

    	if(f.elements[i].type == "text"){
    	   f.elements[i].value = "";
    	}
    	if((f.elements[i].type == "select-one")||(f.elements[i].type == "select-multiple"))
    	   f.elements[i].selectedIndex = 0;
    }
    if (foco.toString().length > 0)
	document.getElementById(foco.replace( /\s+$/g, "" )).focus();
}
function ReadOnlyForm(acao, nForm)
{
	var vForm = document.getElementById(nForm);
    var f = vForm;
    for (var i = 0; i < f.elements.length; i++)
    {
    	if((f.elements[i].type == "hidden")||(f.elements[i].type == "text")||(f.elements[i].type == "select-one")||(f.elements[i].type == "select-multiple"))
    	   if (acao == "false"){
       	      if(f.elements[i].readOnly){
    	         f.elements[i].readOnly = false;
    	      }
    	   } else {
       	      if(f.elements[i].readOnly == false){
    	         f.elements[i].readOnly = true;
    	      }
    	   }
    }
}
function ShowMensage(acao, msn)
{
    var str = "";
    if (msn == "")
    	str = acao;
    else
    	str = acao + "|" + msn;
    str = window.showModalDialog('MsgBox.ejs',str,'help:no; unadorned:no; dialogWidth:382px; dialogHeight:232px; center:yes; scroll:no; status:no');
    return str;
}

function ValidarCPFCNPF(pEvent, Campo)
{
    var val = document.getElementById(Campo.replace( /\s+$/g, "" )).value;
    var base = val.substring(0, val.length-2);
    var result = false;

    if (val.length > 11)
    	if(!isCnpj(val)) {
    	   ShowMensage(7,"O CNPJ de Número: " + formatCpfCnpj(val, true, true) + " não é valido.");
	   document.getElementById(Campo.replace( /\s+$/g, "" )).focus();
    	} else
           result = true;
	   
    if (val.length <= 11)
    	if(!isCpf(val)){
    	   ShowMensage(7,"O CPF de Número: " + formatCpfCnpj(val, true) + " não é valido.");
	   document.getElementById(Campo.replace( /\s+$/g, "" )).focus();
    	} else
           result = true;	
	
    return result;
}
function FormatarCpfCnpj(cpfcnpj)
{
	cpfcnpj.value = formatCpfCnpj(cpfcnpj.value, true, true);
	return true;
}