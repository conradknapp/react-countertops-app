import React from "react";

export const AddProductForm = props => {
  const createProduct = event => {
    event.preventDefault();
    const product = {
      name: this.name.value,
      price: this.price.value,
      category: this.category.value,
      image: this.image.value,
      notes: this.notes.value
    };
    console.log(product);
    props.addProduct(product);
    this.productForm.reset();
  };

  return (
    <form
      ref={input => (this.productForm = input)}
      className="product-form"
      onSubmit={e => createProduct(e)}
    >
      <input
        className="input-name"
        ref={input => (this.name = input)}
        type="text"
        placeholder="Material"
      />
      <input
        className="input-price"
        ref={input => (this.price = input)}
        type="text"
        placeholder="Price"
      />
      <select
        className="select-category"
        ref={input => (this.category = input)}
      >
        <option value="1">Really want</option>
        <option value="2">Kinda want</option>
        <option value="3">Want least</option>
      </select>
      <textarea
        className="textarea-notes"
        ref={input => (this.notes = input)}
        placeholder="Your Notes"
      />
      <input
        className="input-image"
        ref={input => (this.image = input)}
        type="text"
        placeholder="Image"
      />
      <button className="product-form-button" type="submit">
        Create
      </button>
    </form>
  );
};
