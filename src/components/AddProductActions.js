import { Link } from "react-router-dom";
import "../sass/components/page-actions.scss";

export default function AddProductActions() {
  return (
    <>
      <Link to="/add-product">
        <button id="add-product-btn">+ Add</button>
      </Link>
      <button id="delete-product-btn">R Mass Delete</button>
    </>
  );
}
