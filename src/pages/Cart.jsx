import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import CartImg from '../assets/Cart.png';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItem }) {

    const navigate = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let tempPrice = 0;
    let tempQuantity = 0;

    Object.keys(cartItem).map((cartItemId) => {
      const details = cartItem[cartItemId];
      tempPrice += details.quantity * details.price;
      tempQuantity += details.quantity;
      console.log(details.title, details.quantity);
    });

    setTotalPrice(tempPrice);
    setTotalQuantity(tempQuantity);
  }, []);

  return (
    <div style={{padding:'36px 36px 36px 60px'}}>
      <Row> 
        <Col style={{ margin:' 40px 40px 40px 0' }}>
          <h3>Your Cart:</h3>
          <div style={{ margin:' 30px 0 30px 0' }} >
          <Table style={{ width:"40vw"  , border:'2px solid #E0E0E0'}}>
            <thead >
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartItem).map((cartItemId) => {
                const itemsDetails = cartItem[cartItemId];
                return (
                  <tr key={cartItemId}>
                    <td>{itemsDetails.title}</td>
                    <td>{itemsDetails.quantity}</td>
                    <td>{itemsDetails.quantity * itemsDetails.price}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Total</td>
                <td>{totalQuantity}</td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </Table>
          </div>
          <Button onClick={()=>{
            navigate('/checkout')
          }}>Checkout</Button>
        </Col>
        <Col>
          <img src={CartImg} height={460} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default Cart;