function convertAge(year) {
    return 2021 - year;
}

function canDrive(birthYear) {
    const age = convertAge(birthYear);
    if (age >= 17) {
        console.log(`Born in ${birthYear} can drive`)
    } else {
        console.log(`Born in ${birthYear} can drive in ${17- age} years.`);
    }
}

let birthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

birthYear.forEach(canDrive);
canDrive(birthYear[0]);