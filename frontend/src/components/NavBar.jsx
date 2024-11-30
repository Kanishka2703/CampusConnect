import { Container,Drawer,Typography } from "@mui/material"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useState } from "react";
import SearchPage from "./SearchPage";
import CreatePost from "./Posts/CreatePost";
import React from "react";
import Styles from './components.module.css'
const NavBar=({Userid})=>{
// /usestate for createpost modal
const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  
// usestate for Search-bar
const [isOpen, setIsOpen] = useState(false);

// function for changing the state of Drawer
const toggleDrawer = () => {
  setIsOpen(!isOpen);
};
const drawerStyle = {
    width: '250px',
    height: '100vh',
    
    position: 'fixed',
    
    top: 0,
    left: isOpen ? 150: '-250px',
    transition: 'left 0.3s eaaase-in-out',
  };


    
    return <div className="NavBar" >

        <Typography variant="h4" style={{marginBottom:'2rem',marginLeft:'1rem',fontWeight:'bold',fontSize:'25px'}}>CampusConnect</Typography>
       
        {/* HOME */}
        <Container className={Styles.Navbar_Container}>
        <HomeIcon fontSize="large" />
        <Link to='/MainScreen' className="link" >Home
        </Link>
        
        </Container>       
      
{/* Search icon */}
 
        {/* Message */}
        <br></br>
        <Container className={Styles.Navbar_Container}>
        <LocalPostOfficeOutlinedIcon fontSize="large"/>
        <Link to="/chats" className="link" >Message
        </Link>
        </Container>
        
        <br></br>
       
        <Container className={Styles.Navbar_Container}>
        <LocalPostOfficeOutlinedIcon fontSize="large"/>
        <Link to="/impContacts" className="link" >Imp contacts
        </Link>
        </Container>
        <br></br>
        {/* CreatePost */}
        <Container className={Styles.Navbar_Container}>
        <AddBoxOutlinedIcon fontSize="large"/>
        <Link   className="link" onClick={handleModalOpen} >CreatePost
        </Link>

        </Container>
        <br></br>
        <Container className={Styles.Navbar_Container}>
        <LocalPostOfficeOutlinedIcon fontSize="large"/>
        <Link to="/Notices" className="link" >Notices
        </Link>
        </Container>
         {isModalOpen && <CreatePost handleClose={handleModalClose} />}
        <br></br>
        {/* profile */}
        <Container className={Styles.Navbar_Container}>
        <Person2OutlinedIcon fontSize="large"/>
        <Link to='/MyProfile' className="link" >Profile
        </Link>
        </Container>
        
        
        
    </div>
}
export default NavBar

