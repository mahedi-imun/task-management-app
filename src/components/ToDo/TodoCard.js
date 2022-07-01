import React from 'react';

const TodoCard = ({ task }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <span className="card-title">{task.task}</span>
                <p> date: {task.date}</p>
            </div>
        
       </div>
    );
};

export default TodoCard;