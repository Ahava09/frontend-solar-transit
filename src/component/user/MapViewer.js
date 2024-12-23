import { useEffect, useState } from "react";
import GoogleMaps from "../maps/GoogleMap";
import { fetchUtilisateurs } from "../../services/CoordinateServices";


const MapViewer = ({localisation}) => {

    const[users, setUsers] = useState([]);
    const[currentUserId, setCurrentUserId] = useState("");
    const [loadUser, isLoadingUser] = useState(false);
    const [loadMapData, isLoadingMapData] = useState(false);


    const fetchUsers = async () => {
        try{
            isLoadingUser(true);
            const userss = await fetchUtilisateurs();
            setUsers(userss);
        }catch(error){
            console.error(error);
        }finally{
            isLoadingUser(false);
        }
    };

    const handleUserClick = (id) => {
        setCurrentUserId(id);
        isLoadingMapData(true);
    };
    
    useEffect(()=>{
        isLoadingMapData(false);
    }, [currentUserId]);

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="grid grid-cols-[12rem_1fr] gap-4">
    <div className="w-48">
        <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                !loadUser && users.map((user) => (
                    <button
                        onClick={() => handleUserClick(user.id)}
                        aria-current="true"
                        type="button"
                        className="w-full my-2 px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                    >
                        {user.name}
                    </button>
                ))
            }
        </div>
    </div>
    <div className="w-full">
        {
            !loadMapData && <GoogleMaps data={localisation} userId={currentUserId} />
        }
    </div>
</div>


    )

};

export default MapViewer;