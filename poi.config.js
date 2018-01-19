module.exports = {
	// html: {
	// 	title: "My Amazing App",
	// 	description: "My description",
	// 	template: "./index.ejs",
	// 	course: "Poi lessons",
	// 	contributors: ["Mindy", "John"]
	// }
	webpack(config) {
		config.module.rules.push({
			test: /\.md$/,
			loaders: [
				"babel-loader",
				"react-markdown-loader"
			]
		})
		return config
	}
} 