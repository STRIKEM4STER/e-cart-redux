import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'




function Home() {

  const data = userFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <div className='pt-32 px-10 mb-10 md:grid grid-cols-4'>

    {data?.length>0 && 
     data?.map((item)=>(

      <div className="p-2">
        <div className="rounded p-3 shadow-lg">

        <img src={item.image} alt=" no-img" className='w-full h-60' />
        <h4 className='text-center text-2xl'>{item.title.slice(0,20)}</h4>
        <p className='text-justify' >{item.description.slice(0,90)}</p>
        <p className='text-2xl p-3'>Price: <span className='text-blue-500' > ${item.price} </span> </p>
        <div className='flex justify-between'>
          <button onClick={()=>dispatch(addWishlistItems(item))} className='px-5 py-3 rounded text-white bg-red-600'> <FontAwesomeIcon icon={faHeart}  /> </button>
          <button onClick={()=>dispatch(addItemToCart(item))} className='px-5 py-3  rounded bg-green-600 text-white' >
          <FontAwesomeIcon icon={faCartShopping}  />
          </button>
        </div>

        </div>
      </div>

     ))}

      

      
      
    </div>
  )
}

export default Home