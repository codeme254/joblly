import React from 'react';

const Feature = ({icon, title, description, linkToLearnMore}) => {
	return(
		<div className="feature">
			<div className="feature__icon">
				{icon}
			</div>
			<h4 className="feature__title">{title}</h4>
			<p className="feature__description">{description}</p>
			<a className="feature__learn-more-link" href={linkToLearnMore || '/'}> learn more </a>
		</div>
	)
}

export default Feature;