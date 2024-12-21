import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    return token !== null && token !== undefined; // SI token existe
};

const Authenticated = ( PropsComponent ) => {

    const Wrapper = (props) => {
        const navigate = useNavigate();
        const [authState, setAuthState] = useState(null);

        useEffect( () => {
            const authentified = isAuthenticated();
            if ( !authentified ) {
                navigate("/");
            } else {
                setAuthState(true);
            }
        }, [navigate]);

        if(authState === null) {
            return <div> Veuillez attendre ... </div>
        }

        return <PropsComponent {...props} />

    };

    return Wrapper;

};

export default Authenticated;
