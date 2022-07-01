import React from 'react';
import { useQuery } from 'react-query';
import { FcCheckmark } from 'react-icons/fc';
const CompleatTask = () => {
    const { data: tasks, isLoading, refetch } = useQuery('task-compleat', () => fetch('https://taskmanagementtask.herokuapp.com/task').then(res => res.json()));
    if (isLoading) return <div>Loading...</div>
    return (
        <div className='flex justify-center mt-12 h-[70vh]'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h3 className='card-title'>Completed Task</h3>
                    {tasks.map(task => <div className='w-[100%]'>
                        {task.compleat && <span className=' line-through text-lg inline px-2  '
                        > <FcCheckmark className=' inline mr-3 text-primary' /> {task.task}</span>}
                    </div>)}
                </div>
            </div>
        </div>
    )

};

export default CompleatTask;