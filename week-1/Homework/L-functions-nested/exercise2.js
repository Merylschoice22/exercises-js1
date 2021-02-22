function nameUppercase(name) {
    return name.toUpperCase();
}

function greeting() {
    
    return `HELLO ${nameUppercase(mentor1)} \nHELLO ${nameUppercase(mentor2)}`
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(greeting());