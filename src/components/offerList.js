import React from 'react';
import OfferCard from './offerCard'; // Ensure the correct path
import { Row, Col, Card, CardBody } from 'reactstrap'; // Import Row, Col, Card, and CardBody from reactstrap


const OfferList = () => {
  const countdownTimes = [
    new Date().getTime() + 3600000, // 1 hour from now
    new Date().getTime() + 7200000, // 2 hours from now
    new Date().getTime() + 14400000, // 4 hours from now
    new Date().getTime() + 28800000, // 8 hours from now
  ];

  const products = [
    {
      imgSrc: "/images/products/seasaltai.jpeg",
      discount: 17,
      oldPrice: 2.99,
      newPrice: 2.49,
      productName: "SEA SALT",
      countdownTime: countdownTimes[0],
      id: "countdown1",
    },
    {
      imgSrc: "/images/products/2.jpg",
      discount: 17,
      oldPrice: 2.99,
      newPrice: 2.49,
      productName: "CASSAVA CHIPS",
      countdownTime: countdownTimes[1],
      id: "countdown2",
    },
    {
      imgSrc: "/images/products/3.jpg",
      discount: 17,
      oldPrice: 2.99,
      newPrice: 2.49,
      productName: "RICE MURUKKU",
      countdownTime: countdownTimes[2],
      id: "countdown3",
    },
    
  ];

  return (
    <div className="container-fluid">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col sm={4} className="mb-4" key={product.id}>
            <Card>
              <center><CardBody>
                <OfferCard
                  imgSrc={product.imgSrc}
                  discount={product.discount}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  productName={product.productName}
                  countdownTime={product.countdownTime}
                  id={product.id}
                  
                />
               
              </CardBody></center>
            </Card>
          </Col>
        ))} 
      </Row>
    </div>
  );
};

export default OfferList;
