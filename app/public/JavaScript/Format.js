function autoCurrencyFormat(fld, e)
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
 
  if (whichCode == 13) return true;  // Enter
  key = String.fromCharCode(whichCode);  // Get key value from key code
  if (strCheck.indexOf(key) == -1) return false;  // Not a valid key

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


function autoCpfFormat(fld, e)
{
  var milSep = '.';
  var decSep = '-';
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
 
  if (whichCode == 13) return true;  // Enter
  key = String.fromCharCode(whichCode);  // Get key value from key code
  if (strCheck.indexOf(key) == -1) return false;  // Not a valid key

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
  
  //alert (key + "/" + len + "/" + fld.value + i );
  if (len > 2)
  {
    
    aux2 = '';
    for (j = 0, i = len - 3; i >= 0; i--)
    {
      
      if (j == 3)
      {
        alert (key + "/" + len + "/" + fld.value + i );
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

function autoDateFormat(fld, e)
{

  var milSep = '/';
  var decSep = '/';
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
 
  if (whichCode == 13) return true;  // Enter
  key = String.fromCharCode(whichCode);  // Get key value from key code
  if (strCheck.indexOf(key) == -1) return false;  // Not a valid key

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
      if (j == 2)
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

function autoHourFormat(fld, e)
{

  var milSep = ':';
  var decSep = ':';
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
 
  if (whichCode == 13) return true;  // Enter
  key = String.fromCharCode(whichCode);  // Get key value from key code
  if (strCheck.indexOf(key) == -1) return false;  // Not a valid key

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
      if (j == 2)
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


function isNum( ctere ) 
{ 
		 alert(ctere);
         var strValidos = "0123456789" 
         if ( strValidos.indexOf( ctere ) == -1 ) 
                 return false; 
         return true; 
} 

function validaTecla(campo, event) 
{ 
         var BACKSPACE=  8; 
         var key; 
         var tecla; 


         CheckTAB=true; 
         if(navigator.appName.indexOf("Netscape")!= -1) 
                 tecla= event.which; 
         else 
                 tecla= event.keyCode; 


         key = String.fromCharCode( tecla); 
         //alert( 'key:' + tecla + '  -> campo: ' + campo.value); 


         if ( tecla == 13 ) 
                 return false; 
         if ( tecla == BACKSPACE ) 
                 return true; 
         return ( isNum(key)); 
} 
function FormataCNPJ( el ) 
{ 
         vr = el.value; 
         tam = vr.length; 


      if ( vr.indexOf(".") == -1 ) 
      { 
      if ( tam <= 2 ) 
              el.value = vr; 
      if ( (tam > 2) && (tam <= 6) ) 
              el.value = vr.substr( 0, 2 ) + '.' + vr.substr( 2, tam ); 
      if ( (tam >= 7) && (tam <= 10) ) 
              el.value = vr.substr( 0, 2 ) + '.' + vr.substr( 2, 3 ) + '.' 
+ vr.substr( 5, 3 ) + '/'; 
      if ( (tam >= 11) && (tam <= 18) ) 
             el.value = vr.substr( 0, 2 ) + '.' + vr.substr( 2, 3 ) + '.' + 
vr.substr( 5, 3 ) + '/' + vr.substr( 8, 4 ) + '-' + vr.substr( 12, 2 ) ; 
      } 
      return true; 
} 

function autoDateFormat2(fld, e)//Formata Data
{

  var milSep = '/';
  var decSep = '/';
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
 
  if (whichCode == 13) return true;  // Enter
  key = String.fromCharCode(whichCode);  // Get key value from key code
  if (strCheck.indexOf(key) == -1) return false;  // Not a valid key

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
    for (j = 0, i = len - 5; i >= 0; i--)// Este len com o len abaixo é que regulam as casas decimais
    {
      if (j == 2)//Este valor também regula a divisão 
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
      fld.value += decSep + aux.substr(len - 4, len);//Este len regula junto com o de cima.
  }													 //oU seja o de cima 4 e este 3 para divir as casas em 3 decimais.	
  return false;
}

function eh_data(obj,cponome)
{
 data = obj.value;
 tamanho = data.length; 
 if (data == "" ) 
 {  return false;}
 
 if (tamanho == 10)
  {
   dia = data.substring(0,2);
   mes = data.substring(3,5);
   ano = data.substring(6,10);
   barra1 = data.substring(2,3);
   barra2 = data.substring(5,6);
  }
 else
  {
   dia = data.substring(0,1);
   mes = data.substring(2,4);
   ano = data.substring(5,9);
   barra1 = data.substring(1,2);
   barra2 = data.substring(4,5);

  }       
  
  if ((barra1 != "/") || (barra2 != "/")) 
     {alert("O formato da data esta invalido ! Exemplo: dd/mm/aaaa");obj.value = "";obj.focus();return false;}   
  if ( isNaN(dia) || (dia < 1) || (dia > 31)) 
     {alert("A data (dia) é invalida");obj.value = "";obj.focus();return false;}
  else if (isNaN(mes) || (mes < 1) || (mes > 12) ) 
     {alert("A data (mes) é inválida");obj.value = "";obj.focus();return false;}
  else if (isNaN(ano)) 
     {alert("A data (ano) contem cteres invalidos");obj.value = "";obj.focus();return false;}
     
  quociente = (eval(ano) % 4);
	
  if (quociente == 0)
     {biss = true;}
  else
     {biss = false;}

  if (ano < 1900) 
     {alert("Ano menor que 1900 !");obj.value = "";obj.focus();return false;}
  if (mes == 2) 
     {
	if ((dia == 29) && (biss == false)) 
	   {alert("O dia e invalido pois o ano nao e bissexto!");obj.value = "";obj.focus();return false;}
	else if ((dia == 30) || (dia == 31)) 
	   {alert("O dia e invalido para o mes de Fevereiro!");obj.value = "";obj.focus();return false;}
     }
     else if ((mes == 4) && (dia == 31)) 
	{alert("O dia e invalido para o mes de Abril!");obj.value = "";obj.focus();return false;}
     else if ((mes == 6) && (dia == 31)) 
	{alert("O dia e invalido para o mes de Junho!");obj.value = "";obj.focus();return false;}
     else if ((mes == 9) && (dia == 31)) 
	{alert("O dia e invalido para o mes de Setembro!");obj.value = "";obj.focus();return false;}
     else if ((mes == 11) && (dia == 31)) 
	{alert("O dia e invalido para o mes de Novembro!");obj.value = "";obj.focus();return false;}
     
} 