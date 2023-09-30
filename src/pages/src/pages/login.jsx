import React, { useState } from 'react'
import {Row , Col , Form , Button} from 'react-bootstrap'
import LoginImg from '../assets/loginpage.png'
import { useNavigate } from 'react-router-dom';
function login({setUser}) {
const [email , setEmail] = useState('');

const navigate = useNavigate()

  return (
    <div style={{backgroundColor: '#0277BD'}}>
        <Row style={{padding:29}}>
            <Col style={{padding:100}}>
            <div>
               <h1 style={{color: 'white'}}>Insta Buy!</h1>
               <h3 style={{color: 'white'}}>One place All Your Nee</h3>
               <Form>
                     <div style={{display:'flex' , justifyContent:'space-between', width:'80%'}}>
    
                      <Form.Group style={{width:'49%'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                    </Form.Group>    
                       <Form.Group  style={{width:'49%'}} className="mb-3" controlId="formBasicPassword"> 
                    <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                         </div>
                        <Button onClick={()=> {
                           localStorage.setItem('UserEmail' , email)
                           setUser(email)
                           navigate('/')
 
                        }} style={{width:'80%', marginBottom:26 ,backgroundColor:'#0277bd' ,borderWidth:1, borderColor:'white'}}  type="submit">
                           Start Shopping 
                          </Button>
                          <div  style={{color:'white'}}>
                            Join The Club , <a style={{color:'white'}} onClick={()=>navigate('/signin')}>Click here</a>
                          </div>
                          </Form>
            </div>
            </Col>
            <Col>
              <img src={LoginImg} style={{height:'80.7vh'}} alt="" />
            </Col>
        </Row>
    
    </div>
  )
}

export default login