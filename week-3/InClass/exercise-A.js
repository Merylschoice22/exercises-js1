// Create an array with the names of the people on your table
// console.log out the names and how many people are at the table
// Put someone from another table at the beginning of the array
// Add someone else to the end of the list

let arr = ["Ali", "Omar", "Miguel"];
arr [0] = "Enia";
arr[arr.length -1] = "Kiki";
arr.push("Keti");
arr.unshift();
for (i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr.length);
