import React from "react";

import Header from "./header";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";
import WorksSection from "./sections/works";
import ContactSection from "./sections/contact";
import Portrait from "./_other/portrait";

import {
	RiPushpinLine,
	RiSendPlaneLine,
	RiUserLine,
	RiHome2Line,
} from "react-icons/ri";

import "./app.scss";
class app extends React.Component {
	constructor(props) {
		super(props);
		var currentTime = new Date();
		this.state = {
			darkModeState:
				currentTime.getHours() >= 18 || currentTime.getHours() <= 5,
			sections: [
				{
					id: "home",
					name: "Home",
					title: "Wellcome to my website",
					active: true,
					icon: <RiHome2Line />,
				},
				{
					id: "about",
					name: "About",
					title: "About me",
					active: false,
					icon: <RiUserLine />,
				},
				{
					id: "works",
					name: "Works",
					title: "Things I've built",
					active: false,
					icon: <RiPushpinLine />,
				},
				{
					id: "contact",
					name: "Contact",
					title: "Let's talk",
					active: false,
					icon: <RiSendPlaneLine />,
				},
			],
		};
	}
	handleSectionsStateChanged = (targetID) => {
		var newSectionsState = [];
		this.state.sections.map((section) => {
			section.id === targetID
				? newSectionsState.push({ ...section, active: true })
				: newSectionsState.push({ ...section, active: false });
			return newSectionsState;
		});
		this.setState({ sections: newSectionsState });
	};
	handleDarkModeStateChanged = () => {
		this.setState({
			darkModeState: !this.state.darkModeState,
		});
	};
	render() {
		return (
			<div className="app">
				<Header
					blockClassName="header"
					darkModeState={this.state.darkModeState}
					darkModeStateChanged={this.handleDarkModeStateChanged}
					navigator={this.state.sections}
					navigatorChanged={this.handleSectionsStateChanged}
				/>
				<Portrait
					darkModeState={this.state.darkModeState}
					modifier={
						this.state.sections[0].active
							? "home"
							: this.state.sections[1].active
							? "about"
							: "hide"
					}
				/>
				{this.state.sections[0].active && (
					<HomeSection
						blockClassName={this.state.sections[0].id}
						darkModeState={this.state.darkModeState}
						sections={this.state.sections}
						sectionsChanged={this.handleSectionsStateChanged}
					/>
				)}
				{this.state.sections[1].active && (
					<AboutSection
						blockClassName={this.state.sections[1].id}
						darkModeState={this.state.darkModeState}
						sections={this.state.sections}
						sectionsChanged={this.handleSectionsStateChanged}
					/>
				)}
				{this.state.sections[2].active && (
					<WorksSection
						blockClassName={this.state.sections[2].id}
						darkModeState={this.state.darkModeState}
						sections={this.state.sections}
						sectionsChanged={this.handleSectionsStateChanged}
					/>
				)}
				{this.state.sections[3].active && (
					<ContactSection
						blockClassName={this.state.sections[3].id}
						darkModeState={this.state.darkModeState}
						sections={this.state.sections}
						sectionsChanged={this.handleSectionsStateChanged}
					/>
				)}
			</div>
		);
	}
}
export default app;
