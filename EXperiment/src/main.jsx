import React from 'react'
import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './index.css'
import Layout from './Layout'
import About from './components/Demo1/Demo1'
import Home from './components/Home/Home'
import Contact from './components/Demo2/Demo2'
import { Route } from 'react-router-dom'
import User from './components/Demo4/Demo4'

//old approach
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//alternative approach
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<Layout/>}>
      <Route path=""  element={<Home/>}/>
      <Route path="about"  element={<About/>}/>
      <Route path="contact"  element={<Contact/>}/>
      <Route path="user/:userid"  element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)