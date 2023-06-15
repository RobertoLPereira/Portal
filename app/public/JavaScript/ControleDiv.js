function esconder(var1)
{
var faf;
    for (nomediv in document.mnu.all)
    {
      if  (nomediv.substring(0,3) == "div")
		{
			divname = document.getElementById(nomediv);
			faf = nomediv.substring(3);
			sinalname = document.getElementById(faf);
			if (faf == var1){}
			else{
			divname.style.display = "none";
			sinalname.innerText = "+";}
		}
    }
}
function recolher(var1)
{
var faf;
    for (nomediv in document.mnu.all)
    {
      if  (nomediv.substring(0,4) == "sdiv")
		{
			divname = document.getElementById(nomediv);
			faf = nomediv.substring(4);
			sinalname = document.getElementById(faf);
			if (faf == var1){}
			else{
			divname.style.display = "none";
			sinalname.innerText = "+";}
		}
    }
    divname = document.getElementById("sdiv"+var1) ;
	sinalname = document.getElementById(var1) ;
	if (divname.style.display == "block")
	{
		divname.style.display = "none";
		sinalname.innerText = "+";
	}
	else
	{
		divname.style.display = "block";
		sinalname.innerText = "-";
	}
}
function menudiv(var1)
{
var faf;
	divname = document.getElementById('div'+var1) ;
	sinalname = document.getElementById(var1) ;
	if (divname.style.display == "block")
	{
		divname.style.display = "none";
		sinalname.innerText = "+";
	}
	else
	{
		divname.style.display = "block";
		sinalname.innerText = "-";
	}

}
function clickHandler() {
    // variavel que define o objeto no qual ocorreu o evento Ex.: Clique do mouse no formulario, pasta, DIV...
    el = window.event.srcElement;

    if (el.className == "Outline") {
       // Inicializa variavel com o identificador do DIV
       targetId = el.id + "d" ;
       //targetId = el.id  ;
       // Inicializa na variavel com o ponteiro para executar alguma coisa no devido identificador de DIV
  	  // Ex.: OUT1d
       targetElement = document.all(targetId) ;
  	  // Verifica o elemento clicado (pasta) esta fechada

       if (targetElement.style.display == "none") {
  	     // Abre um DIV
          targetElement.style.display = "" ;

  		  // No enderero especificado poe a figura de pasta aberta
          el.src="Aberta.gif" ;
       } else {
  	     // Fecha o DIV clicado
          targetElement.style.display = "none" ;
  		  // Substitui o Gif para pasta fechada
          el.src="Fechada.gif" ;
       }
    }
  }