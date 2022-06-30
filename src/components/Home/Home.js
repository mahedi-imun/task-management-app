import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleAddTask = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        console.log(startDate, task);
    }
    return (
        <div className='mt-12 '>
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