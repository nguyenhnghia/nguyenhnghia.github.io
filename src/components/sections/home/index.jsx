import React from "react";

import Button from "../../_common/button";
import Section from "../../_common/section";
import Text from "../../_common/text";

import { RiArrowRightLine } from "react-icons/ri";

import "./scss/home.shared.scss";
import "./scss/home.dark.scss";
import "./scss/home.light.scss";

class homeSection extends React.Component {
	render() {
		return (
			<Section
				extraClasses={
					this.props.darkModeState
						? `section-dark ${this.props.blockClassName}`
						: `section-light ${this.props.blockClassName}`
				}
				wheelDown={() => {
					this.props.sectionsChanged(this.props.sections[1].id);
				}}
			>
				<Text
					extraClasses={`${this.props.blockClassName}_title anm-dr-4x anm-dl-6x`}
				>
					<sub>I'm a</sub>
					<h1>Frontend Developer</h1>
				</Text>
				<Text
					extraClasses={`${this.props.blockClassName}_content anm-dr-4x anm-dl-7x`}
				>
					Hello, I'm Nguyen Huu Nghia, I do things to make websites
					look nice and easy to use.
					<br /> A front-end fresher with serious passion for
					front-end development and UI/UX.
				</Text>
				<div
					className={`${this.props.blockClassName}_buttonGroup anm-dr-4x anm-dl-8x`}
				>
					<Button extraClasses="button-cta">
						<Text>read my resume</Text>
					</Button>
					<Button
						extraClasses="button-ghost"
						clicked={() =>
							this.props.sectionsChanged(
								this.props.sections[2].id
							)
						}
					>
						<Text>
							see my works
							<RiArrowRightLine />
						</Text>
					</Button>
				</div>
			</Section>
		);
	}
}
export default homeSection;
