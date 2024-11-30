import { useEffect, useState } from "react"

import Instapost from "./PostCard"
import Stories from "../Stories";
import NavBar from "../NavBar";

const AllPost=()=>{
 
    const [post,setPost]=useState([])

       
useEffect(()=>{
  fetch('http://localhost:3001/allpost',{
    headers:{
      "Content-Type":"application/json",
    "Authorization":"Bearer "+localStorage.getItem("jwt")
  }
}) .then(res=>res.json())
  .then(data=>setPost(data))
},[])
 return post.length==0 ? <h1>Loading</h1>:
 <center>

< div style={{marginTop: '18px', marginBottom: '18px'}}>   
        { post.map((item,idx)=>< Instapost postDetail={item} key={idx} />)}
      </div> 
 
   </center>

   

}
export default AllPost 