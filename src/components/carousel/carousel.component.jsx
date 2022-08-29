import React, { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./carousel.styles.scss";

const Carousel = () => {
    const carouselItems = [
        {
            "albumId": 1,
            "id": 1,
            "title": "1",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "2",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "3",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "4",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "5",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        }
    ];
    const [currentCarouselIdx, setCurrentCarouselIdx] = useState(0);

    const setNext = () => {
        if (currentCarouselIdx === carouselItems.length - 1) setCurrentCarouselIdx(0);
        else setCurrentCarouselIdx(currentCarouselIdx + 1);
    }

    const setBefore = () => {
        if (currentCarouselIdx !== 0) setCurrentCarouselIdx(currentCarouselIdx - 1);
    }

    let timer;
    let handleTimer = () => {
        timer = setTimeout(setNext, 2500);
    }
    let clearTimer = () => {
        clearTimeout(timer);
    }

    useEffect(() => {
        handleTimer();
        return clearTimer
    })

    return (
        <div className="carousel">
            <div className="carousel-container" onMouseOver={clearTimer} onMouseLeave={handleTimer}>
                {
                    carouselItems.map(({ id, url, title }, index) => (
                        <div key={id} className={`carousel-item ${currentCarouselIdx === index ? 'carousel-item-active' : ''}`}>
                            <img className="carousel-item-image" src={url} alt={title} />
                            <div className="carousel-item-title"><h2>{title}</h2></div>
                        </div>
                    ))
                }
                <div className="carousel-navigate">
                    <div onClick={setBefore} className="navigate-icon">
                        <NavigateBeforeIcon />
                    </div>
                    <div onClick={setNext} className="navigate-icon">
                        <NavigateNextIcon />
                    </div>
                </div>
                <div className="carousel-progress">
                    {
                        carouselItems.map((_, index) =>
                        (<FiberManualRecordIcon key={index} className={`carousel-progress-icon ${currentCarouselIdx === index ? 'carousel-progress-icon-active' : ''}`} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Carousel;