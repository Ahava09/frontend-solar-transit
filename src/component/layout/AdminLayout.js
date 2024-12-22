import { useState } from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router";
import { search } from "../../services/CoordinateServices";

const AdminLayout = ( {children} ) => {
    
    const[address, setAddress] = useState(undefined);
    const navigate = useNavigate();
    const[localisation, setLocalisation]=useState(undefined);
    const handleAdress = async () => {

        if( address ){

            const {status, data} = await search( address );
            console.log(data);
            setLocalisation(data);
            
        }
    };

    return (
        <div className="grid grid-cols-1">
            <div className="w-12/12 ">   
                <Header setAddress={setAddress} handleAdress={handleAdress} />
                { children  }
            </div>
        </div>
    )

};


export default AdminLayout;