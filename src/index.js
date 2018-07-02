const dictionary = require("./dictionary");
const fs = require("fs");

new Promise((result, error) => {
	if (process.argv[2] == "-e" || "--encrypt") {
		fs.readFile(process.argv[3], "utf-8", (err, data) => {
			let dict = new dictionary.Dictionary();
			let result = "";

			for (let i = 0; i < data.length; i++) {
				let character = data[i];

				if (character == " ") {
					result += " ";
				} else {
					result += dict.dictionary[character];
				}
			}

			fs.writeFile(process.argv[4], result, (err) => { });
		});
	} else if (process.argv[2] == "d" || "--decrypt") {
		result("decrypt argument");
	} else {
		result("no arguments");
	}
}).then((res, err) => {
	console.log(res);
});
