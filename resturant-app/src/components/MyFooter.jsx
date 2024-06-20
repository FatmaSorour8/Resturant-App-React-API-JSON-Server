import React from "react";

export default function MyFooter() {
  return (
    <>
      <footer className="bg-light text-dark py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Quick Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <ul className="list-unstyled">
                <li>123 Main Street</li>
                <li>City, Country</li>
                <li>Email: info@example.com</li>
                <li>Phone: +1234567890</li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <p className="text-center">
                &copy; 2024 Your E-commerce. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
