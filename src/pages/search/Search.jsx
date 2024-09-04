import React from 'react'
import './Search.css';

import arrow from '../../img/fovorit/Arrow.png';
import search from '../../img/search/Vector.svg';
import time from '../../img/search/Time.svg';

export default function Search() {
  return (
    <div className="search_wrapper">
        <header className='header_search'>
            <div className='wrappersearch'>
                <div className='search_but'>
                    <img className='search_circle' src={arrow}  alt="" />
                </div>

                <div className="search_text">
                    <h1 className='search_text_head'>Search</h1>
                </div>


                <div className="serch_cancel">
                    <h1 className='serch_cancel_text'>Cancel</h1>
                </div>
            </div>
        </header>

        <main className='main_search'>
            <form className="search_form">
                <img className='search_form_but' src={search} alt="" />
              <input className="search_form_input" placeholder="Search Your Shoes" required="" type="text"></input>
            </form>
        </main>

        <section className='section_search_wrap'>
            <div className="section_search_title">
                <h1 className='section_search_text'>
                    Shoes
                </h1>

                <div className="section_search_quest">
                    <div className="section_search_time">
                        <img className='section_search_img' src={time} alt="" />
                        <h1 className='section_search_scan'>
                            Nike Air Max Shoes
                        </h1>
                    </div>
                    
                    <div className="section_search_time">
                        <img className='section_search_img' src={time} alt="" />
                        <h1 className='section_search_scan'>
                            Nike Jordan Shoes
                        </h1>
                    </div>

                    <div className="section_search_time">
                        <img className='section_search_img' src={time} alt="" />
                        <h1 className='section_search_scan'>
                            Nike Air Force Shoes
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
