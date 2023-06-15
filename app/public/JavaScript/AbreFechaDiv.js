	function FdivRsd()
	{
		tdresidencial.style.borderBottom = "0px";
		tdDomicilio.style.borderBottom = "1px solid gray";
		tdComercial.style.borderBottom = "1px solid gray";
		tdMedidas.style.borderBottom = "1px solid gray";		
		tdObserva.style.borderBottom = "1px solid gray";		
				
		var obj1 = document.getElementById("divRsd");
		var obj2 = document.getElementById("divDmc");
		var obj3 = document.getElementById("divCmc");
		var obj4 = document.getElementById("divMdg");
		var obj5 = document.getElementById("divObs");

		obj2.style.display = 'none';
		obj3.style.display = 'none';
		obj4.style.display = 'none';
		obj5.style.display = 'none';				

		if(obj1.style.display == 'block')
		    obj1.style.display = 'none';
		else
		    obj1.style.display = 'block';
	}
	function FdivDmc()
	{
		tdresidencial.style.borderBottom = "1px solid gray";
		tdDomicilio.style.borderBottom = "0px";
		tdComercial.style.borderBottom = "1px solid gray";
		tdMedidas.style.borderBottom = "1px solid gray";
		tdObserva.style.borderBottom = "1px solid gray";		
				
		var obj1 = document.getElementById("divDmc");
		var obj2 = document.getElementById("divRsd");
		var obj3 = document.getElementById("divCmc");
		var obj4 = document.getElementById("divMdg");
		var obj5 = document.getElementById("divObs");		
		
		obj2.style.display = 'none';
		obj3.style.display = 'none';
		obj4.style.display = 'none';
		obj5.style.display = 'none';		

		if(obj1.style.display == 'block')
		    obj1.style.display = 'none';
		else
		    obj1.style.display = 'block';
	}
	function FdivCmc()
	{
		tdresidencial.style.borderBottom = "1px solid gray";
		tdDomicilio.style.borderBottom = "1px solid gray";
		tdComercial.style.borderBottom = "0px";
		tdMedidas.style.borderBottom = "1px solid gray";
		tdObserva.style.borderBottom = "1px solid gray";		
				
		var obj1 = document.getElementById("divCmc");
		var obj2 = document.getElementById("divDmc");
		var obj3 = document.getElementById("divRsd");
		var obj4 = document.getElementById("divMdg");
		var obj5 = document.getElementById("divObs");				

		obj2.style.display = 'none';
		obj3.style.display = 'none';
		obj4.style.display = 'none';
		obj5.style.display = 'none';		

		if(obj1.style.display == 'block')
		    obj1.style.display = 'none';
		else
		    obj1.style.display = 'block';
	}
	function FdivMdg()
	{
		tdresidencial.style.borderBottom = "1px solid gray";
		tdDomicilio.style.borderBottom = "1px solid gray";
		tdComercial.style.borderBottom = "1px solid gray";
		tdMedidas.style.borderBottom = "0px";	
		tdObserva.style.borderBottom = "1px solid gray";		
				
		var obj1 = document.getElementById("divMdg");	
		var obj2 = document.getElementById("divCmc");
		var obj3 = document.getElementById("divDmc");
		var obj4 = document.getElementById("divRsd");
		var obj5 = document.getElementById("divObs");		

		obj2.style.display = 'none';
		obj3.style.display = 'none';
		obj4.style.display = 'none';
		obj5.style.display = 'none';		

		if(obj1.style.display == 'block')
		    obj1.style.display = 'none';
		else
		    obj1.style.display = 'block';
	}
function FdivObs()
	{
		tdresidencial.style.borderBottom = "1px solid gray";
		tdDomicilio.style.borderBottom = "1px solid gray";
		tdComercial.style.borderBottom = "1px solid gray";
		tdMedidas.style.borderBottom = "1px solid gray";
		tdObserva.style.borderBottom = "0px";	
		var obj1 = document.getElementById("divObs");			
		var obj2 = document.getElementById("divMdg");	
		var obj3 = document.getElementById("divCmc");
		var obj4 = document.getElementById("divDmc");
		var obj5 = document.getElementById("divRsd");

		obj2.style.display = 'none';
		obj3.style.display = 'none';
		obj4.style.display = 'none';
		obj5.style.display = 'none';

		if(obj1.style.display == 'block')
		    obj1.style.display = 'none';
		else
		    obj1.style.display = 'block';
	}
	function FdivTelefone(ndiv)
	{
		var obj1 = document.getElementById("divFnRsd");
		var obj2 = document.getElementById("divFnCmc");
		var obj3 = document.getElementById("divFnRcd");
		var obj4 = document.getElementById("divFnCll");

		if(ndiv.value == '0')
		{
		    obj1.style.display = 'none';
		    obj2.style.display = 'none';
		    obj3.style.display = 'none';
		    obj4.style.display = 'none';
		}
		if(ndiv.value == '1')
		{
		    obj1.style.display = 'block';
		    if ((window.document.forms[0].ddi_2.value != "")||(window.document.forms[0].ddd_2.value != "")||(window.document.forms[0].num_2.value != ""))
		        obj2.style.display = 'block';
			else
		    	obj2.style.display = 'none';
		    if ((window.document.forms[0].ddi_3.value != "")||(window.document.forms[0].ddd_3.value != "")||(window.document.forms[0].num_3.value != ""))
		        obj3.style.display = 'block';
			else
		    	obj3.style.display = 'none';
		    if ((window.document.forms[0].ddi_4.value != "")||(window.document.forms[0].ddd_4.value != "")||(window.document.forms[0].num_4.value != ""))
		        obj4.style.display = 'block';
			else
		    	obj4.style.display = 'none';
		}
		if(ndiv.value == '2')
		{
		    obj2.style.display = 'block';
		    if ((window.document.forms[0].ddi_1.value != "")||(window.document.forms[0].ddd_1.value != "")||(window.document.forms[0].num_1.value != ""))
		        obj1.style.display = 'block';
			else
		    	obj1.style.display = 'none';
		    if ((window.document.forms[0].ddi_3.value != "")||(window.document.forms[0].ddd_3.value != "")||(window.document.forms[0].num_3.value != ""))
		        obj3.style.display = 'block';
			else
		    	obj3.style.display = 'none';
		    if ((window.document.forms[0].ddi_4.value != "")||(window.document.forms[0].ddd_4.value != "")||(window.document.forms[0].num_4.value != ""))
		        obj4.style.display = 'block';
			else
		    	obj4.style.display = 'none';
		}
		if(ndiv.value == '3')
		{
		    obj3.style.display = 'block';
		    if ((window.document.forms[0].ddi_1.value != "")||(window.document.forms[0].ddd_1.value != "")||(window.document.forms[0].num_1.value != ""))
		        obj1.style.display = 'block';
			else
		    	obj1.style.display = 'none';
		    if ((window.document.forms[0].ddi_2.value != "")||(window.document.forms[0].ddd_2.value != "")||(window.document.forms[0].num_2.value != ""))
		        obj2.style.display = 'block';
			else
		    	obj2.style.display = 'none';
		    if ((window.document.forms[0].ddi_4.value != "")||(window.document.forms[0].ddd_4.value != "")||(window.document.forms[0].num_4.value != ""))
		        obj4.style.display = 'block';
			else
		    	obj4.style.display = 'none';
		}
		if(ndiv.value == '4')
		{
		    obj4.style.display = 'block';
		    if ((window.document.forms[0].ddi_1.value != "")||(window.document.forms[0].ddd_1.value != "")||(window.document.forms[0].num_1.value != ""))
		        obj1.style.display = 'block';
			else
		    	obj1.style.display = 'none';
		    if ((window.document.forms[0].ddi_2.value != "")||(window.document.forms[0].ddd_2.value != "")||(window.document.forms[0].num_2.value != ""))
		        obj2.style.display = 'block';
			else
		    	obj2.style.display = 'none';
		    if ((window.document.forms[0].ddi_3.value != "")||(window.document.forms[0].ddd_3.value != "")||(window.document.forms[0].num_3.value != ""))
		        obj3.style.display = 'block';
			else
		    	obj3.style.display = 'none';
		}
	}	