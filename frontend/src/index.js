import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {HashRouter } from "react-router-dom";
import ChatProvider from './Context/Chatprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ChatProvider>
     <ChakraProvider>
    <App />
    </ChakraProvider>
    </ChatProvider>
    </HashRouter>
);

