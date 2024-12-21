
import AdminLayout from "../../component/layout/AdminLayout";
import GoogleMaps from "../../component/maps/GoogleMap";
import MapViewer from "../../component/user/MapViewer";
import Authenticated from "../../context/Authentified";
// import Map from "../../component/maps/OpenStreetMap";


const Index = () => {

    return(
        <AdminLayout>
            <MapViewer />
        </AdminLayout>
    )
};

export default Authenticated(Index);
