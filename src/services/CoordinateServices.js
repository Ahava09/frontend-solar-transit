
import 'axios';
// For getting the coordinates of all people

import APIPATH from "./ApiPath";

import {useToken} from "../hooks/useToken";
import axios from 'axios';
import getCookie from './Cookie.service';

const fetchLocalisations = async ( id ) => {
    
    const url = APIPATH.deplacement + "/" + id;

    const {data} = await axios.get(url);

    return data;

};


const fetchUtilisateurs = async () => {
    
    const url = APIPATH.users;

    const {data} = await axios.get( url );

    return data;

};


const useLocalisation = () => {
    const token = useToken();
    const url = APIPATH.deplacement;
};

const login = async ( username, password ) => {

    const url = APIPATH.login;
    
    const body = {
        "email" : username,
        "password" : password
    };

    const {status, data} = await axios.post(url, body, {
        'headers' : {
            'Content-Type' : 'application/json'
        },
        withCredentials: true
    });

    let d;

    if(status >= 200 && status <= 205) {
        console.log(data);
        d = data.token;
       
    }else if( status >= 400 && status <= 405 ) {
        d = data.message;
    }

    return {
        status: status,
        data: d
    }

};


export {
    login,
    fetchUtilisateurs,
    fetchLocalisations
}