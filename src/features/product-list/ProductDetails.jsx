import "./product-details.scss";
import ProductSpecifics from "./ProductSpecifics";

export default function ProductDetails({ product }) {
  return (
    <div className="product__details">
      <div className="product__sku">{product.sku}</div>
      <div className="product__description">{product.name}</div>
      <div className="product__price">$ {product.price}</div>
      <div className="product__info">
        <ProductSpecifics product={product} />
      </div>
    </div>
  );
}
