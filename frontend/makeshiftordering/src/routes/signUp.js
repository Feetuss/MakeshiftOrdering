import React from 'react';
import Header from '../components/Header';


const SignUp = () => {
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
            Sign Up
          </button>     
        </div>
    </div>
  );
}

export default SignUp;