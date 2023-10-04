const sumAll = function (num1, num2) {
    let sum = 0
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num1) || (!Number.isInteger(num2))) return "ERROR";
    if (num1 > num2) {
        const numTemp = num1;
        num1 = num2;
        num2 = numTemp;
    }
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;




/* 
create variable sum
sort x < y
x <= y, add x to sum, x++

*/