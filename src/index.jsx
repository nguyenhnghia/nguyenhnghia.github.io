import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/app";
import DarkModeStateProvider from "./contexts/darkModeContext/provider";

ReactDOM.render(
	<React.StrictMode>
		<DarkModeStateProvider>
			<App />
		</DarkModeStateProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

reportWebVitals();
