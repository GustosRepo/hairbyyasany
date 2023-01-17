import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <div className=" bg-top bg-primary ">
      <a href="/">
        <button href="/">
        <img src="/hero.jpg" alt="portfolio" width="100%" height="50%" className="relative  object-fill  z-10 " />
        </button>
      </a>
    </div>
    </>
  )
}

export default Hero
