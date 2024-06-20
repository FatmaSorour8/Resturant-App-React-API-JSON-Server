import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/productAPI";
import "./ProductDetails.css";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const backToProducts = () => {
    navigate("/products");
  };

  const { name, category, price, description, image } = product;

  return (
    <div className="container product-details-section my-5">
      
      <div className="row">
        <div className="col-lg-6">
          <img src={image} alt={name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-lg-6">
          <h1 className="product-title">{name}</h1>
          <h5 className="text-muted mb-4">{category}</h5>
          <span>
            <i className="bi-star-fill me-1 text-warning"></i>
            <i className="bi-star-fill me-1 text-warning"></i>
            <i className="bi-star-fill me-1 text-warning"></i>
            <i className="bi-star-half me-1 text-warning"></i>
            <i className="bi-star me-1 text-warning"></i>
          </span>
          <h3 className="text-danger my-3">${price}</h3>
          <p className="product-description">{description}</p>
          <button className="btn btn-danger btn-lg w-100 mt-3">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
