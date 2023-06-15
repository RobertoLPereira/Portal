/*function TrataCaracterEspeciais(passa){
	this._passa = passa;
}
TrataCaracterEspeciais.prototype.retiraCaracterEspecial = function(passa, callback){
	      passa = passa.replaceAll("[Â?ÁÄ?]","A");
	      passa = passa.replaceAll("[â??áä]","a");
	      passa = passa.replaceAll("[??ÉË]","E");
	      passa = passa.replaceAll("[??éë]","e");
	      passa = passa.replaceAll("ÎÍ??","I");
	      passa = passa.replaceAll("îí??","i");
	      passa = passa.replaceAll("[Ô??ÓÖ]","O");
	      passa = passa.replaceAll("[ô??óö]","o");
	      passa = passa.replaceAll("[??ÚÜ]","U");
	      passa = passa.replaceAll("[?ú?ü]","u");
	      passa = passa.replaceAll("Ç","C");
	      passa = passa.replaceAll("ç","c");
	      passa = passa.replaceAll("[ý?]","y");
	      passa = passa.replaceAll("Ý","Y");
	      passa = passa.replaceAll("?","n");
	      passa = passa.replaceAll("?","N");
	      passa = passa.replaceAll("['<>\\|/]","");
	      return passa;
}
TrataCaracterEspeciais.prototype.convCaractEspHTML = function(passa, callback){
      passa = passa.replaceAll("[Â?ÁÄ?]","&#195;");
      passa = passa.replaceAll("[â??áä]","&#226;");
      passa = passa.replaceAll("[??ÉË]","&#201;");
      passa = passa.replaceAll("[??éë]","&#233;");
      passa = passa.replaceAll("ÎÍ??","&#205;");
      passa = passa.replaceAll("îí??","&#237;");
      passa = passa.replaceAll("[Ô??ÓÖ]","&#212;");
      passa = passa.replaceAll("[ô??óö]","&#244;");
      passa = passa.replaceAll("[??ÚÜ]","&#218;");
      passa = passa.replaceAll("[?ú?ü]","&#250;");
      passa = passa.replaceAll("Ç","&#199;");
      passa = passa.replaceAll("ç","&#231;");
      passa = passa.replaceAll("[ý?]","&#221;");
      passa = passa.replaceAll("Ý","&#221;");
      passa = passa.replaceAll("?","&#241;");
      passa = passa.replaceAll("?","&#209;");
      passa = passa.replaceAll("['<>\\|/]","");
      return passa;
}
TrataCaracterEspeciais.prototype.convCaractIdevido =  function(passa, callback){
    passa = passa.replaceAll("\\n","");
    return passa;
}
TrataCaracterEspeciais.prototype.convCaractHTML =  function(passa, callback){
	    		passa = passa.replaceAll("&uuml;", "ü");
	    		passa = passa.replaceAll("&Uuml;", "Ü");
	    		passa = passa.replaceAll("&yacute;", "ý");
	    		passa = passa.replaceAll("&Yacute;", "Ý");
	    		passa = passa.replaceAll("&yuml;", "?");
	    		passa = passa.replaceAll("&Yuml;", "?");
	    		passa = passa.replaceAll("&aelig;", "?");
	    		passa = passa.replaceAll("&AElig;", "?");
	    		passa = passa.replaceAll("&oelig;", "?");
	    		passa = passa.replaceAll("&OElig;", "&oelig;");
	    		passa = passa.replaceAll("&dagger;", "†");
	    		passa = passa.replaceAll("&Dagger;", "‡");
	    		passa = passa.replaceAll("&scaron;", "š");
	    		passa = passa.replaceAll("&Scaron;", "Š");
	    		passa = passa.replaceAll("&thorn;", "?");
	    		passa = passa.replaceAll("&THORN;", "?");
	    		passa = passa.replaceAll("&eth;", "?");
	    		passa = passa.replaceAll("&ETH;", "?");

	    		passa = passa.replaceAll("", "	");
	    		passa = passa.replaceAll("&ntilde;", "?");
	    		passa = passa.replaceAll("&Ntilde;", "?");
	    		passa = passa.replaceAll("&iexcl;", "?");
	    		passa = passa.replaceAll("&iquest;", "?");
	    		passa = passa.replaceAll("&fnof;", "?");
	    		passa = passa.replaceAll("&szlig;", "ß");
	    		passa = passa.replaceAll("&micro;", "µ");
	    		passa = passa.replaceAll("&auml;", "ä");
	    		passa = passa.replaceAll("&iuml;", "?");
	    		passa = passa.replaceAll("&Iuml;", "?");
	    		passa = passa.replaceAll("&igrave;", "?");
	    		passa = passa.replaceAll("&Igrave;", "?");
	    		passa = passa.replaceAll("&icirc;", "î");
	    		passa = passa.replaceAll("&Icirc;", "Î");
	    		passa = passa.replaceAll("&Auml;", "Ä");
	    		passa = passa.replaceAll("&aring;", "?");
	    		passa = passa.replaceAll("&Aring;", "?");
	    		passa = passa.replaceAll("&euml;", "ë");
	    		passa = passa.replaceAll("&Euml;", "Ë");
	    		passa = passa.replaceAll("&grave;", "?");
	    		passa = passa.replaceAll("&ouml;", "ö");
	    		passa = passa.replaceAll("&Ouml;", "Ö");
	    		passa = passa.replaceAll("&ograve;", "?");
	    		passa = passa.replaceAll("&Ograve;", "?");
	    		passa = passa.replaceAll("&ugrave;", "?");
	    		passa = passa.replaceAll("&Ugrave;", "?");
	    		passa = passa.replaceAll("&ucirc;", "?");
	    		passa = passa.replaceAll("?", "?");

	    		passa = passa.replaceAll("&nbsp;", " ");
	    		passa = passa.replaceAll("&amp;", "&");
	    		passa = passa.replaceAll("&circ;", "?");
	    		passa = passa.replaceAll("&tilde;", "~");
	    		passa = passa.replaceAll("&uml;", "¨");
	    		passa = passa.replaceAll("&cute;", "´");
	    		passa = passa.replaceAll("&cedil;", "¸");
	    		passa = passa.replaceAll("&quot;", "\"");
	    		passa = passa.replaceAll("&ldquo;", "“");
	    		passa = passa.replaceAll("&bdquo;", "„");
	    		passa = passa.replaceAll("&ordm;", "?");
	    		passa = passa.replaceAll("&ordf;", "?");
	    		passa = passa.replaceAll("&bull;", "•");
	    		passa = passa.replaceAll("&ndash;", "–");
	    		passa = passa.replaceAll("&mdash;", "—");
	    		passa = passa.replaceAll("&macr;", "?");
	    		passa = passa.replaceAll("&para;", "¶");
	    		passa = passa.replaceAll("&sect;", "§");
	    		passa = passa.replaceAll("&aacute;", "á");
	    		passa = passa.replaceAll("&Aacute;", "Á");
	    		passa = passa.replaceAll("&atilde;", "?");
	    		passa = passa.replaceAll("&Atilde;", "?");
	    		passa = passa.replaceAll("&acirc;", "â");
	    		passa = passa.replaceAll("&Acirc;", "Â");
	    		passa = passa.replaceAll("&agrave;", "?");
	    		passa = passa.replaceAll("&Agrave;", "?");
	    		passa = passa.replaceAll("&eacute;", "é");
	    		passa = passa.replaceAll("&Eacute;", "É");
	    		passa = passa.replaceAll("&ecirc;", "?");
	    		passa = passa.replaceAll("&Ecirc;", "?");
	    		passa = passa.replaceAll("&iacute;", "í");
	    		passa = passa.replaceAll("&Iacute;", "Í");
	    		passa = passa.replaceAll("&oacute;", "ó");
	    		passa = passa.replaceAll("&Oacute;", "Ó");
	    		passa = passa.replaceAll("&otilde;", "?");
	    		passa = passa.replaceAll("&Otilde;", "?");
	    		passa = passa.replaceAll("&ocirc;", "ô");
	    		passa = passa.replaceAll("&Ocirc;", "Ô");
	    		passa = passa.replaceAll("&Oacute;", "ú");
	    		passa = passa.replaceAll("&Uacute;", "Ú");
	    		passa = passa.replaceAll("&ccedil;", "ç");
	    		passa = passa.replaceAll("&Ccedil;", "Ç");

	    		passa = passa.replaceAll("<p>", "	");
	    		passa = passa.replaceAll("</p>", "	");

	    		passa = passa.replaceAll("&#195;", "[Â?ÁÄ?]");
	    		passa = passa.replaceAll("&#226;", "[â??áä]");
	    		passa = passa.replaceAll("&#201;", "[??ÉË]");
	    		passa = passa.replaceAll("&#233;", "[??éë]");
	    		passa = passa.replaceAll("&#205;", "ÎÍ??");
	    		passa = passa.replaceAll("&#237;", "îí??");
	    		passa = passa.replaceAll("&#212;", "[Ô??ÓÖ]");
	    		passa = passa.replaceAll("&#244;", "[ô??óö]");
	    		passa = passa.replaceAll("&#218;", "[??ÚÜ]");
	    		passa = passa.replaceAll("&#250;", "[?ú?ü]");
	    		passa = passa.replaceAll("&#199;", "Ç");
	    		passa = passa.replaceAll("&#231;", "ç");
	    		passa = passa.replaceAll("&#221;", "[ý?]");
	    		passa = passa.replaceAll("&#221;", "Ý");
	    		passa = passa.replaceAll("&#241;", "?");
	    		passa = passa.replaceAll("&#209;", "?");
	    		passa = passa.replaceAll("['<>\\|/]", "");
	    		return passa;
}
module.exports = function(){
	return TrataCaracterEspeciais;
}

function TrataCaracterEspeciais(texto){ 
    this.passa = texto; 
    this.convCaractEspHTML = function(){
      this.passa = this.passa.replaceAll("[Â?ÁÄ?]","&#195;");
      this.passa = this.passa.replaceAll("[â??áä]","&#226;");
      this.passa = this.passa.replaceAll("[??ÉË]","&#201;");
      this.passa = this.passa.replaceAll("[??éë]","&#233;");
      this.passa = this.passa.replaceAll("ÎÍ??","&#205;");
      this.passa = this.passa.replaceAll("îí??","&#237;");
      this.passa = this.passa.replaceAll("[Ô??ÓÖ]","&#212;");
      this.passa = this.passa.replaceAll("[ô??óö]","&#244;");
      this.passa = this.passa.replaceAll("[??ÚÜ]","&#218;");
      this.passa = this.passa.replaceAll("[?ú?ü]","&#250;");
      this.passa = this.passa.replaceAll("Ç","&#199;");
      this.passa = this.passa.replaceAll("ç","&#231;");
      this.passa = this.passa.replaceAll("[ý?]","&#221;");
      this.passa = this.passa.replaceAll("Ý","&#221;");
      this.passa = this.passa.replaceAll("?","&#241;");
      this.passa = this.passa.replaceAll("?","&#209;");
      this.passa = this.passa.replaceAll("['<>\\|/]","");
      return this.passa;
	};
} 
module.exports = function(){
	return TrataCaracterEspeciais;
}
*/
