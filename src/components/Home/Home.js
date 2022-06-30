import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify'
const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const date = format(startDate, 'PP')
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
                }
            })

    }
    return (
        <div className='mt-12 '>
            <ToastContainer />
            <div className='w-[90%] lg:w-[30%] mx-auto'>

                <form className='' onSubmit={handleAddTask} >
                    <input type="text" placeholder="Add Task" name='task' className="input input-bordered input-primary w-full max-w-xs " required />
                    <DatePicker dateFormat="PP" className='input input-bordered input-primary w-full max-w-xs mt-4  "' selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                    <input className='btn mt-4 ' type="submit" value='save' />
                </form>
            </div>
        </div>
    );
};

export default Home;