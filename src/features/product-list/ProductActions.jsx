

export default function ProductActions({ productId, selected, onChange }) {

  return (
    <div className="product__actions">
      <input
        type="checkbox"
        name=""
        data-product={productId}
        className="delete-checkbox"
        onChange={(e) => onChange(e)}
        checked={selected}
      />
    </div>
  );
}
