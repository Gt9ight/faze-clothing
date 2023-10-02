
import { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'
import ProductCard from '../../product-card/Product-card'
import './shop.scss'

const Shop = () =>{
    const { products } = useContext(ProductsContext)
    return(
        <div className='products-container'>
            {products.map((product) => (
<ProductCard key={product.id} products={product} />
            ))}
        </div>
    )
}

export default Shop