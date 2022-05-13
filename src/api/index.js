
import axios from 'axios'

const url="http://localhost:5000/posts";


//get all posts
export const fetchPosts=()=>{
    return axios.get(url)        
}

//create post
export const createPost=(formData)=>{       
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }         
    return axios.post(url, formData,config)
}


//remove post
export const removePost=(id)=>{
    axios.delete(url+"/"+id)        
}


export const updatePost=(id,data)=>{
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }         
    return axios.put(url+"/"+id,data, config)
    
}

export const likePost=(id)=>{
    return axios.put(`${url}/like/${id}`)
}

