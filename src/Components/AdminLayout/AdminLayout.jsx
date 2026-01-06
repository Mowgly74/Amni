import React from 'react'
import style from"./AdminLayout.module.css"
import Sidebar from './Sidebar/Sidebar'
import DashNavbar from './DashNavbar/DashNavbar'
import { Outlet } from 'react-router'
import Dashboard from './Dashboard/Dashboard'




export default function AdminLayout() {
  return <>
   <DashNavbar/>
   <Sidebar/>
   <Dashboard/>
   {Outlet}
    
    </>
  
}
