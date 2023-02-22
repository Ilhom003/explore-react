import React from "react";
import './card.css';
import datas from '../mock/mock'
import time from '../../assets/icons/time.png'
import people from '../../assets/icons/people.png'
import star from '../../assets/icons/star.png'
import location from '../../assets/icons/location.png'

function Card() {
    return (
        <section className="cards">
            <div className="card__wrapper">
            {
                datas.map((value) => {
                    return (
                        <div className="card">
                            <div key={value.id} className="card__img">
                                <img src={value.img} alt='img' />
                            </div>
                            <div className="card__text">
                                <h3 className="heading-3 card__text_title">{value.title}</h3>
                                <div className="card__viewer">
                                    <p className="paragraph card__icons"><img src={time} alt='time' /> {value.day} Day's</p>
                                    <p className="paragraph card__icons"><img src={people} alt='people' /> {value.person} Person</p>
                                    <p className="paragraph card__icons"><img src={star} alt='star' /> {value.review.rewiew_count1} ({value.review.rewiew_count2} Review)</p>
                                </div>
                                <div className="card__location">
                                    <p className="paragraph card__icons"><img src={location} alt='location' /> {value.location}</p>
                                    <button className="btn card__btn">{value.price}</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default Card