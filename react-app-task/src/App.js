import logo from "./logo.svg";
import "./App.css";
import moment from "moment";
import "moment/locale/ru";

function App() {
	moment.locale("ru");
	const date = moment(new Date()).format("LL");
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Сейчас {date}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
// React импользует декларативный стиль написания кода
