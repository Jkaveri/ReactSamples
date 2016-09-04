import React, {Component} from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import Todo from '../models/Todo';

const ENTER_KEY = 13;

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: Todo.all(),
            newTodo: ''
        }
        this.onToggle = this.onToggle.bind(this);
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onDestroy = this.onDestroy.bind(this);
    }

    onToggle(todo) {
        Todo.toggle(todo);
        this.setState({ todos: Todo.all() });
    }

    onDestroy(todo) {
        Todo.destroy(todo);
        this.setState({ todos: Todo.all() });
    }

    toggleAll() { }
    handleChange(event) {
        this.setState({ newTodo: event.target.value });
    }
    handleNewTodoKeyDown(event) {

        let val;
        if (event.keyCode !== ENTER_KEY) {
            return;
        }

        event.preventDefault();

        val = this.state.newTodo.trim();

        if (val) {
            Todo.push({ title: val, completed: false });
            this.setState({ newTodo: '', todos: Todo.all() });
        }
    }
    render() {
        const {todos} = this.state;
        const todoItems = todos.map((todo, index) =>
            <TodoItem
                key={index}
                onToggle={this.onToggle}
                onDestroy={this.onDestroy}
                todo={todo}/>
        );

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={this.state.newTodo}
                        onKeyDown={this.handleNewTodoKeyDown}
                        onChange={this.handleChange}
                        autoFocus={true}
                        />
                </header>
                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        onChange={this.toggleAll}
                        />
                    <ul className="todo-list">
                        {todoItems}
                    </ul>
                </section>
            </div>
        )
    }
}

export default TodoList;