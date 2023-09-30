import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SignImage from '../assets/Sing.jpg';

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'



 

function Signin( { setUser } ) {

  const [email , setEmail] = useState('');

  const navigate = useNavigate()

  return (
    <div className='signin' style={{backgroundColor: '#0277BD'}}>
         <Row style={{padding:20}}>
            <Col style={{padding:100}}>
            <div>
               <h1 style={{color: 'white'}}>Insta Buy!</h1>
               <h3 style={{color: 'white'}}>One place All Your Nee</h3>
               <Form>
<div style={{display:'grid' , width:'100%'}}>
<div  style={{display:'flex' , width:'80%'}}>
                      <Form.Group style={{width:'60%'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter Your email" />
                    </Form.Group>    
                      
                      <Form.Group  style={{width:'60%'  , marginLeft:'0.7em'}} className="mb-3" controlId="formBasicPassword"> 
                    <Form.Control type="password" placeholder="Enter Your Password" />
                        </Form.Group>

                        </div>
                       <Form.Group  style={{width:'80%' }} className="mb-3" controlId="formBasicPassword"> 
                    <Form.Control type="name" placeholder="Enter Your Name" />
                        </Form.Group>
                      
</div>
                        <Button
                        onClick={()=> {
                          localStorage.setItem('UserEmail' , email)
                          setUser(email)
                          navigate('/')

                       }}
                        style={{width:'80%', marginBottom:26 ,backgroundColor:'#0277bd' ,borderWidth:1, borderColor:'white'}}  type="submit">
                          Join The Club
                          </Button>
                          <div  style={{color:'white'}}>
                            Already A Member? <a style={{color:'white'}} onClick={()=>{
                              navigate('/login')
                            }}> Click here</a>
                          </div>
                          </Form>
            </div>
            </Col>
            <Col>
                      <img src={SignImage} style={{height:'82vh', marginTop:'0.6rem'}} alt="" />
            </Col>
        </Row>
    
    </div>
  )
}

export default Signin