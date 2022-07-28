import React from 'react'
import Loader from '../../components/loader/Loader'
import './Homepage.css'
import { useGetItemsQuery } from '../../redux/storeApi'
import Items from '../../components/items/Items'

const Homepage = () => {
    const {data, isLoading} = useGetItemsQuery(undefined)

    if(isLoading) return <Loader />
  return (
    <div className='homepage wrapper page'>
        <div>homepage</div>
        <Items items = {data.items} />
    </div>
  )
}

export default Homepage