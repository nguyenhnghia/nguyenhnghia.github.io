import React from "react";

import { DarkModeContext } from "../../../contexts/darkModeContext/context";
import Button from "../../_common/button";
import Section from "../../_common/section";
import Text from "../../_common/text";
import List from "../../_common/list";

import {
	RiCodepenFill,
	RiFacebookFill,
	RiMailLine,
	RiLinkedinFill,
	RiGithubFill,
} from "react-icons/ri";

import "./scss/contact.shared.scss";
import "./scss/contact.dark.scss";
import "./scss/contact.light.scss";
class contactSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactLinks: [
				{
					icon: <RiMailLine />,
					href: "mailto:nhnghia.dev@gmail.com?&subject=Job opportunity",
				},
				{
					icon: <RiFacebookFill />,
					href: "https://www.facebook.com/nhnghia.fedev/",
				},
				{
					icon: <RiLinkedinFill />,
					href: "https://www.linkedin.com/in/ngh%C4%A9a-nguy%E1%BB%85n-988900216/",
				},
				{
					icon: <RiCodepenFill />,
					href: "https://codepen.io/nhnghia-dev",
				},
				{
					icon: <RiGithubFill />,
					href: "https://github.com/nguyenhnghia",
				},
			],
		};
	}
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
								Looking for a<br /> front-end fresher
							</Text>
							<Text
								extraClasses={`${this.props.blockClassName}_paragraph`}
							>
								To land my first job, I'm currently seeking for
								a front-end fresher position. So if you are
								looking for a front-end fresher, why not{" "}
								<Button>check my resume</Button> and give us a
								chance to work together ?
							</Text>
							<List
								extraClasses={`${this.props.blockClassName}_list`}
							>
								{this.state.contactLinks.map((item, index) => {
									return (
										<Button
											key={index}
											itemExtraClasses={`tst-dl-${
												this.state.contactLinks.length -
												index
											}x`}
											clicked={() => {
												window.open(
													item.href,
													"_blank",
												);
											}}
										>
											<span className="icon">
												{item.icon}
											</span>
										</Button>
									);
								})}
							</List>
						</Section>
					);
				}}
			</DarkModeContext.Consumer>
		);
	}
}
export default contactSection;
