import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <>
    <div className=" bg-primary flex justify-between">
        <div>
            <div className="flex justify-start">
                <Image src="/logo.png" alt="logo" width="100" height="100" className="relative object-fill w-20 h-15  z-10 "/>
            </div>
        </div>
        <div>
            <div className="flex justify-end p-3">
                <Link className="text-white p-1" href="/">Home</Link>
                <Link className="text-white p-1 " href="/About">About</Link>
                <Link className="text-white p-1" href="/Services">Services</Link>
                <Link className="text-white p-1" href="Contact">Contact</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
