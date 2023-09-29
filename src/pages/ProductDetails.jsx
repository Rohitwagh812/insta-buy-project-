import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function prooductDetails({ cartItem , handleAddToCart}) {

  const location = useLocation();

  const navigate = useNavigate()
  // const product = location.state;
  const {title, price , images , description , category , id} = location.state;
  const [otherProduct , setOtherProduct] = useState([]); 
  useEffect(() =>{
    async function getData(){
     const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=22&offset=0`);
     console.log(response.data);
     setOtherProduct(response.data)
    }
    getData()
  },[])



  console.log(title, price , images , description);

  return (
    <div style={{padding:50}}>
      <Row>
      <Col lg={2}>
        <div>
          {
            images.map((image , index)=>{
              return(
                <img key={index} src={image} style={{marginBottom:20, borderRadius: 8, cursor:'pointer'}} width={120} alt="" />
              )
            })
          }
        </div>
      </Col>
      <Col lg={4}>
                <img src={images[0]}style={{marginBottom:15, borderRadius: 8}} width={290}  alt="" />
                <h3>{title}</h3>
                <h3 style={{color:'#0277BD'}}>$ {price}</h3>
                <div>{description}</div>
              <Button style={{marginTop:10}}onClick={()=>{
                if(id in cartItem){
                  const curruntItem = cartItem[id];
                  handleAddToCart({[id]:{title, price, quantity:curruntItem.quantity + 1}})
                }else{
                  handleAddToCart({[id]:{title, price, quantity:1}})   
                }
              }}>Add To Cart</Button>
      </Col>
      <Col>
        <h3 style={{textAlign:'center'}}>Other Products In Same Category</h3>
        <div style={{display:'flex' , flexWrap:'wrap', justifyContent:"center"}}>
          {
            otherProduct.map((product)=>{    
                  if(product.id == id) return 
              return(
                    <Card  key={product.id} style={{ width: '9rem', border:'none' }}>
                      <Card.Img src={product.images}  alt="" />
                        <Card.Title style={{fontSize:'1rem'}}>{product.title.split(" ")[0]}</Card.Title>
                        <Card.Text style={{color:'#0277BD'}}>
                        <h6> $ {product.price}</h6>
                        </Card.Text>
                        <Button style={{width:120}} onClick={()=>{
                        navigate(`/product/${product.id}` , {state:product})
                        }}>View Item</Button>
                    
                    </Card>
              )
              })}
              </div>
      </Col>
      </Row>
    </div>
  )
}

export default prooductDetails