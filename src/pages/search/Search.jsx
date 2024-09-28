import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './search.css';
import arrow from '../../img/fovorit/Arrow.png';
import search from './img/search.svg';
import time from './img/time.svg';

export default function Search() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    if (query) {
      setSearchQuery(query); // Устанавливаем поисковый запрос из URL
    }
  }, [location]);

  return (
    <div className="search_wrapper">
      <header className='header_search'>
        <div className='wrappersearch'>
          <div className='search_but'>
            <img className='search_circle' src={arrow} alt="" />
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
          <input
            className="search_form_input"
            placeholder="Search Your Shoes"
            required=""
            type="text"
            value={searchQuery} // Устанавливаем значение поля
            onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние при вводе
          />
        </form>
      </main>

      <section className='section_search_wrap'>
        <div className="section_search_title">
          <h1 className='section_search_text'>Shoes</h1>

          <div className="section_search_quest">
            {/* Здесь можно добавить динамическое отображение результатов поиска */}
          </div>
        </div>
      </section>
    </div>
  );
}
