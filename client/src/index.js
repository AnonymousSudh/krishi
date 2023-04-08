import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login/Login';
// import Signup from './login/Signup'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
      {/* <Signup/> */}
      {/* <Login/> */}
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

