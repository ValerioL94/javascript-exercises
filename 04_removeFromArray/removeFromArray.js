const removeFromArray = function (array, ...args) {
    const result = [];
    array.forEach((value) => {
        if (!args.includes(value)) {
            result.push(value);
        }
    });
    return result;
};


// Do not edit below this line
module.exports = removeFromArray;
