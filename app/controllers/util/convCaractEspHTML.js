function	convCaractEspHTML(passa){
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
}