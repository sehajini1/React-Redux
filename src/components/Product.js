import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function Product() {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  //redux cannot directly call the action. need to dispatch first
  const addToCart =(product) => {
    //dispatch an add action
    dispatch(add(product))
  }
  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom:'10px'}}>
      <Card key={product.key} className="h-100">
      <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:"8vw", height:"20vh"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Rs. {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer style={{background:"#ffffff"}}>
        <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
}
