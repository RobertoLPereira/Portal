<%@page language="java" errorPage="trataerro.jsp" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" session="true" %>
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
	.td_borda{border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-bottom-style: solid; border-bottom-width: 1px; padding: 1px: bordercolor=#000000: height=12: align=left: valign=top;}
	.td_borda1{border-left-style: solid; border-left-width: 1px; border-right-style: solid; border-right-width: 1px; border-top-style: solid; border-top-width: 1px; padding: 1px: bordercolor=#000000: height=12: align=left: valign=top;}
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
function PessoaJuridica(){
 document.Pj.action="AltPessoaJuridica.jsp";
}
function endereco(){
 document.Pj.action="manterEnderecoJuridica.jsp";
}
function vinculos(){
 document.Pj.action="manterVinculosJuridica.jsp";
}

//-->
</script>
<body id="bd" leftmargin="7" class="bg_Ficha" bgcolor= #E9E9E9>
<form id="Pj" name="Pj" action="AltPessoaJuridica.jsp"  method="post" >
	    <input type=hidden id=IdPessoaCtr1 name=IdPessoaCtr1  value=0>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
	<td nowrap width="25%" style="BORDER-RIGHT: 1px solid; PADDING-RIGHT: 1px; PADDING-LEFT: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: 1px solid; PADDING-TOP: 1px"    bordercolor="#000000" height="14" align="left" valign="top">
		<a name="topo">
		<IMG height=52 src="../img/SLIDE27A.jpg" width=50 border=0 ></a><b><font size="2"><span lang="pt-br">Alterar Informa��es cadastrais - Pessoa 
		jur�dica</span></font></b>
		<input type=hidden id=IdSituacaoCadastro name=IdSituacaoCadastro value="1">
                <input type=hidden id=IdSituacaoPessoa name=IdSituacaoPessoa value="1">
                <input type=hidden id=DataCadastro name=DataCadastro value="<%= Dt.getDate()%>">   	
                <input type=hidden id=idOrigem name=idOrigem value="1">
                <input type=hidden id=Status name=Status value="1">
                <input type=hidden id=IdUsuario name=IdUsuario value="Roberto">
                <input type=hidden id=DataAtualizacao name=DataAtualizacao value="<%= Dt.getDate()%>">    	
                <input type=hidden id=IdEstacao name=IdEstacao value="NoteBook">
                <input type=hidden id=DataAtualizacaoCadastro name=DataAtualizacaoCadastro value="<%= Dt.getDate()%>">
                <input type=hidden id=NomeUsuario name=NomeUsuario value="Roberto">
                <input type=hidden id=IdJuridica name=IdJuridica value="0">
                <input type='hidden' id='HidTypeAction' name='HidTypeAction'>
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
    <td nowrap width="100%" bgcolor="#DE9E9E" class=td_borda1>
    <b><font size="1" face="Arial">01 IDENTIFICA��O</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="16%" class=td_borda1>
    <b>
    <font size="1" face="Arial">C�digo �nico</font></b></td>
    <td nowrap width="18%" class=td_borda1>
    <b><font size="1" face="Arial">CNPJ da Empresa</font></b></td>
    <td nowrap width="54%" class=td_borda1>
    <b>
    <font size="1" face="Arial">Firma ou Raz�o Social</font></b></td>
    <td class=td_borda1><font size="1" face="Arial">Cliente desde</font></b></td>
  </tr>
  <tr>
    <td nowrap width="16%" class=td_borda>
    <b>
    <font size="1" face="Arial">&nbsp;<input style="HEIGHT: 19 ; width:141" id=IdPessoa name=IdPessoa maxlength=19 size=19 value="000000<%=id%>" readonly></font></b></td>
    <td nowrap width="18%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<b>
    <font size="1" face="Arial"><input style="HEIGHT: 19 ; width:141" id=IdentificacaoFiscal name=IdentificacaoFiscal maxlength=19 size=19 value="0"></font></b></font></b>
    </td>
    <td nowrap width="54%" class=td_borda>
    <b>
    <font size="1" face="Arial">&nbsp;<input style="HEIGHT: 24 ; width:439" id=nome name=nome maxlength=115 size=40 value=""></font></b></td>
    <td class=td_borda>
	<input type=text id=ClienteDesde name=ClienteDesde value="" size="13" onblur="javascript:Valida_data(ClienteDesde,ClienteDesde,'Atual','','','');"><a name="topo40">
<img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('ClienteDesde', 'dd/mm/y');Valida_data(ClienteDesde,ClienteDesde,'Atual','','','')" WIDTH='16' HEIGHT='16'></a> </td>
  </tr>
</table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="53%" class=td_borda1>
    <b><font size="1" face="Arial">Nome Comercial/Fantasia</font></b></td>
    <td nowrap width="47%" class=td_borda1>
    <b><font size="1" face="Arial">Nome do grupo econ�mico corrente</font></b></td>    
  </tr>
  <tr>
    <td nowrap width="53%" class=td_borda>
					<input style="HEIGHT: 23 ; width:413" id=RazaoSocial name=RazaoSocial maxlength=100 size=50 value="">
    </td>
    <td nowrap width="47%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a><input style="HEIGHT: 23 ; width:413" id=grupoEconomico name=grupoEconomico maxlength=100 size=30 value="">
	 </td>
    
  </tr>
</table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Data de constitui��o</font></b></td>
    <td nowrap width="19%" class=td_borda1>
    <b><font size="1" face="Arial">N do �ltimo registro</font></b></td>
    <td nowrap width="26%" class=td_borda1>
    <b><font size="1" face="Arial">&nbsp; �rg�o</td>
	<td class=td_borda1><b><font size="1" face="Arial">Data do registro na junta comercial</font></b></td>
    <td nowrap width="14%" class=td_borda1>
    <b><font face="Arial" size="1">&nbsp;Inscri��o estadual</font></b></td>
    <td class=td_borda1 width="172"><b><font face="Arial" size="1">&nbsp;Inscri��o municipal</font></b></td>  
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>				
		<input style="HEIGHT: 23 ; width:94" id=DataConstituicao name=DataConstituicao maxlength=10 size=10 value="" title='Digite a data em que foi contitu�da no formato DD/MM/AAAA' > <a name="topo39"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataConstituicao', 'dd/mm/y');Valida_data(DataConstituicao,DataConstituicao,'Atual','','','')" WIDTH='16' HEIGHT='16'></a></td>
    <td nowrap width="19%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a><input type=text id=numeroRegistroJunta name=numeroRegistroJunta size="26" title="Opcional - Informe o n�mero do registro na junta"></td >
    <td nowrap width="26%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    	<input type=text id=orgaoExpedidor name=orgaoExpedidor title="Opcional - Informe em qual �rg�o a empresa foi registrada" size="31">&nbsp;</td>
    	<td class=td_borda>
    	<input style="HEIGHT: 25 ; width:103" id=DataRegistroJunta name=DataRegistroJunta maxlength=10 size=10 value="" title='Digite a data do �ltimo registro na junta comercial no formato DD/MM/AAAA' onblur="javascript:Valida_data(DataRegistroJunta,DataRegistroJunta,'Atual','<','DataConstituicao','Data do �ltimo registro na junta comercial anterior a data de constitui��o');" ><a name="topo40"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('DataRegistroJunta', 'dd/mm/y');Valida_data(DataRegistroJunta,DataRegistroJunta,'Atual','<','DataConstituicao','Data do �ltimo registro na junta comercial anterior a data de constitui��o')" WIDTH='16' HEIGHT='16'></a></td size="60">
    <td nowrap width="14%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text id=InscricaoEstadual name=InscricaoEstadual title="Opcional - Informe o n�mero da inscri��o estadual da empresa">
    </td>
    <td class=td_borda><input type=text id=inscricaoMunicipal name=inscricaoMunicipal title="Opcional - Informe o n�mero da inscri��o municipal da empresa"></td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="36%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">01.1 CONFIGURA��ES</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap class=td_borda1 width="232">
    <b><font face="Arial" size="1">Forma jur�dica</font></b></td>
    <td nowrap class=td_borda1>
    <b><font face="Arial" size="1">Porte</font></b></td>
     <td nowrap class=td_borda1 width="133">
     <b><font face="Arial" size="1">Optante pelo SIMPLES</font></b>
     </td>
     <td class=td_borda1 width="111"><b><font face="Arial" size="1">&nbsp;% ICMS</font></b></td>
     <td class=td_borda1 width="188"><b><font face="Arial" size="1">&nbsp;Situa��o junta � Receita Federal</font></b></td>  
     <td class=td_borda1 width="211"><b><font face="Arial" size="1">&nbsp;Ramo de atividade principal</font></b></td>
     <td class=td_borda1 width="57"><b><font face="Arial" size="1">&nbsp;Qtd.Filiais</font></b></td>      
    
  </tr>
  <tr>
    <td nowrap class=td_borda width="232">
    	<b><font size="1" face="Arial">&nbsp;</font></b><%out.println(bnCbx.montaComboBox("IdFormaJuridica","Int","select id,denominacao from formajuridica order by denominacao"));%>
    </td>
    <td nowrap class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a><%out.println(bnCbx.montaComboBox("IdPorte","Int","select id,denominacao from porte order by denominacao"));%>
	 </td>
	 <td nowrap class=td_borda width="133">
	   <select id=OptanteSimples name=OptanteSimples title="Opcional">
	    <option value=" " selected>Selecione</option>
	   	<option value="N">N�o</option>
	   	<option value="S">Sim</option>
	   </select>
	 </td>
	 <td class=td_borda width="111">
		<input type=text id=IncentivoICMS name=IncentivoICMS title="Opcional - Informe o percentual de incentivo Fiscal que a empresa possui" size="12"></td>
	 <td class=td_borda width="188"><%out.println(bnCbx.montaComboBox("IdSituacaoReceitaFederal","Int","select * from situacaoreceita order by denominacao"));%></td>
	 <td class=td_borda><input type=text id=IdRamoAtividade name=IdRamoAtividade title="Opcional - Informe o ramo de atividade principal da empresa"></td>
 	 <td class=td_borda>
		<input type=text id=QuantidadeFiliais name=QuantidadeFiliais title="Opcional - Informe a quantidade de filiais da empresa" size="7"></td>
  </tr>
  <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="13%" class=td_borda1>
    <b><font size="1" face="Arial">Capital Social R$</font></b></td>
    <td nowrap width="28%" class=td_borda1>
    <b><font size="1" face="Arial">Capital Realizado R$</font></b></td>
        <td nowrap width="59%" class=td_borda1>
    <b><font size="1" face="Arial">Capital Aberto R$</font></b></td>
    <td class=td_borda1></td>
  </tr>
  <tr>
    <td nowrap width="13%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text id=capitalSocial name=capitalSocial value="0.00" title="Opcional - Informe o valor do capital social da empresa">
    </td>
    <td nowrap width="28%" class=td_borda>
		<input type=text  id=capitalRealizado name=capitalRealizado value="0.00" title="Opcional - Informe o valor do capital realizado no exerc�cio">
		<b><font size="1" face="Arial">&nbsp;Exerc�cio:</font></b>
		<input type=text  id=exercicioCapitalRealizado name=exercicioCapitalRealizado title="Opcional - Informe o exec�cio referente ao capital realizado" size="12">
		<a name="topo41"><img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('exercicioCapitalRealizado', 'dd/mm/y');Valida_data(exercicioCapitalRealizado,exercicioCapitalRealizado,'Atual','<','DataConstituicao','Data da constitui��o')" WIDTH='16' HEIGHT='16'></a></td>
		<td class=td_borda><input type=text  id=capitalAberto name=capitalAberto value="0.00" title="Opcional - Informe o valor do capital aberto"></td>
		<td class=td_borda><input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:PessoaJuridica();ActionType(1,'IdPessoa','Pj');" id='BtnSalvar' name='BtnSalvar1' value='Salvar'></td>
  </tr>

 </table>

<!--table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Capital Aberto</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">Controle Acion�rio</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>&nbsp;
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
</table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="86%" class=td_borda1>
    <b><font size="1" face="Arial">Empresa(s) a que sucede e data(s) de sucess�o</font></b></td>
    <td class=td_borda1></td>
  </tr>
  <tr>
    <td nowrap width="86%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td class=td_borda>&nbsp;</td>
  </tr>
 </table-->

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="36%" bgcolor="#DE9E9E" style="padding: 1px" bordercolor="#000000" height="14" align="left" valign="top">
    <b><font size="1" face="Arial">02 LOCALIZA��O</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Endere�o da Sede Social(Tipo do logradouro/ 
	Logradouro)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	No.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Complemento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Per�metro</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    	<input type=hidden id=IdEndereco name=IdEndereco value=0>
    	<input type=hidden id=IdTipoEndereco name=IdTipoEndereco value="0">
    	<input type=hidden id=tempoRes name=tempoRes value="0">
    	<input type=hidden id=idTipoRes name=idTipoRes value="0">
    	<input type=hidden id=idcCorrespondencia name=idcCorrespondencia value="0">
    	<input type=text id=tipoLogradouro name=tipoLogradouro onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)">
    	<input type=text id=NomeLogradouro name=NomeLogradouro title='Opcional - Informe o logradouro, n�mero e complemento' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)" size="55">
    	<input type=text id="NumeroLogradouro" name="NumeroLogradouro" size=6>
	   <input type=text id=Complemento name=Complemento size=17 title="Opcional">
	   <input type=text id=Perimetro name=Perimetro title="Opcional - Informe o per�metro para facilitar a localiza��o quando endere�o Rural" size="38">
    </td>
  </tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  
  <tr>
    <td nowrap width="23%" class=td_borda1>
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="22%" class=td_borda1>
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="23%" class=td_borda1>
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CEP</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">Caixa postal</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">&nbsp;</font></b></td>
  </tr>
  <tr>
    <td nowrap width="23%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b><input type=text id=NomeBairro name=NomeBairro size=33 onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)">
    </td>
    <td nowrap width="22%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a> <input type=text id=NomeMunicipio name=NomeMunicipio size=34 onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)">
	 </td>
    <td nowrap width="23%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><%out.println(bnCor.montaComboBox("SiglaUF","Char","select UF,denominacao from unidadefederativa order by denominacao"));%>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 22; width:120" id='Cep' name='Cep' size="10">
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 21; width:114" id='CxPostalPessoa' name='CxPostalPessoa' size="20" title="Opcional">
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="15%" class=td_borda1>
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
    <td nowrap width="15%" class=td_borda1>
    <b><font size="1" face="Arial">Fax</font></b></td>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Endere�o na Internet (SITE)</font></b></td>
   </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b><input type=text style="HEIGHT: 21; width:74" id='DDDPessoa' name='DDDPessoa' size="20" title="Opcional">
    	<input type=text style="HEIGHT: 21; width:172" id='TELPessoa' name='TELPessoa' size="20" title="Opcional"><input type=hidden id=idTelPessoa name=idTelPessoa value=0>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	    <input type=hidden id=IdFaxPessoa name=IdFaxPessoa value="0">
	    <input type=text style="HEIGHT: 21; width:55" id='DDDPessoaFax' name='DDDPessoaFax' size="20" title="Opcional">
	    <input type=text style="HEIGHT: 21; width:144" id='FaxPessoa' name='FaxPessoa' size="20" title="Opcional">
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text id=nomeSite name=nomeSite title="Opcional - Informe o endere�o do Site da empresa na Internet" size="65">
    </td>
   </tr> 
</table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="15%" class=td_borda1>
    <b><font face="Arial" size="1">&nbsp;Nome do contato</font></b></td>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Pra�as com filiais</font></b></td>
   </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b><input type=text style="HEIGHT: 22; width:394" id='nomeContato' name='nomeContato'>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
   </tr> 
</table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="2" face="Arial" color= #0000FF>Endere�o para correspond�ncia( Tipo 
	logradouro&nbsp;/ Logradouro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	No.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Complemento&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
	Per�metro</font></b></td>
  </tr>

  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b> 
    	<input type=hidden id=IdEnderecoFil name=IdEnderecoFil value=0>
    	<input type=hidden id=IdTipoEnderecoFil name=IdTipoEnderecoFil value="2">
    	<input type=hidden id=tempoResFil name=tempoResFil value="0">
    	<input type=hidden id=idTipoResFil name=idTipoResFil value="0">
    	<input type=hidden id=idcCorrespondenciaFil name=idcCorrespondenciaFil value="1">
    	<input type=text id=tipoLogradouroFil name=tipoLogradouroFil onClick="checkList(this,tipoLog)" onKeyUp="checkList(this,tipoLog)">
    	<input type=text id=NomeLogradouroFil name=NomeLogradouroFil title='Opcional - Informe o logradouro, n�mero e complemento' onClick="checkList(this,logradouros)" onKeyUp="checkList(this,logradouros)" size="55">
    	<input type=text id="NumeroLogradouroFil" name="NumeroLogradouroFil" size=6>
	   <input type=text id=ComplementoFil name=ComplementoFil size=17 title="Opcional">
	   <input type=text id=PerimetroFil name=PerimetroFil title="Opcional - Informe o per�metro para facilitar a localiza��o quando endere�o Rural" size="38">

    </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  
  <tr>
    <td nowrap width="24%" class=td_borda1>
    <b><font size="1" face="Arial">Bairro</font></b></td>
    <td nowrap width="25%" class=td_borda1>
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="19%" class=td_borda1>
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CEP</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">Caixa postal</font></b></td>
    <td nowrap width="10%" class=td_borda1></td>
  </tr>
  <tr>
    <td nowrap width="24%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b> <input type=text id=NomeBairroFil name=NomeBairroFil size=33 onClick="checkList(this,bairros)" onKeyUp="checkList(this,bairros)">
    </td>
    <td nowrap width="25%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a> <input type=text id=NomeMunicipioFil name=NomeMunicipioFil size=34 onClick="checkList(this,cidades)" onKeyUp="checkList(this,cidades)">
	 </td>
    <td nowrap width="19%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b> <%out.println(bnCor.montaComboBox("SiglaUFFil","Char","select UF,denominacao from unidadefederativa order by denominacao"));%>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b> <input type=text style="HEIGHT: 22; width:120" id='CepFil' name='CepFil' size="10">
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b> <input type=text style="HEIGHT: 21; width:114" id='CxPostalPessoaFil' name='CxPostalPessoaFil' size="20" title="Opcional">
    </td>
    <td nowrap width="1%" class=td_borda>
		<input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:endereco();ActionType(1,'IdPessoa','Pj');" id='BtnSalvar' name='BtnSalvar' value='Salvar'>
    </td>
  </tr> 
 </table>
<!--table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>
  </tr>
 </table>

 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Ramo (principal)</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">Opera nesse ramo desde</font></b></td>
    <td nowrap width="18%" class=td_borda1>
    <b><font size="1" face="Arial">Principais produtos vendidos</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">% s/ vendas</font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Nome da franquia autorizada</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CNPJ da franquia autorizada</font></b></td>
    <td nowrap width="18%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<%//PRDPERPROD(1)%></font></b>
    </td>
  </tr> 
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">C�digo I.R. - Principal atividade</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">N de empregados</font></b></td>
    <td nowrap width="18%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<%//PRDCODPROD(2)%></font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<%//PRDPERPROD(2)%></font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1"> 
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Importa?</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">Exporta?</font></b></td>
    <td nowrap width="18%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial"></font></b></td>

  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" class=td_borda1>
    <b><font size="1" face="Arial">04 CONTABILIDADE/REGIME TRIBUT�RIO</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" class=td_borda1>
    <b><font size="1" face="Arial">A Empresa levantou balan�o?</font></b></td>
    <td nowrap width="1%" class=td_borda1>
    </td>
  </tr>
  <tr>
    <td nowrap width="100%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Tributa��o do Imposto de Renda com base no:</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">A contabilidade/escritura��o fiscal � terceirizada?</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">Nome do escrit�rio de contabilidade</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CPF/CNPJ</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
  </tr>
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Endere�o (rua, av., alameda e n</font></b></td>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Cidade</font></b></td>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">UF</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CEP</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table>
 <table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Fax</font></b></td>
    <td nowrap width="5%" class=td_borda1>
    <b><font size="1" face="Arial">E-mail</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<%//FIRTEL%></font></b>
    </td>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial"></font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;<%//FIRENDEMAIL%></font></b>
    </td>
  </tr> 
 </table>
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Nome da pessoa para esclarecimento sobre balan�o/cadastro</font></b></td>
    <td nowrap width="30%" class=td_borda1>
    <b><font size="1" face="Arial">Telefone (DDD)</font></b></td>
  </tr>
  <tr>
    <td nowrap width="1%" class=td_borda>
	    <b><font size="1" face="Arial">&nbsp;</font></b></a>
	 </td>
    <td nowrap width="1%" class=td_borda>
    	<b><font size="1" face="Arial">&nbsp;</font></b>
    </td>
  </tr> 
 </table-->
<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1">
  <tr>
    <td nowrap width="100%" bgcolor="#DE9E9E" class=td_borda1>
    <b><font size="1" face="Arial">05 CONTROLADORES (s�cios/acionistas - pessoa f�sica e/ou jur�dica)</font></b></td>
  </tr>
 </table>

<table border="0" cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE: collapse" bordercolor="#111111" width="100%" id="AutoNumber1" height="116">
  <tr>
    <td nowrap width="48%" class=td_borda1>
    <b><font size="1" face="Arial">Nome</font></b></td>
    <td nowrap width="10%" class=td_borda1>
    <b><font size="1" face="Arial">CNPJ/CPF</font></b></td>
    <!--td nowrap width="7%" class=td_borda1>
    <b><font size="1" face="Arial">Nacionalidade</font></b></td-->
    <td nowrap width="9%" class=td_borda1>
    <b><font size="1" face="Arial">Data de entrada</font></b></td>
	<td nowrap width="16%" class=td_borda1>
    <b><font size="1" face="Arial">Sociedade limitadas</font></b></td>
    <td nowrap width="9%" class=td_borda1>
    <b><font size="1" face="Arial">Sociedades an�nimas</font></b></td>
  </tr>
  <tr>
    <td nowrap width="48%" class=td_borda>
    <b><font size="1" face="Arial"></font></b></td>
    <!--td nowrap width="10%" class=td_borda>
    <b><font size="1" face="Arial"></font></b></td-->
    <td nowrap width="7%" class=td_borda>
    <b><font size="1" face="Arial"></font></b></td>
    <td nowrap width="9%" class=td_borda1>
    <b><font size="1" face="Arial">(m�s/ano)</font></b></td>
	<td nowrap width="16%" class=td_borda1>
    <b><font size="1" face="Arial">Quant./Valor das cotas R$</font></b></td>
    <td nowrap width="9%" class=td_borda1>
    <b><font size="1" face="Arial">% s/ cap. votante</font></b></td>
  </tr>
  <tr>
    <td nowrap width="48%" class=td_borda1>
	    <b><font size="1" face="Arial">01</font></b>
	    <input type=hidden id=IdRelacionamentoCtr1 name=IdRelacionamentoCtr1 value=0>
	    <input type=hidden id=IdPessoaCtr1 name=IdPessoaCtr1  value=0>
	    <%out.println(bnCbx.montaComboBox("IdNaturezaTipoCtr1","int","select nt.id as IdNaturezaTipo,naturezarelacionamento.denominacao from naturezatipo nt left join naturezarelacionamento On naturezarelacionamento.id=nt.id where nt.id in (13,14,15,16,17)"));%>
	    <input type=text id=nomePessoaCtr1 name=nomePessoaCtr1 size=43 title="Opcional - Informe o nome do principal representante legal da empresa">
	 </td>
    <td nowrap width="10%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=IdentificacaoFiscalCtr1 name=IdentificacaoFiscalCtr1 title="Opcional - Informe a Identifica��o fiscal do controlador" size="17">
    </td>
    <!--td nowrap width="7%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=Nacionalidade1 name=Nacionalidade1 title="Opcional - Informe a nacionalidade quando o controlador � pessoa f�sica"  size="12">
	 </td-->
	<td nowrap width="9%" class=td_borda>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=vinculadoEmCtr1 name=vinculadoEmCtr1 title="Opcional - Informe a data em que se oficializou o v�nculo" size="11">
        <a name="topo41">
<img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('vinculadoEmCtr1', 'dd/mm/y');Valida_data(vinculadoEmCtr1,vinculadoEmCtr1,'Atual','<','DataConstituicao','Data anterior � da constitui��o')" WIDTH='16' HEIGHT='16'></a>
	 </td>
    <td nowrap width="16%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=qtdCotCtr1 name=qtdCotCtr1 value=0 title="Opcional - Informe a quantidade de cotas" size="6"><input type=text id=valorCotCtr1 name=valorCotCtr1 value="0.00" title="Opcional - Informe o valor unit�rio da cota">
    </td> 
    <td nowrap width="9%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=percCapVotanteCtr1 name=percCapVotanteCtr1 value="0.00" title="Opcional - Informe o percentual sobre o capital votante referente ao controlador em quest�o" size="7">
    </td>  
  </tr>
  <tr>
    <td nowrap width="48%" class=td_borda1>
	    <b><font size="1" face="Arial">02</font></b>
	    <input type=hidden id=IdRelacionamentoCtr2 name=IdRelacionamentoCtr2 value=0>
	    <input type=hidden id=IdPessoaCtr2 name=IdPessoaCtr2  value=0><%out.println(bnCbx.montaComboBox("IdNaturezaTipoCtr2","int","select nt.id as IdNaturezaTipo,naturezarelacionamento.denominacao from naturezatipo nt left join naturezarelacionamento On naturezarelacionamento.id=nt.id where nt.id in (13,14,15,16,17)"));%>
		<input type=text id=nomePessoaCtr2 name=nomePessoaCtr2 size=43 title="Opcional - Informe o nome do principal representante legal da empresa">
	 </td>
    <td nowrap width="10%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
		<input type=text id=IdentificacaoFiscalCtr2 name=IdentificacaoFiscalCtr2 title="Opcional - Informe a Identifica��o fiscal do controlador" size="17">
    </td>
    <!--td nowrap width="7%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=Nacionalidade2 name=Nacionalidade2 title="Opcional - Informe a nacionalidade quando o controlador � pessoa f�sica" size="12">
	 </td-->
	<td nowrap width="9%" class=td_borda>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=vinculadoEmCtr2 name=vinculadoEmCtr2 title="Opcional - Informe a data em que se oficializou o v�nculo" size="11">
        <a name="topo42">
<img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('vinculadoEmCtr2', 'dd/mm/y');Valida_data(vinculadoEmCtr2,vinculadoEmCtr2,'Atual','<','DataConstituicao','Data anterior � da constitui��o')" WIDTH='16' HEIGHT='16'></a></td>
    <td nowrap width="16%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=qtdCotCtr2 name=qtdCotCtr2 value=0 title="Opcional - Informe a quantidade de cotas" size="6"><input type=text id=valorCotCtr2 name=valorCotCtr2 value="0.00" title="Opcional - Informe o valor unit�rio da cota">
    </td> 
    <td nowrap width="9%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=percCapVotanteCtr2 name=percCapVotanteCtr2 value="0.00" title="Opcional - Informe o percentual sobre o capital votante referente ao controlador em quest�o" size="7">
    </td>    
  </tr>
  <tr>
    <td nowrap width="48%" class=td_borda1>
	    <b><font size="1" face="Arial">03</font></b>
	    <input type=hidden id=IdRelacionamentoCtr3 name=IdRelacionamentoCtr3 value=0>
	    <input type=hidden id=IdPessoaCtr3 name=IdPessoaCtr3  value=0>
	    <%out.println(bnCbx.montaComboBox("IdNaturezaTipoCtr3","int","select nt.id as IdNaturezaTipo,naturezarelacionamento.denominacao from naturezatipo nt left join naturezarelacionamento On naturezarelacionamento.id=nt.id where nt.id in (13,14,15,16,17)"));%>
		<input type=text id=nomePessoaCtr3 name=nomePessoaCtr3 size=43 title="Opcional - Informe o nome do principal representante legal da empresa">
	 </td>
    <td nowrap width="10%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
		<input type=text id=IdentificacaoFiscalCtr3 name=IdentificacaoFiscalCtr3 title="Opcional - Informe a Identifica��o fiscal do controlador" size="17">
    </td>
    <!--td nowrap width="7%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=Nacionalidade3 name=Nacionalidade3 title="Opcional - Informe a nacionalidade quando o controlador � pessoa f�sica" size="12">
	 </td-->
	<td nowrap width="9%" class=td_borda>
        <b><font size="1" face="Arial"></font></b>
        <input type=text id=vinculadoEmCtr3 name=vinculadoEmCtr3 title="Opcional - Informe a data em que se oficializou o v�nculo" size="11">
        <a name="topo43">
<img src='../img/PDCalendario.gif' align='middle' onclick="return showCalendar('vinculadoEmCtr3', 'dd/mm/y');Valida_data(vinculadoEmCtr3,vinculadoEmCtr3,'Atual','<','DataConstituicao','Data anterior � da constitui��o')" WIDTH='16' HEIGHT='16'></a></td>
    <td nowrap width="16%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=qtdCotCtr3 name=qtdCotCtr3 value=0 title="Opcional - Informe a quantidade de cotas" size="6"><input type=text id=valorCotCtr3 name=valorCotCtr3 value="0.00" title="Opcional - Informe o valor unit�rio da cota">
    </td> 
    <td nowrap width="9%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    	<input type=text id=percCapVotanteCtr3 name=percCapVotanteCtr3 value="0.00" title="Opcional - Informe o percentual sobre o capital votante referente ao controlador em quest�o" size="7">
    </td>    
  </tr>
  <tr>
    <td nowrap width="48%" class=td_borda1 colspan=4>
	    <b><font size="1" face="Arial"><%//Controladores(4,0)%></font></b>
	 </td>
    <!--td nowrap width="10%" class=td_borda1>
        <b><font size="1" face="Arial"><%//Controladores(4,1)%></font></b>
    </td-->
    <!--td nowrap width="7%" class=td_borda1>
        <b><font size="1" face="Arial"></font></b>
	 </td-->
	 <!--td nowrap width="9%" class=td_borda>
        <b><font size="1" face="Arial"></font></b>
	 </td>
    <td nowrap width="16%" class=td_borda>
    	<b><font size="1" face="Arial"></font></b>
    </td--> 
    <td nowrap width="9%" class=td_borda>
		<input type='button' class='ButtonOut' onmouseout="this.className='ButtonOut'" onmouseover="this.className='ButtonOver'" onclick="JavaScript:vinculos();ActionType(1,'IdPessoa','Pj');" id='BtnSalvar' name='BtnSalvar' value='Salvar'>
    </td>   
  </tr>
  <!--tr>
    <td nowrap width="48%" class=td_borda1>
	    <b><font size="1" face="Arial">05&nbsp;<%//Controladores(5,0)%></font></b>
	 </td>
    <td nowrap width="10%" class=td_borda1>
        <b><font size="1" face="Arial"><%//Controladores(5,1)%></font></b>
    </td>
    <td nowrap width="7%" class=td_borda1>
        <b><font size="1" face="Arial"><%//Controladores(5,2)%></font></b>
	 </td>
    <td nowrap width="9%" class=td_borda>
        <b><font size="1" face="Arial"><%//Controladores(5,4)%></font></b>
    </td>
	<td nowrap width="16%" class=td_borda>
        <b><font size="1" face="Arial"><%//Controladores(5,5)%></font></b>
	 </td>
    <td nowrap width="9%" class=td_borda>
    	<b><font size="1" face="Arial"><%//Controladores(5,6)%></font></b>
    </td>    
  </tr-->
 </table>

    <!--Impress�o-->
<table cellSpacing="0" cellPadding="0" width="100%" border="0"> 
  <tr>
    <td align="middle" width="100%">
      <div id="Impressao" style="WIDTH: 111px; HEIGHT: 38px"><img style="cursor:hand" onclick="imprime()" src="..\img/Imp_Basa.gif" border="0" WIDTH="71" HEIGHT="18"> 
      </div>
    </td>
  </tr>
</table>   
<%@ include file="../conexao/VarGlobal.jsp" %>
<jsp:useBean id="bnPj"  class="cadastropessoas.juridica" />
<jsp:useBean id="bnEd"  class="cadastropessoas.enderecos" />
<jsp:useBean id="bnVc"  class="cadastropessoas.relacionamentos" />
<%// Esta e a parte responsavel por preencher os campos da tela com os dados oriundos da base de dados
bnPj.actURL(urlString, conDriver, usuario, senha);
String retornoPj = bnPj.obtDadosJuridica(request.getParameter("IdPessoa"));
out.println(retornoPj);
bnEd.actURL(urlString, conDriver, usuario, senha);
String retornoE = bnEd.obtEnderecos( request.getParameter("IdPessoa"),"J");
out.println(retornoE);
bnVc.actURL(urlString, conDriver, usuario, senha);
String retornovc = bnVc.obterRepresentanteLegal( request.getParameter("IdPessoa"));
out.println(retornovc);
%>
</body>
</html>
