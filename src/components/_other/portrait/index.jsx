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
	render() {
		return (
			<div
				className={`portrait portrait-${
					this.props.darkModeState ? "dark" : "light"
				} portrait-${this.props.modifier}`}
			>
				<img src={imageSrc} alt="portrait" />
			</div>
		);
	}
}
export default portrait;
