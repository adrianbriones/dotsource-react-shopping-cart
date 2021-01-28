import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from "./ShoppingCart.css";
import OrderProduct from '../../components/OrderProduct/OrderProduct';

class ShoppingCart extends Component {
    state = {
        promotions: [
            {code: "DOTSOURCE", discount: 0.5},
            {code: "WINTER", discount: 0.3}
            ],
        inputText: "",
    }

    checkPromotionCode = () => {
        const promotions = this.state.promotions;
        const userInputCode = this.state.inputText;
        for (let i = 0; i < promotions.length; i++) {
            if (userInputCode === promotions[i].code) {
                if(!this.props.priceDiscount){
                    this.props.totalPriceChangeHandler(promotions[i].discount);
                }
                return
            }
        }
    };
    updateInputText = event => { this.setState({inputText: event.target.value});};

    render() {
        const productsSummary = this.props.items.map((pKey, idx) => {
                if (pKey.qty !== 0) {
                    return (
                        <OrderProduct
                            key={idx}
                            name={pKey.name}
                            price={pKey.price}
                            qty={pKey.qty}
                            image={pKey.image}
                        />
                    )
                } else {
                    return null
                }
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <ul className={classes.ShoppingCartHeader}>
                    <li>Product</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Quantity</li>
                </ul>
                <div id="product-summary">
                    {productsSummary}
                </div>
                <p className={classes.TotalPrice}>Total Price: {this.props.price.toFixed(2)}€</p>
                <label className={classes.Label} htmlFor="discount-code">Have a Discount Code?</label>
                <div className={classes.GridFooter}>
                    <div className={classes.PromoCode}>
                        <input className={classes.Input} id="discount-code" type="text"
                               onChange={this.updateInputText}/>
                        <button className={classes.AnimatedButton} onClick={this.checkPromotionCode}
                                type="button"></button>
                    </div>
                    <div className={classes.ButtonsBox}>
                        <button type="button" className={classes.ButtonBox}
                                onClick={this.props.purchaseCancelled}>CANCEL
                        </button>
                        <button type="button" className={classes.ButtonBox}
                                onClick={this.props.purchaseContinued}>CHECKOUT
                        </button>
                    </div>
                </div>

            </Aux>
        )

    }
}

export default ShoppingCart;