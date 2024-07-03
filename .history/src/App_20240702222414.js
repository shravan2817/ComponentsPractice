import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePages from './components/HomePages'
import AboutPage from './components/AboutPage'
import UserPage from './components/UserPage';
import DropdownComponents from './components/DropdownComponents';
import TableComponents from './components/TableComponents';
import { configureStore } from '@reduxjs/toolkit';
 import {Provider} from 'react-redux'
import YoutubeForm from './Rhf-components/YoutubeForm';
const App = () => {
  //React Hook Forms 



  // let store = configureStore({
  //   reducer: {
  //     // reducer: BasicReducer
  //   }
  // })
  return (
    <div>
      {YoutubeForm}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <HomePages/>
          <TableComponents  />
          <DropdownComponents/>
        </ul>
      </nav> */}
      {/* <Provider store = {store}>
      <Router>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<UserPage/>}/>
        <Route path="/TableComponents" element={<TableComponents/>}/>
        <Route path="/DropdownComponents" element={<DropdownComponents/>}/>
      </Routes>
      </Router>
      </Provider> */}
     
      
    </div>
  )
}

export default App