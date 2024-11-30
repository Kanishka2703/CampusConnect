import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Col, Row } from 'react-bootstrap';
import Styles from './components.module.css'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';


const Setting=({handleClose})=>{


const navigate=useNavigate()
// function for logging out 
const LogoutUser=()=>{
navigate('/')
localStorage.removeItem('jwt')
localStorage.removeItem('Userid')
}




// style of box of modal
const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:480,
        height:400,
        borderRadius:5,
        bgcolor: 'background.paper',
         boxShadow: 24,
        // p: 4,
      };

 return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
  
       
      <div className={Styles.setting_row}>Apps and Websites</div>
      <div className={Styles.setting_row}>QR Code</div>
      <div className={Styles.setting_row}>Notifications</div>
      <div className={Styles.setting_row}>Settings and privacy</div>
      <div className={Styles.setting_row}>Supervision</div>
      <div className={Styles.setting_row} onClick={LogoutUser}>Logout</div>
     
      <div className={Styles.setting_row} onClick={handleClose}>Cancel</div>
      
      
  
        </Box>
      </Modal>
    </div>
  );   
}
export default Setting