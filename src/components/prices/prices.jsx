import React from 'react'
import './prices.css'

const Prices = () => {
    return (
        <section className='prices-sect'>
            <div className="container">
                <div className="prices">
                    <h4 className='prices__title'>Price Table</h4>
                    <p className='prices__text'>We offer competitive price</p>
                    <div className="prices__tables">
                        <div className="prices__tables__table">
                            <h4 className='prices__tables__table__title'>Free</h4>
                            <span className='prices__tables__table__span'>Brief price description</span>
                            <div className="prices__tables__table__price">0
                                <div>
                                    <span className='prices__tables__table__price__logo'>$</span>
                                    <span className='prices__tables__table__price__day'>Per / month</span>
                                </div>
                            </div>
                            <span className='prices__tables__table__operator'>Only 2 Operators</span>
                            <span className='prices__tables__table__notific'>Notifications</span>
                            <span className='prices__tables__table__landing'>Landing Pages</span>
                            <button className='prices__tables__table__btn'>Order Now</button>
                        </div>
                        <div className="prices__tables__table">
                            <h4 className='prices__tables__table__title'>Free</h4>
                            <span className='prices__tables__table__span'>Brief price description</span>
                            <div className="prices__tables__table__price">0
                                <div>
                                    <span className='prices__tables__table__price__logo'>$</span>
                                    <span className='prices__tables__table__price__day'>Per / month</span>
                                </div>
                            </div>
                            <span className='prices__tables__table__operator'>Only 2 Operators</span>
                            <span className='prices__tables__table__notific'>Notifications</span>
                            <span className='prices__tables__table__landing'>Landing Pages</span>
                            <button className='prices__tables__table__btn'>Order Now</button>
                        </div>
                        <div className="prices__tables__table">
                            <h4 className='prices__tables__table__title'>Free</h4>
                            <span className='prices__tables__table__span'>Brief price description</span>
                            <div className="prices__tables__table__price">0
                                <div>
                                    <span className='prices__tables__table__price__logo'>$</span>
                                    <span className='prices__tables__table__price__day'>Per / month</span>
                                </div>
                            </div>
                            <span className='prices__tables__table__operator'>Only 2 Operators</span>
                            <span className='prices__tables__table__notific'>Notifications</span>
                            <span className='prices__tables__table__landing'>Landing Pages</span>
                            <button className='prices__tables__table__btn'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices