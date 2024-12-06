import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'

function Cart() {

  const [total, setTotal] = useState()
  const navigate  = useNavigate()

  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);

  const dispatch = useDispatch()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map((item) => item.price).reduce((n1, n2) => n1 + n2, 0));
    }
  }

  const handlecheckout = ()=>{
    alert("order placed successfully")
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>(
    getTotal()
  ),[cartArray])
  

  return (
    <>
    
    <div className='pt-32'>
    <h1 className='text-violet-600 text-center text-4xl mb-5' >Cart</h1>


    {cartArray?.length>0 ?
      <div className='md:grid grid-cols-[2fr_1fr] m-10' >
      <div className='p-3'>
        <table className='w-full border border-gray-600 shadow-lg text-center' >
          <thead>
            <tr>
              <th className='p-3 border border-gray-600 bg-violet-600 text-white'>#</th>
              <th  className='p-3 border border-gray-600 bg-violet-600 text-white'>Title</th>
              <th className='p-3 border border-gray-600 bg-violet-600 text-white'>Image</th>
              <th className='p-3 border border-gray-600 bg-violet-600 text-white'>Price</th>
              <th className='p-3 border border-gray-600 bg-violet-600 text-white'>Action</th>
            </tr>
          </thead>
          <tbody>


            {cartArray?.map((item, index)=>(

              <tr>
                <td className='p-3 border border-gray-600'>{index+1}</td>
                <td className='p-3 border border-gray-600'>{item.title.slice(0,20)}</td>
                <td className='p-3 border border-gray-600 flex justify-center'><img src={item.image} alt="no - img" style={{ width: "150px", height: "100px" }} /></td>
                <td className='p-3 border border-gray-600'>$ {item.price}</td>
                <td className='p-3 border border-gray-600 '><button onClick={()=>dispatch(removeCartItem(item?.id))} className='p-3 text-white bg-red-700 rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>

            ))
              }


          </tbody>
        </table>
      </div>

      <div className="pt-5 px-10">
        <div className='shadow-lg p-5'>
          <h1 className='text-center text-3xl' >Cart Summary</h1>
          <p className='mt-4 text-xl' >Total number of products : {cartArray.length}</p>
          <p className='mt-4 text-xl' >Grand Total : $ {total}</p>
          <button onClick={handlecheckout}  className='hover:border hover:bg-white hover:border-green-600 hover:text-green-600 w-full bg-green-600 text-white p-3 mt-5' >Check Out</button>
        </div>
      </div>

    </div>
    :
    <div className="w-full pt-10 md:grid grid-cols-3 ">
      <div></div>
      <div className='mb-10 text-center'>
        <img src="https://mycarrom.com/empty-cart.png" alt="no - img" className='w-full h-auto' />
        <Link to={"/"}><button  className=' hover:border hover:bg-white hover:border-green-600 hover:text-green-600  bg-green-600 text-white p-3 mt-5 rounded' > <FontAwesomeIcon icon={faBackward} /> Back to home</button></Link>
      </div>
      <div></div>
    </div>}

    </div>
    
    </>
  )
}

export default Cart