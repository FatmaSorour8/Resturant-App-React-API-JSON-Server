import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GiMeal } from "react-icons/gi";
export default function MySlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Delicious Desserts"
        />
        <Carousel.Caption className="centered-caption">
          <GiMeal className="service-icon slider-logo text-light logo me-2 mb-2 App-logo-spin rotate-logo" />
          <h1 className="m-4">Delicious Desserts</h1>
          <p>
            Indulge in our exquisite desserts, crafted to satisfy your sweet
            tooth and leave you craving more.
          </p>

          <button className="btn btn-danger rounded-pill m-4 py-3 px-5">
            Reserve Now
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gourmet Dish"
        />
        <Carousel.Caption className="centered-caption">
          <GiMeal className="service-icon slider-logo text-light logo me-2 mb-2 App-logo-spin rotate-logo" />
          <h1 className="m-4">Gourmet Dishes</h1>
          <p>
            Experience fine dining at Foodr, with gourmet dishes prepared by top
            chefs using the freshest ingredients.
          </p>
          <button className="btn btn-danger rounded-pill m-4 py-3 px-5">
            Reserve Now
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="https://images.pexels.com/photos/2874989/pexels-photo-2874989.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Cozy Ambience"
        />
        <Carousel.Caption className="centered-caption">
          <GiMeal className="service-icon slider-logo text-light logo me-2 mb-2 App-logo-spin rotate-logo" />
          {/* <GiKnifeFork className="slider-logo me-2 mb-2 App-logo-spin rotate-logo" /> */}

          <h1 className="m-4">Cozy Ambience</h1>
          <p>
            Enjoy a meal in our comfortable, warm, and inviting setting, perfect
            for any occasion at Foodr.
          </p>

          <button className="btn btn-danger rounded-pill m-4 py-3 px-5">
            Reserve Now
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
