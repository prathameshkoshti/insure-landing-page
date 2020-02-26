import React from 'react';
import Button from './Button'
import BG from '../images/bg-pattern-how-we-work-desktop.svg'

class Section2 extends React.Component {
	render() {
		return (
			<section className="section-2">
				<h1>Find out more<br /> about how we work</h1>
				<Button value="how we work" />
				<img src={BG} width="540px" />
			</section>
		)
	}
}

export default Section2;