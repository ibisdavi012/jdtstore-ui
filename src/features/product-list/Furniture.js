export default function Furniture({ product }) {
  return (
    <div className="product">
      <div className="product__actions">
        <input type="checkbox" name="" id="" className="delete-checkbox" />
      </div>

      <div className="product__details">
        <div className="product__id">{product.id}</div>
        <div className="product__description">{product.name}</div>
        <div className="product__price">${product.price}</div>
        <div className="product__info">
          Dimensions (cm): {product.height}x{product.width}x{product.length}
        </div>
      </div>
    </div>
  );
}
