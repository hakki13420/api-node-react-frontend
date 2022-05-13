import {CREATE,UPDATE,DELETE,FETCH_ALL, LIKE} from "../constants/Posts"

export const reducer=(state=[], action)=>{
    switch(action.type){
        case FETCH_ALL:{
            return [...action.payload];
        }
        case CREATE:{
            console.log('the state in reducer after create', state)
            console.log('payload in reducer after create', action.payload)

            return [...state,action.payload];
        }
        case DELETE:{            
            return state.filter(post=>post._id!==action.payload)            
        }
        case UPDATE:
        case LIKE:{
             return state.map(post=>post._id===action.payload._id?action.payload:post)
        }        
        default: return state
    }
}