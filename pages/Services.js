import React from 'react'
import Link from 'next/link'

function Service() {
  return (
    <>
    <div className="flex flex-wrap justify-center p-10 pt-1 bg-primary md:text-left sm:text-left" >
        <div>
            <div className="flex flex-col flex-wrap justify-center pb-4-10">
                <div>
                    <h1 className="text-2xl text-center text-white">
                        Services
                    </h1>
                    </div>
                    <div className="flex flex-wrap px-6 py-2">
                    <div className="max-w-sm px-8 py-20 mx-auto space-y-2 bg-white rounded-lg shadow-lg sm:py-10 sm:flex sm:items-center sm:space-y-0 sm:space-x-8 ">
                        <div className="space-y-2 text-center sm:text-left"> 
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Womens Haircut
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            Haircut comes with shampoo and blow dry and styled (waves,curls,straightening)
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $57.00 · 1 hour 15 minutes
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                    <div className="flex-wrap max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="flex-wrap space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5 ">
                            <h3 className="text-lg font-semibold text-black">
                            Balayage (hand painted )
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            Full head of hand painted balayage Lightener,toner,hair mask styled out . This is for a more subtle look,lifts 2/3 shades lighter. More then one Sessions might be required for for clients wanting a maximum lift price is subject to change according to clients personal hair history & thickness. 220+ If your a new client and not sure of service please book a free consultation before booking a service.
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $250.00 · 4 hours 30 minutes
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                     
                            </div>
                    </div>
                </div>
            </div>   
            <div className="flex flex-wrap px-6 py-2">
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Foilage
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            Foilage is a technique making balayage into a foil, lifting more then 2-4 levels of hair . Multiple session be required to obtain desire look. Comes with foilage/tones/hair treatment and hair dusting if it’s less then 1” more then that will be full haircut charge. Price is subject to change depending on hair history and thickness.
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $290.00 · 5 hours
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                       
                            </div>
                    </div>
                    <div>
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            All over color
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            If your a new client and not sure what color your wanting please book a free consultation prior booking (free 20 mins). Starting price at 135 depending on hair length and thickness. Permanent color service To tint the hair darker One solid color only 125+ depending of thickens/length.
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $150.00 · 3 hours
                            </h3>
                            </div>
                            <a href="https://hair-by-yasany.square.site/">
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </a>                        
                            </div>
                    </div>
                </div>
            </div>   
            <div className="flex flex-wrap px-6 py-2">
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Extention install
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            over tape in extensions or weft hand tied extensions. Must book free 20 mins before scheduling service 
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $125.00 · 2 hours 30 minutes
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                      
                            </div>
                    </div>
                    <div>
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Brazillian blow out
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            The smoothing treatment originated in Brazil, and uses ingredients indigenous to the country including camu camu, annatto seed, and açai berry. After getting the treatment, your hair will be left hydrated, less frizzy, and more resilient to heat styling
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $250.00 · 3 hours 
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                     
                            </div>
                    </div>
                </div>
            </div>   
             <div className="flex flex-wrap px-6 py-2">
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Full highligths ( foil work )
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            Full highlights,this service comes with toner,hair mask,style out. (Trim less then 1”). The price is subject to change depending on hair history and thickness of hair. Short starting at 230+ Long 250+
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $250.00 · 4 hours 30 minutes
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
                            </Link>                        
                            </div>
                    </div>
                    <div>
                    <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="space-y-0.5">
                            <h3 className="text-lg font-semibold text-black">
                            Partial highligths (foil work )
                            </h3>
                            <h3 className="font-medium text-slate-500">
                            This service includes 25 foils or less comes with toner,mask treatment,(trim less then 1”) styled out Price subject to change according to clients personal hair history and thickness. 150+
                            </h3>
                            <h3 className="font-bold text-black-500">
                            $175.00 · 3 hours 30 minutes 
                            </h3>
                            </div>
                            <Link href="https://hair-by-yasany.square.site/" passHref={true}>
                            <button className="px-4 py-1 text-sm font-semibold text-pink-500 border border-purple-200 rounded-full hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Book now</button>
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
