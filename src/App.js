import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePages from './components/HomePages'
import AboutPage from './components/AboutPage'
import UserPage from './components/UserPage';
import DropdownComponents from './components/DropdownComponents';
import TableComponents from './components/TableComponents';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li> */}
          <HomePages/>
          {/* <TableComponents  />
          <DropdownComponents/> */}
        </ul>
      </nav>
      {/* <Router>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/users" element={<UserPage/>}/>
      </Routes>
      </Router> */}
      
    </div>
  )
}

export default App