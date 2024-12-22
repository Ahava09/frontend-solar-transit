import { useState } from "react";
import { useNavigate } from "react-router";


import Image from "../../component/form/Image";
import Input from "../../component/form/Input";
import Link from "../../component/basic/Link";
import ButtonComponent from "../../component/basic/ButtonComponent";
import { login } from "../../services/CoordinateServices";
import { saveToken } from "../../hooks/useToken";

const Login = () => {

    const[username, setUsername] = useState(undefined);
    const[password, setPassword] = useState(undefined);

    const[loginError, setLoginError] = useState(undefined);

    const navigate = useNavigate();


    const handleLogin = async () => {
        if( username && password ){

            const {status, data} = await login( username, password );

            if( status >= 200 && status <= 205 ) {
                saveToken(data);
                navigate("/admin");
            } else if (status >= 400 && status <= 420){
                setLoginError(data);
            }
        }

    };

    return (
        <>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image classes={"mx-auto h-10 w-auto"} alternativeText="Your Company" imageSource={"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"} />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Se connecter</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" >
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Mail</label>
                        <div class="mt-2">
                            <Input type={"text"} onChange={(event) => setUsername(event.target.value)} name={"email"} id={"email"} autocomplete={"email"} required classes="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                            <div class="text-sm">
                                <Link lien={"#"} classes="font-semibold text-indigo-600 hover:text-indigo-500" text={"Forgot Password"} />
                            </div>
                        </div>
                        <div class="mt-2">
                            <Input type={"password"} onChange={(event) => setPassword(event.target.value)} name={"password"} id={"password"} autocomplete={"current-password"} required classes="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                        </div>

                        <p className="text-red-500">
                            { loginError }
                        </p>
                    </div>
                    <div>
                        <ButtonComponent onClick={() => handleLogin()} type={"button"} classes="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" text={"Se connecter"} />
                    </div>
                    </form>
                </div>
                </div>
        </>
    )
};

export default Login;