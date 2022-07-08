import React, {useEffect, useState} from 'react';
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import {useContext} from "react";
import {AppContext} from "../../App";

function Banner({movieBanner}) {
    const {getInfoModalData, userWidth} = useContext(AppContext);

    const [shortDesc, setShortDesc] = useState("");

    useEffect(() => {
        shortenDescription();
        console.log("hey")
    }, [movieBanner.overview]);

    const shortenDescription = () => {
        if(movieBanner.overview === undefined) return;
        let reducedName = movieBanner.overview.slice(0, 135);
        if( reducedName.length >= 130) reducedName = reducedName + "...";
        setShortDesc(reducedName);
    }


    const handleClick = (e) => {
        const mediaID = e.currentTarget.getAttribute("data-id");
        const mediaType = e.currentTarget.getAttribute("data-mediatype");
        console.log(e.currentTarget.getAttribute("data-mediatype"));

        getInfoModalData(mediaID, mediaType);
    }


    return (
        <header style={{backgroundImage: userWidth > 400
                ? "url(https://image.tmdb.org/t/p/original" + movieBanner?.backdrop_path + ")"
                : "url(https://image.tmdb.org/t/p/original" + movieBanner?.poster_path + ")"}} className="banner">
            <div className="banner-content">
                <h1>{movieBanner.name}</h1>
                <div className="banner-buttons" data-id={movieBanner.id} data-mediatype={movieBanner?.media_type} onClick={handleClick}>
                    <button id="playButton">
                        <PlayArrowIcon id="playIcon" />
                        <span>Play</span>
                    </button>
                    <button id="moreInfoButton" >
                        <InfoIcon id="infoIcon" />
                        <span>More info</span>
                    </button>
                </div>
                <p>{shortDesc}</p>
            </div>
            <div className="banner-panel"></div>
            <div className="banner-bottomShadow"></div>
        </header>
    );
}

export default Banner;