

function percentage(students, mentors) {
    let classTotal = students + mentors;
    let studentPercentage = Math.round(students / classTotal * 100);
    let mentorPercentage = Math.round(mentors / classTotal * 100);
    createMessage (studentPercentage, mentorPercentage);

}

function createMessage(percentageSs, percentageMentors) {
    let messageS = "Percentage students: " + percentageSs; 
    let messageM = "Percentage mentors: " + percentageMentors;
    console.log(messageS + '\n' + messageM);
}

percentage(10,2);
