import React from 'react'
import {useDispatch} from 'react-redux'

import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete'
import moment from "moment"

import { likePost, removePost } from '../../../actions/posts'
//import './styles'

const Post = ({post, setSelectedIndice}) => {
  const dispatch=useDispatch()
  
  const remove=(id)=>{
    setSelectedIndice(id)
    if (window.confirm('are you shure?')){
      dispatch(removePost(id));
      setSelectedIndice(0)
    }
  }

  const edit=(id)=>{
    setSelectedIndice(id)    
    //dispatch(updatePost(id))
  }

  const likePostHandel=(id)=>{    
   //setSelectedIndice(id)    
    dispatch(likePost(id));  
    //setSelectedIndice(0)      
  }

  const img=`http://localhost:5000/${post.selectedFile}`
  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" 
                      onClick={()=>edit(post._id)}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}//"Shrimp and Chorizo Paella"
        subheader={moment(post.createdAt).fromNow()}//"September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.creator}
        </Typography>
        <Typography variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      minHeight:"60px",
                      maxHeight:"60px"          
                    }}
        >
          {post.message}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        
        <IconButton aria-label="add to favorites"
                    onClick={()=>likePostHandel(post._id)}
        >
        <ThumbUpIcon />      
        <span style={{fontSize:"12px"}}>&nbsp; LIKE {post.likeCount}</span>
        </IconButton>

        
        <Box sx={{display:"flex",justifyContent:"flex-end",flex:"1"}}>
          <IconButton aria-label="remove" onClick={()=>remove(post._id)}>
            <DeleteIcon />
          </IconButton>        
        </Box>

      </CardActions>      

    </Card>
  )
}

export default Post