function	retornaCaractEspicial(passa){
				passa = passa.replace("&aacute;", "á");
	    		passa = passa.replace("&Aacute;", "Á");
	    		passa = passa.replace("&atilde;", "?");
	    		passa = passa.replace("&Atilde;", "?");
	    		passa = passa.replace("&acirc;", "â");
	    		passa = passa.replace("&atilde","ã");
	    		passa = passa.replace("&Acirc;", "Â");
	    		passa = passa.replace("&Atilde;","Ã");
	    		passa = passa.replace("&agrave;", "?");
	    		passa = passa.replace("&Agrave;", "?");
	    		passa = passa.replace("&eacute;", "é");
	    		passa = passa.replace("&Eacute;", "É");
	    		passa = passa.replace("&ecirc;", "?");
	    		passa = passa.replace("&Ecirc;", "?");
	    		passa = passa.replace("&iacute;", "í");
	    		passa = passa.replace("&Iacute;", "Í");
	    		passa = passa.replace("&oacute;", "ó");
	    		passa = passa.replace("&Oacute;", "Ó");
	    		passa = passa.replace("&otilde;", "?");
	    		passa = passa.replace("&Otilde;", "?");
	    		passa = passa.replace("&ocirc;", "ô");
	    		passa = passa.replace("&Ocirc;", "Ô");
	    		passa = passa.replace("&Oacute;", "ú");
	    		passa = passa.replace("&Uacute;", "Ú");
	    		passa = passa.replace("&ccedil;", "ç");
	    		passa = passa.replace("&Ccedil;", "Ç");
	    	return passa;
	 }
	function	convCaractEspHTML(passa){
				passa = passa.replace(/á/g,"&aacute;");
	    		passa = passa.replace(/â/g,"&acirc;" );
	    		passa = passa.replace(/ã/g,"&atilde");
	    		passa = passa.replace(/Ã/g,"&Atilde;");
	    		passa = passa.replace(/é/g,"&eacute;" );
	    		passa = passa.replace(/É/g,"&Eacute;" );
	    		passa = passa.replace(/í/g,"&iacute;" );
	    		passa = passa.replace(/Í/g,"&Iacute;" );
	    		passa = passa.replace(/ó/g,"&oacute;" );
	    		passa = passa.replace(/Ó/g,"&Oacute;" );
	    		passa = passa.replace(/ô/g,"&ocirc;" );
	    		passa = passa.replace(/Ô/g,"&Ocirc;" );
	    		passa = passa.replace(/ú/g,"&Oacute;");
	    		passa = passa.replace(/Ú/g,"&Uacute;");
	    		passa = passa.replace(/ç/g,"&ccedil;");
	    		passa = passa.replace(/Ç/g,"&Ccedil;");
		      console.log(passa);
	      	return passa;
	}