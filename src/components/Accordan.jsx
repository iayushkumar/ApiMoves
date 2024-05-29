import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const Accordan = ({move}) => {
  return (
     
    <div>
      <div id="accordion-open" data-accordion="open">
     <h2 id="accordion-open-heading-1">
     {move.items.inventory.map((item, index) => (
        
    <button
      type="button"
      className="flex items-center justify-between w-full p-5 font-medium rtl:text-right mb-2
       text-gray-500 border border-b-0 border-gray-200 bg-gray-100  gap-3"
      data-accordion-target="#accordion-open-body-1"
      aria-expanded="true"
      aria-controls="accordion-open-body-1"
    >
        <div className='grid grid-cols-4'>
      <span className="flex items-center col-span-3">    
      <div className='text-orange-500'>
      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </div>
  
      <div className='ml-2 h-6 w-6 bg-orange-500 rounded-full text-white'>
      {item.category[0]?.items[0]?.typeOptions ? item.category[0].items[0].typeOptions.split(',').length : 0}
      </div>
     </span>

     <span className="ml-64">
     <MdKeyboardArrowDown className='h-8 w-8' />
  </span>
     </div>
    
    </button>
        ))}
  </h2>
  </div>

  </div>
  )}
 
export default Accordan
