function fetchAkanName(){
  var _day = Number(document.getElementById("day").value);
  var _month = Number(document.getElementById("month").value);
  var _year = Number(document.getElementById("year").value);

  var _male = document.getElementById("male");
  var _female = document.getElementById("female");

  // A function to get user's choice of gender
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

  //A function to ensure only correct days entered.
  function validateDayEntry(){
    if(_day < 1 || _day >31){
      alert("Key in an appropriate date");
      return false;
    } else {
      return true;
    }
  }

}
