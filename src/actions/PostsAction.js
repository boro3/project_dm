import axios from 'axios';
import {FETCH_POSTS_SUCCEES,FETCH_POSTS_FAIL,FETCH_SINGLE_POST_SUCCEES} from './../constants/PostsConstants'

export const fetchPostsRequest = () =>{
    return dispatch =>{
        axios({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET'
        })
        .then(res=>{dispatch(fetchPostsSuccees(res.data))})
        .catch(err=>{dispatch(fetchPostsFail(err))})
    }
}

export const fetchSinglePostRequest = (post) =>{
    return dispatch =>{
        axios({
            url:`https://jsonplaceholder.typicode.com/posts/${post}`,
            method:'GET'
        })
        .then(res=>{dispatch(fetchSinglePostSuccees(res.data))})
        .catch(err=>{dispatch(fetchPostsFail(err))})
    }
}

export const fetchPostsSuccees = (posts) =>{
    return{
        type:FETCH_POSTS_SUCCEES,
        payload:posts
    }
}

export const fetchSinglePostSuccees = (post) =>{
    return{
        type:FETCH_SINGLE_POST_SUCCEES,
        payload:post
    }
}

export const fetchPostsFail = (error) =>{
    return{
        type:FETCH_POSTS_FAIL,
        payload:error
    }
}