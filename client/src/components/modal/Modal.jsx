import React from 'react'
import { useSelector } from 'react-redux'
import './Modal.css'

const Modal = ({active, setActive, children}) => {
    const items = useSelector(state => state.cart.items)
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()} >
        {children}
        </div>
    </div>
  )
}

export default Modal