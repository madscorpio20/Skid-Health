import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import classes from './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className = {classes}>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/> 
        <Route path="/all" element={ <AllUsers/>}/> 
        <Route path="/add" element={ <AddUser />}/> 
        <Route path="/edit/:id" element={ <EditUser />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
