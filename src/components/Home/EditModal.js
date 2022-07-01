import React, { useEffect, useState } from 'react';
import 'react-edit-text/dist/index.css';
const EditModal = ({ id, setId, refetch }) => {
    const [task, setTask] = useState('');
    useEffect(() => {
        fetch(`https://taskmanagementtask.herokuapp.com/task/${id}`)
            .then(res => res.json())
            .then(data => setTask(data.task))
    }, [id]);
    const handleSubmit = () => {
        fetch(`https://taskmanagementtask.herokuapp.com/task/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setId(null)
                    refetch()
                }
            }
            )
    }
    return (

        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2 mb-5">✕</label>
                    <div className=''>
                        <input onChange={(e) => setTask(e.target.value)} defaultValue={task} className='input input-bordered input-primary w-full max-w-xs block' name='updatedName  ' />
                        <button onClick={() => handleSubmit()} className='btn mt-5 btn-primary btn-sm'> Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;