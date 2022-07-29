import React from "react";
import "./Cart.css";
import {useSelector} from 'react-redux';
import CartListItem from "./CartListItem";
import DB from"../../db.json";
function Cart(){
    const CartItems = useSelector((state)=>(state.cartDetails));
    const products = DB.products;
    const CartList=[];
    var total=0;
    for(let i=0;i<CartItems.length;i++){
        if (CartItems[i]>0)
        CartList.push(<CartListItem id={i} qty={CartItems[i]}/>);
        total+=CartItems[i]*products[i].amount;
        
    }
    const checkout = () =>{
        if (total===0){
            alert("Empty Cart");

        }else{
            alert("Order Placed Successfully");
        }
    }
    return(
        <><div className="CartList">
            <h2>My Cart</h2>
            {CartList}
            
        </div>
        <div className="Invoice">
        <h3>Total</h3>
        <h3>{total}</h3>
        <button onClick={checkout}>Checkout</button>
        </div></>
    )
}
export default Cart;