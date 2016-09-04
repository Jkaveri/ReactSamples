import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../AppConstants';


function create(text) {
  AppDispatcher.dispatch({
    type: ActionTypes.TODO_CREATE,
    text: text
  })
}

function toggle(id) {

}

function remove(id) {

}

const todoActions = {
  create,
  toggle,
  remove
};

export default todoActions;
