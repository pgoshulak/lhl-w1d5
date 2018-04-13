const assert = require('chai').assert;
const validate = require('./luhn.js').validate;

describe('Luhn algorithm', () => {
  it('should return true if a number is valid', () => {
    var result = validate(79927398713)
    assert.isTrue(result);
  })

  it('should return false if a number is valid', () => {
    var result1 = validate(79927398712)
    var result2 = validate(79927398710)
    var result3 = validate(79927398715)
    assert.isFalse(result1);
    assert.isFalse(result2);
    assert.isFalse(result3);
  })
})