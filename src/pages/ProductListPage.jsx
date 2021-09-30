import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../features/product-list/productListSlice";
import Page from "../common/Page";
import ProductGrid from "../features/product-list/ProductGrid";
import { config } from "../config";
import "./product-list-page.scss";

const productEndpoint = config.endpoints.products;

export default function ProductListPage() {
  const lastProductCount = useRef(0);

  const [state, setState] = useState({
    loading: config.loader,
    noProducts: false,
    error: false,
  });

  const products = useSelector(
    (state) => state.productList.product_list.products
  );
console.log(products.length);
  const dispatch = useDispatch();

  const noProductsCondition = () => {
    setState({
      ...state,
      loading: false,
      noProducts: true,
      error: false,
    });
  };

  const loadProducts = (list) => {
    dispatch(load({ products: list }));
    setState({
      ...state,
      loading: false,
      noProducts: false,
      error: false,
    });
    window.scroll(0, 0);
    lastProductCount.current = list.length;
  };

  if (lastProductCount.current > 0 && !products.length) {
    noProductsCondition();
    lastProductCount.current = products.length || 0;
  }

  useEffect(() => {
    axios
      .get(productEndpoint)
      .then((result) => {
        if (!result.data.affected_rows) {
          noProductsCondition();
        } else {
          loadProducts(result.data.content);
        }
      })
      .catch((error) => {
        setState({ ...state, loading: false, noProducts: false, error: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page title="Product List">
      <ProductGrid
        noProducts={state.noProducts}
        loading={state.loading}
        products={products}
        error={state.error}
      />
    </Page>
  );
}
