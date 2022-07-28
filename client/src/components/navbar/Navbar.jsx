import React from 'react'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {Badge} from 'antd'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modal from '../modal/Modal'
import { useState } from 'react'
import Cart from '../cart/Cart'

const Navbar = () => {
    const cart_items = useSelector(state => state.cart.items)
    const [modalActive, setModalActive] = useState(false)
  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'>
                <NavLink to= '/'>
                    Academy Shop
                </NavLink>
            </div>
            <button className='cart_button' onClick={() => setModalActive(true)}>
                <Badge showZero = {true} count = {cart_items.length}>
                    <ShoppingCartOutlined style={{fontSize: 26}} />
                </Badge>
            </button>
        </div>
        <Modal active={modalActive} setActive = {setModalActive}>
            <Cart items = {cart_items} />
        </Modal>
    </nav>
  )
}

export default Navbar