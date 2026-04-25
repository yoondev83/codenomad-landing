import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.jsx';
import './index.css';

// Initialize Google Analytics with public ID
ReactGA.initialize('G-XMMVLVEP6P');

// Send initial pageview
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

// Developer Console Greeting
const greeting = `
%c👋 Hello, Developer!
%cAre you looking for a Salesforce expert?
Let's build something great together.

%c📧 Email: yoondev83@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/yoonsukchang/
`;

const styleTitle = "font-size: 24px; font-weight: bold; color: #0071e3; margin-bottom: 8px;";
const styleBody = "font-size: 14px; color: #1d1d1f;";
const styleContact = "font-size: 14px; font-weight: bold; color: #6e6e73;";

console.log(greeting, styleTitle, styleBody, styleContact);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
