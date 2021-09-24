import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

/* Width and height google map */
const containerStyle = {
    width: "100%",
    height: "100%",
};

/* focus point on google map */
const center = {
    lat: 52.91301833100088, 
    lng: -2.268742043385365
};

/* have no UI on google map */
const options = {
    disableDefaultUI: true,
};

const Map = () => {
    const { isLoaded, loadError} = useLoadScript({
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        googleMapsApiKey:"AIzaSyAmhcx1tY12V34wsNCiHcYKqGpoA4eDWgU",
    });

    if(loadError) return "Error loading map";
    if(!isLoaded) return "Loading!!!";
    return (
        <div id="map" className="col-lg-4 col-md-4 col-xs-12" style={{padding: 0}}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15} 
                options={options}>
            </GoogleMap>
        </div>
    )
}

export default Map
