import React from 'react'
import HeaderComp from './headerComp'
import AboutMeContainer from './aboutMeComponents/aboutMeContainer'

const AboutMe = () => {

  return (
    <div id='about'>
      <HeaderComp 
        title={"About Me"}
        description={"A tech enthusiast with a keen eye for aesthetics, transforming concepts into interactive reality."}
      />
      <AboutMeContainer />
    </div>
  )
}

export default AboutMe

