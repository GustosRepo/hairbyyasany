import React from 'react'
import Form from '../components/Form'
import Map from '../components/Map'

function Contact() {

  return (
    <>
      <div className=" flex bg-primary pt-8 text-center h-full">
        <div className="w-1/2 text-center sm:pb-56 text-white pl-8 ">
          <h1>Location</h1>
          <h3>Come Visit Me</h3>
          <h4>4938 South Staples Street STE C09
          Corpus Christi, TX 78412
          suite #8
          </h4>
          <h4>Telephone: (361)-903-0447 </h4>
          <Map/>
          </div>
          <div className="w-1/2 py-20">
          <Form />
          </div>
      </div>
    </>
  )
 }

export default Contact
