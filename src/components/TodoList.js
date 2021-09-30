import React from 'react';
import TodoListItem from './TodoListItem.js';
import './TodoList.scss';

const TodoList = ({ todos, onRemove }) => {
    return (
        <div className="ToDoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default TodoList;