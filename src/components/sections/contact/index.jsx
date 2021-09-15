import React from "react";

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
	render() {
		let contactLinks = [
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
		];
		return (
			<Section
				extraClasses={
					this.props.darkModeState
						? `section-dark ${this.props.blockClassName}`
						: `section-light ${this.props.blockClassName}`
				}
				wheelUp={() => {
					this.props.sectionsChanged(this.props.sections[2].id);
				}}
			>
				<Text extraClasses={`${this.props.blockClassName}_title`}>
					Looking for a<br /> front-end fresher
				</Text>
				<Text extraClasses={`${this.props.blockClassName}_paragraph`}>
					To land my first job, I'm currently seeking for a front-end
					fresher position. So if you are looking for a front-end
					fresher, why not <Button>check my resume</Button> and give
					us a chance to work together ?
				</Text>
				<List extraClasses={`${this.props.blockClassName}_list`}>
					{contactLinks.map((item, index) => {
						return (
							<Button
								key={index}
								itemExtraClasses={`anm-dr-4x anm-dl-${
									5 + contactLinks.length - index
								}x`}
								clicked={() => {
									window.open(item.href, "_blank");
								}}
							>
								<span className="icon">{item.icon}</span>
							</Button>
						);
					})}
				</List>
			</Section>
		);
	}
}
export default contactSection;
