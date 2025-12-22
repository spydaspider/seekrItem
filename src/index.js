import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ItemsContextProvider } from './context/ItemsContext';
import { ClaimsContextProvider } from './context/ClaimsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider><ItemsContextProvider><ClaimsContextProvider><App/></ClaimsContextProvider></ItemsContextProvider></AuthContextProvider>
  </React.StrictMode>
);

