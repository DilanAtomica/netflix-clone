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

    const [movieBanner, setMovieBanner] = useState([]);

    const [trendingList, setTrendingList] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [actionList, setActionList] = useState([]);
    const [comedyList, setComedyList] = useState([]);
    const [dramaList, setDramaList] = useState([]);
    const [horrorList, setHorrorList] = useState([]);
    const [thrillerList, setThrillerList] = useState([]);
    const [romanceList, setRomanceList] = useState([]);


    useEffect(()=> {

        const getMostPopularMovies = async() => {
            const API = "https://api.themoviedb.org/3/movie/popular?api_key=cd84bfb51d317868c15507e4f531548f";
            const response = await axios.get(API);
            const popularMovies = response.data.results;
            setPopularMovies(popularMovies);
            console.log(popularMovies);

            setMovieBanner(response.data.results[Math.floor(Math.random() * 20)]);

            let fakeTrendingMovies = [];

            for(let i = popularMovies.length - 1; i >= 0; i--) {
                fakeTrendingMovies.push(popularMovies[i]);
            }

            setTrendingList(fakeTrendingMovies);
        }

        const getActionData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=28";
            const response = await axios.get(API);
            const actionMovies = response.data.results;
            setActionList(actionMovies);

            let fakeThrillerMovies = [];

            for(let i = actionMovies.length - 1; i >= 0; i--) {
                fakeThrillerMovies.push(actionMovies[i]);
            }

            setThrillerList(fakeThrillerMovies);
        }

        const getComedyData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=35";
            const response = await axios.get(API);
            setComedyList(response.data.results);
        }

        const getHorrorData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=27";
            const response = await axios.get(API);
            setHorrorList(response.data.results);
        }

        const getRomanceData = async() => {
            const API = "https://api.themoviedb.org/3/discover/movie?api_key=cd84bfb51d317868c15507e4f531548f&with_genres=10749";
            const response = await axios.get(API);
            const dramaMovies = response.data.results;
            setRomanceList(dramaMovies);

            let fakeDramaMovies = [];

            for(let i = dramaMovies.length - 1; i >= 0; i--) {
                fakeDramaMovies.push(dramaMovies[i]);
            }

            setDramaList(fakeDramaMovies);
        }

        getMostPopularMovies();
        getRomanceData();
        getHorrorData();
        getComedyData();
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
        <main className="homePage">

           <Banner movieBanner={movieBanner}  />

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={trendingList} imageType="landscape" category="Trending Now" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={popularMovies} imageType="poster" category="Netflix Originals" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={actionList} imageType="landscape" category="Action" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={comedyList} imageType="landscape" category="Comedy" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={dramaList} imageType="landscape" category="Drama" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={horrorList} imageType="landscape" category="Horror" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={thrillerList} imageType="landscape" category="Thriller" />
            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} movieList={romanceList} imageType="landscape" category="Romance" />

        </main>
    );
}

export default HomePage;