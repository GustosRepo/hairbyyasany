import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <div className=" bg-top bg-primary flex justify-center">
      <div>
        <div>
        <Image src="/hero.jpg" alt="portfolio" width={1400} height={750} className="relative content-center align-middle object-fill  z-10 " />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
