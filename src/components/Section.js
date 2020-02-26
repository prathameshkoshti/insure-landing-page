import React from 'react';
import SectionItem from './SectionItem.js';

class Section extends React.Component {
	render() {
		return (
			<section>
				<h1>We're different</h1>
				<div className="section-items">
					<SectionItem title="Snappy Process" text="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms." image="snappy-process" />
					<SectionItem title="Affordable Prices" text="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible." image="snappy-process" />
					<SectionItem title="People First" text="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it." image="snappy-process" />
				</div>
			</section>
		);
	}
}

export default Section;