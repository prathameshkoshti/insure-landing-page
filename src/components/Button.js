import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button className={this.props.isNavButton === 'yes' ? 'button nav-button' : 'button'}>
				{this.props.value}
			</button>
		)
	}
}

export default Button;