import React from "react";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import products from "../products";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();
  const { id: productId } = params;
  const product = products.find((p) => p._id === productId);
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
            </ListGroupItem>
            <ListGroupItem>price: $ {product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
