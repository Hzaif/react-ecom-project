import React from 'react'

function Services({backgroundColor, name, description, SVG}) {
  return (
    <div style={{backgroundColor}} class="w-[410px] h-[250px] flex flex-col items-center justify-center rounded">
            {SVG}
            <h1 class="text-2xl p-6 font-medium">{name}</h1>
            <h3 class="text-[23px] font-thin">{description}</h3>
        </div>
  )
}

export default Services