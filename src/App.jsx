import './App.css'

import Nav from './components/Nav/Nav'
import Departments from './pages/Departments/Departments'

//#region Page imports
import Home from './pages/Home/Home'
// import About from './pages/About/About'
//#endregion

import { Route, Routes } from 'react-router-dom' 

//#region Functional Components
function App() {

  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/departments' element={<Departments />} />
      </Routes>

    </div>
  )
}
//#endregion

export default App
