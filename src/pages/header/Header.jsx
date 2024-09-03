import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

export default function Header() {
  const {data: categories, loading, error} = useFetch(`/categories?populate=*`)
  
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>
  
  // Ограничение вывода до 5 категорий
  const displayedCategories = categories?.slice(0, 5);
  
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="headbut">
            <span className="circle"></span>
          </div>

          <form className="form">
            <button></button>
            <input
              className="input"
              placeholder="Looking for shoes"
              required=""
              type="text"
            />
          </form>

          <Link to={"/cart"} className="headcor">
            <span className="corzin"></span>
          </Link>
        </div>
      </header>
      
      <main>
        <div className="brands-container">
          {displayedCategories?.map((category) => (
            <Link to={`/products/${category.id}`} key={category.id} className="">
              <p className='categoryName'>{category.attributes.name}</p> {/* Отображение имени категории */}
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
