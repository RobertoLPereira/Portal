var timerRunning_w = false;
//var timerID_w = null;
function exibeMensagem()
{  //debugger;
    if(timerRunning_w)
        clearTimeout(timerID_w);
    timerRunningh_w = false;
    
    
}
function apagaMensagem()
{
    if (timerRunning_w){
        document.getElementById('msgSucesso').innerHTML = "";
    }
    timerRunning_w = true;
    timerID_w = setTimeout('apagaMensagem()',1000);
}
