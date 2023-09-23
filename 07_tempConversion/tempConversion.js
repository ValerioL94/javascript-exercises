const convertToCelsius = function (temp) {
  let notRounded = ((temp - 32) * 5 / 9);
  const rounded = Math.round(notRounded * 10) / 10;
  return rounded;

};

const convertToFahrenheit = function (temp) {
  let notRounded = (temp * 9 / 5 + 32);
  const rounded = Math.round(notRounded * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



/* 
const rounded = Math.round(num * 10) / 10
x °C ≘ (x × 9/5 + 32) °F
x °F ≘ (x − 32) × 5/9 °C
*/