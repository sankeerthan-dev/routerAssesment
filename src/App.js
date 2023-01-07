import './App.css';
import Products from './Pages/Products';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nav from './Components/Nav'
import {Routes, Route, Navigate} from "react-router-dom"
import PrivateRoute from './Context/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to ="/login"/>}/>
        <Route path="/home" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        } />
        <Route path="/products/:id" element={
          <PrivateRoute>
            <Products/>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;