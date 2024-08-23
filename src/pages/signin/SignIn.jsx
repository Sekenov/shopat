import React from 'react'
import './SignIn.css';
import arrow from '../../img/fovorit/Arrow.png';
import google from '../../img/signin/Group 108.svg'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <div className="Signin">
        <header className="header">
            <div className="container_arrow">
                <div className="img_arrow" onClick={handleBackClick}>
                    <img className="arrow" src={arrow} alt=""></img>
                </div>
            </div>
        </header>

        <nav className="title">
            <div className="text">
                <h1 className='hel'>Hello Again!</h1>
                <p className='wel'>Welcome Back You’ve Been Missed!</p>
            </div>
        </nav>

        <form className="form-registr">
            <div className="flex-column">
            <h1 className='em'>Email Address</h1>
            </div>

            <div className="inputForm">
                <input type="text" className="input ema" placeholder="Enter your Email"></input>
            </div>
            
            <div className="flex-column">
            <h1 className='em'>Password</h1>
            </div>

            <div className="inputForm">
                <input type="password" className="input pas" placeholder="Enter your Password"></input>
            </div>

            <div className="flex-row">
                <div>

                </div>
                <span className="recovery"><a href="/">Recovery Password</a></span>
            </div>

            
            <div className="btn">
                    <button className="button-sign">Sign In</button>

                    <button className="button-google">
                        <img src={google} alt="" />
                         Sign in with google
                    </button>
            </div>

            
            <p className="have">Don’t have an account? <Link to={"/signup"}  className="free">Sign Up for Free</Link></p>
        </form>
    </div>
  )
}
