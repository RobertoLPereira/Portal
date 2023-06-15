/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 angular.module('gerador',[]);
 angular.module("gerador").controller("geradorProjetoController", 
            function($scope,$http){
                //debugger;
                 section = document.querySelector('section');

                $scope.driveCon = [{"drive":"org.postgresql.Driver"},{"drive":"net.sourceforge.jtds.jdbc.Driver"},{"drive":"org.gjt.mm.mysql.Driver"}];
                $scope.url = "";
                $scope.user = "";
                $scope.pass = "";
                $scope.bco = "";
                $scope.nomeProjeto = "";
                $scope.criarDiretorio = true;
                $scope.Campos = null;
                $scope.tabela = "";
                $scope.schema = "";
                $scope.chv = "";
                $scope.dif = "";
                $scope.wTabelas = [];
                $scope.wTab = [];
                $scope.wTabAtr = [];
                $scope.isdup = false;
                $scope.databases = [{"name":"Selecione"}];
                $scope.schemas = [{texto:null}];
                $scope.wDataset = [{"name":"Selecione"}];
                $scope.diag = {"nodeDataArray": [{"key":-1, "loc":"1512.5965627082687 1274.7331741333007", "text":"Selecione", "name":"Selecione"}],
                                "linkDataArray": [{"from":-2, "to":-3, "points":[1640.1707509406906,1300,1680.1707509406906,1300,1817.8344243415695,1425,1867.8344243415695,1425]}]};
                $scope.EstruturaTela = [{Dad_Sequencia:null,Dad_Sigla:null,Dad_Tabela:null,Dad_Atributos:null,Dad_Sufixo:null,Dad_Picture:null,Dad_Importancia:null,
                        Dad_TabelaOri:null,Dad_Titulo:null,Dad_QbrLinha:null
                        ,Dad_CaracEsP:null,Dad_Moeda:null,Dad_IdcSelect:null}];       
                 $scope.EstTela = {Dad_Sequencia:null,Dad_Sigla:null,Dad_Tabela:null,Dad_Atributos:null,Dad_Sufixo:null,Dad_Picture:null,Dad_Importancia:null,
                   Dad_TabelaOri:null,Dad_Titulo:null,Dad_QbrLinha:null,
                    Dad_CaracEsP:null,Dad_Moeda:null,Dad_IdcSelect:null};
                $scope.Informacoes = {
                  configuracao :{sistema : document.getElementById('inf').sistema.value,
                              nomePrograma:null,
                              Objetivo:null,
                              Pacote:document.getElementById('inf').Pacote.value,
                              Formulario:null,
                              Acao:null,
                              Chave:null,
                              Difere:null,
                              Pagina:document.getElementById('inf').Dbase.value,
                              CasoUso:null,
                              Vocabulario:null,                       
                              View:document.getElementById('inf').View.value,
                              Model:document.getElementById('inf').Model.value,  
                              Controller:document.getElementById('inf').Controller.value}, 
                          CamposTela:[{Atributo:null}],
                          CamposLista:[{Atributo:null}], 
                          tabelas:[],
                          driver:document.getElementById('inf').driveCon.value,
                          url:document.getElementById('inf').url.value,
                          bancoDados:$scope.bco,
                          user:document.getElementById('inf').user.value,
                          senha:document.getElementById('inf').sen.value
                          
                };
                
                try
                    {    // Firefox, Opera 8.0+, Safari, IE7.0+
                        ajax=new XMLHttpRequest();
                    }
                    catch (e)
                    {    // Internet Explorer 6.0+, 5.0+
                        try
                        {
                            ajax=new ActiveXObject("Msxml2.XMLHTTP");
                        }
                        catch (e)
                        {
                            try
                            {
                                ajax=new ActiveXObject("Microsoft.XMLHTTP");
                            }
                            catch (e)
                            {
                                this.debug("ATENÇÂO. Seu navegador não suporta aplicação AJAX!");
                            }
                        }
                    }
                    var url = "";
                    $http.get('./conf/urlServer.json').success(function (data) {
                        console.log(data);
                        $scope.servers = data;
                        url = $scope.servers.Gerador.url;
                        //var url = $scope.servers.Angularjs.url+ "/AjaxSchemaProjeto";
                        //ajax.open("GET",url,true);
                        //ajax.onreadystatechange = $scope.atualizar;
                        //ajax.send();
                        //console.log(url);
                    }).error(function (retorno){
                        console.log("Não obteve a Lista de Url dos servidores. Retorno ="+retorno);
                        $scope.wretorno.status = data.retorno[0].status;
                        $scope.wretorno.mensagem = data.retorno[0].mensagem;
                        $scope.wretorno.wpath = data.retorno[0].wpath;
                        //document.inf.Dbase.value = $scope.wretorno.wpath;
                    
                    });                    
                    $http.get(url+"/getfindAllDb?driveCon=org.postgresql.Driver&url=jdbc:postgresql://localhost:5432/&user=postgres&sen=rlp562&bco=postgres&metodo=db").success(function (data) {                     
                    console.log(url)  ;
                    console.log(data);
                      $scope.wDataset = data;
                      $scope.databases = data; 
                        //console.log($scope.wDataset);
                    }).error(function (retorno){
                        console.log("Não obteve a Lista de Dataset. Retorno ="+retorno);
                        $scope.wretorno.status = data.retorno[0].status;
                        $scope.wretorno.mensagem = data.retorno[0].mensagem;
                        $scope.wretorno.wpath = data.retorno[0].wpath;
                        //document.inf.Dbase.value = $scope.wretorno.wpath;
                    }) ;
                    $scope.atualizar = function (){
                        if (ajax.readyState===4){
                            if (ajax.status === 200) {
                                console.log(ajax.responseText);
                                $scope.schemas.texto = ajax.responseText;
                                var wSchema = JSON.parse( $scope.schemas.texto );
                                console.log(wSchema);                                
                                for(index = 0; index < wSchema['tabelas'].length; index++) {
                                  //console.log(wSchema['tabelas'][index].tabela);                                  
                                  var view = new RegExp("View");
                                  var wsis = new RegExp("sys");
                                  var resv = view.test(wSchema['tabelas'][index].tabela);
                                  var ress = wsis.test(wSchema['tabelas'][index].tabela);
                                  if (!resv && !ress){  
                                      //debugger;
                                       //$scope.buscarAtributos(wSchema['tabelas'][index].tabela);
                                      
                                        $http.get($scope.servers.Angularjs.url+"/AjaxAtributosTabela?Tabelas="+wSchema['tabelas'][index].tabela
                                            +"&driveCon="+document.getElementById('driveCon').value+"&url="
                                            +document.getElementById('url').value+"&bco="+
                                            $scope.bco+"&user="
                                            +document.getElementById('user').value+"&sen="+
                                            document.getElementById('sen').value)
                                            .success(function (data) {
                                         //   console.log(data);
                                         var Atributos = data;
                                         var wvazio = new RegExp("<Registro>");
                                         var resp = wvazio.test(Atributos);
                                         console.log(resp);
                                         if (!resp && Atributos['atributos'] !== undefined){                                             
                                            $scope.iterateJSON(Atributos['atributos']);   
                                         }else{
                                             console.log("vazio="+wSchema['tabelas'][index].tabela+" qtd ="+Atributos['atributos']);};
                                        }).error (function(data){
                                            console.log("erro = "+ data);
                                        });
                                  }
                                }                                
                            }
                          }
                        };
                
            $scope.iterateJSON = function (data) {    
                //debugger;
                var wLista = "";
                var wTela = "";
                //console.log(data);
                if(data !== undefined){
                    if(data[0].tabela !== undefined){
                        $scope.tabela = data[0].tabela;
                        $scope.schema = data[0].schema;
                        for	(index = 0; index < data.length; index++) {
                           try{
                                $scope.Informacoes.CamposLista.push({Atributo:data[index].campo});
                               $scope.Informacoes.CamposTela.push({Atributo:data[index].campo});
                                if (wLista ===""){
                                    wLista+=data[index].campo.toString();
                                    wTela+=data[index].campo.toString();
                                    $scope.chv = data[index].campo;
                                    $scope.dif = data[index].campo;
                                    $scope.Informacoes.configuracao.Chave = data[index].campo;
                                    $scope.Informacoes.configuracao.Difere = data[index].campo;
                                }
                                else{
                                    wLista+=";"+data[index].campo.toString();
                                    wTela+=";"+data[index].campo.toString();
                                }

                            }catch(e){
                                console.log(e);
                              //console.log(index);
                            };
                          //console.log(wTela);
                            document.inf.tabelas.value= $scope.schema +"/"+$scope.tabela;
                            document.inf.nomePrograma.value=$scope.tabela;
                            document.inf.Chave.value=$scope.Informacoes.configuracao.Chave;
                            document.inf.Difere.value=$scope.Informacoes.configuracao.Difere;
                            //$scope.gerar();
                        } 
                        document.inf.CamposTela.value=wTela;
                        document.inf.CamposLista.value=wLista;
                        //alert("vai gerar");
                        $scope.gerar();
                        if (index === data.length){
                            //alert("Projeto construção com Sucesso!");
                            var elementoHTML = document.getElementById("mensagem");
                              angular.element(elementoHTML).html( "Projeto construção com Sucesso!<br>O banco de dados "+$scope.bco+".json Foi gerado na pasta databaseJson>Abra-o e faça as alterações necessárias.<br>Inclua na primeira linha um { e na ultima linha substitua a virgula por um }<br>Passe o conteudo por um validador de JSON para conferir o resultado final");
                            }
                    }
                }
                                
                for (index = 0; index < $scope.Informacoes.CamposTela.length; index++) 
                    {
                        $scope.Informacoes.CamposLista[index].Atributo = null;
                        $scope.Informacoes.CamposTela[index].Atributo = null;
                    };
            } ;
            $scope.conectar = function(){
                console.log($scope.servers.Angularjs.url);
                
                $http.get("/processar?driveCon="+document.getElementById('driveCon').value+"&url="+document.getElementById('url').value+"&user="+document.getElementById('user').value+"&sen="+document.getElementById('sen').value+"&bco="+$scope.bco).success(function (data) {                  
              //$http.get($scope.servers.Angularjs.url+"/AjaxSchema?driveCon="+document.getElementById('driveCon').value+"&url="+document.getElementById('url').value+"&user="+document.getElementById('user').value+"&sen="+document.getElementById('sen').value+"&bco="+$scope.bco).success(function (data) {                  
                      document.getElementById('SelectList').innerHTML= data;
                     $scope.SchemaEAtributos();
                    }).error(function (retorno){
                        console.log("Não obteve o schema ( "+$scope.tabela+" )" + " Retorno ="+retorno);
                        $scope.wretorno.status = data.retorno[0].status;
                        $scope.wretorno.mensagem = data.retorno[0].mensagem;
                        $scope.wretorno.wpath = data.retorno[0].wpath;
                        //document.inf.Dbase.value = $scope.wretorno.wpath;
                        }) ;
                        //$scope.criarDiretorio = false;
            };
            
            $scope.SchemaEAtributos = function(){
                $http.get($scope.servers.Angularjs.url+"/SchemaEAtributos?driveCon="+document.getElementById('driveCon').value+"&url="+document.getElementById('url').value+"&user="+document.getElementById('user').value+"&sen="+document.getElementById('sen').value+"&bco="+$scope.bco+"&metodo= ").success(function (data) {                     
                      //console.log(data);
                      $scope.diag = data;
                      var listw = "<datalist id='Atributos'><br>";
                        for (i in $scope.diag.nodeDataArray) {
                            $scope.wTab.push($scope.diag.nodeDataArray[i].name);
                            
                            for (j = 0; j < $scope.diag.nodeDataArray[i].properties.length; j++) {
                                if (j == 0){
                                    $scope.wTabAtr.push( $scope.diag.nodeDataArray[i].name+"/"+$scope.diag.nodeDataArray[i].properties[j].name);
                                }else{
                                    $scope.verDuplicidade($scope.diag.nodeDataArray[i].properties[j].name,$scope.wTabAtr);
                                    if ($scope.isdup){      
                                        $scope.wTabAtr.push( $scope.diag.nodeDataArray[i].name+"/"+$scope.diag.nodeDataArray[i].properties[j].name)
                                    }else{
                                       $scope.wTabAtr.push($scope.diag.nodeDataArray[i].properties[j].name);
                                    }
                                }
                            listw+="<option value=\""+$scope.diag.nodeDataArray[i].properties[j].name+"\"><br>";
                            }
                        }
                        //console.log($scope.wTab);
                        listw+="</datalist>";
                        
                    //}
                                           
                    }).error(function (retorno){
                        console.log("Não obteve o schema versão UML ( "+$scope.tabela+" )" + " Retorno ="+retorno);
                        $scope.wretorno.status = data.retorno[0].status;
                        $scope.wretorno.mensagem = data.retorno[0].mensagem;
                        $scope.wretorno.wpath = data.retorno[0].wpath;
                        //document.inf.Dbase.value = $scope.wretorno.wpath;
                        }) ; 
            };
            $scope.verDuplicidade = function(dup,lista){
                //console.log(lista);
                $scope.isdup = false;
                 for (a = 0; a < lista.length; a++) {
                     //console.log(dup+"#"+lista[a]);
                     if (dup === lista[a]){
                         $scope.isdup = true;
                     }
                 }
            };
            $scope.gerar = function(){
                //debugger;  
                $scope.wretorno = [{status:null,mensagem:"",wpath:""}];
                if ($scope.criarDiretorio){
                    $http.get($scope.servers.Angularjs.url+"/CriaDiretoriosProjeto?nomeProj="+document.inf.nomeProj.value+"&Dbase="+document.inf.Dbase.value).success(function (data) {
                        //console.log(data.retorno[0]);
                        $scope.wretorno.status = data.retorno[0].status;
                        $scope.wretorno.mensagem = data.retorno[0].mensagem;
                        $scope.wretorno.wpath = data.retorno[0].wpath;
                        document.inf.Dbase.value = $scope.wretorno.wpath;
                        alert($scope.wretorno.mensagem+" "+ $scope.wretorno.wpath);
                        }).error(function (retorno){
                            console.log("Não Gerou Código para a tabela ( "+$scope.tabela+" )" + " Retorno ="+retorno);
                        }) ;
                        $scope.criarDiretorio = false;
                }
                
                campo=$scope.tabela;
                if ($scope.tabela.length > 0){
                       //Tem que incluir todos os campos que o ajax pega por request. Caso contrário sairá por nullpoint
                       var url = $scope.servers.Angularjs.url+"/GerarProjeto?tabelas=";//"/teste2?tabelas=";
                       url+=$scope.schema+"/"+$scope.tabela+"&sistema="+document.getElementById("nomeProj").value+"&CamposTela="+ document.inf.CamposTela.value;
                       url+="&CamposLista="+ document.inf.CamposTela.value+"&nomePrograma="+document.inf.nomePrograma.value;
                       url+="&Objetivo="+document.inf.Objetivo.value+"&Pacote="+document.inf.Pacote.value;
                       url+="&Formulario="+document.inf.Formulario.value+"&Acao="+document.inf.Acao.value;
                       url+="&Chave="+document.inf.Chave.value+"&Difere="+document.inf.Difere.value;
                       url+="&Lista="+document.inf.Lista.value+"&Pagina="+document.inf.Dbase.toString();                       
                       url+="&CasoUso="+document.inf.CasoUso.value+"&Vocabulario="+document.inf.Vocabulario.selected;                       
                       url+="&View="+document.inf.View.value+"&Model="+document.inf.Model.value;  
                       url+="&Controller="+document.inf.Controller.value;
                       url+="&driveCon="+$scope.Informacoes.driver;
                       url+="&url="+$scope.Informacoes.url;
                       url+="&bco="+$scope.Informacoes.bancoDados;
                       url+="&user="+$scope.Informacoes.user;
                       url+="&sen="+$scope.Informacoes.senha;
                       url+="&Dbase="+document.inf.Dbase.toString();
                       url+="&nomeProj="+document.inf.nomeProj.value;
                       //url+="&pasta="+document.inf.pasta.value;
                       //console.log(url);
                       $http.get(url).success(function (retorno) {
                         //console.log("Gerou código para a tabela ( "+$scope.tabela+" )" + retorno);
                        }).error(function (retorno){
                            //console.log("Não Gerou Código para a tabela ( "+$scope.tabela+" )" + " Retorno ="+retorno);
                        }) ;
//                      
                    }
            };
           
            $scope.mensagem = function (){		
                if (ajax.readyState===4){
                    if (ajax.status === 200) {	
                        //alert("voltou"+ ajax.responseText);
                    }else{
                       document.getElementById('det').innerHTML="Ocorreu problema! Código="+ajax.status;
                   }  
                   document.getElementById("PickList").innerHTML = "";
               }	   
            };
            $scope.obterTabelas = function () {
                $scope.Informacoes.driver = document.getElementById("driveCon").value;
                 $scope.Informacoes.url= document.getElementById("url").value;
                 $scope.Informacoes.bancoDados = $scope.bco;
                 $scope.Informacoes.user = document.getElementById("user").value;
                 $scope.Informacoes.senha = document.getElementById("sen").value;
                if (document.inf.nomeProj.value === "" || document.inf.Dbase.value === ""){
                    if (document.inf.nomeProj.value === ""){
                        alert("Sigla do projeto não informada!");
                        return false;
                    }else{
                        alert("Diretório do Fonte Gerado não informada!");
                        return false;
                    }
                }else{ 
                    var elementoHTML = document.getElementById("mensagem");
                    angular.element(elementoHTML).html( "Projeto em construção..." );
                    var url = $scope.servers.Angularjs.url+ "/AjaxSchemaProjeto"+"?driveCon="+$scope.Informacoes.driver+"&url="+$scope.Informacoes.url+"&bco="+$scope.Informacoes.bancoDados+"&user="+$scope.Informacoes.user+"&sen="+$scope.Informacoes.senha;
                        ajax.open("GET",url,true);
                        ajax.onreadystatechange = $scope.atualizar;
                        ajax.send(); 
                    }
            };
            
            //
            $scope.initIt = function(){
                   var selectList = document.getElementById("SelectList");
                    var selectOptions = selectList.options;
                    var selectIndex = selectList.selectedIndex;
                    var pickList = document.getElementById("PickList");
                    var pickOptions = pickList.options;
                    pickOptions[0] = null;  // Remove initial entry from picklist (was only used to set default width)
                    if (!(selectIndex > -1)) {
                      selectOptions[0].selected = true;  // Set first selected on load
                      selectOptions[0].defaultSelected = true;  // In case of reset/reload
                    }
                    selectList.focus();  // Set focus on the selectlist

               } ;
               $scope.addIt = function () {
                   //debugger;
                   // alert("addIt");
                  var selectList = document.getElementById("SelectList");
                  //alert("SelectList");
                  var selectIndex = selectList.selectedIndex;
                  var selectOptions = selectList.options;
                  var pickList = document.getElementById("PickList");
                  var pickOptions = pickList.options;
                  var pickOLength = pickOptions.length;
                  // An item must be selected
                  while (selectIndex > -1) {
                    pickOptions[pickOLength] = new Option(selectList[selectIndex].text);
                    pickOptions[pickOLength].value = selectList[selectIndex].value;
                    $scope.wTabelas[pickOptions[pickOLength]] = selectList[selectIndex].value;
                    if ($scope.tabela === ""){
                        $scope.tabela+= selectList[selectIndex].value;
                    }else{
                        $scope.tabela+= ","+selectList[selectIndex].value;
                    }
                    //buscarAtributos();
                    // If single selection, remove the item from the select list
                    if (singleSelect) {
                      selectOptions[selectIndex] = null;
                    }
                    if (sortPick) {
                      var tempText;
                      var tempValue;
                      // Sort the pick list
                      while (pickOLength > 0 && pickOptions[pickOLength].value < pickOptions[pickOLength-1].value) {
                        tempText = pickOptions[pickOLength-1].text;
                        tempValue = pickOptions[pickOLength-1].value;
                        pickOptions[pickOLength-1].text = pickOptions[pickOLength].text;
                        pickOptions[pickOLength-1].value = pickOptions[pickOLength].value;
                        pickOptions[pickOLength].text = tempText;
                        pickOptions[pickOLength].value = tempValue;
                        pickOLength = pickOLength - 1;
                      }
                    }
                    selectIndex = selectList.selectedIndex;
                    pickOLength = pickOptions.length;
                  }
                  selectOptions[0].selected = true;  
                };
                // Deletes an item from the picklist
                $scope.delIt =function () {
                  var selectList = document.getElementById("SelectList");
                  var selectOptions = selectList.options;
                  var selectOLength = selectOptions.length;
                  var pickList = document.getElementById("PickList");
                  var pickIndex = pickList.selectedIndex;
                  var pickOptions = pickList.options;
                  while (pickIndex > -1) {
                    // If single selection, replace the item in the select list
                    if (singleSelect) {
                      selectOptions[selectOLength] = new Option(pickList[pickIndex].text);
                      selectOptions[selectOLength].value = pickList[pickIndex].value;
                    }
                    pickOptions[pickIndex] = null;
                    if (singleSelect && sortSelect) {
                      var tempText;
                      var tempValue;
                      // Re-sort the select list
                      while (selectOLength > 0 && selectOptions[selectOLength].value < selectOptions[selectOLength-1].value) {
                        tempText = selectOptions[selectOLength-1].text;
                        tempValue = selectOptions[selectOLength-1].value;
                        selectOptions[selectOLength-1].text = selectOptions[selectOLength].text;
                        selectOptions[selectOLength-1].value = selectOptions[selectOLength].value;
                        selectOptions[selectOLength].text = tempText;
                        selectOptions[selectOLength].value = tempValue;
                        selectOLength = selectOLength - 1;
                      }
                    }
                    pickIndex = pickList.selectedIndex;
                    selectOLength = selectOptions.length;
                  }
                };

                // Selection - invoked on submit
                $scope.selIt = function (btn) {
                  var pickList = document.getElementById("PickList");
                  var pickOptions = pickList.options;
                  var pickOLength = pickOptions.length;
                  if (pickOLength < 1) {
                    alert("Não foi selecionado nenhum item \n Favor selecione [->] botão");
                    return false;
                  }
                  for (var i = 0; i < pickOLength; i++) {
                    pickOptions[i].selected = true;
                  }
                  return true;
                };

                $scope.buscarAtributos = function(){                                    
                 //alert("Chamar");
                vForm = document.getElementById("inf");
                f = vForm;  
                //debugger;
                campo=$scope.tabela;
                if ($scope.tabela.length > 0){
                       //ajax = openAjax();
                       //ajax = openBrowser();
                       var url = $scope.servers.Angularjs.url+"/AjaxAtributosTabela?Tabelas="+$scope.tabela+
                       //var url = "http://localhost:8080/AngularJs/AjaxAtributosTabela?Tabelas="+$scope.tabela+
                          "&driveCon="+document.getElementById('inf').driveCon.value+
                          "&url="+document.getElementById('inf').url.value+
                          "&bco="+$scope.bco+
                          "&user="+document.getElementById('inf').user.value+
                          "&sen="+document.getElementById('inf').sen.value;
                  console.log(url);
                       ajax.open("GET",url,true);
                       ajax.onreadystatechange = $scope.atualizarTela;
                       ajax.send();
                    }
            };
            $scope.atualizarTela = function (){		
                if (ajax.readyState===4){
                        if (ajax.status === 200) {	
                            //alert("voltou"+ ajax.responseText);
                            //console.log(ajax.responseText);
                            rset = ajax.responseText;
                            //var aa = JSON.parse('{"atributos": [{"tabelas": [{"nome":"id","label":"id"},{"nome":"IdEntrevista","label":"IdEntrevista"},{"nome":"IdDestinatario","label":"IdDestinatario"},{"nome":"Assunto","label":"Assunto"},{"nome":"dataTarefa","label":"dataTarefa"},{"nome":"dataUltimoEvento","label":"dataUltimoEvento"},{"nome":"IdSituacao","label":"IdSituacao"},{"nome":"Pessoa","label":"Pessoa"},{"nome":"dataAvisar","label":"dataAvisar"},{"nome":"procedimentoAdotado","label":"procedimentoAdotado"},{"nome":"acaoAgendada","label":"acaoAgendada"},{"nome":"IdAtendimentoPadrao","label":"IdAtendimentoPadrao"},{"nome":"id","label":"id"},{"nome":"descricao","label":"descricao"},{"nome":"idAtendimentoPadrao","label":"idAtendimentoPadrao"},{"nome":"descricao","label":"descricao"},{"nome":"idAtividadeProdutiva","label":"idAtividadeProdutiva"},{"nome":"AtividadeProdutiva","label":"AtividadeProdutiva"},{"nome":"id","label":"id"},{"nome":"denominacao","label":"denominacao"},{"nome":"idCaractApto","label":"idCaractApto"},{"nome":"descricao","label":"descricao"},{"nome":"qtdDormitorios","label":"qtdDormitorios"},{"nome":"nroSuites","label":"nroSuites"},{"nome":"nroLavabos","label":"nroLavabos"},{"nome":"nroDependencias","label":"nroDependencias"},{"nome":"nroSalas","label":"nroSalas"},{"nome":"nraSacadas","label":"nraSacadas"},{"nome":"idcCobertura","label":"idcCobertura"},{"nome":"idgrupoCentroCusto","label":"idgrupoCentroCusto"},{"nome":"idcentrocusto","label":"idcentrocusto"},{"nome":"Denominacao","label":"Denominacao"},{"nome":"idCentroCustoMestre","label":"idCentroCustoMestre"},{"nome":"idcustosTotais","label":"idcustosTotais"},{"nome":"denminacao","label":"denminacao"},{"nome":"idDepreciacao","label":"idDepreciacao"},{"nome":"anoMes","label":"anoMes"},{"nome":"Depreciacao","label":"Depreciacao"},{"nome":"Base","label":"Base"},{"nome":"taxa","label":"taxa"},{"nome":"iddespesasOperacionais","label":"iddespesasOperacionais"},{"nome":"Despesa","label":"Despesa"},{"nome":"id","label":"id"},{"nome":"denominacao","label":"denominacao"},{"nome":"id","label":"id"},{"nome":"denominacao","label":"denominacao"},{"nome":"id","label":"id"},{"nome":"denominacao","label":"denominacao"},{"nome":"idgrupoCentroCusto","label":"idgrupoCentroCusto"},{"nome":"Denominacao","label":"Denominacao"}]}]}');
                            var Atributos = JSON.parse( rset );
                            $scope.Campos = Atributos;
                            console.log($scope.Campos);
                            document.getElementById('ht').value = rset;
                            $scope.iterateJSON(Atributos['atributos']);
                        }else{
                           document.getElementById('det').innerHTML="Ocorreu um problema! Código="+ajax.status;
                       }     			 
                   }	   
            };
            $scope.incluirAtr = function(){
               var EstTela = {Dad_Sequencia:null,Dad_Sigla:null,Dad_Tabela:null,Dad_Atributos:null,Dad_Sufixo:null,Dad_Picture:null,Dad_Importancia:null,
                   Dad_TabelaOri:null,Dad_Titulo:null,Dad_QbrLinha:null,
                    Dad_CaracEsP:null,Dad_Moeda:null,Dad_IdcSelect:null};
                EstTela.Dad_Sequencia=$scope.EstTela.Dad_Sequencia;
                EstTela.Dad_Sigla=$scope.EstTela.Dad_Sigla;
                EstTela.Dad_Tabela=$scope.EstTela.Dad_Tabela;
                EstTela.Dad_Atributos=$scope.EstTela.Dad_Atributos;
                EstTela.Dad_Sufixo = $scope.EstTela.Dad_Sufixo;
                EstTela.Dad_Picture =$scope.EstTela.Dad_Picture;
                EstTela.Dad_Importancia=$scope.EstTela.Dad_Importancia;
                EstTela.Dad_TabelaOri=$scope.EstTela.Dad_TabelaOri;
                EstTela.Dad_Titulo = $scope.EstTela.Dad_Titulo;
                EstTela.Dad_QbrLinha=$scope.EstTela.Dad_QbrLinha;
                EstTela.Dad_CaracEsP=$scope.EstTela.Dad_CaracEsP ;
                EstTela.Dad_Moeda=$scope.EstTela.Dad_Moeda;
                EstTela.Dad_IdcSelect=$scope.EstTela.Dad_IdcSelect;

                $scope.EstruturaTela.push(EstTela);
                //var frm = "<h1>Formulario</h1><p><table><tr><td><label>"+$scope.EstTela.Dad_Titulo+":"+"</label></td><td><input type='text' id='"+$scope.EstTela.Dad_Atributos+"'></td></tr></table>";
                //section.appendChild(frm);
                $scope.EstTela.Dad_Sequencia=$scope.EstTela.Dad_Sequencia+1;
                $scope.EstTela.Dad_Atributos = "";
                $scope.EstTela.Dad_Sufixo = "";
                $scope.EstTela.Dad_Picture =  "";
                $scope.EstTela.Dad_Importancia =  "A";
                $scope.EstTela.Dad_Sequencia =  "";
                $scope.EstTela.Dad_TabelaOri =  "";
                $scope.EstTela.Dad_Titulo =  "";
                
                console.log($scope.EstruturaTela);
                
            };
        
       }); 

