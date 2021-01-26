import React, {Component} from 'react';

import Layout from './hoc/Layout/Layout'
import Store from './containers/Store/Store'
import SumContext from './components/context/Sum-context'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsCart: null
        }
    }

    getNumberItemsCart = (number) => {
        this.setState({itemsCart: number})
    }

    render() {
        return (
            <div>
                <SumContext.Provider value={{sumItems: this.state.itemsCart}}>
                    <Layout>
                        <Store passData={this.getNumberItemsCart}/>
                    </Layout>
                </SumContext.Provider>
            </div>
        );
    }
}

export default App;
