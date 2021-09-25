import ProductActions from "./ProductActions";
import ProductDetails from "./ProductDetails";
import "./product.scss";

export default function Product({ product }) {
  return (
    <div className="product" id={product.id}>
      <ProductActions productId={product.id} />
      <ProductDetails product={product} />
    </div>
  );
}
