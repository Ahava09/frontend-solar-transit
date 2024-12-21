
import AdminLayout from "../../component/layout/AdminLayout";
import GoogleMaps from "../../component/maps/GoogleMap";
import Authenticated from "../../context/Authentified";
// import Map from "../../component/maps/OpenStreetMap";


const Index = () => {

    return(
        <AdminLayout>
            <GoogleMaps />
        </AdminLayout>
    )
};

export default Authenticated(Index);
// export default Index;