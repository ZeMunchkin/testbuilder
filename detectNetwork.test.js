
/*
 - * You'll eventually be given instructions how to use this file
 - * If you want to use it before then, you'll have to figure it out yourself
 - */
  
  // You don't actually want to fill *this* value in on line 9, but you'll see
  // other places in this file where you'll replace the FILL_ME_IN with a
  // different value.
 //var FILL_ME_IN = 'Fill this value in';
   
 //describe('Introduction to Mocha Tests - READ ME FIRST', function() {
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
  
// Once you've read and understood this section, please comment it out. 
 // You will not be able to proceed with a failing test. 
 

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
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function () {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6444567890123456')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6444567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6454567890123456')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length og 19', function() {
    expect(detectNetwork('6454567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6464567890123456')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6464567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6474567890123456')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6474567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function () {
    expect(detectNetwork('6484567890123456')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function () {
    expect(detectNetwork('6484567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function () {
    expect(detectNetwork('6494567890123456')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function () {
    expect(detectNetwork('6494567890123456789')).to.equal('Discover');
  });
  
});


describe('Maestro', function() {
  
  var expect = chai.expect;
 
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501856789012')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50185678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50185678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502056789012')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50205678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502056789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50205678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502056789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503856789012')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50385678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50385678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630456789012')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63045678901234')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63045678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630456789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304567890123456789')).to.equal('Maestro');
  });

});

describe('China UnionPay', function () {

  var expect = chai.expect;

  it('has a prefix of 622126-622925 and a length of 16', function() {
    expect(detectNetwork('622126-622925456')).to.equal('China UnionPay');
  });

  it('has a prefix of 622126-622925 and a length of 17', function() {
    expect(detectNetwork('622126-6229254567')).to.equal('China UnionPay');
  });

  it('has a prefix of 622126-622925 and a length of 18', function() {
    expect(detectNetwork('622126-62292545678')).to.equal('China UnionPay');
  });

  it('has a prefix of 622126-622925 and a length of 19', function() {
    expect(detectNetwork('622126-622925456789')).to.equal('China UnionPay');
  });

  it('has a prefix of 624-626 and a length of 16', function() {
    expect(detectNetwork('624-626890123456')).to.equal('China UnionPay');
  });

  it('has a prefix of 624-626 and a length of 17', function() {
    expect(detectNetwork('624-6268901234567')).to.equal('China UnionPay');
  });

  it('has a prefix of 624-626 and a length of 18', function() {
    expect(detectNetwork('624-62689012345678')).to.equal('China UnionPay');
  });

  it('has a prefix of 624-626 and a length of 19', function() {
    expect(detectNetwork('624-626890123456789')).to.equal('China UnionPay');
  });

  it('has a prefix of 6282-6288 and a length of 16', function() {
    expect(detectNetwork('6282-62880123456')).to.equal('China UnionPay');
  });

  it('has a prefix of 6282-6288 and a length of 17', function() {
    expect(detectNetwork('6282-628801234567')).to.equal('China UnionPay');
  });

  it('has a prefix of 6282-6288 and a length of 18', function() {
    expect(detectNetwork('6282-6288012345678')).to.equal('China UnionPay');
  });

  it('has a prefix of 6282-6288 and a length of 19', function() {
    expect(detectNetwork('6282-62880123456789')).to.equal('China UnionPay');
  });

});



describe('should support Switch')










