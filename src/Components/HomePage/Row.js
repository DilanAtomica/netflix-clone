import React, {useEffect, useState} from 'react';
import "./Row.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Row({handleMouseLeave, handleMouseEnter, movieList, category, imageType}) {

    return (
        <div className="row">
            <h3><a href="#">{category}</a><span>Show all <ArrowForwardIosIcon id="forwardIcon" /></span></h3>
            <div className="carousel">
                <Swiper id="swiper"
                        modules={[Navigation, Pagination, A11y]}
                        slidesPerView={7}
                        spaceBetween={10}
                        slidesPerGroup={7}
                        navigation
                        pagination={{ clickable: true }}
                >

                    {movieList.map(movie => (
                        <SwiperSlide id="swiperSlide" key={movie.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img className="carouselImg" src={imageType === "landscape"
                                ? "https://image.tmdb.org/t/p/original" + movie?.backdrop_path
                                : "https://image.tmdb.org/t/p/original" + movie?.poster_path}
                                 alt="screenshot" />

                            <div className="movieContent">
                                <div className="movieContent-actions">
                                    <div className="actionsCircle"><PlayCircleIcon id="actionsPlayIcon" /></div>
                                    <div className="actionsCircle"><AddCircleOutlineIcon id="actionsAddIcon" /></div>
                                    <div className="actionsCircle"><ArrowCircleDownIcon id="actionsExpandIcon" /></div>
                                </div>
                                <h1>{movie.title}</h1>
                                <div className="movieContent-genres">
                                    <span>Drama</span>
                                    <span>Action</span>
                                </div>
                            </div>
                            <div className="darkPanel"></div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}

export default Row;