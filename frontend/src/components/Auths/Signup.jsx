import { Alert,AlertTitle} from "@mui/material"
import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Signup=()=> {
  const navigate= useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const onFormSubmitHandler=e=>{
    e.preventDefault()
    fetch('http://localhost:3001/signup',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
    },
      body:JSON.stringify({name,email,password})
  
    } )
    .then(res=>res.json())
    .then(data=>{
      if(data.msg==='user added successfully')
     {
      navigate('/login')
     }
     else{
     
     }
    
   
    }
     
      )
  }

  return <Container component="main" maxWidth="xs">
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
          <Typography variant="h4" style={{fontStyle:'italic'}}>CampusConnect Signup </Typography> 
          <Box component="form"  onSubmit={onFormSubmitHandler} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="firstName"
                  label=" Name"
                  autoFocus
                  value={name} onChange={e=>setName(e.target.value)}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email} onChange={e=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password} onChange={e=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to='/login'>Already Have an account?SignIn</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
 
}
export default Signup