import axios from 'axios'
import {FETCH_USERS_FAIL,FETCH_USERS_SUCCEES} from './../constants/UserConstants'

export const fetchUsersRequest = () => {
    return dispatch =>{
        axios({
            url:'https://jsonplaceholder.typicode.com/users',
            method:'GET'
        })
        .then(res=>{dispatch(fetchUsersSuccees(res.data))})
        .catch(err=>{dispatch(fetchUsersFail(err))})
    }
}

export const fetchUsersSuccees = (users) =>{
    return{
        type:FETCH_USERS_SUCCEES,
        payload:users
    }
}

export const fetchUsersFail = (error) =>{
    return{
        type:FETCH_USERS_FAIL,
        payload:error
    }
}