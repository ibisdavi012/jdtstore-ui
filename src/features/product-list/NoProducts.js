import "./no-products.scss";

export default function NoProducs() {
  return (
    <div className="no-products">
      <img src="sad_face.png" />
      <p className="message">
        <span className="oops">Ooops!</span>
        No products to display. Please, come back later and try again later...
      </p>
    </div>
  );
}
