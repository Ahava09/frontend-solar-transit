import 'axios';
// For getting the coordinates of all people

import APIPATH from "./ApiPath";

import {getToken, useToken} from "../hooks/useToken";
import axios from 'axios';
// import getCookie from './Cookie.service';

const fetchLocalisations = async ( id ) => {
    const token = getToken();
    
    const url = APIPATH.deplacement + "/" + id;

    const {data} = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;

};


const fetchUtilisateurs = async () => {
    
    const url = APIPATH.users;
    const token = getToken();


    const {data} = await axios.get( url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } );

    return data;

};


const getLocalisation = async ( userid ) => {
    const token = getToken();
    const url = APIPATH.deplacementActuelle + "/" + userid;

    const {data} = await axios.get( url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } );

    return data;

};

const login = async ( username, password ) => {

    const url = APIPATH.login;
    
    const body = {
        "email" : username,
        "password" : password
    };

    const {status, data} = await axios.post(url, body, {
        'headers' : {
            'Content-Type' : 'application/json',
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

const search = async ( address ) => {

    const url = APIPATH.address;
    
    const body = {
        "address" : address
    };

    const {status, data} = await axios.post(url, body, {
        'headers' : {
            'Content-Type' : 'application/json',
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
    fetchLocalisations,
    getLocalisation,
    search
}