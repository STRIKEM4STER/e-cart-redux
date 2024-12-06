import React from 'react'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'


function Wishlist() {

  const wishlistArray = useSelector((state)=>state.Wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  

  return (
    <div className='pt-32' >
      <h1 className='text-violet-600 text-center text-4xl mb-5' >Wishlist</h1>

      
      {wishlistArray?.length>0 ?
        <div className='pt-16 px-10 mb-10 md:grid grid-cols-4'>


      {wishlistArray?.map((item)=>(

<div className="p-2">
        <div className="rounded p-3 shadow-lg">

        <img src={item.image} alt=" no-img" className='w-full h-60' />
        <h4 className='text-center text-2xl'>{item.title.slice(0,20)}</h4>
        <p className='text-justify' >{item.description.slice(0,90)}</p>
        <p className='text-2xl p-3'>Price: <span className='text-blue-500' > ${item.price} </span> </p>
        <div className='flex justify-between'>
          <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='px-5 py-3 rounded text-white bg-red-600'> <FontAwesomeIcon icon={faTrash} /> </button>
          <button onClick={()=>dispatch(wishes(item))} className='px-5 py-3  rounded bg-green-600 text-white' >
          <FontAwesomeIcon icon={faCartShopping}  />
          </button>
        </div>

        </div>
      </div>

      ))
        }

      
      
    </div>
      :
    <div className="w-full pt-10 md:grid grid-cols-3 ">
      <div></div>
      <div>
        <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no - img" className='w-full h-auto' />
      </div>
      <div></div>
    </div>}

    </div>
  )
}

export default Wishlist