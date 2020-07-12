import {combineReducers} from 'redux'
import UsersReducer from './UserReducer'
import PostsReducer from './PostsReducer'

export default combineReducers({
    UsersReducer,PostsReducer
})