import React from 'react'
import Link from 'next/link'

function Service() {
  return (
    <>
    <div className=" bg-primary flex justify-center md:text-left sm:text-left pt-1 p-10" >
        <div>
            <div className="flex flex-col justify-center pb-4-10">
                <div>
                    <h1 className='text-white text-center text-2xl'>
                        Services
                    </h1>
                </div>
                    <div className='flex py-2 px-6 '>
                    <div className="py-20 px-8 max-w-sm mx-auto bg-white rounded-lg shadow-lg space-y-2 sm:py-10 sm:flex sm:items-center sm:space-y-0 sm:space-x-8 ">
                        <div className="text-center space-y-2 sm:text-left"> 
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Womens Haircut
                            </p>
                            <p className="text-slate-500 font-medium">
                            Haircut comes with shampoo and blow dry and styled (waves,curls,straightening)
                            </p>
                            <p className="text-black-500 font-bold">
                            $57.00 · 1 hour 15 minutes
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5 ">
                            <p className="text-lg text-black font-semibold">
                            Balayage (hand painted )
                            </p>
                            <p className="text-slate-500 font-medium">
                            Full head of hand painted balayage Lightener,toner,hair mask styled out . This is for a more subtle look,lifts 2/3 shades lighter. More then one Sessions might be required for for clients wanting a maximum lift price is subject to change according to clients personal hair history & thickness. 220+ If your a new client and not sure of service please book a free consultation before booking a service.
                            </p>
                            <p className="text-black-500 font-bold">
                            $250.00 · 4 hours 30 minutes
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                     
                            </div>
                    </div>
                </div>
            </div>   
            <div className='flex py-2 px-6'>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Foilage
                            </p>
                            <p className="text-slate-500 font-medium">
                            Foilage is a technique making balayage into a foil, lifting more then 2-4 levels of hair . Multiple session be required to obtain desire look. Comes with foilage/tones/hair treatment and hair dusting if it’s less then 1” more then that will be full haircut charge. Price is subject to change depending on hair history and thickness.
                            </p>
                            <p className="text-black-500 font-bold">
                            $290.00 · 5 hours
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                       
                            </div>
                    </div>
                    <div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            All over color
                            </p>
                            <p className="text-slate-500 font-medium">
                            If your a new client and not sure what color your wanting please book a free consultation prior booking (free 20 mins). Starting price at 135 depending on hair length and thickness. Permanent color service To tint the hair darker One solid color only 125+ depending of thickens/length.
                            </p>
                            <p className="text-black-500 font-bold">
                            $150.00 · 3 hours
                            </p>
                            </div>
                            <a href="https://calendly.com/hairbyyasany/hairapp?month=2023-01">
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </a>                        </div>
                    </div>
                </div>
            </div>   
            <div className='flex py-2 px-6 '>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Extention install
                            </p>
                            <p className="text-slate-500 font-medium">
                            over tape in extensions or weft hand tied extensions. Must book free 20 mins before scheduling service 
                            </p>
                            <p className="text-black-500 font-bold">
                            $125.00 · 2 hours 30 minutes
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                      
                            </div>
                    </div>
                    <div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Brazillian blow out
                            </p>
                            <p className="text-slate-500 font-medium">
                            The smoothing treatment originated in Brazil, and uses ingredients indigenous to the country including camu camu, annatto seed, and açai berry. After getting the treatment, your hair will be left hydrated, less frizzy, and more resilient to heat styling
                            </p>
                            <p className="text-black-500 font-bold">
                            $250.00 · 3 hours 
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                     
                            </div>
                    </div>
                </div>
            </div>   
             <div className='flex py-2 px-6 '>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Full highligths ( foil work )
                            </p>
                            <p className="text-slate-500 font-medium">
                            Full highlights,this service comes with toner,hair mask,style out. (Trim less then 1”). The price is subject to change depending on hair history and thickness of hair. Short starting at 230+ Long 250+
                            </p>
                            <p className="text-black-500 font-bold">
                            $250.00 · 4 hours 30 minutes
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                        
                            </div>
                    </div>
                    <div>
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                            Partial highligths (foil work )
                            </p>
                            <p className="text-slate-500 font-medium">
                            This service includes 25 foils or less comes with toner,mask treatment,(trim less then 1”) styled out Price subject to change according to clients personal hair history and thickness. 150+
                            </p>
                            <p className="text-black-500 font-bold">
                            $175.00 · 3 hours 30 minutes 
                            </p>
                            </div>
                            <Link href="https://calendly.com/hairbyyasany/hairapp?month=2023-01" passHref={true}>
                            <button className="px-4 py-1 text-sm text-pink-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                       
                            </div>
                    </div>
                </div>
            </div>   
        </div>       
      </div>
    </div>
    </>
  )
}

export default Service
