import React, { createContext, useEffect, useReducer, userState } from 'react'
import ProductReducer from '../reducers/productReducer'

export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [productState, dispatch] = useReducer(ProductReducer, {
        productList: null,
        order: []
    })

    const callApiProduct = () => {
        const products = [{ name: "product 1" }, { name: "product 2" }]
        dispatch({ type: 'GET_PRODUCT', payload: products })
    }
    const addProduct = (product) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product })
    }

    const addCart = (product) => {

        const find = productState.order.find(item => product.name === item.name)

        if (find) {
            find.quantity += 1;
            dispatch({ type: 'ADD_QUANTITY', payload: { ...product } })
        }
        else {
            dispatch({ type: 'ADD_CART', payload: { ...product, quantity: 1 } })
        }
    }

    const clearCart = () => {
        dispatch({type:'CLEAR_CART',payload : {}})
    }

    useEffect(() => {
        callApiProduct()
    }, [])

    const context = {
        productState,
        addProduct,
        callApiProduct,
        addCart,
        clearCart
    }


    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider