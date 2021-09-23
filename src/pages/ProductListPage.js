import axios from "axios";
import React, { useState, useEffect } from "react";
import Page from "../common/Page";
import Loader from "../common/Loader";
import ProductGrid from "../features/product-list/ProductGrid";
import NoProducts from "../features/product-list/NoProducts";
import "./product-list-page.scss";

const productEndpoint = "http://localhost/products";

export default function ProductListPage() {
  const [state, setState] = useState({
    display: "loading",
    product_count: 0,
    products: [],
  });

  useEffect(() => {
    axios
      .get(productEndpoint)
      .then((response) => {
        console.log(response.data);
        setState({
          ...state,
          display: "ready",
          product_count: response.data.affected_rows,
          products: response.data.content,
        });
      })
      .catch((error) => {});
    // eslint-disable-next-line
  }, [state.display]);

  return (
    <Page title="Product List">
      {state.display === "loading" && <Loader />}
      {state.product_count > 0 && <ProductGrid />}
    </Page>
  );
}
