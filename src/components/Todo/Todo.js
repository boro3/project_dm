import React from 'react'

export class Todo extends React.Component {

    clickHandler = (event) => {
        event.stopPropagation();
    }


    makeTodo = (item, i) => {
        return (
            <li className={item.done ? 'donetodo' : null}
                onClick={() => { this.props.liClicked(item) }} key={i}>
                <span onClick={(event) => { this.clickHandler(event); this.props.binClicked(item); }}>
                    <i className="fa fa-trash"></i>
                </span>
                {item.todo}
                {item.done && <i className="fa fa-check"></i>}
            </li>
        )
    }

    render() {
        return (
                    <ul>
                        {this.props.todoList.map((item, i) => {
                            return (
                                this.makeTodo(item, i)
                            )
                        })}
                    </ul>
        )
    }
}

