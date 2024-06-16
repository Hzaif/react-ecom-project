import React from 'react'
import { Card } from './Card';
import { items } from '../../items';

const DiscountSection = () => {
  return (
    <div class="bg-[#F6F9FC] flex flex-col items-center p-28">
      <h1 class="text-5xl font-semibold mb-16">Big Discount</h1>
        <div class="grid sm:grid-cols-3  gap-5 w-[80%]">

          {
            items.map((item)=> {
              if(item.discount > 0)
                {
                  return <Card key={item.id} id={item.id} tag={`${item.discount}% Off`} productImg={item.img} productName={item.title} price={"$" + item.price}  rating={item.rating}/>
                }
              })
          }
           
           </div>
    </div>
  )
}

export default DiscountSection;




