import React, { useEffect, useState } from 'react'
import CartCard from '../CartCard/CartCard'
import { items } from '../../items'
import { useSelector } from 'react-redux';


const Cart = () => {
  const [totalPrice,setTotalPrice] = useState(0)

  const cartItems = useSelector(state => state.cartItems);

  useEffect(() => {
    {
      let sum = 0;
      items.map((item) => {
        cartItems.map((stateItem) => {
          if(item.id === stateItem.id)
          {
            sum += (item.price * stateItem.itemCount);    
          }       
        })
      })

      setTotalPrice(sum);
    }
  }, [cartItems])

  return (
    <div class="bg-[#F6F9FC] text-[#0F3460] flex justify-center gap-8 h-auto mt-10 mb-10">
        <div class="bg-white w-[1000px] text-2xl font-medium h-auto rounded-md">
            <div>
              {
                items.map((item) => {
                  return  cartItems.map((stateItem) => {
                      if(item.id === stateItem.id)
                      {
                        return <CartCard  id={item.id} productImg={item.img} productName={item.title} price={item.price} count={stateItem.itemCount}/>
                      }
                      
                    })
                  })
              }
            </div>
        </div>
        <div class="bg-white w-[500px] h-[180px] text-2xl font-medium rounded-sm">
            <h1 class="border-b-2 pt-3 pb-2 pl-4">Cart Summary</h1>
            <div class="text-lg font-normal pt-3 pl-4 text-black">Total Price :</div>
            <div class="pt-2 pl-4">${totalPrice }</div>
        </div>
    </div>
  )
}

export default Cart