import React from "react";

import Section from "../../_common/section";
import Text from "../../_common/text";
import Button from "../../_common/button";
import Navigator from "../../_common/navigator";
import List from "../../_common/list";
import Laptop from "../../_other/devices";

import projectImage from "../../../image/pj1.png";

import "./scss/works.shared.scss";
import "./scss/works.dark.scss";
import "./scss/works.light.scss";
class worksSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [
				{
					id: "project1",
					name: "coming soon",
					briefDescription:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident dolorem id sequi vitae quod totam explicabo, tempora ex nulla aliquam? Ipsam architecto nam cum maiores, error quis eum dicta?",
					technologies: ["HTML5", "CSS3", "Sass"],
					active: true,
				},
				{
					id: "project2",
					name: "coming soon",
					briefDescription:
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",
					technologies: ["HTML5", "CSS3", "JS"],
					active: false,
				},
				{
					id: "project3",
					name: "coming soon",
					briefDescription:
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",
					technologies: ["HTML5", "CSS3", "JS"],
					active: false,
				},
				{
					id: "project4",
					name: "coming soon",
					briefDescription:
						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",
					technologies: ["HTML5", "CSS3", "JS"],
					active: false,
				},
			],
		};
	}
	handleWheelUp = (targetID) => {
		const firstProject = this.state.projects[0].id;
		var currentProject = 0;
		this.state.projects.forEach((project, index) => {
			if (project.active) {
				currentProject = index;
			}
		});
		this.state.projects[currentProject].id === firstProject
			? this.props.sectionsChanged(targetID)
			: this.handleProjectChanged(
					this.state.projects[currentProject - 1].id
			  );
	};

	handleWheelDown = (targetID) => {
		const lastProject =
			this.state.projects[this.state.projects.length - 1].id;
		var currentProject = 0;
		this.state.projects.forEach((project, index) => {
			if (project.active) {
				currentProject = index;
			}
		});
		this.state.projects[currentProject].id === lastProject
			? this.props.sectionsChanged(targetID)
			: this.handleProjectChanged(
					this.state.projects[currentProject + 1].id
			  );
	};
	handleProjectChanged = (targetID) => {
		var newProjectsState = [];
		this.state.projects.map((project) => {
			project.id === targetID
				? newProjectsState.push({ ...project, active: true })
				: newProjectsState.push({ ...project, active: false });
			return newProjectsState;
		});
		this.setState({ projects: newProjectsState });
	};
	render() {
		return (
			<Section
				extraClasses={
					this.props.darkModeState
						? `section-dark ${this.props.blockClassName}`
						: `section-light ${this.props.blockClassName}`
				}
				wheelUp={() => {
					this.handleWheelUp(this.props.sections[1].id);
				}}
				wheelDown={() => {
					this.handleWheelDown(this.props.sections[3].id);
				}}
			>
				{this.state.projects.map((project, index) => {
					return (
						project.active && (
							<div
								key={project.id}
								className={`${this.props.blockClassName}_content`}
							>
								<div className="content_details">
									<Text extraClasses="title">
										{project.name}
									</Text>
									<List extraClasses="technologies">
										{project.technologies.map(
											(technology, index) => {
												return (
													<Text
														key={index}
														itemExtraClasses={`anm-dr-4x anm-dl-${
															6 + index
														}x`}
														extraClasses="text-tag"
													>
														{technology}
													</Text>
												);
											}
										)}
									</List>
									<Text extraClasses="description">
										{project.briefDescription}
									</Text>
								</div>
								<div className="content_images">
									<Laptop>
										<img
											src={projectImage}
											alt="projectImage"
										/>
									</Laptop>
								</div>
							</div>
						)
					);
				})}
				<Navigator
					extraClasses={`${this.props.blockClassName}_navigator`}
				>
					{this.state.projects.map((project, index) => {
						return (
							<Button
								key={project.id}
								activated={project.active}
								itemExtraClasses={`anm-dr-4x anm-dl-${
									6 + index
								}x`}
								clicked={() => {
									this.handleProjectChanged(project.id);
								}}
							>
								<Text>
									{index < 9 ? `0${1 + index}` : 1 + index}
								</Text>
							</Button>
						);
					})}
				</Navigator>
			</Section>
		);
	}
}
export default worksSection;
