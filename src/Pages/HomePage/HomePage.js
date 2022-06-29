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

    useEffect(()=> {
        const getData = async() => {
            const API = "https://api.themoviedb.org/3/trending/all/day?api_key=cd84bfb51d317868c15507e4f531548f";
            const response = await axios.get(API);
            console.log(response.data.results);
        }
        getData();
    });

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

            <Row handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} />

        </div>
    );
}

export default HomePage;