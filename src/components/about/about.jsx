import React from "react";
import './about.css';
import aboutBlock1 from '../../assets/about__block1.svg'
import aboutBlock2 from '../../assets/about__block2.svg'
import aboutBlock3 from '../../assets/about__block3.svg'
import aboutBlock4 from '../../assets/about__block4.svg'



const About = () => {
    return(
        <section className="about-sect">
            <div className="container">
                <div className="about">
                    <h2 className="about__title">Product  was Built Specifically for You</h2>
                </div>
            </div>
                <div className="about-bg">
                    <div className="container">
                        <div className="about__box">
                            <div className="about__box__block">
                                <img className="about__box__block__icon" src={aboutBlock1} alt="pointr-icon" />
                                <h4 className="about__box__block__title">First click tests</h4>
                                <p className="about__box__block__text">While most people enjoy casino gambling,</p>
                            </div>
                            <div className="about__box__block">
                                <img className="about__box__block__icon" src={aboutBlock2} alt="pointr-icon" />
                                <h4 className="about__box__block__title">Design surveys</h4>
                                <p className="about__box__block__text">Sports betting, lottery and bingo playing for the fun</p>
                            </div>
                            <div className="about__box__block"> 
                                <img className="about__box__block__icon" src={aboutBlock3} alt="pointr-icon" />
                                <h4 className="about__box__block__title">Preference tests</h4>
                                <p className="about__box__block__text">The Myspace page defines the individual.</p>
                            </div>
                            <div className="about__box__block">
                                <img className="about__box__block__icon" src={aboutBlock4} alt="pointr-icon" />
                                <h4 className="about__box__block__title">Five second tests</h4>
                                <p className="about__box__block__text">Personal choices and the overall personality of the person.</p>
                            </div>
                        </div>
                        <a className="about__link" href="#">SIGN UP NOW</a>
                    </div>
                </div>
            
        </section>
    )
}
export default About

