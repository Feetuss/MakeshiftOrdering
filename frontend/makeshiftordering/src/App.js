import React from 'react';
import './Styles/App.css';
import SignIn from './routes/signIn';
import SignUp from './routes/signUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/"><SignIn /></Route>
          <Route path="/signUp"><SignUp /></Route>
        </Routes>
      </div>
      
    </Router>
  );
  
}

export default App;