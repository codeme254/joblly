import React from 'react';
import Feature from './Feature';
import { PaperPlane, Envelope, Star, Download, ListIcon, Message } from '../Icons/Icons';

const Features = () => {
	return(
		<section className="features-section">
			<h2 className="title">why choose us</h2>
			<div className="features__container">
				<Feature icon={<PaperPlane />} title="instant jobs" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
				<Feature icon={<Star />} title="100% satisfaction" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
				<Feature icon={<Download />} title="free updates" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
				<Feature icon={<ListIcon />} title="up to date jobs" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
				<Feature icon={<Message />} title="employee protection" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
				<Feature icon={<Envelope />} title="regular communications" description="lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at." />
			</div>
		</section>
	)
}
export default Features;