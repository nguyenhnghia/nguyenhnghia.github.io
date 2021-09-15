import React from "react";

import List from "../list";
import Text from "../text";

import "./navigator.scss";
class navigator extends React.Component {
	render() {
		return (
			<nav
				id={this.props.id}
				className={
					this.props.extraClasses
						? `navigator ${this.props.extraClasses}`
						: "navigator"
				}
			>
				<List>{this.props.children}</List>
			</nav>
		);
	}
}
navigator.defaultProps = {
	children: <Text>navigator</Text>,
};
export default navigator;
