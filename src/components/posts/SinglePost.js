import React from 'react'
import { fetchSinglePostRequest } from './../../actions/PostsAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './assets/css/style.css'



class SinglePost extends React.Component {


    componentDidMount() {
        this.props.getSinglePost(this.props.match.params.postId)
    }

    render() {
        return (
            <div className='container' >
                {
                    this.props.post !== undefined
                        ?
                        <div className='post-container'>
                            <div className='article'>
                                <h3>Title: {this.props.post.title}</h3>

                                <ul id='post-icons'>
                                    <li><span className="icon icon-users"><i className="fa fa-user"></i></span><span>Post by: {this.props.post.id}</span></li>
                                </ul>

                                <p>{this.props.post.body}</p>

                                <div className='post-links'>
                                    {
                                        parseInt(this.props.match.params.postId) - 1 <= 0
                                            ?
                                            <Link to={'#'} onClick={(event) => event.preventDefault()} className='disabled-link'>
                                               &lt; Previous
                                    </Link>
                                            :
                                            <Link to={`/posts/${parseInt(this.props.match.params.postId) - 1}`} >&lt; Previous</Link>
                                    }
                                    <Link to={`/posts`}>Posts</Link>
                                    {
                                        parseInt(this.props.match.params.postId) + 1 > 100
                                            ?
                                            <Link to={'#'} onClick={(event) => event.preventDefault()} className='disabled-link'>
                                                Next &gt;
                                    </Link>
                                            :
                                            <Link to={`/posts/${parseInt(this.props.match.params.postId) + 1}`}>Next &gt;</Link>
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className="loader"></div>
                }
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: state.PostsReducer.singlePost,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSinglePost: (post) => {
            dispatch(fetchSinglePostRequest(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)