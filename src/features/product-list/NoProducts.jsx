import { FaRegFrown } from "react-icons/fa";
import "./no-products.scss";

export default function NoProducts() {
  return (
    <div className="no-products">
      <p className="sad-face">
        <FaRegFrown />
      </p>
      <p className="message">
        <span className="oops">Ooops!</span>
        It seems there a no products to display or somethig went wrong. Please,
        come back later and try again...
      </p>
    </div>
  );
}
