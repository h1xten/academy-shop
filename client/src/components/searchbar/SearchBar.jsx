import React from 'react'
import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const SearchBar = ({setSearch, setCategory}) => {
    const {Option} = Select
  return (
    <div className='searchbox'>
        <Input placeholder='Search' suffix ={<SearchOutlined />} style={{width: 200}} onChange={(e) => setSearch(e.target.value)} />
        <Select defaultValue='all' style = {{width: 100}} onChange = {setCategory}>
            <Option value ='all'>All</Option>
            <Option value = 'top'>Top</Option>
            <Option value = 'shorts'>Shorts</Option>
            <Option value = 'shoes'>Shoes</Option>
        </Select>
    </div>
  )
}

export default SearchBar