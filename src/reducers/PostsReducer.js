import {FETCH_POSTS_FAIL,FETCH_POSTS_SUCCEES,FETCH_SINGLE_POST_SUCCEES} from './../constants/PostsConstants'

const initialState = {
    posts:[],
    error:'',
    singlePost:undefined
}

const PostsReducer = (state=initialState,action) =>{
    switch(action.type){

        case FETCH_POSTS_SUCCEES:
            return{
                ...state,
                posts:action.payload
            }

        case FETCH_POSTS_FAIL:
            return{
                ...state,
                error:action.payload
            }        
        
        case FETCH_SINGLE_POST_SUCCEES:
            return{
                ...state,
                singlePost:action.payload
            }

        default: return state;
    }

}
export default PostsReducer;