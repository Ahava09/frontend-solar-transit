import Link from "../basic/Link";
import Logo from "../basic/Logo";
import Sidebar from "./SideBar";
import Input from "../../component/form/Input";
import ButtonComponent from "../../component/basic/ButtonComponent";
import { useState } from "react";
import { useNavigate } from "react-router";
import { search } from "../../services/CoordinateServices";

const Header = () => {
    const[address, setAddress] = useState(undefined);
    const navigate = useNavigate();
    const handleLogin = async () => {

        if( address ){

            const {status, data} = await search( address );

            if( status >= 200 && status <= 205 ) {
                navigate("/admin");
            } else if (status >= 400 && status <= 420){
                // setLoginError(data);
            }
        }
    };
    return (

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link classes={"flex items-center space-x-3 rtl:space-x-reverse"} lien={"https://flowbite.com"}>
                        <Logo societyLogo={"https://flowbite.com/docs/images/logo.svg"} societyName={"Flowbite"} />
                    </Link>
                        
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Input onChange={(event) => setAddress(event.target.value)} type={"text"} name={"adsress"} id={"address"} required classes="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        <ButtonComponent onClick={() => handleLogin()} type={"button"} classes="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" text={"search"} />
                    </div>
                        
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link lien={"#"} classes={"text-sm text-blue-600 dark:text-blue-500 hover:underline"}>
                            Se deconnecter
                        </Link>
                        {/* <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a> */}
                    </div>
                </div>
            </nav>

    )

};

export default Header;