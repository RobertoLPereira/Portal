function Valida_data(obj,cponome,compara,outrocampo,sinal,mens)
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
   dia = data.substring(0,2);
   mes = data.substring(2,4);
   ano = data.substring(4,8);
   barra1 = " ";
   barra2 = " ";

  }       
  
  if ((barra1 != "/") || (barra2 != "/")) 
     {
		obj.value = dia+"/"+mes+"/"+ano;
		//alert("O formato da data esta invalido ! Exemplo: dd/mm/aaaa");obj.value = "";obj.focus();return false;
	 }   
  if ( isNaN(dia) || (dia < 1) || (dia > 31)) 
     {alert("A data (dia) é invalida");obj.value = "";obj.focus();return false;}
  else if (isNaN(mes) || (mes < 1) || (mes > 12) ) 
     {alert("A data (mes) é inválida"+mes);obj.value = "";obj.focus();return false;}
  else if (isNaN(ano)) 
     {alert("A data (ano) contem cteres invalidos");obj.value = "";obj.focus();return false;}
     
  quociente = (eval(ano) % 4);
	
  if (quociente == 0)
     {biss = true;}
  else
     {biss = false;}

  if (ano < 1900) 
     {alert("Ano menor que 1900 !"+ano);obj.value = "";obj.focus();return false;}
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
	
  var Wdt = new Date();
  var Cpr = compara;
  var dataobj = ano + mes+dia;
  
  if  ((Wdt.getMonth()+1) < 10 )
	{
		if	(Wdt.getDate() < 10)
			{
			var Wdataatu = Wdt.getFullYear()+"0"+(Wdt.getMonth()+1)+"0"+Wdt.getDate();
			}
		else
			{
			var Wdataatu = Wdt.getFullYear()+"0"+(Wdt.getMonth()+1)+""+Wdt.getDate();
			}
	}
	else if	(Wdt.getDate() < 10)
	{
	 var Wdataatu = Wdt.getFullYear()+""+(Wdt.getMonth()+1)+"0"+Wdt.getDate();
	}
	else
	{
		var Wdataatu = Wdt.getFullYear()+""+(Wdt.getMonth()+1)+""+Wdt.getDate();
	}
	
  if  (Cpr == "Atual")
	{
		if  (dataobj > Wdataatu)
			{
				alert("A data informada é posterior a data atual");obj.value = "";obj.focus();return false;
			}
	}
  if  (Cpr == "Anterior")
	{
		if (dataobj < Wdataatu)
			{
				alert("A data informada é anterior a data atual");
				obj.value = "";
				obj.focus();
				return false;
			}
	}
	
	var Woutro = outrocampo.value;

	if  ((sinal != '') && (Woutro != null))
		{
			dia = Woutro.substring(0,2);
			mes = Woutro.substring(3,5);
			ano = Woutro.substring(6,10);
			var outro = ano+mes+dia;
			var regra = dataobj+" "+sinal+" "+outro;
			
			if  (sinal != '')
				{
					if (eval(regra))
					{
						alert(mens+" "+outro);obj.value="";obj.focus();return false;
					}
				}
		}
} 
