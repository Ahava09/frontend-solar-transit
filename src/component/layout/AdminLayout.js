import Header from "../header/Header";

const AdminLayout = ( {children} ) => {

    return (
        <div className="grid grid-cols-1">
            <div className="w-12/12 ">   
                <Header />
                { children }
            </div>
        </div>
    )

};


export default AdminLayout;