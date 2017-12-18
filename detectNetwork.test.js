
// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
 var FILL_ME_IN = 'Fill this value in';
 
// A Mocha test is just a function!
// If the function throws an error when run, it fails.
// If it doesn't throw an error when run, it doesn't fail. 
// To read more about mocha, visit mochajs.org

// it('Throws an error so it fails', function() {
//   throw new Error('Delete me!');
//  });

//  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
// This test doesn't really test anything at all! It will pass no matter what.
//   var even = function(num){
//     return num/2 === 0;
//    }
//    return even(10) === true;
//  });

// In tests, we want to compare the expected behavior to the actual behavior.
// A test should only fail if the expected behavior doesn't match the actual.

//it('Throws an error when expected behavior does not match actual behavior', function() {
//   var even = function(num){
//    return num/2 === 0;
//  }
//  if(even(10) !== true) {
//     throw new Error('10 should be even!');
//   }
//  });
//});

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {

  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {

  var assert = chai.assert.equal;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012'), 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345'), 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678'), 'Visa');
  });
});

describe('MasterCard', function() {

  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16');
  it('has a prefix of 6011 and a length of 19');
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
});

describe('should support China UnionPay')
describe('should support Switch')
