import React from 'react';
import Button from './Button';
import desktopBanner from '../images/image-intro-desktop.jpg'

class Banner extends React.Component {
	render() {
		return (
			<div className="banner">
				<div className="content">
					<h1>Humanizing your insurance.</h1>
					<p>Get your life insurance coverage easier and faster. We blend our expertise
	and technology to help you find the plan that’s right for you. Ensure you
	and your loved ones are protected.</p>
					<Button value="view plans" />
				</div>
				<div className="image">
					<img src={desktopBanner} alt="" width="540px" />
				</div>
			</div>
		);
	}
}

export default Banner;