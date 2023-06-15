
function acessar(){
	if (document.all('usuario').value === ""){
	    document.all('mensagem').innerHTML = "Informe o Usuario!";
	    setTimeout(3000);
	};
	if (document.all('senha').value === ""){
	    document.all('mensagem').innerHTML = "Informe a Senha!";
	};
    if (document.all('senhaN').value === ""){
        document.all('mensagem').innerHTML = "Informe a Senha Nova!";
    };
    if (document.all('senhaC').value === ""){
        document.all('mensagem').innerHTML = "Informe a Confirmação da Senha Nova!";
    };
    if (document.all('senhaN').value != document.all('senhaC').value){
        document.all('mensagem').innerHTML = "Informe a confirmação da Senha Igual a Senha Nova!";
    };
    alterar();
};
function alterar(){
	var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/api/atualiza/senha?CodigoUsuarioRede="+document.all('usuario').value.toUpperCase()+"&senha="document.all('senha').value,true);
        xhr.onreadystatechange = retorno;
        xhr.send();

        function retorno(){
        	document.all('mensagem').innerHTML = "";
            if (xhr.status == 0 && xhr.readyState == 4){
                alert("Servidor fora do ar");
            }
            if(xhr.status === 200 && xhr.readyState==4){                
                if (xhr.responseText != ""){
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                }
                if (data[0] != undefined){
                	if (data[0].senha != document.all('senha').value){
                		document.all('mensagem').innerHTML = "Senha nao confere!";
	    				return;
                	}
                }else{
                	document.all('mensagem').innerHTML = "Usuario nao Cadastrado!";
	    			return;
                }
            }
        }
}