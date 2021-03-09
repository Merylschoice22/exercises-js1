const scores = [99, 100, 55, 81, 30, 82];

function isHighScore(score) {
    if(score>= 80) {
        return true;
    } else {
        return false;
    }
}

const highScores = scores.filter(isHighScore);
console.log(highScores);



