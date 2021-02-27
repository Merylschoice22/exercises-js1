let numberOfStudents = 11;
let numberOfMentors = 4;
let sum = numberOfStudents + numberOfMentors;
console.log(Math.round(sum));

let messagePerSs = "Percentage of Students: ";
let messagePerMen = "Percentage of Mentors: ";
let answerSs = Math.round(numberOfStudents / sum * 100) + "%";
let answerMen = Math.round(numberOfMentors / sum * 100) + "%";
console.log(messagePerSs + answerSs)
console.log(messagePerMen + answerMen)