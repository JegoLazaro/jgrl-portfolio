import React from 'react'
import SkillCards from './skillsComponents/skillCards'

const HeaderComp = ({title, description, reverse}) => {

  return (
    <div id='skills' className={`${reverse? " bg-cyan-700" : "bg-white" } fadeTopMini py-20 sm:py-20 `}>
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 flex ${reverse? " justify-center" : "justify-start" }`}>
      <div className="max-w-2xl">
        <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl flex ${reverse? "justify-center" : "justify-start" } `}
          style={{
            color: reverse ? "#fff0ff" :"#0071A1"
          }}
        >
          {title}
        </h2>
        <p className="mt-2 mb-4 text-justify text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </div>
    
  </div>
  
  )
}

export default HeaderComp

