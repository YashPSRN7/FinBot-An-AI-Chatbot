import React, { useState } from "react";
import Popup from "./Popup";
import "./Popup.css";

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.togglePopup = this.togglePopup.bind(this);

		this.state = { isOpen: false };
	}
	togglePopup() {
		this.setState({ isOpen: !this.state.isOpen });
		console.log(this.state.isOpen);
	}
	render() {
		return (
			<div>
				<button className="buttonx" onClick={this.togglePopup}>
					Button
				</button>
				{this.state.isOpen && (
					<Popup
						content={
							<>
								<b>Design your Popup</b>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<button>Test button</button>
							</>
						}
						handleClose={this.togglePopup}
					/>
				)}
			</div>
		);
	}
}

export default Test;
