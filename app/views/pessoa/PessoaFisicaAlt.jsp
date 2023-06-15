<%@page language="java"  contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" session="true" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
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
<script language='JavaScript' src='../JavaScript/Format.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/PDCalendario.js' type='text/javascript'></script>																
<script language='JavaScript' src='../JavaScript/GmUtil.js' type='text/javascript'></script>																
<script language='JavaScript' src='../JavaScript/JsFunction.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/ValidaData.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/Cidades.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/BairrosForaSaoPaulo.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/LogradourosSC.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/TiposLogradouros.js' type='text/javascript'></script>
<script language='JavaScript' src='../JavaScript/AutoCompletar.js' type='text/javascript'></script>																												
<title>Alteraçao nos Dados Cadastrais da Pessoa física</title>
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

function atualizaFuncao(){
	document.Pf.funcao.value = document.Pf.Cargo.value;
	return true;
}
//-->
</script>

<script language="vbscript">
function Imprimir()
	

	Impressao.style.display = "none" 'Esconde o Div de Nome Imp
	self.print() 'Chama a Propriedade da impressora
	Impressao.style.display = "block" 'Mostra o Div após a Impressão.
		
end function
</script>
<!-- bgColor=#C9DCD2 -->
<body id="bd" leftmargin="7" class="bg_Ficha" bgcolor= #E9E9E9>
<form id="Pf" name="Pf" action="AltPessoaFisica.jsp"  method="post" >
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
	<td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    bordercolor="#000000" height="14" align="left" valign="top">
		<a name="topo"><IMG height=29 src="../img/cliente.png" width=25 border=0 ></a><b><font size="2"><span lang="pt-br">Alterar Informações cadastrais - Pessoa física</span></font></b>
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
    <td nowrap width="100%" bgcolor="#DE9E9E" style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top">
     <b><font size="1" face="Arial">DADOS BÁSICOS DA PESSOA</font></b>
    </td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Código da pessoa</font></b></td>
    <td nowrap width="64%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top"><b>
     <font size="1" face="Arial">Nome completo</font></b></td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top">
     <b><font size="1" face="Arial">Apelido</font></b>
    </td>
  </tr>
  <tr >
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">&nbsp;<%=id%></font></b></td>
    <td  nowrap width="64%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM solid gray<u></u>: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  bordercolor="#000000" height="14" align="left" valign="top">
    	<input type=hidden id=IdPessoa name=IdPessoa value='<%=id%>'>
    	<input type=hidden id=IdSituacaoCadastro name=IdSituacaoCadastro value="1">
    	<input type=hidden id=IdSituacaoPessoa name=IdSituacaoPessoa value="1">
    	<input type=hidden id=DataCadastro name=DataCadastro value="<%= Dt.getDate()%>">
    	<input type=hidden id=ClienteDesde name=ClienteDesde value="<%= Dt.getDate()%>">    	
    	<input type=hidden id=idOrigem name=idOrigem value="1">
    	<input type=hidden id=Status name=Status value="1">
    	<input type=hidden id=IdUsuario name=IdUsuario value="Roberto">
    	<input type=hidden id=DataAtualizacao name=DataAtualizacao value="<%= Dt.getDate()%>">    	
    	<input type=hidden id=IdEstacao name=IdEstacao value="NoteBook">
    	<input type=hidden id=DataAtualizacaoCadastro name=DataAtualizacaoCadastro value="<%= Dt.getDate()%>">
    	<input type=hidden id=NomeUsuario name=NomeUsuario value="Roberto">
        <input type=hidden id=Perimetro name=perimetro size=115 value" ">
    	<b><font size="1" face="Arial">
		<input type=text id='Nome' name='Nome' style="border:0px none; HEIGHT: 25; width:473; FONT-WEIGHT: bold; FONT-SIZE: 7pt; color:black; " value=""></font></b>
    </td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">&nbsp;<input type=text id='Apelido' name='Apelido' style="border:0px none; HEIGHT: 20; width:181; FONT-WEIGHT: bold; FONT-SIZE: 7pt; color:black" value=""></font></b>
    </td>
  </tr>
</table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">CPF</font></b></td>
    <td nowrap width="15%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Situação na Receita</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Data do nascimento</font></b></td>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">Local de nascimento</font></b></td>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="32%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Nacionalidade&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Código de usuário na rede interna</font></b></td>
  </tr>
  <tr>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<input type=text style="HEIGHT: 21; width:148" id='IdentificacaoFiscal' name='IdentificacaoFiscal'></font></b></td>
    <td nowrap width="15%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial"><%out.println(bnCbx.montaComboBox("IdSituacaoReceitaFederal","Int","select * from situacaoreceita order by denominacao"));%></font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<input style="HEIGHT: 20 ; width:97" id="DataNascimento" name="DataNascimento" maxlength=10 size=10 value="" title='Digite a data de nascimento no formato DD/MM/AAAA'>
                                         <img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataNascimento', 'dd/mm/y');" WIDTH='16' HEIGHT='16'></font></b></td>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     bordercolor="#000000" height="14"     align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<input type=text style="HEIGHT: 22; width:148" id='IdNaturalidade' name='IdNaturalidade' onClick="checkList(this,cidades )" onKeyUp="checkList(this,cidades )"></font></b></td>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<%out.println(bnCor.montaComboBox("UfNaturalidade","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></font></b></td>
    <td nowrap width="32%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<a name="topo">
    <input type=text style="HEIGHT: 22; width:102" id='Nacionalidade' name='Nacionalidade'></a>&nbsp;
	<a name="topo52">
    <input type=text style="HEIGHT: 22; width:190" id='CodigoUsuarioRede' name='CodigoUsuarioRede'></font></b></td>
  </tr>
 </table>
 

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="11%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Data naturalização</font></b></td>
    <td nowrap width="9%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Sexo</font></b></td>
    <td nowrap width="12%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Estado civil</font></b></td>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Regime de casamento</font></b></td>
    <td nowrap width="9%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Nº Dependentes</font></b></td>
    <td nowrap width="22%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Profissão</font></b></td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Cargo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Principal ?</font></b></td>
  </tr>
  <tr>
    <td nowrap width="11%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b></td>
    <td nowrap width="9%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <a name="topo0">
	<select id=IdSexo name=IdSexo size="1"><option value="1" selected>Feminio</option><option value='2'>Masculino</option></select></td>
    <td nowrap width="12%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" align="left" valign="top">
    <a name="topo1"><%out.println(bnCbx.montaComboBox("IdEstadoCivil","Int","select * from estadocivil order by denominacao"));%></td>
    <td nowrap width="16%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><a name="topo2"><%out.println(bnCbx.montaComboBox("IdRegimeCasamento","Int","select * from regimedebens order by denominacao"));%></b></td>
    <td nowrap width="9%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <a name="topo3"><input type=text style="HEIGHT: 20; width:42" id='NDependente' name='NDependente' size="20"></td>
    <td nowrap width="22%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><a name="topo4">
	<input type=text style="HEIGHT: 24; width:214" id='Profissao' name='Profissao' size="20"></b></td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     bordercolor="#000000" height="14" align="left" valign="top"><a name="topo3">
	 <input type=hidden id=idOcupacao name=idOcupacao value=0><input type=text style="HEIGHT: 21; width:135" id='Cargo' name='Cargo' size="20" title="Opcional - Informe o cargo quando for aplicável"></a></a><a name="topo36"><b><font size="1" face="Arial">
	<select id=principal name=principal size="1"><option value="1" selected>Sim</option><option value="0">Não</option></select></font></b></td>
  </tr>
 </table>
  
<a name="topo">
  
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="29%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Documento de identificação - Tipo:</font></b></td>
    <td nowrap width="24%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Nº Documento</font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font face="Arial" size="1">Órgão expedidor</font></b></td>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="19%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Data da expedição</font></b><a name="topo">&nbsp; </td>
  </tr>
  <tr>
    <td nowrap width="29%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;<%out.println(bnCbx.montaComboBox("TipoDocumento","Int","select * from tipoprovadocumental order by denominacao"));%></font></b></td>
    <td nowrap width="24%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  bordercolor="#000000" height="14"     align="left" valign="top">
    <b>    <font size="1" face="Arial">&nbsp;<a name="topo">
		<input type=text style="HEIGHT: 24; width:180" id='RegistroGeral' name='RegistroGeral'><a name="topo6"></font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  bordercolor="#000000" height="14"  align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;  
	<a name="topo"><input type=text style="HEIGHT: 20; width:61" id='OrgaoEmissor' name='OrgaoEmissor' size="20"></font></b></td>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  bordercolor="#000000" height="14"  align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;<%out.println(bnCor.montaComboBox("UfRg","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></font></b></td>
    <td nowrap width="19%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo49"><input style="HEIGHT: 21 ; width:78" id="DataRegistroGeral" name="DataRegistroGeral" maxlength=10 size=10 value="" title='Digite a data da Expedição no formato DD/MM/AAAA' onblur="javascript:Valida_data(DataRegistroGeral,DataRegistroGeral,'Atual','DataNascimento','<','Data de expedição anterior a data de nascimento')"></a></a>
  
<a name="topo">  
 	<a name="topo50">
    <img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataRegistroGeral', 'dd/mm/y');Valida_data(DataRegistroGeral,DataRegistroGeral,'Atual','DataNascimento','<','Data de expedição anterior a data de nascimento');" WIDTH='16' HEIGHT='16'></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Nome da mãe: </font></b><a name="topo9">
	<input type=text style="HEIGHT: 25; width:400" id='NomeMae' name='NomeMae'></a></a>
    <b><font size="1" face="Arial"><a name="topo11">Nome do pai:</font></b><a name="topo12">
    	<input type=text style="HEIGHT: 26; width:351" id='NomePai' name='NomePai'></a>
    	<input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:Pessoa();ActionType(1,'IdPessoa','Pf');" id='BtnSalvar' name='BtnSalvar' value='Salvar'>
    </td>
  </tr>
<a name="topo">
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     bordercolor="#000000" height="14"     align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor= #DE9E9E style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">DADOS PARA LOCALIZAÇÃO DA PESSOA</font></b></td>
  </tr>
 </table>
<table  border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" align="left" valign="top"> <a name="topo">
  	<img border="0" src="../img/endereco.png" width="30" height="30" lowsrc="../img/endereco.png"></a><b><font size="1" face="Arial">Tipo:</font></b>
    <a name="topo13"><input type=hidden id'IdEndereco' name='IdEndereco' value=0><input type=text id='tipoLogradouro' name='tipoLogradouro' onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)"><b><font size="1" face="Arial">Residência atual:</font></b>
	<input type=text style="HEIGHT: 20; width:426" id='NomeLogradouro' name='NomeLogradouro' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)">nº:
        <input type=text id="NumeroLogradouro" name="NumeroLogradouro" size=6></a>&nbsp; 
	complemento<input type=text id=Complemento name=Complemento size=19 title="Opcional">
        <input type=hidden id=IdTipoEndereco name=IdTipoEndereco value="2">
    </td>
  </tr>
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b></td>  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="27%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="8%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="15%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Cep</font></b></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">DDD</font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b><font size="1" face="Arial">Telefone</font></b></td>
  </tr>
  <tr>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;<input type=text id=NomeBairro name=NomeBairro size=33 onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)"></font></b></td>
    <td nowrap width="27%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo14"><b><font size="1" face="Arial"><input type=text id=NomeMunicipio name=NomeMunicipio size=34 onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)"></font></b></td>
    <td nowrap width="8%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo15"><%out.println(bnCor.montaComboBox("SiglaUF","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></td>
    <td nowrap width="15%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" 
    align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo16"><input type=text style="HEIGHT: 20; width:131" id='Cep' name='Cep' size="20"></td>
    <td nowrap width="10%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    bordercolor="#000000" height="14" align="left" valign="top">
    <b> <font size="1" face="Arial">&nbsp;</font></b><a name="topo17"><input type=text style="HEIGHT: 21; width:74" id='DDDPessoa' name='DDDPessoa' size="20"></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    bordercolor="#000000" height="14"     align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;</font></b><a name="topo18"><input type=text style="HEIGHT: 21; width:172" id='TELPessoa' name='TELPessoa' size="20"><input type=hidden id=idTelPessoa name=idTelPessoa value=0></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">DDD</font></b></td>
    <td nowrap width="14%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Fax</font></b></td>
    <td nowrap width="8%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">DDD</font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Celular</font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Caixa Postal</font></b></td>
    <td nowrap width="37%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">E-mail</font></b></td>
  </tr>
  <tr>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;</font></b><a name="topo19"><input type=text style="HEIGHT: 21; width:55" id='DDDPessoaFax' name='DDDPessoaFax' size="20" title="Opcional"></td>
    <td nowrap width="14%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo20"><input type=text style="HEIGHT: 21; width:144" id='FaxPessoa' name='FaxPessoa' size="20" title="Opcional"><input type=hidden id=idFaxPessoa name=idFaxPessoa value=0></td>
    <td nowrap width="8%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <a name="topo21">
	<input type=text style="HEIGHT: 21; width:55" id='DddCelPessoa' name='DddCelPessoa' size="20"></a><b><font size="1" face="Arial">&nbsp;</font></b></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <b>    <font size="1" face="Arial">&nbsp;</font></b><a name="topo22"><input type=text style="HEIGHT: 21; width:144" id='CelPessoa' name='CelPessoa' size="20"><input type=hidden id=idCelPessoa name=idCelPessoa value="0"></td>
    <td nowrap width="17%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo23"><input type=text style="HEIGHT: 21; width:144" id='CxPostalPessoa' name='CxPostalPessoa' size="20" title="Opcional"></td>
    <td nowrap width="37%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" 
    bordercolor="#000000" height="14" align="left" valign="top">  <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo24"><input type=text style="HEIGHT: 22; width:394" id='EmailPessoa' name='EmailPessoa'></a></td>
  </tr>
 </table>

<table  border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Tempo de residência</font></b><a name="topo25"><input type=text style="HEIGHT: 21; width:55" id='TmpResidPessoa' name='TmpResidPessoa' size="20"></a></td>
    <td nowrap width="29%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Tipo de residência:</font></b><a name="topo26"><%out.println(bnCbx.montaComboBox("TipoResidencia","Int","select * from tipodeimovel order by denominacao"));%></td>
    <td nowrap width="46%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Endereço para correspondência:</font></b><a name="topo27"><select id=EndCorrespondencia name=EndCorrespondencia size="1">
	<option value="1" selected>Sim</option><option value="2">Não</option></select></td>
  </tr>
  <tr>
    <td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <b>
    <font size="1" face="Arial">&nbsp;</font></b></td>
    <td nowrap width="29%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top"><b>
     <font size="1" face="Arial">&nbsp;</font></b></td>
    <td nowrap width="46%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
 </table>

<table bgcolor=#B7B7FF border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <img border="0" src="../img/endereco.png" width="30" height="30" lowsrc="../img/endereco.png"><b><font size="1" face="Arial">Tipo logradouro <a name="topo">
    <input type=text id='tipoLogradouroAnt' name='tipoLogradouroAnt' onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)"></a>Residência anterior ( nº,Complemento)</font></b><a name="topo33">
    <input type=hidden id='IdEnderecoAnt' name='IdEnderecoAnt' value=0>&nbsp;<input type=text style="HEIGHT: 22; width:476" id='NomeLogradouroAnt' name='NomeLogradouroAnt' title="Opcional - Nao informar quando for igual ao atual" onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)">
     <input type=hidden id=IdTipoEnderecoAnt name=IdTipoEnderecoAnt value="1" title="Opcional"></a>
    </td>
  </tr>
  <tr>
    <td nowrap width="100%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
 </table>

<table bgcolor=#B7B7FF  border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="37%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Cep</font></b></td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Tempo de residência</font></b></td>
  </tr>
  <tr>
    <td nowrap width="23%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top"><b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo28"><b><font size="1" face="Arial"><input type=text id=NomeBairroAnt name=NomeBairroAnt size=33 title="Opcional" onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)"></font></b></td>
    <td nowrap width="37%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14" align="left" valign="top">    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo29"><b><font size="1" face="Arial"><input type=text id=NomeMunicipioAnt name=NomeMunicipioAnt size=34 title="Opcional" onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)"></font></b></td>
    <td nowrap width="7%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14"  align="left" valign="top">    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo30"><%out.println(bnCor.montaComboBox("SiglaUFAnt","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></td>
    <td nowrap width="13%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14"   align="left" valign="top">    <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo31"><input type=text style="HEIGHT: 21; width:114" id='CepAnt' name='CepAnt' size="20" title="Opcional"></td>
    <td nowrap width="20%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" bordercolor="#000000" height="14"  align="left" valign="top"> <b>
    <font size="1" face="Arial">&nbsp;</font></b><a name="topo32"><input type=text style="HEIGHT: 21; width:55" id='TmpResidPessoaAnt' name='TmpResidPessoaAnt' size="20" title="Opcional"></a><b><font size="1" face="Arial">meses</font></b><a name="topo34">
    <input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:endereco();ActionType(1,'IdPessoa','Pf');" id='BtnSalvar' name='BtnSalvar' value='Salvar'></td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor= #DE9E9E style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">DADOS COMERCIAIS</font></b></td>
  </tr>
 </table>
 <div id=Dcom name=Dcom>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td width="77%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">Empresa onde trabalha</font></b></td>
    <td width="22%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" bordercolor="#000000" height="14"   align="left" valign="top">
    <b><font size="1" face="Arial">Data e admissão&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Tempo em serviço</font></b></td>
  </tr>
  <tr>
    <td width="77%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    bordercolor="#000000" height="14"     align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;<input type=hidden id="IdRelacionamento" name="IdRelacionamento" value=0><input type=hidden id=IdPessoaRelacionada name=IdPessoaRelacionada value=0>    
    <input type=text id=nomeEmpregador name=nomeEmpregador size=46 title='Opcional - Informe o Nome do empregador'>Nome fantasia:
    <input type=hidden id="IdJuridica" name="IdJuridica" value=0><input type=text id=razaoSocial name=razaoSocial size=36 title='Opcional - Informe a razão social do empregador'>CNPJ:
    <input type=text style="HEIGHT: 21; width:148" id='IdentificacaoFiscalEmp' name='IdentificacaoFiscalEmp'></font></b></td>
    <td width="22%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   bordercolor="#000000" height="14"    align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp;</font></b><a name="topo"><input type=text id=DataAdmissao name=DataAdmissao size=15 title='Opcional - Informa a data em que foi admitido na empresa'><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataAdmissao', 'dd/mm/y');Valida_data(DataAdmissao,DataAdmissao,'Atual','','','')" WIDTH='16' HEIGHT='16'>
    <input type=text id=tempoServico name=tempoServico size="5"><b><font size="1" face="Arial">&nbsp;anos</font></b></td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td width="35%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  bordercolor="#000000" height="14"    align="left" valign="top">
    <b><font size="1" face="Arial">Cargo/Função&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Salário</font></b></td>
    <td width="65%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   bordercolor="#000000" height="14"    align="left" valign="top">
    <b><font size="1" face="Arial">&nbsp; Tipo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Loc<span lang="en-us">c</span>al de trabalho(Endereço:)</font></b></td>
  </tr>
  <tr>
    <td width="35%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   bordercolor="#000000" height="14"    align="left" valign="top"><b><font face=Arial size=1>&nbsp;
    <input type=hidden id=IdFuncao name=IdFuncao value=0>
    <input type=text id=funcao name=funcao size=33 title='Opcional - Informe o cargo ou função que exerce na empresa'>
    <a name="topo">
  <b><font face=Arial size=1>
    <a name="topo">
  <b><font face=Arial size=1><input type=hidden id=idRenda name=idRenda value=0>
    <input type=text id="salario" name="salario" size=14 onkeypress="return(autoCurrencyFormat(this,event))" onkeyup="return reformatField(this, event)" title='Opcional - Informe o salário atual'></FONT></B></FONT></B></FONT></B></td>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    vAlign=top borderColor=#000000 align=left width="65%" height=14><b><font face=Arial size=1>&nbsp;
     </FONT></B><a name="topo51">
    <input type=text id='tipoLogradouroEmp' name='tipoLogradouroEmp' onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)"></a><b><font face=Arial size=1><input type=hidden id=IdEndEmp name=IdEndEmp value=0><input type=text id=logradouroTrab name=logradouroTrab size=39 title='Opcional - Informe o logradouro, número e complemento' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)">Nº</FONT></B><a name="topo0"><input type=text id=numTrb name=numTrb size=15 title='Opcional - Informe o número correspondente'></a><b><font face=Arial size=1>Compl.:</font></b><a name="topo1"><input type=text id=ComplementoTrb name=ComplementoTrb size=15 title='Opcional - Informe o andar e sala quando aplicável'></TD>
  </tr>
 </table>
<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>
  
  <tr>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  vAlign=top borderColor=#000000 align=left width="23%" height=14 ><b><font face=Arial size=1>Bairro</FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     vAlign=top borderColor=#000000 align=left width="27%" height=14    ><b><font face=Arial size=1>Cidade</FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="8%" height=14   ><b><font face=Arial size=1>UF</FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="16%" height=14    ><b><font face=Arial size=1>Cep</FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  vAlign=top borderColor=#000000 align=left width="9%" height=14   ><b><font face=Arial size=1>DDD</FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  vAlign=top borderColor=#000000 align=left width="17%" height=14   ><b><font face=Arial size=1>Telefone</FONT></B></TD></TR>
  <tr>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="23%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=bairroTrb name=bairroTrb size=31 title='Opcional - Informe o nome do bairro' onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)"></FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="27%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=cidadeTrb name=cidadeTrb size=33 title='Opcional - Informe o nome da cidade' onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)"></FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="8%" height=14   ><b><font face=Arial size=1>&nbsp;<%out.println(bnCor.montaComboBox("UfTrb","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></FONT></B></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="16%" height=14  ><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo2"><input type=text id=CepTrb name=CepTrb size=11 title='Opcional - Informe o código postal - CEP'></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="9%" height=14    ><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo3"><input type=hidden id=IdTelEndEmp name=IdTelEndEmp value=0><input type=text id=DDDTrb name=DDDTrb size=7 title='Opcional - Informe o código postal - CEP'></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="17%" height=14    ><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo4"><input type=text id=TelTrb name=TelTrb size=18 title='Opcional - Informe o telefone para contato na empresa'></TD></TR></TABLE>
<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
  <tr>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="7%" height=14     ><b><font face="Arial" size="1">Ramal</font></b></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    vAlign=top borderColor=#000000 align=left width="14%" height=14><b><font face="Arial" size="1">Contato na empresa</font></b></TD>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="79%" height=14><input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:vinculos();ActionType(1,'IdPessoa','Pf');" id='BtnSalvar' name='BtnSalvar' value='Salvar'></TD>
  </TR>
  <tr>
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="7%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=ramalTrb name=ramalTrb size=9 title='Opcional - Informe o número do ramal quando existir'></FONT></B></TD>
    <!--td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="14%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo5"><input type=text id=FaxTrb name=FaxTrb size=22 title='Opcional - Informe o número do FAX da empresa'></TD-->
    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="79%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B>
    <a name="topo">
     <input type=text id=nomeContatoTrb name=nomeContatoTrb size=67 title='Opcional - Informe o Nome da pessoa para contato na empresa'>
     </TD>
  </TR>
 </TABLE>
 <table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
  <tr>
    <td style="PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="100%" bgColor=#DE9E9E height=14><b><font face=Arial  size=1>DADOS DO <span lang=en-us>CÔNJUGE</SPAN></FONT></B></TD></TR></TABLE>
		<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>
  			<tr>
  			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"     vAlign=top borderColor=#000000 align=left width="73%" height=14>
  			    <b><font face=Arial size=1>Nome (Completo)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
				Nome da mãe</FONT></B>
  			  </TD>
    		  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: 1px solid; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="26%" height=14>
    		    <a name="topo48"><b><font face="Arial" size="1">CPF</font></b></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><font face="Arial" size="1">Situação 
				na Receita</font></b></TD>
    		</TR>
  			<tr>
  			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"     vAlign=top borderColor=#000000 align=left width="73%" height=14><b><font face=Arial size=1>
  			    <input type=hidden id=IdConjuge name=IdConjuge value=0><input type=hidden id=idNatRelNegCj name=idNatRelNegCj value=0><input type=hidden id=IdSituacaoCadastroCj name=IdSituacaoCadastroCj value=0><input type=hidden id=ClienteDesdeCj name=ClienteDesdeCj>
  			    <input type=hidden id=IdSituacaoPessoaCj name=IdSituacaoPessoaCj value=0><input type=hidden id=DataCadastroCj name=DataCadastroCj><input type=hidden id=IdAgenciaCj name=IdAgenciaCj><input type=hidden id=IdPostoCj name=IdPostoCj><input type=hidden id=idOrigemCj name=idOrigemCj>
  			    <input type=hidden id=StatusCj name=StatusCj><input type=hidden id=DataAtualizacaoCj name=DataAtualizacaoCj><input type=hidden id=IdUsuarioCj name=IdUsuarioCj><input type=hidden id=IdEstacaoCj name=IdEstacaoCj><input type=hidden id=DataAtualizacaoCadastroCj name=DataAtualizacaoCadastroCj>
  			    <input type=hidden id=NomeUsuarioCj name=NomeUsuarioCj>
  			    <input type=text id=nomeConjuge name=nomeConjuge title="Opcional - Informe o nome do cônjuge" size="54" onfocus="javascript:Desativa(3);">&nbsp;</FONT></B><a name="topo"><a name="topo9"><input type=text style="HEIGHT: 20; width:356" id='NomeMaeCj' name='NomeMaeCj' title="Opcional - Informe o nome da mãe do cônjuge"></a></TD>
			    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" vAlign=top borderColor=#000000 align=left width="26%" height=14 ><b><font face=Arial size=1>
			    <input type=text id=cpfConjuge name=cpfConjuge title="Opcional - Informe a identificação fiscal do Cônjuge">&nbsp;</FONT></B><a name="topo">
			    <%out.println(bnCbx.montaComboBox("IdSitRFCj","Int","select * from situacaoreceita order by denominacao"));%></TD>
			   </TR>
			  </TABLE>
			  <table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
				  <tr>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="18%" height=14><b><font face=Arial size=1>Data nascimento</FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="54%" height=14><b><font face=Arial size=1>Profissão&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </FONT></B>
				<a name="topo47"><b><font face="Arial" size="1">Sexo</font></b></a></TD>
				    <td  style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="7%" height=14><b><font face=Arial size=1>DDD</FONT></B></TD>
				    <td  style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  vAlign=top borderColor=#000000 align=left width="20%" height=14><b><font face=Arial size=1>Telefone/Tipo</FONT></B></TD>
				  </TR>
				  <tr>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" vAlign=top borderColor=#000000 align=left width="18%" height=14><b><font face=Arial size=1>
				    <input type=text id=dataNascimentoCj name=dataNascimentoCj title="Opcional - Informe a data de nascimento do Cônjuge" size="13"></FONT></B><a name="topo38"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('dataNascimentoCj', 'dd/mm/y');Valida_data(dataNascimentoCj,dataNascimentoCj,'Atual','','','')" WIDTH='16' HEIGHT='16'></a><b><font face=Arial size=1>&nbsp;</FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" vAlign=top borderColor=#000000 align=left width="54%" height=14 ><b><font face=Arial size=1>&nbsp;<input type=text id=profissaoCj name=profissaoCj title="Opcional - Informe a profissão do cônjuge" size="45">&nbsp;</FONT></B><a name="topo0"><select id=IdSexoCj name=IdSexoCj size="1" title="Opcional - Informe o sexo do cônjuge"><option value="" selected>Selecione</option><option value="1">Feminio</option><option value='2'>Masculino</option></select></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="7%" height=14><b><font face=Arial size=1>&nbsp;<input type=hidden id=IdTelCj name=IdTelCj value=0><input type=text id=dddTelCj name=dddTelCj title="Opcional - Informe o ddd do telefone do cônjuge" size="7"></FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="20%" height=14 ><b><font face=Arial size=1>&nbsp;<input type=text id=TelCj name=TelCj title="Opcional - Informe o número do telefone do cônjuge" size="14"><select id=tipoTelCj name=tipoTelCj title="Opcional - Informe o tipo de telefone"><option value="0" selected>Celular</option><option value="1">Fixo</option></select></FONT></B></TD>
				</TR>
			</TABLE>
			<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>
  				<tr>
  				  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    vAlign=top borderColor=#000000 align=left width="27%" height=14><b><font face="Arial" size="1">Natural de</font></b></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    vAlign=top borderColor=#000000 align=left width="23%" height=14><span lang=en-us><b><font face=Arial size=1>NºDocumento</FONT></B></SPAN></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    vAlign=top borderColor=#000000 align=left width="21%" height=14><span lang=en-us><b><font face=Arial size=1>Órgão expedidor</FONT></B></SPAN></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    vAlign=top borderColor=#000000 align=left width="14%" height=14><span lang=en-us><b><font face=Arial size=1>UF</FONT></B></SPAN></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="17%" height=14><span lang=en-us><b><font face=Arial size=1>Data da expedição</FONT></B></SPAN><b><font face=Arial size=1>&nbsp;</FONT></B></TD>
			    </TR>
  				<tr>
  				  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="27%" height=14><b><font face=Arial size=1><input type=text id=CjNaturalDe name=CjNaturalDe title="Opcional - Informe o município onde o cônjuge nasceu" size="31" onClick="checkList(this,cidades )" onKeyUp="checkList(this,cidades )"></FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="23%" height=14><b><font face=Arial size=1><a name="topo"><b><font face=Arial size=1><input type=text id=documentoCj name=documentoCj title="Opcional - Informe o número do documento de RG do Cônjuge" size="31"></FONT></B></FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="21%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=orgaoExCj name=orgaoExCj title="Opcional - Informe o órgão expedidor do documento" size="15"></FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="14%" height=14><b><font face=Arial size=1>&nbsp;<%out.println(bnCor.montaComboBox("UfOrgaoExCj","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="17%" height=14><b><font face=Arial size=1>
					<input type=text id=dtExpedicaoCj name=dtExpedicaoCj title="Opcional - Informe a data de expedição do documento" size="13"></FONT></B><a name="topo39"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('dtExpedicaoCj', 'dd/mm/y');Valida_data(dtExpedicaoCj,dtExpedicaoCj,'Atual','dataNascimentoCj','<','Data de expedição anterior ao nascimento')" WIDTH='16' HEIGHT='16'></a></TD>
    			</TR>
    		</TABLE>
			<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
  				<tr>
  				  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="78%" height=14><b><font face=Arial size=1>Empresa onde trabalha / Nome fantasia 
					/ Identificação fiscal</FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="22%" height=14><b><font face=Arial size=1>Data de admissão&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
					Tempo em serviço</FONT></B></TD>
    			</TR>
  				<tr>
    			 <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    vAlign=top borderColor=#000000 align=left width="78%" height=14><b><font face=Arial size=1>&nbsp;<b><a name="topo"><font size="1" face="Arial"><input type=hidden id=IdRelacCjEmp name=IdRelacCjEmp value=0><input type=hidden id=IdJuridicaCjEmp name=IdJuridicaCjEmp value=0><input type=hidden id=IdEmpCj name=IdEmpCj value=0><input type=text id=nomeEmpregadorCj name=nomeEmpregadorCj size=47 title='Opcional - Informe o Nome do empregador do cônjuge'></font><font size="1" face="Arial"><a name="topo"><b><font size="1" face="Arial"> / <input type=text id=razaoSocialCj name=razaoSocialCj size=34 title='Opcional - Informe a razão social do empregador'></font></b></a>&nbsp; / </font></b></FONT></B><b><font face=Arial size=1><a name="topo42"><input type=text id=CNPJEmpCj name=CNPJEmpCj title="Opcional - Informe a identificação fiscal do empregador"></FONT></B></TD>
    			 <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"    vAlign=top borderColor=#000000 align=left width="22%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo40"><b><font face=Arial size=1><input type=text id=dataAdmCj name=dataAdmCj title="Opcional - Informe a data na qual o cônjuge foi adimitido no emprego" size="11"></FONT></B><a name="topo41"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('dataAdmCj', 'dd/mm/y');Valida_data(dataAdmCj,dataAdmCj,'Atual','dataNascimentoCj','<','Data de admissão anterior ao nascimento')" WIDTH='16' HEIGHT='16'></a>
    			 <input type=text id=tempoServicoCj name=tempoServicoCj size="4"><b><font size="1" face="Arial">&nbsp;anos</font></b></TD>
    			</TR>
    		</TABLE>
			<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
			  <tr>
			    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="38%" height=14><b><font face=Arial size=1>Cargo/Função&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
				Salário</FONT></B></TD>
			    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="61%" height=14><b><font face=Arial size=1>&nbsp; 
				Tipo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lo<span lang=en-us>c</SPAN>al de trabalho(Endereço:. nº,Complemento)</FONT></B></TD>
			  </TR>
  			  <tr>
    			<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="38%" height=14><b><font face=Arial size=1>&nbsp;<a name="topo"><b><font face=Arial size=1><input type=hidden id=IdCargoCj name=IdCargoCj value=0><input type=text id="funcaoCj" name="funcaoCj" size=36 title='Opcional - Informe o cargo ou função que exerce na empresa'>
    			<a name="topo">
  <b><font face=Arial size=1>
    <a name="topo">
  <b><font face=Arial size=1><input type=hidden id=IdRendaCj name=IdRendaCj value=0>
    <input type=text id="salarioCj" name="salarioCj" size=14 title='Opcional - Informe o salário atual'></FONT></B></FONT></B></FONT></B></FONT></B></TD>
    			<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="61%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo43"><b><font face=Arial size=1><input type=hidden id=IdEndEmpCj name=IdEndEmpCj value=0>
    			<a name="topo51">
    <input type=text id='tipoLogradouroEmpCj' name='tipoLogradouroEmpCj' onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)"></a>
    			<input type=text id=logradouroTrabCj name=logradouroTrabCj size=64 title='Opcional - Informe o logradouro, número e complemento' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)"></FONT></B></TD>
    		  </TR>
    		</TABLE>
			<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
  				<tr>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"  vAlign=top borderColor=#000000 align=left width="23%" height=14><b><font face=Arial size=1>Bairro</FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="27%" height=14><b><font face=Arial size=1>Cidade</FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="8%" height=14><b><font face=Arial size=1>UF</FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="16%" height=14><b><font face=Arial size=1>Cep</FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="9%" height=14><b><font face=Arial size=1>DDD</FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px" vAlign=top borderColor=#000000 align=left width="17%" height=14><b><font face=Arial size=1>Telefone</FONT></B></TD>
    			</TR>
  				<tr>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid" vAlign=top borderColor=#000000 align=left width="23%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=bairroTrbCj name=bairroTrbCj size=31 title='Opcional - Informe o nome do bairro' onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)"></FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="27%" height=14><b><font face=Arial size=1>&nbsp;<input type=text id=cidadeTrbCj name=cidadeTrbCj size=33 title='Opcional - Informe o nome da cidade' onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)"></FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="8%" height=14><b><font face=Arial size=1><%out.println(bnCor.montaComboBox("UfTrbCj","Char","select UF,denominacao from unidadefederativa order by denominacao"));%></FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="16%" height=14><b><font face=Arial size=1><a name="topo">  <a name="topo2"><input type=text id=CepTrbCj name=CepTrbCj size=11 title='Opcional - Informe o código postal - CEP'></FONT></B></TD>
				    <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="9%" height=14><b><font face=Arial size=1><a name="topo">  <a name="topo3"><input type=hidden id=IdTelEndEmpCj name=IdTelEndEmpCj value=0><input type=text id=DDDTrbCj name=DDDTrbCj size=7 title='Opcional - Informe o código DDD'></FONT></B></TD>
    				<td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="17%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo44"><input type=text id=TelTrbCj name=TelTrbCj size=18 title='Opcional - Informe o telefone para contato na empresa'></TD>
    			</TR>
    		</TABLE>
			<table id=AutoNumber1 style="BORDER-COLLAPSE: collapse" borderColor=#111111 cellSpacing=0 cellPadding=0 width="100%" border=0>  
  				<tr>
  				  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="7%" height=14><b><font face=Arial size=1>DDD</FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="14%" height=14><b><font face=Arial size=1>Fax</FONT></B></TD>
    			  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"   vAlign=top borderColor=#000000 align=left width="79%" height=14><b><font face=Arial size=1>E-mail do cônjuge</FONT></B></TD>
    			</TR>
  				<tr>
  				  <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"   vAlign=top borderColor=#000000 align=left width="7%" height=14><b><font face=Arial size=1>&nbsp;<a name="topo">  <a name="topo19"><input type=text style="HEIGHT: 21; width:55" id='DDDFaxCj' name='DDDFaxCj' size="20" title="Opcional - Informe o DDD do fax quando aplicável"></FONT></B></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="14%" height=14><b><font face=Arial size=1>&nbsp;</FONT></B><a name="topo45"><input type=text id=FaxTrbCj name=FaxTrbCj size=22 title='Opcional - Informe o número do FAX da empresa'></TD>
			      <td style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px; BORDER-BOTTOM: 1px solid"  vAlign=top borderColor=#000000 align=left width="79%" height=14><b><font face=Arial size=1>&nbsp;<a name="topo">    </FONT></B><a name="topo46"><input type=text style="HEIGHT: 22; width:394" id='EmailPessoaCj' name='EmailPessoaCj' title="Opcional - Informe o e-mail pessoal do cônjuge" value="@"></a><b><a name="topo"><font face=Arial size=1>
			        <input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:Conjuge();ActionType(1,'IdPessoa','Pf');" id='BtnSalvarCj' name='BtnSalvarCj' value='Salvar'></FONT></B>
			        <input type='hidden' id='HidTypeAction' name='HidTypeAction'></TD>
			    </TR>
			</TABLE>

<!--Impressão-->
<table cellSpacing=0 cellPadding=0 width="100%" border=0>
  
  <tr>
    <td align=middle width="100%">
      <div id=Impressao style="WIDTH: 111px; HEIGHT: 38px"><IMG  style='cursor:hand' onclick=imprime() height=18 src="../img/Imp_Basa.gif" width=71 border=0 > 
      </DIV>
    </TD>
  </TR>
</TABLE>
<%@ include file="../conexao/VarGlobal.jsp" %>
<jsp:useBean id="bnPF"  class="cadastropessoas.pessoaFisica" />
<jsp:useBean id="bnEd"  class="cadastropessoas.enderecos" /> 
<jsp:useBean id="bnTel"  class="cadastropessoas.pessoaFisica" />
<jsp:useBean id="bnDcom"  class="cadastropessoas.juridica" />
<jsp:useBean id="bnPfCj"  class="cadastropessoas.pessoa" />
<%// Esta e a parte responsavel por preencher os campos da tela com os dados oriundos da base de dados
bnPF.actURL(urlString, conDriver, usuario, senha);
String retorno = bnPF.obtPessoaFisica( request.getParameter("IdPessoa"));
out.println(retorno);
bnEd.actURL(urlString, conDriver, usuario, senha);
String retornoE = bnEd.obtEnderecos( request.getParameter("IdPessoa"),"F");
out.println(retornoE);
bnTel.actURL(urlString, conDriver, usuario, senha);
String retornoT = bnTel.obtTelefones( request.getParameter("IdPessoa"));
out.println(retornoT);
bnDcom.actURL(urlString, conDriver, usuario, senha);
String retornoDcom = bnDcom.obtEmpregador( request.getParameter("IdPessoa"),"3","1");
out.println(retornoDcom);/*
bnPfCj.actURL(urlString, conDriver, usuario, senha);
String retornobnPfCj = bnPfCj.obtPessoaFisicaConjuge( request.getParameter("IdPessoa"));
out.println(retornobnPfCj);
*/%>   
</form>
</body>

</html>