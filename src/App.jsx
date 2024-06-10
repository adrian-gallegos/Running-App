import React, { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Components/Register'

function App() {

  //create router
  const router = createBrowserRouter([
    {
      path:'/*',
      element: <div><Register/></div>
    }
  ]);
  
    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    );
}

export default App
