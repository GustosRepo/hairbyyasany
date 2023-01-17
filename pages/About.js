import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <>

    <div className=" bg-primary flex justify-between">
        <div>
            <div className="flex justify-start">
                <img src="/about.jpg" alt="logo" width="100" height="100" className="relative bg-contain object-fill w-auto z-10 "/>
            </div>
        </div>
            <div>
                <div className="flex flex-col justify-end w-full lg:p-20 md:p-8 text-center xs:p-1 lg:justify-self-center lg:text-2xl leading-10  whitespace-pre-line  ">
                    <div className=" flex content-center justify-self-center justify-center	">
                    <Image src="/logo.png" alt="logo" width="100" height="100" className=" relative bg-contain object-fill w-64 z-10 "/>
                    </div>
                    <h1 className="pt-10 sm:text-sm xs:text-xs text-white ">Hello beauties, 
                    welcome to my new home.
                    Im excited to start this new adventure with you guys, I’ve been in the hair industry for 10 years and 
                    I’m ready to keep my creativity and passion for hair to continue, I’m constantly learning new techniques 
                    and staying on top of the new trends and bringing the best to you.
                    I can’t wait to see you guys soon! 💗
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
