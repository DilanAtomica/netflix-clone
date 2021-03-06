import React from 'react';
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useEffect, useState} from "react";
import {useContext} from "react";
import {AppContext} from "../../App";
import NetflixNLogo from "../../images/netflixNLogo.png"

function NavBar({displayDiscoverModal}) {

    const {userWidth} = useContext(AppContext);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const handleOnClick = () => {
        displayDiscoverModal();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className="navBar" style={{background: scrollPosition === 0 && "none"}}>
            <div className="navBar-left">
                <img id="logo" alt="logo" src={userWidth < 800 ? NetflixNLogo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"} />
                <ul style={{display: userWidth < 800 && "none"}}>
                    <li>Home</li>
                    <li>TV Series</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
                <div className="discoverContainer" style={{display: userWidth > 800 && "none"}} onClick={handleOnClick}>
                    <span>Discover<span><ArrowDropDownIcon id="discoverArrowIcon"/></span></span>
                </div>
            </div>
            <div className="navBar-right">
                <SearchIcon id="searchIcon" />
                <img id="avatar" alt="avatar" src="https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_profilepic.png" />
                <ArrowDropDownIcon id="avatarArrowIcon" />
            </div>
        </nav>
    );
}

export default NavBar;