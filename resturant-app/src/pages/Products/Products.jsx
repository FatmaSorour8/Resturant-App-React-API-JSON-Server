import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner"; // Import Spinner for loading indicator
import "./Products.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../api/productAPI";
import { addToCart, updateQuantity } from "../../redux/actions/cartActions";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlistActions";
import Swal from "sweetalert2"; 

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = useSelector((state) => state.cart.count);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const deleteHandler = (productId) => {
    deleteProduct(productId)
      .then((response) => {
        setProducts(products.filter((p) => p.id !== productId));
      })
      .catch((error) => console.log(error));
  };

  const handleAddToCart = (product) => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    if (isInCart) {
      dispatch(updateQuantity(product.id, isInCart.quantity + 1));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }

    dispatch({ type: "INCREMENT_CART_COUNT" });

    Swal.fire({
      // title: "Added to Cart!",
      text: `Item has been added to your cart.`,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const handleAddToWishlist = (product) => {
    const isInWishlist = wishlistItems.find((item) => item.id === product.id);
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    } else {
      dispatch(removeFromWishlist(product));
    }
  };

  // loader component
  const Loader = () => (
    <div className="text-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  return (
    <div className="container products-section my-5">
      <div className="btns mb-5 d-flex justify-content-between align-items-center">
        <div>
          <button className="btn me-2 active">All</button>
          <button className="btn me-2">Burger</button>
          <button className="btn me-2">Pizza</button>
          <button className="btn me-2">Dessert</button>
        </div>
        <Link
          to={`/products/0/edit`}
          className="btn bg-dark text-light border-0"
        >
          Add New Meal
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="row gy-3">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2" key={product.id}>
              <Card className="border-0 shadow-sm h-100">
                <div className="card-img">
                  <Card.Img
                    variant="top"
                    className="image"
                    src={product.image}
                  />
                  <div className="overlay">
                    <Link
                      to={`/products/${product.id}`}
                      className="action-btn bi-eye"
                    ></Link>
                    {wishlistItems.some((item) => item.id === product.id) ? (
                      <i
                        className="action-btn bi-heart-fill text-danger"
                        onClick={() => handleAddToWishlist(product)}
                      ></i>
                    ) : (
                      <i
                        className="action-btn bi-heart"
                        onClick={() => handleAddToWishlist(product)}
                      ></i>
                    )}
                    <Link
                      to={`/products/${product.id}/edit`}
                      className="action-btn bi-pencil-square"
                    ></Link>
                    <button
                      onClick={() => deleteHandler(product.id)}
                      className="action-btn bi-trash"
                    ></button>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <div className="mb-2 text-muted small">
                    {product.category}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-danger fs-4">${product.price}</span>
                    <span>
                      <i className="bi-star-fill me-1 text-warning"></i>
                      <i className="bi-star-fill me-1 text-warning"></i>
                      <i className="bi-star-fill me-1 text-warning"></i>
                      <i className="bi-star-half me-1 text-warning"></i>
                      <i className="bi-star me-1 text-warning"></i>
                    </span>
                  </div>
                  <Button
                    variant="danger"
                    className="w-100 mt-auto rounded-1 py-2 fs-6"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
