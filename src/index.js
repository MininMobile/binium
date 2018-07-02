const dictionary = require("./dictionary");
const fs = require("fs");

new Promise((result, error) => {
	if (process.argv[2] == "-e" || process.argv[2] == "--encrypt") {
		fs.readFile(process.argv[3], "utf-8", (err, data) => {
			let dict = new dictionary.Dictionary();
			let result = "";

			for (let i = 0; i < data.length; i++) {
				let character = data[i];

				if (character == " ") {
					result += "00000";
				} else {
					result += dict.dictionary[character];
				}
			}

			fs.writeFile(process.argv[4], result, (err) => { });
		});
	} else if (process.argv[2] == "-d" || process.argv[2] == "--decrypt") {
		fs.readFile(process.argv[3], "utf-8", (err, data) => {
			let dict = new dictionary.Dictionary();
			let result = "";

			for (let i = 0; i < data.length; i += 5) {
				let binary = "";
				
				for (let u = 0; u < 5; u++) binary += data[i + u];

				result += dict.letters[dictionary.ToNumber(binary)];
			}

			fs.writeFile(process.argv[4], result, (err) => { });
		});
	} else {
		// no args
	}

	result("");
}).then((res, err) => {
	console.log(res);
});
