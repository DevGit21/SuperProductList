//components/ProductView.js

import React from "react";
import productImage from '../product_img.jpg';
import WishlistView from './WishlistView';
import jsonData from '../productData.json';
const loadProductData = [...jsonData];

class ProductView extends React.Component {
  constructor() {
    super();

    this.state = {
      show: {},
      totalPrice:0,
      productList:[]
    };

    this.toggleListItem = this.toggleListItem.bind(this);
  }

  toggleListItem(itemId) {
    this.setState((prevState) => ({
      ...prevState,
      show: {
        ...prevState.show,
        [itemId]: !prevState.show[itemId]
      }
    }));
  }

  addToList(product) {
    this.setState((prevState) => ({
      ...prevState,
      totalPrice: this.state.totalPrice + product.product_price,
      productList: [...this.state.productList, product]
    }));
  }

  render() {
    return (
      <>
        <div className="row">
      {
        loadProductData.map((product) =>
          (         
            <div className="col-6 col-md-4" key={`${product.product_name}`}>
              <div className="product">
                <div className="row">
                  <img src={productImage} alt={product.product_name} height="250" />
                </div>
                <div className="row product-detail">
                  <h4>{product.product_name}</h4>
                  <p>{product.product_desc}</p>
                  <span key={product.id} className="toggle-btn" onClick={() => this.toggleListItem(product.id)}>
                  {this.state.show[product.id] ? (
                  <i className="arrow up"></i>
                  ) : <i className="arrow down"></i>
                  }
                  See information 
                  </span>
                  {this.state.show[product.id] ? (
                    <ul className="toggle-Data">
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Donec eget urna maximus, finibus dui euismod, convallis elit.</li>
                    </ul>
                  ) : null}
                </div>
                <div className="row product-price">
                  <div className="col text-left">
                    {product.product_price} :-
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <button type="button" className="btn btn-info" onClick={() => this.addToList(product)} disabled={this.state.productList.some(obj => obj.product_name === product.product_name)}>
                      {this.state.productList.some(obj => obj.product_name === product.product_name)? 'Added': 'Add to list'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
        ))
      }
      <div className="row wishlist">
          <WishlistView addedProduct={this.state.productList} totalPrice={this.state.totalPrice}/>
      </div>
   </div> 
      </>
    );
  }
}

export default ProductView;