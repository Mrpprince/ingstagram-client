import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css'
const Signup = () => {
   const history= useHistory();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const postData=()=>{
        if( !	
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            {
                M.toast({html:"invalid Email",classes:"#b71c1c red darken-4"})
                return
            }
        fetch("/signup",{
            method:"POST",
                headers:{"Content-Type":"application/json"
            },
            body:JSON.stringify({
            name,
            email,
            password
        })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error)
           {
            M.toast({html:data.error,classes:"#b71c1c red darken-4"})
           }
           else{
            M.toast({html:data.message,classes:"#00897b teal darken-1"})
            history.push('/signin')
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
                    placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
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
                onClick={()=>postData()}
                 className="btn waves-effect waves-light #1e88e5 blue darken-1">SignUp
                    
                </button>
         <Link to="/signin"> 
         <h5>Already have an account?</h5>
         </Link>
            </div>
        </div>
    );
};

export default Signup;