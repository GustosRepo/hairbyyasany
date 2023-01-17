import React from 'react'

function Navbar() {
  return (
    <>
    <div className=" bg-primary flex justify-between">
        <div>
            <div className="flex justify-start">
                <img src="/logo.png" alt="logo" width="100" height="100" className="relative object-fill w-20 h-15  z-10 "/>
            </div>
        </div>
        <div>
            <div className="flex justify-end p-3">
                <a className="text-white p-1" href="/">Home</a>
                <a className="text-white p-1 " href="/About">About</a>
                <a className="text-white p-1" href="/Services">Services</a>
                <a className="text-white p-1" href="Contact">Contact</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
