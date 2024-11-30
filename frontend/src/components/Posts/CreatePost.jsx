import { useState } from "react"
import {Card, Col, Container, Form, Row } from "react-bootstrap"
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:600,
  borderRadius:'10px',
  bgcolor: 'background.paper',
   boxShadow: 24,
  p: 4,
};

const CreatePost = ({ handleClose }) => {
  const navigate=useNavigate()
  const [tittle,setTittle]=useState('')
  const [body,setBody]=useState('')
  const [pic,setPic]=useState('')
  



// function for fetching values
  const onCreatepostSubmitHandler=e=>{
    e.preventDefault()
   
    fetch('http://localhost:3001/createPost',{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
      body:JSON.stringify({
          tittle,
          body,
          pic
      })
    } )
    .then(res=>res.json())
    .then(data=>
      {
        console.log(data);
        if(data.msg==='Post Created Successfully')
        {
         console.log("if condition");
         navigate('/MainScreen');
         console.log('navigated');
         handleClose()

        }
       
      })
  }




  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Container style={{ margin: '20px' }} >
         <Row>
          <Col>
          <center>
         <h2>Create Post</h2>
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  
                  <Form onSubmit={onCreatepostSubmitHandler}>
                  
                    <Form.Group className="mb-3" controlId="formBasicTittle">
                      <Form.Label>Post Tiitle</Form.Label>
                      <Form.Control type="text" placeholder="Enter Tittle" value={tittle} onChange={e=>setTittle(e.target.value)}/>
       
                    </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicBody">
                      <Form.Label>Post Body</Form.Label>
                      <Form.Control type="text" placeholder="Body" value={body} onChange={e=>setBody(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicBody">
                      <Form.Label>Pic</Form.Label>
                      <Form.Control type="text" placeholder="pic" value={pic} onChange={e=>setPic(e.target.value)}/>
                    </Form.Group>
                    
                     <Button variant="primary" type="submit" >
                     CreatePost
                     </Button>
                  </Form>
                </Card.Body>
              </Card>
            </center>
             </Col>
            </Row>
         </Container> 
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePost;
