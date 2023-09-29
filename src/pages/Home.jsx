


import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselOne from '../assets/Carousel1.png';
import CarouselTwo from '../assets/Carousel2.png';
import CarouselThree from '../assets/Carousel3.png';
import { Button } from 'react-bootstrap';
import LogoOne from '../assets/10.png';
import LogoTwo from '../assets/11.png';
import LogoThree from '../assets/12.png';
import LogoFour from '../assets/13.png';
import LogoFive from '../assets/14.png';
import LogoSix from '../assets/15.png';


import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home({user}) {
   const navigate = useNavigate()
   const handleCTAClick = () =>{
    if(user){
      navigate('/products')
    }else{
      navigate('/login')
    }
   }

  return (
    <div className='home-page'>
    <Carousel>
    <Carousel.Item>
       <Row> 
        <Col>
      <div style={{padding:50}}>
      <h1 style={{ fontWeight:700}}>  <i>SHOP WITH UTMOST</i> </h1>
          <h1 style={{color:'#0277BD', fontWeight:700}}> <i>STYLE</i></h1>
          <h3 style={{marginBottom:20}}> Shop With Letest Trendy Products</h3>
         <div style={{marginBottom:20}}>
         <Button style={{width:250}}
          onClick={handleCTAClick}
         >Browse Products</Button>
         </div>
         <div>
           <h4>Products Are Available From :</h4>
           <img src={LogoOne} style={{height:50}} alt="" />
           <img src={LogoTwo} style={{height:50}} alt="" />
           <img src={LogoThree} style={{height:50}} alt="" />
           <img src={LogoFour} style={{height:50}} alt="" />
           <img src={LogoFive} style={{height:50}} alt="" />
           <img src={LogoSix} style={{height:50}} alt="" />
         </div>
        </div>
        </Col>
        <Col>
        <img src={CarouselOne} style={{height:'89.8vh'}} alt="" />
        </Col>
       </Row>
      </Carousel.Item>   
         <Carousel.Item>
       <Row>
        <Col>
        <div style={{padding:50}}>
          <h1 style={{ fontWeight:700}}>  <i>SHOP WITH UTMOST</i> </h1>
          <h1 style={{color:'#0277BD', fontWeight:700}}> <i>STYLE</i></h1>
          <h3 style={{marginBottom:20}}> Shop With Letest Trendy Products</h3>
         <div style={{marginBottom:20}}>
         <Button style={{width:250}}
          onClick={handleCTAClick}>Browse Products</Button>
         </div>
         <div>
         <h4>Products Are Available From :</h4>
           <img src={LogoOne} style={{height:50}} alt="" />
           <img src={LogoTwo} style={{height:50}} alt="" />
           <img src={LogoThree} style={{height:50}} alt="" />
           <img src={LogoFour} style={{height:50}} alt="" />
           <img src={LogoFive} style={{height:50}} alt="" />
           <img src={LogoSix} style={{height:50}} alt="" />
         </div>
        </div>
        </Col>
        <Col>
        <img src={CarouselTwo} style={{height:'89.8vh'}} alt="" />
        </Col>
       </Row>
      </Carousel.Item>    
        <Carousel.Item>
       <Row>
        <Col>
        <div style={{padding:50}}>
        <h1 style={{ fontWeight:700}}>  <i>SHOP WITH UTMOST</i> </h1>
          <h1 style={{color:'#0277BD', fontWeight:700}}> <i>DISCOUNT</i></h1>
          <h3 style={{marginBottom:20}}> Shop With Letest Trendy Products</h3>
         <div style={{marginBottom:20}}>
         <Button style={{width:250}}
          onClick={handleCTAClick}
         >Browse Products</Button>
         </div>
         <div>
         <h4>Products Are Available From :</h4>
           <img src={LogoOne} style={{height:50}} alt="" />
           <img src={LogoTwo} style={{height:50}} alt="" />
           <img src={LogoThree} style={{height:50}} alt="" />
           <img src={LogoFour} style={{height:50}} alt="" />
           <img src={LogoFive} style={{height:50}} alt="" />
           <img src={LogoSix} style={{height:50}} alt="" />
         </div>
        </div>
        </Col>
        <Col>
        <img src={CarouselThree} style={{height:'89.8vh'}} alt="" />
        </Col>
       </Row>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Home