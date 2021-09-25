import "./no-products.scss";

export default function NoProducts() {
  return (
    <div className="no-products">
      <img src="sad_face.png" alt="sad face" />
      <p className="message">
        <span className="oops">Ooops!</span>
        It seems there a no products to display or somethig went wrong. Please,
        come back later and try again...
      </p>
    </div>
  );
}
