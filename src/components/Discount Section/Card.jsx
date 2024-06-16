import React from 'react';
import {useDispatch} from "react-redux";
import { addtoCart } from '../../features/CartSlice';
import { toast } from 'react-toastify';


export function Card({id, tag,productImg,productName,price, rating = 0}) {
 
  const dispatch = useDispatch()

  const notify = () => toast.success("Item has been added to the cart",{
    theme: "light",
  });

  const addItem =(id) => {
        dispatch(addtoCart({id}))
        notify();
  }

  return (
    <div class="bg-white w-[400px] h-[450px] rounded-xl border pt-5">
       <h1 class="bg-[#0F3460] text-white rounded-2xl w-[80px] text-center ml-4 absolute">{tag}</h1>
        <div class=" h-[50%] flex justify-center">
            <img src={productImg} />
        </div>

        <div class="pt-16 text-2xl font-medium pb-5 pl-5 ">
          <h1 class="pb-4">{productName}</h1>
            <div class="flex">
              {
                Array.from({ length: 5 }, (_, index) => {
                  return <StarIcon  isfilled={(index+1) <= rating} key={index}/>
                })
              }
              </div>
        </div>

        <div class="flex justify-between pr-4 pb-2 ">
          <h1 class="pl-5 text-3xl font-medium">{price}</h1>
          <button class="hover:bg-blue-950 hover:text-white rounded-full " onClick={() => (addItem(id))}><AddIcon/></button> 
        </div>
    </div>
  )
}


const StarIcon = ({isfilled = false}) => {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill={isfilled ? "#ffcd4e" : "none"} viewBox="0 0 24 24" stroke-width="1.5" stroke={isfilled ? "none" : "currentColor"} class="size-8 color">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  )
  

}

const AddIcon = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9 border rounded-full">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}