import React from "react";

import { DarkModeContext } from "../../../contexts/darkModeContext/context";
import Section from "../../_common/section";
import Button from "../../_common/button";
import Text from "../../_common/text";

import { RiArrowRightLine } from "react-icons/ri";

import "./scss/home.shared.scss";
import "./scss/home.dark.scss";
import "./scss/home.light.scss";

class homeSection extends React.Component {
	render() {
		return (
			<DarkModeContext.Consumer>
				{({ darkModeState }) => {
					return (
						<Section
							extraClasses={
								darkModeState
									? `section-dark ${this.props.blockClassName}`
									: `section-light ${this.props.blockClassName}`
							}
						>
							<Text
								extraClasses={`${this.props.blockClassName}_title`}
							>
								<sub>I'm a</sub>
								<h1>Frontend Developer</h1>
							</Text>
							<Text
								extraClasses={`${this.props.blockClassName}_content`}
							>
								Hello, I'm Nguyen Huu Nghia, I do things to make
								websites look nice and easy to use.
								<br /> A front-end fresher with serious passion
								for front-end development and UI/UX.
							</Text>
							<div
								className={`${this.props.blockClassName}_buttonGroup`}
							>
								<Button extraClasses="button-cta">
									<Text>read my resume</Text>
								</Button>
								<Button
									extraClasses="button-ghost"
									clicked={() =>
										this.props.navigate(
											this.props.sections[2].id,
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
				}}
			</DarkModeContext.Consumer>
		);
	}
}
export default homeSection;
