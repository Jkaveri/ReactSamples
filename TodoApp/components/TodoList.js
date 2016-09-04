import React, {Component} from 'react';
import TodoItem from './TodoItem';
var todos = [
    {
        title: 'Buy a car'
    }, 
    {
        title: 'Watch movie'
    }
];

class TodoList extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            todos
        }
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                { todos.map((todo)=> (<TodoItem todo={todo} />)) }
            </div>
        )
    }
}

export default TodoList;