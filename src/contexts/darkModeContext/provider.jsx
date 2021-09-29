import React from "react";
import { DarkModeContext } from "./context";
class darkModeContext extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = () => {
			this.setState((state) => ({
				darkModeState: !state.darkModeState,
			}));
		};
		const currentTime = new Date().getHours();
		this.state = {
			darkModeState: currentTime >= 18 || currentTime <= 5,
			darkModeChanged: this.handleChange,
		};
	}
	render() {
		return (
			<DarkModeContext.Provider value={this.state}>
				{this.props.children}
			</DarkModeContext.Provider>
		);
	}
}
export default darkModeContext;
