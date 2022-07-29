import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';
function App() {
  const domain = useSelector((state)=>(state.domain))
  const isLoggedIn = useSelector((state)=>(state.isLoggedIn));
  const id = useSelector((state)=>(state.ProductDetails.id));
  return (
    <div className='body'>
      <NavBar/>
      {domain==="Login" && isLoggedIn===false?
      <div className='LoginForm'><Login/></div>:null}
      {domain==="Products" ?
        <Products/>:null
      }
      {domain==="Cart"?
      <Cart/>:null
      }
      {domain==="ProductDetails" && id>=0?
      <ProductDetails id ={id}/>:null}
    </div>
  );
}

export default App;
