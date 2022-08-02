import React from 'react';
import {ArrowRight} from '../Icons/Icons';

const Category = ({title, numberOfOpenPositions}) => {
	return(
		<div className="category">
			<div className="category__text">
				<p className="catgory__text--title">{title}</p>
				<p className="category__positions">
					<span className="category__number-of-pos">{numberOfOpenPositions}</span>
					<span className="category__number--text">open positions</span>
				</p>
			</div>
			<button className="category__cta">
				<ArrowRight />
			</button>
		</div>
	)
}

export default Category;