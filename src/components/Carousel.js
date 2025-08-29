import React, { useState } from 'react';
import '../App.css';
//import aboutmebubble from '.././assets/aboutmebubble.svg';

function Carousel() {

  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 2;

  const handelCarouselClick = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems); 
    } else if (direction === 'prev') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems); 
    }
  };

  return (
    <div>
    <div className="carousel">
      
      <button onClick={() => handelCarouselClick('prev')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-up"
          width="36.428"
          height="14.725"
          viewBox="0 0 36.428 14.725"
        >
          <path
            id="Icon_ion-md-arrow-dropright"
            data-name="Icon ion-md-arrow-dropright"
            d="M0,0,14.725,18.214,0,36.428Z"
            transform="translate(0 14.725) rotate(-90)"
            fill="#ed3a72"
          />
        </svg>
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="carousel-hex"
        width="45.49"
        height="39.395"
        viewBox="0 0 45.49 39.395"
      >
        <path
          className={activeIndex === 0 ? 'active-path' : 'inactive-path'}
          id="Path_3973"
          data-name="Path 3973"
          d="M31.519,0H10.507L0,18.2,10.507,36.4H31.519L42.026,18.2Z"
          transform="translate(43.758 37.895) rotate(-180)"
          fill="#ed3a72"
          stroke="#ed3a72"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="carousel-hex"
        width="45.49"
        height="39.395"
        viewBox="0 0 45.49 39.395"
      >
        <path
          className={activeIndex === 1 ? 'active-path' : 'inactive-path'}
          id="Path_3973"
          data-name="Path 3973"
          d="M31.519,0H10.507L0,18.2,10.507,36.4H31.519L42.026,18.2Z"
          transform="translate(43.758 37.895) rotate(-180)"
          fill="#ed3a72"
          stroke="#ed3a72"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </svg>

      <button onClick={() => handelCarouselClick('next')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-down"
          width="36.428"
          height="14.725"
          viewBox="0 0 36.428 14.725"
        >
          <path
            id="Icon_ion-md-arrow-dropright"
            data-name="Icon ion-md-arrow-dropright"
            d="M0,0,14.725,18.214,0,36.428Z"
            transform="translate(36.428) rotate(90)"
            fill="#ed3a72"
          />
        </svg>
      </button>
    </div>
    <div className={activeIndex === 0 ? 'test-act' : 'test-inc'}>
                {/*<img src={aboutmebubble} alt="about me speech bubble"></img>*/}
                <div className="about-me-content">
                    <p className="about-me-content-text">My journey hasn’t been a straight path. In high school, I was active in cheer and dance but had no idea how to eat healthy. I was a vegetarian living off pasta and sugar, and while my teenage metabolism and active lifestyle kept me at a healthy weight, those habits caught up with me in college. Between working multiple jobs, school, and stress eating, I gained 52 pounds by the time I graduated.<br></br> In 2019, I decided to make a change. I focused on building better habits, like consistent exercise and mindful eating, instead of chasing quick fixes. Over time, I lost 35 pounds and fell in love with bodybuilding, earning first place and professional athlete status in my first WBFF competition. But I realized that extreme competition prep wasn’t sustainable—it left me burned out, struggling with food guilt, and resenting the gym.</p>
                </div>
                <div>
                    <h1 className="about-me-title">About Capressa</h1>
                </div>

     </div>
     <div className={activeIndex === 1 ? 'test-act' : 'test-inc'}>
                <div className="about-me-content">
                    <p className="about-me-content-text">content 2</p>
                </div>
                <div>
                    <h1 className="about-me-title">Before & After</h1>
                </div>
     </div>
    
    </div>
  );
}

export default Carousel;
