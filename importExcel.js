var xlsx = require("xlsx");
//var wb = xlsx.readFile("Dicionário_de_Dados.xls",{cellDates:true});
var wb = xlsx.readFile("DemonstrativoDespesas.xlsx",{cellDates:true});
//Lista os nomes das abas contidas no arquivo
//console.log(wb.SheetNames);
//Obtem os dados da aba de nome Configurações
var ws = wb.Sheets["DemonstrativoDespesas"];
//Exibe os dados da aba
//console.log(ws)
//Converte os dados da aba no formato Json
var aba = xlsx.utils.sheet_to_json(ws);
//Ler a estrutura da aba e inclui mais uma coluna
var detalheAba = aba.map(function(record){
	//record.__Empty_34 = "Teste";
	return record;
});
//Lista os dados da aba
console.log(detalheAba);
console.log(detalheAba.length);
//caso queira gerar um novo arquivo a partir do original
/*
var novaPlanilha = xlsx.utils.book_new();
var Planilha = xlsx.utils.json_to_sheet(detalheAba);
xlsx.utils.book_append_sheet(novaPlanilha,Planilha,"new Data");
xlsx.writeFile(novaPlanilha,"Dcionario_2.xlsx");
*/