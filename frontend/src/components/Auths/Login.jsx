// login id is saved in localstorage 
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Card, Container } from "@mui/material";



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login=()=> {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const UserContext=React.createContext()

const navigate=useNavigate()
const onLoginSubmitHandler=e=>{
  e.preventDefault()
  fetch('http://localhost:3001/login',{
    method:"post",
    headers:{
      "Content-Type":"application/json"
  },
    body:JSON.stringify({
        email,
        password
    })
  } )
  .then(res=>res.json())
  .then(data=>
    {
      
    if(data?.error){
    alert('Invalid Login Details')
    }else{
      
    // saving token and id of user in localstorage
      localStorage.setItem("jwt",data.token) 
      localStorage.setItem("Userid",data.uid+"")
      
      
      navigate('/MainScreen')
      
 
    }            

    })
}

 

  return <Container component="main"   >
    <ThemeProvider theme={defaultTheme}>
      <center>
    
      
       
        <Card style={{marginTop:'100px',width:'45rem' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           
          <Avatar src="https://cdn4.iconfinder.com/data/icons/nightlife-business-glyph/100/business_glyph-26-512.png" sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
            
          </Avatar>
          <Typography variant="h4" style={{fontStyle:'italic'}}>CampusConnect Login</Typography>
          <Box component="form" onSubmit={onLoginSubmitHandler} noValidate sx={{ mt: 1 }}>
            <TextField
           
              margin="normal"
              required
              fullWidth             
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e=>setEmail(e.target.value)}
              style={{fontSize:'200px'}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/'>Don't have an account? Sign Up</Link>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Card>
        </center>  
     
    </ThemeProvider>

    </Container>
  
}
export default Login