const fs = require("fs");

let args = process.argv.splice(2).map(x => x.toLowerCase());

if (args[0] == "--help" || args[0] == "-h" || args[0] == "/?" || args[0] == undefined) {
	console.log([
		"usage: node . -[e|d|h] [in] [out]",
		"options:",
		"  /? -h --help             \tshows this message",
		"  /e -e --encode [in]      \tencode a file and print output to stdout",
		"  /e -e --encode [in] [out]\tencode a file and save output to file",
		"  /d -d --decode [in]      \tdecode a file and print output to stdout",
		"  /d -d --decode [in] [out]\tdecode a file and save output to file",
	].join("\n"));
} else {
	if (args[0] == "/e" || args[0] == "-e" || args[0] == "--encode") {

	} else if (args[0] == "/d" || args[0] == "-d" || args[0] == "--decode") {

	} else {
		console.error(`you are dumb and '${args[0]}' is an invalid command`);
	}
}
