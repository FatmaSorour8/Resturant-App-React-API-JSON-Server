import React from "react";
import MySlider from "../../components/MySlider";
import { GiChefToque, GiTable, GiMeal } from "react-icons/gi";
import "./Home.css";

export default function Home() {
  return (
    <>
      <MySlider />
      <div className="services-section py-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="container">
          <div className="row g-5 text-center">
            <div className="col-md-4 mb-4">
              <GiChefToque className="service-icon" />
              <h3>Chef's Special</h3>
              <p>
                Experience exclusive dishes crafted by our head chef using the
                finest ingredients.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <GiTable className="service-icon" />
              <h3>Private Dining</h3>
              <p>
                Enjoy a private dining experience in a secluded and luxurious
                setting.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <GiMeal className="service-icon" />
              <h3>Event Catering</h3>
              <p>
                Our catering services are perfect for weddings, corporate
                events, and private parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section py-5 bg-light">
        <h2 className="text-center mb-5">About Us</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <br />
              <h3>Our Story</h3>
              <p>
                Founded in 2022, Foodr has been dedicated to providing an
                exceptional dining experience. Our mission is to serve
                delicious, high-quality food in a warm and welcoming
                environment.
              </p>
              <br />
              <h3>Our Mission</h3>
              <p>
                We aim to create memorable moments for our guests through
                impeccable service, culinary excellence, and a cozy ambience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-section py-5">
        <h2 className="text-center mb-5">Our Menu</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish"
                className="img-fluid rounded mb-3"
              />
              <h4>Grilled Salmon</h4>
              <p>
                A succulent grilled salmon served with a side of fresh
                vegetables.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish"
                className="img-fluid rounded mb-3"
              />
              <h4>Steak</h4>
              <p>
                Our premium steak, cooked to perfection and served with a choice
                of sides.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <img
                src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dish"
                className="img-fluid rounded mb-3"
              />
              <h4>Chocolate Cake</h4>
              <p>
                A rich and moist chocolate cake, topped with a creamy ganache.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section py-5 bg-light">
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <p className="testimonial">
                "The best dining experience I've ever had. The food was amazing
                and the service was top-notch!"
              </p>
              <p>- John Doe</p>
            </div>
            <div className="col-md-4 mb-4">
              <p className="testimonial">
                "A wonderful place for a family dinner. Cozy ambience and
                fantastic dishes."
              </p>
              <p>- Jane Smith</p>
            </div>
            <div className="col-md-4 mb-4">
              <p className="testimonial">
                "Our event was a success thanks to their superb catering
                service."
              </p>
              <p>- Emily Johnson</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section py-5">
        <h2 className="text-center mb-5">Get in Touch</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Contact Us</h4>
              <p>Email: info@foodr.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Foodr St, Culinary City, Foodland</p>
            </div>
            <div className="col-md-6 mb-4">
              <h4>Reservation</h4>
              <p>Make a reservation by clicking the button below:</p>
              <button className="btn btn-danger rounded-pill py-2 px-4">
                Reserve Now
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
