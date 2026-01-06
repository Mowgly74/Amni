import { useState } from 'react'
import React from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Components/Notfound/Notfound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Logout from './Components/Logout/Logout'
import Dashboard from './Components/AdminLayout/Dashboard/Dashboard'
import PatientDashboard from './Components/PatientDashboard/PatientDashboard'
import Report from './Components/Report/Report'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Contact from './Components/Contact/Contact'
import Store from './Components/Store/Store'
import AdminLayout from './Components/AdminLayout/AdminLayout'




let x = createBrowserRouter([
    {path:"" , element : <Layout/> ,
     children : [
    {index : true   , element : <Home/>},
    {path:"about", element : <About/>},
    {path:"features", element : <Features/>},
    {path:"contact", element : <Contact/>},
    {path:"store", element : <Store/>},
    {path:"*"       , element : <Notfound/>},
  ]},
  {path:"report" , element : <Report/>}, // Standalone emergency QR page - no navbar/footer
  {path:"login" , element : <Login/>},
  {path:"register", element : <Register/>},
  {path:"logout", element : <Logout/>},
  {path:"report_page", element : <PatientDashboard/>},
  {path:"admindash"    , element : <AdminLayout/>,
     children : [
      {index : true   , element : <Dashboard/>},

     ]},

  
])

let query = new QueryClient()


function App() {

  return (
    <>
       <QueryClientProvider client={query}>
        <RouterProvider  router={x}></RouterProvider>

        </QueryClientProvider>   
    </>
  )
    
    
  
}

export default App
