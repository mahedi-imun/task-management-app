import React from 'react';

const TodoCard = ({ task, handleAddTask, setId }) => {
    return (

       <>
        {!task.compleat &&  <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <span><input onChange={() => handleAddTask(task._id)} type="checkbox" class="checkbox" /></span>
                <span className="card-title">{task.task}</span>
                <p> date: {task.date}</p>
                <div className=''> <label onClick={() => setId(task._id)} htmlFor="my-modal" className="btn btn-sm w-12  float-right btn-primary">edit</label></div>
            </div>
        </div>}
       </>
    );
};

export default TodoCard;