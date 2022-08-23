import React from "react";
import "./App.css";
import Home from "./Home";
import Login from "./LoginForm";
function App() {
  return (
    <>
    <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Home />
        </div>
        <p>Hello World!</p>
        <Login />
      </div>
      </>
  );
}

export default App;
