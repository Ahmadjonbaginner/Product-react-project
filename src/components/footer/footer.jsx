import React from 'react'
import './footer.css'

import footerImg from '../../assets/footer-scren.png'


const Footer = () =>{
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__left">
                        <h6 className='footer__left__title'>Join 100 Compannies who boost their business with Product</h6>
                        <button className='footer__left__btn'>Get This</button>
                    </div>
                    <img className='footer__img' src={footerImg} alt="scren" />
                </div>
            </div>
        </footer>
    )
} 

export default Footer