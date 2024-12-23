import { useState, useCallback, useEffect } from "react";
import { Map, useMap, useMapsLibrary,  } from "@vis.gl/react-google-maps";
import { fetchLocalisations, getLocalisation } from "../../services/CoordinateServices";
import CustomPin from "./CustomPin";

const GoogleMaps = ( {userId, data} ) => {

    const [fetchData, isFetchingData] = useState(false);
    const [reloadMap, setReloadMap] = useState(false);
    const [markers, setMarkers] = useState([]);
    
    const map = useMap();
    const maps = useMapsLibrary("maps");    
    
    const center = data
        ? { lat: data.latitude, lng: data.longitude }
        : { lat: -18.8792, lng: 47.5079 };
    
    
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
            if (!user) return;
            const data = await fetchLocalisations(user);

            console.log(data);
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
        }
    }


    const fetchRealTimeData = async ( user ) => {
        try{
            isFetchingData(true);
            if (!user) return;
            const data = await getLocalisation(user);
            const { latitude, longitude } = data.data;  
            setMarkers((prevMarkers) => [...prevMarkers, { lat: latitude, lng: longitude }]);
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
            if(userId) fetch( userId );
            else isFetchingData(false);
            console.log(markers)
            const interval = setInterval( () => {
                fetchRealTimeData(userId);
            }, 5000 );
    
            return () => {
                clearInterval(interval);
            }
    }, []);

    // animation de la carte
    useEffect(function(){
        setReloadMap(true);
        const centers = data
        ? { lat: data.latitude, lng: data.longitude }
        : { lat: -18.8792, lng: 47.5079 };
    
        
        const INITIAL = {
            center: centers,
            zoom: 12
        };
        
        setCameraProps(INITIAL);
        setReloadMap(false);
    }, [data]);

        
    return (
        <div className="map" style={{ "height": "500px" }}>
            {  (
                 <Map mapId={"f75d626b86ee154c"} {...cameraProps} onCameraChanged={handleCameraChange}>
                    {/* Afficher les markers existants */}
                    {!fetchData &&
                        markers.map((marker, index) => {
                            const isLastMarker = index === markers.length - 1;
                            return (
                                <CustomPin
                                    key={index}
                                    lat={marker.lat}
                                    long={marker.lng}
                                    isLast={isLastMarker} // Passer la prop isLast pour colorer le dernier marqueur
                                />
                            );
                        })
                    }
                    {data && (
                        <CustomPin
                            key="red-marker"
                            lat={data.latitude}
                            long={data.longitude}
                            isLast={false} // Peut être ajusté selon si vous voulez un effet spécial pour ce marker
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Icône rouge
                            }}
                        />
                    )}
                </Map>
            )}
        </div>
    );
    
}

export default GoogleMaps;
