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
          <h3>{timerYears < 10 ? "0" + timerYears : timerYears}</h3>
          <h3>:</h3>
          <h3>{timerDays < 10 ? "0" + timerDays : timerDays}</h3>
          <h3>:</h3>
          <h3>{timerHours < 10 ? "0" + timerHours : timerHours}</h3>
          <h3>:</h3>
          <h3>{timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}</h3>
          <h3>:</h3>
          <h3>{timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</h3>
        </div>
      </div>
      <div className="aboutGlobalWarmingBox">
        <h1>Global Warming Is Real</h1>
        <div className="aboutGlobalWarming">
          <img src="https://agfundernews.com/wp-content/uploads/2019/08/Brazilian-Amazon-Burning-516327500_1258x839-768x512.jpeg" alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat eos aliquid illo quis. Earum corrupti quia quos nihil quasi itaque optio sapiente. Nesciunt voluptatum quis at? Obcaecati, maxime neque?</p>
        </div>
        <div className="aboutGlobalWarming">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia maiores eaque sed incidunt illo voluptatibus, non delectus magni unde, veniam harum similique. Corrupti ab exercitationem pariatur, sed alias eos voluptatem?</p>
          <img src="https://static01.nyt.com/images/2020/01/31/world/10australialetter139-1/merlin_166536642_24b1e96c-327a-4b9c-9979-f87ed8a0b502-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default App
