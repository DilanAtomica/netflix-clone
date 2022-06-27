import React, {useEffect} from 'react';
import "./HomePage.css";
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function HomePage(props) {

    useEffect(()=> {
        const getData = async() => {
            const API = "https://api.themoviedb.org/3/trending/all/day?api_key=cd84bfb51d317868c15507e4f531548f";
            const response = await axios.get(API);
            console.log(response.data.results);
        }
        getData();
    })

    return (
        <div className="homePage">
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
        </div>
    );
}

export default HomePage;