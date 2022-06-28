import React, {useEffect, useState} from 'react';
import "./HomePage.css";
import axios from 'axios';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        let movieList = Array.from(e.currentTarget.parentElement.children);
        let index;

        console.log(movieList[0].lastElementChild);

        movieList.forEach(movie => {
            if(movie.classList.contains("hoveredMovie")) index = movieList.indexOf(movie);
        });

        for(let i = index; i <= movieList.length - 1; i++) {
            movieList[i].classList.add("moveRight");
            movieList[i].lastElementChild.classList.add("moreDark")

        }

        for(let i = index; i >= 0; i--) {
            movieList[i].classList.add("moveLeft");
            movieList[i].lastElementChild.classList.add("moreDark")
        }

    }

    const handleMouseLeave = (e) => {
        e.currentTarget.classList.remove("hoveredMovie")
        e.currentTarget.lastElementChild.classList.remove("hoveredMovie")
        let movieList = Array.from(e.currentTarget.parentElement.children);

        for(let i = 0; i <= movieList.length - 1; i++) {
            movieList[i].classList.remove("moveRight");
            movieList[i].classList.remove("moveLeft");
            movieList[i].lastElementChild.classList.remove("moreDark")
        }


    }

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

            <div className="row">
                <h3><a href="#">Trending Now</a><span>Show all <ArrowForwardIosIcon id="forwardIcon" /></span></h3>
                <div className="carousel">
                    <Swiper id="swiper"
                            modules={[Navigation, Pagination, A11y]}
                            slidesPerView={7}
                            spaceBetween={20}
                            slidesPerGroup={7}
                            navigation
                            pagination={{ clickable: true }}
                    >
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img style={{}} className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                        <SwiperSlide id="swiperSlide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img className="carouselImg" src="https://image.tmdb.org/t/p/original//rlCRM7U5g2hcU1O8ylGcqsMYHIP.jpg" alt="screenshot" /><div className="darkPanel"></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HomePage;