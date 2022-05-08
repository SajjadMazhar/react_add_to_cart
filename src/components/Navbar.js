import React from 'react'
import './nav.css'
const Navbar = ({setShow, size}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>MY SHOP</span>
                <div className='cart' onClick={()=>setShow(false)}>
                    <span>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span>{size}</span>
                </div>
        </div>
    </nav>
  )
}

export default Navbar
