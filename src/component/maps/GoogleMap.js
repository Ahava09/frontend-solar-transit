import { useState, useCallback, useEffect } from "react";
import { APIProvider, Map, Marker, useMap, useMapsLibrary,  } from "@vis.gl/react-google-maps";
import useGoogleMap from "../../hooks/useGoogleMap";
import { fetchLocalisations, getLocalisation } from "../../services/CoordinateServices";
import CustomPin from "./CustomPin";

const GoogleMaps = ( {userId} ) => {
    
    const [fetchData, isFetchingData] = useState(false);
    const [initalizeMap, isInitialized] = useState(false);
    const [markers, setMarkers] = useState([]);

    const map = useMap();
    const maps = useMapsLibrary("maps");    

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
            isFetchingData(true);
            isInitialized(false);
            if (!user) return;
            const data = await fetchLocalisations(user);

            console.log(data);
            // okey inona no atao eto avy eo
            // Mila maka anle coordonnées
            const marks = [];


            data.coordinates.forEach(coordinate => {
                console.log(coordinate);
                const newMark = {
                    lat: parseFloat(coordinate.latitude),
                    lng: parseFloat(coordinate.longitude)
                };

                marks.push(newMark);
            });
            const initial = marks[0];
        
            const initialCamera = {
                center: initial,
                zoom: 12
            };

            console.log(initialCamera);

            setCameraProps(initialCamera);
            setMarkers(marks);
            return data;
        }catch(error){
            console.error(error);
        }finally{
            isFetchingData(false);
            isInitialized(true);
        }
    }


    const fetchRealTimeData = async ( user ) => {
        try{
            isFetchingData(true);
            if (!user) return;
            const data = await getLocalisation(user);
            const coordinate = data.data;
            setMarkers([...markers, coordinate]);
            return data;
        }catch(error){
            console.error(error);
        }finally{
            isFetchingData(false);
        }
    }


    useEffect(() => {
        const flightPath = new maps.Polyline({
            path: markers,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3,
        });

        flightPath.setMap(map);

    }, [markers, map, maps]);

    useEffect(()=> {
        // Miantso ny api maka ny coordonées ana olona iray
        if(userId) fetch( userId );
        else isFetchingData(false);
        console.log(markers)

        const realTime = setInterval( () => {
            fetchRealTimeData(userId);
        }, 10000 );

        return () => {
            clearInterval(realTime);
        }
    }, []);
        
    return (
            <div class="map" style={{height: "500px"}}>
                {
                    initalizeMap &&
                    <Map mapId={"f75d626b86ee154c"} {...cameraProps} onCameraChanged={handleCameraChange}>
                        { !fetchData && markers.map( (marker,index) => <CustomPin key={index} lat={marker.lat} long={marker.lng} /> ) }
                    </Map>
                }
            </div>
    )
}

export default GoogleMaps;
