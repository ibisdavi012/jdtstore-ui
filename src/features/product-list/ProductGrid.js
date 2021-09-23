import axios from "axios";
import { useState, useEffect } from "react";

import Product from "./Product";

import "./product-grid.scss";

const productsEndPoint = "http://localhost/products";

export default function ProductGrid() {
  useEffect(() => {
    axios
      .get(productsEndPoint)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="product-grid">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
