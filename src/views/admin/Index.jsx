
import { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import AdminLayout from "../../component/layout/AdminLayout";
import GoogleMaps from "../../component/maps/GoogleMap";
import MapViewer from "../../component/user/MapViewer";
import Authenticated from "../../context/Authentified";
import { search } from "../../services/CoordinateServices";
// import Map from "../../component/maps/OpenStreetMap";


const Index = () => {

        
    const[address, setAddress] = useState(undefined);
    const[localisation, setLocalisation]=useState(undefined);

    const[doRender, setDoRender] = useState(false);

    const handleAdress = async () => {

        try{
            setDoRender(false);
            if( address ){
                const {status, data} = await search( address );
                console.log(data);
                setLocalisation(data);
            }
        }catch(error){

        }finally{
            setDoRender(true);
        }
    };

    useEffect(function(){

    }, [doRender]);

    return(
        
        <div className="grid grid-cols-1">
            <div className="w-12/12 ">   
                <Header setAddress={setAddress} handleAdress={handleAdress} />
                <MapViewer localisation={localisation} />
            </div>
        </div>
    )
};

export default Authenticated(Index);
