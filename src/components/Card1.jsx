
import React from 'react'
import './Card.css'
import Popup from "./Popup";

class Card1 extends React.Component {
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
			<div class="col-lg-6 col-md-12 col-sm-12" onClick={this.togglePopup}>
				<div class="panel-1 p-content">
					<h3>
						 <span>{this.props.heading}</span>
					</h3>
					<p>
						{this.props.body}
					</p>
					{this.state.isOpen && (
						<Popup
							content= {this.props.content}
							handleClose={this.togglePopup}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default Card1;