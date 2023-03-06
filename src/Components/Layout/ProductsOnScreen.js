import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsOnScreen = () => {
  return (
    <Row xs={1} md={2} className="g-4 mt-3 ml-3 mr-3">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "25rem" }}>
            <Card.Title className="text-center">{product.title}</Card.Title>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Text>${product.price}</Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductsOnScreen;
