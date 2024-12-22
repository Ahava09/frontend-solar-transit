import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/authentification/Login';
import Index from './views/admin/Index';

// import useGoogleMap from './hooks/useGoogleMap';
import {APIProvider} from '@vis.gl/react-google-maps';
const root = ReactDOM.createRoot(document.getElementById('root'));

const API_KEY = "AIzaSyCUQPXDe5rLiOnx7jDestNV8819qcwAToA";


root.render(
  <React.StrictMode>
    <APIProvider  onError={(e) => console.log(e) } apiKey={API_KEY}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/map' element={ <Index /> } />
        </Routes>
      </BrowserRouter>
    </APIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
