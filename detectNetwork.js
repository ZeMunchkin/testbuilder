
var detectDinersClub = function(cardNumber) {
	var firstTwo = '' + cardNumber[0] + cardNumber [1];
	var cardLength = cardNumber.length;
	if (cardLength === 14 && (firstTwo === '38' || firstTwo === '39')) {
		return true;
	}
	return false;
};

var detectAmericanExpress = function(cardNumber) {
	var firstTwo = '' + cardNumber[0] + cardNumber [1];
	var cardLength = cardNumber.length;
	if (cardLength === 15 && (firstTwo === '34' || firstTwo === '37')) {
		return true;
	}
	return false;
};

var detectMasterCard = function(cardNumber) {
	var firstTwo = '' + cardNumber[0] + cardNumber [1];
	var cardLength = cardNumber.length;
	if (cardLength === 16 &&
		(firstTwo === '51' || firstTwo === '52' || firstTwo === '53' || firstTwo === '54' || firstTwo === '55')) {
		  return true;
	}
	return false;
};

var detectVisa = function(cardNumber) {
	var cardLength = cardNumber.length;
	if (cardNumber[0] === '4' && (
    	cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    	return true;
    }
    return false;
};

var detectNetwork = function(cardNumber) {
	if (detectDinersClub(cardNumber)) {
		return 'Diner\'s Club';
	}
	if (detectAmericanExpress(cardNumber)) {
		return 'American Express';
	}
	if (detectMasterCard(cardNumber)) {
		return 'MasterCard';
	}
	if (detectVisa(cardNumber)) {
		return 'Visa';
	}
    console.log('Unknown Network');
	return 'Unknown Network';
};

console.log(detectNetwork('4123456789012'));
