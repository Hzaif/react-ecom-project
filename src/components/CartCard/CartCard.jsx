import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removefromCart } from '../../features/CartSlice';

const CartCard = ({id,productImg,productName,price}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems)
  const [count, setCount] = useState(0)

  const removeitem = (id, removeFullItem = false) => {
    dispatch(removefromCart({id, removeFullItem}))
  }

  const increaseItemCount = () => {
    dispatch(addtoCart({id}));
  }

  useEffect(() => {
    let index = cartItems.findIndex((item) => item.id == id);

    if(index !== -1)
    {
      setCount(cartItems[index].itemCount);
    }

  }, [increaseItemCount])

  
  return (
    <div class='flex p-10 justify-around'>
        <img width={"200px"} src={productImg}/>
        <div className='flex flex-col justify-around w-[60%]'>
          <h1>{productName}</h1>
          <div class="flex gap-7">
            <div class="font-extralight text-lg">{"$"+ price + "*" + count} </div>
            <div class="text-slate-800 text-lg">{"$"+(price*count)}</div>
          </div>
        </div>
        <div class=' flex flex-col justify-between w-[100px]'>
            <button class="text-end pr-4 font-extrabold text-lg" onClick={() => {removeitem(id, true)}}>╳</button>
            <div className=' h-[60px] text-center'>
              <button class="font-bold text-3xl mr-4" onClick={() => {increaseItemCount()}}>+</button>
              <button class="font-bold text-4xl" onClick={() => {removeitem(id)}}>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartCard;