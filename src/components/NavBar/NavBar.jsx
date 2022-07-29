import React from 'react';
import {BsCartFill} from 'react-icons/bs';
import './NavBar.css';
import { useSelector,useDispatch } from 'react-redux';
export default function NavBar(){
    const isLoggedIn = useSelector((state)=>(state.isLoggedIn));
    const cartQty = useSelector((state)=>(state.cartQty));
    const dispatch = useDispatch();
    const ProductsPage =()=>{
        dispatch({type:'Products'});
    };
    const CartPage =()=>{
        dispatch({type:'Cart'});
    };
    const toLogin =()=>{
        dispatch({type:'Login'});
    };
    /*const toLogin2 =()=>{
        dispatch({type:'Login2'})
    }*/
    return(
        <div className='top'>
            <h1>ShopKart.</h1>
            
            <ul className='navLinks'>
                <li><button onClick={ProductsPage}>Products</button></li>
                {isLoggedIn?
                <li><button onClick={toLogin}>Logout</button></li>
                : <li><button onClick={toLogin}>Login</button></li>
                }
                <li><button className='cartIcon' onClick={CartPage}><BsCartFill/></button><p className='cartQty'>{cartQty}</p></li>
            </ul>
            </div>
        
    )
}
