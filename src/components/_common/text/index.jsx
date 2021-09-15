import React from "react";

import "./text.scss";
class text extends React.Component {
	render() {
		return (
			<span
				id={this.props.id}
				className={
					this.props.extraClasses
						? `text ${this.props.extraClasses}`
						: "text"
				}
			>
				{this.props.children}
			</span>
		);
	}
}
text.defaultProps = {
	children: "text",
};
export default text;
