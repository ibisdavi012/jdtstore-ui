import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { select } from "./productListSlice";
import ProductActions from "./ProductActions";
import ProductDetails from "./ProductDetails";
import "./product.scss";

export default function Product({ product }) {
  const [selected, setSelected] = useState(false);

  const onCheckChanged = (checked) => {
    setSelected(checked);
  };

  const onProductClick = () => {
    setSelected(!selected);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const checkbox = document.querySelector(
      `#product-${product.id} input[type="checkbox"]`
    );
    checkbox.checked = selected;
    dispatch(select({ productId: parseInt(product.id), checked: selected }));

    // eslint-disable-next-line
  }, [selected]);

  return (
    <div
      className={`product ${selected ? "selected" : ""}`}
      id={`product-${product.id}`}
      onClick={(e) => {
        onProductClick();
      }}
    >
      <ProductActions productId={product.id} onCheckChanged={onCheckChanged} />
      <ProductDetails product={product} />
    </div>
  );
}
