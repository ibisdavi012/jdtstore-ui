import { useState } from "react";

import "../sass/components/add-product-form.scss";

export default function AddProductForm() {
  return (
    <form id="product_form">
      <div className="form-group">
        <label>SKU</label>
        <input id="sku" type="text" placeholder="Enter product SKU" />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input id="name" type="text" placeholder="Enter product name" />
      </div>
      <div className="form-group">
        <label>Price ($)</label>
        <input id="price" type="text" placeholder="Enter product price" />
      </div>
      <div className="form-group">
        <label>Type Switcher</label>
        <select id="productType">
          <option value="1">DVD</option>
          <option value="2">Book</option>
          <option value="3">Furniture</option>
        </select>
      </div>
      <div className="form-group"></div>
    </form>
  );
}
