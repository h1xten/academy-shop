import React from 'react'
import Item from './item/Item'

const ItemsList = ({items}) => {
  return (
    <ul className='item_list'>
        { items.map((e) => <Item key={e._id} item = {e} />) }
    </ul>
  )
}

export default ItemsList