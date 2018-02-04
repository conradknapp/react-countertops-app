import React, { Component } from "react";
import { AddProductForm } from "./AddProductForm";

export class Inventory extends Component {
  render() {
    return (
      <section className="inventory">
        <h2 className="inventory-title">Add to Inventory</h2>
        <AddProductForm addProduct={this.props.addProduct} />
        <button onClick={this.props.addSampleProducts}>Add Samples</button>
      </section>
    );
  }
}
