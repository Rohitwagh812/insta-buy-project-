import React from 'react'
import Checkoutimg from '../assets/checkout.png'

function checkout() {
  return (
    <div  style={{
            display:'flex', justifyContent:'center', alignItems:'center',height:'60vh'
        }}>
        <img src={Checkoutimg}height={300} alt="" />
    </div>
  )
}

export default checkout