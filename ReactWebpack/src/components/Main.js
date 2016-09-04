require('normalize.css/normalize.css');
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
require('styles/App.css');

import React, {Component} from 'react';
import TodoList from './TodoList';

class AppComponent extends Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
