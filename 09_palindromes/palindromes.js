const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedString = processedString.split("").reverse().join("");
    return processedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
