import React, { Component } from "react";
import "./App.css";
import { Header, Order, Inventory } from "./components";
import base from "./base";

import { sampleProducts } from "./sample-products";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {},
      order: {}
    };

    this.addProduct = this.addProduct.bind(this);
    this.addSampleProducts = this.addSampleProducts.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(
      `${this.props.match.params.collectionId}/products`,
      {
        context: this,
        state: "products"
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    // localStorage.setItem(
    //   `product-${this.props.match.params.collectionId}`,
    //   JSON.stringify(nextState.order)
    // );
  }

  addProduct(product) {
    const products = { ...this.state.products };
    const timestamp = Date.now();
    products[`product-${timestamp}`] = product;

    this.setState({
      products
    });
  }

  addSampleProducts() {
    this.setState({
      products: sampleProducts
    });
  }

  addToOrder(key) {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  render() {
    return (
      <main className="App">
        <Header
          tagline="Marble Countertops"
          products={this.state.products}
          addToOrder={this.addToOrder}
        />
        <Order
          products={this.state.products}
          order={this.state.order}
          params={this.props.match.params}
        />
        <Inventory
          addProduct={this.addProduct}
          addSampleProducts={this.addSampleProducts}
          products={this.state.products}
        />
      </main>
    );
  }
}

export default App;
