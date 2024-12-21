import { useState, useCallback, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import useGoogleMap from "../../hooks/useGoogleMap";

const GoogleMaps = ( {userId} ) => {
    
    const [fetchData, isFetchingData] = useState(false);
    const [markers, setMarkers] = useState([]);

    const API_KEY = useGoogleMap();
    const center = {
        lat: -18.8792,
        lng: 47.5079,
    };


    const INITIAL_CAMERA = {
        center: center,
        zoom: 12
    };

    const [cameraProps, setCameraProps] = useState(INITIAL_CAMERA);
    const handleCameraChange = useCallback((ev) =>
        setCameraProps(ev.detail)
    , []);

    const fetch = async ( user ) => {
        try{

        }catch(error){
            console.error(error);
        }finally{

        }
    }

    useEffect(()=> {
        // Miantso ny api maka ny coordonées ana olona iray



        return () => {

        }
    }, []);
        
    return (
        <APIProvider apiKey={API_KEY}>
            <div class="map" style={{height: "500px"}}>
                <Map {...cameraProps} onCameraChanged={handleCameraChange}>
                    <Marker position={center} />
                </Map>            
            </div>
        </APIProvider>
    )
}

export default GoogleMaps;

// import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
// import useGoogleMap from '../../hooks/useGoogleMap';


// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
// import { useCallback, useState } from 'react';

// const libraries = ['places'];

// const GoogleMaps = () => {

//   const API_KEY = useGoogleMap();
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: API_KEY,
//   })

//   const [map, setMap] = useState(null);
//   const onLoad = useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center)
//     map.fitBounds(bounds)

//     setMap(map)
//   }, []);





//     console.log(API_KEY);
    
//     return isLoaded ? (
//       <GoogleMap
//         // mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         // onUnmount={onUnmount}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     ) : (
//       <></>
//     )
// };

// export default GoogleMaps;