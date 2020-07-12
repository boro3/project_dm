import React from 'react'
import Users from './users/Users'
import Posts from './posts/Posts'
import { Route, Switch, withRouter } from 'react-router-dom'
import SinglePost from './posts/SinglePost'
import Navigation from './navigation/Navigation'
import TodoList from './Todo/TodoList'
import Home from './home/Home'
import Footer from './navigation/Footer'

class App extends React.Component {
  render() {
    return (
      <div id='App'>
        <Navigation />
        <Switch>
        <Route path='/users' component={Users} />
          <Route exact path='/posts/:postId' component={withRouter(SinglePost)} />
          <Route path='/posts' component={Posts} />         
          <Route path='/todo' component={TodoList} />
          <Route exact path='/' component={Home} /> 
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
