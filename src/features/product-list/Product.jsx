import { useState } from "react";
import ProductActions from "./ProductActions";
import ProductDetails from "./ProductDetails";
import "./product.scss";

export default function Product({ product }) {
  const [selected, setSelected] = useState(false);
  
  const onChange = () => {   
    setSelected(!selected);
  };

  return (
    <div
      className={`product ${selected ? "selected" : ""}`}      
      onClick={(e) => {
        onChange();
      }}
    >
      <ProductActions productId={product.id} selected={selected} onChange={onChange} />
      <ProductDetails product={product} />
    </div>
  );
}
