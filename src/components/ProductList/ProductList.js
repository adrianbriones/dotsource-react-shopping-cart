import React from 'react';
import Product from '../Product/Product'

import classes from './ProductList.css'

const ProductList = (props) => (
    <div>
        <div className={classes.Productlist}>
            {props.products.map(p => {
                return <Product
                    key={p.id}
                    image={p.image}
                    name={p.name}
                    price={p.price}
                    qty={p.qty}
                    onIncrementProduct={() => props.onIncrementProduct(p.id)}
                    onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
            })}
        </div>
    </div>
)

export default ProductList;