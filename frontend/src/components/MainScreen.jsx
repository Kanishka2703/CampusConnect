
import { Container,Grid,Typography,item } from "@mui/material"
import React from "react"
import '../App.css'
import AllPost from "./Posts/AllPost"
import NavBar from "./NavBar"
import { Route, Routes, useLocation } from "react-router-dom"
import { Row ,Col} from "react-bootstrap"
import Stories from "./Stories"
import RightNavBar from "./RightNavBar"

const MainScreen=()=>{
  


  
    return <div >
   <Row>
        <Col md={2}  className="d-none d-md-block border" >
    
          <NavBar/>
          
        </Col>
        <Col md={6} >
          <Stories/>
          <AllPost/>
        </Col>
        <Col md={4} className="d-none d-md-block ">
         
               <RightNavBar />
          
        </Col>
      </Row>

    </div>





}
export default MainScreen