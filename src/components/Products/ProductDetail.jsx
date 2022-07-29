import React,{useState}  from "react";
import {BiRupee} from 'react-icons/bi';
import './Products.css';
import DB from '../../db.json';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';

function ProductDetails(props){
    const Products = DB.products;
    const ProductById = Products[props.id-1]
    const[fav,setFav] = useState(false);
    const like =()=>{
        setFav(!(fav));
        
    };
    const favorite={
        color : 'red'
    };
    return(
        <div className="ProductDetailsBox">
            <img src={ProductById.image} alt=""  />
            <div className="ProductInfo">
                <h3>{ProductById.title}</h3><br></br>
                <p>{ProductById.description}</p>
                <center>{ProductById.rating>=4?<div className="ratingsBox">{ProductById.rating}</div>:null}
           {ProductById.rating>=2.5 && ProductById.rating<4? <div className="ratingsBox1">{ProductById.rating}</div>:null}
           {ProductById.rating<2.5?<div className="ratingsBox2">{ProductById.rating}</div>:null}</center>
           <center><p className="pricePara1"><BiRupee/>{ProductById.amount}</p></center>
           <button className="favoriteSelector1 " onClick={like}>{!(fav)?<AiOutlineHeart size={40}/>:<AiFillHeart size={40} style={favorite}/>}</button>
           <button className="AddBuy">Add to Cart</button>
            <button className="AddBuy">Buy Now</button>
            
            </div>
            
        </div>
    );
}
export default ProductDetails;