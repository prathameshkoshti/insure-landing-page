import React from 'react';
import snappyProcess from '../images/icon-snappy-process.svg'
import peopleFirst from '../images/icon-people-first.svg'
import affordablePrices from '../images/icon-affordable-prices.svg'

class SectionItem extends React.Component {
	getImage() {
		if (this.props.image === 'snappy-process') {
			return snappyProcess;
		}
		else if (this.props.image === 'affordable-prices') {
			return affordablePrices;
		}
		else if (this.props.image === 'people-first') {
			return peopleFirst;
		}
	}
	render() {
		return (
			<div className="section_item">
				<img src={this.getImage()} alt="" width="100px" />
				<h2>
					{this.props.title}
				</h2>
				<p>
					{this.props.text}
				</p>
			</div>
		);
	}
}

export default SectionItem;