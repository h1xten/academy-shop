import React from 'react'
import Item from './item/Item'

const ItemsList = ({items}) => {
  return (
    <ul className='item_list'>
        { 
            items.length > 0 
                ? 
                items.map((e) => <Item key={e._id} item = {e} />) 
                : 
                <h3 className='prod_not_found'>Product not found!</h3> }
    </ul>
  )
}

export default ItemsList