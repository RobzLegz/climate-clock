import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [timerDays,setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  return (
    <div className="app">
      <div className="homeHeadingBox">
        <img className="globalWarmingImage" src="https://images.newscientist.com/wp-content/uploads/2019/07/03111113/what-is-global-warming-ct36ke_web.jpg" alt=""/>
        <div className="countdownTimer">
          
        </div>
      </div>
    </div>
  )
}

export default App
