import './App.css'

// import Nav from './pages/Nav/Nav'

//#region Page imports
import Home from './pages/Home/Home'
// import About from './pages/About/About'
//#endregion

import { Route, Routes } from 'react-router-dom' 

//#region Functional Components
function App() {

  return (
    <div className='App'>
      {/* <Nav /> */}

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}
//#endregion

export default App
