const repeatString = function( word , n) { 
    let answer = [];
    if (n < 0) {
        return ("ERROR");
    }
    else {
    for (let i = 0 ; i < n; i++) {
        answer.push(word);
    }
    answer = answer.join("");
    return (answer);
    }
}

// Do not edit below this line
module.exports = repeatString;
