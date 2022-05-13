import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CreatePost, updatePost} from "../../actions/posts"

import Paper from "@mui/material/Paper"
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"

//import './styles'

const Form = ({selectedIndice, setSelectedIndice}) => {
  const [post, setPost]=React.useState({
    creator:"",
    title:"",
    message:"",
    tags:"",
    selectedFile:""
  });
  const dispatch = useDispatch()
  const selectedPost=useSelector(state=>selectedIndice?state.posts.find(postItem=>postItem._id===selectedIndice):null)

  useEffect(()=>{
    if(selectedPost) setPost(selectedPost)
  },[selectedPost])
  
  const reset=()=>{
    setPost({    
      creator:"",
      title:"",
      message:"",
      tags:"",
      selectedFile:""
    })
    setSelectedIndice(0)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const inputFile= document.querySelector('#selectedFile')
      var formData = new FormData()
        formData.append('selectedFile', inputFile.files[0])
        formData.append('title', post.title)
        formData.append('message', post.message)
        formData.append('tags', post.tags)
        formData.append('creator', post.creator)
      if(!selectedIndice){      
        setSelectedIndice(null)
        dispatch(CreatePost(formData))     
        reset();   
      }else{
        dispatch(updatePost(selectedIndice,formData))
        reset();
      }
    }

  
  return (
    <>
      <Paper sx={{padding:"20px"}}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Typography mb={2} variant="h5">{selectedIndice?"Edit":"Add"} Memomry</Typography>
          <TextField
            sx={{
              marginBottom:"10px"
            }}
            name="creator"
            label="creator"
            fullWidth
            value={post.creator}
            onChange={(e)=>setPost({...post,creator:e.target.value})}            
          />
          <TextField
            sx={{
              marginBottom:"10px"
            }}
            name="message"
            label="message"
            multiline
            maxRows={4}
            fullWidth
            value={post.message}
            onChange={(e)=>setPost({...post,message:e.target.value})}            
          />
          <TextField
            sx={{
              marginBottom:"10px"
            }}
            name="title"
            label="title"
            fullWidth
            value={post.title}
            onChange={(e)=>setPost({...post,title:e.target.value})}            
          />
          <TextField
            sx={{
              marginBottom:"10px"
            }}
            name="tags"
            label="tags"
            fullWidth
            value={post.tags}
            onChange={(e)=>setPost({...post,tags:e.target.value})}            
          />

          <Button
            variant="contained"
            component="label"
          >
            Upload File
          
          <input
              type="file"        
              name="selectedFile"
              id="selectedFile"
              onChange={(e)=>
                      {
                       return setPost({...post,selectedFile:e.target.files[0].name})
                        }
                      }
              hidden
            />
          </Button>
          <span>{post.selectedFile}</span>
            <hr />
          <Button fullWidth sx={{marginBottom:"10px"}} type="submit" color="primary" variant='contained'>Submit</Button>
          <Button  fullWidth color="secondary" variant='contained' onClick={reset}>Reset</Button>

        </form>
      </Paper>
    </>
  )
}

export default Form