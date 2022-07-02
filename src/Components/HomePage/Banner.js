import React from 'react';
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Banner({movieBanner}) {
    return (
        <header style={{backgroundImage: "url(https://image.tmdb.org/t/p/original" + movieBanner?.backdrop_path + ")"}} className="banner">
            <div className="banner-content">
                <h1>{movieBanner.name}</h1>
                <div className="banner-buttons">
                    <button id="playButton">
                        <PlayArrowIcon id="playIcon" />
                        <span>Play</span>
                    </button>
                    <button id="moreInfoButton">
                        <InfoIcon id="infoIcon" />
                        <span>More info</span>
                    </button>
                </div>
                <p>{movieBanner?.overview}</p>
            </div>
            <div className="banner-panel"></div>
            <div className="banner-bottomShadow"></div>
        </header>
    );
}

export default Banner;