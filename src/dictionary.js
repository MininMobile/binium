class Dictionary {
	constructor() {
		this.dictionary = {};
		this.letters = "abcdefjhijklmnopqrstuvwxyz";

		for (let i = 0; i < this.letters.length; i++) {
			let letter = this.letters[i];

			this.dictionary[letter] = ToBinary(i);
		}
	}
}

function ToBinary(number) {
	
}

function ToNumber(binary) {

}

module.exports = exports = {
	Dictionary: Dictionary,
	ToBinary: ToBinary,
	ToNumber: ToNumber
}
