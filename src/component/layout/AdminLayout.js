import Header from "../header/Header";

const AdminLayout = ( {children} ) => {

    return (
        <>
            <Header />
            { children }
        </>
    )

};


export default AdminLayout;