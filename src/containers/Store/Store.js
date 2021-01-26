import React, {Component} from 'react'

import product1 from '../../assets/images/product/product01.jpeg'
import product2 from '../../assets/images/product/product02.jpeg'
import product3 from '../../assets/images/product/product03.jpeg'
import product4 from '../../assets/images/product/product04.jpeg'
import product5 from '../../assets/images/product/product05.jpeg'
import product6 from '../../assets/images/product/product06.jpeg'
import product7 from '../../assets/images/product/product07.jpeg'
import product8 from '../../assets/images/product/product08.jpeg'
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal'
import ProductList from "../../components/ProductList/ProductList";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

class Store extends Component {
    state = {
        products: [
            {id: 0, name: "ASOS Dark Future black", price: 18, image: product1, qty: 0},
            {id: 1, name: "ASOS pink New Balance", price: 89, image: product2, qty: 0},
            {id: 2, name: "North Face Faces pink Exclusive", price: 22.95, image: product3, qty: 0},
            {id: 3, name: "Puma Essentials hoodie  black", price: 30, image: product4, qty: 0},
            {id: 4, name: "Puma Deluxe gray", price: 149, image: product5, qty: 0},
            {id: 5, name: "Puma Essentials navy", price: 24, image: product6, qty: 0},
            {id: 6, name: "Puma Essentials in grey", price: 27, image: product7, qty: 0},
            {id: 7, name: "Crooked Tongues hoodie love ", price: 36, image: product8, qty: 0}
        ],
        purchasing: false,
        totalPrice: 0,
        sum: 0,
        cart: [],

    }

    purchaseHandler = () => {
        this.setState({purchasing: true});

    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('Sending data...');
    }

    updatePurchaseState = (totalItems) => {
        this.props.passData(totalItems);
    }

    removeProductHandler = (productId) => {
        const oldSum = this.state.sum
        const oldCount = this.state.products[productId].qty;
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedSumProducts = oldSum - 1;
        const updatedProducts = [...this.state.products]
        updatedProducts[productId].qty = updatedCount;
        const priceDeduction = updatedProducts[productId].price;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            products: updatedProducts,
            cart: updatedProducts,
            sum: updatedSumProducts
        });
        this.updatePurchaseState(updatedSumProducts);
    }

    addProductHandler = (productId) => {
        const oldSum = this.state.sum;
        const oldCount = this.state.products[productId].qty;
        const updatedCount = oldCount + 1;
        const updatedSumProducts = oldSum + 1;
        const updatedProducts = [...this.state.products];
        updatedProducts[productId].qty = updatedCount;
        const priceAddition = updatedProducts[productId].price;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            products: updatedProducts,
            cart: updatedProducts,
            sum: updatedSumProducts
        });
        this.updatePurchaseState(updatedSumProducts);
    }
    totalPriceChangeHandler = (discount) => {
        const actualPrice = this.state.totalPrice;
        const PriceDiscount = (actualPrice * discount).toFixed(2);
        const newPrice = (actualPrice - PriceDiscount).toFixed(2);
        //this.setState({totalPrice: newPrice});
        console.log("[totalPriceChangeHandler]: New Price " + newPrice)

    };

    render() {
        return (
            <Aux>
                <h2>Product Overview</h2>
                <div style={{width: "100%", display: "flex", flexFlow: "row-reverse"}}>
                    <button style={{marginRight: "100px"}} onClick={this.purchaseHandler}>ORDER</button>
                </div>
                <ProductList
                    products={this.state.products}
                    onSaveProduct={this.purchaseHandler}
                    onIncrementProduct={this.addProductHandler}
                    onRemoveProduct={this.removeProductHandler}
                />
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <ShoppingCart
                        items={this.state.cart}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        totalPriceChangeHandler={this.totalPriceChangeHandler}/>
                </Modal>
            </Aux>
        );
    }
}

export default Store;