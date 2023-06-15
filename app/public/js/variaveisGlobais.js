/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var singleSelect = true;  // Allows an item to be selected once only
        var sortSelect = true;  // Only effective if above flag set to true
        var sortPick = true;  // Will order the picklist in sort sequence


        var campo = "";
        var ajax = null;
        var confAtr = {
            Atributo  : null,
            Sufixo :null,
            Label:null,
            Picture :null,
            Decimal:null,
            Importancia :null,
            Sequencia :null,
            Tabela :null,
            Titulo :null,
            QbrLinha :null,
            CaracEsP :null,
            Moeda :null,
            IdcSelect :null,
            VlrPadrao :null,
            DcrPadrao:null,
            TabOri :null,
            CmpExib : null,
            Opcional : null,
            TpPessoa:null,      
            Sistema:null        
        };
        var listaConfAtr = [];
        var wConfig = "";
        var wtemplateCab = "<table><TR class=TEXTOS>";
        wtemplateCab +="	<TD>Atributo</TD>";						
        wtemplateCab +="	<TD>Sistema</TD>";
        wtemplateCab +="	<TD>Tabela</TD>";
        wtemplateCab +="	<TD>Sufixo</TD>";
        wtemplateCab +="	<TD>Tp</TD>";
        wtemplateCab +="	<TD>Inteira</TD>";
        wtemplateCab +="	<TD>Decimal</TD>";
        wtemplateCab +="	<TD>Opcional</TD>";
        wtemplateCab +="	<TD>Natureza</TD>";
        wtemplateCab +="	<TD>Tp Pessoa</TD>";
        wtemplateCab +="	<TD>Label</TD>";
        wtemplateCab +="</TR>";
        var wtemplate="<TR class=TEXTOS nowrap>";
        wtemplate+="	<TD><Input type=text id='AtributoCMP' value='vlr' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='SistemaCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='TabelaCMP' value='' size=10></TD>";	
        wtemplate+="	<TD><Input type=text id='SufixoCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='TpCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='PictureCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='DecimalCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='OpcionalCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='NaturezaCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='TpPessoaCMP' value='' size=10></TD>";
        wtemplate+="	<TD><Input type=text id='LabelCMP' value='lbl' size=10></TD>";
        wtemplate+="</TR></table>";

