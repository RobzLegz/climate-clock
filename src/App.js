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
    const countdownDate = new Date("Jan 01, 2028 14:00:00").getTime();
    leftInterval = setInterval(() => {
      const todaysTime = new Date().getTime();
      const timeDistance = countdownDate - todaysTime;
      const fullYears = Math.floor(timeDistance / (1000 * 60 * 60 * 24 * 365));
      const fullDays = Math.floor(timeDistance / (1000 * 60 * 60 * 24) / fullYears - 97);
      const fullHours = Math.floor((timeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const fullMinutes = Math.floor((timeDistance % (1000 * 60 * 60) / (1000 * 60)));
      const fullSeconds = Math.floor((timeDistance % (1000 * 60) / 1000));
      

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
        <h1>Global Warming</h1>
        <h2>It's Time To Take Action!</h2>
        <div className="countdownTimer">
          <h3>{timerYears < 10 ? "0" + timerYears : timerYears}:</h3>
          <h3>{timerDays < 10 ? "0" + timerDays : timerDays}:</h3>
          <h3>{timerHours < 10 ? "0" + timerHours : timerHours}:</h3>
          <h3>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}:</h3>
          <h3>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</h3>
        </div>
      </div>
      <div className="aboutGlobalWarmingBox">
        
      </div>
    </div>
  )
}

export default App
