import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import Form from './components/forms/Form'
import Posts from './components/posts/Posts'
import memories from './images/memories.jpg'
import "./styles.css"
import { getPosts } from './actions/posts';

const App = () => {  
  const [selectedIndice, setSelectedIndice]=useState(0)
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  
  return (    
    <Container maxWidth="lg">
      <AppBar className="appBar" position="static" color="inherit">
        
          <Typography className="heading" variant="h2" align="center">
            Memories
          </Typography>
          <img className="image" src={memories} alt={memories} height="60"/>
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid container 
                justifyContent="center" 
                alignItems="stretch" 
                spacing={3}
                sx={{
                  flexDirection:{
                    xs:"column-reverse",
                    sm:"row"
                  }
                }}
          >
            <Grid item xs={12} sm={7}>
              <Posts setSelectedIndice={setSelectedIndice} />
            </Grid>  
            <Grid item xs={12} sm={4}>
              <Form selectedIndice={selectedIndice} setSelectedIndice={setSelectedIndice} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App