const convertToCelsius = function(temp_fahrenheit) {
  return Math.round(((temp_fahrenheit-32)*5/9)*10) /10
};

const convertToFahrenheit = function(temp_celsius) {
  return Math.round(((temp_celsius*9/5)+32)*10) /10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
