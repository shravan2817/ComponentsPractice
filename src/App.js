import React from 'react'
import HomePages from './components/HomePages'
import AboutPage from './components/AboutPage'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><link to="/">Home</link></li>
          <li><link to="/">About</link></li>
          <li><link to="/">Users</link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="" element={<HomePages/>}/>
        <Route path="" element={<AboutPage/>}/>
        <Route path="" element={<UserPage/>}/>
      </Routes>
    </div>
  )
}

export default App