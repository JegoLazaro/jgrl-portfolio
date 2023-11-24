import React from 'react'
import HeaderComp from './headerComp'
import Forms from './contactMeComonents/forms'

const ContactMe = () => {

  return (
    <div id='contact'>
      <HeaderComp 
        title={"Contact Me"}
        description={"Contact Me Form and Social Media Cards Here"}
        reverse
      />
      <Forms />
    </div>
  )
}

export default ContactMe

