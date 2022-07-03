import './App.css';
import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {useState, createContext} from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import MovieInfoModal from "./Components/MovieInfoModal/MovieInfoModal";
import axios from "axios";

export const AppContext = createContext();

function App() {

    const [infoModal, setInfoModal] = useState([]);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const getInfoModalData = async(mediaID, mediaType) => {
        if(mediaType === "tv") {
            const API = "https://api.themoviedb.org/3/tv/" + mediaID + "?api_key=cd84bfb51d317868c15507e4f531548f&language=en-US"
            const response = await axios.get(API);
            console.log(response.data);
            setInfoModal(response.data);
            setShowInfoModal(true);

        } else if(mediaType === "movie") {
            const API = "https://api.themoviedb.org/3/movie/" + mediaID + "?api_key=cd84bfb51d317868c15507e4f531548f&language=en-US";
            const response = await axios.get(API);
            console.log(response.data);
            setInfoModal(response.data);
            setShowInfoModal(true);
        }
    }

    const hideInfoModal = () => {
        setShowInfoModal(false);
    }

    return (
      <AppContext.Provider value={{getInfoModalData, hideInfoModal}}>
        <div className="App">
            <MovieInfoModal infoModal={infoModal} showInfoModal={showInfoModal} />
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
