import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ServiceProvider} from './Context/ServiceContext';
import {TestimonyProvider} from './Context/TestimonyContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <ServiceProvider>
       <TestimonyProvider>
          <App />
       </TestimonyProvider>
     </ServiceProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
