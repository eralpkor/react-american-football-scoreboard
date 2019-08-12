//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // MVP goals
  const [count, setCount] = useState({
    home: 32,
    away: 30
  });

  function setHomeTouchDown() {
    setCount({
      home: count.home + 7,
      away: count.away
    });
  };

  function setAwayTouchDown() {
    setCount({
      home: count.home,
      away: count.away + 7
    });
  };

  function setHomeFieldGoal() {
    setCount({
      home: count.home + 3,
      away: count.away
    });
  }

  function setAwayFieldGosl() {
    setCount({
      home: count.home,
      away: count.away + 3
    });
  }

  // Stretch goal
  function handler(teamName, amount) {
    const {home, away} = count;
    if (teamName === 'home') {
      let newAmount = home + amount;
      setCount({
        home: newAmount, 
        away: away
      });
    } else {
      let newAmount = away + amount;
      setCount({
        away: newAmount, 
        home: home
      });
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{count.home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{count.away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => handler('home', 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => handler('home', 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => handler('away', 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => handler('away', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
