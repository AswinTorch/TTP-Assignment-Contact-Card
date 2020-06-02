import React from "react";
import "./App.css";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <h1>Contact Cards</h1>
      <div className="row">
        <Contact
          name="Clark"
          email="ckent@gmail.com"
          mobile="3478162075"
          work="9173387440"
        />
        <Contact name="Aang" email="theavatar@gmail.com" mobile="3873922928" />
        <Contact
          name="Zuko"
          email="lookingforhonor@gmail.com"
          mobile="7187391947"
          work="1427492938"
        />
      </div>
    </div>
  );
}

export default App;
