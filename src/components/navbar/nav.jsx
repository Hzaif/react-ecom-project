import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


export function Nav() {
  const   cartItems  = useSelector(state => state.cartItems)

  return (
    <nav class="flex justify-between bg-white-600 border-b-4  pt-8 pb-5 bg-white-600 items-center ">
        <h1 class="font-medium text-4xl pl-28 ml-10">Emart</h1>
        <div class ="flex pr-28 text-2xl font-medium w-[40%] justify-evenly gap-8 ">
               <NavLink to='/'> <a href='#'>Home</a></NavLink>
               <NavLink to='/shop'> <a href='#'>Shop</a></NavLink>
               <NavLink to='/cart'> <a href='#'>Cart</a></NavLink>
                <div class="flex gap-8 pr-10 pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                  {
                    
                    <CartIcon itemCount={cartItems.length-1}/>
                  }

                </div>
           

        </div>
       
    </nav>
  )

}

 const CartIcon = ({itemCount =0}) => {
 return <button>
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                {
                  (itemCount > 0) ? <div class="h-[20px] w-[20px] bg-red-500 rounded-xl text-white font-light text-sm ">{itemCount}</div> : <></>
                   
                }
                
            </div>
           
        </button>
}