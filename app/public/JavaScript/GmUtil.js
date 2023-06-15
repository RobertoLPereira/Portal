/*
------------------------------------
Script.: GmUtil.
Autor..: Glailson Miranda
Cargo..: Analista de Sistema Senior.
Versão.: 1.0.0.0
------------------------------------
*/
function EntraDetalhe(linha){
document.getElementById(linha).className = "trdetalheSelecionado";
document.body.style.cursor = "hand";
}

function SaiDetalhe(linha){
document.getElementById(linha).className = "trdetalhe";
document.body.style.cursor = "default";
}

//--Habilitar a Tecla Enter
function fn(form,field)
{
var next=0, found=false
var f=form
if(event.keyCode!=13) return;
for(var i=0;i<f.length;i++)
	{
	if(field.name==f.item(i).name)
	{
		next=i+1;
		found=true
		break;
	}
	}
while(found)
	{
	if( f.item(next).disabled==false &&  f.item(next).type!='hidden')
		{
		f.item(next).focus();
		break;
		}
	else
		{
		if(next<f.length-1)
			next=next+1;
		else
			break;
		}
	}
}
//--Ferificar data
function verifica_data (data) {
    if(data.value.length > 0) {
        if(data.value!=""){
            dia = (data.value.substring(0,2));
            mes = (data.value.substring(3,5));
            ano = (data.value.substring(6,10));
            situacao = "";
            if ((dia < 01)||(dia < 01 || dia > 30) && (  mes == 04 || mes == 06 || mes == 09 || mes == 11 ) || dia > 31) {
            	situacao = "falsa";
            }
            if (mes < 01 || mes > 12 ) {
            	situacao = "falsa";
            }
            if (mes == 2 && ( dia < 01 || dia > 29 || ( dia > 28 && (parseInt(ano / 4) != ano / 4)))) {
            	situacao = "falsa";
            }
            if (data.value == "") {
            	situacao = "falsa";
            }
            if (situacao == "falsa") {
            	alert("Data inválida!");
            	data.focus();
            }
        }
    }
}
  // verifica data e hora
function verifica_hora(hora){
    if(hora.value.length > 0) {
      hrs = (hora.value.substring(0,2));
      min = (hora.value.substring(3,5));
      situacao = "";
      if ((hrs < 00 ) || (hrs > 23) || ( min < 00) ||( min > 59)){
    	  situacao = "falsa";
      }
      if (hora.value == "") {
    	  situacao = "falsa";
      }
      if (situacao == "falsa") {
    	  alert("Hora inválida!");
    	  hora.focus();
      }
    }
}
//--Validar caracteres do campo
function cleanMask(val) {
	var strCheck = "'[](){}<>=+-*/_|\~`!?@#$%^&:;,.";
	var aux="";
	var i;

	for(i=0; i<val.length; i++) {
		if(strCheck.indexOf(val.charAt(i))==-1) {
			aux+=val.charAt(i);
		}
	}
	return aux;
}
//--Mascara de moeda
function maskCurrency(val, milSep, decSep) {
	var aux="";
	var aux2="";

	var i,j;

	len = val.length;
	if (len == 0) {
		aux = '';
	} else if (len == 1) {
		aux = '0'+ decSep + '0' + val;
	} else if (len == 2) {
		aux = '0'+ decSep + val;
	} else if (len > 2) {
		aux2 = '';

		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += milSep;
				j = 0;
			}
			aux2 += val.charAt(i);
			j++;
		}
		aux = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--) {
			aux += aux2.charAt(i);
		}
		aux += decSep + val.substr(len - 2, len);
	}
	return aux;
}
//--Habilitar mascara
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
//--Evento da mascara
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
	//window.alert(aux);
	aux=mask(_mask,aux);
	//window.alert(aux);
	field.value=aux;
	return false;
}
//--Habilitar mascara de formatação
function currencyFormat(fld, milSep, decSep, e) {
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? e.which : e.keyCode;

	if (whichCode == 13 || whichCode == 0) {		//Enter
		return true;
	}
	key = String.fromCharCode(whichCode);  // Get key value from key code
	if (strCheck.indexOf(key) == -1) {
		return false;  // Not a valid key
	}
	len = fld.value.length;
	for(i = 0; i < len; i++) {
		if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) {
			break;
		}
	}
	aux = '';
	for(; i < len; i++) {
		if (strCheck.indexOf(fld.value.charAt(i))!=-1) {
			aux += fld.value.charAt(i);
		}
	}
	aux += key;

	len = aux.length;
	if (len == 0) {
		fld.value = '';
	} else if (len == 1) {
		fld.value = '0'+ decSep + '0' + aux;
	} else if (len == 2) {
		fld.value = '0'+ decSep + aux;
	} else if (len > 2) {
		aux2 = '';

		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += milSep;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}
		fld.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--) {
			fld.value += aux2.charAt(i);
		}
		fld.value += decSep + aux.substr(len - 2, len);
	}
return false;
}
//-- Colocando a data completa na página
function DataCompleta() {
var Hoje = new Date();
var DiaMes = Hoje.getDate();

    if(DiaMes < 10){
      DiaMes = "0" + DiaMes;
    }

var DiaSem = Hoje.getDay();
var Dias = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");
var Mes = Hoje.getMonth();
var Meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Desembro");
var Ano = Hoje.getFullYear();
    document.write("<CENTER>Hoje é "+Dias[DiaSem]+", "+DiaMes+" de "+Meses[Mes]+" de "+Ano+"</CENTER>");

//-- O efeito digitação na barra de status
}
function Efeitodigitacao() {
var i = 0;
    window.status = "";
    function Digitar(){
    var Frase = "Bem vindo ao meu site";
    var Digitando = Frase.slice(0,i);
        window.status = Digitando;
        i = i + 1;
        if(i >= Frase.length + 10){
          i = 0;
        }
    }
    window.setInterval("Digitar()",100);
    Digitar();
}
//-- Abrindo uma janela em tela cheia

   function Abrir(){
     window.open("script1.htm","","fullscreen,scrollbars");
   }

//-- Detectando a resolução da tela
   function Area_tela() {
   window.alert('Sua resolução é de: ' + screen.width + ' pixels por ' + screen.height + ' pixels');
   }
//-- Calendário fi

   function Calendario() {
   var INICIO, I, COLUNA, DIAS, TITULO;
   var MESES   = 'JanFevMarAbrMaiJunJulAgoSetOutNovDez';
   var HOJE    = new Date();
   var PRIMDIA = new Date();
   var ULTIDIA = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
   var ANO     = HOJE.getYear();
   var DIA     = HOJE.getDate();
   if (ANO < 1000) {
          ANO += 1900;
        }
        TITULO  = MESES.substr(HOJE.getMonth()*3, 3) + '/' + ANO;
        if (((ANO % 4 == 0) && (ANO % 100 != 0)) || (ANO % 400 == 0)) {
          ULTIDIA[1] = 29;
        }
        DIAS = ULTIDIA[HOJE.getMonth()];
        PRIMDIA.setDate(1);
        INICIO = PRIMDIA.getDay();
        document.write('<CENTER>');
        document.write('<TABLE BORDER="3" CELLSPACING="3" CELLPADDING="3">');
        document.write('<TR><TH COLSPAN=7>');
        document.write(TITULO.fixed());
        document.write('<TR><TH>');
        document.write('Dom'.fixed() + '<TH>');
        document.write('Seg'.fixed() + '<TH>');
        document.write('Ter'.fixed() + '<TH>');
        document.write('Qua'.fixed() + '<TH>');
        document.write('Qui'.fixed() + '<TH>');
        document.write('Sex'.fixed() + '<TH>');
        document.write('Sab'.fixed() + '<TH>');
        document.write('<TR>');
        COLUNA = 0;
        for (I=0; I<INICIO; I++) {
          document.write('<TD>');
          COLUNA++;
        }
        for (I=1; I<=DIAS; I++) {
          document.write('<TD ALIGN="center">');
          if (COLUNA == 0 && I == DIA) {
            document.write(DIA.toString().fontcolor('blue').bold()); }
          else {
            if (COLUNA == 0) {
              document.write(I.toString().bold()); }
            else {
              if (I == DIA) {
                document.write(I.toString().fontcolor('blue').bold()); }
              else {
                document.write(I.toString().fontcolor('black'));
              }
            }
          }
          COLUNA++;
          if (COLUNA == 7) {
            document.write('<TR>');
            COLUNA = 0;
          }
        }
        document.write('</TABLE>');
        document.write('</CENTER>');
      }

//--Check Campos

      function ChecaForm() {
        with(document.Formulario) {
          if(Nome.value.length == 0 || Fone.value.length == 0 || Mail.value.length == 0) {
            alert('Todos os campos devem estar preenchidos.');
            return false;
            }
          else {
            alert('OK. O formulário será enviado.');
            return true;
          }
        }
      }

//--Visualizar Impressão
function printpreview(){
var OLECMDID = 7;
var PROMPT   = 1;
var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
    document.body.insertAdjacentHTML('beforeEnd', WebBrowser);
    WebBrowser1.ExecWB(OLECMDID, PROMPT);
    WebBrowser1.outerHTML = "";
}
//--Formatar CPF
function FormatarCpf(input)
{
if((event.keyCode<48)||(event.keyCode>57)){
  event.returnValue = false;
} else {
if((input.value.length==3)||(input.value.length==7))
  input.value=input.value + "." ;
else {
if(input.value.length==11)
  input.value=input.value + "-" ;
}
}
}
//--Formatar Telefone

function FormatarTelefone(input) {
var NumFone = input.value;
var TamFone = NumFone.length;
  switch (TamFone) {
    case 7:  input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,TamFone); break;
    case 8:  input.value = NumFone.substring(0,4) + '-' + NumFone.substring(4,TamFone); break;
    case 9:  input.value = '(' + NumFone.substring(0,2) + ') ' + NumFone.substring(2,5) + '-' + NumFone.substring(5,TamFone); break;
    case 10: input.value = '(' + NumFone.substring(0,2) + ') ' + NumFone.substring(2,6) + '-' + NumFone.substring(6,TamFone); break;
    case 15: input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,7)+ ' / ' + NumFone.substring(7,11) + '-' + NumFone.substring(11,TamFone); break;
    case 16: input.value = NumFone.substring(0,4) + '-' + NumFone.substring(4,8)+ ' / ' + NumFone.substring(8,12) + '-' + NumFone.substring(12,TamFone); break;
    case 24: input.value = NumFone.substring(0,4) + '-' + NumFone.substring(4,8)+ ' / ' + NumFone.substring(8,12) + '-' + NumFone.substring(12,16) + ' / ' + NumFone.substring(16,20) + '-' + NumFone.substring(20,TamFone); break;
    case 14: input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,7)+ ' / ' + NumFone.substring(7,10) + '-' + NumFone.substring(10,TamFone); break;
    case 21: input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,7)+ ' / ' + NumFone.substring(7,10) + '-' + NumFone.substring(10,14) + ' / ' + NumFone.substring(14,17) + '-' + NumFone.substring(17,TamFone); break;
    case 22: input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,7)+ ' / ' + NumFone.substring(7,10) + '-' + NumFone.substring(10,14) + ' / ' + NumFone.substring(14,18) + '-' + NumFone.substring(18,TamFone); break;
    case 23: input.value = NumFone.substring(0,3) + '-' + NumFone.substring(3,7)+ ' / ' + NumFone.substring(7,11) + '-' + NumFone.substring(11,15) + ' / ' + NumFone.substring(15,19) + '-' + NumFone.substring(19,TamFone); break;
  }
}

//--Ao Receber Focu

function RecebeFocu(input) {
var NumFone = input.value;
    document.write('<b>' + input.value + '</b>');
}

//-- Calendario
    var calendar = null;
    function setActiveStyleSheet(title) {
    var i, a, main;
      for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
          a.disabled = true;
          if(a.getAttribute("title") == title) a.disabled = false;
        }
      }
      document.getElementById("style").innerHTML = title;
      return false;
    }

    function selected(cal, date) {
      cal.sel.value = date;
        cal.callCloseHandler();
    }

    function closeHandler(cal) {
      cal.hide();
      removeEvent(document, "mousedown", checkCalendar);
    }

    function checkCalendar(ev) {
    var el = is_ie ? getElement(ev) : getTargetElement(ev);
      for (; el != null; el = el.parentNode)
        if (el == calendar.element || el.tagName == "A") break;
      if (el == null) {
        calendar.callCloseHandler();
        stopEvent(ev);
      }
    }

    function showCalendar(id, format) {
    var el = document.getElementById(id);
      if (calendar != null) {
        calendar.hide();
      } else {
        var cal = new Calendar(true, null, selected, closeHandler);
        calendar = cal;
        cal.setRange(1900, 2070);
      }
      calendar.setDateFormat(format);
      calendar.parseDate(el.value);
      calendar.sel = el;
      calendar.showAtElement(el);
      addEvent(document, "mousedown", checkCalendar);
      return false;
    }