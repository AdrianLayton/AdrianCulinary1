import React from 'react';

const About = () => {
	return (
		<div className='about'> 
				<div className='about-cook'>
				<h4> About the Chef </h4>
				<h6> How it All Started </h6>
				
				<p className='about-description'> It all started with a whimsical story. Of my mother leaving me home alone at 11 and me making my first meal using google, and some chicken from the fridge. My mom wasn't to happen about the chicken when she came home, but I learned in over a decade in cooking is you don't have to be  a genius to cook a 5-star meal. This site is about luxury cooking for the everday person   </p>
				</div>
			<div className='about-site'>
				<p className='about-description'>
					I want to use this website to empower people through cooking, and open people's eyes to the vast benefits it offers 
					<ul>
						<li>You will save anywhere from 50%-70% on food. For a savings of up to $3000 per year. </li>
						<li>Your food is infintely more customizable then when you go out to eat</li>
						<li> You'll become healthier. Resteraunts often use the cheaper ingredients(canola,soybean oil, malodextrin, MSG, sugar) to get the maximum profits. By cutting these out you can see the pounds drop, skin look healthier and more energy during the day. </li>
						<li> </li>
					</ul>
				</p>
			</div>
			<div className='cook-media'>
					<img className='knife-gif' src="https://s3.amazonaws.com/www.adrianculinary.com/img/knifeskills.gif"/>
			</div>
		</div>
		)
}

export default About;
