import React, { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/9745203/pexels-photo-9745203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/28920703/pexels-photo-28920703/free-photo-of-ornate-baroque-mirror-in-istanbul-palace-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/28917346/pexels-photo-28917346/free-photo-of-snowy-landscape-in-krieglach-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/28271349/pexels-photo-28271349/free-photo-of-a-man-is-standing-on-the-shore-near-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/21253737/pexels-photo-21253737/free-photo-of-facade-of-one-of-the-buildings-at-the-massena-square-in-nice-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex === 0 ? images.length - 1 : activeIndex - 1);
          const isNext = index === (activeIndex + 1) % images.length;
          
          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${isActive ? "active" : ""} ${
                isPrev ? "prev" : isNext ? "next" : ""
              }`}
            />
          );
        })}
      </div>
      <button className="prev-button" onClick={prevImage}>
        &#10094;
      </button>
      <button className="next-button" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
}

export default App;

