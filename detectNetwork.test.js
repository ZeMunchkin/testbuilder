
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
 

  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
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
  // Write full test coverage for the Maestro card
});

describe('should support China UnionPay')
describe('should support Switch')










