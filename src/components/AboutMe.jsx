import React from 'react'
import HeaderComp from './headerComp'
import AboutMeContainer from './aboutMeComponents/aboutMeContainer'

const AboutMe = () => {

  return (
    <div id='about'>
      <HeaderComp 
        title={"About Me"}
        description={"About Me Description Here"}
      />
      <AboutMeContainer />
    </div>
  )
}

export default AboutMe

