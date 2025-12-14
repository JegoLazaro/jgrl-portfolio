import React from 'react'
import HeaderComp from './headerComp'
import Forms from './contactMeComonents/forms'

const ContactMe = () => {

  return (
    <div id='contact' className=''>
      <HeaderComp 
        title={"Contact Me"}
        description={"Let's Connect! Share Your Thoughts and Inquiries. I'm Excited to Hear from You!"}
        reverse
      />
      <Forms />
    </div>
  )
}

export default ContactMe

