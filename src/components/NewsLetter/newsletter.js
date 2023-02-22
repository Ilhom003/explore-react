import React from 'react';
import './newsletter.css';

function NewsLetter() {
    return (
        <section className="newsletter">
            <div className="newsletter__wrapper">
                <h1 className="heading-1">Sign Up For Our Newsletter</h1>
                <div className="newsletter__form">
                    <input className="input" placeholder="Enter your e-mail here" />
                    <button className="btn">Subscribe Now</button>
                </div>
            </div>
        </section>
    )
}
export default NewsLetter