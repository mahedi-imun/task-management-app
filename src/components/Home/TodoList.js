import React from 'react';

const TodoList = ({todoList}) => {
    return (
        <div>
            <h3>{todoList.task}</h3>
        </div>
    );
};

export default TodoList;