import { Container } from "@mui/material"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const Stories=()=>{
return <div style={{marginTop:'4rem',marginLeft:'8rem',overflow:'auto'  }}>


    <Stack direction="row" spacing={2}>
    
           <Avatar
            size="lg"
            src="https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
           <Avatar
            size="lg"
            src="https://www.shutterstock.com/image-photo/adult-female-avatar-image-on-260nw-2419909229.jpg"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
           <Avatar
            size="lg"
            src="https://www.d-id.com/wp-content/uploads/2023/12/D-ID-portrait_character.png"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
           <Avatar
            size="lg"
            src="https://img.freepik.com/premium-photo/ultra-realistic-human-avatar-characters-female-model_1166271-62.jpg"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
          <Avatar
            size="lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
             <Avatar
            size="lg"
            src="https://www.shutterstock.com/image-photo/adult-male-avatar-image-on-260nw-2419149455.jpg"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
             <Avatar
            size="lg"
            src="https://wp.inews.co.uk/wp-content/uploads/2024/04/SEI_162920132_1688566182.493-bg-transparent-avatar.png?w=640&h=360&crop=1"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'red',width:56,height:56}}
          />
    </Stack>
  


</div>
}
export default Stories