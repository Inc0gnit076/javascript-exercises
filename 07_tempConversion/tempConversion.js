const ftoc = function(temp) {
  let celsius = (temp - 32) * (5/9);
  return parseFloat(celsius.toFixed(1));

};

const ctof = function(temp) {
  let f = temp * 9 / 5 + 32;
  return parseFloat(f.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
