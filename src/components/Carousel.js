import React from 'react';
import '.././App.css';

function Carousel() {
    return (
        <div className="carousel">
            <svg xmlns="http://www.w3.org/2000/svg" className="arrow-up" width="36.428" height="14.725" viewBox="0 0 36.428 14.725"><path id="Icon_ion-md-arrow-dropright" data-name="Icon ion-md-arrow-dropright" d="M0,0,14.725,18.214,0,36.428Z" transform="translate(0 14.725) rotate(-90)" fill="#ed3a72"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="carousel-hex .carousel-hex-active" width="56.429" height="48.868" viewBox="0 0 56.429 48.868"><path id="Path_3972" data-name="Path 3972" d="M39.723,0H13.241L0,22.934,13.241,45.868H39.723L52.964,22.934Z" transform="translate(54.697 47.368) rotate(-180)" fill="#ffe403" stroke="#ed3a72" stroke-miterlimit="10" stroke-width="3"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="carousel-hex" width="48.954" height="42.395" viewBox="0 0 48.954 42.395"><path id="Path_3973" data-name="Path 3973" d="M31.519,0H10.507L0,18.2,10.507,36.4H31.519L42.026,18.2Z" transform="translate(45.49 39.395) rotate(-180)" fill="#ed3a72" stroke="#ed3a72" stroke-miterlimit="10" stroke-width="6"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="arrow-down" width="36.428" height="14.725" viewBox="0 0 36.428 14.725"><path id="Icon_ion-md-arrow-dropright" data-name="Icon ion-md-arrow-dropright" d="M0,0,14.725,18.214,0,36.428Z" transform="translate(36.428) rotate(90)" fill="#ed3a72"/></svg>

        </div>        
    )
}

export default Carousel;