import React, { Component } from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

export class Order extends Component {
  constructor() {
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const product = this.props.products[key];
    const count = this.props.order[key];

    return (
      <li className="order-item" key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          sq/ft {product.name} -
        </span>
        <span>{count * product.price}</span>
        <hr />
      </li>
    );
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prev, key) => {
      const product = this.props.products[key];
      const count = this.props.order[key];
      if (product) {
        return prev + (count * product.price || 0);
      }
      return prev;
    }, 0);
    return (
      <section>
        <div className="order-section">
          <h2 className="order-title">ORDER</h2>
          <hr className="special-hr" />
          <CSSTransitionGroup
            component="ul"
            transitionName="order"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            className="order"
          >
            {orderIds.map(this.renderOrder)}
          </CSSTransitionGroup>
          <p>
            <strong>Total:</strong> {total}
          </p>
        </div>
      </section>
    );
  }
}
