import React from 'react'
import './Itempage.css'
import { useParams } from 'react-router-dom'
import {API_URL} from '../../config'
import Loader from '../../components/loader/Loader'
import { useGetItemInfoQuery } from '../../redux/storeApi'

const Itempage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetItemInfoQuery(id)
    if(isLoading) return <Loader />
  return (
    <div className='itempage page wrapper'>
        <img src={`${API_URL}${data.item.picture}`} width = '600px' alt="item-logo"/>
        <div className='itempage_description'>
            <h1 className='desc_title'>{data.item.name}</h1>
            <h2 className='desc_title'>Description</h2>
            <p>{data.item.description}</p>
            <h3 className='itempage_price'>Price: {data.item.price}$</h3>
        </div>
    </div>
  )
}

export default Itempage