import React from 'react'
import {Routes,Route} from "react-router-dom" 
import LandingPage from './Routes/LandingPage'
import CreatePostPage from './Routes/CreatePostPage'
export default function App() {
  return (
    
    <Routes>
      <Route path="/" exact element={<LandingPage/>}></Route>
      <Route path="/create-post" exact element={<CreatePostPage/>}></Route>
    </Routes>
    
  )
}
