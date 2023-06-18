import React from "react";
import './clients.css'
import stars from '../../assets/stars.svg'
import userImg from '../../assets/user__img.png'


const Clients = () => {
    return (
        <section className="clients-sect">
            <div className="container">
                <div className="clients">
                    <h4 className="clients__title">What Clients Say</h4>
                    <p className="clients__text">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className="clients__cards">
                        <div className="clients__cards__card">
                            <img className="clients__cards__card__img" src={stars} alt="stars" />
                            <p className="clients__cards__card__text">Product helps you see how many more days you need to work to reach your financial goal. </p>
                            <div className="clients__cards__card__user">
                                <img className="clients__cards__card__user__img" src={userImg} alt="user-img" />
                                <div className="clients__cards__card__user__data">
                                    <span className="clients__cards__card__user__data__name">Wahid Ari</span>
                                    <span className="clients__cards__card__user__data__profess">Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="clients__cards__card">
                            <img className="clients__cards__card__img" src={stars} alt="stars" />
                            <p className="clients__cards__card__text">Product helps you see how many more days you need to work to reach your financial goal. </p>
                            <div className="clients__cards__card__user">
                                <img className="clients__cards__card__user__img" src={userImg} alt="user-img" />
                                <div className="clients__cards__card__user__data">
                                    <span className="clients__cards__card__user__data__name">Wahid Ari</span>
                                    <span className="clients__cards__card__user__data__profess">Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="clients__cards__card">
                            <img className="clients__cards__card__img" src={stars} alt="stars" />
                            <p className="clients__cards__card__text">Product helps you see how many more days you need to work to reach your financial goal. </p>
                            <div className="clients__cards__card__user">
                                <img className="clients__cards__card__user__img" src={userImg} alt="user-img" />
                                <div className="clients__cards__card__user__data">
                                    <span className="clients__cards__card__user__data__name">Wahid Ari</span>
                                    <span className="clients__cards__card__user__data__profess">Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients