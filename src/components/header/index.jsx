import React from "react";

import { DarkModeContext } from "../../contexts/darkModeContext/context";
import Navigator from "../_common/navigator";
import Switcher from "../_common/switcher";
import Button from "../_common/button";
import Text from "../_common/text";
import List from "../_common/list";

import { RiSunFill, RiMoonFill } from "react-icons/ri";

import "./scss/header.shared.scss";
import "./scss/header.dark.scss";
import "./scss/header.light.scss";
class header extends React.Component {
	handleNavigatorButtonClicked = (target) => {
		this.props.navigate(target);
	};
	render() {
		return (
			<DarkModeContext.Consumer>
				{({ darkModeState, darkModeChanged }) => {
					return (
						<header
							className={
								darkModeState
									? `header ${this.props.blockClassName}-dark`
									: `header ${this.props.blockClassName}-light`
							}
						>
							<div
								className={`${this.props.blockClassName}_title`}
							>
								<List>
									{this.props.navigator.map((section) => {
										return (
											<Text key={section.id}>
												{section.title}
											</Text>
										);
									})}
								</List>
							</div>
							<div
								className={`${this.props.blockClassName}_navigator`}
							>
								<Navigator>
									{this.props.navigator.map(
										(section, index) => {
											return (
												<Button
													key={section.id}
													activated={section.active}
													clicked={() =>
														this.handleNavigatorButtonClicked(
															section.id,
														)
													}
												>
													{section.icon}
													<Text>{section.name}</Text>
												</Button>
											);
										},
									)}
								</Navigator>
								<Switcher
									switchState={darkModeState}
									switcherIcons={{
										unSwitched: <RiSunFill />,
										switched: <RiMoonFill />,
									}}
									switchStateChanged={darkModeChanged}
								/>
							</div>
						</header>
					);
				}}
			</DarkModeContext.Consumer>
		);
	}
}
export default header;
