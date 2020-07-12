import React from 'react'
import { Todo } from './Todo'
import './assets/css/style.css'

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 1, todo: 'Practice React', done: false },
                { id: 2, todo: 'Read book', done: false },
                { id: 3, todo: 'Go to Sleep', done: false }
            ],
            newTodo: '', i: 3
        }
    }

    liClickedToggler = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos.map(row => (row.id === todo.id)
                    ?
                    { id: row.id, todo: row.todo, done: !row.done }
                    :
                    row)
            ]
        })
    }

    binClicked = (todo) => {
        this.setState({
            todos: [...this.state.todos.filter(item => {
                return (item.id !== todo.id)
            })]
        })
    }

    inputChangeHandler = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }

    btnChangeHandler = () => {
        let a = {
            id: this.state.i + 1,
            todo: this.state.newTodo,
            done: false
        }
        if (this.state.newTodo !== "" && this.state.newTodo !== " ") {
            this.setState({
                todos: [...this.state.todos, a],
                newTodo: '',
                i: this.state.i + 1
            })
        } else {
            alert('Enter Todo to add!')
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='post-container todos'>
                    <div id='todo-list'>
                        <h1>TODO List</h1>
                        <input type='text'
                            value={this.state.newTodo}
                            onChange={this.inputChangeHandler}
                            placeholder="Enter new Todo">
                        </input>

                        <Todo
                            todoList={this.state.todos}
                            liClicked={this.liClickedToggler}
                            binClicked={this.binClicked}
                        />

                        <button
                            type='button'
                            onClick={this.btnChangeHandler}
                        >  Add New Todo</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;