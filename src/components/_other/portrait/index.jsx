import React from "react";

import { DarkModeContext } from "../../../contexts/darkModeContext/context";

import "./scss/portrait.shared.scss";
import "./scss/portrait.dark.scss";
import "./scss/portrait.light.scss";

const portraitSrc = `${process.env.PUBLIC_URL}/image/portrait.png`;

class portrait extends React.Component {
	componentDidMount() {
		const portrait = new Image();
		portrait.src = portraitSrc;
		window[portraitSrc] = portrait;
	}
	componentWillUnmount() {
		delete window[portraitSrc];
	}
	render() {
		return (
			<DarkModeContext.Consumer>
				{({ darkModeState }) => {
					let darkModeClass = darkModeState
						? "portrait-dark"
						: "portrait-light";
					return (
						<div className={`portrait ${darkModeClass}`}>
							<img src={portraitSrc} alt="portrait" />
						</div>
					);
				}}
			</DarkModeContext.Consumer>
		);
	}
}
export default portrait;
