
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Games from './games'
import Login from './Authentication/login'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/games" element={<Games/>} />
      <Route exact path="/login" element={<Login/>} />
      
    </Routes>
    </div>
  );
}

export default App;
