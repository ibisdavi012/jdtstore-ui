import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../features/product-list/productListSlice";
import Page from "../common/Page";
import ProductGrid from "../features/product-list/ProductGrid";
import NoProducts from "../features/product-list/NoProducts";
import { config } from "../config";
import "./product-list-page.scss";

const productEndpoint = config.endpoints.products;

export default function ProductListPage() {
  const firstRender = useRef(true);
  const [state, setState] = useState({ loading: config.loader });
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
        window.scroll(0, 0);
      })
      .catch((error) => {
        setError(true);
      });
    firstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Page title="Product List">
      {error ? (
        <NoProducts />
      ) : (
        <ProductGrid
          loading={state.loading}
          products={products}
          firstRender={firstRender.current}
        />
      )}
    </Page>
  );
}
