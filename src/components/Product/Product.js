import React from 'react';

import classes from './Product.css';
import button from '../UI/Button/Button';

const product = props => (
        <div className={classes.ProductBox}>
            <div className={classes.Card}>
                <div className={classes.ImgWrap}>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div>
                    <p className={classes.CardTitle}>{props.name}</p>
                    <p className={classes.Price}>{props.price.toFixed(2)}€</p>
                </div>
                <div className={classes.CardBottom}>
                    <button className={classes.Button} onClick={props.onIncrementProduct}>+</button>
                    <button className={classes.Button} onClick={props.clicked}>BUY</button>
                    <button className={classes.Button} onClick={props.onRemoveProduct}>-</button>
                </div>
            </div>
        </div>
    );





export default product;