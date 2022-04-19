import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

const Cart = ({ food }) => {
  const { name, price, img, about } = food;
  return (
      <div className="card">
        <img className="card-img-top img-fluid" style={{ height: '250px'}} src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5><small>Price: ${price}</small></h5>
          <p className="card-text">
              {about}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
  );
};

export default Cart;
