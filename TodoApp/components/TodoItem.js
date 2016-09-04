import React, {PropTypes, Component} from "react";

class TodoItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }

    render() {
        let {todo} = this.props;
        return (
            <li className={todo.completed ? "completed" : '' }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={this.props.onToggle.bind(null, todo)}
                        />
                    <label>
                        {todo.title}
                    </label>
                    <button className="destroy" onClick={this.props.onDestroy.bind(null, todo)} />
                </div>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onDestroy: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TodoItem;