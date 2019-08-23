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
  var _day_number;

  //method to get day of week born.
  var CC = _year.slice(0, 2);
  var YY = _year.toString().slice(2, 4);
  var MM = _month;
  var DD = _day;

  var index = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
  alert(index);
}
