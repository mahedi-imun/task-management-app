import React from 'react';
import { BsListTask } from 'react-icons/bs'
const TodoCard = ({ task }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <span> <BsListTask className='inline ' /> {task.task}</span>
                <p className=' text-primary'> date: {task.date}</p>
            </div>
        </div>
    );
};

export default TodoCard;