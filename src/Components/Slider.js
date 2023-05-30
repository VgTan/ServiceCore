import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/slider.css';

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.image} interval={slide.interval}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-caption">
                <h4>{slide.title}</h4>
            </div>
            <div className="carousel-cap2">
                <h5>{slide.subTitle}</h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;