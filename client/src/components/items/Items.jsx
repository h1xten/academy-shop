import React, { useState } from 'react'
import {Pagination} from 'antd'
import './Items.css'
import ItemsList from './ItemsList'

const Items = ({items}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8
    const lastItemsIndex = currentPage * itemsPerPage
    const firstItemsIndex = lastItemsIndex - itemsPerPage
    const currentItems = items ? items.slice(firstItemsIndex, lastItemsIndex) : 0
    const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='items_block'>
        <div className='items_header'>
            <h2>PRODUCT LIST</h2>
            <div className='searchbox'> Search Box </div>
        </div>
        <ItemsList items = {currentItems} />
        <Pagination defaultPageSize={8} defaultCurrent={1} showSizeChanger = {false} onChange={paginate} total={items.length} />
    </div>
  )
}

export default Items