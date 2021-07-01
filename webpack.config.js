const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/sketch.js",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
	devtool: "inline-source-map",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};
