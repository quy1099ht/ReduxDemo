import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'


const Home = () => {
    const {
        productState: { productList, order },
        addProduct,
        addCart,
        clearCart,
    } = useContext(ProductContext)


    // const handleAddProduct = () => {
    //     addProduct({name: "product 3"})
    // }
    const handleAddCart = (product) => {
        addCart(product)
        const orderss = order
        localStorage.setItem("orders",JSON.stringify(orderss))
    }
    const handleClearCart = () =>{
        clearCart()
        localStorage.removeItem("orders")
    }

    return (
        <div>
            {productList && (productList.map(product => {
                return (<h1  onClick={() =>{handleAddCart(product)}}>{product.name}</h1>)
            }))}
            <h1>Cart List</h1>
            {order.map(item => {
                return (<h1>Name : {item.name}. Price : {item.quantity}</h1>)
            })}
            <button onClick={() => {handleClearCart()}} >Clear Cart</button>
        </div>
    )
}

export default Home