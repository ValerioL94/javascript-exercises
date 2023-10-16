const fibonacci = function (n) {
    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= n; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;


// fibonacci 4 => 1, 1, 2, 3 => 3