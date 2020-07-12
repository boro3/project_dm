import {FETCH_USERS_FAIL,FETCH_USERS_SUCCEES} from './../constants/UserConstants'

const initialState = {
    users:[],
    error:''
}

const UsersReducer = (state=initialState,action) =>{
    switch(action.type){

        case FETCH_USERS_SUCCEES:
            return{
                ...state,
                users:action.payload
            }

        case FETCH_USERS_FAIL:
            return{
                ...state,
                error:action.payload
            }        


        default: return state;
    }

}
export default UsersReducer;