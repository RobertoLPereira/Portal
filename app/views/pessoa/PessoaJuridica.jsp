<%@page language="java" errorPage="trataerro.jsp" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" session="true"%>
<% response.setDateHeader("Expires",0);
   response.setHeader("Pragma","no-cache");
   if (request.getProtocol().equals("HTTP/1.1"))
      response.setHeader("Cache-Control","no-cache");
%>
<%String id = "";
 id = request.getParameter("IdPessoa");
 %>
<%@ include file="../conexao/apoio/VarGlobalApoio.jsp" %>
<%@ include file="../conexao/correios/VarGlobalCorreios.jsp" %>
<jsp:useBean id="bnCbx"  class="cadastropessoas.montaComboBox" />
<jsp:useBean id="bnCor"  class="cadastropessoas.montaComboBox" />
<jsp:useBean id="Dt" class="funcao.FncData" />
<% bnCbx.actURL(urlStringAp, conDriverAp, usuarioAp, senhaAp);%>
<% bnCor.actURL(urlStringCo, conDriverCo, usuarioCo, senhaCo);%>
<html>
<head>
<meta http-equiv="Content-Language" content="pt-br">
<meta name="GENERATOR" content="Microsoft FrontPage 6.0">
<meta name="ProgId" content="FrontPage.Editor.Document">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<link rel='stylesheet' type='text/css' href='../css/edicao.css'>																								
<link rel='stylesheet' type='text/css' href='../css/PDCalendario.css'>																								
<script language='JavaScript' src='../JavaScript/ActionValidation.js' type='text/javascript'></script>															
<script language='JavaScript' src='../JavaScript/PDCalendario.js' type='text/javascript'></script>																
<script language='JavaScript' src='../JavaScript/GmUtil.js' type='text/javascript'></script>																
<script language='JavaScript' src='../JavaScript/JsFunction.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/ValidaData.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/Cidades.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/BairrosForaSaoPaulo.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/LogradourosSC.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/TiposLogradouros.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/AutoCompletar.js' type='text/javascript'></script>																												
<title>Altera�ao nos Dados Cadastrais da Pessoa f�sica</title>
</head>
<style>
	.bg_Ficha{background-repeat:repeat;background-image: url(images/FundoBASA.gif);}
	.bg_Ficha1{background-repeat:repeat;background-image: url(images/zzz.gif);}
</style>
<script language="javascript">
function imprime()
	{
		document.body.className='bg_Ficha1';
		document.all('Impressao').style.display='none';
		self.print();
		self.location.href='#topo';
		document.all('Impressao').style.display='block';
		document.body.className='bg_Ficha';
	}
function Pessoa(){
 document.Pf.action="AltPessoaFisica.jsp";
}
function vinculos(){
 document.Pf.action="AltVinculo.jsp";
}
function endereco(){
 document.Pf.action="AltEndereco.jsp";
}
function Conjuge(){
 document.Pf.action="AltConjuge.jsp";
}
//-->
</script>
<body id="bd" leftmargin="7" class="bg_Ficha" bgcolor= #E9E9E9>
<form id="Pf" name="Pf" action="AltPessoaJuridica.jsp"  method="post" >
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
	<td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    bordercolor="#000000" height="14" align="left" valign="top">
		<a name="topo"><IMG height=29 src="../img/cliente.png" width=25 border=0 ></a><b><font size="2"><span lang="pt-br">Alterar Informa��es cadastrais - Pessoa 
		jur�dica</span></font></b>
    </td>
    <td nowrap width="51%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top">
    </td>
  </tr>
  <tr >
    <td nowrap width="23%" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">Natureza do relacionamento cadastral</font></b><%out.println(bnCbx.montaComboBox("IdNatRelac","Int","select * from naturezarelacionamento where id in (1,2,3,4,5) order by denominacao"));%>
    </td>
	<td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   bordercolor="#000000" height="14" align="left" valign="top">
      <b><font size="1" face="Arial">Unidade:&nbsp;</font></b><%out.println(bnCbx.montaComboBox("IdAgencia","Int","select codigo,denominacao,digito from unidade order by denominacao"));%></font></b>
      <b><font size="1" face="Arial">Posto:&nbsp;</font></b><%out.println(bnCbx.montaComboBox("IdPosto","Int","select id,nomePosto from postoAvancado order by nomePosto"));%></font></b>
    </td>
    <td nowrap width="51%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">01 IDENTIFICA��O</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">C�digo �nico</font></b></td>
    <td nowrap width="84%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">Firma ou Raz�o Social</font></b></td>
  </tr>
  <tr>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;<input style="HEIGHT: 19 ; width:141" id=IdPessoa name=IdPessoa maxlength=19 size=19 value="000000<%=id%>" readonly></font></b></td>
    <td nowrap width="84%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;<input style="HEIGHT: 24 ; width:439" id=nome name=nome maxlength=115 size=40 value="teste"></font></b></td>
  </tr>
</table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="61%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nome Comercial/Fantasia</font></b></td>
    <td nowrap width="20%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nome do grupo econ�mico corrente</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CNPJ da Empresa</font></b></td>
  </tr>
  <tr>
    <td nowrap width="61%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
					<input style="HEIGHT: 23 ; width:413" id=RazaoSocial name=RazaoSocial maxlength=100 size=50 value="">
    </td>
    <td nowrap width="20%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a><input style="HEIGHT: 23 ; width:413" id=grupoEconomico name=grupoEconomico maxlength=100 size=30 value="">
	 </td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<b>
    <font size="1" face="Arial"><input style="HEIGHT: 19 ; width:141" id=IdentificacaoFiscal name=IdentificacaoFiscal maxlength=19 size=19 value="0"></font></b></font></b>
    </td>
  </tr>
</table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Data de constitui��o</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">N do �ltimo registro</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">�rg�o</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Data</font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial"></font></b>				
		<input style="HEIGHT: 23 ; width:94" id=DataConstituicao name=DataConstituicao maxlength=10 size=10 value="" title='Digite a data em que foi contitu�da no formato DD/MM/AAAA' > <a name="topo39"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataConstituicao', 'dd/mm/y');Valida_data(DataConstituicao,DataConstituicao,'Atual','','','')" WIDTH='16' HEIGHT='16'></a></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a><input type=text id=numeroRegistroJunta name=numeroRegistroJunta size="26" title="Opcional - Informe o n�mero do registro na junta"></td >
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text id=orgaoExpedidor name=orgaoExpedidor title="Opcional - Informe em qual �rg�o a empresa foi registrada">
    </td size="60">
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    	<input style="HEIGHT: 25 ; width:103" id=DataRegistroJunta name=DataRegistroJunta maxlength=10 size=10 value="" title='Digite a data do �ltimo registro na junta comercial no formato DD/MM/AAAA' onblur="javascript:Valida_data(DataRegistroJunta,DataRegistroJunta,'Atual','<','DataConstituicao','Data do �ltimo registro na junta comercial anterior a data de constitui��o');" ><a name="topo40"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataRegistroJunta', 'dd/mm/y');Valida_data(DataRegistroJunta,DataRegistroJunta,'Atual','<','DataConstituicao','Data do �ltimo registro na junta comercial anterior a data de constitui��o')" WIDTH='16' HEIGHT='16'></a></td>
  </tr> 
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Capital Social R$</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Capital Realizado R$</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Capital Aberto</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Controle Acion�rio</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
</table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Empresa(s) a que sucede e data(s) de sucess�o</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="36%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">02 LOCALIZA��O</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Endere�o da Sede Social(Tipo do logradouro/ 
	Logradouro)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	No.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Complemento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Per�metro</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=hidden id=IdEndereco name=IdEndereco value=0><input type=text id=TipoLogradouro name=TipoLogradouro onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)">
    	<input type=text id=NomeLogradouro name=NomeLogradouro title='Opcional - Informe o logradouro, n�mero e complemento' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)" size="55">
    	<input type=text id="NumeroLogradouro" name="NumeroLogradouro" size=6>
	   <input type=text id=Complemento name=Complemento size=17 title="Opcional">
	   <input type=text id=Perimetro name=Perimetro title="Opcional - Informe o per�metro para facilitar a localiza��o quando endere�o Rural" size="38">
    </td>
  </tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  
  <tr>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="22%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CEP</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Caixa postal</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CEP caixa postal</font></b></td>
  </tr>
  <tr>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial"></font></b><input type=text id=NomeBairro name=NomeBairro size=33 onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)">
    </td>
    <td nowrap width="22%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a> <input type=text id=NomeMunicipio name=NomeMunicipio size=34 onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)">
	 </td>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b><%out.println(bnCor.montaComboBox("SiglaUF","Char","select UF,denominacao from unidadefederativa order by denominacao"));%>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 22; width:120" id='Cep' name='Cep' size="10">
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 21; width:114" id='CxPostalPessoa' name='CxPostalPessoa' size="20" title="Opcional">
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<%//W02_ENDNUMCP%></font></b>
    </td>
  </tr> 
 </table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Fax</font></b></td>
    <td nowrap width="30%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Endere�o na Internet (SITE)</font></b></td>
   </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial"></font></b><input type=text style="HEIGHT: 21; width:74" id='DDDPessoa' name='DDDPessoa' size="20" title="Opcional">
    	<input type=text style="HEIGHT: 21; width:172" id='TELPessoa' name='TELPessoa' size="20" title="Opcional"><input type=hidden id=idTelPessoa name=idTelPessoa value=0>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a><input type=text style="HEIGHT: 21; width:55" id='DDDPessoaFax' name='DDDPessoaFax' size="20" title="Opcional">
	    <input type=text style="HEIGHT: 21; width:144" id='FaxPessoa' name='FaxPessoa' size="20" title="Opcional">
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text id=nomeSite name=nomeSite title="Opcional - Informe o endere�o do Site da empresa na Internet">
    </td>
   </tr> 
</table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">E-mail</font></b></td>
    <td nowrap width="30%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Pra�as com filiais</font></b></td>
   </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 22; width:394" id='EmailPessoa' name='EmailPessoa'>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
   </tr> 
</table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Endere�o para correspond�ncia</font></b></td>
  </tr>

  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  
  <tr>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="5%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CEP</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Caixa postal</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CEP caixa postal</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
  </tr>
 </table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Ramo (principal)</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Opera nesse ramo desde</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Principais produtos vendidos</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">% s/ vendas</font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nome da franquia autorizada</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CNPJ da franquia autorizada</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<%//PRDPERPROD(1)%></font></b>
    </td>
  </tr> 
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">C�digo I.R. - Principal atividade</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">N de empregados</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<%//PRDCODPROD(2)%></font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<%//PRDPERPROD(2)%></font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Importa?</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Exporta?</font></b></td>
    <td nowrap width="18%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">04 CONTABILIDADE/REGIME TRIBUT�RIO</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">A Empresa levantou balan�o?</font></b></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="100%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Tributa��o do Imposto de Renda com base no:</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">A contabilidade/escritura��o fiscal � terceirizada?</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nome do escrit�rio de contabilidade</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CPF/CNPJ</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Endere�o (rua, av., alameda e n</font></b></td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="5%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">CEP</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Fax</font></b></td>
    <td nowrap width="5%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">E-mail</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" valign="top" align="left">
    	<b><font size="1" face="Arial">&nbsp;<%//FIRTEL%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;<%//FIRENDEMAIL%></font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nome da pessoa para esclarecimento sobre balan�o/cadastro</font></b></td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
	    <b><font size="1" face="Arial">&nbsp;</font></b></a>
	 </td>
    <td nowrap width="1%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">05 CONTROLADORES (s�cios/acionistas - pessoa f�sica e/ou jur�dica)</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="116">
  <tr>
    <td nowrap width="54%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">CNPJ/CPF</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nacionalidade</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Data de entrada</font></b></td>
	<td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Sociedade limitadas</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Sociedades an�nimas</font></b></td>
  </tr>
  <tr>
    <td nowrap width="54%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial">(m�s/ano)</font></b></td>
	<td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial">valor das cotas R$</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="22" align="left" valign="top">
    <b><font size="1" face="Arial">% s/ cap. votante</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">01&nbsp;</font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(1,5)%></font></b>
    </td> 
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(1,6)%></font></b>
    </td>  
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">02&nbsp;<%//Controladores(2,0)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(2,1)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(2,2)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(2,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(2,5)%></font></b>
    </td> 
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(2,6)%></font></b>
    </td>    
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">03&nbsp;<%//Controladores(3,0)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(3,1)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(3,2)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(3,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(3,5)%></font></b>
    </td> 
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(3,6)%></font></b>
    </td>    
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">04&nbsp;<%//Controladores(4,0)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(4,1)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(4,2)%></font></b>
	 </td>
	 <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(4,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(4,5)%></font></b>
    </td> 
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(4,6)%></font></b>
    </td>   
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">05&nbsp;<%//Controladores(5,0)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(5,1)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(5,2)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(5,4)%></font></b>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Controladores(5,5)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Controladores(5,6)%></font></b>
    </td>    
  </tr>
 </table>
 <a name="topo">
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">06 DIRETORES/S�CIOS-GERENTES&nbsp;</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="106%" id="AutoNumber1" height="90">
  <tr>
    <td nowrap width="41%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp; CPF</font></b></td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="center" valign="top">
    <p align="center"><b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Cargo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></p>
    </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <font face="Arial" size="1"><b>Mandato desde</b></font></td>
	<td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Mandato atual</font></b></td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">T�rmino</font></b></td>
  </tr>
  <tr>
    <td nowrap width="41%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
    </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
	<td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    <b><font size="1" face="Arial">data da elei��o</font></b></td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <b><font size="1" face="Arial">01&nbsp;<%//Diretores(1,1)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(1,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(1,3)%></font></b></td></td>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//mid(Diretores(1,4),1,2) & "/" & mid(Diretores(1,4),3,2) & "/" & mid(Diretores(1,4),5,4)%></font></b></td></td>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 <b><font size="1" face="Arial"><%//mid(Diretores(1,5),1,2) & "/" & mid(Diretores(1,5),3,2) & "/" & mid(Diretores(1,5),5,4)%></font></b></td></td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial"><%//mid(Diretores(1,6),1,2) & "/" & mid(Diretores(1,6),3,2) & "/" & mid(Diretores(1,6),5,4)%></font></b></td>  
  </tr>
    <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <b><font size="1" face="Arial">02&nbsp;<%//Diretores(2,1)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(2,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(2,3)%></font></b></td></td>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//mid(Diretores(2,4),1,2) & "/" & mid(Diretores(2,4),3,2) & "/" & mid(Diretores(2,4),5,4)%></font></b></td></td>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 <b><font size="1" face="Arial"><%//mid(Diretores(2,5),1,2) & "/" & mid(Diretores(2,5),3,2) & "/" & mid(Diretores(2,5),5,4)%></font></b></td></td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial"><%//mid(Diretores(2,6),1,2) & "/" & mid(Diretores(2,6),3,2) & "/" & mid(Diretores(2,6),5,4)%></font></b></td>     
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <b><font size="1" face="Arial">03&nbsp;<%//Diretores(3,1)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(3,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(3,3)%></font></b></td></td>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//mid(Diretores(3,4),1,2) & "/" & mid(Diretores(3,4),3,2) & "/" & mid(Diretores(3,4),5,4)%></font></b></td></td>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 <b><font size="1" face="Arial"><%//mid(Diretores(3,5),1,2) & "/" & mid(Diretores(3,5),3,2) & "/" & mid(Diretores(3,5),5,4)%></font></b></td></td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial"><%//mid(Diretores(3,6),1,2) & "/" & mid(Diretores(3,6),3,2) & "/" & mid(Diretores(3,6),5,4)%></font></b></td>    
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <b><font size="1" face="Arial">04&nbsp;<%//Diretores(4,1)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(4,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(4,3)%></font></b></td></td>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//mid(Diretores(4,4),1,2) & "/" & mid(Diretores(4,4),3,2) & "/" & mid(Diretores(4,4),5,4)%></font></b></td></td>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 <b><font size="1" face="Arial"><%//mid(Diretores(4,5),1,2) & "/" & mid(Diretores(4,5),3,2) & "/" & mid(Diretores(4,5),5,4)%></font></b></td></td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial"><%//mid(Diretores(4,6),1,2) & "/" & mid(Diretores(4,6),3,2) & "/" & mid(Diretores(4,6),5,4)%></font></b></td>      
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <b><font size="1" face="Arial">05&nbsp;<%//Diretores(5,1)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(5,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//Diretores(5,3)%></font></b></td></td>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
		<b><font size="1" face="Arial"><%//mid(Diretores(5,4),1,2) & "/" & mid(Diretores(5,4),3,2) & "/" & mid(Diretores(5,4),5,4)%></font></b></td></td>
    </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 <b><font size="1" face="Arial"><%//mid(Diretores(5,5),1,2) & "/" & mid(Diretores(5,5),3,2) & "/" & mid(Diretores(5,5),5,4)%></font></b></td></td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial"><%//mid(Diretores(5,6),1,2) & "/" & mid(Diretores(5,6),3,2) & "/" & mid(Diretores(5,6),5,4)%></font></b></td>      
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">07 CONSELHO DE ADMINISTRA��O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="106%" id="AutoNumber1" height="90">
  <tr>
 <a name="topo">
    <td nowrap width="81%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="19%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp; CPF</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="center" valign="top">
    <p align="center"><b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Cargo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></p>
</td>
	<td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Mandato atual</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">T�rmino</font></b></td>
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="81%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
</td>
    <td nowrap width="19%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
</td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
</td>
	<td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    <b><font size="1" face="Arial">data da elei��o</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
</td>
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">01&nbsp;<%//Conselho(1,1)%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(1,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(1,3)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(1,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Conselho(1,5)%></font></b>
    </td>  
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">02&nbsp;<%//Conselho(2,1)%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(2,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(2,3)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(2,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Conselho(2,5)%></font></b>
    </td>
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">03&nbsp;<%//Conselho(3,1)%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(3,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(3,3)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(3,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Conselho(3,5)%></font></b>
    </td>  
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">04&nbsp;<%//Conselho(4,1)%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(4,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(4,3)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(4,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Conselho(4,5)%></font></b>
    </td>
    </a>
  </tr>
  <tr>
 <a name="topo">
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
	    <b><font size="1" face="Arial">05&nbsp;<%//Conselho(5,1)%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(5,2)%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(5,3)%></font></b>
	 </td>
	<td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%//Conselho(5,4)%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%//Conselho(5,5)%></font></b>
    </td> 
    </a>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
 <a name="topo">
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">
    &nbsp;I&nbsp;I&nbsp; SIM&nbsp;&nbsp;&nbsp; NESTE CASO, PREENCHER O QUADRO ABAIXO&nbsp;&nbsp;I&nbsp;I&nbsp;N�O&nbsp;&nbsp;<P> PASSAR PARA ITE 9</font></b></td>
    </a>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
	<a name="topo">
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <b><font size="1" face="Arial">Esp�cie</font></b>
        <p>&nbsp;<b><font size="1" face="Arial"><%//BemImovel(1,1)%></font></b>
	 </td>
    <td align="left" nowrap width="90%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top" COLSPAN="6">
        <b><font size="1" face="Arial">Localiza��o (endere�o,munic�pio e UF)</font></b>
        <p align="left">&nbsp;<b><font size="1" face="Arial"><%//BemImovel(1,2)%></font></b>
	 </td>
    </a>  
  </tr>
  <tr>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <font face="Arial" size="1"><b>�rea do terreno</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(1,3)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>�r�a construida</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(1,4)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Valor atual de mercado(R$)</b></font>
        <p><font face="Arial" size="1"><b><%//FormatNumber(BemImovel(1,5),2)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem �nus?</b></font>
        <p><font face="Arial" size="1"><b>I  I
        N�o</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem hipoteca?</b></font>
	<a name="topo">
	<p><font face="Arial" size="1"><b>I I N�o</b></font></a>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="center" valign="top">
        <font face="Arial" size="1"><b>Cart�rio</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(1,8)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>N�. Registro</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(1,9)%></b></font>
	 </td>
  </tr>
  <tr>
	<a name="topo">
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <b><font size="1" face="Arial">Esp�cie</font></b>
        <p>&nbsp;<b><font size="1" face="Arial"><%//BemImovel(2,1)%></font></b>
	 </td>
    <td nowrap width="44%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top" colspan="6">
        <p align="left"><b><font size="1" face="Arial">Localiza��o (endere�o,munic�pio e UF)</font></b>
        <p align="left">&nbsp;<b><font size="1" face="Arial"><%//BemImovel(2,2)%></font></b>
	 </td>
    </a>  
  </tr>  
  <tr>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <font face="Arial" size="1"><b>�rea do terreno</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(2,3)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>�r�a construida</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(2,4)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Valor atual de mercado(R$)</b></font>
        <p><font face="Arial" size="1"><b><%//FormatNumber(BemImovel(2,5),2)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem �nus?</b></font>
        <p><font face="Arial" size="1"><b>I  I
        N�o</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem hipoteca?</b></font>
	<a name="topo">
	<p><font face="Arial" size="1"><b>I I N�o</b></font></a>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Cart�rio</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(2,8)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>N�. Registro</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(2,9)%></b></font>
	 </td>
  </tr>
  <tr>
	<a name="topo">
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <b><font size="1" face="Arial">Esp�cie</font></b>
        <p>&nbsp;<b><font size="1" face="Arial"><%//BemImovel(3,1)%></font></b>
	 </td>
    <td nowrap width="44%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top" colspan="6">
        <p align="left"><b><font size="1" face="Arial">Localiza��o (endere�o,munic�pio e UF)</font></b>
        <p align="left">&nbsp;<b><font size="1" face="Arial"><%//BemImovel(3,2)%></font></b>
	 </td>
    </a>  
  </tr>  
  <tr>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <font face="Arial" size="1"><b>�rea do terreno</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(3,3)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>�r�a construida</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(3,4)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Valor atual de mercado(R$)</b></font>
        <p><font face="Arial" size="1"><b><%//FormatNumber(BemImovel(3,5),2)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem �nus?</b></font>
        <p><font face="Arial" size="1"><b>I  I
        N�o</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem hipoteca?</b></font>
	<a name="topo">
	<p><font face="Arial" size="1"><b>I I N�o</b></font></a>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Cart�rio</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(3,8)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>N�. Registro</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(3,9)%></b></font>
	 </td>
  </tr>
  <tr>
	<a name="topo">
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <b><font size="1" face="Arial">Esp�cie</font></b>
        <p>&nbsp;<b><font size="1" face="Arial"><%//BemImovel(4,1)%></font></b>
	 </td>
    <td nowrap width="44%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top" colspan="6">
        <p align="left"><b><font size="1" face="Arial">Localiza��o (endere�o,munic�pio e UF)</font></b>
        <p align="left">&nbsp;<b><font size="1" face="Arial"><%//BemImovel(4,2)%></font></b>
	 </td>
    </a>  
  </tr>  
  <tr>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
        <font face="Arial" size="1"><b>�rea do terreno</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(4,3)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>�r�a construida</b></font>
        <p><font face="Arial" size="1"><b><%//BemImovel(4,4)%></b></font>
	 </td>
    <td nowrap width="8%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Valor atual de mercado(R$)</b></font>
        <p><font face="Arial" size="1"><b><%//FormatNumber(BemImovel(4,5),2)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem �nus?</b></font>
        <p><font face="Arial" size="1"><b>I  I
        N�o</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Tem hipoteca?</b></font>
	<a name="topo">
	<p><font face="Arial" size="1"><b>I Sim I N�o</b></font></a>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>Cart�rio</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(4,8)%></b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
        <font face="Arial" size="1"><b>N�. Registro</b></font>
        <p align="left"><font face="Arial" size="1"><b><%//BemImovel(4,9)%></b></font>
	 </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;I&nbsp;I&nbsp; SIM&nbsp;NESTE CASO, PREENCHER O QUADRO ABAIXO&nbsp;&nbsp;
    I&nbsp;I&nbsp;N�O&nbsp;&nbsp; PASSAR PARA ITEM 10</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" >
  <tr>
    <td nowrap width="81%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Seguradora</font></b></td>
    <td nowrap width="19%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp; Modalidade</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="center" valign="top">
    <p align="center"><b><font size="1" face="Arial">Valor da cobertura (R$)&nbsp;</font></b></p>
    </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">T�rmino</font></b></td>
  </tr>
  <tr>
    <td nowrap width="81%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
    <td nowrap width="19%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="center" valign="top">
    </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; padding: 1px" bordercolor="#000000" height="1" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%%></font></b>
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
        <b><font size="1" face="Arial"><%%></font></b>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="center" valign="top">
        <b><font size="1" face="Arial"><%%></font></b>
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="8" align="left" valign="top">
    	<b><font size="1" face="Arial"><%%></font></b>
    </td>  
  </tr>
  <tr>
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="center" valign="top">
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>  
  </tr>
  <tr>
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="center" valign="top">
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>  
  </tr>
  <tr>
    <td nowrap width="4%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="center" valign="top">
	 </td>
    <td nowrap width="1%" style="border-style: solid; border-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>  
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
 <a name="topo">
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">(listar por ordem
    de import�ncia);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></td>
    </a>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <font size="1" face="Arial"><b>Principais clientes</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <font size="1" face="Arial"><b>CNPJ</b></font>
    </td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="center" valign="top">
        <p align="left"><font size="1" face="Arial"><b>Valor da cobertura(R$)</b></font>
	 </td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
	<a name="topo">
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
	<a name="topo">
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
	<a name="topo">
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;</td>
	<a name="topo">
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Clientes(4,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Clientes(5,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Clientes(5,2))%></td>
	<a name="topo">
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Clientes(5,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <font size="1" face="Arial"><b>Principais fornecedores</b></font>
	 </td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
        <font size="1" face="Arial"><b>CNPJ</b></font>
    </td>
    <td nowrap width="30%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="center" valign="top">
        <p align="left"><font size="1" face="Arial"><b>Valor da cobertura(R$)</b></font>
	 </td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(1,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Fornecedores(1,2))%></td>
	<a name="topo">
    <td nowrap width="43%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(1,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(2,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Fornecedores(2,2))%></td>
	<a name="topo">
    <td nowrap width="43%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(2,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(3,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Fornecedores(3,2))%></td>
	<a name="topo">
    <td nowrap width="43%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(3,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(4,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Fornecedores(4,2))%></td>
	<a name="topo">
    <td nowrap width="43%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(4,3)%></td>
  </tr>
  <tr>
    <td nowrap width="31%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(5,1)%></td>
    <td nowrap width="7%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//FormataCNPJ(Fornecedores(5,2))%></td>
	<a name="topo">
    <td nowrap width="43%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><b><font size="1" face="Arial">&nbsp;<%//Fornecedores(5,3)%></td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp; (indicar as
    institui��es onde mant�m ou manteve opera��es de cr�dito);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>
    <td nowrap width="84%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">N�. Banco</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">N�. da Ag�ncia</font></b></td>
    <td nowrap width="84%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">N�. Banco</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">N�. da Ag�ncia</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCIDAGE(1)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_BANCOD(1)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCODAGE(1)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCIDAGE(2)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_BANCOD(2)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCODAGE(2)%></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCIDAGE(3)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_BANCOD(3)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCODAGE(3)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCIDAGE(4)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_BANCOD(4)%></td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top"><font size="1" face="Arial"><%//W03_REFCODAGE(4)%></td>
  </tr>
</TABLE>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
</TABLE>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>
    <td nowrap width="89%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Empresa de que participa</font></b></td>
    <td nowrap width="32%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">CNPJ</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Sede (cidade e UF)</font></b></td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Capital Social R$</font></b></td>
    <td nowrap width="71%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">% Capital</font></b></td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </a>
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="62%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">12 INFORMA��ES OPERACIONAIS (POSI��O EM &nbsp;</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>

 <a name="topo">
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Saldo de Caixa e Bancos</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(1),2)%></font></b>
    </td>
    </a>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Valores a pagar a fornecedores</b></font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(2),2)%></font></b></a>
	 </td>
  </tr>
  <tr>
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Aplica��es financeiras</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(3),2)%></font></b></a>
    </td>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Sal�rios e tributos a pagar</b></font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(4),2)%></font></b></a>
	 </td>
  </tr>
  <tr>
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Valores e receber de clientes</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(5),2)%></font></b></a>
    </td>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Empr�stimos e financiamentos banc�rios</b></font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(6),2)%></font></b></a>
	 </td>
  </tr>
  <tr>
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Outras contas a receber</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(7),2)%></font></b></a>
    </td>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Outras contas a pagar&nbsp;</b></font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(8),2)%></font></b></a>
	 </td>
  </tr>
  <tr>
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Estoque</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(9),2)%></font></b></a>
    </td>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Despesas </b>(alugu�is e/ou leasing) (m�dia
 mensal)</font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(10),2)%></font></b></a>
	 </td>
  </tr>
  <tr>
    <td nowrap width="9%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <font size="1" face="Arial"><b>Imobilizado</b></font>
	 </td>
    <td nowrap width="15%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(11),2)%></font></b></a>
    </td>
    <td nowrap width="11%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <font size="1" face="Arial"><b>Outras despesas </b>(Pessoal, Tribut�rias,
 Vendas, Gerais etc.) (m�dia mensal)</font>
    </td>
    <td nowrap width="14%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
     <a name="topo"><b><font size="1" face="Arial">R$<%//FormatNumber(Caixa(12),2)%></font></b></a>
	 </td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">Vendas do �ltimo exerc�cio</font></b>
	 </td>
    <td nowrap width="18%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
    <b><font size="1" face="Arial">Compras do �ltimo exerc�cio</font></b>
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">Valor&nbsp;</font></b>
	 </td>
    <td nowrap width="18%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
    <b><font size="1" face="Arial">Valor&nbsp;</font></b>
    </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;R$<%//FormatNumber(Venda(1),2)%></font></b>
	 </td>
    <td nowrap width="18%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
    <b><font size="1" face="Arial">&nbsp;R$<%//FormatNumber(Compra(1),2)%></font></b>
    </td>
  </tr>
  <tr>
    <td nowrap width="24%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top" colspan="4">
     <b><font size="1" face="Arial">Vendas dos 12 (doze) �ltimos meses</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(2),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(3),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(4),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(5),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(6),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(7),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(8),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(9),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(10),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(11),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(12),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Venda(13),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="24%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="16" align="left" valign="top" colspan="4">
     <b><font size="1" face="Arial">Compras dos 12 (doze) �ltimos meses</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(2),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(3),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(4),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(5),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(6),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(7),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(8),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(9),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(10),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(11),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">M�s /
     Ano&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Valor</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(12),2)%></font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     R$<%//FormatNumber(Compra(13),2)%></font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="24%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top" colspan="4">
     <font size="1" face="Arial"><b>Informa��es operacionais prestadas por:</b></font>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="15" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">Contador&nbsp; /&nbsp; Nome</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="15" align="left" valign="top" colspan="2">
     <b><font size="1" face="Arial">S�cio gerente&nbsp; /&nbsp; Nome</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="12%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
	 </td>
    <td nowrap width="12%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top" colspan="2">
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="left" valign="top">
     <b><font size="1" face="Arial">CRC</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="left" valign="top">
     <b><font size="1" face="Arial">Assinatura</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="left" valign="top">
     <b><font size="1" face="Arial">CPF</font></b>
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="13" align="left" valign="top">
     <b><font size="1" face="Arial">Assinatura</font></b>
	 </td>
  </tr>
  <tr>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="6%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">13 OS ATUAIS DIRETORES/S�CIOS OU TITULAR PARTICIPAM DE OUTRAS EMPRESAS?&nbsp;</font></b></td>
  </tr>
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <font face="Arial" size="3">I&nbsp; I </font><font face="Arial" size="1">Sim. Neste caso, preencher o quadro abaixo. Na coluna Ref. anotar o n�. correspondente aos acionistas/s�cios/titular constantes nos itens 5 e 6</font></td>
  </tr>
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <font face="Arial" size="3">I&nbsp; I </font><font face="Arial" size="1">N�o. Passar para item 14.</font></td>
  </tr>
 </table>

 <a name="topo">

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="1">
  <tr>
    <td nowrap width="84%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Ref.</font></b></td>
  </a>
    <td nowrap width="32%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Empresa de que participa</font></b></td>

 <a name="topo">
    <td nowrap width="32%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">CNPJ</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Sede (cidade e UF)</font></b></td>
    <td nowrap width="84%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">Capital Social R$</font></b></td>
    <td nowrap width="10%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px" bordercolor="#000000" height="17" align="left" valign="top">
    <b><font size="1" face="Arial">% Capital</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
  <tr>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
    <td nowrap width="23%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
 <a name="topo">
<b><font size="1" face="Arial">&nbsp;</font></b><font face="Arial" size="4">&nbsp;
I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I&nbsp; I / I&nbsp; I&nbsp;
I&nbsp; I&nbsp; I - I&nbsp; I&nbsp; I</font></a>
    </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
	 </td>
    <td nowrap width="1%" style="border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px" bordercolor="#000000" height="23" align="left" valign="top">
    </td>
  </tr>
 </table>

<p align="left">&nbsp;</p>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="100%" height="14" bgcolor="#DE9E9E">
      <p align="left"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font><font face="Arial" size="2">
      </font></b></span></p></td></tr></table>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="100%" height="14"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font></b></span></td></tr>
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" borderColor="#000000" align="left" width="100%" height="14">
      <p align="justify"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;Declaro que os presentes dados s�o verdadeiros e 
      visam facilitar os processaos de negocia��es e transa��es banc�rias, pela 
      antecipa��o de informa��es a meu respeito. Autorizo o arquivamento dos 
      meus dados pessoais e de idoneidade no Banco da Amaz�nia S.A. e junto a 
      entidades de prote��o ao cr�dito conveniadas com esta Institui��o, que 
      poder�o deles se utilizar, respeitadas as disposi��es legais em 
      vigor.</font></b></span></p>
      <p align="justify"><span lang="en-us"><b><font face="Arial" size="1">Autorizo, tamb�m, nos termos do Artigo 3� da resolu��o 
      n� 2.724, de 31.05.2000, do Conselho Monet�rio Nacional, o Banco da 
      Amaz�nia S.A. consultar as informa��es referentes � minha pessoa, 
      consolidadas em termos de saldos devedores e responsabilidades, 
      integrantes do sistema central de risco de cr�dito, gerido pelo Banco 
      Central do Brasil, pelo que, por ser a presente autoriza��o a manifesta��o 
      fiel de minha livre vontade, firmo este documento, para os fins de 
      direito.</font></b></span></p></td></tr></table>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" borderColor="#000000" align="left" width="100%" height="14"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font></b></span></td></tr></table>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="100%" height="14"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font></b></span></td></tr></table>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="39%" height="14"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font></b></span></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="49%" height="14"><span lang="en-us"><b><font face="Arial" size="1">_________________________________________________________________________</font></b></span></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="12%" height="14">&nbsp;</td></tr>
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="39%" height="14">&nbsp;</td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="49%" height="14">
      <p align="center"><span lang="en-us"><b><font face="Arial" size="1">Local e data</font></b></span></p></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="12%" height="14">&nbsp;</td></tr></table>
<table id="AutoNumber1" style="BORDER-COLLAPSE: collapse" borderColor="#111111" cellSpacing="0" cellPadding="0" width="100%" border="0">
  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="39%" height="14"><span lang="en-us"><b><font face="Arial" size="1">&nbsp;</font></b></span></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="49%" height="14"><span lang="en-us"><b><font face="Arial" size="1">_________________________________________________________________________</font></b></span></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="12%" height="14">&nbsp;</td></tr>
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="39%" height="14">&nbsp;</td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="49%" height="14">
      <p align="center"><span lang="en-us"><b><font face="Arial" size="1">Assinatura do cliente</font></b></span></p></td>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign="top" noWrap borderColor="#000000" align="left" width="12%" height="14">&nbsp;</td></tr></table><!--Impress�o-->
<table cellSpacing="0" cellPadding="0" width="100%" border="0"> 
  <tr>
    <td align="middle" width="100%">
      <div id="Impressao" style="WIDTH: 111px; HEIGHT: 38px"><img style="cursor:hand" onclick="imprime()" src="images/Imp_Basa.gif" border="0" WIDTH="71" HEIGHT="18"> 
      </div>
    </td>
  </tr>
</table>   
<%@ include file="../conexao/VarGlobal.jsp" %>
<jsp:useBean id="bnEd"  class="cadastropessoas.pessoaFisica" />
<%// Esta e a parte responsavel por preencher os campos da tela com os dados oriundos da base de dados
bnEd.actURL(urlString, conDriver, usuario, senha);
String retornoE = bnEd.obtEnderecos( request.getParameter("IdPessoa"),"J");
out.println(retornoE);
%>
</body>
</html>
