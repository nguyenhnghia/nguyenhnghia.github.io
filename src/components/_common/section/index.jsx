import React from "react";
import Text from "../text";
import "./section.scss";
class section extends React.Component {
	handleWheel(event) {
		event.deltaY >= 0 ? this.props.wheelDown() : this.props.wheelUp();
	}
	render() {
		return (
			<section
				id={this.props.id}
				ref={this.props.reference}
				onWheel={(event) => {
					this.handleWheel(event);
				}}
				className={
					this.props.extraClasses
						? `section ${this.props.extraClasses}`
						: "section"
				}
			>
				{this.props.children}
			</section>
		);
	}
}
section.defaultProps = {
	wheelUp: function () {
		return;
	},
	wheelDown: function () {
		return;
	},
	refProp: null,
	children: <Text>section</Text>,
};
export default section;
