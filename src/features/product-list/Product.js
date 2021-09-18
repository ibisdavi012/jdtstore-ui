import ProductDetails from "./ProductDetails";
import "./product.scss";

export default function Product() {
  return (
    <div className="product">
      <div className="product__actions">
        <input type="checkbox" name="" id="" className="delete-checkbox" />
      </div>
      <ProductDetails />
    </div>
  );
}
