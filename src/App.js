
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Studentinfo from './components/studentinfo';
import Studentid from './components/Studentid';
import AddStudent from './components/AddStudent';

import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<h1>School Listing Component</h1>} />
            <Route path="/home" element={<h1>Home Product Component</h1>} />
            <Route path="/about" element={<h1>About Product Component</h1>} />
            <Route path="/contact us" element={<h1>Contact Us Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
           


         
            
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/> } />
          <Route path="/studentinfo" element={<Studentinfo  />} />
          <Route path="/studentid" element={<Studentid/>} />
          <Route path="/addstudent" element={<AddStudent/>} />
         
        </Routes>
      </BrowserRouter>
     
      <Home />
      <Footer />
    </div>
  );
}

export default App;
