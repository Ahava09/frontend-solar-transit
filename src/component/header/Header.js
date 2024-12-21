import Link from "../basic/Link";
import Logo from "../basic/Logo";
import Sidebar from "./SideBar";

const Header = () => {

    return (

        
        <>
        
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link classes={"flex items-center space-x-3 rtl:space-x-reverse"} lien={"https://flowbite.com"}>
                        <Logo societyLogo={"https://flowbite.com/docs/images/logo.svg"} societyName={"Flowbite"} />
                    </Link>
                        
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link lien={"#"} classes={"text-sm text-blue-600 dark:text-blue-500 hover:underline"}>
                            Se deconnecter
                        </Link>
                        {/* <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a> */}
                    </div>
                </div>
            </nav>
            {/* <Sidebar /> */}
        </>
    


    )

};

export default Header;