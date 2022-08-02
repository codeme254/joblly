import React from 'react';
import img from '../assets/images/proud.svg';

const Contact = () => {
	return(
		<section className="contact-section">
		<h2 className="title">talk to us today</h2>
			<div className="contact-section__container">
				<div className="contact-section__form">
					<form className="form">
						<h3 className="form__title">contact us</h3>
						<div className="form__flex">
							<div className="form__group u-form__marg-fix">
								<label className="form__group--label" for="name">first name</label>
								<input className="form__group--input" type="text" id="name" placeholder="first name"/>
							</div>
							<div className="form__group">
								<label className="form__group--label" for="lname">last name</label>
								<input className="form__group--input" type="text" id="lname" placeholder="last name"/>
							</div>
						</div>

						<div className="form__group">
							<label className="form__group--label" for="mail">email address</label>
							<input className="form__group--input" type="mail" id="mail" placeholder="example@gmail.com"/>
						</div>
						<div className="form__group">
							<label className="form__group--label" for="sub">subject</label>
							<input className="form__group--input" type="text" id="sub" placeholder="subject"/>
						</div>
						<div className="form__group">
							<label className="form__group--label" for="message">message</label>
							<textarea className="form__group--input form__group--input--textarea" id="message" />
						</div>
						<div className="form__group">
							<button className="form__group--btn" type="submit">submit</button>
						</div>
					</form>
				</div>
				<div className="contact-section__image">
					<img src={img} alt = "feeling proud" className="contact-section__image--img" />
				</div>
			</div>
		</section>
	)
}

export default Contact;