import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SingleView from './pages/Single';


const App = () =>
{
  return (
    <>
      <SingleView/>
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