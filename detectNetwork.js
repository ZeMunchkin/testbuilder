
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

var detectDiscover = function(cardNumber) {
	var firstTwo = '' + cardNumber[0] + cardNumber[1];
	var firstThree = '' + cardNumber[0] + cardNumber [1] + cardNumber[2];
	var firstFour = '' + cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
	var cardLength = cardNumber.length;

	if ((cardLength === 16 || cardLength === 19) && 
		(firstFour === '6011' || firstTwo === '65' || firstThree === '644' || firstThree === '645' || 
		firstThree === '646' || firstThree === '647' || firstThree === '648' || firstThree === '649')) {
			return true;
	}
	return false;
};

var detectMaestro = function(cardNumber) {
	var firstFour = '' + cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
	var cardLength = cardNumber.length;
	if ((firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304') 
		&& cardLength >= 12 && cardLength <= 19) {
		return true;
	}
	return false;
};

var detectChinaUnionPay = function (cardNumber) {
	var firstThirteen = '';
	for (i = 0; i < 13; i++) {
		firstThirteen += cardNumber[i];
	}
	var firstSeven = '';
	for (i = 0; i < 7; i++) {
		firstSeven += cardNumber[i];
	}
	var firstNine = '';
	for (i = 0; i < 9; i++) {
		firstNine += cardNumber[i];
	}
	var cardLength = cardNumber.length;

	if ((firstThirteen === '622126-622925' || firstSeven === '624-626' || firstNine === '6282-6288') &&
		cardLength >= 16 && cardLength <= 19) {
		return true;
	}
	return false;
}

var detectSwitch = function (cardNumber) {
	var cardLength = cardNumber.length;
	var firstFour = '' + cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
	var firstSix = '';
	for (i = 0; i < 6; i++) {
		firstSix += cardNumber[i];
	}

	if ((firstFour === '4903' || firstFour === '4905' || firstFour === '4911' || firstFour === '4936' || 
		firstFour === '6333' || firstFour === '6759' || firstSix === '633110' || firstSix === '564182') 
		&& (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
			return true;
		}
	return false;
}

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
	if (detectDiscover(cardNumber)) {
		return 'Discover';
	}
	if (detectMaestro(cardNumber)) {
		return 'Maestro';
	}
	if (detectChinaUnionPay(cardNumber)) {
		return 'China UnionPay';
	}
	if (detectVisa(cardNumber) && detectSwitch(cardNumber)) {
		return 'Switch';
	}
	if (detectSwitch(cardNumber)) {
		return 'Switch';
	}
	if (detectVisa(cardNumber)) {
		return 'Visa';
	}
	return 'Unknown Network';
};

console.log(detectNetwork('5020678920475'));
