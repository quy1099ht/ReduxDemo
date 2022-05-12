
import React from 'react'

const ProductReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PRODUCT':
            return {
                ...state,
                productList: payload
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                productList: [...state.productList, payload]
            }
        case 'ADD_CART':
            return {
                ...state,
                order: [...state.order, payload]
            }
        case 'ADD_QUANTITY':
            return {
                ...state,
                order: [...state.order]
            }
        case 'CLEAR_CART':
            return {
                ...state,
                order: []
            }

        default:
            return state
    }
}

export default ProductReducer