import React from "react";
import ProductListItem from "./ProductListItem";
import './Products.css';
import DB from '../../db.json';
function Products(){
    const Products = DB.products;
    const ProductList = []
    for(let i =0 ;i<Products.length;i++){
        ProductList.push(<li><ProductListItem title = {Products[i].title} amount = {Products[i].amount} 
        imageSrc = {Products[i].image} rating = {Products[i].rating} id = {Products[i].id}/></li>);
        
    }
    return(
        <ul className="itemList">
            <center>{ProductList}</center>
            
        </ul>
    )
}

export default Products;