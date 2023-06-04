import React from 'react';
import './App.css';
// @ts-ignore
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/recipes'} element={<Recipes />}/>
    </Routes>
  );
}

export default App;
