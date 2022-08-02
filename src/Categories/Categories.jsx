import React from 'react';
import Category from './Category';

const Categories = () => {
	return (
		<section className="categories-section">
			<h2 className="title">hot job categories</h2>
			<div className="categories__container">
				<Category title="web development" numberOfOpenPositions="612" />
				<Category title="apps developer" numberOfOpenPositions="612" />
				<Category title="sales and marketting" numberOfOpenPositions="612" />
				<Category title="UX designer" numberOfOpenPositions="612" />
				<Category title="hardware engineer" numberOfOpenPositions="612" />
				<Category title="program manager" numberOfOpenPositions="612" />
				<Category title="chief cheff" numberOfOpenPositions="612" />
				<Category title="strategy planner" numberOfOpenPositions="612" />
				<Category title="deliveries expert" numberOfOpenPositions="612" />
				<Category title="proffesional teacher" numberOfOpenPositions="612" />
				<Category title="AI/ML Expert" numberOfOpenPositions="612" />
				<Category title="SEO Expert" numberOfOpenPositions="612" />
				<Category title="DEVOPS engineer" numberOfOpenPositions="612" />
				<Category title="DEVSECOPS engineer" numberOfOpenPositions="612" />
				<Category title="product manager" numberOfOpenPositions="612" />
				<Category title="social media ex" numberOfOpenPositions="612" />
			</div>
		</section>
	)
}

export default Categories;