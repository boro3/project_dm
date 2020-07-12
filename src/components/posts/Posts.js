import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsRequest, } from './../../actions/PostsAction'
import { Link } from 'react-router-dom'
import './assets/css/style.css' 


class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts()
    }



    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className='post-container'>
                {
                    this.props.posts.length !== 0
                        ?
                        this.props.posts.map(post => {
                            return (
                                <div className='single-post' key={post.id}>
                                    <h4>Title: {post.title}</h4>
                                    <Link to={`/posts/${post.id}`}>Read More</Link>
                                </div>
                            )
                        })
                        :
                        <div className="loader"></div>
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.PostsReducer.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(fetchPostsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)