import { Col, Row } from "react-bootstrap"
import React, { useEffect, useState }  from "react"
import NavBar from "../NavBar"
import { Container,Avatar, Typography, IconButton, Grid } from "@mui/material"
import Button from "@mui/material/Button"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Stack from '@mui/material/Stack'
import { useLocation, useNavigate } from "react-router-dom"
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';//for posts
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined'; //for reel button
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; //for tagged button
// import LoadingButton from '@mui/lab/LoadingButton';


import Styles from '../components.module.css'
import { blue } from "@mui/material/colors"
import { LoadingButton } from "@mui/lab"


const UserProfile=()=>{
    const navigate=useNavigate()
    const [CurrentUser,setUser]=useState({})
  // useState for updating data it holds the data returned by like,unlike API
    const[post,setPost]=useState([])
  // use state for following and unfollowing 
    const [isfollowed,setIsfollowed]=useState(Boolean)
  // useState for updating data it holds the data returned by like followand unfollow
  // update follwers and follwing as soon as someone follwed user
    const[myFollowers,setMyFollowers]=useState({ user: { followers: [] } })

    const following = CurrentUser.following ? CurrentUser.following.length : 0;
    const NoofPost=post.length? post.length:0;

  // if the someone follow the follwers will increase otherwise it will display the followers fetched by user id
   
    const followers = CurrentUser.followers ? CurrentUser.followers.length : 0;
    const followerCount = myFollowers?.user?.followers?.length || followers;


    // recieving data from url - sent from use navigate
    const location=useLocation()
    const id = location.state ? location.state.id : '';
    //  Fetching UserDetail
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
      
        setUser(data.user)
        setPost(data.posts)
        
      })




},[])




// following and unfollowing API called
const Follow=()=>{
    if(isfollowed===false)
    {
    console.log("follow condition");
    fetch('http://localhost:3001/follow',{
      method:'put',
    headers:{
      "Content-Type":"application/json",
    "Authorization":"Bearer "+localStorage.getItem("jwt")
  },
  
    body:JSON.stringify({
        followId:id
        })
  
  }) .then(res=>res.json())
  .then(data=>{
  setMyFollowers(data) 
  setIsfollowed(true)


  })
 
  }
    else{
        console.log("unfollowed ");
   
      fetch('http://localhost:3001/unfollow',{
        method:'put',
      headers:{
        "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
    
      body:JSON.stringify({
         followId:id
          })
    
    }) .then(res=>res.json())
    .then(data=>{
    setMyFollowers(data)
    
     
    })
    setIsfollowed(false)
  
    
    }
}

// Button styles
const FollowButtonStyle={
    height:'30px',
    width:'100px',
    marginTop:'2rem',
    marginLeft:'1rem',
    borderRadius:'10px',
    backgroundColor:isfollowed?'lightgrey':'blue',
    color:isfollowed?'black':'white'
    
};
const MessageButtonStyle={
    height:'30px',
    width:'100px',
    marginTop:'2rem',
    marginLeft:'1rem',
    borderRadius:8,
    backgroundColor:"lightgray",
    border:'1px solid lightgray',
    color:"black"
};
const ButtonStyle={
    height:30,
    width:35,
    marginTop:'2rem',
    marginLeft:'1rem',
    borderRadius:8,
    backgroundColor:"lightgray",
    border:'1px solid lightgray',
    color:"black"
};

   return<div  >

 
    {/*FOR NAVBAR AND USERPROFILE */}
        <Row >
            {/* COL1 FOR NAVBAR */}
            <Col md={2} xs={12} className="border " >
            <NavBar/>
            </Col >
            {/* COl 2 for userprofile page */}
            <Col md={10}  >
                {/* main div for containg all the content */}
                <div  id="maindiv" >
                        {/* div for avatar and and a container*/}
                        <div  style={{display:'flex',marginLeft:'13rem'  ,marginBottom:'1rem',marginTop:'3rem'}}>
                            <Avatar
                            size="lg"
                            src={CurrentUser.pic}
                            sx={{ p: 0, border: '2px solid',borderColor:'darkgrey', width:150,height:150}}
                            />

                            {/* as the above div display is flex so we need Container in which we will pplaceall the components  */}
                            <Container >
                                        {/* 3 divsinside this div which contains my components */}
                                        <div style={{display:'flex'}}>
                                            <Typography variant="h5" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{CurrentUser.name}</Typography>
                                            <Button variant="contained" style={FollowButtonStyle} onClick={Follow}> 
                                            {isfollowed ? 'Following' : 'Follow'}
                                            
                                            </Button>
                                            
                                          
                                            <Button variant="contained" style={MessageButtonStyle}>MESSAGE</Button>
                                            <Button variant="contained" style={ButtonStyle} startIcon={<PersonAddAlt1Icon/>}></Button>
                                            <Button variant="contained" style={ButtonStyle} startIcon={<MoreHorizIcon/>}></Button>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{NoofPost} posts</Typography>
                                            <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{followerCount} followers</Typography>
                                                                             {/* post?.likes?.length || postDetail.likes.length */}
                                            <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}> {following} following</Typography>
                                        </div>
                                        <div style={{marginLeft:'5rem',marginTop:'1rem'}}>
                                            <h6>{CurrentUser.name}</h6>
                                            <Typography>bio</Typography>
                                        </div>
                            </Container>                                    
                        </div>
                        {/* div for avatar and other details ended */}
                        {/* highlights  */}
                        <Container style={{marginLeft:'10rem',marginTop:'5rem',overflow:'auto' ,width:'65rem'}}>
                            <Stack direction="row" spacing={8}>
                                <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                                 <Avatar
                                size="lg"
                                src="https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                sx={{ p: 0.5, border: '2px solid',borderColor:'darkgrey', width:100,height:100}}
                                />
                            </Stack>
                       

                        </Container>
                        {/* highlights container ends */}
                        {/* posts component */}
                        {/* div for button-post,reel,tagged */}
                        <div style={{display:'flex',marginLeft:'30rem',marginTop:'2rem'}} id="buttons -3">
                            <IconButton aria-label="delete" size="small"  style={{marginRight:'1rem'}}>
                            <CalendarViewMonthIcon fontSize="inherit" />
                             POSTS
                            </IconButton>
                            <IconButton aria-label="delete" size="small" >
                            <LocalOfferIcon fontSize="inherit" />
                            TAGGED
                            </IconButton>                            
                        </div>
                        {/* POST BUTTON DIV ENDS HERE */}
                        {/* ------------------- */}
                        {/* div for showing user posts */}
                        <div id="userPosts"  className={Styles.postRow_UserProfile}>
                              <Row xs={1} sm={2} md={3} className="g-2">
                                {post.map((item, idx) => (
                                    <Col key={idx} xs={12} sm={6} md={4} >
                                    <img src={item.photo} alt={item.title} style={{height:'18rem',width:'19rem'}}/>
                                    </Col>
                                ))}
                                </Row>
                        </div>
                        {/*END OF  div for showing user posts */}

                </div>
             </Col>
             {/* end of col 2 */}
        </Row>
        {/* end of row */}
        
        </div>
}
export default UserProfile