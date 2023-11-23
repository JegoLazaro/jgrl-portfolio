import React from 'react'

const HeaderComp = ({title, description, reverse}) => {

  return (
    <div id='skills' className={`bg-white py-24 sm:py-32`}>
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 flex ${reverse? "justify-end" : "justify-start" }`}>
      <div className="max-w-2xl">
        <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex ${reverse? "justify-end" : "justify-start" } `}>
          {title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {/* Add your grid content here if needed */}
    </div>
  </div>
  
  )
}

export default HeaderComp

