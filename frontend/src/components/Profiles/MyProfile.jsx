import { Container, IconButton, Stack, Typography, darkScrollbar } from "@mui/material";
import Styles from '../components.module.css'
import React, { useEffect,useState } from "react";
import { Row,Col } from "react-bootstrap";
import { Grid } from '@mui/material';
import { Avatar } from "@mui/joy";
import NavBar from "../NavBar";
import Button from "@mui/material/Button"
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';//for posts
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined'; //for reel button
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; //for tagged button
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import Setting from "../Setting";


import { UserIdContext } from "../MainScreen";
import { useContext } from "react";

const MyProfile=()=>{
const [LoggedinUser,setLoggedinUser]=useState([])
const [myPost,setmyPost]=useState([])
const id=localStorage.getItem("Userid")

const followersLength =     LoggedinUser.followers ? LoggedinUser.followers.length : 0;
const following =     LoggedinUser.following ? LoggedinUser.following.length : 0;
// const following = CurrentUser.following ? CurrentUser.following.length : 0;

const navigate=useNavigate()
const NoofPosts=myPost.length



// useState for open setting component
const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };



  // fetching details using the api -user/:id
  
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




  

// fetching my posts

useEffect(()=>{
    fetch('http://localhost:3001/mypost',{
        method:'get',
      headers:{
        "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
  }) .then(res=>res.json())
    .then(data=>setmyPost(data))
  },[])

// Button styles
const FollowButtonStyle={
  height:'30px',
  width:'100px',
  marginTop:'2rem',
  marginLeft:'1rem',
  borderRadius:'10px'

};
const EditButtonStyle={
  height:'30px',
  width:'150px',
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

return <div>
     <Row >
            {/* COL1 FOR NAVBAR */}
            <Col md={2} xs={12} className="border " >
            <NavBar/>
            </Col >
            {/* COl 2 for Myprofile Page */}
            <Col md={10}  >
                <div id="maindiv_Myprofile">
                           {/* Avatar and other button div  */}
                        <div  style={{display:'flex',marginLeft:'13rem'  ,marginBottom:'1rem',marginTop:'3rem'}}>
                              <Avatar
                              size="lg"
                              src={LoggedinUser.pic}

                              sx={{ p: 0, border: '2px solid',borderColor:'darkgrey', width:150,height:150}}
                              />

                              {/* as the above div display is flex so we need Container in which we will pplaceall then components  */}
                              <Container >
                                          {/*  divsinside this div which contains my components */}
                                          <div style={{display:'flex'}}>
                                              <Typography variant="h5" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{LoggedinUser.name}</Typography>
                                            
                                              <Button variant="contained" style={EditButtonStyle}>Edit Profile</Button>
                                              <Button variant="contained" onClick={handleModalOpen} style={ButtonStyle} startIcon={<SettingsIcon/>}></Button>
                                              {/* if the state is true will call the component and pass the close function in props */}
                                              {isModalOpen && <Setting handleClose={handleModalClose} />}
                                          </div>
                                          <div style={{display:'flex'}}>
                                              <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{NoofPosts} posts</Typography>
                                              <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}> {followersLength} followers</Typography>
                                              <Typography variant="h6" style={{marginLeft:'5rem ',marginTop:'2rem'}}>{following} following</Typography>
                                          </div>
                                        
                              </Container>                                    
                        </div>
                           {/* Avatar and other buttons div ends */}

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

                        {/* div for showing user posts */}
                          <div id="userPosts"  className={Styles.postRow_UserProfile}>
                                            <Row xs={1} sm={2} md={3} className="g-2">
                                                    {myPost.map((item, idx) => (
                                                        <Col key={idx} xs={12} sm={6} md={4} >
                                                        <img src={item.photo} alt={item.title} style={{height:'18rem',width:'19rem'}}/>
                                                        </Col>
                                                    ))}
                                                    </Row>
                          </div>
                        {/*END OF  div for showing user posts */}
                </div>
            </Col>
            {/* Col 2 endshere */}
      </Row>
</div>
}
export default MyProfile