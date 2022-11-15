
import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import { useState } from "react";


export default function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <div className="App">
       <button onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profil"}
      </button>
      {show && <Profile />}
      
    </div>
  );
}