import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import { ContextProvider } from './ContextSockets.js';


ReactDom.render(
    <ContextProvider>
        <App />
    </ContextProvider>
, document.getElementById('root'));