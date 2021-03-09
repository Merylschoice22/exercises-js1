/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUK(country) {
  return ukNations.includes(country); // complete this statement
}

ukNations
.filter((country) => !isInUK(country))
.forEach((country) => console.log(country));
console.log(ukNations);

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
