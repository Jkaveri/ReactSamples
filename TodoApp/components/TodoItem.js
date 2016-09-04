import React, {PropTypes} from "react";

const TodoItem = (props) => {

    return (
       <span>{props.todo.title}</span>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;