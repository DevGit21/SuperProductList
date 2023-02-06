//components/WishlistView.js

import React from 'react';

class WishlistView extends React.Component{
  render(){
      return(
        <div className="col text-center">
        <h2>Wishlist</h2>
        <ul className="list-group wishlist-list">
          {
            this.props.addedProduct.map((product) =>
            (   
            <li className="d-flex justify-content-center align-items-center" key={`${product.product_name}`}>
                <span className="p-name">{product.product_name}</span>
            </li>
            ))
          }               
        </ul>
        <div className="total-price">Total price: { this.props.totalPrice} :-</div>
      </div>   
      )
  }
}

export default WishlistView;
