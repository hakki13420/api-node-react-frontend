import * as api from "../api"
import {CREATE,UPDATE,DELETE,FETCH_ALL, LIKE} from '../constants/Posts'

export const getPosts=()=>async (dispatch)=>{
    try {
        const posts =await api.fetchPosts()
            
        dispatch({
            type:FETCH_ALL,        
            payload:posts.data
        });        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const CreatePost=(formData)=>(dispatch)=>{
    try {        
        api.createPost(formData)
            .then(post=>{ 
                return dispatch({
                    type:CREATE,
                    payload:post.data
                });
            })

        
    } catch (error) {
        console.log(error)
    }
    
}

export const removePost=(id)=>async(dispatch)=>{
    try {
       await api.removePost(id)
            
        dispatch({
            type:DELETE,
            payload:id
        })            
        
    } catch (error) {        
        console.log(error.message)
    }
}

export const updatePost=(id,data)=>async(dispatch)=>{
    try {        
        const post =await api.updatePost(id,data)
            
        dispatch({
                type:UPDATE,
                payload:post.data
        })
            
    } catch (error) {
        console.log(error)
    }
}

export const likePost=(id)=>(dispatch)=>{
    try {
        api.likePost(id)
        .then(post=>{            
            dispatch({
                type:LIKE,
                payload:post.data
            })
        })            
    } catch (error) {
        console.log(error)
    }    
}