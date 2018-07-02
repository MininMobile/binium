class Dictionary {
	constructor() {
		this.dictionary = {};
		this.letters = "abcdefjhijklmnopqrstuvwxyz";

		for (let i = 0; i < this.letters.length; i++) {
			let letter = this.letters[i];

			this.dictionary[letter] = ToBinary(i);
			console.log(this.dictionary[letter]);
		}
	}
}

function ToBinary(number) {
	let result = "00000";

	while (number > 0) {
		if (number / 16 != 0) {
			result[0] = 1;
			number -= 16;
		} else if (number / 8 != 0) {
			result[1] = 1;
			number -= 8;
		} else if (number / 4 != 0) {
			result[2] = 1;
			number -= 4;
		} else if (number / 2 != 0) {
			result[3] = 1;
			number -= 2;
		} else if (number / 1 != 0) {
			result[4] = 1;
			number -= 1;
		}
	}

	return result;
}

function ToNumber(binary) {

}

module.exports = exports = {
	Dictionary: Dictionary,
	ToBinary: ToBinary,
	ToNumber: ToNumber
}
