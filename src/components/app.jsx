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
			darkMode:
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
	handleScroll = (event) => {
		let app = document.getElementsByClassName("app")[0];
		let target = event.target;
		let scrollPosition = (
			((target.scrollTop + target.clientHeight) / target.scrollHeight) *
			100
		).toFixed(0);
		app.classList = `app scroll-${scrollPosition}`;
		scrollPosition < 37 && this.handleSectionsStateChanged(0);
		scrollPosition >= 37 &&
			scrollPosition < 62 &&
			this.handleSectionsStateChanged(1);
		scrollPosition >= 62 &&
			scrollPosition < 87 &&
			this.handleSectionsStateChanged(2);
		scrollPosition >= 87 && this.handleSectionsStateChanged(3);
	};
	handleSectionsStateChanged = (targetIndex) => {
		let targetID = this.state.sections[targetIndex].id;
		if (this.state.sections[targetIndex].active) {
			return;
		} else {
			let newSectionsState = [];
			this.state.sections.forEach((section) => {
				section.id === targetID
					? newSectionsState.push({ ...section, active: true })
					: newSectionsState.push({ ...section, active: false });
			});
			this.setState({ sections: newSectionsState });
		}
	};
	handleNavigate = (targetID) => {
		document.getElementsByClassName(targetID)[0].scrollIntoView();
	};
	handleDarkModeChanged = () => {
		this.setState({
			darkMode: !this.state.darkMode,
		});
	};
	render() {
		return (
			<div className="app scroll-25" onScroll={this.handleScroll}>
				<Header
					blockClassName="header"
					darkMode={this.state.darkMode}
					darkModeChanged={this.handleDarkModeChanged}
					navigator={this.state.sections}
					navigate={this.handleNavigate}
				/>
				<Portrait darkMode={this.state.darkMode} />
				<HomeSection
					blockClassName={this.state.sections[0].id}
					darkMode={this.state.darkMode}
					sections={this.state.sections}
					navigate={this.handleNavigate}
				/>
				<AboutSection
					blockClassName={this.state.sections[1].id}
					darkMode={this.state.darkMode}
					sections={this.state.sections}
					navigate={this.handleNavigate}
				/>
				<WorksSection
					blockClassName={this.state.sections[2].id}
					darkMode={this.state.darkMode}
					sections={this.state.sections}
				/>
				<ContactSection
					blockClassName={this.state.sections[3].id}
					darkMode={this.state.darkMode}
					sections={this.state.sections}
				/>
			</div>
		);
	}
}
export default app;
