var atn = window.dialogArguments.toString().substring(0,1);
parseInt(atn);
function doInit()
{
   if(window.dialogArguments != null)
   {
      if ((atn == 0)||(atn == 5)||(atn == 6)||(atn == 7))
      {
         doButtonAction('DvConfirm');
         window.document.forms(0).AlertOK.focus();
      } else {
         doButtonAction('DvAlert');
         window.document.forms(0).ConfirmCancel.focus();
      }
     MsgIco();
   }
   window.returnValue = false;
}
function doButtonAction(sid)
{
   var obj = document.getElementById(sid);
   if(obj.style.display == 'none')
      obj.style.display = 'visible';
   else
      obj.style.display = 'none';
}
function MsgIco()
{
   if(atn == 0){
      window.document.images['ImgIcone'].src="images/Alerta.jpg";
      document.getElementById("PnlAction").className = "PnlAlert";
   }
   if(atn == 1){
      window.document.images['ImgIcone'].src="images/Confirmar.jpg";
      document.getElementById("PnlAction").className = "PnlConfirm";
   }
   if(atn == 2){
      window.document.images['ImgIcone'].src="images/Confirmar.jpg";
      document.getElementById("PnlAction").className = "PnlConfirm";
   }
   if(atn == 3){
      window.document.images['ImgIcone'].src="../images/Confirmar.jpg";
      document.getElementById("PnlAction").className = "PnlConfirm";
   }
   if(atn == 4){
      window.document.images['ImgIcone'].src="../images/Erro.jpg";
      document.getElementById("PnlAction").className = "PnlError";
   }
   if(atn == 5){
      window.document.images['ImgIcone'].src="../images/Alerta.jpg";
      document.getElementById("PnlAction").className = "PnlAlert";
   }
   if(atn == 6){
      window.document.images['ImgIcone'].src="../images/Informar.jpg";
      document.getElementById("PnlAction").className = "PnlInfor";
   }
   if(atn == 7){
      window.document.images['ImgIcone'].src="../images/Alerta.jpg";
      document.getElementById("PnlAction").className = "PnlAlert";
   }
   if(atn == 8){
      window.document.images['ImgIcone'].src="../images/Ajuda.jpg";
      document.getElementById("PnlAction").className = "PnlHelp";
   }
}
function MsgTitle()
{
   var msg = "";
   if (atn == 0)
      msg = "Alerta de Opera��o";
   if (atn == 1)
      msg = "Confirmar Opera��o";
   if (atn == 2)
      msg = "Confirmar Opera��o";
   if (atn == 3)
      msg = "Confirmar Opera��o";
   if (atn == 4)
      msg = "Erro na Opera��o";
   if (atn == 5)
      msg = "Alerta de Opera��o";
   if (atn == 6)
      msg = "Informa��o da Opera��o";
   if (atn == 7)
      msg = "Alerta de Opera��o";
   if (atn == 8)
      msg = "Ajuda da Opera��o";
   return msg;
}
function MsgAction()
{
   var cod = window.dialogArguments.toString().substring(0,1);
   var win = window.dialogArguments
   var msg = "";
   if (win.toString().indexOf("|") != -1){
      msg = win.toString().substring(2, win.toString().length);
   } else {
      msg = "";
   }
   switch (parseInt(cod)) {
      case 1:
      	msg = "Voc� tem certeza que deseja salvar os dados aqui informados?";
      	break;
      case 2:
      	msg = "Voc� tem certeza que deseja excluir o registro atual?";
      	break;
      case 3:
      	msg = "Voc� tem certeza que deseja cancelar a opera��o atual?";
      	break;
      case 5:
      	msg = "Preencha os campos obrigat�rios do formul�rio.";
      	break;
   }
   return msg;
}
function doOK()
{
   window.returnValue = true;
   window.close();
}
function doCancel()
{
   window.returnValue = false;
   window.close();
}