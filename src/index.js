import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import Login from './components/Login';


  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri: window.location.origin
    }} >

      <Login/>

        {/* <App /> */}

      </Auth0Provider>
    </BrowserRouter>

  </React.StrictMode>
);

