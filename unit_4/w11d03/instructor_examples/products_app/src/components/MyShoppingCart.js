import React, { Component } from 'react';


class MyShoppingCart extends Component {
  render() {
    return (
      <div className="MyShoppingCart">
        <h2>Your Cart!</h2>
        {this.props.cart.map((item, index, arr) => {
          console.log('inside map', item, index, arr)
          return (
            
            <li key={index}>{item.name}</li>
          )
        })}
      </div>
    );
  }
}

export default MyShoppingCart;
