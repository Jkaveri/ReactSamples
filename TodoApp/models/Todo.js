const todos = [];

const Todo = {
    push(todo) {
        todos.push(todo);
    },

    pop(todo) {
        return todos.pop();
    },

    all() {
        return todos;
    },

    get(index) {
        return todos[index];
    },

    remove(index) {
        if (index > -1) 
            todos.splice(index, 1);
    },

    count() {
        return todos.length;
    },

    countCompleted() {
        let count = 0;
        todos.forEach((todo) => {
            if (todo.completed === true) {
                count++;
            }
        });
        return count;
    },
    countActives() {
        let count = 0;
        todos.forEach((todo) => {
            if (todo.completed !== true) {
                count++;
            }
        });
        return count;
    },
    find(todo) {
        let index = -1;
        if (todo) {
            index = todos.indexOf(todo);
        }
        return index;
    },
    toggle(todo){
        let index = this.find(todo);
        if (index > -1) {
           todos[index].completed = !todos[index].completed;
        }
    },
    destroy(todo) {
        let index = this.find(todo);
        this.remove(index);
    }
}

export default Todo;
