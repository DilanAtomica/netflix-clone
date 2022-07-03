import React from 'react';
import "./MovieInfoModal.css";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import axios from "axios";
import {useContext} from "react";
import {AppContext} from "../../App";

function MovieInfoModal({infoModal, showInfoModal}) {

    const {hideInfoModal} = useContext(AppContext);

    const handleClick = ()=> {
        hideInfoModal();
    }


    return (
        <div className="movieInfoModal" style={{display: !showInfoModal && "none"}}>
            <div className="movieInfoContainer">
                <div className="topContent" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original" + infoModal?.backdrop_path}}>
                    <div className="topContentHeader">
                        <div className="actionsCircle">
                            <CancelIcon id="exitButton" onClick={handleClick}/>
                        </div>
                    </div>
                    <div className="topContentActions">
                        <button id="playButton">
                            <PlayArrowIcon id="playIcon" />
                            <span>Play</span>
                        </button>
                        <div className="movieContent-actions">
                            <div className="actionsCircle"><AddCircleOutlineIcon id="actionsAddIcon" /></div>
                        </div>
                    </div>
                    <div className="movieInfoContainer-bottomShadow"></div>
                </div>
                <div className="bottomContent">
                    <h1>{infoModal?.title}</h1>
                    <p>{infoModal?.overview}</p>
                    <h2>Info on <span>{infoModal?.title}</span></h2>
                    <ul>
                        <li>Genres: <span>{infoModal.genres?.map(genre => (genre.name + " "))}</span></li>
                        <li>Release date: <span>{infoModal?.first_air_date || infoModal?.release_date}</span></li>
                        <li>Average vote: <span>{infoModal?.vote_average}</span></li>
                        <li>Original language: <span>{infoModal?.original_language}</span></li>
                        <li>Age classification: <span>{infoModal?.adult === true ? "For Adults" : "Suitable for kids"}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MovieInfoModal;