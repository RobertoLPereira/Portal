function FillText(idOrdemServico,dataInicioValidade,dataFimValidade,corpo,pessoas,perfil)
{
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.pessoas.value = pessoas.replace( /\s+$/g, "" );
	document.Cad.perfis.value = perfil.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.readOnly = true;
	document.Cad.dataFimValidade.readOnly = true;
	document.Cad.corpo.readOnly = true;
	document.Cad.pessoas.readOnly = true;
	document.Cad.perfis.readOnly = true;
	document.Cad.BtnNovo.disabled = false;
	document.Cad.BtnSalvar.disabled = true;
	document.Cad.BtnExcluir.disabled = true;
	document.Cad.BtnCancelar.disabled = true;
}
function FillEdit(idOrdemServico,dataInicioValidade,dataFimValidade,corpo,pessoas,perfil)
{alert(perfil);
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.pessoas.value = pessoas.replace( /\s+$/g, "" );
	document.Cad.perfis.value = perfil.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.readOnly = false;
	document.Cad.dataFimValidade.readOnly = false;
	document.Cad.corpo.readOnly = false;
	document.Cad.pessoas.readOnly = false;
	document.Cad.perfis.readOnly = false;
	document.Cad.corpo.focus();
	document.Cad.BtnNovo.disabled = true;
	document.Cad.BtnSalvar.disabled = false;
	document.Cad.BtnExcluir.disabled = true;
	document.Cad.BtnCancelar.disabled = false;
}
function FillDell(idOrdemServico,dataInicioValidade,dataFimValidade,corpo,pessoas,perfil)
{
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.pessoas.value = pessoas.replace( /\s+$/g, "" );
	document.Cad.perfis.value = perfil.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.readOnly = true;
	document.Cad.dataFimValidade.readOnly = true;
	document.Cad.corpo.readOnly = true;
	document.Cad.pessoas.readOnly = true;
	document.Cad.perfis.readOnly = true;
	document.Cad.BtnNovo.disabled = true;
	document.Cad.BtnSalvar.disabled = true;
	document.Cad.BtnExcluir.disabled = false;
	document.Cad.BtnCancelar.disabled = false;
}
function ClearPesquisa()
{
	window.document.Cad.vPesquisa.value="";
	window.document.Cad.action="cad_OrdemServico.jsp?vPesquisa= ";
	window.document.Cad.submit();
}
function Pesquisar()
{
	window.document.Cad.action="cad_OrdemServico.jsp?vPesquisa="+window.document.Cad.vPesquisa.value;
	window.document.Cad.submit();
}
function IniciaId()
{
	document.Cad.idOrdemServico.value ="0";
}