function AjaxJuridica(campo){
//alert(campo);
var req;
 var isIE;
 if (window.XMLHttpRequest) {
   req =  new ActiveXObject("Msxml2.XMLHTTP");
 }else if (window.ActiveXObject) {
   isIE = true;
   req = new ActiveXObject("Msxml2.XMLHTTP");
    }
var url = "../servlet/AjaxJuridica?nome="+campo;
//req.onreadystatechange = processRequest;
 req.open("GET", url, true);
 req.send(null);
//alert(req.readyState);
if (req.readyState == 4) {
    if (req.status == 200) {
        //rset = xmlhttp.responseXML.documentElement.childNodes;
        //var rslta = new Array(rset.length);
        //alert(rslta);
        var texto = req.responseText;
        lista.innerHTML = texto;
        //alert("resposta = "+texto);
        //var cible = document.getElementById('tag_atualizar').innerHTML = texto;
        //document.getElementById('tag_atualizar').style.display = "block";
        //document.all.lista.innerHTML = texto;
                
       }
       //alert(req.status);
   }
}
function processRequest() {
 if (req.readyState == 4) {
    if (req.status == 200) {
        //rset = xmlhttp.responseXML.documentElement.childNodes;
        var texto = req.responseText;
        alert("resposta = "+texto);
       }
   }
 }
function selected(choice){
        var cible = document.getElementById('op');
        cible.value = choice;
        document.getElementById('tag_atualizar').style.display = "none";
}