import React from "react";
import { Button } from "../Button";
import './Footer.css'
import { Link } from "react-router-dom";

export function Footer() {
    return(
        <div className="footer-container">
            <section className="footer-subscription">
            <p className="footer-subscription-header">
            Type Email to subcribe to our newsletter
            </p>
            <p className="footer-subscription-test">
            </p>
            <div className="inputarea">
                <form>
                    <input
                     type="text" 
                     name="" 
                     placeholder="" 
                     className="footer-input" 
                    />
                <Button buttonstyle='btn-outline'>
                    Subcribe
                </Button >
                </form>
            </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/sign-up'>TEST</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/sign-up'>TEST</Link>

                    </div>
                </div>
                                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/sign-up'>TEST</Link>

                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign Up</Link>
                        <Link to='/sign-up'>TEST</Link>

                    </div>
                </div>
            </div>
            <section className="social-media">
            <div className="social-media-warp">
                <Link to='/' className="social-logo">
                    HERE <i className="fa fa-facebook"></i>
                </Link>
            </div>
            </section>
            <section>
                <div className="social-icons">
                    <Link className="social-icon-link facebook">
                            <i className="fa fa-facebook-f" 
                                to='/' 
                                target='_blank' 
                                aria-label="Facebook"> </i>
                    </Link>
                    <Link className="social-icon-link facebook">
                            <i className="fa fa-facebook-f" 
                                to='/' 
                                target='_blank' 
                                aria-label="Facebook"> </i>
                    </Link>
                </div>
                </section>
                <small className="website-rights">testtesttesttesttesttesttesttest</small>
          
        </div>
    )
}