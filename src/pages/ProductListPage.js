import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../features/product-list/productListSlice";
import Page from "../common/Page";
import ProductGrid from "../features/product-list/ProductGrid";
import NoProducts from "../features/product-list/NoProducts";
import "./product-list-page.scss";

const productEndpoint = "http://localhost/products";

export default function ProductListPage() {
  const [state, setState] = useState({ loading: true });
  const [error, setError] = useState(false);

  const products = useSelector(
    (state) => state.productList.product_list.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(productEndpoint)
      .then((result) => {
        dispatch(load({ products: result.data.content }));
        setState({ ...state, loading: false });
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  return (
    <Page title="Product List">
      {error ? (
        <NoProducts />
      ) : (
        <ProductGrid loading={state.loading} products={products} />
      )}
    </Page>
  );
}
