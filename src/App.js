import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HomeImage from "./resources/athome.svg";
import BicicleImage from "./resources/bicicle.svg";
import PlantTreesImage from "./resources/planttrees.svg";

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
      <section className="homeHeadingBox">
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
      </section>
      <section className="aboutGlobalWarmingBox">
        <h1>What are the Effects of Global Warming?</h1>
        <div className="aboutGlobalWarming">
          <img src="https://agfundernews.com/wp-content/uploads/2019/08/Brazilian-Amazon-Burning-516327500_1258x839-768x512.jpeg" alt=""/>
          <p>Glaciers are melting, sea levels are rising, cloud forests are dying, and wildlife is scrambling to keep pace. It has become clear that humans have caused most of the past century's warming by releasing heat-trapping gases as we power our modern lives. Called greenhouse gases, their levels are higher now than at any time in the last 800,000 years.</p>
        </div>
        <div className="aboutGlobalWarming">
          <p>Climate change encompasses not only rising average temperatures but also extreme weather events, shifting wildlife populations and habitats, rising seas, and a range of other impacts. All of those changes are emerging as humans continue to add heat-trapping greenhouse gases to the atmosphere, changing the rhythms of climate that all living things have come to rely on.</p>
          <img src="https://s01.sgp1.digitaloceanspaces.com/large/891755-xsxsainscs-1531826434.jpg" alt=""/>
        </div>
        <div className="aboutGlobalWarming">
        <img src="https://static01.nyt.com/images/2020/01/31/world/10australialetter139-1/merlin_166536642_24b1e96c-327a-4b9c-9979-f87ed8a0b502-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt=""/>
          <p>Scientists have high confidence that global temperatures will continue to rise for decades to come, largely due to greenhouse gases produced by human activities. Because human-induced warming is superimposed on a naturally varying climate, the temperature rise has not been, and will not be, uniform or smooth across the country or over time.</p>         
        </div>
      </section>
      <section className="stoppingClimateChangeBox">
        <h1>How to Stop Global Warming?</h1>
        <div className="stopChangeRow">
          <div className="howToStopContainer">
            <img src={HomeImage} alt="home"/>
            <p>When you go to bed or on vacation turn your thermostat down by three degrees</p>
          </div>
          <div className="howToStopContainer">
            <img src={BicicleImage} alt="bicicle"/>
            <p>If you can use bicicles instead of cars to transport</p>
          </div>
          <div className="howToStopContainer">
            <img src={PlantTreesImage} alt="trees"/>
            <p>Plant some trees</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
