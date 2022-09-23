import {
  Routes, 
  Route
} from "react-router-dom";
import { 
  Footer 
} from './components/Footer';
import {
  Homepage,
  LoginPage,
  SignupPage,
  Error404Page
} from "./pages";

import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={ "/" } element={ <Homepage /> } />
        <Route path={ "/login" } element={ <LoginPage /> } />
        <Route path={ "/signup" } element={ <SignupPage /> } />
        <Route path={ "*" } element={ <Error404Page /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
