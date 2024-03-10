import React from 'react';
import Header from './Header';
import './Styles/App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import signUp from '../src/pages/signUp';
function App() {
  return (
    <Router>
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
          <Link to="/signUp">Go to Page 2</Link>          
        </div>
    </div>
    </Router>
  );
}

export default App;