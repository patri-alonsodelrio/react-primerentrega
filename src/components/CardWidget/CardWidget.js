import React from 'react'
import LogoCart from '../../images/icons8-shopping-cart-30.png'

const CardWidget = () => {
  return (
    <div>
        <img
        className='LogoCarrito'
        src={LogoCart} 
        alt='Logo Carrito de Compras'/>
    </div>
  )
}

export default CardWidget