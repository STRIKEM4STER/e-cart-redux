import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'






function Footer() {
  return (
    
<div className='py-10 md:px-20 px-10  bg-violet-900 md:grid grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]  text-white'>

<div className="">
        <h1 className='text-3xl text-white p-4'>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} /> E-CARt
        </h1>
        <p className='text-white text-sm px-4 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam quisquam eveniet modi consequuntur. Id neque deleniti deserunt esse tempora eos, delectus provident at aut ut dolor magni saepe aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, totam eius! In consectetur, voluptate voluptatem commodi non iure ab culpa rerum ratione nam veniam sapiente modi ea, nulla iste voluptatum?
        </p>

</div>
<div className='md:flex justify-center mt-10 md:mt-0'>

    <div>
    <h1 className='text-3xl text-white py-4'>Links</h1>
    <p  >Home</p>
    <p className='mt-3' >Wishlist</p>
    <p className='mt-3'>BootsWatch</p>
    </div>

</div>
<div className='md:flex justify-center mt-10 md:mt-0'>

<div >
  <h1 className='text-3xl text-white py-4'>Guides</h1>
  <p  >Home</p>
    <p className='mt-3' >Wishlist</p>
    <p className='mt-3'>BootsWatch</p>
  </div>

</div>


<div className='md:px-10 mt-10 md:mt-0' > 

        <h1 className='text-3xl text-white p-4'>
          Contact Us
        </h1>

        <div className='flex' >
          <input type="text" placeholder='Email Id' className='p-3 rounded w-full' />
          <button className='p-3 bg-orange-600 ms-3 rounded' >Subscribe</button>
        </div>

      <div className="flex justify-between mt-6">
       <FontAwesomeIcon icon={faXTwitter} className='text-3xl' />
       <FontAwesomeIcon icon={faLinkedin} className='text-3xl'/>
      <FontAwesomeIcon icon={faFacebook} className='text-3xl' />
       <FontAwesomeIcon icon={faInstagram} className='text-3xl' /> 
      </div>

</div>

</div>

  )
}

export default Footer