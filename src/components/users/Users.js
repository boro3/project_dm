import React from 'react'
import { connect } from 'react-redux'
import { fetchUsersRequest } from './../../actions/UserActions'
import { SingleUser } from './SingleUser'
import './assets/css/style.css'


class Users extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            singleUser: undefined
        }
    }

    clickHandler = (user) => {
        this.setState({
            singleUser: user
        })
    }

    componentDidMount() {
        this.props.getUsers()
    }

    closeButtonHandler = () => {
        this.setState({
            singleUser: undefined
        })
    }

    render() {
        return (
            <div className='container'>
                <div id='users-container'>
                    {this.props.users.length !== 0
                        ?
                        this.props.users.map(user => {
                            return (
                                <div className='single-user-card card-size' key={user.id} onClick={() => this.clickHandler(user)} >
                                    <div className="card-container">
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                                        <h4><b>{user.name}</b></h4>
                                        <p>{user.company.name}</p>
                                    </div>
                                </div>
                            )

                        })
                        :
                        <div className="loader"></div>
                    }
                </div>
                {this.state.singleUser && <SingleUser user={this.state.singleUser} closeButtonHandler={this.closeButtonHandler} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(fetchUsersRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)