import React, { Component } from "react";

export class Product extends Component {
  render() {
    const { details, addToOrder, index } = this.props;
    return (
      <li
        className="product-list-item"
        onDoubleClick={() => console.log(details)}
      >
        <img className="product-image" src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <span className="price">{details.price}</span>
        <p>{details.notes}</p>
        <button onClick={() => addToOrder(index)}>Add To Order</button>
      </li>
    );
  }
}
