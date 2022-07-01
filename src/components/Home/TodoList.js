import React, { useState } from 'react';
import EditModal from './EditModal';

const TodoList = ({ task, handleCompleatTask, refetch }) => {
    const [id, setId] = useState(null)
    return (
        <>
            {!task.compleat && <div className=" flex gap-2 w-[100%] ">
                <span><input onChange={() => handleCompleatTask(task._id)} type="checkbox" className="checkbox" /></span>
                <label htmlFor="my-modal" onClick={() => setId(task._id)} className=" font-semibold cursor-pointer hover:text-primary">{task.task} </label>
                {id &&
                    <EditModal
                        key={id}
                        id={id}
                        setId={setId}
                        refetch={refetch}
                    >

                    </EditModal>}
            </div>}
        </>
    );
};

export default TodoList;