import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import useGoogleMap from '../../hooks/useGoogleMap';


import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useState } from 'react';

const libraries = ['places'];

const center = {
  lat: -3.745,
  lng: -38.523,
}

const GoogleMaps = () => {

  const API_KEY = useGoogleMap();
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, []);





    console.log(API_KEY);
    
    return isLoaded ? (
      <GoogleMap
        // mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <></>
    )
};

export default GoogleMaps;