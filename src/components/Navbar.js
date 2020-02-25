import React from 'react';
import Button from './Button';
import logo from '../images/logo.svg'

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<img className="logo" src={logo} alt="" />
				<ul>
					<li>How we work</li>
					<li>Blog</li>
					<li>Account</li>
					<li><Button isNavButton="yes" value="View Plans" /></li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;