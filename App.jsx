import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Router/Home';
import Profile from './Router/Profile';
import History from './Router/History';
import India from './Router/India';
import Culture from './Router/culture';
import Contact from './Router/contact';
import Header from './Router/Header';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [count, setCount] = useState(0)

  return (

   
    <BrowserRouter>
    <Header/>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/home" element={<Profile/>}></Route>
  <Route path='/history' element={<History/>}></Route>
  <Route path='/india' element={<India/>}></Route>
  <Route path='/culture' element={<Culture/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
