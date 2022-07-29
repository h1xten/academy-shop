import React, { useState } from 'react'
import {Pagination} from 'antd'
import './Items.css'
import ItemsList from './ItemsList'
import SearchBar from '../searchbar/SearchBar'

const Items = ({items}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [category, setCategory] = useState('all')
    const [search, setSearch] = useState('')
    const itemsPerPage = 8
    const lastItemsIndex = currentPage * itemsPerPage
    const firstItemsIndex = lastItemsIndex - itemsPerPage
    const sortedItems = category === 'all' ? items : items.filter(e => e.type === category)
    const searchedItems = search === '' ? sortedItems : sortedItems.filter(e => e.name.includes(search))
    const currentItems = searchedItems ? searchedItems.slice(firstItemsIndex, lastItemsIndex) : 0
    const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='items_block'>
        <div className='items_header'>
            <h2>PRODUCT LIST</h2>
            <SearchBar setCategory={setCategory} setSearch={setSearch} />
        </div>
        <ItemsList items = {currentItems} />
        <Pagination defaultPageSize={8} hideOnSinglePage = {true} defaultCurrent={1} showSizeChanger = {false} onChange={paginate} total={searchedItems.length} />
    </div>
  )
}

export default Items