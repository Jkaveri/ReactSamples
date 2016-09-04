import React, {PropTypes} from 'react';

let pluralize = (count, str) => count > 1 ? str + 's' : str;

const Footer = (props) => {
    var activeTodoWord = pluralize(props.count, 'item');
    var clearButton = null;

    if (props.completedCount > 0) {
        clearButton = (
            <button
                className="clear-completed"
                onClick={props.onClearCompleted}>
                Clear completed
            </button>
        );
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{props.count}</strong> {activeTodoWord} left
            </span>
            {clearButton}
        </footer>
    );
}

Footer.propTypes = {
    onClearCompleted: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default Footer;