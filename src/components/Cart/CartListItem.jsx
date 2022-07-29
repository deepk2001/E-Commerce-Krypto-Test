import React,{useState} from "react";
import "./Cart.css";
import { BiRupee } from "react-icons/bi";
import DB from "../../db.json";
import {useDispatch} from 'react-redux';
function CartListItem(props){
    const products = DB.products;
    const[qty,setQty] = useState(parseInt(props.qty));
    
    const dispatch = useDispatch();
    const add =()=>{
        setQty(qty+1);
        
        dispatch({type:"CartWork",cart:"INC",id:props.id});
    };
    const sub = () =>{
        setQty(qty-1);
        dispatch({type:"CartWork",cart:"DEC",id:props.id});
    }
    
    return(
        <div className="CartListItemBox">
            <img src={products[props.id].image} alt="" />
                <div className="CartItemDetails">
                <h5>{products[props.id].title}</h5>
                </div>
                {qty>0?
           <div className="cartHelp" id ="itemQty"><button className="qButton" onClick={sub}>-</button>{qty}<button className="qButton" onClick={add}>+</button></div>:null}
           <center><h6><BiRupee/>{products[props.id].amount}</h6></center>
        </div>
    )
}
export default CartListItem;