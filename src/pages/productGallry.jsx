import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardImg } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function productGallry() {

  const [products , setProducts] =  useState([])
  const navigate = useNavigate();



  useEffect(()=>{
    async function getProducts(){
      const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=10&limit=20')
      console.log(response.data)
      setProducts(response.data)
    
    }


    getProducts()



  },[])

  return (


    <div style={{padding: 50}}>

        <h3>Select A Prduct </h3>

        <div style={ { display:'flex' , flexWrap:'wrap'}}>
          {
            products.length === 0 && <h5>Loading...</h5>
          }
          {products.map((product)=>{    

              return(
                    <Card key={product.id} style={{width: '18rem', border:'none' }}>                
                      <Card.Img src={product.images}  alt="" />
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Text>
                            <h5 style={{color:'#0277BD'}}>  $ {product.price}</h5>
                          </Card.Text>
                        <Button onClick={() =>
                          navigate(`/product/${product.id}` , {state:product})}
                            style={{ width:120}}>View Item</Button>
                    </Card>
              )
            })
          }
        </div>
    </div>
  )
}

export default productGallry