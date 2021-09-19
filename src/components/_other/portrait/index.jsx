import React from "react";

import imageSrc from "../../../image/portrait.png";

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
		let darkModeClass = this.props.darkMode
			? "portrait-dark"
			: "portrait-light";
		return (
			<div className={`portrait ${darkModeClass}`}>
				<img src={imageSrc} alt="portrait" />
			</div>
		);
	}
}
export default portrait;
