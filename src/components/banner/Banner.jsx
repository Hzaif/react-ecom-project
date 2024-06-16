import React from 'react'

export function Banner({bannerImg}) {
  return (
    
        <div class="bg-[#f6f9fc] flex justify-between ml-48 mr-48 h-[800px] pl-20 pr-20 items-center">
              <div class="w-[60%] h-[300px]">
                <h1 class="text-6xl font-semibold">50% Off For Your First <br/>Shopping</h1>
                <p class="text-2xl pt-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Sequi porro accusamus at reprehen.</p>
                <a class="bg-[#F0F0F0] text-2xl" href='#'>Visit Collections</a>
              </div>
              <div>
                  <img src={bannerImg}/>
              </div>
        </div>
    
  )
}

