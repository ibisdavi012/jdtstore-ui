import { FaRegFrown } from "react-icons/fa";
import "./no-products.scss";

export default function NoProducts({ message }) {
  return (
    <div className="no-products">
      <p className="sad-face">
        <FaRegFrown />
      </p>
      <p className="message">
        <span className="oops">Ooops!</span>
        {message}
      </p>
    </div>
  );
}

NoProducts.defaultProps = {
  message:
    "It seems there are no products to display. Please, try to ADD a product first and try again...",
};
