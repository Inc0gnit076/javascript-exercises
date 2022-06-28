const palindromes = function (str) {  
    var re = /[\W_]/g;
    newString = str.toLowerCase().replace(re, "")
    reverseString = newString.split("").reverse().join("");
    //reverseString = newString
    //final = reverseString
    return newString == reverseString;

};

// Do not edit below this line
module.exports = palindromes;
