import { Container,Avatar, Typography } from "@mui/material"
import { UserIdContext } from "./MainScreen"
import React, { useEffect, useState } from "react"
import { useContext } from "react"
const RightNavBar=( )=>{
const [loggedinUser,setLoggedinUser]=useState([])
const id=localStorage.getItem("Userid")

// fetching data of currently logged in using  Userid
  useEffect(()=>{

        fetch(`http://localhost:3001/user/${id}`,{
            method:"get",
            headers:{
              "Content-Type":"application/json",
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
        })
          .then(res=>res.json())
          .then(data=> {
          setLoggedinUser(data.user)
        
          })

  },[])
        

    return <div style={{marginTop:'5rem',marginLeft:'2rem',position:'fixed'}}>
       
                {/* div 1 for avatar and  swith and username */}
                <div style={{display:'flex',marginBottom:'1rem',marginLeft:'3rem'}}> 
                    <Avatar
                        size="lg"
                        src={loggedinUser.pic}
                        sx={{ p:0, border: '2px solid',borderColor:'darkgrey', width:50,height:50}}
                    />
                    <h3 style={{marginLeft:'1rem'}}>{loggedinUser.name}</h3>
                    <h6 style={{color:'blue',marginLeft:'7rem',marginTop:'0.4rem'}}>switch</h6>
                    
                </div>
                {/* div 2  */}
                <div style={{display:'flex',marginTop:'2rem',marginLeft:'3rem'}}>
                     <h6 style={{color:'grey'}}>Suggested for you</h6>
                     <h6 style={{marginLeft:'8.5rem'}}>See All</h6>
                </div>
       
    </div>
}
export default RightNavBar