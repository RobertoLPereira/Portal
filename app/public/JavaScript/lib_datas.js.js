// --------------------------- 
// Atenção no escopo do HTML insira
// --------------------------- 
// <script language="JavaScript" src="[caminho]/lib_datas.js" 
//   type="text/javascript"></script>
// --------------------------- 

var navega = veNavega();
var strSepData = "/"; 
var err = 0;
var vYearType = 4; 	// Ano com 2 ou 4 dígitos

// --------------------------- 
// Funções para Datas
// --------------------------- 

function mensErro(vDateName, erro) {
  alert("Data inválida." + // vDateName.value + 
    "\nPor favor Insira novamente");
  vDateName.value = "";
  vDateName.focus();
  vDateName.select();
}  

function DatFormato1(vDateName, vDateValue, e, dateCheck, dateType) {
  var isNav4 = false;
  var isNav5 = false;
  var isIE4 = false;
  
  switch (navega) {
    case 0: isNav4 = true; break;
    case 1: isNav5 = true; break;
    default: isIE4 = true; break;
  }

  vDateType = dateType;
  if (vDateValue == "~") {
    alert("AppVersion = "+navigator.appVersion+" \nNav. 4 Version = "+isNav4+" \nNav. 5 Version = "+isNav5
      +" \nIE Version = "+isIE4+" \nYear Type = "+vYearType+" \nDate Type = "+vDateType
      +" \nSeparator = "+strSepData);
    vDateName.value = "";
    vDateName.focus();
    return true;
  }

  var whichCode = (window.Event) ? e.which : e.keyCode;

  // Check to see if a seperator is already present.
  // bypass the date if a seperator is present and the length greater than 8
  if (vDateValue.length > 8 && isNav4) {
    if ((vDateValue.indexOf("-") >= 1) || (vDateValue.indexOf("/") >= 1)) return true;
  }
  
  // Elimina todos os códigos ASCII não válidos
  var alphaCheck = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
  if (alphaCheck.indexOf(vDateValue) >= 1) {
    if (isNav4) {
      mensErro(vDateName,1);
      return false;
    } else {
      vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
      return false;
    }
  }
  if (whichCode == 8) { // Ignore the Netscape value for backspace. IE has no value
    return false;
  } else {
    // Create numeric string values for 0123456789/
    // The codes provided include both keyboard and keypad values
    var strCheck = '47,48,49,50,51,52,53,54,55,56,57,58,59,95,96,97,98,99,100,101,102,103,104,105';
    if (strCheck.indexOf(whichCode) != -1) {
      if (isNav4) {
        if (((vDateValue.length < 6 && dateCheck) || (vDateValue.length == 7 && dateCheck)) && (vDateValue.length >=1)) {
          mensErro(vDateName,2);
          return false;
        }
        if (vDateValue.length == 6 && dateCheck) {
          var mDay = vDateName.value.substr(2,2);
          var mMonth = vDateName.value.substr(0,2);
          var mYear = vDateName.value.substr(4,4);
          // Turn a two digit year into a 4 digit year
          if (mYear.length == 2 && vYearType == 4) {
            var mToday = new Date();
            // If the year is greater than 30 years from now use 19, otherwise use 20
            var checkYear = mToday.getFullYear() + 30; 
            var mCheckYear = '20' + mYear;
            if (mCheckYear >= checkYear) 
              mYear = '19' + mYear;
            else 
              mYear = '20' + mYear;
          }
          var vDateValueCheck = mMonth+strSepData+mDay+strSepData+mYear;
          if (!dateValid(vDateValueCheck)) {
            mensErro(vDateName,3);
            return false;
          }
          return true;
        } else {
          // Reformat the date for validation and set date type to a 1
          if (vDateValue.length >= 8  && dateCheck) {
            switch (vDateType) {
              case 3: // ddmmyyyy
                var mMonth = vDateName.value.substr(2,2);
                var mDay = vDateName.value.substr(0,2);
                var mYear = vDateName.value.substr(4,4)
                vDateName.value = mDay+strSepData+mMonth+strSepData+mYear;
                break;
              case 2: // yyyymmdd
                var mYear = vDateName.value.substr(0,4)
                var mMonth = vDateName.value.substr(4,2);
                var mDay = vDateName.value.substr(6,2);
                vDateName.value = mYear+strSepData+mMonth+strSepData+mDay;
                break;
              default: // mmddyyyy
                var mDay = vDateName.value.substr(2,2);
                var mMonth = vDateName.value.substr(0,2);
                var mYear = vDateName.value.substr(4,4)
                vDateName.value = mMonth+strSepData+mDay+strSepData+mYear;
                break;
            }
            // Create a temporary variable for storing the DateType and change
            // the DateType to a 1 for validation.
            var vDateTypeTemp = vDateType;
            vDateType = 1;
            var vDateValueCheck = mMonth+strSepData+mDay+strSepData+mYear;
            if (!dateValid(vDateValueCheck)) {
              mensErro(vDateName,4);
              return false;
            }
            vDateType = vDateTypeTemp;
            return true;
          } else {
            if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) 
              && (vDateValue.length >=1)) {
              mensErro(vDateName,5);
              return false;
            }
          }
        }
      } else { // Non isNav Check
        if (((vDateValue.length < 8 && dateCheck) || (vDateValue.length == 9 && dateCheck)) 
          && (vDateValue.length >=1)) {
          mensErro(vDateName,6);
          return false;
        }
        // Reformat date to format that can be validated. mm/dd/yyyy
        if (vDateValue.length >= 8 && dateCheck) {
          // Additional date formats can be entered here and parsed out to
          // a valid date format that the validation routine will recognize.
          switch (vDateType) {
            case 3: // ddmmyyyy
              var mDay = vDateName.value.substr(0,2);
              var mMonth = vDateName.value.substr(3,2);
              var mYear = vDateName.value.substr(6,4);
              break;
            case 2: // yyyy/mm/dd
              var mYear = vDateName.value.substr(0,4)
              var mMonth = vDateName.value.substr(5,2);
              var mDay = vDateName.value.substr(8,2);
              break;
            default: // mm/dd/yyyy
              var mMonth = vDateName.value.substr(0,2);
              var mDay = vDateName.value.substr(3,2);
              var mYear = vDateName.value.substr(6,4);
          }
          // Create temp. variable for storing the current vDateType
          var vDateTypeTemp = vDateType;
          // Change vDateType to a 1 for standard date format for validation
          // Type will be changed back when validation is completed.
          vDateType = 1; // Store reformatted date to new variable for validation.
          var vDateValueCheck = mMonth+strSepData+mDay+strSepData+mYear;
          if (vDateValueCheck.length >= 8 && dateCheck) {
            // Turn a two digit year into a 4 digit year
            if (mYear.length == 2 && vYearType == 4) {
              var mToday = new Date();
              // If the year is greater than 30 years from now use 19, otherwise use 20
              var checkYear = mToday.getFullYear() + 30; 
              var mCheckYear = '20' + mYear;
              if (mCheckYear >= checkYear) 
                mYear = '19' + mYear;
              else 
                mYear = '20' + mYear;
            }

            vDateValueCheck = mMonth+strSepData+mDay+strSepData+mYear;
          } 
          if (!dateValid(vDateValueCheck)) {
            mensErro(vDateName,7);
            return false;
          }
          vDateType = vDateTypeTemp;
          switch (vDateType) {
            case 3: // ddmmyyyy
              vDateName.value = mDay+strSepData+mMonth+strSepData+mYear;
            case 2: // yyyy/mm/dd
              vDateName.value = mYear+strSepData+mMonth+strSepData+mDay;
            default: // mm/dd/yyyy
              vDateName.value = mMonth+strSepData+mDay+strSepData+mYear;
          } 
          return true;
        } else {
          if (vDateType == 1) {
            if (vDateValue.length == 2) {
              vDateName.value = vDateValue+strSepData;
            }
            if (vDateValue.length == 5) {
              vDateName.value = vDateValue+strSepData;
            }
          }
          if (vDateType == 2) {
            if (vDateValue.length == 4) {
              vDateName.value = vDateValue+strSepData;
            }
            if (vDateValue.length == 7) {
              vDateName.value = vDateValue+strSepData;
            }
          }
          if (vDateType == 3) {
            if (vDateValue.length == 2) {
              vDateName.value = vDateValue+strSepData;
            }
            if (vDateValue.length == 5) {
              vDateName.value = vDateValue+strSepData;
            }
          }
          return true;
        }
      }
      if (vDateValue.length == 10 && dateCheck) {
        if (!dateValid(vDateName)) {
          mensErro(vDateName,8);
          return false;
        }
      }
      return false;
    } else {
      // If the value is not in the string return the string minus the last
      // key entered.
      if (isNav4) {
        vDateName.value = "";
        vDateName.focus();
        vDateName.select();
        return false;
      } else {
        vDateName.value = vDateName.value.substr(0, (vDateValue.length-1));
        return false;
      }
    }
  }
}

function dateValid(objName) {
  var strDate;
  var strDateArray;
  var strDay;
  var strMonth;
  var strYear;
  var intday;
  var intMonth;
  var intYear;
  var booFound = false;
  var datefield = objName;
  var strSeparatorArray = new Array("-"," ","/",".");
  var intElementNr;
  var strMonthArray = new Array(12);
  strMonthArray[0] = "Jan";
  strMonthArray[1] = "Feb";
  strMonthArray[2] = "Mar";
  strMonthArray[3] = "Apr";
  strMonthArray[4] = "May";
  strMonthArray[5] = "Jun";
  strMonthArray[6] = "Jul";
  strMonthArray[7] = "Aug";
  strMonthArray[8] = "Sep";
  strMonthArray[9] = "Oct";
  strMonthArray[10] = "Nov";
  strMonthArray[11] = "Dec";
  // strDate = datefield.value;
  strDate = objName;
  if (strDate.length < 1) {
    return true;
  }
  for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++) {
    if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1) {
      strDateArray = strDate.split(strSeparatorArray[intElementNr]);
      if (strDateArray.length != 3) {
        err = 1;
        return false;
      } else {
        strDay = strDateArray[0];
        strMonth = strDateArray[1];
        strYear = strDateArray[2];
      }
      booFound = true;
    }
  }
  if (booFound == false) {
    if (strDate.length>5) {
      strDay = strDate.substr(0, 2);
      strMonth = strDate.substr(2, 2);
      strYear = strDate.substr(4);
    }
  }
  // Ajusta os anos
  if (strYear.length == 2) {
    strYear = '20' + strYear;
  }
  intday = parseInt(strDay, 10);
  if (isNaN(intday)) {
    err = 2;
    return false;
  }
  intMonth = parseInt(strMonth, 10);
  if (isNaN(intMonth)) {
    for (i = 0;i<12;i++) {
      if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase()) {
        intMonth = i+1;
        strMonth = strMonthArray[i];
        i = 12;
      }
    }
    if (isNaN(intMonth)) {
      err = 3;
      return false;
    }
  }
  intYear = parseInt(strYear, 10);
  if (isNaN(intYear)) {
    err = 4;
    return false;
  }
  if (intMonth>12 || intMonth<1) {
    err = 5;
    return false;
  }
  if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1)) {
    err = 6;
    return false;
  }
  if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1)) {
    err = 7;
    return false;
  }
  if (intMonth == 2) {
    if (intday < 1) {
      err = 8;
      return false;
    }
    if (LeapYear(intYear) == true) {
      if (intday > 29) {
        err = 9;
        return false;
      }
    } else {
      if (intday > 28) {
        err = 10;
        return false;
      }
    }
  }
  return true;
}

function LeapYear(intYear) {
  if (intYear % 100 == 0) {
    if (intYear % 400 == 0) {
      return true;
    }
  } else {
    if ((intYear % 4) == 0) {
      return true;
    }
  }
  return false;
}

// --------------------------- 
// Funções de Apoio
// --------------------------- 

function veNavega() {
  var navega = 2;  // IE

  // Verifica o Navegador
  if (navigator.appName == "Netscape") {
    if (navigator.appVersion < "5") {
      navega = 0;
    } else {
      if (navigator.appVersion > "4") {
        navega = 1;
      }
    }
  }
  return navega; 
}

// --------------------------- 
// Final
// --------------------------- 
