import React, {Component} from 'react';
import TodoItem from './TodoItem';
import todoStore from '../stores/todoStore';
import todoActions from '../actions/todoActions'
import _ from 'lodash';

const ENTER_KEY = 13;

function getState() {
  return {
    newTodo: '',
    todos: todoStore.getAll()
  }
}

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = getState();
    this.onToggle = this.onToggle.bind(this);
    this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onDestroy = this.onDestroy.bind(this);
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onToggle(todo) {
    if (todo)
      todoActions.toggle(todo.id);
  }

  onDestroy(todo) {
    if (todo)
      todoActions.remove(todo.id);
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
      todoActions.create(val);
    }
  }
  onStoreChange() {
    this.setState(getState());
  }
  componentWillMount() {
    todoStore.addChangeListener(this.onStoreChange);
  }
  render() {
    const {todos} = this.state;
    const todoItems = _.transform(todos, (items, todo, key) => {
      items.push(<TodoItem
        key={key}
        onToggle={this.onToggle}
        onDestroy={this.onDestroy}
        todo={todo}/>);
      return items;
    }, []);

    return (
      <div className="todo-list">
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
