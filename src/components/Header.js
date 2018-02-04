import React from "react";
import { Product } from "../components/Product";

export const Header = ({ tagline, products, addToOrder }) => {
  return (
    <header className="header">
      <h1>{tagline}</h1>
      <ul>
        {Object.keys(products).map(key => (
          <Product
            key={key}
            index={key}
            details={products[key]}
            addToOrder={addToOrder}
          />
        ))}
      </ul>
    </header>
  );
};
