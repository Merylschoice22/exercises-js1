function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

function secondMatchesAmy(array) {
  if (array[1].includes("Amy")) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(["Giorgio", "Amy", "Lucaamy"]))
