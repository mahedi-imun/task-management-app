import React, { useState } from 'react';
import { useQuery } from 'react-query'
import EditModal from '../Home/EditModal';
import { ToastContainer, toast } from 'react-toastify'
import TodoCard from './TodoCard';
const ToDo = () => {
    const [id, setId] = useState(null)
    const { data: tasks, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));
    if (isLoading) return <div>Loading...</div>

    return (
     <div>
           <ToastContainer />
        <div className=' grid md:grid-cols-3 gap-5 justify-center px-6 mt-12'>
         
            {
                tasks.map(task => <TodoCard
                key={task._id}
                task={task}
                ></TodoCard> )
            }
            
        </div>
        <div>
    </div>
     </div>
    );
};

export default ToDo;