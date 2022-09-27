import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import LogoZenMates from '../../images/Logo.png'
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
<header>
        <nav class="container-wid navbar">
            <picture class="logo">
                <img 
                width="40" 
                height="81"
                className='logo__img'
                src={LogoZenMates} 
                Alt='Logo Zen Mates'/>
                </picture>
            <ul class="menu">
            <li class="menu__item">
                    <a href="/#">Servicios</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Productos</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Nosotros</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Contacto</a>
                </li>
                <li>
                    <a href="/#">
                        <CardWidget/> 
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar