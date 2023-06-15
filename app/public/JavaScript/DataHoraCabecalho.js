var timerID = null;
var timerRunning = false;
function diaSEMA()
 {
	today=new Date();
	NoSemana=today.getDay();
	Dia=today.getDate();
	Semana=' ';
	NoMes=today.getMonth();
	Ano=today.getFullYear();
	if(NoSemana==0)Semana='Domingo, ';
	if(NoSemana==1)Semana='Segunda, ';
	if(NoSemana==2)Semana='Ter&ccedil;a, ';
	if(NoSemana==3)Semana='Quarta, ';
	if(NoSemana==4)Semana='Quinta, ';
	if(NoSemana==5)Semana='Sexta, ';
	if(NoSemana==6)Semana='S&aacute;bado, ';
	if(NoMes==0)Mes='janeiro';
	if(NoMes==1)Mes='fevereiro';
	if(NoMes==2)Mes='mar&ccedil;o';
	if(NoMes==3)Mes='abril';
	if(NoMes==4)Mes='maio';
	if(NoMes==5)Mes='junho';
	if(NoMes==6)Mes='julho';
	if(NoMes==7)Mes='agosto';
	if(NoMes==8)Mes='setembro';
	if(NoMes==9)Mes='outubro';
	if(NoMes==10)Mes='novembro';
	if(NoMes==11)Mes='dezembro';
	document.write(Semana+Dia+' de '+Mes+' de '+Ano);
 }

function startclock()
{
    stopclock();
    showtime();
}
function stopclock()
{

    if(timerRunning)
        clearTimeout(timerIDh);
    timerRunningh = false;
}
function showtime()
{
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeValue =  hours;
    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue  += (hours >= 12) ? " P.M." : " A.M.";
    document.frm1.face.value = hours+"h"+minutes+"min"+seconds+"s"

    timerIDh = setTimeout("showtime()",1000);
    timerRunningh = true;
}
