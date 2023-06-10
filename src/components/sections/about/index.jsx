import React from "react";

import { DarkModeContext } from "../../../contexts/darkModeContext/context";
import Section from "../../_common/section";
import Button from "../../_common/button";
import Text from "../../_common/text";
import List from "../../_common/list";

import { RiArrowRightLine } from "react-icons/ri";

import "./scss/about.shared.scss";
import "./scss/about.dark.scss";
import "./scss/about.light.scss";
class aboutSection extends React.Component {
  render() {
    let skills = ["HTML5", "CSS3", "JavaScript", "Sass", "ReactJS", "Git"];
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
              <Text extraClasses={`${this.props.blockClassName}_quotes`}>
                Never stop learning !
              </Text>
              <Text extraClasses={`${this.props.blockClassName}_bio`}>
                <p>
                  Hello! My name is Nguyen Huu Nghia. I'm a front-end developer
                  with serious passion for user interface and user experiences
                  development. My main focus is building helpful, easy-to-use
                  websites that can run smoothly across different devices.
                </p>
                <p>
                  With a great desire to master front-end skills, I spend time
                  for self learning and practicing through my personal projects.{" "}
                  <Button
                    clicked={() =>
                      this.props.navigate(this.props.sections[2].id)
                    }
                  >
                    <Text>
                      see my works
                      <RiArrowRightLine />
                    </Text>
                  </Button>
                </p>
                <p>
                  My career goals are becoming a senior developer within 5 years
                  and becoming a UX-UI designer within 10 years. Therefore, I'm
                  currently seeking for a front-end developer position to gain
                  more experiences.{" "}
                  <Button
                    clicked={() =>
                      this.props.navigate(this.props.sections[3].id)
                    }
                  >
                    <Text>
                      hire me now
                      <RiArrowRightLine />
                    </Text>
                  </Button>
                </p>
              </Text>
              <div className={`${this.props.blockClassName}_skills`}>
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
        }}
      </DarkModeContext.Consumer>
    );
  }
}
export default aboutSection;
