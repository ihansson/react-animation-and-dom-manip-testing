import React from "react";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import { PageA } from "./components/PageA";
import { PageB } from "./components/PageB";
import { PageC } from "./components/PageC";
import { PageD } from "./components/PageD";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">A</Link>
        <br />
        <Link to="/page-b">B</Link>
        <br />
        <Link to="/page-c">C</Link>
        <br />
        <Link to="/page-d">D</Link>
      </header>
      <Switch>
        <Route exact path="/page-b" children={<PageB />} />
        <Route exact path="/page-c" children={<PageC />} />
        <Route exact path="/page-d" children={<PageD />} />
        <Route exact path="/" children={<PageA />} />
      </Switch>
    </div>
  );
}

export default App;
