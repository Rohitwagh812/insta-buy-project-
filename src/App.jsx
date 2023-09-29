import { useEffect, useState } from 'react';

import { Routes , Route, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Logo from './assets/logo.png' 
import Home from './pages/Home'
import Login from './pages/login'
import Signin from './pages/Signin';
import ProductGallry from './pages/productGallry';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/checkout';


function App() {
  const navgate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItem, setCartItem] = useState({});

  useEffect(()=>{
    const UserEmail = localStorage.getItem('UserEmail');
    if(UserEmail){
       setUser(UserEmail)
    }
  } , []);

  const handleAddToCart = (item) => {
    setCartItem({...cartItem , ...item})
  }

  return (

  <div >
<Navbar  className="instabuy-navbar">
        <Navbar.Brand href="/">
          <img 
          className="d-inline-block align-top"
          width="30"
          height="30"
          alt=""
          src={Logo}  />{''}
          InstaBuy!
          </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=>navgate('/cart')}>Cart &nbsp;{Object.keys(cartItem).length > 0
           &&(<Badge bg='success'>{Object.keys(cartItem).length}</Badge>) }</Button>}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={()=>navgate('/Login')}>{user ? 'Logout' :'Login' }</Button>
        </Navbar.Collapse>
    </Navbar>

    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signin" element={<Signin setUser={setUser}/>} />
      <Route path="/products" element={<ProductGallry/>} />
      <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleAddToCart} 
       cartItem={cartItem} />} />
      <Route path='/cart' element={<Cart cartItem={cartItem} />} />
      <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

  </div>
  ) 
}

export default App
