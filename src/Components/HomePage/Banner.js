import React from 'react';
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Banner(props) {
    return (
        <header className="banner">
            <div className="banner-content">
                <h1>First Kill</h1>
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
                <p>Falling in love is tricky for teens Juliette and Calliope: One's a vampire, the other's a vampire hunter — and both are ready to make their first kil...</p>
            </div>
            <div className="banner-panel"></div>
            <div className="banner-bottomShadow"></div>
        </header>
    );
}

export default Banner;