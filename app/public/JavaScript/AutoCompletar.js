document.write('<style type="text/css">'+
					  '#listHolder{position:absolute;border:0;}'+
					  '.list{font-family:verdana;font-size:12;color:#000000;background:;}'+
			 '<\/style>')
function autocomplete(inp, arr) {
		  /*the autocomplete function takes two arguments,
		  the text field element and an array of possible autocompleted values:*/
		  var currentFocus;
		  /*execute a function when someone writes in the text field:*/
		  inp.addEventListener("input", function(e) {
		      var a, b, i, val = this.value;
		      /*close any already open lists of autocompleted values*/
		      closeAllLists();
		      if (!val) { return false;}
		      currentFocus = -1;
		      /*create a DIV element that will contain the items (values):*/
		      a = document.createElement("DIV");
		      a.setAttribute("id", this.id + "autocomplete-list");
		      a.setAttribute("class", "autocomplete-items");
		      /*append the DIV element as a child of the autocomplete container:*/
		      this.parentNode.appendChild(a);
		      /*for each item in the array...*/
		      for (i = 0; i < arr.length; i++) {
		        /*check if the item starts with the same letters as the text field value:*/
		        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
		          /*create a DIV element for each matching element:*/
		          b = document.createElement("DIV");
		          /*make the matching letters bold:*/
		          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
		          b.innerHTML += arr[i].substr(val.length);
		          /*insert a input field that will hold the current array item's value:*/
		          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
		          /*execute a function when someone clicks on the item value (DIV element):*/
		              b.addEventListener("click", function(e) {
		              /*insert the value for the autocomplete text field:*/
		              inp.value = this.getElementsByTagName("input")[0].value;
		              /*close the list of autocompleted values,
		              (or any other open lists of autocompleted values:*/
		              closeAllLists();
		          });
		          a.appendChild(b);
		        }
		      }
		  });
		  /*execute a function presses a key on the keyboard:*/
		  inp.addEventListener("keydown", function(e) {
		      var x = document.getElementById(this.id + "autocomplete-list");
		      if (x) x = x.getElementsByTagName("div");
		      if (e.keyCode == 40) {
		        /*If the arrow DOWN key is pressed,
		        increase the currentFocus variable:*/
		        currentFocus++;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 38) { //up
		        /*If the arrow UP key is pressed,
		        decrease the currentFocus variable:*/
		        currentFocus--;
		        /*and and make the current item more visible:*/
		        addActive(x);
		      } else if (e.keyCode == 13) {
		        /*If the ENTER key is pressed, prevent the form from being submitted,*/
		        e.preventDefault();
		        if (currentFocus > -1) {
		          /*and simulate a click on the "active" item:*/
		          if (x) x[currentFocus].click();
		        }
		      }
		  });
		  function addActive(x) {
		    /*a function to classify an item as "active":*/
		    if (!x) return false;
		    /*start by removing the "active" class on all items:*/
		    removeActive(x);
		    if (currentFocus >= x.length) currentFocus = 0;
		    if (currentFocus < 0) currentFocus = (x.length - 1);
		    /*add class "autocomplete-active":*/
		    x[currentFocus].classList.add("autocomplete-active");
		  }
		  function removeActive(x) {
		    /*a function to remove the "active" class from all autocomplete items:*/
		    for (var i = 0; i < x.length; i++) {
		      x[i].classList.remove("autocomplete-active");
		    }
		  }
		  function closeAllLists(elmnt) {
		    /*close all autocomplete lists in the document,
		    except the one passed as an argument:*/
		    var x = document.getElementsByClassName("autocomplete-items");
		    for (var i = 0; i < x.length; i++) {
		      if (elmnt != x[i] && elmnt != inp) {
		      x[i].parentNode.removeChild(x[i]);
		    }
		  }
		}
		/*execute a function when someone clicks in the document:*/
		document.addEventListener("click", function (e) {
		    closeAllLists(e.target);
		});
		}
function checkList(obj,nStr) {
	if(window.event){ 
		var k = event.keyCode;
	}else if(obj.which){ 
		var k = obj.which;
	} 
	//var k = event.keyCode;
	var T = findPosY(obj); //top
	var L = findPosX(obj); //left
	var list = document.getElementById('listHolder');

	if(!list) {
		var list = document.createElement('DIV');
		list.id = 'listHolder';
		document.body.appendChild(list);
	}

	list.style.top=(T+obj.offsetHeight);
	list.style.left=L;
	list.style.display='none';

	var txt=obj.value;

	if (txt) {
		var str='<select class="list"'+
				'onclick="setOption(\''+obj.id+'\',this.options[this.selectedIndex].value)"'+
				'onkeyup="if(k==13){setOption(\''+obj.id+'\','+
				'this.options[this.selectedIndex].value)};if(k==27){'+
				'document.getElementById(\'listHolder\').style.display=\'none\';'+
				'document.getElementById(\''+obj.id+'\').focus()};" id="selector" size="6">'
		var match=false
		for(a=0;a<nStr.length;a++){

			if(txt.toLowerCase()==nStr[a].toLowerCase().substring(0,txt.length)){
				match=true
				str+=('<option value="'+nStr[a].replace(/\'/gi,'’')+'">'+nStr[a]+'</option>')
			}
		}

		str+='</select>'
		if(match){
			list.innerHTML=str
			list.style.display='block'
			var sel=document.getElementById('selector')
			if(k=='40') {
				//alert("back space");
			   sel.focus();
			}

			if(k=='13'){
			   document.getElementById('listHolder').style.display='none'
			}
		}
	}
}

function setOption(obj,val){

	var obj=document.getElementById(obj)

	obj.value=val;
	obj.focus()
	document.getElementById('listHolder').style.display='none'
}

function findPosX(obj){
	var curleft=0;
	if(obj.offsetParent) {

		while(obj.offsetParent){
			curleft+=obj.offsetLeft
			obj=obj.offsetParent;
		}
	} else if(obj.x)
		curleft+=obj.x;
		return curleft;
}

function findPosY(obj){
	var curtop=0;
	if(obj.offsetParent){
		while(obj.offsetParent){
			curtop+=obj.offsetTop
			obj=obj.offsetParent;
		}
	} else if(obj.y)
		curtop+=obj.y;
		return curtop;
}