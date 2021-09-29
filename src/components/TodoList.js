import React from 'react';
import TodoListItem from './TodoListItem.js';
import './TodoList.scss';

const TodoList = ({ todos }) => {
    return (
        <div className="ToDoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;