import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../AppConstants';
import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';
let todos = {};

const emptyTodo = {
  title: '',
  completed: false,
  id: null
};
function newGuid() {
  const s4 = () => Math.floor((1 + Math.random()) * 100000).
    toString(16)
    .substr(1);
  return [
    s4(), s4(), '-',
    s4(), '-',
    s4(), '-',
    s4(), '-',
    s4(), s4(), s4()
  ].join('')
}

const create = (title) => {
  const id = newGuid();
  todos[id] = Object.assign({}, emptyTodo, {
    id,
    title
  });
  return todos[id];
}

const update = (todo) => {
  if (todo.id && todos[todo.id]) {
    todos[todo.id] = Object.assign({}, emptyTodo, todo);
    return true;
  }
  return false;
}

const remove = (todo) => {
  if (todo.id && todos[todo.id]) {
    delete todos[todo.id];
    return true;
  }
  return false;
}

class TodoStore extends EventEmitter {
  getAll() {
    return todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const todoStore = new TodoStore();


const handlers = {
  [ActionTypes.TODO_CREATE]: (action) => {
    let text = action.text.trim();
    if (text.length > 0) {
      create(text);
      todoStore.emitChange();
    }
  },

}

AppDispatcher.register(function dispatch(action) {
  if (handlers[action.type]) {
    handlers[action.type](action);
  }
})


export default todoStore;
