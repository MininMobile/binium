const dictionary = require("./dictionary");

new Promise((result, error) => {
	if (process.argv[2] == "-e" || "--encrypt") {
		result("encrypt argument");
	} else if (process.argv[2] == "d" || "--decrypt") {
		result("decrypt argument");
	} else {
		result("no arguments");
	}
}).then((res, err) => {
	console.log(res);
});
