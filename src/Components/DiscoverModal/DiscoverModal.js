import React from 'react';
import "./DiscoverModal.css";

function DiscoverModal({hideDiscoverModal, showDiscoverModal}) {


    const handleOnClick = () => {
        hideDiscoverModal();
    }

    return (
        <div className="discoverModal" style={{opacity: showDiscoverModal && "1", pointerEvents: showDiscoverModal && "auto"}} onClick={handleOnClick}>
            <ul className="discoverModalContent">
                <li>Home</li>
                <li>TV Series</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>
        </div>
    );
}

export default DiscoverModal;