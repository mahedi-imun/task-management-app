
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { BsListTask } from 'react-icons/bs'
import { useEffect, useState } from 'react';
const Calender = ({ date, setDate }) => {
    const [tasks, setTasks] = useState([])
    console.log(tasks.length);
    const formattedDate = format(date, 'PP')
    useEffect(() => {
        fetch(`https://taskmanagementtask.herokuapp.com/task-date/${formattedDate}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(data => {
                setTasks(data);
            })

    }, [formattedDate])
    return (
        <div className=' md:flex px-12 mt-12'>

            <div className='flex-1 flex justify-center '>
                <DayPicker className='block'
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div className=' flex-1'>
                {tasks.length > 0 ? <h3 className='card-title mb-5'> Available Task By Date </h3> : <h3 className='card-title mb-5'>Not Available Task By Date </h3>}
                {tasks.map(task => {
                    return <div className='border p-2'>
                        <p> <BsListTask className=' inline mr-3' /> {task.task}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Calender;