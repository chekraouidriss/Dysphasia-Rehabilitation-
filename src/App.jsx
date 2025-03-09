import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login1 from './Login1' 
import Home from './Home'
import Index1 from './Index1'
import Signup_specialiste from './Signup_specialiste'
import Login1_specialiste from './Login1_specialiste'
import Home_specialiste from './Home_specialiste'
import Practice from './Practice'
import Practice2 from './Practive2'
import Practice3 from './Practice3'
import Practice4 from './Practice4'
import Practice5 from './Practice5'
import Profile from './Profile'
import Collab from './Collab'
import Profile_specialiste from './Profile_specialiste'
import Enreg from './Enreg'
import Enregpat from './Enregpat'
import Todo from './Todo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/Signup' element={<Signup />}> </Route>
    <Route path='/Login1' element={<Login1 />}>   </Route>
    <Route path='/Home' element={<Home />}>   </Route>
    <Route path='/Index1' element={<Index1 />}>   </Route>
    <Route path='/Signup_specialiste' element={<Signup_specialiste />}>   </Route>
    <Route path='/Login1_specialiste' element={<Login1_specialiste />}>   </Route>
    <Route path='/Home_specialiste' element={<Home_specialiste />}>   </Route>
    <Route path='/Practice' element={<Practice />}>   </Route>
    <Route path='/Practice2' element={<Practice2 />}>   </Route>
    <Route path='/Practice3' element={<Practice3 />}>   </Route>
    <Route path='/Practice4' element={<Practice4 />}>   </Route>
    <Route path='/Practice5' element={<Practice5 />}>   </Route>
    <Route path='/Profile' element={<Profile />}>   </Route>
    <Route path='/Collab' element={<Collab />}>   </Route>
    <Route path='/Enreg' element={<Enreg />}>   </Route>
    <Route path='/Enregpat' element={<Enregpat />}>   </Route>
    <Route path='/Todo' element={<Todo />}>   </Route>
    <Route path='/Profile_specialiste' element={<Profile_specialiste />}>   </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
