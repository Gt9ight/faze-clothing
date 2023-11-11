
import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../../context/CategoriesContext'
import ProductCard from '../../product-card/Product-card'
import './shop.scss'

const Shop = () =>{
    const {categoriesMap} = useContext(CategoriesContext)
    return(
    <Fragment>
        
            {
                Object.keys(categoriesMap).map((title) => 
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
            {categoriesMap[title].map((product) => (
<ProductCard key={product.id} product={product} />
            ))}
        </div>
                    </Fragment>
                )
            
        
}

    </ Fragment>
    )
}

export default Shop