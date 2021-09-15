import React from "react";

import Text from "../text";

import "./list.scss";
class list extends React.Component {
	render() {
		return (
			<ul
				id={this.props.id}
				className={
					this.props.extraClasses
						? `list ${this.props.extraClasses}`
						: "list"
				}
			>
				{Array.isArray(this.props.children) ? (
					this.props.children.map((child, index) => {
						var itemExtraClasses = child.props.itemExtraClasses
							? ` ${child.props.itemExtraClasses}`
							: "";
						return (
							<li
								key={index}
								className={
									child.props.activated
										? `list_item-active${itemExtraClasses}`
										: `list_item${itemExtraClasses}`
								}
							>
								{child}
							</li>
						);
					})
				) : (
					<li className="list_item">{this.props.children}</li>
				)}
			</ul>
		);
	}
}
list.defaultProps = {
	children: <Text>List</Text>,
};
export default list;
