import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Container } from '@mui/material';
import { useState ,useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

const Instapost=({postDetail})=> {
// use state for comment
const[comments,setMycomments]=useState('')

const navigate=useNavigate()
// function for opening userprofile
const openUserProfile=()=>{
  // sending  id to UserProfile Component to open profile of a particular user
  const Uid=postDetail.postedBy._id
  navigate('/userProfile',{state:{id:Uid}})
}
const[islike,setIslike]=useState(Boolean)
// usestate to update details after liking or unliking the post
const [post,setPost]=useState(null)
// function to like or dislike the post
const likePost=()=>{
  if(islike===false)
  {
  fetch('http://localhost:3001/like',{
    method:'put',
  headers:{
    "Content-Type":"application/json",
  "Authorization":"Bearer "+localStorage.getItem("jwt")
},

  body:JSON.stringify({
      postId:postDetail._id
      })

}) .then(res=>res.json())
.then(data=>{

  setPost(data)
//  setting this data into use state
 
})

setIslike(true)


  }
  else{
  
    fetch('http://localhost:3001/unlike',{
      method:'put',
    headers:{
      "Content-Type":"application/json",
    "Authorization":"Bearer "+localStorage.getItem("jwt")
  },
  
    body:JSON.stringify({
        postId:postDetail._id
        })
  
  }) .then(res=>res.json())
  .then(data=>{
   
    setPost(data)
  })
  setIslike(false)
  
  }
}
// function to Comment on Post
const comment=()=>{
 fetch('http://localhost:3001/comment',{
    method:'put',
  headers:{
    "Content-Type":"application/json",
  "Authorization":"Bearer "+localStorage.getItem("jwt")
},

  body:JSON.stringify({
     text:comments,
     postId:postDetail._id
    // postId:'64b976ae4b96ba2869a0b1f4'

      })

}) .then(res=>res.json())
.then(data=>{
console.log(data);
  

 
})

}






// style of like button
const likeStyle={

  color: islike ? 'red' : 'lightgrey',
  
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}

 
  return <Container style={{height:'30rem',width:'30rem', marginTop:'50px' }}>
       
 
  <Card 
      variant="outlined"
      sx={{
        minWidth: 300,
        
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
            },
          }}
        >
          <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography onClick={openUserProfile} fontSize={20} fontWeight="lg">{postDetail.postedBy.name}</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img src={postDetail.photo} alt="" loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          {/* like button */}
          <IconButton variant="plain" color="neutral" size="sm"  style={likeStyle} onClick={likePost}>
            <FavoriteIcon />
          </IconButton>
          {/* comment button */}
          <IconButton variant="plain" color="neutral" size="sm" >
            <ModeCommentOutlined />
          </IconButton>

          <IconButton variant="plain" color="neutral" size="sm">
            <SendOutlined />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: '50%',
                width: `max(${6 - index}px, 3px)`,
                height: `max(${6 - index}px, 3px)`,
                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton variant="plain" color="neutral" size="sm">
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
          textColor="text.primary"
        >
          {
           post?.likes?.length || postDetail.likes.length    //if the postis liked it will update the value else it will show from the props postdetails
          } Likes
        </Link>
        
        <Typography fontSize="sm">
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            textColor="text.primary"
          >
           {postDetail.postedBy.name}
          </Link>{' '}
          {postDetail.body}
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="sm"
          startDecorator="…"
          sx={{ color: 'text.tertiary' }}
        >
          more
        </Link>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          sx={{ color: 'text.tertiary', my: 0.5 }}
        >
          2 DAYS AGO
        </Link>
      </CardContent>
      <CardOverflow sx={{ pb: 'var(--Card-padding)', display: 'flex' }}>
    
        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
          <Face />
        
        </IconButton>
            {/* comment input box */}
        <Input  variant="plain"   size="sm"  placeholder="Add a comment…" sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
        onChange={(e)=>setMycomments(e.target.value)}
         value={comments}
        />
        {/* link to post the comment  */}
        <Link  underline="none" role="button" onClick={comment}>
          Post
        </Link>
      </CardOverflow>
    </Card>
    </Container>
  
}
export default Instapost