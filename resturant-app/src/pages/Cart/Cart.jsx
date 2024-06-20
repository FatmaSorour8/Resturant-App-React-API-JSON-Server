import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/actions/cartActions";
import "./Cart.css";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-container my-5">
      <Row className="cart-total mt-4 mb-5 d-flex justify-content-between">
        <Col className="text-start">
          <h2 className="">Your Cart</h2>
        </Col>
        <Col className="text-end">
          <h5>Total:</h5>
        </Col>
        <Col md={2} className="text-danger fs-5">
          ${total.toFixed(2)}
        </Col>
      </Row>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Row key={item.id} className="cart-item align-items-center mb-4">
              <Col md={2}>
                <Image src={item.image} className="cart-img" rounded fluid />
              </Col>
              <Col md={4}>
                <Link to={`/products/${item.id}`}>
                  <h5 className="text-dark">{item.name}</h5>
                </Link>
                <p className="text-muted">{item.category}</p>
              </Col>
              <Col md={2}>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </Col>
              <Col md={3} className="fs-5 text-center">
                ${item.price}
              </Col>
              <Col md={1}>
                <i
                  className="bi-trash-fill text-danger fs-5 px-2"
                  onClick={() => handleRemove(item.id)}
                ></i>
              </Col>
            </Row>
          ))}
        </>
      )}
    </Container>
  );
}
