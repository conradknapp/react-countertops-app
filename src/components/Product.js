import React, { Component } from "react";

export class Product extends Component {
  convertIntToPrice = int => {
    const price = String(int).replace(/(\d*)(\d{2})/, "$$$1.$2");
    return price;
  };

  render() {
    const { details, addToOrder, index } = this.props;
    return (
      <li
        className="product-list-item"
        onDoubleClick={() => console.log(details)}
      >
        <img className="product-image" src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <span className="price">{this.convertIntToPrice(details.price)}</span>
        <p>{details.notes}</p>
        <button onClick={() => addToOrder(index)}>Add To Order</button>
      </li>
    );
  }
}
