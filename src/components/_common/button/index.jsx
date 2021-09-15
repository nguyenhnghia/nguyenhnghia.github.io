import React from "react";

import Text from "../text";

import "./button.scss";
class button extends React.Component {
	render() {
		return (
			<button
				id={this.props.id}
				className={
					this.props.extraClasses
						? `button ${this.props.extraClasses}`
						: "button"
				}
				onClick={() => {
					this.props.clicked();
				}}
			>
				{this.props.children}
			</button>
		);
	}
}
button.defaultProps = {
	clicked: function () {
		return;
	},
	children: <Text>Button</Text>,
};
export default button;
