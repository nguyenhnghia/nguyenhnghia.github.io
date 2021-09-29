import React from "react";

import imageSrc from "../../../image/portrait.png";
import { DarkModeContext } from "../../../contexts/darkModeContext/context";

import "./scss/portrait.shared.scss";
import "./scss/portrait.dark.scss";
import "./scss/portrait.light.scss";

class portrait extends React.Component {
	componentDidMount() {
		const portrait = new Image();
		portrait.src = imageSrc;
		window[imageSrc] = portrait;
	}
	componentWillUnmount() {
		delete window[imageSrc];
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
							<img src={imageSrc} alt="portrait" />
						</div>
					);
				}}
			</DarkModeContext.Consumer>
		);
	}
}
export default portrait;
