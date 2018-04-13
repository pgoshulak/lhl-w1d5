luhn = {}

luhn.validate = (num) => {
  var numString = String(num)

  // Split num into array of digits
  var digitsArray = numString.split('').map((str) => {
    return Number(str);
  });
  
  // Double every other digit (moving backward through array)
  var evensDoubled = digitsArray.reverse().map((num, index) =>{
    if (index % 2) return num * 2
    return num
  })

  // Turn double digits into single-digit sum of digits
  // eg. 14->7, 18->9
  var singleDigits = evensDoubled.map((num) => {
    if (num >= 10) return num - 9;
    return num;
  })

  // Add digits
  var sum = singleDigits.reduce((acc, curr) => {
    return acc + curr
  }, 0);

  // Return true if divisible by 10 (ie. number is valid)
  if (sum % 10 === 0) return true
  return false
};

module.exports = luhn;