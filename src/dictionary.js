class Dictionary {
	constructor() {
		this.dictionary = {};
		this.letters = "abcdefjhijklmnopqrstuvwxyz";

		for (let i = 0; i < this.letters.length; i++) {
			let letter = this.letters[i];

			this.dictionary[letter] = ToBinary(i + 1);
			console.log(this.dictionary[letter]);
		}
	}
}

new Dictionary()

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

	return result.join(" ");
}

function ToNumber(binary) {

}

module.exports = exports = {
	Dictionary: Dictionary,
	ToBinary: ToBinary,
	ToNumber: ToNumber
}
