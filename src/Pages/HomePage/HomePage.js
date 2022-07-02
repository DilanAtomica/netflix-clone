import React, {useEffect, useState} from 'react';
import "./HomePage.css";
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "../../Components/HomePage/Banner";
import Row from "../../Components/HomePage/Row";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CancelIcon from '@mui/icons-material/Cancel';

function HomePage(props) {

    const [movieBanner, setMovieBanner] = useState([]);

    const [trendingList, setTrendingList] = useState([]);
    const [actionList, setActionList] = useState([]);
    const [animationList, setAnimationList] = useState([]);
    const [comedyList, setComedyList] = useState([]);
    const [dramaList, setDramaList] = useState([]);
    const [horrorList, setHorrorList] = useState([]);
    const [thrillerList, setThrillerList] = useState([]);
    const [romanceList, setRomanceList] = useState([]);


    useEffect(()=> {
        const getTrendingData = async() => {
            const API = "https://api.themoviedb.org/3/trending/all/day?api_key=cd84bfb51d317868c15507e4f531548f";
            const response = await axios.get(API);
            console.log(response.data.results);
            setTrendingList(response.data.results);
            setMovieBanner(response.data.results[Math.floor(Math.random() * 20)]);
        }

        const getActionData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=28";
            const response = await axios.get(API);
            setActionList(response.data.results);
        }

        const getAnimationData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=16";
            const response = await axios.get(API);
            setAnimationList(response.data.results);
        }

        const getComedyData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=35";
            const response = await axios.get(API);
            setComedyList(response.data.results);
        }

        const getDramaData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=18";
            const response = await axios.get(API);
            setDramaList(response.data.results);
        }

        const getHorrorData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=27";
            const response = await axios.get(API);
            setHorrorList(response.data.results);
        }

        const getThrillerData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=53";
            const response = await axios.get(API);
            setThrillerList(response.data.results);
        }

        const getRomanceData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=10749";
            const response = await axios.get(API);
            setRomanceList(response.data.results);
        }

        getRomanceData();
        getThrillerData();
        getHorrorData();
        getDramaData();
        getAnimationData();
        getComedyData();
        getTrendingData();
        getActionData();
    }, []);

    const handleMouseEnter = (e) => {
        e.currentTarget.classList.add("hoveredMovie");
        e.currentTarget.lastElementChild.classList.add("hoveredMovie")
        e.currentTarget.firstElementChild.nextElementSibling.classList.add("showMovieContent");
        e.currentTarget.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = "1";
        let movieList = Array.from(e.currentTarget.parentElement.children);
        let index;

        movieList.forEach(movie => {
            if(movie.classList.contains("hoveredMovie")) index = movieList.indexOf(movie);
        });

        for(let i = index; i <= movieList.length - 1; i++) {
            movieList[i].classList.add("moveRight");
            movieList[i].lastElementChild.style.opacity = "0.5";
        }

        for(let i = index; i >= 0; i--) {
            movieList[i].classList.add("moveLeft");
            movieList[i].lastElementChild.style.opacity = "0.5";
        }

    }

    const handleMouseLeave = (e) => {
        e.currentTarget.classList.remove("hoveredMovie")
        e.currentTarget.lastElementChild.classList.remove("hoveredMovie")
        e.currentTarget.firstElementChild.nextElementSibling.classList.remove("showMovieContent");
        e.currentTarget.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.opacity = "0";
        let movieList = Array.from(e.currentTarget.parentElement.children);

        for(let i = 0; i <= movieList.length - 1; i++) {
            movieList[i].classList.remove("moveRight");
            movieList[i].classList.remove("moveLeft");
            movieList[i].lastElementChild.style.opacity = "0";
        }

    }

    return (
        <div className="homePage">

           <Banner movieBanner={movieBanner} />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={trendingList} imageType="landscape" category="Trending Now" />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={trendingList} imageType="poster" category="Netflix Originals" />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={actionList} imageType="landscape" category="Action" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={animationList} imageType="landscape" category="Animation" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={comedyList} imageType="landscape" category="Comedy" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={dramaList} imageType="landscape" category="Drama" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={horrorList} imageType="landscape" category="Horror" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={thrillerList} imageType="landscape" category="Thriller" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={romanceList} imageType="landscape" category="Romance" />

            <div className="movieInfoModal">
                <div className="movieInfoContainer">
                    <div className="topContent" style={{backgroundImage: "url(https://image.tmdb.org/t/p/original//kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg)"}}>
                        <div className="topContentHeader">
                            <div className="actionsCircle">
                                <CancelIcon id="exitButton" />
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
                        <h1>The Shawshank Redemption</h1>
                        <p>Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.</p>
                        <h2>Info on <span>Dilwale Dulhania Le Jayenge</span></h2>
                        <ul>
                            <li>Genres: <span>Comedy, Drama, Romance</span></li>
                            <li>First air date: <span>Comedy, Drama, Romance</span></li>
                            <li>Average vote: <span>Comedy, Drama, Romance</span></li>
                            <li>Original language: <span>Comedy, Drama, Romance</span></li>
                            <li>Age classification: <span>Comedy, Drama, Romance</span></li>
                        </ul>
                    </div>
                </div>
            </div>








        </div>
    );
}

export default HomePage;