import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify'
import { useQuery } from 'react-query';
import TodoList from './TodoList';
import EditModal from './EditModal';
const Home = () => {
    const [id, setId] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    const date = format(startDate, 'PP')
    const { data: todoLists, isLoading, refetch } = useQuery('task', () => fetch('http://localhost:5000/task').then(res => res.json()));
    const handleAddTask = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        const url = `http://localhost:5000/task`;
        fetch(url,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ task, date })
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('successfully added ')
                    event.target.task.value = '';
                    refetch()
                }
            })

    }
    const handleCompleatTask=(taskId)=>{          
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
        <div className='mt-12 '>
            <ToastContainer />
            <div className=' shadow border rounded w-[900px] mx-auto p-12'>
                <div className='lg:flex justify-center '>
                    <form className='lg:w-[450px] flex-1' onSubmit={handleAddTask} >
                        <input type="text" placeholder="Add Task" name='task' className="input input-bordered input-primary w-full max-w-xs " required />
                        <DatePicker dateFormat="PP" className='input input-bordered input-primary w-full max-w-xs mt-4' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                        <input className='btn mt-4 btn-primary ' type="submit" value='save' />
                    </form>
                    <div className=' flex-1 lg:w-[450px]'>
                        <h4 className='card-title mb-5'>To-Do lists</h4>
                        {todoLists.map(todoList => <TodoList
                            key={todoList._id}
                            task={todoList}
                            handleCompleatTask={handleCompleatTask}
                            refetch={refetch}
                        >
                        </TodoList>)}

                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default Home;