import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ItemsContextProvider } from './context/ItemsContext';
import { ClaimsContextProvider } from './context/ClaimsContext';
import { UsersContextProvider } from './context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider><ItemsContextProvider><ClaimsContextProvider><UsersContextProvider><App/></UsersContextProvider></ClaimsContextProvider></ItemsContextProvider></AuthContextProvider>
  </React.StrictMode>
);

