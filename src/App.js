import './App.css';
import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {useState, createContext} from "react";

export const AppContext = createContext();

function App() {
  return (
      <AppContext.Provider value={{}}>
        <div className="App">
          <HashRouter>
            <Routes>
              <Route path="/" element={} />
            </Routes>
          </HashRouter>
        </div>
      </AppContext.Provider>
  );
}

export default App;
