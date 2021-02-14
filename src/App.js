import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [timerYears, setTimerYears] = useState("00");
  const [timerDays,setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let leftInterval = useRef();

  const countdownTimer = () => {
    const countdownDate = new Date("Jan 01, 2028 14:00:20").getTime();
    leftInterval = setInterval(() => {
      const todaysTime = new Date().getTime();
      const timeDistance = countdownDate - todaysTime;
      const fullYears = Math.floor(timeDistance / (1000 * 60 * 60 * 24 * 365));
      const fullDays = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
      const fullHours = Math.floor((timeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const fullMinutes = Math.floor((timeDistance % (1000 * 60 * 60) / (1000 * 60)));
      const fullSeconds = Math.floor((timeDistance % (1000 * 60 * 60 * 24) / 1000));

      

      if(timeDistance < 0){
        alert("Too late!");
        clearInterval(leftInterval.current);
      }else{
        setTimerYears(fullYears);
        setTimerDays(fullDays);
        setTimerHours(fullHours);
        setTimerMinutes(fullMinutes);
        setTimerSeconds(fullSeconds);
      }
    }, 1000)
  }

  useEffect(() => {
    countdownTimer();
    return () => {
      clearInterval(leftInterval.current);
    };
  }, []);

  return (
    <div className="app">
      <div className="homeHeadingBox">
        <img className="globalWarmingImage" src="https://images.newscientist.com/wp-content/uploads/2019/07/03111113/what-is-global-warming-ct36ke_web.jpg" alt=""/>
        <div className="countdownTimer">
          <h1>{timerYears}</h1>
          <h1>{timerDays}</h1>
          <h1>{timerHours}</h1>
          <h1>{timerMinutes}</h1>
          <h1>{timerSeconds}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
