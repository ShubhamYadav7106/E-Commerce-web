// import React from 'react'
import heroImage from '../../assets/heroImage.png' // <-- Import statement

const HeroSection = () => {
  return (
    <div>
      <img className='h-40  md:h-full ' src={heroImage} alt='image'/>
    </div>
  )
}

export default HeroSection