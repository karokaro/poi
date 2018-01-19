// import Vue from "vue"
// import App from "./App.vue"

// new Vue({
// 	el: "#app",
// 	render: h => h(App)
// })
import "./style.scss"
import { render } from "react-dom"
import Readme from "./Readme.md"

render(
	<Readme></Readme>,
	document.getElementById("app")
)
