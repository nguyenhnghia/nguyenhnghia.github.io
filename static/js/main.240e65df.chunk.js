(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(9),i=s.n(a),r=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))},o=s(7),l=s(2),d=s(3),h=s(5),u=s(4),j=c.a.createContext({darkModeState:!1,darkModeChanged:function(){}}),p=(s(14),s(0)),b=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("span",{id:this.props.id,className:this.props.extraClasses?"text ".concat(this.props.extraClasses):"text",children:this.props.children})}}]),s}(c.a.Component);b.defaultProps={children:"text"};var m=b,f=(s(16),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("ul",{id:this.props.id,className:this.props.extraClasses?"list ".concat(this.props.extraClasses):"list",children:Array.isArray(this.props.children)?this.props.children.map((function(e,t){var s=e.props.itemExtraClasses?" ".concat(e.props.itemExtraClasses):"";return Object(p.jsx)("li",{className:e.props.activated?"list_item-active".concat(s):"list_item".concat(s),children:e},t)})):Object(p.jsx)("li",{className:"list_item",children:this.props.children})})}}]),s}(c.a.Component));f.defaultProps={children:Object(p.jsx)(m,{children:"List"})};var O=f,x=(s(17),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("nav",{id:this.props.id,className:this.props.extraClasses?"navigator ".concat(this.props.extraClasses):"navigator",children:Object(p.jsx)(O,{children:this.props.children})})}}]),s}(c.a.Component));x.defaultProps={children:Object(p.jsx)(m,{children:"navigator"})};var v=x,g=(s(18),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("label",{id:this.props.id,className:this.props.extraClasses?"switcher ".concat(this.props.extraClasses):"switcher",children:[Object(p.jsx)("input",{className:"switcher_checkbox",type:"checkbox",defaultChecked:this.props.switchState,onChange:function(){e.props.switchStateChanged(e.props.switchState)}}),Object(p.jsx)("span",{className:"switcher_slider",children:Object(p.jsxs)("span",{className:"icon",children:[this.props.switcherIcons?this.props.switcherIcons.unSwitched:"",this.props.switcherIcons?this.props.switcherIcons.switched:""]})})]})}}]),s}(c.a.Component));g.defaultProps={switchState:!1};var C=g,k=(s(19),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)("button",{id:this.props.id,className:this.props.extraClasses?"button ".concat(this.props.extraClasses):"button",onClick:function(){e.props.clicked()},children:this.props.children})}}]),s}(c.a.Component));k.defaultProps={clicked:function(){},children:Object(p.jsx)(m,{children:"Button"})};var N=k,y=s(6),w=(s(20),s(21),s(22),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleNavigatorButtonClicked=function(t){e.props.navigate(t)},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(j.Consumer,{children:function(t){var s=t.darkModeState,n=t.darkModeChanged;return Object(p.jsxs)("header",{className:"header ".concat(e.props.blockClassName,s?"-dark":"-light"),children:[Object(p.jsx)("div",{className:"".concat(e.props.blockClassName,"_title"),children:Object(p.jsx)(O,{children:e.props.navigator.map((function(e){return Object(p.jsx)(m,{children:e.title},e.id)}))})}),Object(p.jsxs)("div",{className:"".concat(e.props.blockClassName,"_navigator"),children:[Object(p.jsx)(v,{children:e.props.navigator.map((function(t,s){return Object(p.jsxs)(N,{activated:t.active,clicked:function(){return e.handleNavigatorButtonClicked(t.id)},children:[t.icon,Object(p.jsx)(m,{children:t.name})]},t.id)}))}),Object(p.jsx)(C,{switchState:s,switcherIcons:{unSwitched:Object(p.jsx)(y.k,{}),switched:Object(p.jsx)(y.i,{})},switchStateChanged:n})]})]})}})}}]),s}(c.a.Component)),S=(s(23),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"handleWheel",value:function(e){e.deltaY>=0?this.props.wheelDown():this.props.wheelUp()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("section",{id:this.props.id,ref:this.props.reference,onWheel:function(t){e.handleWheel(t)},className:this.props.extraClasses?"section ".concat(this.props.extraClasses):"section",children:this.props.children})}}]),s}(c.a.Component));S.defaultProps={wheelUp:function(){},wheelDown:function(){},refProp:null,children:Object(p.jsx)(m,{children:"section"})};var _=S,M=(s(24),s(25),s(26),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(j.Consumer,{children:function(t){var s=t.darkModeState;return Object(p.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(p.jsxs)(m,{extraClasses:"".concat(e.props.blockClassName,"_title"),children:[Object(p.jsx)("sub",{children:"I'm a"}),Object(p.jsx)("h1",{children:"Frontend Developer"})]}),Object(p.jsxs)(m,{extraClasses:"".concat(e.props.blockClassName,"_content"),children:["Hello, I'm Nguyen Huu Nghia, I do things to make websites look nice and easy to use.",Object(p.jsx)("br",{})," A front-end fresher with serious passion for front-end development and UI/UX."]}),Object(p.jsxs)("div",{className:"".concat(e.props.blockClassName,"_buttonGroup"),children:[Object(p.jsx)(N,{extraClasses:"button-cta",children:Object(p.jsx)(m,{children:"read my resume"})}),Object(p.jsx)(N,{extraClasses:"button-ghost",clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(p.jsxs)(m,{children:["see my works",Object(p.jsx)(y.a,{})]})})]})]})}})}}]),s}(c.a.Component)),I=(s(27),s(28),s(29),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=["HTML5","CSS3","JavaScript","Sass","ReactJS","Git"];return Object(p.jsx)(j.Consumer,{children:function(s){var n=s.darkModeState;return Object(p.jsxs)(_,{extraClasses:n?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(p.jsx)(m,{extraClasses:"".concat(e.props.blockClassName,"_quotes"),children:"Never stop learning !"}),Object(p.jsxs)(m,{extraClasses:"".concat(e.props.blockClassName,"_bio"),children:[Object(p.jsx)("p",{children:"Hello! My name is Nguyen Huu Nghia. I'm a front-end fresher with serious passion for user interface and user experiences development. My main focus is building helpful, easy-to-use websites that can run smoothly across different devices."}),Object(p.jsxs)("p",{children:["With a great desire to master front-end skills, I spend time for self learning and practicing through my personal projects."," ",Object(p.jsx)(N,{clicked:function(){return e.props.navigate(e.props.sections[2].id)},children:Object(p.jsxs)(m,{children:["see my works",Object(p.jsx)(y.a,{})]})})]}),Object(p.jsxs)("p",{children:["My career goals are becoming a senior developer within 5 years and becoming a UX-UI designer within 10 years. Therefore, I'm currently seeking for a front-end fresher position to gain more experiences."," ",Object(p.jsx)(N,{clicked:function(){return e.props.navigate(e.props.sections[3].id)},children:Object(p.jsxs)(m,{children:["hire me now",Object(p.jsx)(y.a,{})]})})]})]}),Object(p.jsxs)("div",{className:"".concat(e.props.blockClassName,"_skills"),children:[Object(p.jsx)(m,{children:"Here are some technologies I can work with:"}),Object(p.jsx)(O,{children:t.map((function(e,t){return Object(p.jsx)(m,{extraClasses:"text-tag",children:e},t)}))})]})]})}})}}]),s}(c.a.Component)),L=(s(30),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"devices",children:[Object(p.jsxs)("div",{className:"devices_lid",children:[Object(p.jsx)("div",{className:"devices_lid_screen",children:this.props.children}),Object(p.jsx)("div",{className:"devices_lid_topEdge"})]}),Object(p.jsx)("div",{className:"devices_base",children:Object(p.jsxs)("div",{className:"devices_base_topEdge",children:[Object(p.jsx)("div",{className:"devices_base_topEdge-slot"}),Object(p.jsx)("div",{className:"devices_base_topEdge-curve"})]})})]})}}]),s}(c.a.Component)),D=s.p+"static/media/pj1.b34fd4de.png",E=(s(31),s(32),s(33),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleProjectChanged=function(e){var t=[];n.state.projects.map((function(s){return s.id===e?t.push(Object(o.a)(Object(o.a)({},s),{},{active:!0})):t.push(Object(o.a)(Object(o.a)({},s),{},{active:!1})),t})),n.setState({projects:t})},n.state={projects:[{id:"project1",name:"coming soon",briefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident dolorem id sequi vitae quod totam explicabo, tempora ex nulla aliquam? Ipsam architecto nam cum maiores, error quis eum dicta?",technologies:["HTML5","CSS3","Sass"],active:!0},{id:"project2",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1},{id:"project3",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1},{id:"project4",name:"coming soon",briefDescription:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum ea repellendus laudantium recusandae officiis fugit magni nemo, officia similique!",technologies:["HTML5","CSS3","JS"],active:!1}]},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(j.Consumer,{children:function(t){var s=t.darkModeState;return Object(p.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[e.state.projects.map((function(t,s){return t.active&&Object(p.jsxs)("div",{className:"".concat(e.props.blockClassName,"_content"),children:[Object(p.jsxs)("div",{className:"content_details",children:[Object(p.jsx)(m,{extraClasses:"title",children:t.name}),Object(p.jsx)(O,{extraClasses:"technologies",children:t.technologies.map((function(e,t){return Object(p.jsx)(m,{itemExtraClasses:"anm-dr-4x anm-dl-".concat(6+t,"x"),extraClasses:"text-tag",children:e},t)}))}),Object(p.jsx)(m,{extraClasses:"description",children:t.briefDescription})]}),Object(p.jsx)("div",{className:"content_images",children:Object(p.jsx)(L,{children:Object(p.jsx)("img",{src:D,alt:"projectImage"})})})]},t.id)})),Object(p.jsx)(v,{extraClasses:"".concat(e.props.blockClassName,"_navigator"),children:e.state.projects.map((function(t,s){return Object(p.jsx)(N,{activated:t.active,itemExtraClasses:"tst-dl-".concat(s,"x"),clicked:function(){e.handleProjectChanged(t.id)},children:Object(p.jsx)(m,{children:s<9?"0".concat(1+s):1+s})},t.id)}))})]})}})}}]),s}(c.a.Component)),H=(s(34),s(35),s(36),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={contactLinks:[{icon:Object(p.jsx)(y.h,{}),href:"mailto:nhnghia.dev@gmail.com?&subject=Job opportunity"},{icon:Object(p.jsx)(y.d,{}),href:"https://www.facebook.com/nhnghia.fedev/"},{icon:Object(p.jsx)(y.g,{}),href:"https://www.linkedin.com/in/ngh%C4%A9a-nguy%E1%BB%85n-988900216/"},{icon:Object(p.jsx)(y.c,{}),href:"https://codepen.io/nhnghia-dev"},{icon:Object(p.jsx)(y.e,{}),href:"https://github.com/nguyenhnghia"}]},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsx)(j.Consumer,{children:function(t){var s=t.darkModeState;return Object(p.jsxs)(_,{extraClasses:s?"section-dark ".concat(e.props.blockClassName):"section-light ".concat(e.props.blockClassName),children:[Object(p.jsxs)(m,{extraClasses:"".concat(e.props.blockClassName,"_title"),children:["Looking for a",Object(p.jsx)("br",{})," front-end fresher"]}),Object(p.jsxs)(m,{extraClasses:"".concat(e.props.blockClassName,"_paragraph"),children:["To land my first job, I'm currently seeking for a front-end fresher position. So if you are looking for a front-end fresher, why not"," ",Object(p.jsx)(N,{children:"check my resume"})," and give us a chance to work together ?"]}),Object(p.jsx)(O,{extraClasses:"".concat(e.props.blockClassName,"_list"),children:e.state.contactLinks.map((function(t,s){return Object(p.jsx)(N,{itemExtraClasses:"tst-dl-".concat(e.state.contactLinks.length-s,"x"),clicked:function(){window.open(t.href,"_blank")},children:Object(p.jsx)("span",{className:"icon",children:t.icon})},s)}))})]})}})}}]),s}(c.a.Component)),P=s.p+"static/media/portrait.99a9bd9f.png",q=(s(37),s(38),s(39),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=new Image;e.src=P,window[P]=e}},{key:"componentWillUnmount",value:function(){delete window[P]}},{key:"render",value:function(){return Object(p.jsx)(j.Consumer,{children:function(e){var t=e.darkModeState?"portrait-dark":"portrait-light";return Object(p.jsx)("div",{className:"portrait ".concat(t),children:Object(p.jsx)("img",{src:P,alt:"portrait"})})}})}}]),s}(c.a.Component)),T=(s(40),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleScroll=function(e){var t=document.getElementsByClassName("app")[0],s=e.target,c=((s.scrollTop+s.clientHeight)/s.scrollHeight*100).toFixed(0);t.classList="app scroll-".concat(c),c<37&&n.handleSectionsStateChanged(0),c>=37&&c<62&&n.handleSectionsStateChanged(1),c>=62&&c<87&&n.handleSectionsStateChanged(2),c>=87&&n.handleSectionsStateChanged(3)},n.handleSectionsStateChanged=function(e){var t=n.state.sections[e].id;if(!n.state.sections[e].active){var s=[];n.state.sections.forEach((function(e){e.id===t?s.push(Object(o.a)(Object(o.a)({},e),{},{active:!0})):s.push(Object(o.a)(Object(o.a)({},e),{},{active:!1}))})),n.setState({sections:s})}},n.handleNavigate=function(e){document.getElementsByClassName(e)[0].scrollIntoView()},n.state={sections:[{id:"home",name:"Home",title:"Wellcome to my website",active:!0,icon:Object(p.jsx)(y.f,{})},{id:"about",name:"About",title:"About me",active:!1,icon:Object(p.jsx)(y.l,{})},{id:"works",name:"Works",title:"Things I've built",active:!1,icon:Object(p.jsx)(y.b,{})},{id:"contact",name:"Contact",title:"Let's talk",active:!1,icon:Object(p.jsx)(y.j,{})}]},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app scroll-25",onScroll:this.handleScroll,children:[Object(p.jsx)(w,{blockClassName:"header",navigator:this.state.sections,navigate:this.handleNavigate}),Object(p.jsx)(q,{darkMode:this.state.darkMode}),Object(p.jsx)(M,{blockClassName:this.state.sections[0].id,sections:this.state.sections,navigate:this.handleNavigate}),Object(p.jsx)(I,{blockClassName:this.state.sections[1].id,sections:this.state.sections,navigate:this.handleNavigate}),Object(p.jsx)(E,{blockClassName:this.state.sections[2].id,sections:this.state.sections}),Object(p.jsx)(H,{blockClassName:this.state.sections[3].id,sections:this.state.sections})]})}}]),s}(c.a.Component)),B=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(){n.setState((function(e){return{darkModeState:!e.darkModeState}}))};var c=(new Date).getHours();return n.state={darkModeState:c>=18||c<=5,darkModeChanged:n.handleChange},n}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)(j.Provider,{value:this.state,children:this.props.children})}}]),s}(c.a.Component);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{children:Object(p.jsx)(T,{})})}),document.getElementById("root")),r()}],[[41,1,2]]]);
//# sourceMappingURL=main.240e65df.chunk.js.map