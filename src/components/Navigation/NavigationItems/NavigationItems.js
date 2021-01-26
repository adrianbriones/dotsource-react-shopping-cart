import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import cartIcon from '../../../assets/images/cart-icon.png';
import SumContext from '../../context/Sum-context';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Productlist</NavigationItem>
        <NavigationItem link="/">
            <img src={cartIcon} alt="cart"/>
           <span>
               <SumContext.Consumer>
               {(context) => context.sumItems}
            </SumContext.Consumer>
           </span>
        </NavigationItem>
    </ul>
);

export default navigationItems;