import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChatProvider from "./context/ChatProvider";
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render(
    <ChakraProvider>
      <React.StrictMode>
      <ChatProvider>
           <App />
       </ChatProvider>
      </React.StrictMode>,
    </ChakraProvider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
