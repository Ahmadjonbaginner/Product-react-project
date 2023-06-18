import React from 'react'
import './strategies.css'
import strategiesCard1 from '../../assets/strategies-card1.jpg'
import strategiesCard2 from '../../assets/strategies-card2.jpg'
import strategiesCard3 from '../../assets/strategies-card3.jpg'



const Strategies = () => {
    return (
        <section className='strategies-sect'>
            <div className="container">
                <div className="strategies">
                    <h3 className='strategies__title'>Contents Strategies</h3>
                    <p className='strategies__text'>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                    <div className="strategies__cards">
                        <div className="strategies__cards__card">
                            <img className='strategies__cards__card__img' src={strategiesCard1} alt="work" />
                            <p className='strategies__cards__card__data'>By  
                                <span className='strategies__cards__card__data__name'> Wahid Ari </span>|  03 March 2019
                            </p>
                            <h4 className='strategies__cards__card__title'>Increasing Prosperity With Positive Thinking</h4>
                        </div>
                        <div className="strategies__cards__card">
                            <img className='strategies__cards__card__img' src={strategiesCard2} alt="work" />
                            <p className='strategies__cards__card__data'>By  
                                <span className='strategies__cards__card__data__name'> Wahid Ari </span>|  03 March 2019
                            </p>
                            <h4 className='strategies__cards__card__title'>Motivation Is The First Step To Success</h4>
                        </div>
                        <div className="strategies__cards__card">
                            <img className='strategies__cards__card__img' src={strategiesCard3} alt="buildings" />
                            <p className='strategies__cards__card__data'>By  
                                <span className='strategies__cards__card__data__name'> Wahid Ari </span>|  03 March 2019
                            </p>
                            <h4 className='strategies__cards__card__title'>Success Steps For Your Personal Or Business</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Strategies