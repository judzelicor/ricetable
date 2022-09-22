import { useState } from 'react'
import {
  Routes, 
  Route
} from "react-router-dom";
import { Footer } from './components/Footer';
import {
  Homepage,
  Login
} from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={ "/" } element={ <Homepage /> } />
        <Route path={ "/login" } element={ <Login /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
