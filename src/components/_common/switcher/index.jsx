import React from "react";

import "./switcher.scss";
class switcher extends React.Component {
	render() {
		return (
			<label
				id={this.props.id}
				className={
					this.props.extraClasses
						? `switcher ${this.props.extraClasses}`
						: "switcher"
				}
			>
				<input
					className="switcher_checkbox"
					type="checkbox"
					defaultChecked={this.props.switchState}
					onChange={() => {
						this.props.switchStateChanged(this.props.switchState);
					}}
				/>
				<span className="switcher_slider">
					<span className="icon">
						{this.props.switcherIcons
							? this.props.switcherIcons.unSwitched
							: ""}
						{this.props.switcherIcons
							? this.props.switcherIcons.switched
							: ""}
					</span>
				</span>
			</label>
		);
	}
}
switcher.defaultProps = {
	switchState: false,
};
export default switcher;
