import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';


const App = () =>
{
  return (
    <>
      <Home/>
    </>
  )
};

//conditionally render Nav, Journals, and Upload
//based on login credentials
//after login, Login should disappear

//conditionally render Single (single journal)
//based on interaction with created list of journals
//Single is a component of Journals

export default App;