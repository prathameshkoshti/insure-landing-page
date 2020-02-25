import React from 'react'
import logo from '../images/logo.svg'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="footer-heading">
					<img className="logo" src={logo} alt="" />
					<ul>
						<li><i className="fab fa-facebook-square fa-lg"></i></li>
						<li><i className="fab fa-twitter fa-lg"></i></li>
						<li><i className="fab fa-pinterest fa-lg"></i></li>
						<li><i className="fab fa-instagram fa-lg"></i></li>
					</ul>
				</div>
				<div className="footer-body">
					<div className="footer-item">
						<div className="heading">
							our company
						</div>
						<ul>
							<li>How we work</li>
							<li>Why insure?</li>
							<li>view plans</li>
							<li>reviews</li>
						</ul>
					</div>
					<div className="footer-item">
						<div className="heading">
							Help me
						</div>
						<ul>
							<li>FAQ</li>
							<li>Terms of use</li>
							<li>privacy policy</li>
							<li>cookies</li>
						</ul>
					</div>
					<div className="footer-item">
						<div className="heading">
							Contact
						</div>
						<ul>
							<li>Sales</li>
							<li>Support</li>
							<li>live chat</li>
						</ul>
					</div>
					<div className="footer-item">
						<div className="heading">
							others
						</div>
						<ul>
							<li>careers</li>
							<li>Press</li>
							<li>License</li>
						</ul>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;