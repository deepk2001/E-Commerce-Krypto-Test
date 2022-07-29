import React from 'react';
import DB from "../../db.json";
import './Login.css';
import {useDispatch} from 'react-redux';
export default function Login(){
    const users = DB.users;
    const dispatch  = useDispatch();
    var username="";
    var password="";
    const UserNameType=(event)=>{
      username = event.target.value;
      
    }
    const PassWordType=(event)=>{
      password =event.target.value;
    }
    const Authenticate =()=>{
      var x = false;
      for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
          dispatch({type:'Login2'});
          x=true;
          break
        }
      }
      if(x===false){
        alert("Invalid Username/Password");
      }
      
    }
    return(
        <div className='LoginBox'>
            
            <form>
            <h1>Login</h1>
       <div className="input-container">
         
         <input type="text" placeholder='Username' name="uname" onChange={UserNameType} required />
        
       </div>
       <div className="input-container">
         
         <input type="password" placeholder='Password' name="pass" onChange={PassWordType} required />
         
       </div><br/>
       <center><a href='##'>New User ? Create an Account</a>
       <br/>
       <div className="button-container">
         <button onClick={Authenticate}>Login</button>
       </div></center>
     </form>
        </div>
    )
}