import React, { createContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css'
import { UserContext } from '../../App';
const Signin = () => {
    const {state, dispatch}= createContext(UserContext);
    const history= useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const postData=()=>{
        if( !	
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            {
                M.toast({html:"invalid Email",classes:"#b71c1c red darken-4"})
                return
            }
        fetch("/signin",{
            method:"POST",
                headers:{"Content-Type":"application/json"

            },
            body:JSON.stringify({
            email,
            password
        })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.error)
           {
            M.toast({html:data.error,classes:"#b71c1c red darken-4"})
           }
           else{
               localStorage.setItem("jwt",data.token);
               localStorage.setItem("user",JSON.stringify(data.user));
               dispatch({type:"USER",payload:data.user})
            M.toast({html:"successfully SignIn",classes:"#00897b teal darken-1"})
            history.push('/')
           }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />


                <button 
                  onClick={()=>postData()} className="btn waves-effect waves-light #1e88e5 blue darken-1">Login
                    
                </button>
                <Link to="/signup"> 
         <h5>Don't have an account?</h5>
         </Link>
            </div>
            
        </div>
       
    );
};

export default Signin;