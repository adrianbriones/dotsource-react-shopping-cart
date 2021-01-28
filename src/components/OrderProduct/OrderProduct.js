import React from 'react';

import Aux from '../../hoc/Aux/Aux'
import classes from "./OrderProduct.css";

const orderProduct = props => (
            <Aux key={props.id}>
                <ul className={classes.ProductOrder} onClick={props.onRemoveProduct}>
                    <li><img style={{maxWidth: "50px"}} src={props.image} alt={props.name}/></li>
                    <li>{props.name}</li>
                    <li>{props.price.toFixed(2)}€</li>
                    <li>{props.qty}</li>
                </ul>
            </Aux>
        );

export default orderProduct;


