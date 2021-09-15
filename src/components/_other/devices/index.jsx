import React from "react";

import "./devices.scss";

class devices extends React.Component {
	render() {
		return (
			<div className="devices">
				<div className="devices_lid">
					<div className="devices_lid_screen">
						{this.props.children}
					</div>
					<div className="devices_lid_topEdge"></div>
				</div>
				<div className="devices_base">
					<div className="devices_base_topEdge">
						<div className="devices_base_topEdge-slot"></div>
						<div className="devices_base_topEdge-curve"></div>
					</div>
				</div>
			</div>
		);
	}
}
export default devices;
