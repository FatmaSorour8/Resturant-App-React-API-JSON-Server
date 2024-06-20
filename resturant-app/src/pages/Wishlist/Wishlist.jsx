import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/actions/wishlistActions';
import './Wishlist.css';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (product) => {
    dispatch(removeFromWishlist(product));
  };

  return (
    <Container className="wishlist-container my-5">
      <h2 className="mb-5">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <Row key={item.id} className="wishlist-item align-items-center mb-4">
            <Col md={3}>
              <Image src={item.image} className="wishlist-img" rounded fluid />
            </Col>
            <Col md={4}>
              <Link to={`/products/${item.id}`}>
                <h5 className="text-dark item-name">{item.name}</h5>
              </Link>
              <p className="text-muted">{item.category}</p>
            </Col>
            <Col md={3} className="fs-5">
              ${item.price}
            </Col>
            <Col md={1}>
              <i
                className="bi bi-trash-fill text-danger fs-5 px-2"
                onClick={() => handleRemoveFromWishlist(item)}
              ></i>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
}
