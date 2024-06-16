import React, { useState } from 'react'

const DropDown = ({categorySelected}) => {

    const [isOpen, setIsOpen] = useState(false);
    

    const onCategorySelect = (categoryName) => {
        categorySelected(categoryName);
    }

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>

        <div class="container">
        
        <div class="relative inline-block text-left">
            <button type="button" 
             onClick={toggleDropdown}
             class="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-[#0F3460] text-lg font-medium text-white"
             aria-expanded={isOpen ? 'true' : 'false'}
            >
            Filter By Category |
            
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 12l-6 6v-2l6-6 6 6v2l-6-6z" clip-rule="evenodd" />
            </svg>
            </button>
        
        {isOpen &&(
                     <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                     <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                     
                         <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => { onCategorySelect("sofa")}}>Sofa</button>
                         <button class=" block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 " role="menuitem" onClick={() => {onCategorySelect("chair")}}>Chair</button>
                         <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {onCategorySelect("mobile")}}>Mobile</button>
                         <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {onCategorySelect("wirless")}}>wireless</button>
                     </div>
                     </div>
        )}
           
        </div>
        </div>

    </>
  )
}

export default DropDown