import React, { Component } from "react";

export class Home extends Component {
  goToStore(event) {
    const { history } = this.props;
    event.preventDefault();
    const collectionId = this.storeInput.value;
    history.push(`/collection/${collectionId}`);
  }

  render() {
    return (
      <main className="home-form-container">
        <form className="home-form" onSubmit={e => this.goToStore(e)}>
          <h2>Name your collection</h2>
          <input
            type="text"
            placeholder="Collection Name"
            ref={input => {
              this.storeInput = input;
            }}
          />
          <button type="submit">Create</button>
        </form>
      </main>
    );
  }
}
