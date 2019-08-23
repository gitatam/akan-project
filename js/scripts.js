function fetchAkanName(){
  var _day = Number(document.getElementById("day").value);
  var _month = Number(document.getElementById("month").value);
  var _year = document.getElementById("year").value;

  //A function to ensure only correct days entered.
  function validateDayEntry(){
    if(_day < 1 || _day >31){
      return false;
    } else {
      return true;
    }
  }

  //A function to ensure only correct months entered.
  function validateMonthEntry(){
    if(_month < 1 || _month > 12){
      return false;
    }else {
      return true;
    }
  }

  // This will get user's choice of gender
  var _male = document.getElementById("male");
  var _female = document.getElementById("female");

  function fetchGender(){
    if(_male.checked==true){
      _gender = _male.value;
    } else if(_female.checked){
      _gender = _male.value;
    }  else {
      alert("Gender required!");
    }
    return _gender;
  }

  var _gender = fetchGender();
  var _validDay = validateDayEntry();
  var _validMonth = validateMonthEntry();

  //method to get day of week born.
  var CC = _year.slice(0, 2);
  var YY = _year.toString().slice(2, 4);
  var MM = _month;
  var DD = _day;

  var index = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
  var _day_of_the_week = index;

  // This will get the respective AKAN names
  var male_akan = ["Kwasi!", "Kwadwo!", "Kwabena!", "Kwaku!", "Yaw!", "Kofi!", "Kwame!"];
  var female_akan = ["Akosua!", "Adwoa!", "Abenaa!", "Akua!", "Yaa!", "Afua!", "Ama!"];

  if(_gender === "female" && _validDay && _validMonth){
    switch (_day_of_the_week){
      case 0:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[6];
      break;
      case 1:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[0];
      break;
      case 2:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[1];
      break;
      case 3:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[2];
      break;
      case 4:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[3];
      break;
      case 5:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[4];
      break;
      case 6:
      document.getElementById("output").innerHTML ="Your Akan name is: " + female_akan[5];
      break;
      default:
      alert("Wrong entries");
      break;
    }
  }else if (_gender === "male" && _validDay && _validMonth){
    switch (_day_of_the_week){
      case 0:
      document.getElementById("output").innerHTML = "Your Akan name is: " + male_akan[6];
      break;
      case 1:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[0];
      alert("Born on Sunday");
      break;
      case 2:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[1];
      break;
      case 3:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[2];
      alert("Your Akan name is: " + male_akan[2]);
      break;
      case 4:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[3];
      break;
      case 5:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[4];
      break;
      case 6:
      document.getElementById("output").innerHTML ="Your Akan name is: " + male_akan[5];
      break;
      default:
      alert("Check your browser settings");
      break;
    }
  }else {
    alert("Invalid details!")
  }
}
