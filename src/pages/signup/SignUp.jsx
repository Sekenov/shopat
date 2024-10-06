import React from 'react'
import './SignUp.css';
import arrow from '../../img/fovorit/Arrow.png';
import gogle from '../../img/signin/Group 108.svg'
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate();
const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <div className="Signin">
        <header className="headerup">
            <div className="up_container_arrow">
                <div className="imgup_arrow" onClick={handleBackClick}>
                    <img className="arrow" src={arrow} alt=""></img>
                </div>
            </div>
        </header>

        <nav className="title">
            <div className="up_text">
                <h1 className='up_hel'>Create Account</h1>
                <p className='up_wel'>Let’s Create Account Together</p>
            </div>
        </nav>

        <form className="up-registr">

            <div className="up-column">
                <h1 className='up'>Name</h1>
            </div>

            <div className="inputForm">
                <input type="text" className="up_input up_ema" placeholder="Enter your Name"></input>
            </div>


            <div className="up-column">
            <h1 className='up'>Email Address</h1>
            </div>

            <div className="inputForm">
                <input type="text" className="up_input up_ema" placeholder="Enter your Email"></input>
            </div>
            
            <div className="up-column">
            <h1 className='up'>Password</h1>
            </div>

            <div className="inputForm">
                <input type="password" className="up_input up_pas" placeholder="Enter your Password"></input>
            </div>

            <div className="up-row">
                <div className='up_left'>

                </div>
                <span className="up_recovery"><a className='up_a' href="/">Recovery Password</a></span>
            </div>

            
            <div className="up_btn">
                    <button className="up_button_sign">Sign In</button>

                    <button className="up_button_google">
                        <img src={gogle} alt="" />
                         Sign in with google
                    </button>            <p className="up_have">Don’t have an account? <Link to="/signin" className="up_free">Sign Up for Free</Link></p>

            </div>

            
        </form>
    </div>
  )
}
