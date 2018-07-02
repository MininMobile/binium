class Dictionary {
	constructor() {
		this.dictionary = {};
		this.letters = "abcdefjhijklmnopqrstuvwxyz";

		for (let i = 0; i < this.letters.length; i++) {
			let letter = this.letters[i];

			this.dictionary[letter] = ToBinary(i + 1);
		}
	}
}

function ToBinary(number) {
	let num = number;
	let result = ["0", "0", "0", "0", "0"];

	while (num > 0) {
		if (num >= 16) {
			result[0] = "1";
			num -= 16;
		} else if (num >= 8) {
			result[1] = "1";
			num -= 8;
		} else if (num >= 4) {
			result[2] = "1";
			num -= 4;
		} else if (num >= 2) {
			result[3] = "1";
			num -= 2;
		} else if (num >= 1) {
			result[4] = "1";
			num -= 1;
		}
	}

	return result.join("");
}

function ToNumber(binary) {
	let bin = [];
	let result = 0;
	
	for (let i = 0; i < 5; i++) bin.push(binary[i]);

	for (let i = 0; i < 5; i++) {
		if (i == 0) if (bin[i] == 1) result += 16;
		if (i == 1) if (bin[i] == 1) result += 8;
		if (i == 2) if (bin[i] == 1) result += 4;
		if (i == 3) if (bin[i] == 1) result += 2;
		if (i == 4) if (bin[i] == 1) result += 1;
	}

	return result;
}

module.exports = exports = {
	Dictionary: Dictionary,
	ToBinary: ToBinary,
	ToNumber: ToNumber
}
