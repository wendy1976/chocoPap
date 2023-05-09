import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function CarouselComponent() {
    return (
      <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/accueil1.jpg")} 
            alt="Second slide"
        />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/accueil2.jpg")} 
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={require("./assets/imagesEtLogo/images/accueil3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default CarouselComponent;