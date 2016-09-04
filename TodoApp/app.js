import "./node_modules/todomvc-common/base.css";
import "./node_modules/todomvc-app-css/index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

window.addEventListener("load", ()=>{

 ReactDOM.render(<TodoList />, document.getElementById("main"));
});