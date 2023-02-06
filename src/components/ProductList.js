//components/ProductList.js

import React, { Component } from 'react';
import ProductView from './ProductView';

class ProductList extends Component {
  render() {
    return (
      <div className="container main-content">
        <div >
            <ProductView />
        </div>
      </div>
    );
  }
}

export default ProductList;