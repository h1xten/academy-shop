import React from 'react'
import './Item.css'
import { API_URL } from '../../../config'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, deleteItem } from '../../../redux/cartSlice'
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'

const Item = ({item}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
  return (
    <li>
        <NavLink to= {`item/${item._id}`}>
            <img alt='item-logo' src={`${API_URL}${item.picture}`} width ='250px'/>
            <p>{item.name}</p>
        </NavLink>
        <div className='li-item'>
            <p>{item.price}$</p>
            { items.includes(item) ? 
                <button className='delete_btn' onClick={() => dispatch(deleteItem(item))}><DeleteOutlined /></button>
                :
                <button className='add_btn' onClick={() => dispatch(addItem(item))}><PlusCircleOutlined /></button>
            }
        </div>
    </li>
  )
}

export default Item