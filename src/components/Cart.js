import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart(){
    const productCart = useSelector(state => state.cart);
    
    const dispatch = useDispatch();
    
    const removeToCart =(id) => {
        //dispatch a remove action
        dispatch(remove(id));
    }
    const cards = productCart.map((product) => (
        <div className="col-md-12" style={{marginBottom:'10px'}}>
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
            <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
            </Card.Footer>
          </Card>
        </div>
      ));

    return(
        <div className="row">
            {cards}
        </div>
    );
}