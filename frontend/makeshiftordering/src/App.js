import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Styles/App.css';
function App() {
  return (
    <div>
      <Header/>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className="textfields-container">
          <div className="input-goup">
            <label for="username" className="label-signin">Username: </label>
            <input className="textfields-signin" type="text" id="username" name="username" placeholder="Username"></input>
          </div>

          <div className="input-goup">
            <label for="password" className="label-signin">Password: </label>
            <input className="textfields-signin" type="password" id="password" name="password" placeholder="Password"></input>
          </div>
          <button className='signin-button'>
            Sign In
          </button> 
          <Link  to={'/pages/signUp.js'}>NavigateNow</Link>     
        </div>
    </div>
  );
}

export default App;