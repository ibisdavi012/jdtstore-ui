import axios from "axios";
import React, { useState, useEffect } from "react";
import Page from "../common/Page";
import Loader from "../common/Loader";
import ProductGrid from "../features/product-list/ProductGrid";
import NoProducts from "../features/product-list/NoProducts";
import "./product-list-page.scss";

const productEndpoint = "http://localhost/products";

export default function ProductListPage() {

  const [state, setState] = useState({loading:true,products: []});

  useEffect(() => {    
    axios.get(productEndpoint).then((result) => {            
        setState({...state, loading:false, products:result.data.content});                                 
    });    
  }, []);

  return (
    <Page title="Product List">    
      <ProductGrid loading={state.loading} products={state.products}/>
    </Page>
  );
}
