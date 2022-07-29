import {createStore} from 'redux';
import DB from '../db.json';
const baseCart=[];
for(let i=0;i<DB.products.length;i++){
    baseCart.push(0);
}
const ReducerFn =(state={
    domain:"Login",
    isLoggedIn:false,
    cartQty:0,
    cartDetails:baseCart,
    ProductDetails:{
        id:2
    }
},action)=>{
    if(action.type==='Products'){
        return {domain : "Products",isLoggedIn:state.isLoggedIn,ProductDetails:state.ProductDetails,cartQty:state.cartQty,cartDetails:state.cartDetails}
    }
    if(action.type==='Cart'){
        return {domain : "Cart",isLoggedIn:state.isLoggedIn,ProductDetails:state.ProductDetails,cartQty:state.cartQty,cartDetails:state.cartDetails}
    }
    if(action.type==='Login'){
        return {domain : "Login", isLoggedIn:false,ProductDetails:state.ProductDetails,cartQty:state.cartQty,cartDetails:state.cartDetails}
    }
    if(action.type==='Login2'){
        return {domain : "Products", isLoggedIn:true,ProductDetails:state.ProductDetails,cartQty:state.cartQty,cartDetails:state.cartDetails}
    }
    if(action.type==='ProductDetails'){
        return {domain:"ProductDetails",isLoggedIn:state.isLoggedIn,ProductDetails:{ id: action.id},cartQty:state.cartQty,cartDetails:state.cartDetails};
    }
    if(action.type === 'CartWork'){
        if(action.cart==="INC"){
            let x = state.cartDetails;
            if (action.id<=x.length){
                x[action.id-1]=x[action.id -1]+1;
            }
            console.log(x);
            return {domain:state.domain,isLoggedIn:state.isLoggedIn,ProductDetails:state.ProductDetails,
                cartQty:state.cartQty+1,cartDetails:x}
        }
        if(action.cart==="DEC"){
            let x = state.cartDetails;
            if (action.id<=x.length){
                x[action.id-1]=x[action.id -1]-1;
            }
            return {domain:state.domain,isLoggedIn:state.isLoggedIn,
                ProductDetails:state.ProductDetails,cartQty:state.cartQty-1,cartDetails:x}
        }
    }
    return state;
};

const store = createStore(ReducerFn);
export default store;