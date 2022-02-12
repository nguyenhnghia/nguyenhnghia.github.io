import React from "react";
import { DarkModeContext } from "./context";

const darkModeState = window.matchMedia("(prefers-color-scheme: dark)").matches;
class darkModeContext extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = () => {
			this.setState((state) => ({
				darkModeState: !state.darkModeState,
			}));
		};
		this.state = {
			darkModeState,
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
