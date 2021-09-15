import React from "react";

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
	constructor(props) {
		super(props);
		this.state = { toggle: false };
	}
	handleNavigatorButtonClicked = (target) => {
		this.handleToggle();
		this.props.navigatorChanged(target);
	};
	handleToggle = () => {
		this.setState({ toggle: !this.state.toggle });
	};
	render() {
		return (
			<header
				className={
					this.props.darkModeState
						? `header ${this.props.blockClassName}-dark`
						: `header ${this.props.blockClassName}-light`
				}
			>
				<List
					extraClasses={`${this.props.blockClassName}_title anm-dr-4x anm-dl-6x`}
				>
					{this.props.navigator.map((section) => {
						return (
							<Text key={section.id} activated={section.active}>
								{section.title}
							</Text>
						);
					})}
				</List>
				<Button
					extraClasses={`button-toggle ${
						this.state.toggle ? "button-collapse" : "button-expand"
					}`}
					clicked={this.handleToggle}
				>
					<span className="line-top"></span>
					<span className="line-center"></span>
					<span className="line-bottom"></span>
				</Button>
				<Navigator
					extraClasses={`${this.props.blockClassName}_navigator`}
				>
					{this.props.navigator
						.map((section, index) => {
							return (
								<Button
									key={section.id}
									activated={section.active}
									itemExtraClasses={`anm-dr-4x anm-dl-${
										7 + index
									}x`}
									clicked={() =>
										this.handleNavigatorButtonClicked(
											section.id
										)
									}
								>
									{section.icon}
									<Text>{section.name}</Text>
								</Button>
							);
						})
						.concat([
							<Switcher
								key="switcher"
								itemExtraClasses="anm-dr-4x anm-dl-11x"
								switchState={this.props.darkModeState}
								switcherIcons={{
									unSwitched: <RiSunFill />,
									switched: <RiMoonFill />,
								}}
								switchStateChanged={() => {
									this.props.darkModeStateChanged();
								}}
							/>,
						])}
				</Navigator>
			</header>
		);
	}
}
export default header;
