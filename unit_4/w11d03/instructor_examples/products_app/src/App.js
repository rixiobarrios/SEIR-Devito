import React, { Component } from 'react';
import products from './data.js'
import AllTheThings from './components/AllTheThings.js'
import MyShoppingCart from './components/MyShoppingCart.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
  }

  // create a addToCart method that will
  // update the cart array with a product
  // using this.setState({})
  addToCart (item) {
    // WITHOUT binding this would return undefined
    // WITH binding it would return? App {}
    //console.log('this is this', this)
    //console.log('this is time from addToCart', item)
     this.setState({
       cart: [item, ...this.state.cart]
     })
   //console.log('this is cart in state', this.state.cart)
 }

 removeCartItem(index) {
  console.log('this is index', index)
 }
  // what is the one required method in component..render
  render() {
    return (
      <div className="App">

        <h1>Big Time Shopping</h1>

        <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
        {this.state.products.map((product, index) => {
          return (
            <AllTheThings
              product={product}
              key={index}
              handleAdd={this.addToCart}
            />
          )
        })}
        </div>
        <MyShoppingCart
          cart={this.state.cart}
        />
      </div>
    );
  }
}

export default App;
