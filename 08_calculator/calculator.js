const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  return array.reduce((total,current) =>  total+=current,0)
};

const multiply = function(array) {
  return array.reduce((total,current) =>  total*=current)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
	let factorial = 1
  for (let a=num;a>0;a--) {factorial*=a}
  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
