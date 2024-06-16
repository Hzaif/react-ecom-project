import React, { useState } from 'react'
import { Card } from '../Discount Section/Card'
import DropDown from './DropDown'
import { items } from '../../items'

const Product = () => {
  const [categoryName, setCategoryName] = useState("");

  return (
    <>
    <div class="bg-cover bg-center h-[230px]" style={{backgroundImage: "url('/assets/asset 24.png.jpg')"}}>
        <h1 class="text-4xl font-bold text-white text-center pt-[90px] bg-black opacity-[0.6] h-[230px] ">product</h1>
    </div>
   
        <div class="bg-[#F6F9FC] flex flex-col items-center p-28">
        <div class="text-white flex gap-48 pb-10">
            <div> <DropDown categorySelected={setCategoryName}/> </div>
            <input class=" bg-[#F2F2F2] w-[750px] rounded-full p-4 text-black" placeholder='     Search... ' type='text'/>
       </div>
            <div class="grid sm:grid-cols-3  gap-5 w-[80%]">

               {
                items.map((item)=>{
                  if( categoryName == '' || item.category == categoryName)
                     return  <Card id={item.id}  productImg={item.img} productName={item.title} price={"$" + item.price } rating={item.rating} />
                })
               }
                

                </div>
         </div>
      </>
  )
}

export default Product