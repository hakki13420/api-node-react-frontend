import React from 'react'
import { useSelector } from 'react-redux';
import Post from './post/Post'
import CircularProgress from '@mui/material/CircularProgress'
import { Container, Grid } from '@mui/material';
//import './styles'

const Posts = ({setSelectedIndice}) => {  
   
  const posts = useSelector(state=>state.posts)

  return (    
      <Grid container alignItems="stretch" spacing={3}>
        {
          !posts.length?
            <Container sx={{textAlign:"center", marginBottom:"20px"}} >
              <CircularProgress />
            </Container>
          :
              posts.map((post)=>(
                <Grid item xs={12} sm={6} key={post._id} >
                  <Post 
                      post={post} 
                      setSelectedIndice={setSelectedIndice}                     
                  />
                </Grid>
              ))                   
        }
      </Grid>
    
  )
}

export default Posts