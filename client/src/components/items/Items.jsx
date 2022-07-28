import React from 'react'
import Item from './item/Item'

const Items = ({items}) => {
    const products = items.map((e) => <Item key={e._id} name = {e.name} price = {e.price} />)
  return (
    <div>
    Items
    {products}
    </div>
  )
}

export default Items