import React from 'react';
import Aux from '../../hoc/Aux/Aux'
import classes from "../Product/Product.css";
import button from "../UI/Button/Button";
const orderProduct = (props)=> (
    <Aux>
        <div className={classes.ProductBox}>
        <figure className={classes.Card}>
            <div className={classes.ImgWrap}>
                <img src={props.image} alt={props.name}/>
            </div>
            <figcaption>
                <p className={classes.CardTitle}>{props.name}</p>
            </figcaption>
            <div className={classes.CardBottom}>
                <div>
                    <div className="price-new">{props.price}€</div>
                </div>
                <button onClick={props.onIncrementProduct}>+</button>
                <button onClick={props.onRemoveProduct}>-</button>
            </div>
        </figure>
    </div>
    </Aux>

);
export default orderProduct;


