import React,{useState} from "react";
import './Products.css';
import {BiRupee} from 'react-icons/bi';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
import {MdOutlineAddShoppingCart} from 'react-icons/md';
import {useDispatch} from 'react-redux';
export default function ProductListItem(props){
    const favorite={
        color : 'red'
    };
    const[fav,setFav] = useState(false);
    const[qty,setQty] = useState(0);
    const dispatch = useDispatch();
    const like =()=>{
        setFav(!(fav));
        
    };
    const add =()=>{
        setQty(qty+1);
        
        dispatch({type:"CartWork",cart:"INC",id:props.id});
    };
    const sub = () =>{
        setQty(qty-1);
        dispatch({type:"CartWork",cart:"DEC",id:props.id});
    }
    const ProductDetails = () =>{
        dispatch({type:'ProductDetails',id :props.id});
    }
    return(
        <div className="itemBlock">
           <button className="itemAccess"  onClick={ProductDetails}><center><div className="itemImg"><img src={props.imageSrc} alt="" width="230px" height="170px" /></div></center> 
           <center><p>{props.title}</p></center>
           <center><p ><p className="pricePara"><BiRupee/>{props.amount}</p>
           {props.rating>=4?<div className="ratingsBox">{props.rating}</div>:null}
           {props.rating>=2.5 && props.rating<4? <div className="ratingsBox1">{props.rating}</div>:null}
           {props.rating<2.5?<div className="ratingsBox2">{props.rating}</div>:null}
           </p></center></button>
           <button className="favoriteSelector" onClick={like}>{!(fav)?<AiOutlineHeart />:<AiFillHeart style={favorite}/>}</button>
           {qty===0?<button className="addToCart" onClick={add}><MdOutlineAddShoppingCart/></button>
           :<div className="cartHelp" ><button className="qButton" onClick={sub}>-</button>{qty}<button className="qButton" onClick={add}>+</button></div>}

        </div>
    );
}