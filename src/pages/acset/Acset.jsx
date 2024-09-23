import React from 'react'
import './Acset.css';

import arrow from '../../img/fovorit/Arrow.png';
import rightarrow from '../../img/acset/Arrow.svg';
import notification from '../../img/acset/Notifications.svg';
import shop from '../../img/acset/Shopping.svg';
import play from '../../img/acset/Payment.svg';
import delet from '../../img/acset/Icon.svg';

export default function Acset() {
  return (
    <div className='acset_wrap'>
        <header className='head_acset'>
            <div className='wrapperacset'>
                <div className='acsetbut'>
                    <img className='acset_circle' src={arrow}  alt="" />
                </div>

                <div className="acset_text">
                    <h1 className='accounth1'>Account & Settings</h1>
                </div>
                <div className='pusto'>
                    
                </div>
            </div>
        </header>

        <section className='sectionAcset'>  
            <div className="sect_title_txt">
                <h1 className='title_txt'>Account</h1>
            </div>

            <div className="accauntwrapset">

                <div className="notifiset">
                    <div className="notifiset_img">
                        <img className='notification_img' src={notification} alt="" />

                        <div className="notification_title_txt">
                            <h1 className='notification_txt'>Notification Setting</h1>
                        </div>
                    </div>

                    <div className="notifarow">
                        <img className='notifarow_img' src={rightarrow} alt="" />
                    </div>
                </div>

                <div className="notifiset">
                    <div className="notifiset_img">
                        <img className='notification_img' src={shop} alt="" />

                        <div className="notification_title_txt">
                            <h1 className='notification_txt'>Shipping Address</h1>
                        </div>
                    </div>

                    <div className="notifarow">
                        <img className='notifarow_img' src={rightarrow} alt="" />
                    </div>
                </div>

                <div className="notifiset">
                    <div className="notifiset_img">
                        <img className='notification_img' src={play} alt="" />

                        <div className="notification_title_txt">
                            <h1 className='notification_txt'>Payment Info</h1>
                        </div>
                    </div>

                    <div className="notifarow">
                        <img className='notifarow_img' src={rightarrow} alt="" />
                    </div>
                </div>

                <div className="notifiset">
                    <div className="notifiset_img">
                        <img className='notification_img' src={delet} alt="" />

                        <div className="notification_title_txt">
                            <h1 className='notification_txt'>Delete Account</h1>
                        </div>
                    </div>

                    <div className="notifarow">
                        <img className='notifarow_img' src={rightarrow} alt="" />
                    </div>
                </div>

            </div>

        </section>


        <main className='mainacset'>
            <div className="main_title_txt">
                <h1 className='ac_title_txt'>App Settings</h1>
            </div>

            <div className="mainwrapset">

                <div className="app_set">
                    <div className="set_notifiset_img">
                        <div className="app_title_txt">
                            <h1 className='app_txt'>Eneble Face ID For Log In</h1>
                        </div>
                    </div>

                    <div className="appchek">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

                <div className="app_set">
                    <div className="set_notifiset_img">
                        <div className="app_title_txt">
                            <h1 className='app_txt'>Eneble Push Notifications</h1>
                        </div>
                    </div>

                    <div className="appchek">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

                <div className="app_set">
                    <div className="set_notifiset_img">
                        <div className="app_title_txt">
                            <h1 className='app_txt'>Eneble Location Services</h1>
                        </div>
                    </div>

                    <div className="appchek">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

                <div className="app_set">
                    <div className="set_notifiset_img">
                        <div className="app_title_txt">
                            <h1 className='app_txt'>Dark Mode</h1>
                        </div>
                    </div>

                    <div className="appchek">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider" />
                        </label>
                    </div>
                </div>

            </div>
        </main>

    </div>
  )
}
