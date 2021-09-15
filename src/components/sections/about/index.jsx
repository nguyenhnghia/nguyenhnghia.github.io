import React from "react";

import Section from "../../_common/section";
import Text from "../../_common/text";
import List from "../../_common/list";
import Button from "../../_common/button";

import { RiArrowRightLine } from "react-icons/ri";

import "./scss/about.shared.scss";
import "./scss/about.dark.scss";
import "./scss/about.light.scss";
class aboutSection extends React.Component {
	render() {
		let skills = ["HTML5", "CSS3", "JavaScript", "Sass", "ReactJS", "Git"];
		return (
			<Section
				extraClasses={
					this.props.darkModeState
						? `section-dark ${this.props.blockClassName}`
						: `section-light ${this.props.blockClassName}`
				}
				wheelUp={() => {
					this.props.sectionsChanged(this.props.sections[0].id);
				}}
				wheelDown={() => {
					this.props.sectionsChanged(this.props.sections[2].id);
				}}
			>
				<Text extraClasses={`${this.props.blockClassName}_quotes`}>
					Never stop learning !
				</Text>
				<Text extraClasses={`${this.props.blockClassName}_bio`}>
					<p className="anm-dr-4x anm-dl-6x">
						Hello! My name is Nguyen Huu Nghia. I'm a front-end
						fresher with serious passion for user interface and user
						experiences development. My main focus is building
						helpful, easy-to-use websites that can run smoothly
						across different devices.
					</p>
					<p className="anm-dr-4x anm-dl-7x">
						With a great desire to master front-end skills, I spend
						time for self learning and practicing through my
						personal projects.{" "}
						<Button
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
					</p>
					<p className="anm-dr-4x anm-dl-8x">
						My career goals are becoming a senior developer within 5
						years and becoming a UX-UI designer within 10 years.
						Therefore, I'm currently seeking for a front-end fresher
						position to gain more experiences.{" "}
						<Button
							clicked={() =>
								this.props.sectionsChanged(
									this.props.sections[3].id
								)
							}
						>
							<Text>
								hire me now
								<RiArrowRightLine />
							</Text>
						</Button>
					</p>
				</Text>
				<div
					className={`${this.props.blockClassName}_skills anm-dr-4x anm-dl-9x`}
				>
					<Text>Here are some technologies I can work with:</Text>
					<List>
						{skills.map((skill, index) => {
							return (
								<Text key={index} extraClasses="text-tag">
									{skill}
								</Text>
							);
						})}
					</List>
				</div>
			</Section>
		);
	}
}
export default aboutSection;
