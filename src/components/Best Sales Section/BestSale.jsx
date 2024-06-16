import React from 'react'
import { Card } from '../Discount Section/Card';
import { items } from '../../items';

const BestSale = () => {
  return (
    <div class="bg-[#F6F9FC] flex flex-col items-center p-28">
    <h1 class="text-5xl font-semibold mb-16">Best Sales</h1>
      <div class="grid sm:grid-cols-3  gap-5 w-[80%]">

          {
              items.map((item) => {
                  if(item.rating > 4 )
                    {
                       return  <Card key={item.id}  id={item.id} productImg={item.img} productName={item.title} price={"$"+ item.price} rating={item.rating} />
                    }
              })
          }
          
          
         
         </div>
  </div>
  )
}

export default BestSale;