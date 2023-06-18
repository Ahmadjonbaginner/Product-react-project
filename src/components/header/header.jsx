import React from "react";
import './header.css';
import navLogo from '../../assets/Producr.svg'
import navDarkMod from '../../assets/dark-mod.svg'
import heroPersons from '../../assets/amico.png'

const Header = () =>{
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                      <div className="navbar__icon">
                        <img className="navbar__icon__logo" src={navLogo} alt="product" />
                        <a className="navbar__icon__link" href="#">Product</a>
                      </div>
                        <ul className="navbar__menu">
                            <li className="navbar__menu__item">
                                <a className="navbar__menu__item__link" href="#">Product</a>
                            </li>
                            <li className="navbar__menu__item">
                                <a className="navbar__menu__item__link" href="#">Customers</a>
                            </li>
                            <li className="navbar__menu__item">
                                <a className="navbar__menu__item__link" href="#">Pricing</a>
                            </li>
                            <li className="navbar__menu__item">
                                <a className="navbar__menu__item__link" href="#">Resources</a>
                            </li>
                            <li className="navbar__menu__item">
                                <a className="navbar__menu__item__link sign-in" href="#">Sign In</a>
                            </li>
                            <button className="navbar__menu__btn">Sign Up</button>
                            <button className="navbar__menu__dark"><img className="navbar__menu__dark__click" src={navDarkMod} alt="dark-mod" /></button>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
            <div className="hero">
                <div className="hero__left">
                    <h1 className="hero__left__title">Work at the speed of thought</h1>
                    <p className="hero__left__text">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                    <div className="hero__left__block">
                        <a className="hero__left__block__get" href="#">Get started</a>
                        <a className="hero__left__block__watch" href="#">Watch the Video</a>
                    </div>
                </div>
                <img className="hero__img" src={heroPersons} alt="perosons" />
            </div>
            </div>
        </header>
    )
} 

export default Header;