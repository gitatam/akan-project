function fetchAkanName(){
  var _day = Number(document.getElementById("day").value);
  var _month = Number(document.getElementById("month").value);
  var _year = Number(document.getElementById("year").value);

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
      alert("Key in an appropriate date");
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
      alert("No gender selected.");
    }
    return _gender;
  }
  var _gender = fetchGender();

}
