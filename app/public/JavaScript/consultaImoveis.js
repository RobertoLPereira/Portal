function AjaxImovelDisponivel(){
var Uf=document.entrevista.UF.value;
var Cidade=document.entrevista.Cidade.value;
var Bairro=document.entrevista.Bairro.value;
var Tp=document.entrevista.TipoImovel.value;
alert(Uf+Cidade+Bairro+Tp);
var req;
 var isIE;
 if (window.XMLHttpRequest) {
   req =  new ActiveXObject("Msxml2.XMLHTTP");
 }else if (window.ActiveXObject) {
   isIE = true;
   req = new ActiveXObject("Msxml2.XMLHTTP");
    }
var url = "../servlet/ajaxImoveisDisponiveis?Uf="+Uf+"&Cidade="+Cidade+"&Bairro="+Bairro+"&TipoImovel="+Tp;
 req.open("GET", url, true);
 req.send(null);
 if (req.readyState == 4) {
    if (req.status == 200) {
        var texto = req.responseText;
        lista.innerHTML = texto;               
       }
   }
}