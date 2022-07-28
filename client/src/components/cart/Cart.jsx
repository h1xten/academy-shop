import React from 'react'
import './Cart.css'
import { API_URL } from '../../config'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/cartSlice'
import { DeleteOutlined } from '@ant-design/icons'
import {Button} from 'antd'

const Cart = ({items}) => {
    const dispatch = useDispatch()
    let sum = 0
    items.forEach(element => {
        sum += element.price
    });
  return (
    <div className='cart'>
        {items.length <= 0 ? 
            <span className='cart_empty'>Your Shopping Cart Is Empty</span> 
            : 
            <div className='cart_list'>
                {items.map(e => 
                <div className='cart_item'>
                    <div className="item_content">
                        <img alt='item-logo' src={`${API_URL}${e.picture}`} width ='50px'/>
                        <p>{e.name}</p>
                        <p className='cart_item_price'>{e.price}$</p>
                    </div>
                    <button className='delete_btn' onClick={() => dispatch(deleteItem(e))}><DeleteOutlined /></button>
                </div>)
                }
                <hr className='cart_space' />
                <div className='total'>
                    <p>Total: {sum}$</p>
                    <Button className='purchase_btn' type='primary' size='middle' disabled={true}>Purchase</Button>
                </div>
            </div>
        }
    </div>
  )
}

export default Cart