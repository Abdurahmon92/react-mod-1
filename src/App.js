import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Navbar from './components/Navbar';
import RouterApp from './components/RouterApp';
import { AuthContext } from './contex';


function App() {
  const [isAuth,setisAuth]=useState(false)
  return (
    <AuthContext.Provider value={isAuth,setisAuth}>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
