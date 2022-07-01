import React, { useState } from 'react';
import { useQuery } from 'react-query'
import EditModal from './EditModal';
import { ToastContainer, toast } from 'react-toastify'
import TodoCard from './TodoCard';
const ToDo = () => {
    const [id, setId] = useState(null)
    const { data: tasks, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));
    const handleAddTask=(taskId)=>{          
            fetch(`http://localhost:5000/task/${taskId}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
            }).then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount >0){
                    refetch()
                    toast.success('successfully compleat')

                }
               
            })
        

     }

    if (isLoading) return <div>Loading...</div>

    return (
     <div>
           <ToastContainer />
        <div className=' grid md:grid-cols-3 gap-5 justify-center px-6 mt-12'>
         
            {
                tasks.map(task => <TodoCard
                key={task._id}
                task={task}
                handleAddTask={handleAddTask}
                setId={setId}
                ></TodoCard> )
            }
            
        </div>
        <div>
        {id &&
            <EditModal
                key={id}
                id={id}
                setId={setId}
                refetch={refetch}>
            </EditModal>}
    </div>
     </div>
    );
};

export default ToDo;