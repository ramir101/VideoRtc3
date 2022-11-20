import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { ContextProvider } from './ContextSockets.js';


const root = createRoot(document.querySelector('#root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);
