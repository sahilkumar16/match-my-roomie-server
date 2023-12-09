import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import SignUp from './components/SignUp';
import CreateProfile from './components/creatyourprofile/CreateProfile';
import Display from './components/creatyourprofile/Display';
import Gender from './components/creatyourprofile/Gender';
import Biography from './components/creatyourprofile/Biography';
import ProfilePhoto from './components/creatyourprofile/ProfilePhoto';
import Success from './components/creatyourprofile/Success';
import Quiz from './components/compatibility-quiz/Quiz';
import Results from './components/compatibility-quiz/Results';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/createprofile/:userId' element={<CreateProfile />} />
          <Route path='/display' element={<Display />} />
          <Route path='/gender' element={<Gender />} />
          <Route path='/biography' element={<Biography />} />
          <Route path='/profilephoto' element={<ProfilePhoto />} />
          <Route path='/success/:userId' element={<Success />} />
          <Route path='/quiz/:userId' element={<Quiz />} />
          <Route path='/results/:userId' element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
