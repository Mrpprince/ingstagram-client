import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css'
const CreatePost = () => {
    const history= useHistory();
   const[title,setTitle] =useState("");
   const[body,setBody] =useState("");
   const[image,setImage] =useState("");
   const [url,setUrl]=useState("");

   useEffect(()=>{
    if(url){
     fetch("/createPost",{
         method:"post",
         headers:{
             "Content-Type":"application/json",
             "Authorization":"Bearer "+localStorage.getItem("jwt")
         },
         body:JSON.stringify({
             title,
             body,
             pic:url
         })
     }).then(res=>res.json())
     .then(data=>{
 
        if(data.error){
           M.toast({html: data.error,classes:"#c62828 red darken-3"})
        }
        else{
            M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
            history.push('/')
        }
     }).catch(err=>{
         console.log(err)
     })
 }
 },[url])

const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","instagram-clone")
    data.append("cloud_name","dmzcihw9t")
    fetch("https://api.cloudinary.com/v1_1/dmzcihw9t/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

 
}
    return (
        <div style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }} className="card input-filed">
            <input type="text" placeholder="title" 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <input type="text" placeholder="body"
             value={body}
             onChange={(e)=> setBody(e.target.value)} />
           
                <div className="file-field input-field">
                    <div className="btn #1e88e5 blue darken-1 ">
                        <span>Upload Image</span>
                        <input type="file" onChange={(e)=>setImage(e.target.files[0])}  />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button onClick={()=>postDetails()} className="btn waves-effect waves-light #1e88e5 blue darken-1">Submit Post
                    
                    </button>
            
        </div>
    );
};

export default CreatePost;