function fetchAkanName(){
  var _day = parseInt(document.getElementById("day").value);
  var _month = parseInt(document.getElementById("month").value);
  var _year = parseInt(document.getElementById("year").value);

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

}
