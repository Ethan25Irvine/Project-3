import React, {Component} from 'react';
import items from '../menuitems.json'
import Product from "../components/Product"
class Ramen extends Component  {
    state = {
        items
    }
    render () {
        return (
            <Product image={items[3].image}/>
        )
    }
}

export default Ramen