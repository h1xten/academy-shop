import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/v1/'}),
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => `item/get_items`,
        }),
        getItemInfo: builder.query({
            query: (id) => `item/item_info?id=${id}`
        })
    })
});

export const {useGetItemsQuery, useGetItemInfoQuery} = storeApi;