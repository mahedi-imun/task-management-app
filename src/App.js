import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './components/Calender/Calender';
import CompleatTask from './components/CompleateTask/CompleatTask';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ToDo from './components/ToDo/ToDo';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  const [date,setDate]=useState(new Date())
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compleatTask" element={<CompleatTask />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/calender" element={<Calender date={date} setDate={setDate}></Calender>} />
      </Routes>
    </div>
  );
}

export default App;
