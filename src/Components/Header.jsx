import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Header() {

  const [show, setShow]= useState(false)

  return (
    <nav className='bg-violet-900 md:p-5 p-3 text-white w-100 ' >

      <div className="md:flex items-center px-10">
      <div className='flex w-full '>
        <Link to={"/"}><h1 className='text-3xl text-white ' > <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /> E-CARt</h1></Link>

        <button onClick={()=>setShow(!show)} className='border border-white p-2 text-white  ms-auto rounded md:hidden' > <FontAwesomeIcon icon={faBars} /> </button>

        </div>
     

        { show && <ul className='flex mt-5 md:hidden '>
        <Link to={"/Wishlist"}>
          <li>
          <button className=' hover:bg-white hover:text-violet-900 border-2 rounded me-3' style={{width:"110px",height:"50px"}} > <FontAwesomeIcon icon={faHeart} style={{color: "#ff004c",}} /> Wishlist <span className='bg-white rounded px-1 text-black' >0</span> </button>
          </li>
        </Link>
        <Link to={"/Cart"}>
          <li>
          <button className='  hover:bg-white hover:text-violet-900 border-2 rounded' style={{width:"100px",height:"50px"}} > <FontAwesomeIcon icon={faCartShopping} style={{color: "#63E6BE",}} /> Cart <span className='bg-white rounded px-1 text-black ' >0</span> </button>
          </li>
        </Link>
      </ul>}


      <ul className='ms-auto md:flex hidden'>
        <Link to={"/Wishlist"}>
          <li>
          <button className=' hover:bg-white hover:text-violet-900 border-2 rounded me-3' style={{width:"110px",height:"50px"}} > <FontAwesomeIcon icon={faHeart} style={{color: "#ff004c",}} /> Wishlist <span className='bg-white rounded px-1 text-black' >0</span> </button>
          </li>
        </Link>
        <Link to={"/Cart"}>
          <li>
          <button className='  hover:bg-white hover:text-violet-900 border-2 rounded' style={{width:"100px",height:"50px"}} > <FontAwesomeIcon icon={faCartShopping} style={{color: "#63E6BE",}} /> Cart <span className='bg-white rounded px-1 text-black ' >0</span> </button>
          </li>
        </Link>
      </ul>

      </div>

      {/* <div className='flex item-center md:px-10 px-5  ' >
        <Link to={"/"}><h1 className='text-3xl text-white p-10 ' > <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /> E-CARt</h1></Link>

        <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white  ml-auto rounded md:hidden' > <FontAwesomeIcon icon={faBars} /> </button>
        </div>
     

     <div className='p-9  ms-auto md:flex hidden  ' >
      <Link to={"/Wishlist"} ><button className=' hover:bg-white hover:text-violet-900 border-2 rounded me-3' style={{width:"110px",height:"50px"}} > <FontAwesomeIcon icon={faHeart} style={{color: "#ff004c",}} /> Wishlist <span className='bg-white rounded px-1 ' >0</span> </button></Link>
      <Link to={"/Cart"} ><button className='  hover:bg-white hover:text-violet-900 border-2 rounded' style={{width:"100px",height:"50px"}} > <FontAwesomeIcon icon={faCartShopping} style={{color: "#63E6BE",}} /> Cart <span className='bg-white rounded px-1 ' >0</span> </button></Link>
    </div> 

    <div className='p-9  ms-auto md:flex hidden  ' >
      <Link to={"/Wishlist"} ><button className=' hover:bg-white hover:text-violet-900 border-2 rounded me-3' style={{width:"110px",height:"50px"}} > <FontAwesomeIcon icon={faHeart} style={{color: "#ff004c",}} /> Wishlist <span className='bg-white rounded px-1 ' >0</span> </button></Link>
      <Link to={"/Cart"} ><button className='  hover:bg-white hover:text-violet-900 border-2 rounded' style={{width:"100px",height:"50px"}} > <FontAwesomeIcon icon={faCartShopping} style={{color: "#63E6BE",}} /> Cart <span className='bg-white rounded px-1 ' >0</span> </button></Link>
    </div>  */}

    </nav>
  )
}

export default Header