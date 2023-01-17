import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React from 'react'

export default function Map(){
    const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

    });
    if(!isLoaded) return <div>Loading...</div>
    return <Map />;


    function Map() {
    const center = useMemo(() => ({ lat: 27.70859, lng: -97.36 }), []);


  return (
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
        </GoogleMap>
  )
 }
}
