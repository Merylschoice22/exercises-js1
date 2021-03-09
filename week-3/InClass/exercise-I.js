const strings = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

function unmessyString(messyStrings) {
  messyStrings
  .filter((string) => typeof string === "string")
  .map((string) => string.toUpperCase());
  return messyStrings;

}

console.log(unmessyString(strings));

/* IN CLASS DEMO */
// function formatName(name) {
//   return name.split("")[0].toUpperCase() + name.slice(1);
// }

// function log(name, index) {
//   console.log(index + ": " + name);
// }

// const namesFormatted = names.map(formatName);
// namesFormatted.forEach(log);

// console.log(formatName("giorgio"));