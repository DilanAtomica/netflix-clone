import './App.css';
import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {useState, createContext} from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";

export const AppContext = createContext();

function App() {
  return (
      <AppContext.Provider value={{}}>
        <div className="App">
          <HashRouter>
            <Routes>
              <Route path="/" element={<> <NavBar /> <HomePage /> </>} />
            </Routes>
          </HashRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
