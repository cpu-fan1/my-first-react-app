import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import "moment/locale/ru";
import { createElement } from "react";

function App() {
	moment.locale("ru");
	const date = moment(new Date()).format("LL");

	const reactLogo = createElement("img", {
		className: "App-logo",
		src: logo,
		alt: "logo",
	});

	const paragraph = createElement("p", null, `Сейчас ${date}`);

	const link = createElement(
		"a",
		{
			className: "App-link",
			href: "https://reactjs.org",
			target: "_blank",
			rel: "noopener noreferrer",
		},
		"Learn React"
	);

	const appHeader = createElement(
		"header",
		{ className: "App-header" },
		reactLogo,
		paragraph,
		link
	);

	return createElement("div", { className: "App" }, appHeader);
}

export default App;
// React импользует декларативный стиль написания кода
