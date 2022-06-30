
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
const Calender = ({date,setDate}) => {
   
    return (
        <div>
            <div>
                 <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
            </div>
        </div>
    );
};

export default Calender;