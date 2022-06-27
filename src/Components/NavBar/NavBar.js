import React from 'react';
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavBar(props) {
    return (
        <nav className="navBar">
            <div className="navBar-left">
                <img id="logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" />
                <ul>
                    <li>Home</li>
                    <li>TV Series</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
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