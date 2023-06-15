function FillText(idOrdemServico,IdPessoa,CodigoUsuarioRede,dataInicioValidade,dataFimValidade,status,corpo)
{
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.IdPessoa.value = IdPessoa.replace( /\s+$/g, "" );
	document.Cad.CodigoUsuarioRede.value = CodigoUsuarioRede.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.status.value = status.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.idOrdemServico.readOnly = true;
	document.Cad.IdPessoa.readOnly = true;
	document.Cad.CodigoUsuarioRede.readOnly = true;
	document.Cad.dataInicioValidade.readOnly = true;
	document.Cad.corpo.readOnly = true;
	document.Cad.status.readOnly = true;
	document.Cad.BtnSalvar.disabled = true;
}
function FillEdit(idOrdemServico,IdPessoa,CodigoUsuarioRede,dataInicioValidade,dataFimValidade,status,corpo)
{
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.IdPessoa.value = IdPessoa.replace( /\s+$/g, "" );
	document.Cad.CodigoUsuarioRede.value = CodigoUsuarioRede.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.status.value = status.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.idOrdemServico.readOnly = true;
	document.Cad.IdPessoa.readOnly = true;
	document.Cad.dataInicioValidade.readOnly = true;
	document.Cad.dataFimValidade.readOnly = true;
	document.Cad.corpo.readOnly = true;
	document.Cad.status.readOnly = false;
	document.Cad.status.focus();
	document.Cad.BtnSalvar.disabled = false;
}
function FillDell(idOrdemServico,IdPessoa,CodigoUsuarioRede,dataInicioValidade,dataFimValidade,status,corpo)
{
	document.Cad.idOrdemServico.value = idOrdemServico.replace( /\s+$/g, "" );
	document.Cad.IdPessoa.value = IdPessoa.replace( /\s+$/g, "" );
	document.Cad.CodigoUsuarioRede.value = CodigoUsuarioRede.replace( /\s+$/g, "" );
	document.Cad.dataInicioValidade.value = dataInicioValidade.replace( /\s+$/g, "" );
	document.Cad.dataFimValidade.value = dataFimValidade.replace( /\s+$/g, "" );
	document.Cad.status.value = status.replace( /\s+$/g, "" );
	document.Cad.corpo.value = corpo.replace( /\s+$/g, "" );
	document.Cad.idOrdemServico.readOnly = true;
	document.Cad.IdPessoa.readOnly = true;
	document.Cad.dataInicioValidade.readOnly = true;
	document.Cad.dataFimValidade.readOnly = true;
	document.Cad.corpo.readOnly = true;
	document.Cad.status.readOnly = false;
	document.Cad.status.focus();
	document.Cad.BtnSalvar.disabled = false;
}
function IniciaId()
{
	document.Cad.idOrdemServico.value ="0";
}