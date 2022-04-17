import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const profile = {
    person: {
      fullName: "Jradi Mohamed",
      bio: "Engineer",
      imgSrc: "./med.png",
      profession: "Fullstack JS Student"
    },
    shows: true
  };
  const [state, setState] = useState(profile)
  const modify = () => setState({ ...state, shows: !state.shows })
 
  return (

    <div className="App">
      <button onClick={modify}> {state.shows ? 'Hide profile' : 'Show profile'} </button>
      {state.shows ?
        <div className = "info">
          <img src={state.person.imgSrc} alt="cat" />
          <h1> {state.person.fullName} </h1>
          <h2> {state.person.bio} </h2>
          <h2> {state.person.profession} </h2>
        </div> : <h2> click to show the person's profile </h2>}
    </div>
  );

}

export default App;
