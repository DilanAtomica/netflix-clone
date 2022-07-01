import React, {useEffect, useState} from 'react';
import "./HomePage.css";
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "../../Components/HomePage/Banner";
import Row from "../../Components/HomePage/Row";

function HomePage(props) {

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
        }

        const getActionData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=28";
            const response = await axios.get(API);
            console.log(response.data.results);
            setActionList(response.data.results);
        }

        const getAnimationData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=16";
            const response = await axios.get(API);
            console.log(response.data.results);
            setAnimationList(response.data.results);
        }

        const getComedyData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=35";
            const response = await axios.get(API);
            console.log(response.data.results);
            setComedyList(response.data.results);
        }

        const getDramaData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=18";
            const response = await axios.get(API);
            console.log(response.data.results);
            setDramaList(response.data.results);
        }

        const getHorrorData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=27";
            const response = await axios.get(API);
            console.log(response.data.results);
            setHorrorList(response.data.results);
        }

        const getThrillerData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=53";
            const response = await axios.get(API);
            console.log(response.data.results);
            setThrillerList(response.data.results);
        }

        const getRomanceData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=10749";
            const response = await axios.get(API);
            console.log(response.data.results);
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

           <Banner />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={trendingList} imageType="landscape" category="Trending Now" />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={trendingList} imageType="poster" category="Netflix Originals" />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={actionList} imageType="landscape" category="Action" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={animationList} imageType="landscape" category="Animation" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={comedyList} imageType="landscape" category="Comedy" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={dramaList} imageType="landscape" category="Drama" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={horrorList} imageType="landscape" category="Horror" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={thrillerList} imageType="landscape" category="Thriller" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={romanceList} imageType="landscape" category="Romance" />








        </div>
    );
}

export default HomePage;