import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import AddEditProduct from './pages/AddEditProduct'
import Home from './pages/Home';
import { useState } from 'react';
import  Navigation  from './components/Navigation';
import Fact from './components/fact';
import ProductsList from './pages/ProductsList';
import UpdateProducts from './pages/UpdateProducts';
import Login from './components/Login';
// import  PrivateRoute  from './components/PrivateRoute';

// import Header from './components/Header';

function App() { 
  const [user, setUser] = useState(false);
  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  };

  return (
      <BrowserRouter>
        <div className='App'>
        <Navigation />
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/add' element={<AddEditProduct/>} />
                <Route path='/productlist' element={<ProductsList/> } />
                <Route path='/updateproducts/:id' element={<UpdateProducts/>} />
                <Route path='/fact' element={<Fact/>} />
            </Routes>
         
        </div>
      </BrowserRouter>
  );
}

export default App;
